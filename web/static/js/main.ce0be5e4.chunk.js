(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{308:function(e,t,n){var c={"./dashboard.js":[313,3],"./simple.js":[314,4]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=308,e.exports=r},311:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(37),i=n.n(a),s=(n(76),n(32)),o=n(343),j=n(342),l=n(67),h=n(336),d=n(341),u=n(60),b=n(338),O=n(339),x=n(61),f=n.n(x),m=n(56),p=n.n(m),v=(n(81),n(82),n(23)),g=n(65),y=n(8),w=n(12),S=n(13),E=n(21),C=n(20),k=n(3),L=function(e){Object(E.a)(n,e);var t=Object(C.a)(n);function n(e){var c;return Object(w.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(S.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(k.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.a.Component),D=n(59),F=n(68),I=n(334);function M(e){var t=e.estimateSeconds,n=Object(F.a)(e,["estimateSeconds"]),r=Object(c.useState)(0),a=Object(s.a)(r,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){var e=100/(5*t),n=setInterval((function(){o((function(t){return 100===t?100:Math.min(t+e,100)}))}),200);return function(){clearInterval(n)}}),[]),Object(k.jsx)(I.a,Object(D.a)({variant:"determinate",value:i},n))}var z=n(340),N=n(337),P=["dashboard","simple"];var R=Object(h.a)((function(e){return Object(d.a)({header:{flexGrow:1,marginLeft:10,marginRight:40},content:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0,height:"100%"}})}));function T(){return Object(k.jsx)("div",{children:"Welcome"})}function B(e){var t=Object(u.a)(),n=R(t);return Object(k.jsxs)("div",{className:n.header,children:[Object(k.jsx)("span",{style:{paddingRight:10,fontWeight:"bold"},children:"@mrwang2025/react-ui"}),e.match.params.x||""]})}function _(e){var t=e.title;return Object(k.jsxs)(j.a,{href:t||"#",target:"_self",color:"inherit",style:{display:"flex",alignItems:"center",justifyContent:"left",color:"royalblue",padding:5},children:[Object(k.jsx)(f.a,{style:{fontSize:16,marginRight:5}}),t]})}function J(){return Object(k.jsx)("div",{style:{width:"90%",height:"100%",paddingLeft:10},children:P.map((function(e){return Object(k.jsx)(_,{title:e},"example-".concat(e))}))})}function U(e){var t=Object(c.useState)("loading..."),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var t=e.match.params.x||"";fetch("".concat("","/code/").concat(t,".js")).then((function(e){return e.text()})).then((function(e){console.log(e),a(e)})).catch((function(e){console.error(e),a("Can't find the example source code")}))}),[e.match.params.x]),Object(k.jsx)(z.a,{language:"javascript",style:N.a,children:r})}function W(e){var t=Object(c.useState)(null),a=Object(s.a)(t,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){var t=e.match.params.x||"";if(P.includes(t.toLowerCase()))try{var c=r.a.lazy((function(){return n(308)("./".concat(t,".js"))}));c&&o(Object(k.jsx)(c,{}))}catch(a){o(Object(k.jsxs)("div",{children:["Error! Can not find example ",t]}))}}),[e.match.params.x]),Object(k.jsx)(c.Suspense,{fallback:Object(k.jsx)(M,{estimateSeconds:3}),children:i})}var G=function(){var e=Object(u.a)(),t=R(e);return Object(k.jsx)(g.a,{children:Object(k.jsx)(b.a,{theme:Object(l.a)({overrides:{MuiPaper:{rounded:{borderRadius:5},elevation2:{boxShadow:["none"]}},MuiButton:{root:{textTransform:"none"}}}}),children:Object(k.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[Object(k.jsx)("div",{children:Object(k.jsx)(o.a,{position:"relative",children:Object(k.jsx)(O.a,{children:Object(k.jsxs)(y.c,{children:[Object(k.jsx)(y.a,{path:"/:x",component:B}),Object(k.jsx)(y.a,{path:"/",component:B})]})})})}),Object(k.jsx)("div",{style:{flex:2,overflow:"auto"},children:Object(k.jsxs)(v.a,{orientation:"vertical",style:{with:"100%",height:"100%"},children:[Object(k.jsx)(v.b,{minSize:200,size:300,children:Object(k.jsx)("div",{children:Object(k.jsx)(J,{})})}),Object(k.jsx)(v.c,{propagate:!0}),Object(k.jsx)(v.b,{children:Object(k.jsx)("div",{style:{height:"100%"},children:Object(k.jsx)(p.a,{children:Object(k.jsx)("main",{className:t.content,children:Object(k.jsxs)(v.a,{children:[Object(k.jsx)(v.b,{children:Object(k.jsx)(L,{children:Object(k.jsxs)(y.c,{children:[Object(k.jsx)(y.a,{path:"/:x",component:W}),Object(k.jsx)(y.a,{path:"/",component:T})]})})}),Object(k.jsx)(v.c,{propagate:!0}),Object(k.jsx)(v.b,{children:Object(k.jsxs)(y.c,{children:[Object(k.jsx)(y.a,{path:"/:x",component:U}),Object(k.jsx)(y.a,{path:"/",component:T})]})})]})})})})})]})})]})})})},q=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,347)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(G,{})}),document.getElementById("root")),q()},76:function(e,t,n){}},[[311,1,2]]]);
//# sourceMappingURL=main.ce0be5e4.chunk.js.map