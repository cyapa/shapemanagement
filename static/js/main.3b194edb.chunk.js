(this.webpackJsonpshapemanagement=this.webpackJsonpshapemanagement||[]).push([[0],{29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),l=(a(34),a(20)),i=a(18),s=(a(35),a(36),a(62));function d(e){var t=e.children,a=e.value,n=e.index;return o.a.createElement("div",{id:"tabpanel-".concat(n),"aria-labelledby":"tab-".concat(n),class:"container"},a===n&&o.a.createElement(s.a,{p:3},t))}function x(e){var t=e.idx,a=e.color,n=e.txt,r=e.onClick,c={float:"left",width:"130px",height:"90px",padding:"10px 10px 10px 10px",margin:"10px 10px 10px 10px",boxShadow:e.isactive?"0 5px 5px #424242, 0 6px 6px #424242":"",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",background:a};return o.a.createElement("div",{id:t,style:c,onClick:r},n)}function E(e){var t=e.idx,a=(e.color,e.txt),n=e.onClick,r={float:"left",width:"100px",height:"100px",padding:"10px 10px 10px 10px",margin:"10px 10px 10px 10px",boxShadow:e.isactive?"0 5px 5px #424242, 0 6px 6px #424242":"",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",background:"blue"};return o.a.createElement("div",{id:t,style:r,onClick:n},a)}function u(e){var t=e.idx,a=(e.color,e.txt),n=e.onClick;e.isactive;return o.a.createElement("div",{id:t,style:{float:"left",width:"0",height:"0",borderLeft:"50px solid transparent",borderRight:"50px solid transparent",borderBottom:"100px solid #555",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",margin:"10px 10px 10px 10px"},onClick:n},a)}var p=a(65),m=a(63),b=a(59),v=a(60),f=["LIGHTCORAL","LIGHTPINK","MOCCASIN","PALEGOLDENROD","PLUM","SLATEBLUE","SEAGREEN","STEELBLUE","DARKTURQUOISE","BURLYWOOD","PERU","SILVER","SLATEGRAY","MISTYROSE","ANTIQUEWHITE","ROSYBROWN","CORNFLOWERBLUE"];function h(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement((function(){var e=o.a.useState(0),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState([{id:0,color:"STEELBLUE"},{id:1,color:"STEELBLUE"},{id:2,color:"STEELBLUE"}]),c=Object(i.a)(r,2),s=c[0],g=c[1],L=o.a.useState("STEELBLUE"),C=Object(i.a)(L,2),O=C[0],S=C[1],k=o.a.useState(-1),R=Object(i.a)(k,2),T=R[0],y=R[1];return o.a.createElement("div",null,o.a.createElement(p.a,{position:"static"},o.a.createElement(m.a,{value:a,onChange:function(e,t){n(t)},"aria-label":"Box tabs",class:"tabs"},o.a.createElement(b.a,Object.assign({label:"Boxes"},h(0))),o.a.createElement(b.a,Object.assign({label:"Select Color"},h(1))),o.a.createElement(b.a,Object.assign({label:"Summary"},h(2))))),o.a.createElement(d,{value:a,index:0},o.a.createElement("div",{class:"box-control"},o.a.createElement("div",{className:"btn"},o.a.createElement(v.a,{variant:"contained",onClick:function(){g((function(e){return[].concat(Object(l.a)(e),[{id:e.length,color:O}])}))}}," Add")),o.a.createElement("div",{className:"btn"},o.a.createElement(v.a,{variant:"contained",onClick:function(){var e=s.length-1;T>-1&&(e=T);var t=Object(l.a)(s);t.splice(e,1),g(t),y(-1)},color:"secondary"}," Delete")),o.a.createElement("div",{className:"btn"},o.a.createElement(v.a,{variant:"contained",onClick:function(){return y(-1)}}," Deselect All"))),s.map((function(e,t){return o.a.createElement("div",null,o.a.createElement(x,{idx:e.id,color:e.color,isactive:t===T,onClick:function(){return y(t)},txt:t}))})),s.length>0?o.a.createElement("div",{class:"box-control-txt"},"There are ",s.length," boxe(s)"):o.a.createElement("div",{class:"box-control-txt"},"There are no boxes to display"),o.a.createElement(E,null,"test"),o.a.createElement(u,null,"Test")),o.a.createElement(d,{value:a,index:1},o.a.createElement("div",{className:"box-wrap"},o.a.createElement(x,{color:O,onClick:function(){var e=f[Math.floor(Math.random()*f.length)];if(S(e),T>-1){var t=Object(l.a)(s);t[T].color=e,g(t)}},txt:O,isactive:!0}))),o.a.createElement(d,{value:a,index:2},o.a.createElement("div",null,o.a.createElement("div",{class:"box-control-txt"},"Total Boxes : ",s.length),o.a.createElement("div",{class:"box-control-txt"},"Curent Color : ",O))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.3b194edb.chunk.js.map