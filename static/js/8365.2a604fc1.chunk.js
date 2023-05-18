/*! For license information please see 8365.2a604fc1.chunk.js.LICENSE.txt */
(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[8365],{38365:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a="style_brands__jgphM",i=t(84038),r=t(69291);t(72791);var o=t.p+"static/media/1.1a74e7ac74a6acc6afd626e15a72beb0.svg";var d=t.p+"static/media/2.67733804c284b0de678106850cefe3e7.svg";var c=t.p+"static/media/3.f03d1465e6f8e202aa930fd012f7132e.svg";var u=t.p+"static/media/4.d878bbbcdb554843dced1271859a13db.svg";var s=t.p+"static/media/5.3f62f3312d81bc527ef20c09d2c65980.svg";var l=t.p+"static/media/6.bbb2e96bbaa9360975c4809bdcd7f007.svg",f=t(80184),v=function(){var e=(0,r.Z)().width,n=[{brand:"Company 1",image:o},{brand:"Company 2",image:d},{brand:"Company 3",image:c},{brand:"Company 4",image:u},{brand:"Company 5",image:s},{brand:"Company 6",image:l}],t=function(){return n.map((function(e){return(0,f.jsx)("img",{src:e.image,alt:e.brand},e.brand)}))};return(0,f.jsx)("div",{className:"section",children:(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"".concat(a," border-10"),children:e<1170?(0,f.jsx)(i.Z,{gradient:!1,children:t()}):(0,f.jsx)("div",{className:"d-flex justify-content-between",children:t()})})})})}},84038:function(e,n,t){var a=t(72791);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=i(a),o=function(){return o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,i,d,c=e.style,u=void 0===c?{}:c,s=e.className,l=void 0===s?"":s,f=e.play,v=void 0===f||f,m=e.pauseOnHover,p=void 0!==m&&m,g=e.pauseOnClick,h=void 0!==g&&g,y=e.direction,b=void 0===y?"left":y,w=e.speed,x=void 0===w?20:w,E=e.delay,C=void 0===E?0:E,j=e.loop,k=void 0===j?0:j,N=e.gradient,q=void 0===N||N,L=e.gradientColor,z=void 0===L?[255,255,255]:L,A=e.gradientWidth,R=void 0===A?200:A,F=e.onFinish,O=e.onCycleComplete,Z=e.children,H=a.useState(0),S=H[0],W=H[1],_=a.useState(0),B=_[0],M=_[1],X=a.useState(!1),I=X[0],P=X[1],T=a.useRef(null),D=a.useRef(null);a.useEffect((function(){if(I){var e=function(){D.current&&T.current&&(W(T.current.getBoundingClientRect().width),M(D.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[I]),a.useEffect((function(){P(!0)}),[]);var G="rgba("+z[0]+", "+z[1]+", "+z[2],J=B<S?S/x:B/x;return r.default.createElement(a.Fragment,null,I?r.default.createElement("div",{ref:T,style:o(o({},u),(n={},n["--pause-on-hover"]=!v||p?"paused":"running",n["--pause-on-click"]=!v||p&&!h||h?"paused":"running",n)),className:l+" marquee-container"},q&&r.default.createElement("div",{style:(t={},t["--gradient-color"]=G+", 1), "+G+", 0)",t["--gradient-width"]="number"===typeof R?R+"px":R,t),className:"overlay"}),r.default.createElement("div",{ref:D,style:(i={},i["--play"]=v?"running":"paused",i["--direction"]="left"===b?"normal":"reverse",i["--duration"]=J+"s",i["--delay"]=C+"s",i["--iteration-count"]=k?""+k:"infinite",i),className:"marquee",onAnimationIteration:O,onAnimationEnd:F},Z),r.default.createElement("div",{style:(d={},d["--play"]=v?"running":"paused",d["--direction"]="left"===b?"normal":"reverse",d["--duration"]=J+"s",d["--delay"]=C+"s",d["--iteration-count"]=k?""+k:"infinite",d),className:"marquee","aria-hidden":"true"},Z)):null)}},69291:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(72791),i=function(e){(0,a.useEffect)(e,[])},r=function(e){var n=(0,a.useRef)(e);n.current=e,i((function(){return function(){return n.current()}}))},o=function(e){var n=(0,a.useRef)(0),t=(0,a.useState)(e),i=t[0],o=t[1],d=(0,a.useCallback)((function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame((function(){o(e)}))}),[]);return r((function(){cancelAnimationFrame(n.current)})),[i,d]};var d="undefined"!==typeof window,c=function(e,n){void 0===e&&(e=1/0),void 0===n&&(n=1/0);var t=o({width:d?window.innerWidth:e,height:d?window.innerHeight:n}),i=t[0],r=t[1];return(0,a.useEffect)((function(){if(d){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,n)}(window,"resize",e),function(){!function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,n)}(window,"resize",e)}}}),[]),i}}}]);
//# sourceMappingURL=8365.2a604fc1.chunk.js.map