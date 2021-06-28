/* eslint-disable prefer-arrow-callback */
const postcss = require('postcss');
const parseValue = require('postcss-value-parser');
const path = require('path');
const fs = require('fs');

// 目前只有color存在变量一对多语义值关系
const THEME_FILES = ['_color.scss'].map(f =>
  path.resolve(__dirname, '../assets/theme/semantic', f)
);

const GENERATE_THEME_REF_FILE = path.resolve(
  __dirname,
  '../src/theme/css-var-ref.ts'
);

const GENERATE_THEME_COMMENT_FILE = path.resolve(
  __dirname,
  '../src/theme/css-var-info.ts'
);

const CSS_VAR_PREFIX = '--theme-';
const CSS_RGB_VAR_PREFIX = CSS_VAR_PREFIX + 'rgb-';
const FILE_NOTES = `/**
 *  Auto generated by \`plugins/postcss-generate-css-var-ref.js\`.
 *  Describe the relationship between variables and css variables
 *  DO NOT EDIT
 */`;

const THEME_VARIABLE_NAMES = [
  '$title-colors',
  '$hint-colors',
  '$disabled-colors',
  '$section-colors',
  '$body-colors',
  '$success-colors',
  '$warning-colors',
  '$danger-colors',
  '$link-colors',
  '$default-colors',
  '$primary-colors',
  '$weak-link-colors',
  '$rate-colors',
];

function stringify(arg) {
  return JSON.stringify(
    arg,
    (_key, value) => {
      if (Object.prototype.toString.call(value) === '[object Set]') {
        return [...value];
      }
      return value;
    },
    2
  );
}

/**
 * This plugin runs on raw sass files, not css files.
 */
module.exports = postcss.plugin('postcss-plugin-vars', () => {
  const variableSemanticRelation = {}; // { key -> name, value -> names[] }
  const variableForRGBSemanticRelation = {};
  const commentSemanticRelation = [];
  const sourceRelation = {}; // { key -> index, value -> name }

  return root => {
    const isThemeFile = THEME_FILES.includes(root.source.input.file);
    root.walkDecls(decl => {
      const isThemeVar = THEME_VARIABLE_NAMES.includes(decl.prop);
      if (isThemeFile && isThemeVar) {
        const words = parseValue(decl.value);
        const prefixName = /[a-zA-Z]+[^-]/.exec(decl.prop)[0];
        let firstNodeSourceIndex;
        words.walk(node => {
          if (!firstNodeSourceIndex) {
            firstNodeSourceIndex = node.sourceIndex;
          }
          const needInsert = isColorObject(node);
          if (needInsert) {
            insertVariableRelation(
              CSS_VAR_PREFIX,
              prefixName,
              node,
              sourceRelation,
              variableSemanticRelation
            );
            insertVariableRelation(
              CSS_RGB_VAR_PREFIX,
              prefixName,
              node,
              sourceRelation,
              variableForRGBSemanticRelation
            );
          }
        });
        if (decl.raws && decl.raws.value) {
          const cssVarPrefixName = generateCSSVarPrefixName(
            CSS_VAR_PREFIX,
            prefixName,
            sourceRelation,
            firstNodeSourceIndex
          );
          const themeComments = generateComments(
            cssVarPrefixName,
            decl.raws.value
          );
          commentSemanticRelation.push.apply(
            commentSemanticRelation,
            themeComments
          );
        }
      }
    });
    fs.writeFileSync(
      GENERATE_THEME_REF_FILE,
      `${FILE_NOTES}

export const cssVarRef = ${stringify(variableSemanticRelation)};\n
export const cssRgbVarRef = ${stringify(variableForRGBSemanticRelation)};\n`,
      { encoding: 'utf-8' }
    );

    fs.writeFileSync(
      GENERATE_THEME_COMMENT_FILE,
      `${FILE_NOTES}

export const cssVarInfo = ${stringify(commentSemanticRelation)};\n`,
      { encoding: 'utf-8' }
    );
  };
});

function isColorObject(node) {
  const { type, nodes = [] } = node;
  if (type === 'function') {
    if (nodes.length) {
      return true;
    }
  }
}

function generateCSSVarPrefixName(
  cssVarPrefix,
  prefixName,
  sourceRelation,
  sourceIndex
) {
  const variablePrefixName = sourceRelation[sourceIndex] || prefixName || '';

  const cssVarPrefixName = variablePrefixName
    ? `${cssVarPrefix}${variablePrefixName}-`
    : `${cssVarPrefix}`;

  return cssVarPrefixName;
}

function generateComments(cssVarPrefixName, value) {
  const scss = value.scss;
  const variablePattern = /.*'(.+)'.*(\$.+),.*$/;
  const commentPattern = /\/\/(.+)/;
  const cssVariableInfos = scss.split('\n');
  const themeComments = [];
  for (
    let commentIndex = 0, variabledIndex = 1, infoLen = cssVariableInfos.length;
    variabledIndex < infoLen;

  ) {
    const comment = commentPattern.exec(cssVariableInfos[commentIndex]);
    const variablePair = variablePattern.exec(cssVariableInfos[variabledIndex]);

    if (comment && variablePair) {
      themeComments.push({
        cssVariable: cssVarPrefixName + variablePair[1],
        color: variablePair[2],
        comment: comment[1],
      });
    }
    commentIndex++;
    variabledIndex++;
  }
  return themeComments;
}

// 适配现有逻辑，深度为2
function insertVariableRelation(
  cssVarPrefix,
  prefixName,
  node,
  sourceRelation,
  variableSemanticRelation
) {
  const nodes = node.nodes;
  const matchedNodes = nodes.filter(node =>
    ['string', 'word', 'function'].includes(node.type)
  );

  const cssVarPrefixName = generateCSSVarPrefixName(
    cssVarPrefix,
    prefixName,
    sourceRelation,
    node.sourceIndex
  );

  for (let i = 0; i < matchedNodes.length - 1; i = i + 2) {
    const name = /[^\$]+/.exec(matchedNodes[i].value)[0];
    const value = matchedNodes[i + 1];
    if (value.type === 'word') {
      const basicName = value.value;

      const refName = `${cssVarPrefixName}${name}`;

      if (!variableSemanticRelation[basicName]) {
        variableSemanticRelation[basicName] = [];
      }

      variableSemanticRelation[basicName].push(refName);
    }
    if (value.type === 'function') {
      sourceRelation[value.sourceIndex] = name;
    }
  }
  return;
}