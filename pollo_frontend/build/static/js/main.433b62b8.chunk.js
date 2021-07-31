(this.webpackJsonppollo_frontend=this.webpackJsonppollo_frontend||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){},130:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(30),r=n.n(s),o=(n(101),n(28)),l=n(13),i=(n(102),n(103),n(8)),j=n(150),u=n(144),d=n(95),b=n(147),h=n(73),O=n(2),p=n(32),x=n.n(p),g=n(54),m=n(16),f=n.n(m),v=function(e){var t=e.getStore,n=e.getActions,a=e.setStore;return{store:{message:null,token:null,isAuthenticated:!1,user:null,test:"store working"},actions:{getTest:function(){console.log("actions working")},syncTokenFromSessionStorage:function(){var e=sessionStorage.getItem("token");(console.log("refreshin, syncing tokens"),e&&""!==e&&void 0!==e)?(a({token:e}),n().getuser()):a({token:null,isAuthenticated:!1,user:null})},login:function(){var e=Object(g.a)(x.a.mark((function e(t,c){var s,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logging in"),s={method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:t,password:c})},e.prev=2,e.next=5,f()("http://127.0.0.1:5000/api/auth/create-token",s);case 5:if(200===(r=e.sent).status){e.next=9;break}return console.log("Error 1"),e.abrupt("return",!1);case 9:return e.next=11,r.data;case 11:return o=e.sent,console.log("Backend data:",o),sessionStorage.setItem("token",o.access_token),a({token:o.access_token}),n().getuser(),e.abrupt("return",!0);case 20:throw e.prev=20,e.t0=e.catch(2),console.error("Error 2",e.t0),e.t0;case 24:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t,n){return e.apply(this,arguments)}}(),register:function(){var e=Object(g.a)(x.a.mark((function e(t,n,a){var c,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Registering User"),c={method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:t,name:n,password:a})},e.prev=2,e.next=5,f()("http://127.0.0.1:5000/api/auth/create-user",c);case 5:if(200===(s=e.sent).status){e.next=9;break}return console.log("Error create-user 1"),e.abrupt("return",!1);case 9:return e.next=11,s.data;case 11:return r=e.sent,console.log("Backend data:",r),e.abrupt("return",!0);case 16:throw e.prev=16,e.t0=e.catch(2),console.error("Error creat-user 2",e.t0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,n,a){return e.apply(this,arguments)}}(),logout:function(){sessionStorage.removeItem("token"),a({token:null}),a({isAuthenticated:!1,user:null}),console.log("tokens removed, logged out")},getuser:function(){var e=Object(g.a)(x.a.mark((function e(){var c,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting user details"),c=t(),s={headers:{Accept:"application/json",Authorization:"Bearer "+c.token}},e.prev=3,e.next=6,f()("http://127.0.0.1:5000/api/auth/userdata",s);case 6:if(200!==(r=e.sent).status){e.next=12;break}return console.log("setting store.user",r.data),a({user:r.data}),a({isAuthenticated:!0}),e.abrupt("return",!0);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0.response.status,e.t0),401===e.t0.response.status&&n().logout();case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),create_post:function(){var e=Object(g.a)(x.a.mark((function e(n){var a,c,s,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Creating Post",n),a=t(),console.log(a),c={question:n.question,options:n.options},s={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a.token},data:JSON.stringify(c)},e.prev=5,e.next=8,f()("http://127.0.0.1:5000/api/polls/createpoll",s);case 8:if(200===(r=e.sent).status){e.next=12;break}return console.log("Error create_post 1"),e.abrupt("return",!1);case 12:return e.next=14,r.data;case 14:return o=e.sent,console.log("Backend data:",o),e.abrupt("return",!0);case 19:return e.prev=19,e.t0=e.catch(5),console.error("Error create_post 2",e.t0.code),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t){return e.apply(this,arguments)}}()}}},k=n(1),C=c.a.createContext(null),y=function(e){return function(t){var n=Object(a.useState)(v({getStore:function(){return s.store},getActions:function(){return s.actions},setStore:function(e){return r({store:Object.assign(s.store,e),actions:Object(O.a)({},s.actions)})}})),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){s.actions.syncTokenFromSessionStorage()}),[s.actions]),Object(k.jsx)(C.Provider,{value:s,children:Object(k.jsx)(e,Object(O.a)({},t))})}},S=n(148),N=n(139),w=n(92),A=n(149),E=n(138),P=n(93),L=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),j=o[0],u=o[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),h=b[0],O=b[1],p=Object(a.useContext)(C).actions,x=Object(l.k)(),g=Object(l.l)();return Object(k.jsxs)(A.a,{children:[Object(k.jsxs)(A.a.Group,{className:"mb-3",controlId:"Email",children:[Object(k.jsx)(A.a.Label,{children:"Email address"}),Object(k.jsx)(A.a.Control,{type:"text",placeholder:"Enter email",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(k.jsxs)(A.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(k.jsx)(A.a.Label,{children:"Password"}),Object(k.jsx)(A.a.Control,{type:"password",placeholder:"Password",value:h,onChange:function(e){return O(e.target.value)}})]}),c&&Object(k.jsx)(E.a,{variant:"danger",children:c}),Object(k.jsx)(P.a,{variant:"primary",type:"submit",onClick:function(t){return function(t){t.preventDefault(),p.login(j,h).then((function(){e.handleSuccess?e.handleSuccess():x.goBack(),console.log(g.pathname),console.log("You have beeen logged in")})).catch((function(e){console.log("Error 3",e.response.data.msg),s(e.response.data.msg)}))}(t)},children:"Log In"})]})},T=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),j=o[0],u=o[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),h=b[0],O=b[1],p=Object(a.useState)(""),x=Object(i.a)(p,2),g=x[0],m=x[1],f=Object(a.useContext)(C).actions,v=Object(l.k)();return Object(k.jsxs)(A.a,{children:[Object(k.jsxs)(A.a.Group,{className:"mb-3",controlId:"Name",children:[Object(k.jsx)(A.a.Label,{children:"Name"}),Object(k.jsx)(A.a.Control,{type:"text",placeholder:"Enter name",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(k.jsxs)(A.a.Group,{className:"mb-3",controlId:"Email",children:[Object(k.jsx)(A.a.Label,{children:"Email address"}),Object(k.jsx)(A.a.Control,{type:"text",placeholder:"Enter email",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(k.jsxs)(A.a.Group,{className:"mb-3",controlId:"Password",children:[Object(k.jsx)(A.a.Label,{children:"Password"}),Object(k.jsx)(A.a.Control,{type:"password",placeholder:"Enter Password",value:g,onChange:function(e){return m(e.target.value)}})]}),c&&Object(k.jsx)(E.a,{variant:"danger",children:c}),Object(k.jsx)(P.a,{variant:"primary",type:"submit",onClick:function(t){return function(t){t.preventDefault(),f.register(j,h,g).then((function(){console.log("You have been registered"),f.login(j,g)})).then((function(){e.handleSuccess(),v.push("/dashboard"),console.log("You have beeen logged in")})).catch((function(e){console.log("Error 3",e.response.data.msg),s(e.response.data.msg)}))}(t)},children:"Register"})]})},_=n(43),F=n(44),I=n(48),B=n(47),R=n(140);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_SERVER:"http://127.0.0.1:5000"}));var G=function(e){Object(I.a)(n,e);var t=Object(B.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).state={polls:null,loading:!0},f.a.get("http://127.0.0.1:5000/polls/viewpoll",{headers:{Accepts:"aplication/json"}}).then((function(e){console.log(e.data),a.setState({polls:e.data,loading:!1})})).catch((function(e){console.log(e)})),a}return Object(F.a)(n,[{key:"render",value:function(){var e=this.state.polls;return console.log("Hello"),console.log(e),Object(k.jsxs)(k.Fragment,{children:[e?Object(k.jsx)(N.a,{xs:1,md:2,lg:3,className:"g-4",children:e.polls.map((function(e){return Object(k.jsx)(q,{polldata:e})}))}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(N.a,{className:"align-items-center text-center",style:{height:"70vh"},children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(R.a,{animation:"grow"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("p",{className:"text-muted",children:"All polls will be displayed here"})]})})}),Object(k.jsx)(P.a,{variant:"secondary",onClick:this.props.handleClick,children:"Back"})]})}}]),n}(a.Component),H=function(e){var t=Object(a.useContext)(C).store,n=Object(a.useState)({poll_id:e.poll.polldata.poll_id}),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(A.a,{onSubmit:function(n){n.preventDefault();var a=s,c={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},data:JSON.stringify(a)};console.log(c),f()("http://127.0.0.1:5000/api/polls/votepoll",c).then((function(t){200===t.status&&console.log("voted successfully"),e.setchanged(!e.changed),400===t.status&&console.log("already voted")})).catch((function(t){console.error("caught error",t.response.data.msg),e.setchanged(!e.changed)}))},children:[Object(k.jsx)("h1",{children:e.poll.polldata.question}),Object(k.jsx)(A.a.Group,{onChange:function(t){r(Object(O.a)(Object(O.a)({},s),{},{option_id:t.target.value})),console.log("option set as:",t.target.value,e.poll.polloptions[t.target.value])},children:Object.entries(e.poll.polloptions).map((function(e,t){return Object(k.jsx)(A.a.Check,{name:"option",type:"radio",label:e[1],value:e[0]})}))}),Object(k.jsx)(P.a,{variant:"primary",type:"submit",children:"Submit"})]})})},D=n(151),z=n(94),K=n(152),q=function(e){var t=e.polldata,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(!1),j=Object(i.a)(o,2),u=j[0],d=j[1],b=Object(a.useContext)(C).store.token,h=Object(l.k)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(w.a,{children:Object(k.jsxs)(D.a,{border:"primary",className:"mb-3",children:[Object(k.jsxs)(D.a.Body,{onClick:function(){return function(e){var t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b},params:{poll_id:e}};f.a.get("http://127.0.0.1:5000/api/polls/getpoll",t).then((function(e){console.log("response data",e.data);var t=e.data;r(t),console.log("poll data:",s),d(!u)})).catch((function(e){console.log(e.response.status),422!==e.response.status&&401!==e.response.status||h.push("/login")}))}(t.id)},"aria-controls":"example-collapse-text","aria-expanded":u,children:[Object(k.jsx)(D.a.Title,{children:t.question}),Object(k.jsx)(z.a,{in:u,children:Object(k.jsxs)(D.a.Text,{id:"example-collapse-text",children:[Object(k.jsx)(K.a,{variant:"flush",children:s?Object.entries(s.polloptions).map((function(e,t){return Object(k.jsx)(K.a.Item,{id:e[0],children:e[1]})})):Object(k.jsx)("p",{children:"Loading"})}),Object(a.useContext)(C).store.isAuthenticated&&Object(k.jsx)(P.a,{variant:"primary",onClick:function(){return h.push("/poll/"+s.polldata.poll_id)},children:"Check out"})]})})]}),Object(k.jsx)(D.a.Footer,{className:"text-muted text-end",children:"Poll created on"})]})})})},J=n(141),M=function(e){var t=e.poll.polloptions,n=e.poll.pollvotes,a=0,c={};return Object.entries(n).map((function(e){return a+=e[1],!0})),Object.entries(n).map((function(e){return c[e[0]]=100*e[1]/a,!0})),console.log("calcs:",a,c),Object(k.jsx)(k.Fragment,{children:c?Object.entries(t).map((function(e){return Object(k.jsxs)(N.a,{children:[Object(k.jsx)(w.a,{className:"col-2",children:Object(k.jsx)("h1",{className:"h4 align-self-center",children:e[1]})}),Object(k.jsx)(w.a,{className:"col-8 align-self-center",children:Object(k.jsx)(J.a,{striped:!0,variant:"success",now:c[e[0]]})}),Object(k.jsx)(w.a,{className:"col-2",children:Object(k.jsx)("h1",{className:"h4",children:n[e[0]]})})]})})):Object(k.jsx)(k.Fragment,{children:"Loading"})})},V=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useContext)(C).store.token;return Object(a.useEffect)((function(){f.a.get("http://127.0.0.1:5000/api/polls/attemptedpoll",{headers:{Accept:"application/json",Authorization:"Bearer "+r}}).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[r]),Object(k.jsx)(k.Fragment,{children:c?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(N.a,{xs:1,md:2,lg:3,className:"g-4",children:c.polls.map((function(e){return Object(k.jsx)(q,{polldata:e})}))})}):Object(k.jsx)("p",{children:"Loading"})})},W=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useContext)(C).store.token;return Object(a.useEffect)((function(){f.a.get("http://127.0.0.1:5000/api/polls/mypoll",{headers:{Accept:"application/json",Authorization:"Bearer "+r}}).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[r]),Object(k.jsx)(k.Fragment,{children:c?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(N.a,{xs:1,md:2,lg:3,className:"g-4",children:c.polls.map((function(e){return Object(k.jsx)(q,{polldata:e})}))})}):Object(k.jsx)("p",{children:"Loading"})})},U=function(e){return Object(k.jsx)(N.a,{className:"align-items-center text-center",style:{height:"60vh"},children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)("h1",{children:"Welcome to Poll'O"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)(P.a,{size:"lg",variant:"outline-primary",onClick:e.handleClick,children:"View Polls"})]})})},Y=(n(130),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],r=function(){e.setModalShow(null)};return Object(k.jsxs)(S.a,Object(O.a)(Object(O.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",children:[Object(k.jsx)(S.a.Header,{closeButton:!0,children:Object(k.jsx)(S.a.Title,{children:"Sign In"})}),Object(k.jsx)(S.a.Body,{children:Object(k.jsxs)(N.a,{children:[Object(k.jsx)(w.a,{className:"col-2",children:Object(k.jsxs)(d.a,{variant:"pills",className:"text-center",children:[Object(k.jsx)(d.a.Item,{children:Object(k.jsx)(d.a.Link,{onClick:function(){return s(!1)},active:!c,children:"Login"})}),Object(k.jsx)(d.a.Item,{children:Object(k.jsx)(d.a.Link,{onClick:function(){return s(!0)},active:c,children:"Register"})})]})}),Object(k.jsx)(w.a,{children:c?Object(k.jsx)(T,{handleSuccess:r}):Object(k.jsx)(L,{handleSuccess:r})})]})})]}))}),Q=n(10),X=n(142),Z=n(143),$=function(e){var t=e.count;return Object(k.jsx)(A.a.Group,{className:"mb-3",controlId:"Option"+(t+1),children:Object(k.jsxs)(X.a,{children:[Object(k.jsxs)(X.a.Text,{id:"Option"+(t+1),children:["Option ",t+1]}),Object(k.jsx)(A.a.Control,{className:"col-sm-10",type:"text",name:t,"aria-describedby":"Option"+(t+1),value:e.value,onChange:function(n){return e.handleChangeInput(n,t)}})]})})},ee=function(e){Object(I.a)(n,e);var t=Object(B.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).addOption=function(){var e=a.state;e.options.length<10&&e.options.push(""),a.setState(e)},a.removeOption=function(){var e=a.state;e.options.length>2&&e.options.pop(),a.setState(e)},a.handleChangeInput=function(e,t){console.log(t);var n=a.state;n.options[t]=e.target.value,a.setState(n)},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state,a.context),a.context.actions.create_post(a.state).then((function(e){e&&(a.props.onHide(),console.log("post created successfully"))})).catch(console.log("Error in action: create_post"))},a.state={question:"",options:["",""]},a}return Object(F.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(A.a,{onSubmit:this.handleSubmit,children:[Object(k.jsxs)(A.a.Group,{className:"mb-3",controlId:"",children:[Object(k.jsx)(A.a.Label,{children:"Question"}),Object(k.jsx)(A.a.Control,{name:"question",value:this.state.question,onChange:function(t){return e.setState((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(Q.a)({},t.target.name,t.target.value))}))},as:"textarea",rows:2,placeholder:"Enter Question you want to ask"})]}),this.state.options.map((function(t,n){return Object(k.jsx)($,{count:n,value:t,handleChangeInput:e.handleChangeInput})})),Object(k.jsx)(A.a.Group,{className:"mt-3",children:Object(k.jsxs)(Z.a,{"aria-label":"Basic example",children:[Object(k.jsx)(P.a,{variant:"success",onClick:function(){return e.addOption()},children:"Add"}),Object(k.jsx)(P.a,{variant:"secondary",onClick:function(){return e.removeOption()},children:"Remove"})]})}),Object(k.jsx)("hr",{}),Object(k.jsxs)(A.a.Group,{className:"mt-3 text-end",children:[Object(k.jsx)(P.a,{className:"m-2",onClick:this.props.onHide,children:"Close"}),Object(k.jsx)(P.a,{className:"m-2",variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(c.a.Component);ee.contextType=C;var te=ee,ne=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(S.a,Object(O.a)(Object(O.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(k.jsx)(S.a.Header,{closeButton:!0,children:Object(k.jsx)(S.a.Title,{id:"contained-modal-title-vcenter",children:"Create Poll"})}),Object(k.jsx)(S.a.Body,{children:Object(k.jsx)(te,{onHide:e.onHide})})]}))})},ae=function(){var e=Object(a.useContext)(C),t=e.store,n=e.actions,c=Object(a.useState)(null),s=Object(i.a)(c,2),r=s[0],o=s[1],O=Object(l.k)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.a,{bg:"primary",variant:"dark",expand:"md",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(h.LinkContainer,{exact:!0,to:"/",children:Object(k.jsx)(j.a.Brand,{children:"Poll'O"})}),Object(k.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(k.jsxs)(d.a,{className:"me-auto justify-content-center",children:[t.isAuthenticated?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(d.a.Link,{variant:"light",onClick:function(){return o("CreatePoll")},children:"Create Poll"}),Object(k.jsx)(ne,{show:"CreatePoll"===r,onHide:function(){return o(null)}})]}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(h.LinkContainer,{exact:!0,to:"/",children:Object(k.jsx)(d.a.Link,{children:" Polls "})})]}),Object(k.jsx)(d.a,{className:"me-auto;justify-content-end;",children:t.isAuthenticated&&t.user?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(h.LinkContainer,{to:"/dashboard",children:Object(k.jsx)(d.a.Link,{children:"Dashboard"})}),Object(k.jsxs)(b.a,{title:"hi, "+t.user.name,id:"collasible-nav-dropdown",children:[Object(k.jsx)(b.a.Item,{children:"Accout Settings"}),Object(k.jsx)(b.a.Divider,{}),Object(k.jsx)(b.a.Item,{onClick:function(){n.logout(),O.push("/"),O.go(0)},children:"Sign Out"})]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(d.a.Link,{variant:"light",onClick:function(){return o("Login")},children:"Sign In"}),Object(k.jsx)(Y,{show:"Login"===r,onHide:function(){return o(null)},setModalShow:o})]})})]})]})})})},ce=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(u.a,{className:"h-100",children:[Object(k.jsx)("h1",{className:"display-1 text-center",children:e.heading}),Object(k.jsx)("hr",{}),e.children]})})},se=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=function(){return c(!n)};return Object(k.jsx)(ce,{heading:"Poll'O",children:n?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(G,{handleClick:s})}):Object(k.jsx)(U,{handleClick:s})})},re=n(145),oe=n(146),le=function(){return Object(k.jsx)(ce,{heading:"Dashboard",children:Object(k.jsxs)(re.a,{defaultActiveKey:"AttemptedPolls",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(k.jsx)(oe.a,{eventKey:"AttemptedPolls",title:"Attempted Polls",children:Object(k.jsx)(V,{})}),Object(k.jsx)(oe.a,{eventKey:"mypolls",title:"My Polls",children:Object(k.jsx)(W,{})})]})})},ie=function(){var e=Object(a.useContext)(C).store.isAuthenticated,t=Object(l.k)();return Object(a.useEffect)((function(){e&&t.goBack()}),[e,t]),Object(k.jsx)(ce,{heading:"Login | Register",children:Object(k.jsx)(N.a,{className:"justify-content-center",children:Object(k.jsx)(w.a,{className:"col-lg-4",children:Object(k.jsxs)(re.a,{defaultActiveKey:"Login",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(k.jsx)(oe.a,{eventKey:"Login",title:"Login",children:Object(k.jsx)(L,{})}),Object(k.jsx)(oe.a,{eventKey:"Register",title:"Register",children:Object(k.jsx)(T,{})})]})})})})},je=function(){var e=Object(l.m)().poll_id,t=Object(l.k)(),n=Object(a.useState)(!0),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(!1),j=Object(i.a)(o,2),u=j[0],d=j[1],b=Object(a.useState)(null),h=Object(i.a)(b,2),O=h[0],p=h[1],x=Object(a.useContext)(C).store.token;return console.log("poll id received:",e,x),Object(a.useEffect)((function(){var n={method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+x},params:{poll_id:e}};f.a.get("http://127.0.0.1:5000/api/polls/getpoll",n).then((function(e){200===e.status&&(p(e.data),r(!1))})).catch((function(e){console.error("error in getpoll:",e),422!==e.response.status&&401!==e.response.status||t.push("/login")}))}),[u,x,e,t]),console.log(O),Object(k.jsx)(ce,{heading:"Poll'O",children:s?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("p",{children:"Loading"})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N.a,{children:Object(k.jsx)(D.a,{className:"text-center h2",body:!0,children:O.polldata.question})}),Object(k.jsxs)(N.a,{className:"justify-content-center",children:[!O.polldata.attempted&&Object(k.jsx)(w.a,{className:"col-md-6",children:Object(k.jsx)(H,{poll:O,changed:u,setchanged:d})}),Object(k.jsx)(w.a,{className:"col-md-6",children:Object(k.jsx)(M,{poll:O})})]}),Object(k.jsx)(N.a,{className:"justify-content-center text-center",children:Object(k.jsx)(w.a,{children:Object(k.jsxs)(A.a.Group,{as:N.a,className:"mb-3 justify-content-center",children:[Object(k.jsx)(A.a.Label,{column:!0,sm:"2",children:"Share Link"}),Object(k.jsx)(w.a,{sm:"4",children:Object(k.jsx)(A.a.Control,{plaintext:!0,readOnly:!0,defaultValue:window.location.href})})]})})})]})})};var ue=y((function(){return Object(k.jsxs)(o.BrowserRouter,{children:[Object(k.jsx)(ae,{}),Object(k.jsxs)(l.g,{children:[Object(k.jsx)(l.d,{exact:!0,path:"/",children:Object(k.jsx)(se,{})}),Object(k.jsx)(l.d,{exact:!0,path:"/dashboard",children:Object(k.jsx)(le,{})}),Object(k.jsx)(l.d,{exact:!0,path:"/login",children:Object(k.jsx)(ie,{})}),Object(k.jsx)(l.d,{exact:!0,path:"/poll/:poll_id",children:Object(k.jsx)(je,{})})]})]})}));r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(ue,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.433b62b8.chunk.js.map