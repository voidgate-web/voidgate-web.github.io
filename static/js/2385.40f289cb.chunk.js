"use strict";(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[2385],{92702:function(t,e,n){var r=n(72791),o=n(52007);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",i=r?r[3]:"",a=r?r[2]:n,s=a.length>=e?a:(m(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(o).concat(s).concat(i)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,r=t.hours,o=t.minutes,i=t.seconds,a=Object.assign(Object.assign({},v),e),s=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?c:u,f=Math.min(2,c),p=s?h(r+24*n,c):h(r,f);return{days:s?"":h(n,l),hours:p,minutes:h(o,f),seconds:h(i,f)}}var T=function(t){c(n,t);var e=p(n);function n(){var t;return i(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);T.propTypes={count:o.number,children:o.element,onComplete:o.func};var g=function(t){c(n,t);var e=p(n);function n(t){var o;if(i(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},t.date){var a=o.calcTimeDelta();o.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,i=n.precision,a=void 0===i?0:i,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var f=s?e:e-o(),p=Math.min(20,Math.max(0,a)),m=Math.round(1e3*parseFloat(((l?f:Math.max(0,f))/1e3).toFixed(p))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,i=t.completed&&"STARTED"===e;o&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||i)&&r.props.onComplete(t,i)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:y(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,r.createElement)(T,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var i=this.props,a=i.className,s=i.overtime,c=i.children,u=i.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,r.cloneElement)(c,{countdown:l});var f=l.formatted,p=f.days,m=f.hours,d=f.minutes,h=f.seconds;return(0,r.createElement)("span",{className:a},l.total<0?"-":"",p,p?":":"",m,":",d,":",h)}}]),n}(r.Component);g.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),g.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.ZP=g},19348:function(t,e,n){n.d(e,{YD:function(){return T}});var r=n(50678),o=n(27853),i=n(84531),a=n(81020),s=n(18992),c=n(72791);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}var l=new Map,f=new WeakMap,p=0,m=void 0;function d(t){return Object.keys(t).sort().filter((function(e){return void 0!==t[e]})).map((function(e){return"".concat(e,"_").concat("root"===e?(n=t.root)?(f.has(n)||(p+=1,f.set(n,p.toString())),f.get(n)):"0":t[e]);var n})).toString()}function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var o=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=function(t){var e=d(t),n=l.get(e);if(!n){var r,o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n,i=e.isIntersecting&&r.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=i),null==(n=o.get(e.target))||n.forEach((function(t){t(i,e)}))}))}),t);r=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:o},l.set(e,n)}return n}(n),a=i.id,s=i.observer,c=i.elements,u=c.get(t)||[];return c.has(t)||c.set(t,u),u.push(e),s.observe(t),function(){u.splice(u.indexOf(e),1),0===u.length&&(c.delete(t),s.unobserve(t)),0===c.size&&(s.disconnect(),l.delete(a))}}var v=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function y(t){return"function"!==typeof t.children}c.Component;function T(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.threshold,o=e.delay,i=e.trackVisibility,a=e.rootMargin,s=e.root,u=e.triggerOnce,l=e.skip,f=e.initialInView,p=e.fallbackInView,m=e.onChange,d=c.useState(null),v=(0,r.Z)(d,2),y=v[0],T=v[1],g=c.useRef(),b=c.useState({inView:!!f,entry:void 0}),S=(0,r.Z)(b,2),w=S[0],D=S[1];g.current=m,c.useEffect((function(){var t;if(!l&&y)return t=h(y,(function(e,n){D({inView:e,entry:n}),g.current&&g.current(e,n),n.isIntersecting&&u&&t&&(t(),t=void 0)}),{root:s,rootMargin:a,threshold:n,trackVisibility:i,delay:o},p),function(){t&&t()}}),[Array.isArray(n)?n.toString():n,y,s,a,u,l,i,p,o]);var O=null==(t=w.entry)?void 0:t.target,P=c.useRef();y||!O||u||l||P.current===O||(P.current=O,D({inView:!!f,entry:void 0}));var C=[T,w.inView,w.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}}}]);
//# sourceMappingURL=2385.40f289cb.chunk.js.map