(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){"use strict";var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function c(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var a,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};t.__esModule=!0,t.MetamaskFilecoinSnap=void 0;var i=a(106),s=function(e){var t=this;this.getFilecoinSnapApi=function(){return n(t,void 0,void 0,(function(){return r(this,(function(e){return[2,{calculateGasForMessage:i.calculateGasForMessage.bind(this),configure:i.configure.bind(this),exportPrivateKey:i.exportPrivateKey.bind(this),getAddress:i.getAddress.bind(this),getBalance:i.getBalance.bind(this),getMessages:i.getMessages.bind(this),getPublicKey:i.getPublicKey.bind(this),sendMessage:i.sendMessage.bind(this),signMessage:i.signMessage.bind(this),signMessageRaw:i.signMessageRaw.bind(this)}]}))}))},this.pluginOrigin=e,this.snapId="wallet_plugin_"+this.pluginOrigin};t.MetamaskFilecoinSnap=s},106:function(e,t,a){"use strict";var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function c(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var a,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function i(e,t){return n(this,void 0,void 0,(function(){return r(this,(function(a){switch(a.label){case 0:return[4,window.ethereum.request({method:t,params:[e]})];case 1:return[2,a.sent()]}}))}))}t.__esModule=!0,t.calculateGasForMessage=t.getMessages=t.sendMessage=t.signMessageRaw=t.signMessage=t.configure=t.exportPrivateKey=t.getBalance=t.getPublicKey=t.getAddress=void 0,t.getAddress=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,i({method:"fil_getAddress"},this.snapId)];case 1:return[2,e.sent()]}}))}))},t.getPublicKey=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,i({method:"fil_getPublicKey"},this.snapId)];case 1:return[2,e.sent()]}}))}))},t.getBalance=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,i({method:"fil_getBalance"},this.snapId)];case 1:return[2,e.sent()]}}))}))},t.exportPrivateKey=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,i({method:"fil_exportPrivateKey"},this.snapId)];case 1:return[2,e.sent()]}}))}))},t.configure=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,i({method:"fil_configure",params:{configuration:e}},this.snapId)];case 1:return[2,t.sent()]}}))}))},t.signMessage=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,i({method:"fil_signMessage",params:{message:e}},this.snapId)];case 1:return[2,t.sent()]}}))}))},t.signMessageRaw=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,i({method:"fil_signMessageRaw",params:{message:e}},this.snapId)];case 1:return[2,t.sent()]}}))}))},t.sendMessage=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,i({method:"fil_sendMessage",params:{signedMessage:e}},this.snapId)];case 1:return[2,t.sent()]}}))}))},t.getMessages=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,i({method:"fil_getMessages"},this.snapId)];case 1:return[2,e.sent()]}}))}))},t.calculateGasForMessage=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,i({method:"fil_getGasForMessage",params:{message:e}},this.snapId)];case 1:return[2,t.sent()]}}))}))}},123:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),s=a(11),c=a.n(s),l=(a(103),a(9)),o=a.n(l),u=a(15),f=a(13),m=a(178),p=a(163),d=a(181),h=a(35),g=a(185),b=a(191),v=a(182),E=a(192),w=a(160),y=a(161),x=a(162),S=a(186),k=a(158),j=a(159),O=a(78),M=a.n(O),_=a(183),I=a(62),C=a(49),A={filecoinSnap:{isInstalled:!1,message:""},hasMetaMask:Object(C.hasMetaMask)()},T=Object(r.createContext)([A,function(){}]);!function(e){e[e.SET_INSTALLED_STATUS=0]="SET_INSTALLED_STATUS"}(n||(n={}));var F=function(e,t){switch(t.type){case n.SET_INSTALLED_STATUS:return Object(I.a)(Object(I.a)({},e),{},{filecoinSnap:t.payload});default:return e}},L=function(e){var t=Object(r.useReducer)(F,A),a=Object(f.a)(t,2),n=a[0],s=a[1];return i.a.createElement(T.Provider,{value:[n,s]},e.children)},P=!1;function N(){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Attempting to connect to snap..."),e.next=4,Object(C.enableFilecoinSnap)({network:"f"},"filsnap");case 4:return t=e.sent,P=!0,console.log("Snap installed!"),e.abrupt("return",{isSnapInstalled:!0,snap:t});case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),P=!1,e.abrupt("return",{isSnapInstalled:!1});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function D(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(){var e=Object(r.useContext)(T),t=Object(f.a)(e,2),a=t[0],s=t[1];Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:if(!e.sent){e.next=4;break}s({type:n.SET_INSTALLED_STATUS,payload:{isInstalled:!0}});case 4:case"end":return e.stop()}}),e)})))()}),[s]);var c=Object(r.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:(t=e.sent).isSnapInstalled?s({type:n.SET_INSTALLED_STATUS,payload:{isInstalled:!0,snap:t.snap}}):s({type:n.SET_INSTALLED_STATUS,payload:{isInstalled:!1,message:"Please accept snap installation prompt"}});case 4:case"end":return e.stop()}}),e)}))),[s]),l=function(e,t){"clickaway"!==t&&s({type:n.SET_INSTALLED_STATUS,payload:!1})};return i.a.createElement("div",null,i.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:!(a.filecoinSnap.isInstalled||!a.filecoinSnap.message),autoHideDuration:6e3,onClose:l,message:a.filecoinSnap.message,action:i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{size:"small","aria-label":"close",color:"inherit",onClick:l},i.a.createElement(M.a,{fontSize:"small"})))}),i.a.createElement(g.a,{xsUp:a.hasMetaMask},i.a.createElement(_.a,{severity:"warning"},"Ensure that MetaMask is installed!"),i.a.createElement(d.a,{mt:"1rem"})),i.a.createElement(j.a,{disabled:!a.hasMetaMask,onClick:c,variant:"contained",size:"large",color:"primary"},"Connect to MetaMask"))},B=a(164),U=function(e){var t=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.api){t.next=5;break}return t.next=3,e.api.exportPrivateKey();case 3:a=t.sent,alert("Your private key: ".concat(a));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return i.a.createElement(w.a,null,i.a.createElement(y.a,{title:"Account details"}),i.a.createElement(x.a,null,i.a.createElement(p.a,{container:!0,alignItems:"center"},i.a.createElement(p.a,{item:!0,md:6,xs:12},i.a.createElement(h.a,{variant:"h6"},"ADDRESS:"),i.a.createElement(h.a,{variant:"subtitle2"},e.address),i.a.createElement(B.a,{light:!0}),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(h.a,{variant:"h6"},"PUBLIC KEY:"),i.a.createElement(h.a,{variant:"subtitle2"},e.publicKey),i.a.createElement(B.a,{light:!0}),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(h.a,{variant:"h6"},"ACCOUNT BALANCE:"),e.balanceChange?i.a.createElement(h.a,{variant:"subtitle2"},i.a.createElement("b",null,e.balance)):i.a.createElement(h.a,{variant:"subtitle2"},e.balance))),i.a.createElement(p.a,{container:!0,item:!0,xs:12,justify:"flex-end"},i.a.createElement(j.a,{color:"secondary",variant:"contained",onClick:t},"Export private key"))))},R=a(165),W=a(125),q=a(166),H=a(167),J=a(168),Y=a(169),V=a(170),$=function(e){return i.a.createElement(R.a,{className:"transtaction-table",component:W.a},i.a.createElement(q.a,{"aria-label":"simple table"},i.a.createElement(H.a,null,i.a.createElement(J.a,null,i.a.createElement(Y.a,null,"Message id"),i.a.createElement(Y.a,{align:"center"},"Sender"),i.a.createElement(Y.a,{align:"center"},"Destination"),i.a.createElement(Y.a,{align:"center"},"Amount"),i.a.createElement(Y.a,{align:"center"},"Gas Limit"),i.a.createElement(Y.a,{align:"center"},"Gas Premium"),i.a.createElement(Y.a,{align:"center"},"Gas Fee Cap"))),i.a.createElement(V.a,null,e.txs.map((function(e){return i.a.createElement(J.a,{key:e.cid},i.a.createElement(Y.a,{align:"left",component:"th",scope:"row"},e.cid),i.a.createElement(Y.a,{align:"center",component:"th",scope:"row"},e.message.from),i.a.createElement(Y.a,{align:"center"},e.message.to),i.a.createElement(Y.a,{align:"center"},e.message.value),i.a.createElement(Y.a,{align:"center"},e.message.gaslimit),i.a.createElement(Y.a,{align:"center"},e.message.gaspremium),i.a.createElement(Y.a,{align:"center"},e.message.gasfeecap))})))))},Q=a(187),X=a(188),Z=a(173),ee=a(174),te=a(175),ae=a(176),ne=a(80),re=a.n(ne),ie=function(e){var t=Object(r.useState)(""),a=Object(f.a)(t,2),n=a[0],s=a[1],c=Object(r.useState)(""),l=Object(f.a)(c,2),m=l[0],g=l[1],b=Object(r.useState)(!1),v=Object(f.a)(b,2),E=v[0],S=v[1],k=function(){var t=Object(u.a)(o.a.mark((function t(){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n||!e.api){t.next=8;break}return a=re()(n,{addPrefix:!0}),t.next=4,e.api.signMessageRaw(a);case 4:r=t.sent,s(""),g(r),S(!0);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return i.a.createElement(w.a,{style:{height:"100%"}},i.a.createElement(y.a,{title:"Sign custom message"}),i.a.createElement(x.a,null,i.a.createElement(p.a,{container:!0},i.a.createElement(Q.a,{onChange:function(e){s(e.target.value)},value:n,size:"medium",fullWidth:!0,id:"custom-message",label:"Message",variant:"outlined"})),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(p.a,{container:!0,justify:"flex-end"},i.a.createElement(j.a,{onClick:k,color:"secondary",variant:"contained",size:"large"},"Sign"))),i.a.createElement(X.a,{open:E,onClose:function(){return S(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(Z.a,{id:"alert-dialog-title"},"Message signature"),i.a.createElement(ee.a,null,i.a.createElement(te.a,{id:"alert-dialog-description"},"This is signature of your message:",i.a.createElement("br",null),i.a.createElement(h.a,{style:{wordWrap:"break-word"}},m))),i.a.createElement(ae.a,null,i.a.createElement(j.a,{onClick:function(){return S(!1)},color:"primary",autoFocus:!0},"OK"))))},se=a(177),ce=function(e){e.network;var t=e.api,a=e.onNewMessageCallback,n=Object(r.useState)(""),s=Object(f.a)(n,2),c=s[0],l=s[1],m=Object(r.useState)(""),h=Object(f.a)(m,2),g=h[0],b=h[1],v=Object(r.useState)("0"),E=Object(f.a)(v,2),k=E[0],O=E[1],M=Object(r.useState)("0"),I=Object(f.a)(M,2),C=I[0],A=I[1],T=Object(r.useState)("0"),F=Object(f.a)(T,2),L=F[0],P=F[1],N=Object(r.useState)(!1),z=Object(f.a)(N,2),D=z[0],G=z[1],K=Object(r.useState)("success"),B=Object(f.a)(K,2),U=B[0],R=B[1],W=Object(r.useState)(""),q=Object(f.a)(W,2),H=q[0],J=q[1],Y=Object(r.useCallback)((function(e){l(e.target.value)}),[l]),V=Object(r.useCallback)((function(e){b(e.target.value)}),[b]),$=Object(r.useCallback)((function(e){O(e.target.value)}),[O]),X=Object(r.useCallback)((function(e){A(e.target.value)}),[A]),Z=Object(r.useCallback)((function(e){P(e.target.value)}),[P]),ee=function(e,t){R(e),J(t),G(!0)},te=Object(r.useCallback)(Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c&&g&&t)){e.next=9;break}return e.next=3,t.calculateGasForMessage({to:c,value:BigInt(g).toString()});case 3:a=e.sent,A(a.gaspremium),P(a.gasfeecap),O(a.gaslimit.toString()),e.next=10;break;case 9:ee("error","Please first fill in Recipient and Amount fields");case 10:case"end":return e.stop()}}),e)}))),[c,g,t]),ae=Object(r.useCallback)(Object(u.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g&&c&&t)){e.next=15;break}return e.next=3,t.signMessage({to:c,value:BigInt(g).toString(),gaslimit:Number(k),gasfeecap:L,gaspremium:C});case 3:return n=e.sent,ee("info","Message signature: ".concat(n.signature.data)),e.next=7,t.sendMessage(n);case 7:r=e.sent,ee("info","Message sent with cid: ".concat(r.cid)),b(""),l(""),P("0"),A("0"),O("0"),a();case 15:case"end":return e.stop()}}),e)}))),[g,c,t,k,L,C,a]);return i.a.createElement(w.a,null,i.a.createElement(x.a,null,i.a.createElement(y.a,{title:"Transfer"}),i.a.createElement(p.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(p.a,{item:!0,xs:12},i.a.createElement(Q.a,{onChange:Y,size:"medium",fullWidth:!0,id:"recipient",label:"Recipient",variant:"outlined",value:c}),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(Q.a,{InputProps:{startAdornment:i.a.createElement(se.a,{position:"start"},"AttoFIL")},onChange:V,size:"medium",fullWidth:!0,id:"amount",label:"Amount",variant:"outlined",value:g}),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(Q.a,{onChange:$,size:"medium",fullWidth:!0,id:"gaslimit",label:"Gas Limit",variant:"outlined",value:k+" AttoFIL"}),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(Q.a,{onChange:X,size:"medium",fullWidth:!0,id:"gaspremium",label:"Gas Premium",variant:"outlined",value:C+" AttoFIL"}),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(Q.a,{onChange:Z,size:"medium",fullWidth:!0,id:"gasfeecap",label:"Gas Fee Cap",variant:"outlined",value:L+" AttoFIL"}))),i.a.createElement(d.a,{m:"0.5rem"}),i.a.createElement(p.a,{container:!0,item:!0,xs:12,justify:"flex-end"},i.a.createElement(j.a,{onClick:te,color:"secondary",variant:"contained",size:"large",style:{marginRight:10}},"AUTO FILL GAS"),i.a.createElement(j.a,{onClick:ae,color:"secondary",variant:"contained",size:"large"},"SEND")),i.a.createElement(S.a,{open:D,autoHideDuration:6e3,onClose:function(){return G(!1)},anchorOrigin:{vertical:"bottom",horizontal:"left"}},i.a.createElement(_.a,{severity:U,onClose:function(){return G(!1)}},"".concat(H," ")))))},le=a(83),oe=a.n(le),ue=a(84),fe=a.n(ue),me=a(81),pe=a.n(me),de=a(82),he=a.n(de);var ge=function(){return i.a.createElement(m.a,{style:{position:"fixed",left:0,bottom:0,maxWidth:"100%",textAlign:"center"}},i.a.createElement(p.a,{style:{},direction:"row",alignItems:"flex-end",justify:"center",container:!0,spacing:3},i.a.createElement(d.a,{m:"2rem",height:"100%"},i.a.createElement("a",{style:{textDecoration:"unset"},href:"https://github.com/NodeFactoryIo/filsnap"},i.a.createElement(oe.a,{fontSize:"large"}),i.a.createElement(h.a,{style:{textDecoration:"unset"}},"Repo"))),i.a.createElement(d.a,{m:"2rem",height:"100%"},i.a.createElement("a",{style:{textDecoration:"unset"},href:"https://github.com/NodeFactoryIo/filsnap/wiki"},i.a.createElement(fe.a,{fontSize:"large"}),i.a.createElement(h.a,null,"Docs")))),i.a.createElement(p.a,{style:{},direction:"row",alignItems:"flex-end",justify:"center",container:!0,spacing:3},i.a.createElement(d.a,{m:"2rem",height:"100%"},i.a.createElement("img",{height:60,src:pe.a,alt:"Logo"})),i.a.createElement(d.a,{m:"2rem",height:"100%"},i.a.createElement("img",{height:60,src:he.a,alt:"Node Factory"}))))},be=function(){var e=Object(r.useContext)(T),t=Object(f.a)(e,1)[0],a=Object(r.useState)(""),n=Object(f.a)(a,2),s=n[0],c=n[1],l=Object(r.useState)(""),S=Object(f.a)(l,2),k=S[0],j=S[1],O=Object(r.useState)(""),M=Object(f.a)(O,2),_=M[0],I=M[1],C=Object(r.useState)([]),A=Object(f.a)(C,2),F=A[0],L=A[1],P=Object(r.useState)(!1),N=Object(f.a)(P,2),z=N[0],D=N[1],G=Object(r.useState)("f"),B=Object(f.a)(G,2),R=B[0],W=B[1],q=Object(r.useState)(null),H=Object(f.a)(q,2),J=H[0],Y=H[1],V=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t.target.value)!==R){e.next=3;break}return e.abrupt("return");case 3:if(!J){e.next=12;break}return e.next=6,J.configure({network:a});case 6:return W(a),e.t0=L,e.next=10,J.getMessages();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=Object(r.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=6;break}return e.t0=L,e.next=4,J.getMessages();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[J,L]);return Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.filecoinSnap.isInstalled||!t.filecoinSnap.snap){e.next=5;break}return e.next=3,t.filecoinSnap.snap.getFilecoinSnapApi();case 3:a=e.sent,Y(a);case 5:case"end":return e.stop()}}),e)})))()}),[t.filecoinSnap.isInstalled,t.filecoinSnap.snap]),Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=26;break}return e.t0=j,e.next=4,J.getAddress();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=I,e.next=9,J.getPublicKey();case 9:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=c,e.next=14,J.getBalance();case 14:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=L,e.next=19,J.getMessages();case 19:return e.t7=e.sent,(0,e.t6)(e.t7),e.t8=console,e.next=24,J.getMessages();case 24:e.t9=e.sent,e.t8.log.call(e.t8,e.t9);case 26:case"end":return e.stop()}}),e)})))()}),[J,R]),Object(r.useEffect)((function(){var e=setInterval(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=5;break}return e.next=3,J.getBalance();case 3:(t=e.sent)!==s?(D(!0),c(t)):D(!1);case 5:case"end":return e.stop()}}),e)}))),3e3);return function(){return clearInterval(e)}}),[J,s,c,D]),i.a.createElement(m.a,{maxWidth:"lg"},i.a.createElement(p.a,{direction:"column",alignItems:"center",justify:"center",container:!0,spacing:3},i.a.createElement(d.a,{m:"2rem",style:{textAlign:"center"}},i.a.createElement(h.a,{variant:"h2"},"Filsnap demo"),i.a.createElement(h.a,{style:{color:"gray",fontStyle:"italic"},variant:"h6"},"Filsnap enables Filecoin network inside Metamask.")),i.a.createElement(g.a,{xsUp:t.filecoinSnap.isInstalled},i.a.createElement(K,null),i.a.createElement(ge,null)),i.a.createElement(g.a,{xsUp:!t.filecoinSnap.isInstalled},i.a.createElement(d.a,{m:"1rem",alignSelf:"baseline"},i.a.createElement(b.a,null,"Network"),i.a.createElement(v.a,{defaultValue:"f",onChange:V},i.a.createElement(E.a,{value:"t"},"Testnet"),i.a.createElement(E.a,{value:"f"},"Mainnet"))),i.a.createElement(p.a,{container:!0,spacing:3,alignItems:"stretch"},i.a.createElement(p.a,{item:!0,xs:12},i.a.createElement(U,{address:k,balance:s+" FIL",publicKey:_,api:J,balanceChange:z}))),i.a.createElement(d.a,{m:"1rem"}),i.a.createElement(p.a,{container:!0,spacing:3,alignItems:"stretch"},i.a.createElement(p.a,{item:!0,md:6,xs:12},i.a.createElement(ce,{api:J,network:R,onNewMessageCallback:Q})),i.a.createElement(p.a,{item:!0,md:6,xs:12},i.a.createElement(ie,{api:J}))),i.a.createElement(d.a,{m:"1rem"}),i.a.createElement(p.a,{container:!0,spacing:3,alignItems:"stretch"},i.a.createElement(p.a,{item:!0,xs:12},i.a.createElement(w.a,null,i.a.createElement(y.a,{title:"Account transactions"}),i.a.createElement(x.a,null,i.a.createElement($,{txs:F}))))))))};var ve=function(){return i.a.createElement(L,null,i.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(179),we=a(85),ye=Object(we.a)({palette:{secondary:{main:"#00d2d6"}}});c.a.render(i.a.createElement(Ee.a,{theme:ye},i.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function c(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var a,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};t.__esModule=!0,t.enableFilecoinSnap=void 0;var s=a(70),c=a(105),l="https://bafybeigzphbumdkucnj2c6nr5xb3kwsq5gs2gp7w3qldgbvfeycfsbjylu.ipfs.infura-ipfs.io",o=a(70);n(t,o,"hasMetaMask"),n(t,o,"isMetamaskSnapsSupported"),t.enableFilecoinSnap=function(e,t){return r(this,void 0,void 0,(function(){var a,n,r;return i(this,(function(i){switch(i.label){case 0:if(a="wallet_plugin_https://bafybeigzphbumdkucnj2c6nr5xb3kwsq5gs2gp7w3qldgbvfeycfsbjylu.ipfs.infura-ipfs.io",t&&(a="wallet_plugin_"+t),!s.hasMetaMask())throw new Error("Metamask is not installed");return[4,s.isMetamaskSnapsSupported()];case 1:if(!i.sent())throw new Error("Current Metamask version doesn't support snaps");if(!e.network)throw new Error("Configuration must at least define network type");return[4,s.isSnapInstalled(a)];case 2:return i.sent()?[3,4]:[4,window.ethereum.request({method:"wallet_enable",params:[(r={},r[a]={},r)]})];case 3:i.sent(),i.label=4;case 4:return[4,(n=new c.MetamaskFilecoinSnap(t||l)).getFilecoinSnapApi()];case 5:return[4,i.sent().configure(e)];case 6:return i.sent(),[2,n]}}))}))}},70:function(e,t,a){"use strict";var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function c(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var a,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function i(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,window.ethereum.request({method:"wallet_getPlugins"})];case 1:return[2,e.sent()]}}))}))}t.__esModule=!0,t.isSnapInstalled=t.isMetamaskSnapsSupported=t.hasMetaMask=void 0,t.hasMetaMask=function(){return!!window.ethereum&&window.ethereum.isMetaMask},t.isMetamaskSnapsSupported=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,i()];case 1:return e.sent(),[2,!0];case 2:return e.sent(),[2,!1];case 3:return[2]}}))}))},t.isSnapInstalled=function(e){return n(this,void 0,void 0,(function(){var t,a,n;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),a=(t=Object).values,[4,i()];case 1:return[2,!!a.apply(t,[r.sent()]).find((function(t){return t.permissionName===e}))];case 2:return n=r.sent(),console.log("Failed to obtain installed plugins",n),[2,!1];case 3:return[2]}}))}))}},81:function(e,t,a){e.exports=a.p+"static/media/filecoin_logo.3ff37f05.png"},82:function(e,t,a){e.exports=a.p+"static/media/node_factory_logo.d9e0e004.png"},98:function(e,t,a){e.exports=a(123)}},[[98,1,2]]]);
//# sourceMappingURL=main.7a0bf631.chunk.js.map