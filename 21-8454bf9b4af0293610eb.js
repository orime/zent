(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{646:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(610),o=n.n(a),c=n(611),r=n.n(c),i=n(612),h=n.n(i),s=n(613),u=n.n(s),d=n(291),p=n.n(d),l=n(614),m=n.n(l),f=n(615),g=n.n(f),b=n(616),y=n.n(b),v=n(0),j=n.n(v),k=n(114);function w(e){return j.a.createElement(e.tag,y()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function E(e){return j.a.createElement(w,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function z(e){return j.a.createElement(w,{tag:"style",html:e.style})}v.Component;var T=function(e){function t(){return o()(this,t),h()(this,u()(t).apply(this,arguments))}return m()(t,e),r()(t,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var t=document.querySelector('a[href="'.concat(e,'"]'));t&&Object(k.a)(document.documentElement,0,function e(t,n){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(n+=t.offsetTop),e(t.parentNode,n);return n}(t,-9))}}},{key:"render",value:function(){return j.a.createElement("div",{className:"zandoc-react-container",key:null},j.a.createElement(z,{style:""}),j.a.createElement(E,{html:'<h2 class="anchor-heading"><a href="#zent-2-1-0-sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="zent-2-1-0-sheng-ji-zhi-nan" class="anchor-point"></a>Zent 2.1.0 升级指南</h2>\n<p>这个版本主要升级了 React 版本到 15.5.x。</p>\n<h3 class="anchor-heading"><a href="#react-sheng-ji-dao-15-5-x">¶</a><a href="javascript:void(0)" id="react-sheng-ji-dao-15-5-x" class="anchor-point"></a>React 升级到 15.5.x</h3>\n<p>从 2.1.0 开始 Zent 的开发都是基于 React 15.5.x，和老版本的 React 一起使用时可能会在开发时出现 warning。</p>\n<p>详细的 React 升级方案请看<a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">官方的说明文档</a>。</p>\n<p>推荐使用 Facebook 提供的 <a href="https://github.com/reactjs/react-codemod">codemod</a> 来自动化迁移工作。</p>\n<h3 class="anchor-heading"><a href="#button-mo-ren-de-type-bian-geng">¶</a><a href="javascript:void(0)" id="button-mo-ren-de-type-bian-geng" class="anchor-point"></a>Button 默认的 <code>type</code> 变更</h3>\n<p>Button 提供了一个 <code>htmlType</code> 属性，这个属性在 2.1.0 之前是没有默认值的，行为和原生的 button 一致，会在 form 里触发 submit。</p>\n<p>在 2.1.0 版本开始，<code>htmlType</code> 设置了默认值为 <code>"button"</code>，所以原来在表单里依赖 submit 行为的地方需要加上 <code>htmlType="submit"</code>。</p>'}))}}]),t}(v.Component)}}]);