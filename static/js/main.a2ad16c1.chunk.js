(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),o=n.n(i),r=n(3),s=n(4),d=n(6),u=(n(13),n(0));var l=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(null),O=Object(s.a)(b,2),p=O[0],m=O[1],x=Object(c.useState)(""),f=Object(s.a)(x,2),h=f[0],v=f[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&a(t)}),[]),Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)("div",{className:"heading-wrapper",children:Object(u.jsx)("h1",{children:"Todo App"})}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),text:l,completed:!1};""===l?alert("Please enter some text"):a(Object(r.a)(n).concat(t)),j("")},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:l,placeholder:"Add your new todo"}),Object(u.jsx)("button",{type:"submit",children:"+"})]}),n.map((function(e){return Object(u.jsxs)("div",{className:"todos-container",children:[p===e.id?Object(u.jsx)("input",{className:"edit-box",type:"text",onChange:function(e){return v(e.target.value)},value:h}):Object(u.jsx)("div",{className:"todo-text"}),Object(u.jsx)("button",{className:"del-btn",onClick:function(){return function(e){var t=Object(r.a)(n).filter((function(t){return t.id!==e}));a(t)}(e.id)},children:Object(u.jsx)(d.a,{})}),Object(u.jsx)("input",{name:"done",id:"done",type:"checkbox",onChange:function(){return function(e){var t=Object(r.a)(n).map((function(t){return t.id===e&&(t.completed=!t.completed),t}));a(t)}(e.id)},checked:e.completed}),Object(u.jsx)("label",{htmlFor:"done",className:"line",children:e.text}),p===e.id?Object(u.jsx)("button",{className:"submit-edit-btn",onClick:function(){return function(e){var t=Object(r.a)(n).map((function(t){return t.id===e&&(t.text=h),t}));a(t),m(null),v("")}(e.id)},children:Object(u.jsx)(d.c,{})}):Object(u.jsx)("button",{className:"edit-btn",onClick:function(){return m(e.id)},children:Object(u.jsx)(d.b,{})})]},e.id)}))]})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a2ad16c1.chunk.js.map