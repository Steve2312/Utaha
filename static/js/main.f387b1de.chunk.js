(this.webpackJsonputaha=this.webpackJsonputaha||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(2),c=n.n(a),r=n(3),i=n.n(r),l=n(4),o=n(5),j=n.p+"static/media/logo.e61ef273.jpg",d=n(0);var u=function(e){var t=e.name,n="Home"==t?"header":"header headerWithBack";return Object(d.jsxs)("div",{className:n,children:[Object(d.jsxs)("div",{className:"navigation",children:[Object(d.jsxs)("div",{className:"watermark",children:[Object(d.jsx)("img",{src:j,alt:"Logo"}),Object(d.jsx)("span",{children:"Utaha"})]}),Object(d.jsx)("h4",{children:t}),Object(d.jsx)("span",{className:"toggleThemeButton",onClick:function(){var e=document.getElementsByTagName("html")[0];switch(e.className){case"darkmode":e.className="lightmode",window.localStorage.setItem("theme","lightmode");break;case"lightmode":e.className="darkmode",window.localStorage.setItem("theme","darkmode");break;default:e.className="darkmode",window.localStorage.setItem("theme","darkmode")}},children:Object(d.jsx)("i",{className:"fas fa-adjust"})})]}),"Home"!==t?Object(d.jsx)("div",{className:"backWrapper",children:Object(d.jsxs)("span",{className:"back",onClick:function(){c.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))},children:[Object(d.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Go Back"]})}):null]})};var m=function(e){var t=e.data,n=e.correct;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"index",style:{backgroundColor:n?"var(--correct)":"var(--incorrect)"},children:Object(d.jsx)("i",{className:n?"fas fa-check":"fas fa-times"})}),Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"metadata",children:[Object(d.jsx)("span",{className:"title",children:t.questions.join("; ")}),Object(d.jsx)("span",{className:"text",children:t.answers.join("; ")})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"metadata",children:[Object(d.jsx)("span",{className:"subject",children:"Your Answer:"}),Object(d.jsx)("span",{className:"text",children:t.userinput})]})})]})};var b=function(e){var t=e.form;t.list=t.list.sort((function(e,t){return t.index-e.index}));var n=0,s=0,a=t.list.reduce((function(e,t){var a=t.userinput;return t.answers.includes(a)?(e.push(Object(d.jsx)(m,{data:t,correct:!0})),n++,e):(e.unshift(Object(d.jsx)(m,{data:t,correct:!1})),s++,e)}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{name:"Results: "+t.title}),Object(d.jsxs)("div",{className:"content expanded_header",children:[Object(d.jsx)("h1",{className:"title",children:t.title}),Object(d.jsxs)("p",{className:"subject",children:["Correct: ",n,", Incorrect: ",s]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"listWrapper",children:a})]})]})};var h=function(e){var t=e.form,n=Object(s.useState)(0),a=Object(o.a)(n,2),r=a[0],i=a[1];function l(){var e=document.getElementById("input");return""===e.value?e.style.border="2px solid red":(t.list[r].userinput=e.value,r+1!==m.length?(e.value="",i((function(e){return e+1}))):void c.a.render(Object(d.jsx)(b,{form:t}),document.getElementById("root")))}var j=t.title,m=t.list,h=m[r],x=m[r+1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{name:"Practice: "+j}),Object(d.jsxs)("div",{className:"practice",children:[Object(d.jsxs)("div",{className:"status",children:[Object(d.jsxs)("span",{className:"subject",children:["Progress ",r,"/",m.length]}),Object(d.jsx)("span",{className:"subject",children:r+1!==m.length?"Next word: "+x.questions.join(","):null})]}),Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)("h1",{children:h.questions.join(",")}),Object(d.jsx)("input",{id:"input",type:"text",placeholder:"Type your answer here",onKeyUp:function(e){"Enter"===e.key&&l()}}),Object(d.jsx)("button",{className:"button",id:"submit",onClick:l,children:"Submit"})]})]})]})};var x=function(e){var t=e.title,n=e.data.map((function(e){var t=e.replace(/\r?\n|\r/g,""),n=t.split(",").map((function(e){return Object(d.jsx)("td",{children:e})}));if(",,"!==t)return Object(d.jsx)("tr",{children:n})}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{name:"View: "+t}),Object(d.jsxs)("div",{className:"content expanded_header",children:[Object(d.jsx)("h1",{className:"title",children:t}),Object(d.jsx)("br",{}),Object(d.jsx)("table",{children:n})]})]})};function p(){return(p=Object(l.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./Genki Volume 1/"+t,e.next=3,fetch(n);case 3:return e.next=5,e.sent.text();case 5:s=e.sent.split("\n"),c.a.render(Object(d.jsx)(x,{title:t,data:s}),document.getElementById("root"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(i.a.mark((function e(t,n){var s,a,r,l,o,j,u,m,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="./Genki Volume 1/"+t,e.next=3,fetch(s);case 3:return e.next=5,e.sent.text();case 5:a=e.sent.split("\n"),r=[],l=[],j={title:t,list:[]},u=function(e){var t=a[e].replace(/\r?\n|\r/g,""),s=t.split(",");if(0===e){var c=n.split("-");return 2!==c.length?(o="Wrong mode format","break"):(c.forEach((function(e,t){e.split("+").forEach((function(e){var n=s.indexOf(e);switch(t){case 0:r.push(n);break;case 1:l.push(n)}}))})),r.includes(-1)||l.includes(-1)?(o="Wrong mode format","break"):"continue")}var i=r.map((function(e){return s[e]})).filter((function(e){return""!==e})),d=l.map((function(e){return s[e]})).filter((function(e){return""!==e}));",,"!==t&&i.length>0&&d.length>0&&j.list.push({questions:i,answers:d,index:e,userinput:null})},m=0;case 11:if(!(m<a.length)){e.next=20;break}if("break"!==(b=u(m))){e.next=15;break}return e.abrupt("break",20);case 15:if("continue"!==b){e.next=17;break}return e.abrupt("continue",17);case 17:m++,e.next=11;break;case 20:if(!o){e.next=24;break}return console.log(o),e.abrupt("return");case 24:j.list=j.list.sort((function(e,t){return.5-Math.random()})),c.a.render(Object(d.jsx)(h,{form:j}),document.getElementById("root"));case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.title,n=e.total,s=e.index;return Object(d.jsxs)("div",{className:"list",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsxs)("div",{className:"index",children:["#",s]}),Object(d.jsxs)("div",{className:"metadata",children:[Object(d.jsx)("span",{className:"title",children:t}),Object(d.jsxs)("span",{className:"subject",children:["Total words: ",n]})]})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("span",{className:"option",onClick:function(){return f(t,"English-Kanji+Japanese")},children:"EN to Kanji + JP"}),Object(d.jsx)("span",{className:"option",onClick:function(){return f(t,"Kanji-Kanji+Japanese")},children:"Kanji to Kanji + JP"}),Object(d.jsx)("span",{className:"option",onClick:function(){!function(e){p.apply(this,arguments)}(t)},children:"View List"})]})]})};var N=function(e){var t=e.data,n=t.results.map((function(e,t){return Object(d.jsx)(v,{title:e.name,total:e.total,index:t+1},e.name)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:t.title}),Object(d.jsx)("p",{className:"subject",children:t.description}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"listWrapper",children:n})]})};var g=function(){var e,t=Object(s.useState)(),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./lists.json");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,c(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a&&(e=a.lists.map((function(e){return Object(d.jsx)(N,{data:e},e.title)}))),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{name:"Home"}),Object(d.jsx)("div",{className:"content",children:e})]})};n(13);c.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f387b1de.chunk.js.map