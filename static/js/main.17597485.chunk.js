(this["webpackJsonpvenbest-test"]=this["webpackJsonpvenbest-test"]||[]).push([[0],{24:function(e,a,t){e.exports=t(55)},29:function(e,a,t){},30:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),s=(t(29),t(2)),u=t(23),i=(t(30),t(7)),o=t.n(i),m=t(19),p=t(20),d=t.n(p),f={users:[],filteredUsers:[]},E="appReducer/SET_USERS",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(s.a)({},e,{users:a.payload,filteredUsers:a.payload});case"appReducer/FILTER_USERS":var t=e.users.filter((function(e){for(var t in a.payload)if(a.payload.hasOwnProperty(t)&&""!==a.payload[t]){var n=void 0;switch(t){case"age":n=e[t]!==+a.payload[t];break;case"sex":n=!a.payload[t][e[t]];break;default:n=!e[t].toLowerCase().includes(a.payload[t].toLowerCase().trim())}if(n)return!1}return!0}));return a.payload.name||a.payload.lastname||a.payload.age||!a.payload.sex.m||!a.payload.sex.f?e.filteredUsers=t:e.filteredUsers=e.users,Object(s.a)({},e,{filteredUsers:e.filteredUsers});default:return e}},b=t(4),h=function(){var e=Object(b.b)(),a=Object(n.useState)({sex:{m:!0,f:!0}}),t=Object(u.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){e(function(){var e=Object(m.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://venbest-test.herokuapp.com/").then((function(e){return e.data}));case 3:t=e.sent,a({type:E,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(n.useEffect)((function(){e({type:"appReducer/FILTER_USERS",payload:c})}),[e,c]);var i=Object(b.c)((function(e){return function(e){return e.appReducer.filteredUsers}(e)}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"filter"},r.a.createElement("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"\u0418\u043c\u044f",r.a.createElement("input",{onChange:function(e){l(Object(s.a)({},c,{name:e.target.value}))}}))),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",r.a.createElement("input",{onChange:function(e){l(Object(s.a)({},c,{lastname:e.target.value}))}}))),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",r.a.createElement("input",{onChange:function(e){l(Object(s.a)({},c,{age:e.target.value}))}}))),r.a.createElement("div",{className:"checkBoxContainer"},r.a.createElement("span",null,"\u041f\u043e\u043b"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){l(Object(s.a)({},c,{sex:Object(s.a)({},c.sex,{m:e.target.checked})}))},name:"male",type:"checkbox",checked:c.sex.m}),r.a.createElement("span",null,"\u043c")),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){l(Object(s.a)({},c,{sex:Object(s.a)({},c.sex,{f:e.target.checked})}))},name:"female",type:"checkbox",checked:c.sex.f}),r.a.createElement("span",null,"\u0436")))),r.a.createElement("div",{className:"users"},i.map((function(e,a){var t="m"===e.sex?"\u041c\u0443\u0436\u0441\u043a\u043e\u0439":"\u0416\u0435\u043d\u0441\u043a\u0438\u0439";return r.a.createElement("div",{key:a,className:"user"},r.a.createElement("div",{className:"userName"},r.a.createElement("div",null,e.name," "),r.a.createElement("div",{className:"userLastName"},e.lastname)),r.a.createElement("div",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",e.age),r.a.createElement("div",null,"\u041f\u043e\u043b: ",t))})))))},O=t(3),y=t(22),g=Object(O.c)({appReducer:v}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,x=Object(O.e)(g,j(Object(O.a)(y.a)));l.a.render(r.a.createElement(b.a,{store:x},r.a.createElement(h,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.17597485.chunk.js.map