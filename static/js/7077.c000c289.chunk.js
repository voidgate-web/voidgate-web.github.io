"use strict";(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[7077],{31945:function(e,n,t){var i=t(18489),r=t(50678),a=t(83738),s=t(81406),o=t(19348),c=t(80184),l=["children","index","className","type","delay"];n.Z=function(e){var n=e.children,t=e.index,d=void 0===t?1:t,u=e.className,f=e.type,h=void 0===f?"slide":f,m=(e.delay,(0,a.Z)(e,l)),v=(0,o.YD)({threshold:.2,triggerOnce:!0}),y=(0,r.Z)(v,2),p=y[0],g=y[1],_={config:{duration:300,mass:1,tension:300,friction:30},delay:m.delay?m.delay:100*d},b={slide:(0,s.q_)((0,i.Z)((0,i.Z)({from:{transform:"translateY(40px)",opacity:0},to:{transform:g?"translateY(0px)":"translateY(40px)",opacity:g?1:0}},_),m)),fade:(0,s.q_)((0,i.Z)((0,i.Z)({from:{opacity:0},to:{opacity:g?1:0}},_),m)),grow:(0,s.q_)((0,i.Z)((0,i.Z)({from:{transform:"scale(0.4)"},to:{transform:g?"scale(1)":"scale(0.4)"}},_),m))};return(0,c.jsx)(s.q.div,{className:u||"",style:b[h],ref:p,children:n})}},85327:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i=t(72791),r=t(38125),a=t(54019),s="style_container__TCpRe",o="style_media__atXXg",c="style_media_img__kqCiA",l="style_media_wrapper__d1KRx",d="style_wave__IpaDU",u="style_ring__+Gg2Z",f="style_ball__BLKyk",h="style_main__JrePT",m="style_wrapper__YaL9z",v="style_main_img__AZJ1s",y="style_main_emoji__wmTOS",p="style_main_text__zvSd+",g="style_main_divider__a+gM+",_=t(5363),b=t(31945),w=t(69291),x=t.p+"static/media/about_main.1f067d1dc7e6f1f51da3.webp",j=t.p+"static/media/about_secondary.50fcde63090fcb5afc86.webp",Z=t.p+"static/media/ball.4222f1c09fd03589a890.webp",k=t.p+"static/media/ring.20cb37b4f52d12060981.webp",N=t.p+"static/media/wave.a9508b11c0a63468916a.webp",V=t(80184),z=function(){var e=(0,w.Z)().width;return(0,V.jsx)("section",{children:(0,V.jsxs)("div",{className:"".concat(s," container"),children:[(0,V.jsxs)("div",{className:o,children:[(0,V.jsx)(_.Z,{className:"".concat(c," border-10"),src:x,alt:"media"}),e>=1024&&(0,V.jsxs)("div",{className:l,children:[(0,V.jsx)("div",{children:(0,V.jsx)(_.Z,{className:d,src:N,alt:"wave",effect:"opacity"})}),(0,V.jsx)("div",{children:(0,V.jsx)(_.Z,{className:f,src:Z,alt:"ball",effect:"opacity"})}),(0,V.jsx)("div",{children:(0,V.jsx)(_.Z,{className:u,src:k,alt:"ring",effect:"opacity"})})]})]}),(0,V.jsxs)("div",{className:h,children:[(0,V.jsx)(_.Z,{className:"".concat(v," border-10"),src:j,alt:"media"}),(0,V.jsxs)(b.Z,{className:m,delay:300,children:[(0,V.jsx)("span",{className:"".concat(y," h3"),children:"\ud83d\udd25\ud83d\udd25\ud83d\udd25"}),(0,V.jsx)("h3",{children:"Who we are?"}),(0,V.jsx)("p",{className:p,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),(0,V.jsx)("span",{className:g})]})]})]})})},A=(0,i.lazy)((function(){return Promise.all([t.e(7691),t.e(6844)]).then(t.bind(t,46844))})),O=(0,i.lazy)((function(){return t.e(3563).then(t.bind(t,23563))})),R=(0,i.lazy)((function(){return Promise.all([t.e(7691),t.e(1896),t.e(8444),t.e(9967)]).then(t.bind(t,91008))})),q=(0,i.lazy)((function(){return t.e(873).then(t.bind(t,19727))})),C=(0,i.lazy)((function(){return t.e(3775).then(t.bind(t,27990))})),I=(0,i.lazy)((function(){return t.e(9810).then(t.bind(t,21052))})),E=function(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(r.Z,{title:"About Us"}),(0,V.jsx)(a.Z,{title:"About Us"}),(0,V.jsxs)("main",{children:[(0,V.jsx)(z,{}),(0,V.jsx)(A,{}),(0,V.jsx)(O,{}),(0,V.jsx)(R,{}),(0,V.jsx)(q,{}),(0,V.jsx)(C,{}),(0,V.jsx)(I,{})]})]})}},69291:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(72791),r=function(e){(0,i.useEffect)(e,[])},a=function(e){var n=(0,i.useRef)(e);n.current=e,r((function(){return function(){return n.current()}}))},s=function(e){var n=(0,i.useRef)(0),t=(0,i.useState)(e),r=t[0],s=t[1],o=(0,i.useCallback)((function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame((function(){s(e)}))}),[]);return a((function(){cancelAnimationFrame(n.current)})),[r,o]};var o="undefined"!==typeof window,c=function(e,n){void 0===e&&(e=1/0),void 0===n&&(n=1/0);var t=s({width:o?window.innerWidth:e,height:o?window.innerHeight:n}),r=t[0],a=t[1];return(0,i.useEffect)((function(){if(o){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,n)}(window,"resize",e),function(){!function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,n)}(window,"resize",e)}}}),[]),r}},19348:function(e,n,t){t.d(n,{YD:function(){return g}});var i=t(50678),r=t(27853),a=t(84531),s=t(81020),o=t(18992),c=t(72791);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}var d=new Map,u=new WeakMap,f=0,h=void 0;function m(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return"".concat(n,"_").concat("root"===n?(t=e.root)?(u.has(t)||(f+=1,u.set(t,f.toString())),u.get(t)):"0":e[n]);var t})).toString()}function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){var r=e.getBoundingClientRect();return n(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var a=function(e){var n=m(e),t=d.get(n);if(!t){var i,r=new Map,a=new IntersectionObserver((function(n){n.forEach((function(n){var t,a=n.isIntersecting&&i.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=a),null==(t=r.get(n.target))||t.forEach((function(e){e(a,n)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:a,elements:r},d.set(n,t)}return t}(t),s=a.id,o=a.observer,c=a.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(n),o.observe(e),function(){l.splice(l.indexOf(n),1),0===l.length&&(c.delete(e),o.unobserve(e)),0===c.size&&(o.disconnect(),d.delete(s))}}var y=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!==typeof e.children}c.Component;function g(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.threshold,r=n.delay,a=n.trackVisibility,s=n.rootMargin,o=n.root,l=n.triggerOnce,d=n.skip,u=n.initialInView,f=n.fallbackInView,h=n.onChange,m=c.useState(null),y=(0,i.Z)(m,2),p=y[0],g=y[1],_=c.useRef(),b=c.useState({inView:!!u,entry:void 0}),w=(0,i.Z)(b,2),x=w[0],j=w[1];_.current=h,c.useEffect((function(){var e;if(!d&&p)return e=v(p,(function(n,t){j({inView:n,entry:t}),_.current&&_.current(n,t),t.isIntersecting&&l&&e&&(e(),e=void 0)}),{root:o,rootMargin:s,threshold:t,trackVisibility:a,delay:r},f),function(){e&&e()}}),[Array.isArray(t)?t.toString():t,p,o,s,l,d,a,f,r]);var Z=null==(e=x.entry)?void 0:e.target,k=c.useRef();p||!Z||l||d||k.current===Z||(k.current=Z,j({inView:!!u,entry:void 0}));var N=[g,x.inView,x.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}}}]);
//# sourceMappingURL=7077.c000c289.chunk.js.map