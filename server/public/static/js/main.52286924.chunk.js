(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),o=(t(27),t(10)),d=t(11),i=t(8),m=t(13),s=t(12),u=(t(28),t(9)),h=t(5);var E=function(){return l.a.createElement("div",{className:"Appmain"},l.a.createElement("div",{className:"Home"},l.a.createElement("div",null,"\uc548\ub155\ud558\uc138\uc694,"),l.a.createElement("div",null,"\uae40\uacbd\uc740\uc785\ub2c8\ub2e4.")))};var v=function(){return l.a.createElement("div",{className:"Appmain"},l.a.createElement("div",null,"Menu 1 desc...."))};var p=function(){return l.a.createElement("div",{className:"Appmain"},l.a.createElement("div",null,"Menu 2 desc...."))};var M=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"Menu"},l.a.createElement("div",{className:"Menus"},l.a.createElement(u.b,{to:"/"},"Home")),l.a.createElement("div",{className:"Menus"},l.a.createElement(u.b,{to:"/menu1"},"menu 1")),l.a.createElement("div",{className:"Menus"},l.a.createElement(u.b,{to:"/menu2"},"menu 2")),l.a.createElement("div",{className:"Menus"},l.a.createElement("span",{className:"Setting",onClick:e.handleModal},"Setting"))),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/menu1"},l.a.createElement(v,null)),l.a.createElement(h.a,{path:"/menu2"},l.a.createElement(p,null)),l.a.createElement(h.a,{path:"/"},l.a.createElement(E,null)))))};var b=function(e){return l.a.createElement("nav",{className:"Nav"},l.a.createElement(M,{handleModal:e.handleModal}))};var f=function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("div",null,"Footer"),l.a.createElement("div",{className:"write"},l.a.createElement("input",{type:"text",className:"Text",placeholder:"write a message"}),l.a.createElement("input",{type:"text",className:"email",placeholder:"email"}),l.a.createElement("button",{id:"sumbit"},"submit")),l.a.createElement("div",{className:"read"}))},N=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(d.a)(t,[{key:"handleChange",value:function(e){var a=e.target.checked;this.props.handleMode(a)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"myModal displayMyModal"},l.a.createElement("div",{className:"modal_overlay"},l.a.createElement("div",{className:"modal_content"},l.a.createElement("div",{id:"checkbox"},l.a.createElement("input",{id:"box",type:"checkbox",onChange:this.handleChange.bind(this)}),l.a.createElement("span",{id:"Darmodeon"},"Dark Mode On")),l.a.createElement("span",{id:"x",onClick:this.props.handleModal},"x")))))}}]),t}(l.a.Component),k=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={darkMode:!1},n.handleMode=n.handleMode.bind(Object(i.a)(n)),n.handleModal=n.handleModal.bind(Object(i.a)(n)),n}return Object(d.a)(t,[{key:"handleMode",value:function(e){this.setState({darkMode:e})}},{key:"handleModal",value:function(){document.querySelector(".myModal").classList.toggle("displayMyModal")}},{key:"render",value:function(){return l.a.createElement("div",{className:this.state.darkMode?"App darkmode":"App lightmode"},l.a.createElement(N,{handleMode:this.handleMode,handleModal:this.handleModal}),l.a.createElement("div",null,l.a.createElement(b,{handleModal:this.handleModal})),l.a.createElement("div",null,l.a.createElement(f,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.52286924.chunk.js.map