(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("6d8bc883",content,!0,{sourceMap:!1})},278:function(t,e,n){t.exports=n.p+"img/down-red.3b09ca4.png"},279:function(t,e,n){"use strict";n(275)},280:function(t,e,n){var o=n(37),r=n(77),f=n(78),m=n(79),c=n(80),l=o(!1),d=r(f),v=r(m),h=r(c);l.push([t.i,'@font-face{font-family:"kate";font-style:normal;font-weight:400;font-display:swap;src:url('+d+') format("truetype")}@font-face{font-family:"din";font-style:normal;font-weight:400;font-display:swap;src:url('+v+') format("truetype")}@font-face{font-family:"din-bold";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("truetype")}html[data-v-5bef7f04]{scroll-behavior:smooth}body[data-v-5bef7f04],html[data-v-5bef7f04]{margin:0;padding:0;font-family:"din",Arial,Helvetica,sans-serif}.page-padding[data-v-5bef7f04]{padding:7vh 6vw}ul[data-v-5bef7f04]{margin:0;padding:0}li[data-v-5bef7f04]{list-style-type:none}a[data-v-5bef7f04]{text-decoration:none;color:inherit}@-webkit-keyframes arow-down-data-v-5bef7f04{0%{transform:rotate(0)}25%{transform:rotate(1turn)}50%{transform:rotate(1turn)}75%{transform:rotate(0deg)}}@keyframes arow-down-data-v-5bef7f04{0%{transform:rotate(0)}25%{transform:rotate(1turn)}50%{transform:rotate(1turn)}75%{transform:rotate(0deg)}}@-webkit-keyframes arow-up-data-v-5bef7f04{0%{transform:rotate(180deg)}25%{transform:rotate(540deg)}50%{transform:rotate(540deg)}75%{transform:rotate(180deg)}}@keyframes arow-up-data-v-5bef7f04{0%{transform:rotate(180deg)}25%{transform:rotate(540deg)}50%{transform:rotate(540deg)}75%{transform:rotate(180deg)}}.spinner-container[data-v-5bef7f04]{position:fixed;top:0;left:0;display:flex;height:100vh;width:100vw;background-color:#f13e16;justify-content:center;align-items:center;z-index:99}.spinner-container .lds-hourglass[data-v-5bef7f04]{display:inline-block;position:relative;width:80px;height:80px}.spinner-container .lds-hourglass[data-v-5bef7f04]:after{content:" ";display:block;border-radius:50%;width:0;height:0;margin:8px;box-sizing:border-box;border-color:#fff transparent;border-style:solid;border-width:32px;-webkit-animation:lds-hourglass-data-v-5bef7f04 1.2s infinite;animation:lds-hourglass-data-v-5bef7f04 1.2s infinite}@-webkit-keyframes lds-hourglass-data-v-5bef7f04{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(900deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}to{transform:rotate(5turn)}}@keyframes lds-hourglass-data-v-5bef7f04{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(900deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}to{transform:rotate(5turn)}}#contact[data-v-5bef7f04]{color:#f13e16;width:32%}#contact .contact-showcase[data-v-5bef7f04]{margin-top:10vh}#contact .contact-showcase h2[data-v-5bef7f04]{font-family:"kate";font-size:9.375rem;text-transform:capitalize;letter-spacing:.7rem;font-weight:300;margin-bottom:20px}@media screen and (max-width:1620px){#contact .contact-showcase h2[data-v-5bef7f04]{letter-spacing:.4rem;font-size:7.7rem}}@media screen and (max-width:1440px){#contact .contact-showcase h2[data-v-5bef7f04]{letter-spacing:.3rem;font-size:6.7rem}}#contact .contact-showcase p[data-v-5bef7f04]{font-weight:1.125rem;letter-spacing:2px}#contact .form-container[data-v-5bef7f04]{margin-top:5vh}#contact .form-container form .form-text[data-v-5bef7f04]{font-weight:700;color:#bc2200}#contact .form-container form input[data-v-5bef7f04],#contact .form-container form textarea[data-v-5bef7f04]{background-color:#f1e1c6}#contact .form-container form button[data-v-5bef7f04]{width:100%;background-color:#f13e16;color:#f8f0e3}#contact #arow-down-red[data-v-5bef7f04]{position:absolute;bottom:5vh;left:calc(50vw - 17.5px);width:35px;transform:rotate(180deg);cursor:pointer;z-index:3;-webkit-animation:arow-up-data-v-5bef7f04 10s ease infinite;animation:arow-up-data-v-5bef7f04 10s ease infinite}@media screen and (max-width:1620px){.form-container[data-v-5bef7f04]{margin-top:4vh}}@media screen and (max-width:1440px){#contact[data-v-5bef7f04]{width:35%}}@media screen and (max-width:1024px){#contact[data-v-5bef7f04]{width:40%}}',""]),t.exports=l},288:function(t,e,n){"use strict";n.r(e);n(33),n(34);var o={data:function(){return{name:"",email:"",message:"",errors:{name:null,email:null,message:null}}},mounted:function(){},methods:{handleSubmit:function(t){t.preventDefault(),this.validateName(this.name,this.errors),this.validateEmail(this.email,this.errors),this.validateMessage(this.message,this.errors)},validateName:function(t,e){this.name<3?e.name="* The name must contain more than 3 characters":/^[A-Za-z-0-9 ]+$/.test(t)?e.name=null:e.name="* The name must not include strange letters"},validateEmail:function(t,e){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?e.email=null:e.email="* Email is not valid"},validateMessage:function(t,e){t.length<10?e.message="* The message is too short":e.message=null},scrollToTop:function(){document.querySelector("#home-container").scrollTo(0,0)}}},r=(n(279),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"contact"}},[t._m(0),t._v(" "),o("div",{staticClass:"form-container"},[o("span",{attrs:{id:"bot-home"}}),t._v(" "),o("form",{on:{submit:function(e){return t.handleSubmit(e)}}},[o("div",{staticClass:"mb-3"},[o("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name","aria-describedby":"nameHelp"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),t.errors.name?o("div",{staticClass:"form-text",attrs:{id:"nameHelp"}},[t._v(t._s(t.errors.name))]):t._e()]),t._v(" "),o("div",{staticClass:"mb-3"},[o("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.errors.email?o("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[t._v(t._s(t.errors.email))]):t._e()]),t._v(" "),o("div",{staticClass:"mb-3"},[o("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("email")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{type:"email",id:"message",rows:"5"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),t.errors.message?o("div",{staticClass:"form-text",attrs:{id:"messageHelp"}},[t._v(t._s(t.errors.message))]):t._e()]),t._v(" "),o("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("send")])])]),t._v(" "),o("a",{on:{click:function(e){return t.scrollToTop()}}},[o("img",{ref:"arowd",attrs:{id:"arow-down-red",src:n(278),alt:"down"}})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-showcase"},[n("h2",[t._v("hello!")]),t._v(" "),n("p",[t._v("Let's get in touch, and Step up your vision!")])])}],!1,null,"5bef7f04",null);e.default=component.exports}}]);