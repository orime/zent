(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{666:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var s=t(608),e=t.n(s),o=t(609),p=t.n(o),c=t(291),r=t.n(c),l=t(610),u=t.n(l),i=t(611),d=t.n(i),k=t(612),m=t.n(k),h=t(613),g=t.n(h),f=t(614),b=t.n(f),w=t(0),y=t.n(w),v=t(113),E=t(83);function z(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,s=m()(n);if(a){var e=m()(this).constructor;t=Reflect.construct(s,arguments,e)}else t=s.apply(this,arguments);return d()(this,t)}}var I=function(){return y.a.createElement(E.i,{breads:[{name:"首页",href:"//www.youzan.com"},{name:"应用中心",href:"//www.youzan.com"},{name:"营销中心"}]})},B=function(){return y.a.createElement(E.i,null,y.a.createElement(E.i.Item,{name:"首页",href:"//www.youzan.com"}),y.a.createElement(E.i.Item,{name:"应用中心",href:"//www.youzan.com",className:"zent-demo-bread"}),y.a.createElement(E.i.Item,{name:"营销中心"}))},N=function(){return y.a.createElement(E.i,null,y.a.createElement(E.i.Item,null,y.a.createElement("a",{href:"//www.youzan.com"},"首页")),y.a.createElement(E.i.Item,null,y.a.createElement("span",null,"应用中心")),y.a.createElement("span",null,"营销中心"))};function _(n){return y.a.createElement(n.tag,b()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return y.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function D(n){return y.a.createElement(_,{tag:"style",html:n.style})}var R=function(n){u()(t,n);var a=z(t);function t(){var n;e()(this,t);for(var s=arguments.length,o=new Array(s),p=0;p<s;p++)o[p]=arguments[p];return n=a.call.apply(a,[this].concat(o)),g()(r()(n),"state",{showCode:!1}),g()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return p()(t,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,t||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(_,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(w.Component),C=function(n){u()(t,n);var a=z(t);function t(){return e()(this,t),a.apply(this,arguments)}return p()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(D,{style:""}),y.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#breadcrumb-mian-bao-xie">¶</a><a href="javascript:void(0)" id="breadcrumb-mian-bao-xie" class="anchor-point"></a>Breadcrumb 面包屑</h2>\n<p>面包屑，提供一个有层次的导航结构, 并标明当前位置。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>系统拥有超过两级以上的层级结构。</li>\n<li>需要告知用户『你在哪里』。</li>\n<li>需要向上导航的功能。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(R,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'首页\'</span><span class="token punctuation">,</span> href<span class="token punctuation">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'应用中心\'</span><span class="token punctuation">,</span> href<span class="token punctuation">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'营销中心\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(I)),y.a.createElement(R,{title:"可以直接调用 Breadcrumb.Item 组件",id:"Demoitem",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item name<span class="token operator">=</span><span class="token string">"首页"</span> href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item name<span class="token operator">=</span><span class="token string">"应用中心"</span> href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span> className<span class="token operator">=</span><span class="token string">"zent-demo-bread"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>营销中心<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(B)),y.a.createElement(R,{title:"用户自定义 Breadcrumb.Item 的内容，或者自定义面包屑的所有内容",id:"Democustomitem",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span><span class="token operator">></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>应用中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>营销中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(N)),y.a.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>breads</td>\n<td>数据</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#item">¶</a><a href="javascript:void(0)" id="item" class="anchor-point"></a>Item</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>内容</td>\n<td>string or React node</td>\n<td>-</td>\n</tr>\n<tr>\n<td>href</td>\n<td>链接</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(w.Component)}}]);