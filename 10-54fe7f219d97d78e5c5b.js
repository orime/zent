(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{628:function(n,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return m}));var a=s(20),t=s.n(a),o=s(0),c=s(1),i=s.n(c),r=s(46);function p(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.push.apply(s,a)}return s}function l(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){t()(n,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}function d(n){return Object(o.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function u(n){return Object(o.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function h(n){return Object(o.jsx)(d,{tag:"style",html:n.style})}c.Component;class m extends c.Component{componentDidMount(){var n=location.hash;if(n){var e=document.querySelector('a[href="'.concat(n,'"]'));e&&Object(r.rc)(document.documentElement,0,function n(e,s){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(s+=e.offsetTop),n(e.parentNode,s);return s}(e,-9))}}render(){return i.a.createElement("div",{className:"zandoc-react-container",key:null},i.a.createElement(h,{style:'img[alt="zent-components"] {\n  width: 523px;\n  height: 435px;\n}'}),i.a.createElement(u,{html:'<h1 class="anchor-heading"><a href="#zent">¶</a><a href="javascript:void(0)" id="zent" class="anchor-point"></a>Zent</h1>\n<p>Zent ( \\ˈzent\\ ) is a React component library developed and used at Youzan. Zent provides a collection of essential UI components and lots of useful domain specific components.</p>\n<p>We have more than 50 components for now and we\'re releasing more.</p>\n<p>Our goal is making React development faster and simpler.</p>\n<h3 class="anchor-heading"><a href="#showcase">¶</a><a href="javascript:void(0)" id="showcase" class="anchor-point"></a>Showcase</h3>\n<p><img src="https://img.yzcdn.cn/public_files/2018/04/17/ab32128950146c5932c267cbc19f9363.png" alt="zent-components"></p>\n<h3 class="anchor-heading"><a href="#features">¶</a><a href="javascript:void(0)" id="features" class="anchor-point"></a>Features</h3>\n<ul>\n<li>High quality React components</li>\n<li>Builtin TypeScript support</li>\n<li>Supports custom themes</li>\n<li>Import JavaScript and styles only if they are used</li>\n<li>Handmade icon font</li>\n</ul>\n<h3 class="anchor-heading"><a href="#supported-environments">¶</a><a href="javascript:void(0)" id="supported-environments" class="anchor-point"></a>Supported Environments</h3>\n<ul>\n<li>React >= 17</li>\n<li>Supports server-side rendering(SSR)</li>\n</ul>\n<h3 class="anchor-heading"><a href="#browsers">¶</a><a href="javascript:void(0)" id="browsers" class="anchor-point"></a>Browsers</h3>\n<ul>\n<li>Firefox >= 78(ESR)</li>\n<li>Chrome >= 49</li>\n<li>Safari >= 10</li>\n<li>Edge</li>\n<li>No IE support</li>\n</ul>\n<h4 class="anchor-heading"><a href="#polyfills-needed-for-supported">¶</a><a href="javascript:void(0)" id="polyfills-needed-for-supported" class="anchor-point"></a>Polyfills needed for supported browsers</h4>\n<ul>\n<li><code>es6.object.assign</code></li>\n<li><code>es6.object.is</code></li>\n<li><code>es6.string.ends-with</code></li>\n<li><code>es6.string.starts-with</code></li>\n<li><code>es6.string.includes</code></li>\n<li><code>es7.string.trim-left</code></li>\n<li><code>es7.string.trim-right</code></li>\n<li><code>es6.array.from</code></li>\n<li><code>es6.array.of</code></li>\n<li><code>es6.array.fill</code></li>\n<li><code>es6.array.find</code></li>\n<li><code>es6.array.find-index</code></li>\n<li><code>es7.array.includes</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#install">¶</a><a href="javascript:void(0)" id="install" class="anchor-point"></a>Install</h3>\n<pre><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> zent</code></pre>\n<h3 class="anchor-heading"><a href="#using-components">¶</a><a href="javascript:void(0)" id="using-components" class="anchor-point"></a>Using Components</h3>\n<pre><code class="language-jsx"><span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Import style</span>\n<span class="token keyword module">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#import-as-necessary">¶</a><a href="javascript:void(0)" id="import-as-necessary" class="anchor-point"></a>Import as Necessary</h3>\n<p><a href="babel-plugin-zent">babel-plugin-zent</a> is a babel plugin that can help reduce bundle size, it does code transformations like this:</p>\n<pre><code class="language-js"><span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Transforms into</span>\n\n<span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Button</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent/es/button\'</span><span class="token punctuation">;</span></code></pre>\n<p>This plugin is useful if you are developing a library based on Zent, or if you only use a small part of Zent components.</p>\n<p>You can find detailed instructions in its <a href="babel-plugin-zent">documentation</a>.</p>\n<p>Using ESM with tree-shaking enabled bundler is also possible.</p>\n<h3 class="anchor-heading"><a href="#theme">¶</a><a href="javascript:void(0)" id="theme" class="anchor-point"></a>Theme</h3>\n<p>Please refer to <a href="theme">Themes</a></p>'}))}}}}]);