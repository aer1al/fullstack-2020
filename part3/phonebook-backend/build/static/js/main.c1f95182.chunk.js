(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),u=t(14),o=t.n(u),s=t(3),i=function(e){var n=e.search,t=e.setSearch;return Object(c.jsxs)(c.Fragment,{children:["filter shown with",Object(c.jsx)("input",{value:n,onChange:function(e){t(e.target.value)}})]})},d=function(e){var n=e.addPerson,t=e.newName,r=e.setNewName,a=e.newNumber,u=e.setNewNumber;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name:"," ",Object(c.jsx)("input",{value:t,onChange:function(e){return r(e.target.value)}})]}),Object(c.jsxs)("div",{children:["number:"," ",Object(c.jsx)("input",{value:a,onChange:function(e){return u(e.target.value)}})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){var n=e.search,t=e.persons,r=e.handleClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("ul",{style:{padding:"0",list_style_type:"none"},children:[!n&&t.map((function(e){return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("li",{children:[e.name," ",e.number]},e.name),Object(c.jsx)("button",{onClick:function(){return r(e)},children:"delete"})]},e.name)})),n&&t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(c.jsxs)("li",{children:[e.name," ",e.number]},e.name)}))]})})},j=function(e){var n=e.className,t=e.message;return null===t?null:Object(c.jsx)("div",{className:n,children:t})},b=t(4),h=t.n(b),m="/api/persons/",f=function(){return h.a.get(m).then((function(e){return e.data}))},O=function(e){return h.a.post(m,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(m).concat(e)).then((function(e){return e.data}))},x=function(e,n){var t="".concat(m).concat(e);return h.a.put(t,n).then((function(e){return e.data}))},v=(t(38),function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),b=o[0],h=o[1],m=Object(r.useState)(""),v=Object(s.a)(m,2),w=v[0],g=v[1],N=Object(r.useState)(""),k=Object(s.a)(N,2),y=k[0],S=k[1],C=Object(r.useState)(null),A=Object(s.a)(C,2),F=A[0],P=A[1],E=Object(r.useState)("message"),J=Object(s.a)(E,2),L=J[0],T=J[1];Object(r.useEffect)((function(){f().then((function(e){return a(e)}))}),[]);var _=function(e,n){T(e),P(n),setTimeout((function(){P(null)}),1800)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{className:L,message:F}),Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(i,{search:y,setSearch:S}),Object(c.jsx)("h2",{children:"Add a new"}),Object(c.jsx)(d,{addPerson:function(e){e.preventDefault();var n={name:b,number:w},c=t.find((function(e){return e.name===n.name}));c?c.number!==n.number?window.confirm("".concat(c.name," is already added to the phonebook, replace their old number with a new one?"))?x(c.id,n).then((function(){f().then((function(e){return a(e)})),h(""),g(""),_("message","Added new number (".concat(c.name," : ").concat(c.number,")"))})):alert("".concat(c.name,"'s details were not updated")):alert("".concat(c.name," is already added to the phonebook")):O(n).then((function(e){a(t.concat(e)),h(""),g(""),_("message","Added ".concat(n.name))}))},newName:b,setNewName:h,newNumber:w,setNewNumber:g}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(l,{search:y,persons:t,handleClick:function(e){p(e.id).then((function(){a(t.filter((function(n){return n.id!==e.id}))),_("error","deleted ".concat(e.name))})).catch((function(){P("".concat(e.name," was already removed from the phonebook")),setTimeout((function(){P(null)}),5e3),a(t.filter((function(n){return n.id!==e.id}))),T("error")}))}})]})});o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c1f95182.chunk.js.map