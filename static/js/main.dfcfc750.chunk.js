(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),s=c(16),r=c.n(s),l=(c(37),c(11)),o=c(5),d=c(18),u=c(19),j=c(23),b=c(21),h="IS_READY",m=function(e){return{type:h,payload:e}},p="SET_CURRENT_PAGE_SECTION",O="SET_PAGE_SECTION",v="SET_ANIMATION",f=function(e){return{type:p,payload:e}},x=function(e){return{type:v,payload:e}},N=c(2),y=(c(42),{setReady:m,setAnimation:x,setCurrentPageSection:f}),g=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(e){var i;return Object(d.a)(this,c),(i=t.call(this,e)).togglePageHandler=function(e){e.preventDefault();var t=i.props.pageCurrentSection;i.props.setAnimation(!0),t?document.body.classList.remove("openPage"):document.body.classList.add("openPage"),i.props.history.push("/room"),setTimeout((function(){i.props.setAnimation(!1),i.props.setCurrentPageSection(!t)}),500)},i.state={title:["H","e","l","l","o"].map((function(e,t){return Object(n.jsx)("span",{className:"title-char",children:e},t)})),subTitle:"who is here?"},i}return Object(u.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsxs)("div",{className:"description",children:[Object(n.jsx)("div",{className:"title",children:this.state.title}),Object(n.jsx)("div",{className:"subtitle fadeIn",children:this.state.subTitle})]}),Object(n.jsx)("div",{className:"sherlok fadeIn"}),Object(n.jsx)("div",{className:"tip "+(!1===this.props.isReady?" isHidden":""),children:Object(n.jsx)(l.b,{to:"/room",onClick:function(t){return e.togglePageHandler(t)},className:"tipText "+(!0===this.props.isReady?" isActive":""),children:" Please, press me "})})]})}}]),c}(a.a.Component),S=Object(N.b)((function(e){return{isReady:e.scroll.isReady,isAnimation:e.pages.isAnimation,pageCurrentSection:e.pages.pageCurrentSection}}),y)(g),k="SET_TIMER",C="SET_HINTS",T="SET_COUNTER",E="SET_MISTAKE",A=(c(44),{setReady:m,setAnimation:x,setCurrentPageSection:f,setTimer:function(e){return{type:k,payload:e}},setHints:function(e){return{type:C,payload:e}},setMistake:function(e){return{type:E,payload:e}}}),w=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).goToStart=function(){n.props.history.replace("/"),n.props.setMistake({type:"SET_MISTAKE",payload:0})},n}return Object(u.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"cv-intro",children:[Object(n.jsxs)("div",{className:"cv-description",children:[Object(n.jsxs)("div",{className:"cv-title",children:["Mission ",this.props.timer?"complete":"failed"]}),Object(n.jsxs)("div",{className:"cv-subtitle",children:["Your time: ",this.props.timer?this.props.timer:"Ooops!"]}),!this.props.timer&&Object(n.jsx)("div",{className:"cv-link",onClick:function(t){return e.goToStart(t)},children:"Try again"})]}),this.props.timer&&Object(n.jsx)("div",{className:"cv isActive",children:Object(n.jsxs)("div",{className:"photoContainer",children:[Object(n.jsx)("div",{className:"photo"}),Object(n.jsx)("div",{className:"name",children:" Nikita Mavrychev "}),Object(n.jsxs)("div",{className:"cv-information",children:[Object(n.jsx)("div",{className:"cv-russia",children:"\u0412 \u0434\u0435\u0442\u0441\u0442\u0432\u0435 \u0431\u044b\u043b \u0431\u043b\u0430\u0433\u043e\u0432\u043e\u0441\u043f\u0438\u0442\u0430\u043d\u043d\u044b\u043c \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u043c, \u043d\u043e \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f \u0441 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430\u043c\u0438 \u0438 \u043f\u043e\u043a\u0430\u0442\u0438\u043b\u0441\u044f... \u0412\u0435\u0436\u043b\u0438\u0432, \u043f\u0440\u0430\u0432\u0434\u0438\u0432, \u0434\u043e\u0431\u0440. \u0416\u0435\u043d\u0430\u0442."}),Object(n.jsxs)("div",{className:"section-wrapper clearfix",children:[Object(n.jsx)("h3",{className:"section-title",children:"Skills"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"skill-percentage",children:"HTML / HTML5"}),Object(n.jsx)("li",{className:"skill-percentage",children:"CSS / CSS3 / SASS / Bootstrap"}),Object(n.jsx)("li",{className:"skill-percentage",children:"Javascript"}),Object(n.jsx)("li",{className:"skill-percentage",children:"Vue"}),Object(n.jsx)("li",{className:"skill-percentage",children:"Svelte"}),Object(n.jsx)("li",{className:"skill-percentage",children:"React"})]})]}),Object(n.jsxs)("div",{className:"section-wrapper clearfix",children:[Object(n.jsx)("h3",{className:"section-title",children:"Contacts"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"contact-item",children:Object(n.jsx)("a",{className:"contact-item git",href:"https://github.com/Nikitoring",children:"github"})}),Object(n.jsx)("li",{className:"contact-item",children:Object(n.jsx)("a",{className:"contact-item linked",href:"https://www.linkedin.com/in/nikita-mavrychev-61a3b91bb/",children:"LinkedIn"})}),Object(n.jsx)("li",{className:"contact-item",children:Object(n.jsx)("a",{className:"contact-item telegram",href:"https://t.me/Nikitoring",children:"telegram"})}),Object(n.jsx)("li",{className:"contact-item",children:Object(n.jsx)("a",{className:"contact-item mail",href:"mailto:nikitoring88@gmail.com",children:"nikitoring88@gmail.com"})})]})]})]})]})}),!this.props.timer&&Object(n.jsx)("div",{className:"cv isFake",children:Object(n.jsx)("div",{className:"photoContainer",children:Object(n.jsx)("div",{className:"fakeInformation"})})})]})}}]),c}(a.a.Component),I=Object(N.b)((function(e){return{isReady:e.scroll.isReady,timer:e.achives.timerInterval,health:e.health.health}}),A)(w),D=c(4);c(45),c(46);function M(e){var t=Object(i.useState)(0),c=Object(D.a)(t,2),a=c[0],s=c[1],r=Object(i.useState)(0),l=Object(D.a)(r,2),o=l[0],d=l[1],u=Object(i.useState)(0),j=Object(D.a)(u,2),b=j[0],h=j[1],m=Object(N.c)();return Object(i.useEffect)((function(){var t=null;return e.isActiveTimer&&(t=setInterval((function(){60===o&&(s((function(e){return e+1})),d(0)),60===b&&(d((function(e){return e+1})),h(0)),h((function(e){return e+1}))}),10)),m({type:"SET_TIMER",payload:"".concat(a<10?"0"+a:a," : ").concat(o<10?"0"+o:o," : ").concat(b<10?"0"+b:b)}),function(){return clearInterval(t)}}),[m,e.isActiveTimer,a,o,b]),Object(n.jsx)("div",{className:"timer ".concat(e.isActiveTimer?"isActive":""),children:Object(n.jsxs)("div",{className:"time-block",children:[a<10&&0," ",a," : ",o<10&&0," ",o," : ",b]})})}c(47);var R=function(e){var t=[1,2,3],c=Object(N.d)((function(e){return e.health.health}));return Object(n.jsx)("ul",{className:"healthBlock",children:t.map((function(e){return Object(n.jsx)("li",{id:e,className:"sherlockOne ".concat(e>t.length-c?"isLost":"")},e)}))})},_=(c(48),c(49),function(e){var t=Object(N.d)((function(e){return e.achives.hints})),c=Object(N.c)();return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"checkbox",className:"input",id:"hotspot-".concat(e.id),name:"inputs",checked:e.isChecked,onChange:function(){c({type:"SET_HINTS",payload:t.map((function(t){return t.id===e.id&&(t.isChecked=!t.isChecked),t}))})}}),Object(n.jsx)("label",{htmlFor:"hotspot-".concat(e.id),children:Object(n.jsx)("div",{id:"b-".concat(e.id),className:"button",children:e.label})})]})}),H=(c(50),c(51),function(e){var t=Object(i.useState)(""),c=Object(D.a)(t,2),s=c[0],r=c[1],l=Object(i.useState)(null),o=Object(D.a)(l,2),d=o[0],u=o[1],j=Object(i.useState)(""),b=Object(D.a)(j,2),h=b[0],m=b[1],p=Object(i.useState)(!1),O=Object(D.a)(p,2),v=O[0],f=O[1],x=Object(i.useState)(!1),y=Object(D.a)(x,2),g=y[0],S=y[1],k=Object(i.useState)(null),C=Object(D.a)(k,2),T=C[0],E=C[1],A=Object(N.d)((function(e){return e.achives.hints})),w=Object(N.d)((function(e){return e.health.health})),I=Object(N.c)(),M=a.a.useRef(),R=a.a.useRef(),_=a.a.useRef();Object(i.useEffect)((function(){M.current&&null===d&&setTimeout((function(){M.current&&M.current.focus()&&M.current.focus()}),500),M.current&&M.current.addEventListener("keyup",(function(e){13===e.keyCode&&(u(s),r(""),R.current&&(M.current.readOnly=!0,R.current.focus()))})),_.current&&_.current.addEventListener("keyup",(function(t){13===t.keyCode&&"exit"===t.target.value&&e.closeDialog()}));return function(){M.current&&_.current&&(M.current.removeEventListener("keyup",(function(){})),_.current.removeEventListener("keyup",(function(){})))}}),[d,M,_,g,s,e,h,I,w]);return Object(n.jsx)("div",{className:"forTerminal",children:Object(n.jsxs)("div",{className:"terminal",children:[Object(n.jsxs)("section",{className:"terminal-bar",children:[Object(n.jsxs)("div",{className:"terminal-buttons",children:[Object(n.jsx)("button",{className:"termina-btn exit",onClick:function(){return e.closeDialog(),void I({type:"SET_HINTS",payload:A.map((function(t){return t.id===e.id&&(t.terminalValue=s),t}))})},children:"\u2715"}),Object(n.jsx)("button",{className:"termina-btn",children:"\u2500"}),Object(n.jsx)("button",{className:"termina-btn",children:"\u25fb"})]}),Object(n.jsx)("p",{className:"terminal-bar-user",children:"user@ubuntu"})]}),Object(n.jsxs)("section",{className:"terminal-body",children:[Object(n.jsx)("div",{className:"terminal-text",children:"Welcome to Ubuntu"}),Object(n.jsx)("div",{className:"terminal-text-info",children:"Please click on the line below, enter your name and press Enter"}),Object(n.jsxs)("div",{className:"terminal-propmpt",children:[Object(n.jsx)("span",{className:"propmpt-user",children:"user@ubuntu:"}),Object(n.jsx)("span",{className:"propmpt-tilda",children:"~"}),Object(n.jsx)("span",{className:"propmpt-dollar",children:"$"}),Object(n.jsx)("input",{ref:M,className:"propmpt-input",value:s,type:"text",onChange:function(e){return function(e){r(e.target.value)}(e)}})]}),d&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"terminal-text",children:["Welcome, ",d]}),Object(n.jsx)("div",{className:"terminal-text-question",children:"Who invented this OS?"}),Object(n.jsx)("div",{className:"terminal-text-variant",children:"1 - Bill Gates "}),Object(n.jsx)("div",{className:"terminal-text-variant",children:"2 - Justin Bieber "}),Object(n.jsx)("div",{className:"terminal-text-variant",children:"3 - Linus Torvalds "}),Object(n.jsx)("div",{className:"terminal-text-variant",children:"4 - Vladimir Putin "}),Object(n.jsxs)("div",{className:"terminal-text-info",children:['Please, enter the correct number below and press "Enter"'," "]}),Object(n.jsxs)("div",{className:"terminal-propmpt",children:[Object(n.jsx)("span",{className:"propmpt-user",children:"user@ubuntu:"}),Object(n.jsx)("span",{className:"propmpt-tilda",children:"~"}),Object(n.jsx)("span",{className:"propmpt-dollar",children:"$"}),Object(n.jsx)("input",{ref:R,className:"propmpt-input",value:h,type:"text",onChange:function(e){return m(e.target.value)},onKeyDown:function(e){return function(e){13!==e.keyCode&&"Enter"!==e.key||(Number(h)&&3===Number(h)||"3"===h?E(Object(n.jsx)("div",{className:"terminal-text complete-text",children:"Correct answer"})):""===h&&null===h||(E(Object(n.jsx)("div",{className:"terminal-text mistake-text",children:"You lost one sherlok"})),I({type:"SET_MISTAKE",payload:w+1})),f(!0),_.current&&(R.current.readOnly=!0,_.current.focus()))}(e)}})]})]}),v&&Object(n.jsxs)("div",{children:[T,Object(n.jsxs)("div",{className:"terminal-text-info",children:['Please, press close button or enter command "exit" on the line below and press "Enter"'," "]}),Object(n.jsxs)("div",{className:"terminal-propmpt",children:[Object(n.jsx)("span",{className:"propmpt-user",children:"user@ubuntu:"}),Object(n.jsx)("span",{className:"propmpt-tilda",children:"~"}),Object(n.jsx)("span",{className:"propmpt-dollar",children:"$"}),Object(n.jsx)("input",{ref:_,className:"propmpt-input",type:"text",onChange:function(e){return function(e){"exit"===e.target.value&&S(!g)}(e)}})]})]})]})]})})}),L=(c(52),function(e){var t=e.content,c=e.closeDialog,a=Object(i.useState)([]),s=Object(D.a)(a,2),r=s[0],l=s[1],o=Object(i.useState)(null),d=Object(D.a)(o,2),u=d[0],j=d[1],b=Object(N.d)((function(e){return e.health.health})),h=Object(N.c)(),m=Object(i.useCallback)((function(e){e.target.value&&Number(e.target.value)===t.trueAnswer?j(Object(n.jsx)("div",{className:"rightChoice",children:"Right choice!"})):(j(Object(n.jsxs)("div",{className:"badChoice",children:["You missed!",Object(n.jsx)("div",{children:"You lost one sherlok"})]})),h({type:"SET_MISTAKE",payload:b+1}))}),[t.trueAnswer,h,b]);return Object(i.useEffect)((function(){if(t.variants&&t.variants.length&&!u){var e=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=[e[c],e[t]];e[t]=n[0],e[c]=n[1]}return e}(t.variants);e&&e.length&&l(e.map((function(e){return Object(n.jsxs)("div",{className:"variant",children:[Object(n.jsx)("input",{type:"radio",id:"".concat(t.title,"-").concat(e.id),name:"select",value:e.id,onChange:function(e){return m(e)}}),Object(n.jsx)("label",{className:"labelVariant",htmlFor:"".concat(t.title,"-").concat(e.id),children:Object(n.jsx)("p",{children:e.value})})]},e.id)})))}}),[t,l,m,u]),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"modalContent",children:[Object(n.jsx)("div",{className:"hint-title",children:t.title}),Object(n.jsx)("div",{className:"hint-body",children:t.body}),Object(n.jsx)("div",{className:"variantsBlock",children:r}),u&&Object(n.jsxs)("div",{className:"choiceModal",children:[Object(n.jsx)("span",{className:"close-button",onClick:function(){c()},children:"\u2715"}),u]})]})})}),F=c(22),P=(c(26),{opacity:.25}),B=function(e){var t=Object(i.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1];return Object(n.jsx)("div",{style:a?P:{},className:"dragBox",draggable:!0,onDragStart:function(t){t.dataTransfer.setData("drag-item",e.dataItem)},onDragEnd:function(){return s(!1)},children:e.children})},Y=c(6),K={backgroundColor:"#cccccc",opacity:.5},V=function(e){var t=Object(i.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1];return Object(n.jsx)("div",{onDragOver:function(t){t.preventDefault(),t.dataTransfer.dropEffect=e.dropEffect},onDrop:function(t){var c=t.dataTransfer.getData("drag-item");c&&e.onItemDropped(c)},onDragEnter:function(t){t.dataTransfer.dropEffect=e.dropEffect,s(!0)},onDragLeave:function(){return s(!1)},style:Object(Y.a)({width:"100%",height:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap"},a?K:{}),children:e.children})},q=function(e){var t=e.content,c=e.closeDialog,a=Object(i.useState)([]),s=Object(D.a)(a,2),r=s[0],l=s[1],o=Object(i.useState)(null),d=Object(D.a)(o,2),u=d[0],j=d[1],b=Object(N.c)(),h=Object(N.d)((function(e){return e.health.health}));return Object(i.useEffect)((function(){r&&5===r.length&&("HeaderLeftSidebarMainRightSidebarFooter"===r.join("")?j(Object(n.jsx)("div",{className:"rightChoice",children:"Right choice!"})):(j(Object(n.jsxs)("div",{className:"badChoice",children:["You missed!",Object(n.jsx)("div",{children:"You lost one sherlok"})]})),b({type:"SET_MISTAKE",payload:h+1})))}),[r,h,b]),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"modalContent",children:[Object(n.jsx)("div",{className:"hint-title",children:t.title}),Object(n.jsx)("div",{className:"hint-body",children:t.body}),Object(n.jsx)("div",{className:"draDropContainer",children:["Header","Footer","Main","LeftSidebar","RightSidebar"].map((function(e){return Object(n.jsx)(B,{dataItem:e,children:Object(n.jsx)("div",{children:e})},e)}))}),Object(n.jsx)("div",{className:"draDropLayout",children:Object(n.jsx)(V,{onItemDropped:function(e){return l([].concat(Object(F.a)(r),[e]))},dropEffect:"link",children:r.map((function(e){return Object(n.jsx)("div",{className:"dragContainer".concat(e),children:e},e)}))})}),u&&Object(n.jsxs)("div",{className:"choiceModal",children:[Object(n.jsx)("span",{className:"close-button",onClick:function(){c()},children:"\u2715"}),u]})]})})},W=function(e){var t=Object(i.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1],r=Object(N.d)((function(e){return e.achives.hints})),l=Object(N.c)();Object(i.useEffect)((function(){e.isChecked&&s(!0)}),[s,e.isChecked]);var o=function(){s(!a),l({type:"SET_HINTS",payload:r.map((function(t){return t.id===e.id&&(t.isFound=!t.isFound),t}))})};return Object(n.jsxs)("div",{id:"content-".concat(e.id),className:"content ".concat(a?"isActive":""),children:["information"===e.type&&Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"close-button",onClick:function(){o()},children:"\u2715"}),Object(n.jsxs)("div",{className:"modalContent",children:[Object(n.jsx)("div",{className:"hint-title",children:e.content.title}),Object(n.jsx)("div",{className:"hint-body",children:e.content.body})]})]}),"terminal"===e.type&&Object(n.jsx)(H,{stateDialog:a,id:e.id,closeDialog:o}),"dragAndDrop"===e.type&&Object(n.jsx)(q,{id:e.id,content:e.content,closeDialog:o}),"question"===e.type&&Object(n.jsx)(L,{id:e.id,content:e.content,closeDialog:o})]})},J=function(e){var t=Object(N.d)((function(e){return e.achives.hints})),c=t.map((function(e){return Object(n.jsx)(_,{id:e.id,label:e.label,isChecked:e.isChecked},e.id)})),i=t.map((function(e){return Object(n.jsx)(W,{type:e.type,id:e.id,content:e.content,isChecked:e.isChecked},e.id)}));return Object(n.jsxs)("div",{className:"roomImg ".concat(e.isActive?"isShow":""),children:[c,i]})};function z(e){var t=Object(N.d)((function(e){return e.pages.isAnimation})),c=Object(N.d)((function(e){return e.pages.pageCurrentSection})),a=Object(N.d)((function(e){return e.achives.hints})),s=Object(N.d)((function(e){return e.health.health})),r=Object(N.c)(),o=Object(i.useState)(" isActive"),d=Object(D.a)(o,2),u=d[0],j=d[1],b=Object(i.useState)(""),h=Object(D.a)(b,2),m=h[0],p=h[1],O=Object(i.useState)(!1),v=Object(D.a)(O,2),f=v[0],x=v[1],y="".concat(c?" isActive":"").concat(t?" isAnimating":"");Object(i.useEffect)((function(){a.filter((function(e){return!0===e.isFound})).length===a.length&&(r({type:"SET_HINTS",payload:a.map((function(e){return e.isFound=!e.isFound,e.isChecked=!e.isChecked,e}))}),setTimeout((function(){e.history.push("/complete")}),3e3)),3===s&&(r({type:"SET_HINTS",payload:a.map((function(e){return e.isFound=!1,e.isChecked=!1,e}))}),r({type:"SET_TIMER",payload:null}),setTimeout((function(){e.history.push("/complete")}),2e3))}),[r,e.history,a,s]);var g=function(t){t.preventDefault(),e.history.goBack(),r({type:"SET_HINTS",payload:a.map((function(e){return e.isFound=!1,e.isChecked=!1,e}))}),r({type:"SET_TIMER",payload:null}),r({type:"SET_MISTAKE",payload:0})};return Object(n.jsx)("section",{className:"page-section".concat(y),children:Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("div",{className:"cols",children:Object(n.jsxs)("div",{className:"room ".concat(m),children:[Object(n.jsxs)("div",{className:"headerContainer ".concat(f?"isShow":""),children:[Object(n.jsx)(M,{isActiveTimer:f}),Object(n.jsx)(l.b,{to:"/",className:"closeBtn",onClick:function(e){return g(e)},children:"\u2715"})]}),f&&Object(n.jsx)(R,{}),Object(n.jsx)("div",{className:"roomContainer ".concat(f?"isShow":""),children:Object(n.jsx)(J,{isActive:f})}),Object(n.jsxs)("div",{className:"preview ".concat(u),children:[Object(n.jsx)("span",{children:"You need to find hints about this person in the room "}),Object(n.jsxs)("div",{className:"controlBtn",children:[Object(n.jsx)("div",{className:"btnAgree",onClick:function(e){return function(e){e.preventDefault(),j("isHidden"),document.getElementsByClassName("preview")[0].classList.remove("isActive"),p(" isActive"),x(!0),r({type:"SET_HINTS",payload:a.map((function(e){return e.isFound=!1,e.isChecked=!1,e}))})}(e)},children:"Start"}),Object(n.jsx)(l.b,{to:"/",className:"btnCancel",onClick:function(e){return g(e)},children:"Cancel"})]})]})]})})})})}var G=function(e){var t=Object(N.c)();return Object(i.useEffect)((function(){setTimeout((function(){t({type:"IS_REARY",payload:!0})}),3e3)}),[t]),Object(n.jsx)(l.a,{children:Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:"app",children:Object(n.jsx)("div",{className:"horizont",children:Object(n.jsx)(o.a,{exact:!0,path:"/",component:S})})}),Object(n.jsx)(o.a,{path:"/room",component:z}),Object(n.jsx)(o.a,{path:"/complete",component:I})]})})},U=c(13),$={isReady:!1},Q={isAnimation:!1,pageSection:["intro","room","contacts"],pageCurrentSection:!1},X={timerInterval:null,counter:0,hints:[{id:1,label:"",isChecked:!1,isFound:!1,type:"question",content:{title:"A cat. Hmmm...",body:"The cat is...",variants:[{id:1,value:"lazy"},{id:2,value:"crazy"},{id:3,value:"hungry"},{id:4,value:"svelte"}],trueAnswer:4}},{id:2,label:"",isChecked:!1,isFound:!1,type:"question",content:{title:"A beautiful view from the window...",body:"He can work with",variants:[{id:1,value:"view js"},{id:2,value:"vju js"},{id:3,value:"vue js"},{id:4,value:"vueue js"}],trueAnswer:3}},{id:3,label:"",isChecked:!1,isFound:!1,type:"question",content:{title:"What's in the cup?",variants:[{id:1,value:"Coffee"},{id:2,value:"Vodka"},{id:3,value:"Lemonade"},{id:4,value:"A cockroach"}],trueAnswer:1}},{id:4,label:"",isChecked:!1,isFound:!1,type:"question",content:{title:"HTML",body:"What does it mean?",variants:[{id:1,value:"HyperText Markup Language"},{id:2,value:"Harrypotter Took My Letters"},{id:3,value:"Hot Tomatos May Love"},{id:4,value:"How To Make Lollipops"}],trueAnswer:1}},{id:5,label:"",isChecked:!1,isFound:!1,type:"terminal",terminalValue:"",content:{title:"Visual Studio Code",body:"Programming language is JavaScript. Operating system is Linux"}},{id:6,label:"",isChecked:!1,isFound:!1,type:"dragAndDrop",content:{title:"Css",body:"Arrange the blocks in the correct order to get a layout"}},{id:7,label:"",isChecked:!1,isFound:!1,type:"information",content:{title:"A plant",body:"The plant is growing up"}}]},Z={health:0},ee=Object(U.b)({scroll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(Y.a)(Object(Y.a)({},e),{},{isReady:t.payload})}return e},pages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(Y.a)(Object(Y.a)({},e),{},{pageSection:[].concat(Object(F.a)(e.pageSection),[t.payload])});case p:return Object(Y.a)(Object(Y.a)({},e),{},{pageCurrentSection:t.payload});case v:return Object(Y.a)(Object(Y.a)({},e),{},{isAnimation:t.payload})}return e},achives:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(Y.a)(Object(Y.a)({},e),{},{timerInterval:t.payload});case C:return Object(Y.a)(Object(Y.a)({},e),{},{hints:t.payload});case T:return Object(Y.a)(Object(Y.a)({},e),{},{counter:t.payload})}return e},health:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{health:t.payload}}return e}}),te=Object(U.c)(ee),ce=document.getElementById("root");r.a.render(Object(n.jsx)(N.a,{store:te,children:Object(n.jsx)(G,{})}),ce)}},[[53,1,2]]]);
//# sourceMappingURL=main.dfcfc750.chunk.js.map