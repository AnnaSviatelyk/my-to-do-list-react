(this["webpackJsonpmy-to-do-list-on-react"]=this["webpackJsonpmy-to-do-list-on-react"]||[]).push([[0],{21:function(e,t,n){},44:function(e,t,n){e.exports=n.p+"static/media/illustration.bfcc6550.svg"},46:function(e,t,n){e.exports=n(89)},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),s=n(27),c=n(7),l=n(16),u=n(43),d=(n(55),n(10)),m=n(11),p=n(13),h=n(12),f=n(2);n(56),n(57),n(58);function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}function k(e){return e<10?"0".concat(e):e}n(59);var v=function(e){var t=e.className,n=void 0===t?"":t;return r.a.createElement("div",{className:"line ".concat(n)})},_=(n(60),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"logo"},"My To-Do List"),r.a.createElement("span",{className:"logo__author"},"By Anna Sviatelyk"))}),E=function(){var e=new Date,t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear(),r=e.getHours();r=k(r);var o=e.getMinutes();return{day:t,month:n,year:a,hours:r,minutes:o=k(o)}}(),S=E.day,b=E.month,w=E.year,y=E.hours,T=E.minutes,A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement(_,null),r.a.createElement("div",{className:"header__date-and-time"},r.a.createElement("span",{className:"header__data-label"},"Today"),r.a.createElement("span",{className:"header__data header__data--date"},b," ",S,", ",w),r.a.createElement("span",{className:"header__data-label"},"Time"),r.a.createElement("span",{className:"header__data header__data--time"},y,":",T))),r.a.createElement(v,null))},O=n(44),N=n.n(O),C=(n(61),function(e){return r.a.createElement("div",{className:"new-item",onClick:e.click},r.a.createElement("i",{className:"new-item__plus-icon"}),r.a.createElement("span",{className:"new-item__label"},e.children))}),I=(n(62),n(25)),j=(n(21),function(e){var t=e.update,n=e.cancel;return r.a.createElement("div",{className:"task__btns"},r.a.createElement("i",{className:"task__btn-done",onClick:t}),r.a.createElement("i",{className:"task__btn-exit-edit",onClick:n}))}),U=function(e){var t=e.value,n=e.spanHeight,o=e.change,i=e.closeTextArea,s=Object(a.useRef)(null),c=t?"":"task__edit-input-text--invalid";Object(a.useEffect)((function(){var e=Math.min(100,n),a=parseFloat(window.getComputedStyle(s.current,null).getPropertyValue("padding-top"));s.current.style.height=e+2*a+"px",t?(s.current.rows=1,s.current.style.height="auto",e=Math.min(100,s.current.scrollHeight),s.current.style.height=e+"px"):s.current.style.height="37px"}),[t,n]);return r.a.createElement("textarea",{className:"task__edit-input-text ".concat(c),type:"text",autoFocus:!0,ref:s,onChange:o,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),e.target.value.length>0&&i())},value:t})},H=n(20),F=n.n(H),D=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},x=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},M=function(){return function(e){var t,n=localStorage.getItem("token");if(n){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(x());else{var r=localStorage.getItem("userId");e(D(n,r)),e((t=(a.getTime()-(new Date).getTime())/1e3,function(e){setTimeout((function(){e(x())}),1e3*t)}))}}else e(x())}},L=n(8),B=function(e,t,n){return console.log(n),function(a){F.a.post("https://my-to-do-list-on-react.firebaseio.com/tasks/"+n+".json?auth="+e,Object(L.a)({},t)).then((function(e){a({type:"POST_TASKS_SUCCESS",data:e.data.name})})).catch((function(e){var t=e.response.data.error.message.toLowerCase().split("_").join(" ");a(function(e){return{type:"POST_TASKS_FAIL",error:e}}(t))}))}},K=Object(c.b)((function(e){return{tasks:e.todo.tasks,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFinishOrDeleteTask:function(t){return e(function(e){return{type:"FINISH_OR_DELETE_TASK",id:e}}(t))},onTaskUpdate:function(t,n){return e(function(e,t){return{type:"UPDATE_TASK",description:e,id:t}}(t,n))},postTasks:function(t,n){return e(B(t,n))}}}))((function(e){var t=e.data,n=e.onFinishOrDeleteTask,o=e.onTaskUpdate,i=e.postTasks,s=e.tasks,c=e.token,l=e.userId,u=Object(a.useState)(!1),d=Object(I.a)(u,2),m=d[0],p=d[1],h=Object(a.useState)(37),f=Object(I.a)(h,2),g=f[0],k=f[1],_=Object(a.useState)(t.description),E=Object(I.a)(_,2),S=E[0],b=E[1],w=Object(a.useRef)(null),y=function(e){var t=e.target.classList[0];["task__edit-input-text","task__btn-done","task__btn-exit-edit"].includes(t)||T()};Object(a.useEffect)((function(){var e=w.current.offsetHeight;k(e)}),[]),Object(a.useEffect)((function(){return m&&document.addEventListener("click",y),function(){return document.removeEventListener("click",y)}}),[m,S]);var T=function(){S.length>0&&(p(!1),o(S,t.id),i(c,s,l))},A=function(){n(t.id),i(c,s,l)};return r.a.createElement("div",{className:"task"},r.a.createElement("div",{className:"task__content-wrapper"},r.a.createElement("div",{className:"task__description"},m?r.a.createElement(U,{change:function(e){var t=e.target.value;b(t)},closeTextArea:T,value:S,spanHeight:g}):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"task__checkbox"},r.a.createElement("input",{type:"checkbox",name:"check"}),r.a.createElement("svg",{version:"1.1",className:"task__checkbox_svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{enableBackground:"new 0 0 100 100"},xmlSpace:"preserve"},r.a.createElement("polyline",{className:"task__checkbox_line",points:"3.5,45.5 40.5,82.5 95.7,15.3 ",strokeLinecap:"round",onAnimationEnd:A}))),r.a.createElement("span",{className:"task__name",ref:w},S))),m?r.a.createElement(j,{update:T,cancel:function(){p(!1),b(t.description)}}):r.a.createElement("div",{className:"task__btns"},r.a.createElement("i",{className:"task__btn-edit",onClick:function(){p(!0)}}),r.a.createElement("i",{className:"task__btn-delete",onClick:A}))),r.a.createElement(v,{className:"line__in-task"}))})),P=n(92),R=n(91),V=function(e){var t=e.tasks;return r.a.createElement(P.a,{className:"tasks-container"},t.map((function(e){return r.a.createElement(R.a,{key:e.id,timeout:300,classNames:"task"},r.a.createElement(K,{data:e}))})))},W=(n(80),function(e){var t=e.value,n=e.cancelClick,a=e.onChange,o=e.onAdd;return r.a.createElement("div",{className:"add-new-item"},r.a.createElement("div",{className:"add-new-item__description-field"},r.a.createElement("input",{type:"text",className:"add-new-item__description",placeholder:"E.g. Start working on new project...",onChange:a,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),""!==e.target.value&&o(t.length))}})),r.a.createElement("div",{className:"add-new-item__buttons"},r.a.createElement("button",{className:"add-new-item__btn-add-task ".concat(t.length?"":" add-new-item__btn-add-task--disabled"),onClick:function(){return o(t.length)}}," Add task"),r.a.createElement("button",{className:"add-new-item__btn-cancel",onClick:n},"Cancel")))}),q=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isShownAddTaskInput:!1,addInputValue:""},e.addNewTaskBtnHandler=function(){e.setState({isShownAddTaskInput:!0})},e.cancelAddingTaskHandler=function(){e.setState({isShownAddTaskInput:!1,addInputValue:""})},e.addInputChangeHandler=function(t){e.setState({addInputValue:t.target.value})},e.addTaskBtnHandler=function(t){if(t>0){var n={description:e.state.addInputValue,id:g(),userId:e.props.userId};e.props.onAddTask(n.description,n.id),e.props.postTasks(e.props.token,n,e.props.userId),e.setState({isShownAddTaskInput:!1,addInputValue:""})}},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchTasks(this.props.token,this.props.userId)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("img",{src:N.a,alt:"time management illustration",className:"illustration"}),r.a.createElement(V,{tasks:this.props.tasks}),this.state.isShownAddTaskInput?r.a.createElement(W,{cancelClick:this.cancelAddingTaskHandler,value:this.state.addInputValue,onChange:this.addInputChangeHandler,onAdd:this.addTaskBtnHandler}):r.a.createElement(C,{click:this.addNewTaskBtnHandler},"Add new task"))}}]),n}(a.Component),J=Object(c.b)((function(e){return{tasks:e.todo.tasks,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onAddTask:function(t,n){return e(function(e,t){return{type:"ADD_TASK",description:e,id:t}}(t,n))},postTasks:function(t,n,a){return e(B(t,n,a))},onFetchTasks:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_TASKS_START"});var a="?auth="+e;F.a.get("https://my-to-do-list-on-react.firebaseio.com/tasks/"+t+".json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(L.a)(Object(L.a)({},e.data[a]),{},{id:a}));n({type:"FETCH_TASKS_SUCCESS",tasks:t||[]})})).catch((function(e){n(function(e){return{type:"FETCH_TASKS_FAIL",error:e}}(e))}))}}(t,n))}}}))(q),z=(n(81),n(82),function(e){var t=e.children,n=e.type,a=e.click,o=e.disabled,i=null;return"with-background"===n&&(i="authBtn"),"with-border"===n&&(i="authBtn authBtn--with-border"),"text-btn"===n&&(i="authBtn authBtn--text"),"with-background-wide"===n&&(i="authBtn authBtn--wide"),r.a.createElement("button",{className:i,onClick:a,disabled:o},t)}),G=function(e){var t=e.click;return r.a.createElement("div",{className:"authBtns-container"},r.a.createElement(z,{type:"with-border",click:function(){return t(!1,!0)}},"Login"),r.a.createElement(z,{type:"with-background",click:function(){return t(!0,!0)}},"Register"))},X=(n(83),function(e){var t=e.clicked;return e.show?r.a.createElement("div",{className:"Backdrop",onClick:t}):null}),Y=(n(84),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{show:this.props.show,clicked:this.props.backDropClick}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":0}},this.props.children))}}]),n}(a.Component)),Z=n(24),$=(n(85),n(86),function(e){var t=e.elementConfig,n=e.invalid,a=e.shouldValidate,o=e.touched,i=e.value,s=e.changed,c=e.label,l=["input"];n&&a&&o&&l.push("input--invalid");var u=r.a.createElement("input",Object.assign({className:l.join(" ")},t,{value:i,onChange:s}));return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"Label"},c),u)}),Q=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={controls:{userName:{elementConfig:{type:"input",placeholder:"User Name"},value:"",touched:!1,valid:!1,validation:{required:!0,onlyLettersAndNumbers:!0,minLength:4}},password:{elementConfig:{type:"password",placeholder:"Password"},value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}}},errorMessage:e.props.errorMessage},e.switchAuthModeHandler=function(){e.props.onAuthSwitchMode(!e.props.isSignUp)},e.inputChangedHandler=function(t,n){var a=Object(L.a)(Object(L.a)({},e.state.controls),{},Object(Z.a)({},n,Object(L.a)(Object(L.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a,errorMessage:null})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.userName.value,e.state.controls.password.value,e.props.isSignUp)},e}return Object(m.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.onlyLettersAndNumbers){n=/^[0-9a-zA-Z]+$/.test(e)&&n}return t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var o=t.map((function(t){var n=null;return!t.config.valid&&t.config.touched&&"userName"===t.id&&(n="Username must be at least 4 characters long and contain only letters and numbers "),!t.config.valid&&t.config.touched&&"password"===t.id&&(n="Password must be at least 6 characters long"),r.a.createElement(a.Fragment,{key:t.id},r.a.createElement($,{elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)},shouldValidate:t.config.validation,invalid:!t.config.valid}),r.a.createElement("p",{className:"auth__error-message"},"Email Exist"===n?"Username exist":n))}));return r.a.createElement("div",null,r.a.createElement("h4",{className:"auth__welcome"},this.props.isSignUp?"Welcome to our app!":"Welcome back!"),r.a.createElement("form",{onSubmit:this.submitHandler},o,r.a.createElement("p",{className:"auth__error-message auth__error-message--capitalize"},this.state.errorMessage),r.a.createElement(z,{type:"with-background-wide",disabled:!this.state.controls.userName.valid||!this.state.controls.password.valid},"Submit")),r.a.createElement("p",{className:"toSignIn"},this.props.isSignUp?"Already have an account?":"Don't have an account?"),r.a.createElement(z,{type:"text-btn",click:this.switchAuthModeHandler},this.props.isSignUp?"Sign in":"Sign up"))}}]),n}(a.Component),ee=Object(c.b)((function(e){return{isSignUp:e.auth.isSignUp,errorMessage:e.auth.error,token:e.auth.token}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={username:e,email:"".concat(e,"@todo.list"),password:t,returnSecureToken:!0};console.log(r.username);var o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTkC5sKi6tMveqTPRvodHeA42E495rGng";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTkC5sKi6tMveqTPRvodHeA42E495rGng"),F.a.post(o,r).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(D(e.data.idToken,e.data.localId))})).catch((function(e){var t=e.response.data.error.message.toLowerCase().split("_").join(" ");a(function(e){return{type:"AUTH_FAIL",error:e}}(t))}))}}(t,n,a))},onAuthSwitchMode:function(t){return e(function(e){return{type:"SWITCH_AUTH_MODE",isSignUp:e}}(t)).errorMessage}}}))(Q),te=(n(87),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),ne=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){this.props.token&&this.props.history.push("/to-do-list");var e=null;return this.props.isFormShown&&(e=r.a.createElement(Y,{show:this.props.isFormShown,backDropClick:this.props.onBackdropClick},this.props.loading?r.a.createElement(te,null):r.a.createElement(ee,{isSignUp:this.props.isSignUp}))),r.a.createElement("div",{className:"Main"},e,r.a.createElement("div",{className:"Main__header"},r.a.createElement(_,null)),r.a.createElement("h1",{className:"Main__heading"},"All your tasks ",r.a.createElement("br",null)," managed in one place"),r.a.createElement("p",{className:"Main__sub-heading"},"My To-Do List is a useful tool for everyone, ",r.a.createElement("br",null)," who wants to keep their everyday routine under control."),r.a.createElement(G,{click:this.props.onAuthBtnClick}),r.a.createElement("div",{className:"Main__illustration-container"}))}}]),n}(a.Component),ae=Object(c.b)((function(e){return{isSignUp:e.auth.isSignUp,isFormShown:e.auth.isFormShown,loading:e.auth.loading,token:e.auth.token}}),(function(e){return{onAuthBtnClick:function(t,n){return e(function(e,t){return{type:"AUTH_BTN_CLICK",isSignUp:e,isFormShown:t}}(t,n))},onBackdropClick:function(){return e({type:"CLOSE_FORM",isFormShown:!1,error:null})}}}))(ne),re=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",component:ae}),this.props.isAuth?r.a.createElement(f.a,{from:"/",to:"/to-do-list"}):r.a.createElement(f.a,{to:"/"}));return this.props.isAuth&&(e=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/to-do-list",component:J}),r.a.createElement(f.a,{to:"/to-do-list"}))),r.a.createElement("div",{className:"App"},e)}}]),n}(a.Component),oe=Object(f.g)(Object(c.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e(M())}}}))(re));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=function(e,t){return Object(L.a)(Object(L.a)({},e),t)},se={isSignUp:!1,isFormShown:!1,loading:!1,token:null,userId:null,error:null},ce=function(e){return ie(e,{error:null,loading:!0})},le=function(e,t){return ie(e,{token:t.idToken,userId:t.userId,error:null,loading:!1,isFormShown:!1})},ue=function(e,t){return ie(e,{error:t.error,loading:!1})},de=function(e,t){return ie(e,{isSignUp:t.isSignUp})},me=function(e){return ie(e,{token:null,userId:null})},pe=function(e,t){return ie(e,{isSignUp:t.isSignUp,isFormShown:t.isFormShown})},he=function(e,t){return ie(e,{isFormShown:t.isFormShown,error:t.error})},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return ce(e);case"AUTH_SUCCESS":return le(e,t);case"AUTH_FAIL":return ue(e,t);case"SWITCH_AUTH_MODE":return de(e,t);case"AUTH_LOGOUT":return me(e);case"AUTH_BTN_CLICK":return pe(e,t);case"CLOSE_FORM":return he(e,t);default:return e}},ge=n(31),ke={tasks:[],error:null,data:null},ve=function(e,t){var n=Object(ge.a)(e.tasks);return n.push({description:t.description,id:t.id}),ie(e,{tasks:n})},_e=function(e,t){var n=e.tasks.filter((function(e){return e.id!==t.id}));return ie(e,{tasks:n})},Ee=function(e,t){var n=Object(ge.a)(e.tasks);return n.forEach((function(e){e.id===t.id&&(e.description=t.description)})),ie(e,{tasks:n})},Se=function(e,t){return ie(e,{error:t.error})},be=function(e,t){return ie(e,{data:t.data,error:null})},we=function(e,t){return ie(e,{tasks:t.tasks,error:null})},ye=function(e,t){return ie(e,{error:t.error})},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return ve(e,t);case"FINISH_OR_DELETE_TASK":return _e(e,t);case"UPDATE_TASK":return Ee(e,t);case"POST_TASKS_SUCCESS":return be(e,t);case"POST_TASKS_FAIL":return Se(e,t);case"FETCH_TASKS_SUCCESS":return we(e,t);case"FETCH_TASKS_FAIL":return ye(e,t);default:return e}},Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Oe=Object(l.c)({todo:Te,auth:fe}),Ne=Object(l.e)(Oe,Ae(Object(l.a)(u.a))),Ce=r.a.createElement(c.a,{store:Ne},r.a.createElement(s.a,{basename:"/my-to-do-list-react"},r.a.createElement(oe,null)));i.a.render(Ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.d8a3f02b.chunk.js.map