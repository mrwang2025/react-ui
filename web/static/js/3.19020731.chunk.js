/*! For license information please see 3.19020731.chunk.js.LICENSE.txt */
(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[3],{313:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(346),o=n(345),c=n(3);function a(){return Object(c.jsx)(r.a,{title:"Dashboard",data:o.a})}},344:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{name:"Children Supersoft mask",brand:"CARTERS",type:"mask",origin:"China",datePublished:"2021-10-10 12:12:12"},{name:"Adult Supersoft mask",brand:"CARTERS",type:"mask",origin:"China",datePublished:"2021-10-20 12:12:12"},{name:"Adult Supersoft mask low cost",brand:"CARTERS",type:"mask",origin:"Vietnam",datePublished:"2021-08-20 12:12:12"},{name:"Wood screw #2",brand:"POWERTOOL",type:"screws",origin:"USA",datePublished:"2020-08-20 12:12:12"},{name:"Wood screw #4",brand:"POWERTOOL",type:"screws",origin:"USA",datePublished:"2020-08-20 14:12:12"},{name:"DeWalt screw driver",brand:"DeWalt",type:"tools",origin:"USA",datePublished:"2020-07-20 14:12:12"},{name:"Ryobi impact driver",brand:"Ryobi",type:"tools",origin:"China",datePublished:"2020-06-20 14:12:12"}]},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(0),o=n.n(r),c=n(1),a=n(24),i=n(4);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n(34),f=n(51);function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n(71),y=n.n(d),b=n(47);function h(e,t){if(t&&("object"===y()(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(b.a)(e)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var O=n(344),j=n.n(O),m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(f.a)(e,t)}(n,e);var t=v(n);function n(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,o=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),o&&o({target:s(s({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var o="checked"in e?e.checked:e.defaultChecked;return r.state={checked:o},r}return Object(l.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,u=t.style,s=t.name,l=t.id,f=t.type,p=t.disabled,d=t.readOnly,y=t.tabIndex,b=t.onClick,h=t.onFocus,v=t.onBlur,O=t.onKeyDown,m=t.onKeyPress,g=t.onKeyUp,k=t.autoFocus,P=t.value,w=t.required,C=Object(i.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),x=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),S=this.state.checked,D=j()(n,r,(e={},Object(a.a)(e,"".concat(n,"-checked"),S),Object(a.a)(e,"".concat(n,"-disabled"),p),e));return o.a.createElement("span",{className:D,style:u},o.a.createElement("input",Object(c.a)({name:s,id:l,type:f,required:w,readOnly:d,disabled:p,tabIndex:y,className:"".concat(n,"-input"),checked:!!S,onClick:b,onFocus:h,onBlur:v,onKeyUp:g,onKeyDown:O,onKeyPress:m,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:P},x)),o.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?s(s({},t),{},{checked:e.checked}):null}}]),n}(r.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var g=m,k=n(3);function P(e){var t=e.title;e.data;return Object(k.jsxs)("div",{style:{width:"100%"},children:[Object(k.jsx)("div",{style:{fontWeight:"bold"},children:t}),Object(k.jsx)("div",{children:Object(k.jsx)(g,{})})]})}}}]);
//# sourceMappingURL=3.19020731.chunk.js.map