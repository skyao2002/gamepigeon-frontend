(this["webpackJsonpgamepigeon-frontend"]=this["webpackJsonpgamepigeon-frontend"]||[]).push([[0],{52:function(e,t,a){e.exports=a(82)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(57),a(58),a(19)),s=a(6),m=a(7),i=a(11),u=a(8);a(59);var d=function(e){var t,a=e.letters,n=[["","","",""],["","","",""],["","","",""],["","","",""]];return function(e){if(console.log("set grid called "+e),null==e)return n=[["","","",""],["","","",""],["","","",""],["","","",""]],void(t=4);t=Math.round(Math.sqrt(e.length));for(var a=0;a<t;a++)for(var r=0;r<t;r++)n[a][r]=e.charAt(a*t+r);console.log("set grid to values")}(a),r.a.createElement("div",null,n.map((function(e,a){return r.a.createElement(i.a,{key:a},e.map((function(e,n){return r.a.createElement(u.a,{className:"p-1",key:a*t+n},r.a.createElement("div",{className:"square"},r.a.createElement("h1",{className:"text-center letter"},e)))})))})))},h=a(49),E=a(36),p=a.n(E),f=a(12),v=a(24);var g=function(e){var t=e.currWord,a=e.size,n=Object(h.a)(),l=n.register,c=n.handleSubmit,o=n.errors,s=function(t){for(var n="",l=0;l<Math.pow(a,2);l++){var c=document.getElementsByName("letter")[l].value;if(c.toUpperCase()==c.toLowerCase())return r.a.createElement("h1",null,"You did not enter a character in one of the fields. Refresh the page");n+=c.toUpperCase()}e.onClick(n)},m=function(e){var t=p()(e.target).attr("tabindex")||0;t=Number(t);var a=document.getElementsByName("letter")[t].value;console.log(a),e.keyCode>=65&&e.keyCode<=90&&""!==a&&(t+=1);var n=p()("[tabindex="+t+"]");n[0]&&n.focus()};return null==t?r.a.createElement(f.a,{id:"forms",className:"py-3 text-center",onSubmit:c(s)},r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,Array.from({length:a}).map((function(t,n){return r.a.createElement("tr",{key:n},Array.from({length:a}).map((function(t,c){return r.a.createElement("td",{key:n*a+c},r.a.createElement("input",{placeholder:e.letters.charAt(n*a+c),maxLength:"1",name:"letter",ref:l({required:!0}),id:n*a+c,tabIndex:n*a+c,onKeyUp:m,type:"text",style:{height:"2.15em"}}))})))})))),o.letter&&r.a.createElement("p",null,"Some values are not filled"),r.a.createElement("p",null,"To reset all, refresh the page"),r.a.createElement(v.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")):r.a.createElement("div",null,r.a.createElement(f.a,{id:"forms",className:"py-1 text-center",onSubmit:c(s)},r.a.createElement(i.a,null,r.a.createElement(u.a,{lg:"9"},r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,Array.from({length:a}).map((function(t,n){return r.a.createElement("tr",{key:n},Array.from({length:a}).map((function(t,c){return r.a.createElement("td",{key:n*a+c},r.a.createElement("input",{defaultValue:e.letters.charAt(n*a+c),maxLength:"1",name:"letter",ref:l({required:!0}),id:n*a+c,tabIndex:n*a+c,onKeyUp:m,type:"text",style:{height:"2.15em"}}))})))}))))),r.a.createElement(u.a,{lg:"3"},o.letter&&r.a.createElement("p",null,"Some values are not filled"),r.a.createElement("p",null,"To reset all, refresh the page"),r.a.createElement(v.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")))),r.a.createElement("form",{className:"text-center",name:"next"},r.a.createElement("p",null,"current word: ")," ",r.a.createElement("h1",null," ",t," "),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"dark",onClick:function(){e.nextClick()}},"Next Word!"),r.a.createElement("p",null,"Click once and then use SPACE or ENTER")))};var b=function(e){var t=e.directions,a=e.size;if(Array.isArray(t)&&0==t.length)return r.a.createElement("div",null);for(var n=[],l=Math.floor(t[0]/a),c=t[0]%a,o=1;o<t.length;o++){var s=Math.floor(t[o]/a),m=100*c+50,i=100*l+50,u=100*(t[o]%a)+50,d=100*s+50;n.push([m,i,u,d]),console.log(m,i,u,d),l=Math.floor(t[o]/a),c=t[o]%a}return r.a.createElement("div",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",className:"mt-2"},r.a.createElement("circle",{cx:n[0][0],cy:n[0][1],r:"15",stroke:"black",strokeWidth:"3",fill:"red"}),r.a.createElement("defs",null,r.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto"},r.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ffcc99",stroke:"black"}))),n.map((function(e,t){return r.a.createElement("line",{x1:e[0],y1:e[1],x2:e[2],y2:e[3],stroke:"#990000",strokeWidth:"2",markerEnd:"url(#arrowhead)",key:t})}))))};var y=function(e){var t=e.words;return Array.isArray(t)&&0==t.length?r.a.createElement("div",null):r.a.createElement("div",{className:"border border-dark rounded p-3"},r.a.createElement("h3",null,"All Words"),r.a.createElement(i.a,null,t.map((function(t,a){return r.a.createElement(u.a,{key:t,xs:"6",sm:"4",md:"3",lg:"2"},e.normal?t:t[0]," ",e.direction?"(".concat(t[1],")"):"")}))))},x=a(21),k=a.n(x);var w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),s=o[0],h=o[1],E=Object(n.useState)(null),p=Object(m.a)(E,2),f=p[0],v=p[1],x=Object(n.useState)(0),w=Object(m.a)(x,2),S=w[0],N=w[1],j=Object(n.useState)(4),O=Object(m.a)(j,2),C=O[0],z=(O[1],Object(n.useState)([])),P=Object(m.a)(z,2),W=P[0],A=P[1];return Object(n.useEffect)((function(){""!=a&&W!=[]&&(h(W[S][1]),v(W[S][0]),N(S+1))}),[W]),r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(u.a,{md:"6"},r.a.createElement("h3",{className:"text-center"},"Enter your letters"),r.a.createElement(g,{onClick:function(e){!function(e){""!=e&&(l(e),k.a.post("".concat("https://gamepigeon.pythonanywhere.com","/wordhunt"),{letters:e,size:C}).then((function(e){A(e.data.answer)}),(function(e){console.log(e)})),N(0))}(e)},nextClick:function(){""!=a&&(h(W[S][1]),v(W[S][0]),N(S+1))},currWord:f,size:C,letters:a})),r.a.createElement(u.a,{md:"6"},r.a.createElement("div",{className:"parent px-1"},r.a.createElement(d,{letters:a}),r.a.createElement("div",{className:"child"},r.a.createElement(b,{directions:s,size:C}))))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(y,{words:W})))},S=a(22),N=a(84),j=a(33);var O=function(e){var t=e.colorScheme;return r.a.createElement(j.a,{collapseOnSelect:!0,expand:"md",variant:t,style:{fontSize:30,zIndex:5}},r.a.createElement(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(j.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(N.a,{style:{width:"100%",display:"flex",justifyContent:"space-evenly"}},r.a.createElement(N.a.Link,{as:o.b,to:"/"},"Home"),r.a.createElement(N.a.Link,{as:o.b,to:"/wordhunt"},"WordHunt"),r.a.createElement(N.a.Link,{as:o.b,to:"/wordbites"},"WordBites"),r.a.createElement(N.a.Link,{as:o.b,to:"/anagrams"},"Anagrams"))))};var C=function(e){var t=e.textColor;return r.a.createElement("footer",{className:"text-center text-xs p-3 fixed-bottom w-full",style:{backgroundColor:"transparent",color:t,zIndex:0}},"\xa9 Copyright Steven Yao 2020 - 2022")};var z=function(){return document.title="Visual WordHunt Solver",r.a.createElement("div",{className:"bg-light min-vh-100",style:{height:"100%"}},r.a.createElement(O,{colorScheme:"light"}),r.a.createElement(S.a,{className:"p-3 bg-white mt-3"},r.a.createElement("h1",{className:"text-center py-3"},"WordHunt Solver!"),r.a.createElement(w,null)),r.a.createElement(C,{bg:"dark"}))},P=a(48);var W=function(){return document.title="Gamepigeon Solvers",r.a.createElement("div",null,r.a.createElement(P.a,{type:"circle",bg:!0}),r.a.createElement(O,{colorScheme:"dark"}),r.a.createElement("div",{className:"fixed-top text-light d-flex flex-column align-items-center justify-content-center",style:{height:"100vh",zIndex:0}},r.a.createElement("h1",{class:"display-3"},"Gamepigeon Solvers"),r.a.createElement("h5",null,"by ",r.a.createElement("a",{href:"https://skyao2002.github.io/",className:"text-light"},"Steven Yao"))),r.a.createElement(C,{textColor:"white"}))},A=a(50),L=["word","direction","pieces"];function V(e){for(var t=e.word,a=e.direction,n=e.pieces,l=Object(A.a)(e,L),c="V"==a?t.length:3,o="V"==a?3:t.length,s=[],m=0;m<c;m++){for(var d=[],h=0;h<o;h++)d.push(" ");s.push(d)}var E=0;return"H"==a?n.forEach((function(e,a){var n=t[E];l.vertPieces.has(e)?(l.vertPieces.delete(e),s[1][E]=n,0==e.indexOf(n)?s[2][E]=e[1]:s[0][E]=e[0],E++):l.horizPieces.has(e)?(l.horizPieces.delete(e),s[1][E]=n,s[1][E+1]=t[E+1],E+=2):(l.singlePieces.delete(e),s[1][E]=n,E++)})):n.forEach((function(e,a){var n=t[E];l.horizPieces.has(e)?(l.horizPieces.delete(e),s[E][1]=n,0==e.indexOf(n)?s[E][2]=e[1]:s[E][0]=e[0],E++):l.vertPieces.has(e)?(l.vertPieces.delete(e),s[E][1]=n,s[E+1][1]=t[E+1],E+=2):(l.singlePieces.delete(e),s[E][1]=n,E++)})),r.a.createElement("div",null,0!=s.length&&s.map((function(e,n){return r.a.createElement(i.a,null,e.map((function(e){return r.a.createElement(u.a,{xs:"V"==a||t.length<5?"2":"",className:"p-1 ".concat(" "==e?"invisible":"")},r.a.createElement("div",{className:"bitesblock"},r.a.createElement("h1",{className:"text-center bitesletter"},e)))})))})))}var I=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),s=o[0],d=o[1],h=Object(n.useState)(""),E=Object(m.a)(h,2),p=E[0],g=E[1],b=Object(n.useState)(!1),x=Object(m.a)(b,2),w=x[0],S=x[1],N=Object(n.useState)([]),j=Object(m.a)(N,2),O=j[0],C=j[1],z=Object(n.useState)([]),P=Object(m.a)(z,2),W=P[0],A=P[1],L=Object(n.useState)([]),I=Object(m.a)(L,2),M=I[0],B=I[1],H=Object(n.useState)([]),U=Object(m.a)(H,2),G=U[0],q=U[1],T=Object(n.useState)(0),Y=Object(m.a)(T,2),J=Y[0],K=Y[1];return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(u.a,{md:"6"},r.a.createElement("div",{className:"parent px-5"},0!=G.length&&r.a.createElement("div",{className:""},r.a.createElement("h3",null,G[J][0]," ",r.a.createElement("span",null,r.a.createElement(v.a,{variant:"secondary",className:"float-right",onClick:function(){return K((J+1)%G.length)}},"Next"))),r.a.createElement(V,{word:G[J][0],direction:G[J][1],pieces:G[J][2],vertPieces:new Set(M),horizPieces:new Set(W),singlePieces:new Set(O)})))),r.a.createElement(u.a,{md:"6"},r.a.createElement(f.a.Group,{as:i.a,className:"mb-3"},r.a.createElement(f.a.Label,{column:!0,sm:"4"},"Single Letter Pieces"),r.a.createElement(u.a,{sm:"8",className:"mb-3"},r.a.createElement(f.a.Control,{type:"text",placeholder:"separate with space (like s g l)",defaultValue:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement(f.a.Label,{column:!0,sm:"4"},"Horizontal Pieces"),r.a.createElement(u.a,{sm:"8",className:"mb-3"},r.a.createElement(f.a.Control,{type:"text",placeholder:"separate with space (like ho ri zo)",defaultValue:s,onChange:function(e){return d(e.target.value)}})),r.a.createElement(f.a.Label,{column:!0,sm:"4"},"Vertical Pieces"),r.a.createElement(u.a,{sm:"8",className:"mb-3"},r.a.createElement(f.a.Control,{type:"text",placeholder:"separate with space (like ve ti ca)",defaultValue:p,onChange:function(e){return g(e.target.value)}})),r.a.createElement(u.a,{className:"text-center"},r.a.createElement(v.a,{variant:"primary",onClick:function(){S(!0);var e=a.trim().split(/\s+/).map((function(e){return e.toUpperCase()})),t=p.trim().split(/\s+/).map((function(e){return e.toUpperCase()})),n=s.trim().split(/\s+/).map((function(e){return e.toUpperCase()}));C(e),B(t),A(n),0!=e.length&&0!=t.length&&0!=n.length&&k.a.post("".concat("https://gamepigeon.pythonanywhere.com","/wordbites"),{singleLetterPieces:e,vertPieces:t,horizPieces:n}).then((function(e){var t=e.data.validWords;q(t),S(!1)}),(function(e){console.log(e)}))},disabled:w},"Submit"))))),r.a.createElement("br",null),r.a.createElement("div",{className:"mt-3"},r.a.createElement(y,{words:G,direction:!0})))};var M=function(){return document.title="Visual WordBites Solver",r.a.createElement("div",{className:"bg-light min-vh-100",style:{height:"100%"}},r.a.createElement(O,{colorScheme:"light"}),r.a.createElement(S.a,{className:"p-3 bg-white mt-3",style:{zIndex:3}},r.a.createElement("h1",{className:"text-center py-3"},"WordBites Solver!"),r.a.createElement(I,null)),r.a.createElement(C,{bg:"dark"}))};var B=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),s=o[0],d=o[1];return r.a.createElement("div",null,r.a.createElement(f.a.Group,{as:i.a,className:"mb-3 justify-content-md-center"},r.a.createElement(u.a,{xs:"6",className:"mb-3 w-75"},r.a.createElement(f.a.Control,{type:"text",placeholder:"Enter all letters together (like asdfgh)",defaultValue:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement(u.a,{xs:"12",className:"text-center"},r.a.createElement(v.a,{variant:"primary",onClick:function(){""!=a&&k.a.post("".concat("https://gamepigeon.pythonanywhere.com","/anagrams"),{letters:a}).then((function(e){d(e.data.validWords)}),(function(e){console.log(e)}))}},"Submit"))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(y,{words:s,normal:!0})))};var H=function(){return document.title="Visual Anagrams Solver",r.a.createElement("div",{className:"bg-light min-vh-100",style:{height:"100%"}},r.a.createElement(O,{colorScheme:"light"}),r.a.createElement(S.a,{className:"p-3 bg-white mt-3",style:{zIndex:3}},r.a.createElement("h1",{className:"text-center py-3"},"Anagrams Solver!"),r.a.createElement(B,null)),r.a.createElement(C,{bg:"dark"}))};var U=function(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/wordhunt",element:r.a.createElement(z,null)}),r.a.createElement(s.a,{path:"/wordbites",element:r.a.createElement(M,null)}),r.a.createElement(s.a,{path:"/anagrams",element:r.a.createElement(H,null)}),r.a.createElement(s.a,{path:"",exact:!0,element:r.a.createElement(W,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.a79938a9.chunk.js.map