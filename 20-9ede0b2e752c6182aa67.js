(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{726:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var o=n(608),a=n.n(o),r=n(609),c=n.n(r),i=n(291),u=n.n(i),d=n(610),s=n.n(d),l=n(611),h=n.n(l),p=n(612),f=n.n(p),m=n(613),y=n.n(m),g=n(614),v=n.n(g),b=n(0),w=n.n(b),k=n(113);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return h()(this,n)}}function T(e){return w.a.createElement(e.tag,v()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function E(e){return w.a.createElement(T,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function j(e){return w.a.createElement(T,{tag:"style",html:e.style})}b.Component;var x=function(e){s()(n,e);var t=R(n);function n(){return a()(this,n),t.apply(this,arguments)}return c()(n,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var t=document.querySelector('a[href="'.concat(e,'"]'));t&&Object(k.a)(document.documentElement,0,function e(t,n){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(n+=t.offsetTop),e(t.parentNode,n);return n}(t,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(j,{style:""}),w.a.createElement(E,{html:'<h2 class="anchor-heading"><a href="#upgrade-to-zent-2-1-0">¶</a><a href="javascript:void(0)" id="upgrade-to-zent-2-1-0" class="anchor-point"></a>Upgrade to Zent 2.1.0</h2>\n<p>We upgraded React to 15.5.x in this version.</p>\n<h3 class="anchor-heading"><a href="#react-15-5-x">¶</a><a href="javascript:void(0)" id="react-15-5-x" class="anchor-point"></a>React 15.5.x</h3>\n<p>All development of Zent will be based on React 15.5.x starting from 2.1.0.</p>\n<p>There may be warnings if you use Zent with old version of React.</p>\n<p>You can read the <a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">offical React upgrade guide</a>.</p>\n<p>We recommend Facebook\'s <a href="https://github.com/reactjs/react-codemod">codemod</a> to automate the upgrade.</p>\n<h3 class="anchor-heading"><a href="#button">¶</a><a href="javascript:void(0)" id="button" class="anchor-point"></a>Button</h3>\n<p><code>Button</code>\'s default <code>htmlType</code> has changed. <code>htmlType</code> defaults to <code>"button"</code> starting from 2.1.0.</p>\n<p><code>Button</code> has an <code>htmlType</code> prop，this prop has no default value before 2.1.0, just like the native <code>button</code>\'s <code>type</code> attribute. So if you put a <code>Button</code> into a <code>form</code>, it will trigger form submition when clicked before 2.1.0.</p>\n<p>You may need to add <code>htmlType="submit"</code> in your forms if you relied on old behavior.</p>'}))}}]),n}(b.Component)}}]);