(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),p=n(6),i=n(1),u=n.n(i),d=n(0),l=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:null},e.keyupHandler=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.keyupHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.keyupHandler)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:this.state.pressedKey?Object(d.jsxs)("p",{className:"App__message",children:["The last pressed key is [",this.state.pressedKey,"]"]}):Object(d.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),n}(u.a.Component);n(13);a.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.70b782e0.chunk.js.map