(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(0),o=n.n(i),b=n(12),s=n.n(b),l=(n(28),n(2)),j=n(3),d=j.a.h2(r||(r=Object(l.a)(["\nmargin-top: 30px;\n"]))),u=n(21),p=j.a.p(a||(a=Object(l.a)(["\nfont-size: 40px;\nfont-weight: 900;\nmargin: 20px 0px 30px 10px;\ndisplay: inline-flex;\n\n"]))),x=j.a.div(c||(c=Object(l.a)(["\nmargin-left: 20px;\n"]))),O=n(1);function f(e){var t=e.title,n=e.children;return Object(O.jsxs)(x,{children:[Object(O.jsx)(u.a,{size:30}),Object(O.jsx)(p,{children:t}),n]})}f.defaultProps={children:[]};var m,h,g,v,y=f,k=n(17),C=j.a.label(m||(m=Object(l.a)(["\ndisplay: block;\nmargin-right: 20px;\nmargin-bottom: 10px;\n"]))),w=j.a.input(h||(h=Object(l.a)(["\ndisplay: block;\nmargin-top: 10px;\n"]))),z=j.a.button(g||(g=Object(l.a)(["\nfont-size: 10px;\nfont-weight: 700;\nbackground-color: #fff;\nborder: 2px solid grey;\nmargin-top: 10px;\nmargin-bottom: 30px;\nwidth: 130px;\ncursor: pointer;\n\npadding: 5px 15px;\ntext-align: center;\n&:hover {\n    color: blue;\n}\n"]))),A=j.a.form(v||(v=Object(l.a)(["\nborder: 2px solid grey;\n  width: 300px;\n  height: 150px;\n  padding: 10px;\n\n"]))),S=n(14),J=n.n(S),Z=n(7),q=Object(Z.b)("contacts/addContact"),B=Object(Z.b)("contacts/deleteContact"),D=Object(Z.b)("contacts/filterContact"),F=n(6);var L,M,N=function(e){e.onSubmit;var t=Object(i.useState)(""),n=Object(k.a)(t,2),r=n[0],a=n[1],c=Object(i.useState)(""),o=Object(k.a)(c,2),b=o[0],s=o[1],l=Object(F.c)((function(e){return e.items})),j=Object(F.b)(),d=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":s(r);break;default:return}},u=function(){a(""),s("")};return Object(O.jsxs)(A,{onSubmit:function(e){if(e.preventDefault(),l.map((function(e){return e.name})).includes(r))alert("Sorry, but ".concat(r," is already in contacs."));else{var t={name:r,number:b,id:J.a.generate()};j(q(t)),u()}},children:[Object(O.jsxs)(C,{children:[" ","Name",Object(O.jsx)(w,{type:"text",name:"name",value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)(C,{children:["Number",Object(O.jsx)(w,{type:"tel",name:"number",value:b,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)(z,{type:"submit",children:"Add contact"})]})},P=j.a.li(L||(L=Object(l.a)(["\nfont-size: 15px;\ndisplay: flex;\nmargin: 20px 20px;\n\n"]))),T=j.a.button(M||(M=Object(l.a)(["\nmargin-left: 10px;\ncursor: pointer;\nbackground-color: #fff;\nborder: 1px solid grey;\n"]))),E=function(e){var t=e.items,n=e.filter.toLowerCase().trim();return t.filter((function(e){return e.name.toLowerCase().trim().includes(n)}))};var I,$,G=function(){var e=Object(F.c)(E),t=Object(F.b)();return Object(O.jsx)("ul",{children:e.map((function(e){var n=e.name,r=e.number,a=e.id;return Object(O.jsxs)(P,{children:[Object(O.jsxs)("p",{children:[n,": ",r]}),Object(O.jsx)(T,{type:"button",onClick:function(){return t(B(a))},children:"Delete"})]},J.a.generate())}))})},H=j.a.label(I||(I=Object(l.a)(["\ndisplay: inline-block;\nmargin-right: 20px;\nmargin-top: 20px;\n"]))),K=j.a.input($||($=Object(l.a)(["\ndisplay: flex;\nmargin-right: 20px;\nmargin-top: 10px;\n"])));var Q=function(){var e=Object(F.c)((function(e){return e.filter})),t=Object(F.b)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("form",{children:Object(O.jsxs)(H,{children:["Find contacts by name",Object(O.jsx)(K,{type:"text",name:"filter",value:e,onChange:function(e){return t(D(e.target.value))}})]})})})};var R,U=function(){return Object(O.jsxs)(y,{title:"Phonebook",children:[Object(O.jsx)(N,{}),Object(O.jsx)(d,{children:"Contacts"}),Object(O.jsx)(Q,{}),Object(O.jsx)(G,{title:"Contacts"})]})},V=n(15),W=n(22),X=n(4),Y=Object(Z.c)([],(R={},Object(V.a)(R,q,(function(e,t){return[].concat(Object(W.a)(e),[t.payload])})),Object(V.a)(R,B,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),R)),_=Object(Z.c)("",Object(V.a)({},D,(function(e,t){return t.payload}))),ee=Object(X.b)({items:Y,filter:_}),te=n(8),ne=n(19),re={key:"contacts",storage:n.n(ne).a},ae=Object(te.g)(re,ee),ce=Object(Z.a)({reducer:ae,middleware:Object(Z.d)({serializableCheck:{ignoredActions:[te.a,te.f,te.b,te.c,te.d,te.e]}}),devTools:!0}),ie={store:ce,persistor:Object(te.h)(ce)},oe=n(20);s.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(F.a,{store:ie.store,children:Object(O.jsx)(oe.a,{loading:null,persistor:ie.persistor,children:Object(O.jsx)(U,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4653b1d6.chunk.js.map