(this["webpackJsonpjson-graph-visualizer-js"]=this["webpackJsonpjson-graph-visualizer-js"]||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(1),i=n(35),s=n.n(i),l=n(100),c=(n(147),n(191)),o=n(189),u=n(188),d=n(192),h=function e(t){var n=[],a=Object.keys(t);return a&&a.length>0&&a.forEach((function(a){var r=t[a];if("object"===typeof r)if(Array.isArray(r)){var i=[];r.forEach((function(t,n){"object"===typeof t?i.push({name:"".concat(a,"(").concat(n,")"),children:e(t),value:1}):i.push({name:t,value:1})})),n.push({name:a,children:i,value:1})}else n.push({name:a,children:e(r),value:1});else n.push({name:a,children:[{name:r}],value:1})})),n},j=function(e){try{return JSON.parse(e),{valid:!0,error:""}}catch(t){return{valid:!1,error:t.toString()}}},m=function(e){var t=e.json,n=e.setJson,i=e.showGraph,s=Object(r.useState)(""),h=Object(l.a)(s,2),m=h[0],p=h[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=j(t),a=n.valid,r=n.error;a?i():p(r)},children:Object(a.jsxs)(c.a,{display:"flex",style:{margin:10},flexDirection:"column",children:[Object(a.jsx)(o.a,{id:"outlined-multiline-static",label:"Json",multiline:!0,style:{margin:10},rows:25,value:t,onChange:function(e){n(e.target.value)},variant:"outlined"}),m&&Object(a.jsxs)(d.a,{style:{margin:10},severity:"error",children:["Invalid Json | ",m]}),Object(a.jsx)(u.a,{variant:"outlined",color:"primary",style:{margin:10},type:"submit",children:"Submit"})]})})},p=n(120),v=n(122),b=n(128);p.c(b.a);var f=function(e){var t=e.json,n=e.hideGraph,i=Object(r.useRef)(null);return Object(r.useLayoutEffect)((function(){var e=p.a("graph",v.b),n=e.series.push(new v.a),a=h(JSON.parse(t));return n.data=[{name:"response",children:a,value:1}],n.dataFields.linkWith="linkWith",n.dataFields.name="name",n.dataFields.id="name",n.dataFields.value="value",n.dataFields.children="children",n.nodes.template.tooltipText="{name}",n.nodes.template.fillOpacity=1,n.nodes.template.label.text="{name}",n.fontSize=12,n.maxLevels=2,n.maxRadius=p.b(6),n.manyBodyStrength=-16,n.nodes.template.label.hideOversized=!0,n.nodes.template.label.truncate=!0,i.current=e,function(){e.dispose()}}),[]),Object(a.jsxs)(c.a,{style:{marginTop:10,marginRight:10,marginLeft:10},display:"flex",flexDirection:"column",children:[Object(a.jsx)("div",{id:"graph",style:{width:"100%",height:"550px"}}),Object(a.jsx)(u.a,{variant:"outlined",color:"primary",style:{margin:10},onClick:function(){return n()},children:"Back to Editor"})]})};var O=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)("{}"),c=Object(l.a)(s,2),o=c[0],u=c[1];return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(m,{json:o,setJson:u,showGraph:function(){i(!1)}}):Object(a.jsx)(f,{hideGraph:function(){i(!0)},json:o})})};s.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[151,1,4]]]);
//# sourceMappingURL=main.193c3e98.chunk.js.map