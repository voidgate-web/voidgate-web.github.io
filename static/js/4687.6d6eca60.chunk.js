/*! For license information please see 4687.6d6eca60.chunk.js.LICENSE.txt */
(self.webpackChunkxchain=self.webpackChunkxchain||[]).push([[4687],{90655:function(e,n,t){"use strict";var a=t(17691),i=t(84038),r=t(80184),o=a.default.div.withConfig({componentId:"sc-dhs0xx-0"})([".marquee{text-transform:uppercase;font-size:60px;height:60px;line-height:1;overflow:hidden;font-family:var(--heading-font);font-weight:600;background:var(--gradient);-webkit-background-clip:text;background-clip:text;text-fill-color:transparent;-webkit-text-fill-color:transparent;.icon{font-size:20px;margin:0 15px;}&-container{gap:20px;}}&.error{.marquee-container{gap:0 !important;}}@media screen and (min-width:768px){.marquee{font-size:120px;height:100px;.icon{font-size:40px;margin:0 30px;}&-container{gap:30px;}}}@media screen and (min-width:1170px){.marquee{font-size:200px;height:165px;&-container{gap:40px;}}&.error{.marquee-container{margin-top:-165px;}}}"]);n.Z=function(e){var n=e.text,t=e.isErrorPage,a=void 0!==t&&t;return(0,r.jsx)(o,{className:a?"error":"",children:(0,r.jsx)(i.Z,{gradient:!1,speed:80,children:n})})}},46844:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a="style_container__Lc3e7",i="style_wave__9PYvh",r=t(90655),o=t(5363);t(72791);var d=t.p+"static/media/tickerbg.7d790953a03362537fa9603b50286597.svg",l=t(80184),c=function(){return(0,l.jsxs)("div",{className:"".concat(a," section"),children:[(0,l.jsx)(o.Z,{className:i,src:d,alt:"media",effect:"opacity"}),(0,l.jsx)(r.Z,{text:"the new creative economy"})]})}},84038:function(e,n,t){var a=t(72791);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=i(a),o=function(){return o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,i,d,l=e.style,c=void 0===l?{}:l,s=e.className,u=void 0===s?"":s,f=e.play,p=void 0===f||f,v=e.pauseOnHover,m=void 0!==v&&v,h=e.pauseOnClick,g=void 0!==h&&h,x=e.direction,y=void 0===x?"left":x,w=e.speed,b=void 0===w?20:w,k=e.delay,q=void 0===k?0:k,E=e.loop,C=void 0===E?0:E,z=e.gradient,j=void 0===z||z,N=e.gradientColor,Z=void 0===N?[255,255,255]:N,_=e.gradientWidth,O=void 0===_?200:_,L=e.onFinish,R=e.onCycleComplete,A=e.children,P=a.useState(0),S=P[0],B=P[1],F=a.useState(0),H=F[0],I=F[1],X=a.useState(!1),M=X[0],T=X[1],W=a.useRef(null),Y=a.useRef(null);a.useEffect((function(){if(M){var e=function(){Y.current&&W.current&&(B(W.current.getBoundingClientRect().width),I(Y.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[M]),a.useEffect((function(){T(!0)}),[]);var D="rgba("+Z[0]+", "+Z[1]+", "+Z[2],G=H<S?S/b:H/b;return r.default.createElement(a.Fragment,null,M?r.default.createElement("div",{ref:W,style:o(o({},c),(n={},n["--pause-on-hover"]=!p||m?"paused":"running",n["--pause-on-click"]=!p||m&&!g||g?"paused":"running",n)),className:u+" marquee-container"},j&&r.default.createElement("div",{style:(t={},t["--gradient-color"]=D+", 1), "+D+", 0)",t["--gradient-width"]="number"===typeof O?O+"px":O,t),className:"overlay"}),r.default.createElement("div",{ref:Y,style:(i={},i["--play"]=p?"running":"paused",i["--direction"]="left"===y?"normal":"reverse",i["--duration"]=G+"s",i["--delay"]=q+"s",i["--iteration-count"]=C?""+C:"infinite",i),className:"marquee",onAnimationIteration:R,onAnimationEnd:L},A),r.default.createElement("div",{style:(d={},d["--play"]=p?"running":"paused",d["--direction"]="left"===y?"normal":"reverse",d["--duration"]=G+"s",d["--delay"]=q+"s",d["--iteration-count"]=C?""+C:"infinite",d),className:"marquee","aria-hidden":"true"},A)):null)}}}]);
//# sourceMappingURL=4687.6d6eca60.chunk.js.map