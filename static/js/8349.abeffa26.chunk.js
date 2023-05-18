"use strict";(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[8349],{5363:function(e,t,o){var n=o(18489),r=o(83738),i=o(87087),a=(o(88082),o(19713),o(80184)),c=["src","alt","effect","className"];t.Z=function(e){var t=e.src,o=e.alt,s=e.effect,l=void 0===s?"blur":s,d=e.className,u=(0,r.Z)(e,c);return(0,a.jsx)(i.LazyLoadImage,(0,n.Z)({src:t,alt:o,effect:l,wrapperClassName:"".concat(d||""," lazy-image")},u))}},55015:function(e,t,o){o.d(t,{Z:function(){return c}});var n="style_header__rGwMj",r="style_header_title__btuqU",i=o(50200),a=o(80184),c=function(e){var t=e.title;return(0,a.jsx)("header",{className:n,children:(0,a.jsxs)("div",{className:"container d-flex flex-column g-10",children:[(0,a.jsx)("h2",{className:r,children:t}),(0,a.jsx)(i.Z,{})]})})}},38125:function(e,t,o){var n=o(54270),r=o(80184);t.Z=function(e){e.title;return(0,r.jsx)(n.q,{children:(0,r.jsx)("title",{children:" VoidGate "})})}},85644:function(e,t,o){o.r(t),o.d(t,{default:function(){return F}});var n=o(50678),r=o(72791),i=o(38125),a=o(55015),c="style_container__WEbBk",s="style_media__68-S8",l="style_media_img__zYSr8",d="style_main_socials__t1I0k",u="style_options__3HsO9",m="style_options_item__07Y5b",p="style_icon__WAB-8",f="style_main_form__iBI9F",h="style_remind__skGfn",v="style_btn__672R9",g="style_main__pSNay",_=o(5363),w=o(57534),b=o(84892);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var C=window,j=((0,r.memo)((function(e){var t=e.state,o=void 0===t?"":t,n=e.client_id,i=e.className,a=e.redirect_uri,c=e.scope,s=void 0===c?"profile":c,l=e.isOnlyGetToken,d=void 0!==l&&l,u=e.scope_data,m=void 0===u?{profile:{essential:!0}}:u,p=e.response_type,f=void 0===p?"token":p,h=e.children,v=e.onReject,g=e.onResolve,_=e.onLoginStart,w=(0,r.useRef)(null),b=(0,r.useState)(!1),y=b[0],j=b[1];(0,r.useEffect)((function(){!y&&R()}),[y]),(0,r.useEffect)((function(){return function(){w.current&&w.current.remove()}}),[]);var x=(0,r.useCallback)((function(){return!!document.getElementById("amazon-login")}),[]),E=(0,r.useCallback)((function(e,t,o,n,r){void 0===t&&(t="script");var i=e.createElement(t);i.id=o,i.src=n,i.async=!0,i.defer=!0;var a=document.getElementsByTagName("script")[0];w.current=i,a&&a.parentNode&&a.parentNode.insertBefore(i,a),i.onload=r}),[]),S=(0,r.useCallback)((function(e){try{return fetch("https://api.amazon.com/user/profile",{headers:{Authorization:"Bearer "+e.access_token}}).then((function(e){return e.json()})).then((function(t){g({provider:"amazon",data:k({},t,e)})})).catch((function(e){v(e)})).finally((function(){})),Promise.resolve()}catch(e){return Promise.reject(e)}}),[v,g]),N=(0,r.useCallback)((function(e){d?g({provider:"amazon",data:k({},e)}):S(e)}),[S,g,d]),P=(0,r.useCallback)((function(e){v(e)}),[v]),R=(0,r.useCallback)((function(){x()?j(!0):E(document,"script","amazon-login","https://assets.loginwithamazon.com/sdk/na/login1.js",(function(){C.amazon.Login.setClientId(n),j(!0)}))}),[x,n,E]),T=(0,r.useCallback)((function(){y&&(C.amazon?(_&&_(),C.amazon.Login.authorize({scope:s,scope_data:m,response_type:f,redirect_uri:a,state:o},(function(e){e.error?P(e.error):N(e)}))):(R(),v("Google SDK isn't loaded!")))}),[R,s,o,v,m,y,P,_,a,f,N]);return r.createElement("div",{className:i,onClick:T},h)})),window),x=(0,r.memo)((function(e){var t=e.appId,o=e.scope,n=void 0===o?"email,public_profile":o,i=e.state,a=void 0===i||i,c=e.xfbml,s=void 0===c||c,l=e.cookie,d=void 0===l||l,u=e.version,m=void 0===u?"v2.7":u,p=e.language,f=void 0===p?"en_EN":p,h=e.auth_type,v=void 0===h?"":h,g=e.className,_=e.onLoginStart,w=e.onReject,b=e.onResolve,y=e.redirect_uri,C=e.fieldsProfile,x=void 0===C?"id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender":C,E=e.response_type,S=void 0===E?"code":E,N=e.return_scopes,P=void 0===N||N,R=e.isOnlyGetToken,T=void 0!==R&&R,I=e.children,L=(0,r.useRef)(null),A=(0,r.useState)(!1),O=A[0],z=A[1],B=(0,r.useState)(!1),G=B[0],F=B[1];(0,r.useEffect)((function(){!O&&q()}),[O]),(0,r.useEffect)((function(){return function(){L.current&&L.current.remove()}}),[]);var Z=(0,r.useCallback)((function(e,t){var o=e.createElement("script");o.id="facebook-jssdk",o.src="https://connect.facebook.net/en_EN/sdk.js";var n=e.getElementsByTagName("script")[0];n&&n.parentNode&&n.parentNode.insertBefore(o,n),t()}),[]),U=(0,r.useCallback)((function(){return!!document.getElementById("facebook-jssdk")}),[]),D=(0,r.useCallback)((function(e,t){var o=window;o.fbAsyncInit=function(){o.FB&&o.FB.init(k({},e)),z(!0);var n=t.getElementById("fb-root");n||((n=t.createElement("div")).id="fb-root",t.body.appendChild(n)),L.current=n}}),[]),H=(0,r.useCallback)((function(e){j.FB.api("/me",{locale:f,fields:x},(function(t){b({provider:"facebook",data:k({},e,t)})}))}),[x,f,b]),M=(0,r.useCallback)((function(e){e.authResponse?T?b({provider:"facebook",data:k({},e.authResponse)}):H(e.authResponse):w(e),F(!1)}),[H,T,w,b]),q=(0,r.useCallback)((function(){U()?z(!0):Z(document,(function(){D({appId:t,xfbml:s,version:m,state:a,cookie:d,redirect_uri:y,response_type:S},document)}))}),[a,t,s,d,m,D,y,S,Z,U]),K=(0,r.useCallback)((function(){O&&!G&&(j.FB?(F(!0),_&&_(),j.FB.login(M,{scope:n,return_scopes:P,auth_type:v})):(q(),w("Fb isn't loaded!"),F(!1)))}),[q,n,w,v,O,_,G,P,M]);return r.createElement("div",{className:g,onClick:K},I)})),E="875c0462-6309-4ddf-9889-5227b1acc82c",S=window,N=(0,r.memo)((function(e){var t=e.client_id,o=e.scope,n=void 0===o?"https://www.googleapis.com/auth/userinfo.profile":o,i=e.prompt,a=void 0===i?"select_account":i,c=e.typeResponse,s=void 0===c?"accessToken":c,l=e.ux_mode,d=e.className,u=void 0===d?"":d,m=e.login_hint,p=void 0===m?"":m,f=e.access_type,h=void 0===f?"online":f,v=e.onLoginStart,g=e.onReject,_=e.onResolve,w=e.redirect_uri,b=void 0===w?"/":w,y=e.auto_select,C=void 0!==y&&y,j=e.isOnlyGetToken,x=void 0!==j&&j,N=e.cookie_policy,P=void 0===N?"single_host_origin":N,R=e.hosted_domain,T=void 0===R?"":R,I=e.discoveryDocs,L=void 0===I?"":I,A=e.children,O=e.fetch_basic_profile,z=void 0===O||O,B=(0,r.useRef)(null),G=(0,r.useState)(!1),F=G[0],Z=G[1],U=(0,r.useState)(null),D=U[0],H=U[1];(0,r.useEffect)((function(){!F&&V()}),[F]),(0,r.useEffect)((function(){return function(){B.current&&B.current.remove()}}),[]);var M=(0,r.useCallback)((function(){return!!document.getElementById("google-login")}),[]),q=(0,r.useCallback)((function(e,t,o,n,r){void 0===t&&(t="script");var i=e.createElement(t);i.id=o,i.src=n,i.async=!0,i.defer=!0;var a=document.getElementsByTagName("script")[0];B.current=i,a&&a.parentNode&&a.parentNode.insertBefore(i,a),i.onload=r}),[]),K=(0,r.useCallback)((function(e){if("accessToken"===s){var t=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":E,Authorization:"Bearer "+e.access_token});fetch("https://cors.bridged.cc/https://www.googleapis.com/oauth2/v3/userinfo?alt=json",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){var o=k({},e,t);_({provider:"google",data:o})})).catch((function(e){g(e)}))}else fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+e.credential,{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log("\ud83d\ude80 ~ file: index.tsx ~ line 153 ~ response",t);var o=k({},e,t);_({provider:"google",data:o})})).catch((function(e){g(e)}))}),[s,g,_]),W=(0,r.useCallback)((function(e){x?_({provider:"google",data:e}):K(e)}),[x,K,_]),V=(0,r.useCallback)((function(){M()?Z(!0):q(document,"script","google-login","https://accounts.google.com/gsi/client",(function(){var e={client_id:t,ux_mode:l},o=null;"idToken"===s?S.google.accounts.id.initialize(k({},e,{auto_select:C,callback:W})):o=S.google.accounts.oauth2.initTokenClient(k({},e,{scope:n,prompt:a,login_hint:p,access_type:h,hosted_domain:T,redirect_uri:b,cookie_policy:P,discoveryDocs:L,immediate:!0,fetch_basic_profile:z,callback:W})),o&&H(o),Z(!0)}))}),[n,a,l,t,p,C,h,b,s,L,P,T,W,z,q,M]),Y=(0,r.useCallback)((function(){F&&(S.google?(v&&v(),D?D.requestAccessToken():S.google.accounts.id.prompt()):(V(),g("Google SDK isn't loaded!")))}),[D,F,V,v,g]);return r.createElement("div",{className:u,onClick:Y},A)}));(0,r.memo)((function(e){var t=e.state,o=void 0===t?"":t,n=e.scope,i=void 0===n?"repo,gist":n,a=e.client_id,c=e.client_secret,s=e.className,l=void 0===s?"":s,d=e.redirect_uri,u=e.allow_signup,m=void 0!==u&&u,p=e.isOnlyGetToken,f=void 0!==p&&p,h=e.isOnlyGetCode,v=void 0!==h&&h,g=e.children,_=e.onReject,w=e.onResolve,b=e.onLoginStart;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_github")&&t&&(localStorage.setItem("github",t),window.close())}),[]);var C=(0,r.useCallback)((function(e){fetch("https://cors.bridged.cc/https://api.github.com//user",{method:"GET",headers:{Authorization:"token "+e.access_token,"x-cors-grida-api-key":E}}).then((function(e){return e.json()})).then((function(t){w({provider:"github",data:k({},t,e)})})).catch((function(e){_(e)}))}),[_,w]),j=(0,r.useCallback)((function(e){if(v)w({provider:"github",data:{code:e}});else{var t={code:e,state:o,redirect_uri:d,client_id:a,client_secret:c},n=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":E});fetch("https://cors.bridged.cc/https://github.com/login/oauth/access_token",{method:"POST",headers:n,body:new URLSearchParams(t)}).then((function(e){return e.text()})).then((function(e){for(var t,o={},n=function(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return y(e,void 0);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?y(e,void 0):void 0}}(e))){o&&(e=o);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(o=e[Symbol.iterator]()).next.bind(o)}(new URLSearchParams(e));!(t=n()).done;){var r=t.value;o[r[0]]=r[1]}o.access_token?f?w({provider:"github",data:o}):C(o):_("no data")})).catch((function(e){_(e)}))}}),[o,_,C,w,a,d,c,v,f]),x=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"github"===n&&o&&j(o))}catch(e){return Promise.reject(e)}}),[j]),S=(0,r.useCallback)((function(){window.removeEventListener("storage",S,!1);var e=localStorage.getItem("github");e&&(x({provider:"github",type:"code",code:e}),localStorage.removeItem("instagram"))}),[x]),N=(0,r.useCallback)((function(){b&&b(),window.addEventListener("storage",S,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://github.com/login/oauth/authorize?client_id="+a+"&scope="+i+"&state="+o+"_github&redirect_uri="+d+"&allow_signup="+m,"Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}),[i,o,a,d,m,b,S]);return r.createElement("div",{className:l,onClick:N},g)})),(0,r.memo)((function(e){var t=e.state,o=void 0===t?"":t,n=e.client_id,i=e.client_secret,a=e.className,c=e.redirect_uri,s=e.fields,l=void 0===s?"id,username,account_type,media_count":s,d=e.scope,u=void 0===d?"user_profile,user_media":d,m=e.response_type,p=void 0===m?"code":m,f=e.isOnlyGetCode,h=void 0!==f&&f,v=e.isOnlyGetToken,g=void 0!==v&&v,_=e.children,w=e.onReject,b=e.onResolve,y=e.onLoginStart;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_instagram")&&t&&(localStorage.setItem("instagram",t),window.close())}),[]);var C=(0,r.useCallback)((function(e){fetch("https://cors.bridged.cc/https://graph.instagram.com//me?fields="+l+"&access_token="+e.access_token,{method:"GET",headers:{"x-cors-grida-api-key":E}}).then((function(e){return e.json()})).then((function(t){b({provider:"instagram",data:k({},t,e)})})).catch((function(e){w(e)}))}),[l,w,b]),j=(0,r.useCallback)((function(e){if(h)b({provider:"instagram",data:{code:e}});else{var t={grant_type:"authorization_code",code:e,redirect_uri:c,client_id:n,client_secret:i},o=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":E});fetch("https://cors.bridged.cc/https://api.instagram.com/oauth/access_token",{method:"POST",headers:o,body:new URLSearchParams(t)}).then((function(e){return e.json()})).then((function(e){e.access_token?g?b({provider:"instagram",data:e}):C(e):w("no data")})).catch((function(e){w(e)})).finally((function(){}))}}),[w,b,C,n,c,i,h,g]),x=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"instagram"===n&&o&&j(o))}catch(e){return Promise.reject(e)}}),[j]),S=(0,r.useCallback)((function(){window.removeEventListener("storage",S,!1);var e=localStorage.getItem("instagram");e&&(x({provider:"instagram",type:"code",code:e}),localStorage.removeItem("instagram"))}),[x]),N=(0,r.useCallback)((function(){y&&y(),window.addEventListener("storage",S,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://api.instagram.com/oauth/authorize?response_type="+p+"&client_id="+n+"&scope="+u+"&state="+o+"_instagram&redirect_uri="+c,"Instagram","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}),[u,o,n,c,y,p,S]);return r.createElement("div",{className:a,onClick:N},_)})),(0,r.memo)((function(e){var t=e.tenant,o=void 0===t?"common":t,n=e.state,i=void 0===n?"":n,a=e.client_id,c=e.className,s=e.redirect_uri,l=e.scope,d=void 0===l?"profile openid email":l,u=e.response_type,m=void 0===u?"code":u,p=e.response_mode,f=void 0===p?"query":p,h=e.children,v=e.code_challenge,g=void 0===v?"19cfc47c216dacba8ca23eeee817603e2ba34fe0976378662ba31688ed302fa9":v,_=e.code_challenge_method,w=void 0===_?"plain":_,b=e.prompt,y=void 0===b?"select_account":b,C=e.isOnlyGetCode,j=void 0!==C&&C,x=e.isOnlyGetToken,E=void 0!==x&&x,S=e.onLoginStart,N=e.onReject,P=e.onResolve;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_microsoft")&&t&&(localStorage.setItem("microsoft",t),window.close())}),[]);var R=(0,r.useCallback)((function(e){fetch("https://graph.microsoft.com/v1.0/me",{method:"GET",headers:{Authorization:"Bearer "+e.access_token}}).then((function(e){return e.json()})).then((function(t){P({provider:"microsoft",data:k({},t,e)})})).catch((function(e){N(e)}))}),[N,P]),T=(0,r.useCallback)((function(e){if(j)P({provider:"microsoft",data:{code:e}});else{var t={code:e,scope:d,client_id:a,redirect_uri:s,code_verifier:g,grant_type:"authorization_code"},n=new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"});fetch("https://login.microsoftonline.com/"+o+"/oauth2/v2.0/token",{method:"POST",headers:n,body:new URLSearchParams(t)}).then((function(e){return e.json()})).then((function(e){e.access_token?E?P({provider:"microsoft",data:e}):R(e):N("no data")})).catch((function(e){N(e)}))}}),[d,o,N,R,a,P,s,g,j,E]),I=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"microsoft"===n&&o&&T(o))}catch(e){return Promise.reject(e)}}),[T]),L=(0,r.useCallback)((function(){window.removeEventListener("storage",L,!1);var e=localStorage.getItem("microsoft");e&&(I({provider:"microsoft",type:"code",code:e}),localStorage.removeItem("microsoft"))}),[I]),A=(0,r.useCallback)((function(){S&&S(),window.addEventListener("storage",L,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://login.microsoftonline.com/"+o+"/oauth2/v2.0/authorize?client_id="+a+"\n        &response_type="+m+"\n        &redirect_uri="+s+"\n        &response_mode="+f+"\n        &scope="+d+"\n        &state="+i+"_microsoft\n        &prompt="+y+"\n        &code_challenge="+g+"\n        &code_challenge_method="+w,"Microsoft","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}),[d,i,y,o,a,S,s,f,m,g,L,w]);return r.createElement("div",{className:c,onClick:A},h)})),(0,r.memo)((function(e){var t=e.state,o=void 0===t?"":t,n=e.scope,i=void 0===n?"r_liteprofile":n,a=e.client_id,c=e.client_secret,s=e.className,l=void 0===s?"":s,d=e.redirect_uri,u=e.response_type,m=void 0===u?"code":u,p=e.isOnlyGetCode,f=void 0!==p&&p,h=e.isOnlyGetToken,v=void 0!==h&&h,g=e.children,_=e.onLoginStart,w=e.onReject,b=e.onResolve;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_linkedin")&&t&&(localStorage.setItem("linkedin",t),window.close())}),[]);var y=(0,r.useCallback)((function(e){fetch("https://api.allorigins.win/get?url="+encodeURIComponent("https://api.linkedin.com/v2/me?oauth2_access_token="+e.access_token+"&projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams),localizedLastName, firstName,lastName,localizedFirstName)"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){var o=k({},e);if(t.contents){var n=JSON.parse(t.contents);"object"==typeof e&&Object.entries(n).map((function(e){o[e[0]]=e[1]}))}b({provider:"linkedin",data:o})})).catch((function(e){w(e)}))}),[w,b]),C=(0,r.useCallback)((function(e){if(f)b({provider:"linkedin",data:{code:e}});else{var t={code:e,grant_type:"authorization_code",redirect_uri:d,client_id:a,client_secret:c},o=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":E});fetch("https://cors.bridged.cc/https://www.linkedin.com/oauth/v2/accessToken",{method:"POST",headers:o,body:new URLSearchParams(t)}).then((function(e){return e.json()})).then((function(e){v?b({provider:"linkedin",data:e}):y(e)})).catch((function(e){w(e)}))}}),[w,b,a,y,d,c,f,v]),j=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"linkedin"===n&&o&&C(o))}catch(e){return Promise.reject(e)}}),[C]),x=(0,r.useCallback)((function(){window.removeEventListener("storage",x,!1);var e=localStorage.getItem("linkedin");e&&(j({provider:"linkedin",type:"code",code:e}),localStorage.removeItem("linkedin"))}),[j]),S=(0,r.useCallback)((function(){_&&_(),window.addEventListener("storage",x,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://www.linkedin.com/oauth/v2/authorization?response_type="+m+"&client_id="+a+"&scope="+i+"&state="+o+"_linkedin&redirect_uri="+d,"Linkedin","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}),[_,x,m,a,i,o,d]);return r.createElement("div",{className:l,onClick:S},g)})),(0,r.memo)((function(e){var t=e.state,o=void 0===t?"":t,n=e.scope,i=void 0===n?"":n,a=e.client_id,c=e.client_secret,s=e.className,l=void 0===s?"":s,d=e.redirect_uri,u=e.isOnlyGetCode,m=void 0!==u&&u,p=e.isOnlyGetToken,f=void 0!==p&&p,h=e.children,v=e.onLoginStart,g=e.onReject,_=e.onResolve;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_pinterest")&&t&&(localStorage.setItem("pinterest",t),window.close())}),[]);var w=(0,r.useCallback)((function(e){fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/user_account",{method:"GET",headers:{Authorization:"Bearer "+e.access_token,"x-cors-grida-api-key":E}}).then((function(e){return e.json()})).then((function(t){_({provider:"pinterest",data:k({},e,t)})})).catch((function(e){return g(e)}))}),[g,_]),b=(0,r.useCallback)((function(e){try{var t=function(){if(!m){var t={code:e,redirect_uri:d,grant_type:"authorization_code"},o=[];for(var n in t){var r=encodeURIComponent(n),i=encodeURIComponent(t[n]);o.push(r+"="+i)}return o=o.join("&"),Promise.resolve(fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/oauth/token",{method:"POST",headers:{Authorization:"Basic "+btoa(a+":"+c),"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":E},body:o}).then((function(e){return e.json()})).catch((function(e){return g(e)}))).then((function(e){e.access_token&&(f?_({provider:"pinterest",data:e}):w(e))}))}_({provider:"pinterest",data:{code:e}})}();return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(e){return Promise.reject(e)}}),[g,a,w,_,d,c,m,f]),y=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"pinterest"===n&&o&&b(o))}catch(e){return Promise.reject(e)}}),[b]),C=(0,r.useCallback)((function(){window.removeEventListener("storage",C,!1);var e=localStorage.getItem("pinterest");e&&(y({provider:"pinterest",type:"code",code:e}),localStorage.removeItem("pinterest"))}),[y]),j=(0,r.useCallback)((function(){v&&v(),window.addEventListener("storage",C,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://www.pinterest.com/oauth/?client_id="+a+"&scope="+i+"&state="+o+"_pinterest&redirect_uri="+d+"&response_type=code&scope=boards:read,pins:read,user_accounts:read","Pinterest","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}),[i,o,a,d,v,C]);return r.createElement("div",{className:l,onClick:j},h)})),(0,r.memo)((function(e){var t=e.client_id,o=e.className,n=void 0===o?"":o,i=e.redirect_uri,a=e.children,c=e.fields,s=void 0===c?"created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld":c,l=e.state,d=void 0===l?"state":l,u=e.scope,m=void 0===u?"users.read%20tweet.read":u,p=e.isOnlyGetCode,f=void 0!==p&&p,h=e.isOnlyGetToken,v=void 0!==h&&h,g=e.onLoginStart,_=e.onReject,w=e.onResolve;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code");e.searchParams.get("state")&&t&&(localStorage.setItem("twitter",""+t),window.close())}),[]);var b=(0,r.useCallback)((function(e){fetch("https://cors.bridged.cc/https://api.twitter.com/2/users/me?user.fields="+s,{method:"GET",headers:{Authorization:"Bearer "+e.access_token,"x-cors-grida-api-key":E}}).then((function(e){return e.json()})).then((function(t){w({provider:"twitter",data:k({},e,t.data)})})).catch((function(e){return _(e)}))}),[s,_,w]),y=(0,r.useCallback)((function(e){try{var o=function(){if(!f){var o=new URLSearchParams({code:e,redirect_uri:i,client_id:t,grant_type:"authorization_code",code_verifier:"challenge"});return Promise.resolve(fetch("https://cors.bridged.cc/https://api.twitter.com/2/oauth2/token",{method:"POST",body:o,headers:{"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":E}}).then((function(e){return e.json()})).catch((function(e){return _(e)}))).then((function(e){e.access_token&&(v?w({provider:"twitter",data:e}):b(e))}))}w({provider:"twitter",data:{code:e}})}();return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(e){return Promise.reject(e)}}),[_,b,w,t,i,f,v]),C=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"twitter"===n&&o&&y(o))}catch(e){return Promise.reject(e)}}),[y]),j=(0,r.useCallback)((function(){window.removeEventListener("storage",j,!1);var e=localStorage.getItem("twitter");e&&(C({provider:"twitter",type:"code",code:e}),localStorage.removeItem("twitter"))}),[C]),x=(0,r.useCallback)((function(){try{g&&g(),window.addEventListener("storage",j,!1);var e=window.screen.width/2-225,o=window.screen.height/2-365;return window.open("https://twitter.com/i/oauth2/authorize?response_type=code&client_id="+t+"&redirect_uri="+i+"&scope="+m+"&state="+d+"&code_challenge=challenge&code_challenge_method=plain","twitter","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+o+", left="+e),Promise.resolve()}catch(e){return Promise.reject(e)}}),[m,d,t,g,i,j]);return r.createElement("div",{className:n,onClick:x},a)}));"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var P=window,R=((0,r.memo)((function(e){var t=e.client_id,o=e.scope,n=void 0===o?"name email":o,i=e.className,a=void 0===i?"":i,c=e.onLoginStart,s=e.onReject,l=e.onResolve,d=e.redirect_uri,u=void 0===d?"/":d,m=e.children,p=(0,r.useRef)(null),f=(0,r.useState)(!1),h=f[0],v=f[1];(0,r.useEffect)((function(){!h&&b()}),[h]),(0,r.useEffect)((function(){return function(){p.current&&p.current.remove()}}),[]);var g=(0,r.useCallback)((function(){return!!document.getElementById("apple-login")}),[]),_=(0,r.useCallback)((function(e,t,o,n,r){void 0===t&&(t="script");var i=e.createElement(t);i.id=o,i.src=n,i.async=!0,i.defer=!0;var a=document.getElementsByTagName("script")[0];p.current=i,a&&a.parentNode&&a.parentNode.insertBefore(i,a),i.onload=r}),[]),w=(0,r.useCallback)((function(e){l({provider:"apple",data:e})}),[l]),b=(0,r.useCallback)((function(){g()?v(!0):_(document,"script","apple-login","https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",(function(){P.AppleID.auth.init({clientId:t,scope:n,redirectURI:u,state:"origin:web",usePopup:!0}),v(!0)}))}),[n,t,u,_,g]),k=(0,r.useCallback)((function(){try{if(!h)return Promise.resolve();var e=function(){if(P.AppleID){c&&c();var e=function(e,t){try{var o=Promise.resolve(P.AppleID.auth.signIn()).then((function(e){w(e)}))}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,(function(e){s({err:e})}));if(e&&e.then)return e.then((function(){}))}else b(),s("Apple SDK isn't loaded!")}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(e){return Promise.reject(e)}}),[w,h,b,c,s]);return r.createElement("div",{className:a,onClick:k},m)})),(0,r.memo)((function(e){var t=e.state,o=void 0===t?"":t,n=e.scope,i=void 0===n?"user.info.basic":n,a=e.client_key,c=e.className,s=void 0===c?"":c,l=e.redirect_uri,d=e.children,u=e.onResolve,m=e.onLoginStart;(0,r.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_tiktok")&&t&&(localStorage.setItem("tiktok",t),window.close())}),[]);var p=(0,r.useCallback)((function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"tiktok"===n&&o&&u({provider:"tiktok",data:{code:o}}))}catch(e){return Promise.reject(e)}}),[u]),f=(0,r.useCallback)((function(){window.removeEventListener("storage",f,!1);var e=localStorage.getItem("tiktok");e&&(p({provider:"tiktok",type:"code",code:e}),localStorage.removeItem("instagram"))}),[p]),h=(0,r.useCallback)((function(){m&&m(),window.addEventListener("storage",f,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://www.tiktok.com/auth/authorize?client_key="+a+"&scope="+i+"&state="+o+"_tiktok&redirect_uri="+l+"&response_type=code","Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}),[i,o,a,l,m,f]);return r.createElement("div",{className:s,onClick:h},d)})),o(75985)),T=o(26011),I=o(57689);var L=o.p+"static/media/google.b975681c146bf716cf1f1c39790f050a.svg";var A=o.p+"static/media/facebook.c846910f9bb463a31c127e3205530291.svg",O=o.p+"static/media/login.25f536c940385c938548.webp",z=o(80184),B=function(e){var t=e.setIsModalVisible,o=(0,T.a)().setIsLogged,n=(0,I.s0)(),r=function(e){R.Am.error(e)},i=function(){o(!0),n("/profile")};return(0,z.jsxs)("div",{className:"".concat(c," border-10"),children:[(0,z.jsxs)("div",{className:g,children:[(0,z.jsx)("h3",{children:"Login to your account"}),(0,z.jsxs)("div",{className:d,children:[(0,z.jsx)("span",{className:"text-light text-bold",children:"Sign in with social"}),(0,z.jsxs)("div",{className:u,children:[(0,z.jsxs)(N,{client_id:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://api.reservoir.tools/",REACT_APP_REFFERAL_FEE:"0x07aC5bA204852E9439682bC6e982d9f92565FA82"}.REACT_APP_GG_APP_ID,onReject:r,onResolve:i,className:"".concat(m," field bg-tertiary text-light"),children:[(0,z.jsx)(_.Z,{className:p,src:L,alt:"google",effect:"opacity"}),(0,z.jsx)("span",{className:"text-sm",children:"Sign in with Google"})]}),(0,z.jsxs)(x,{appId:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://api.reservoir.tools/",REACT_APP_REFFERAL_FEE:"0x07aC5bA204852E9439682bC6e982d9f92565FA82"}.REACT_APP_FB_APP_ID,onReject:r,onResolve:i,className:"".concat(m," field bg-tertiary text-light"),children:[(0,z.jsx)(_.Z,{className:p,src:A,alt:"facebook",effect:"opacity"}),(0,z.jsx)("span",{className:"text-sm",children:"Sign in with Facebook"})]})]})]}),(0,z.jsxs)("div",{className:f,children:[(0,z.jsx)("span",{className:"main_form-title text-light text-bold",children:"Or sign in with e-mail"}),(0,z.jsxs)("form",{className:"main_form-form d-flex flex-column g-20",children:[(0,z.jsx)("input",{className:"field field--outline",type:"text",placeholder:"Email"}),(0,z.jsx)("input",{className:"field field--outline",type:"password",placeholder:"Password",autoComplete:"new-password"}),(0,z.jsxs)("div",{className:"d-flex flex-wrap g-15 align-items-center justify-content-between",children:[(0,z.jsxs)("div",{className:"d-flex align-items-center g-10 text-light text-sm",children:[(0,z.jsx)(w.Z,{id:"remember"}),(0,z.jsx)("label",{htmlFor:"remember",children:"Remember me"})]}),(0,z.jsx)("button",{className:"".concat(h," text-sm"),id:"remind-password",onClick:function(e){e.preventDefault(),t(!0)},children:"Forgot password?"})]}),(0,z.jsx)(b.Z,{className:v,tag:"button",type:"submit",children:"Login"})]})]})]}),(0,z.jsx)("div",{className:"".concat(s," border-10"),children:(0,z.jsx)(_.Z,{className:l,src:O,alt:"media"})})]})},G=(0,r.lazy)((function(){return Promise.all([o.e(7691),o.e(1896),o.e(1134),o.e(9013)]).then(o.bind(o,29013))})),F=function(){var e=(0,r.useState)(!1),t=(0,n.Z)(e,2),o=t[0],c=t[1];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(i.Z,{title:"Login"}),(0,z.jsx)(a.Z,{title:"User login"}),(0,z.jsx)("main",{children:(0,z.jsx)("div",{className:"section mt-0",children:(0,z.jsx)("div",{className:"container",children:(0,z.jsx)(B,{setIsModalVisible:c})})})}),(0,z.jsx)(G,{isModalVisible:o,setIsModalVisible:c})]})}},50200:function(e,t,o){var n=o(50678),r=o(93517),i=o(11087),a=o(72791),c=o(57689),s=o(81694),l=o.n(s),d=o(80184);t.Z=function(){var e=(0,c.TH)(),t=(0,a.useState)([]),o=(0,n.Z)(t,2),s=o[0],u=o[1];return(0,a.useEffect)((function(){var t=e.pathname.split("/"),o=t.map((function(e,o){return{name:""===e?"Home":e.replace(/-/g," "),path:""===e?"/":t.slice(0,o+1).join("/")}}));u(o)}),[e]),(0,d.jsx)(r.Z,{separator:"\u2022",sx:{color:"var(--text)",textTransform:"capitalize","& .MuiBreadcrumbs-separator":{color:"var(--accent)"}},children:s.map((function(t,o){return(0,d.jsx)(i.OL,{className:l()("text-bold link-hover",{"text-accent disabled":t.path===e.pathname,"text-uppercase":"faq"===t.name}),to:t.path,children:t.name},t.path)}))})}},57534:function(e,t,o){var n=o(18489),r=o(83738),i=o(72791),a=o(80184),c=["id","onChange"],s=function(e){var t=e.id,o=e.onChange,i=(0,r.Z)(e,c);return(0,a.jsxs)("div",{className:"checkbox",children:[(0,a.jsx)("input",(0,n.Z)({id:t,type:"checkbox",onChange:o},i)),(0,a.jsx)("label",{className:"d-flex align-items-center justify-content-center",htmlFor:t,children:(0,a.jsx)("i",{className:"icon icon-check-solid"})})]})};t.Z=(0,i.memo)(s)},84892:function(e,t,o){var n=o(50678),r=o(18489),i=o(83738),a=o(81406),c=o(11087),s=o(72791),l=o(81694),d=o.n(l),u=o(80184),m=["tag","href"],p=["className"],f=function(e){var t=e.tag,o=e.href,n=(0,i.Z)(e,m);if("button"===t)return(0,u.jsx)(a.q.button,(0,r.Z)({},n));if(void 0===o||"#"===o)return(0,u.jsx)(a.q.a,(0,r.Z)({},n));var s=(0,a.q)(c.OL);return(0,u.jsx)(s,(0,r.Z)({to:o},n))};t.Z=function(e){var t=e.className,o=(0,i.Z)(e,p),c=(0,s.useState)(!1),l=(0,n.Z)(c,2),m=l[0],h=l[1],v={background:"linear-gradient(98.49deg, #05C9F9 -11.31%, #E5F61B 76.26%)"},g={background:"linear-gradient(98.49deg, #E5F61B -11.31%, #05C9F9 76.26%)"},_=(0,a.q_)((0,r.Z)({background:m?g.background:v.background,config:{duration:300}},o)).background;return(0,u.jsx)(f,(0,r.Z)((0,r.Z)({className:d()("btn btn--gradient",t)},o),{},{onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},style:{background:_,color:"#000000"},children:o.children}))}}}]);
//# sourceMappingURL=8349.abeffa26.chunk.js.map