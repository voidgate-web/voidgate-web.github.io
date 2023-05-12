"use strict";(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[1299],{22718:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(38331),i=n(23960),o=n(72791),u=n(40536),l=n(94419),a=n(97225);function c(e){return(0,a.Z)("MuiTabPanel",e)}(0,n(75878).Z)("MuiTabPanel",["root","hidden"]);var s=n(96248),d=n(47542),f=n(34182);function v(e){return e.size}var g=function(e){var t=e.value,n=e.id,r=(0,d.g)();if(null===r)throw new Error("No TabContext provided");var i=r.value,o=r.getTabId,u=(0,s.Z)(n),l=(0,f.B)(t,u,v).id,a=l!==i,c=void 0!==l?o(l):void 0;return{hidden:a,getRootProps:function(){return{"aria-labelledby":null!=c?c:void 0,hidden:a,id:null!=u?u:void 0}}}},h=n(6826),b=n(80184),m=["children","component","value","slotProps","slots"],p=o.forwardRef((function(e,t){var n,o=e.children,a=e.component,s=e.slotProps,d=void 0===s?{}:s,f=e.slots,v=void 0===f?{}:f,p=(0,i.Z)(e,m),C=g(e),Z=C.hidden,w=C.getRootProps,y=(0,r.Z)({},e,{hidden:Z}),k=function(e){var t={root:["root",e.hidden&&"hidden"]};return(0,l.Z)(t,(0,h.T)(c))}(y),x=null!=(n=null!=a?a:v.root)?n:"div",V=(0,u.Z)({elementType:x,getSlotProps:w,externalSlotProps:d.root,externalForwardedProps:p,additionalProps:{role:"tabpanel",ref:t},ownerState:y,className:k.root});return(0,b.jsx)(x,(0,r.Z)({},V,{children:!Z&&o}))}))},60175:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(38331),i=n(23960),o=n(72791),u=n(47563),l=n(94419),a=n(97225);function c(e){return(0,a.Z)("MuiTab",e)}(0,n(75878).Z)("MuiTab",["root","selected","disabled"]);var s=n(96248),d=n(47542),f=n(34182),v=n(75721),g=n(50678);var h=n(61130),b=n(66133);function m(e){var t=e.handlePointerOverEvents,n=void 0!==t&&t,i=e.item,l=e.ref,a=o.useRef(null),c=(0,u.Z)(a,l),s=o.useContext(b.Z);if(!s)throw new Error("useListItem must be used within a ListProvider");var d=s.dispatch,f=s.getItemState,m=s.registerHighlightChangeHandler,p=s.registerSelectionChangeHandler,C=f(i),Z=C.highlighted,w=C.selected,y=C.focusable,k=function(){var e=o.useState({}),t=(0,g.Z)(e,2)[1];return o.useCallback((function(){t({})}),[])}();(0,v.Z)((function(){return m((function(e){e!==i||Z?e!==i&&Z&&k():k()}))})),(0,v.Z)((function(){return p((function(e){w?e.includes(i)||k():e.includes(i)&&k()}))}),[p,k,w,i]);var x,V=o.useCallback((function(e){return function(t){var n;null==(n=e.onClick)||n.call(e,t),t.defaultPrevented||(t.preventDefault(),d({type:h.F.itemClick,item:i,event:t}))}}),[d,i]),I=o.useCallback((function(e){return function(t){var n;null==(n=e.onMouseOver)||n.call(e,t),t.defaultPrevented||d({type:h.F.itemHover,item:i,event:t})}}),[d,i]);y&&(x=Z?0:-1);return{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)({},e,{onClick:V(e),onPointerOver:n?I(e):void 0,ref:c,tabIndex:x})},highlighted:Z,ref:c,selected:w}}var p=n(45372),C=n(22086);function Z(e){return e.size}var w=function(e){var t=e.value,n=e.ref,i=e.disabled,l=void 0!==i&&i,a=e.id,c=o.useRef(null),v=(0,s.Z)(a),h=(0,d.g)(),b=h.value,w=h.selectionFollowsFocus,y=h.getTabPanelId,k=o.useMemo((function(){return{disabled:l,ref:c,id:v}}),[l,c,v]),x=(0,f.B)(t,k,Z),V=x.id,I=x.index,S=x.totalItemCount,P=m({item:V}),M=P.getRootProps,F=P.ref,R=P.highlighted,T=P.selected,D=function(e){var t=e.disabled,n=void 0!==t&&t,i=e.focusableWhenDisabled,l=e.href,a=e.ref,c=e.tabIndex,s=e.to,d=e.type,f=o.useRef(),v=o.useState(!1),h=(0,g.Z)(v,2),b=h[0],m=h[1],Z=(0,p.Z)(),w=Z.isFocusVisibleRef,y=Z.onFocus,k=Z.onBlur,x=Z.ref,V=o.useState(!1),I=(0,g.Z)(V,2),S=I[0],P=I[1];n&&!i&&S&&P(!1),o.useEffect((function(){w.current=S}),[S,w]);var M=o.useState(""),F=(0,g.Z)(M,2),R=F[0],T=F[1],D=function(e){return function(t){var n;S&&t.preventDefault(),null==(n=e.onMouseLeave)||n.call(e,t)}},E=function(e){return function(t){var n;k(t),!1===w.current&&P(!1),null==(n=e.onBlur)||n.call(e,t)}},H=function(e){return function(t){var n,r;f.current||(f.current=t.currentTarget),y(t),!0===w.current&&(P(!0),null==(r=e.onFocusVisible)||r.call(e,t)),null==(n=e.onFocus)||n.call(e,t)}},O=function(){var e=f.current;return"BUTTON"===R||"INPUT"===R&&["button","submit","reset"].includes(null==e?void 0:e.type)||"A"===R&&(null==e?void 0:e.href)},A=function(e){return function(t){var r;n||null==(r=e.onClick)||r.call(e,t)}},L=function(e){return function(t){var r;n||(m(!0),document.addEventListener("mouseup",(function(){m(!1)}),{once:!0})),null==(r=e.onMouseDown)||r.call(e,t)}},z=function(e){return function(t){var r,i;null==(r=e.onKeyDown)||r.call(e,t),t.defaultPrevented||(t.target!==t.currentTarget||O()||" "!==t.key||t.preventDefault(),t.target!==t.currentTarget||" "!==t.key||n||m(!0),t.target!==t.currentTarget||O()||"Enter"!==t.key||n||(null==(i=e.onClick)||i.call(e,t),t.preventDefault()))}},N=function(e){return function(t){var r,i;t.target===t.currentTarget&&m(!1),null==(r=e.onKeyUp)||r.call(e,t),t.target!==t.currentTarget||O()||n||" "!==t.key||t.defaultPrevented||null==(i=e.onClick)||i.call(e,t)}},j=o.useCallback((function(e){var t;T(null!=(t=null==e?void 0:e.tagName)?t:"")}),[]),B=(0,u.Z)(j,a,x,f),U={};return"BUTTON"===R?(U.type=null!=d?d:"button",i?U["aria-disabled"]=n:U.disabled=n):""!==R&&(l||s||(U.role="button",U.tabIndex=null!=c?c:0),n&&(U["aria-disabled"]=n,U.tabIndex=i?null!=c?c:0:-1)),{getRootProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,C.Z)(e),i=(0,r.Z)({},n,t);return delete i.onFocusVisible,(0,r.Z)({type:d},i,U,{onBlur:E(i),onClick:A(i),onFocus:H(i),onKeyDown:z(i),onKeyUp:N(i),onMouseDown:L(i),onMouseLeave:D(i),ref:B})},focusVisible:S,setFocusVisible:P,disabled:n,active:b,ref:B}}({disabled:l,focusableWhenDisabled:!w,type:"button"}),E=D.getRootProps,H=D.ref,O=D.active,A=D.focusVisible,L=D.setFocusVisible,z=(0,u.Z)(c,n,F,H),N=void 0!==V?y(V):void 0;return{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.Z)({},e,M(e)),n=(0,r.Z)({},t,E(t));return(0,r.Z)({},n,{role:"tab","aria-controls":N,"aria-selected":T,id:v,ref:z})},active:O,focusVisible:A,highlighted:R,index:I,selected:T||V===b,setFocusVisible:L,totalTabsCount:S}},y=n(40536),k=n(6826),x=n(80184),V=["action","children","value","disabled","onChange","onClick","onFocus","component","slotProps","slots"],I=o.forwardRef((function(e,t){var n,a=e.children,s=e.disabled,d=void 0!==s&&s,f=e.component,v=e.slotProps,g=void 0===v?{}:v,h=e.slots,b=void 0===h?{}:h,m=(0,i.Z)(e,V),p=o.useRef(),C=(0,u.Z)(p,t),Z=w((0,r.Z)({},e,{ref:C})),I=Z.active,S=Z.highlighted,P=Z.selected,M=Z.getRootProps,F=(0,r.Z)({},e,{active:I,disabled:d,highlighted:S,selected:P}),R=function(e){var t={root:["root",e.selected&&"selected",e.disabled&&"disabled"]};return(0,l.Z)(t,(0,k.T)(c))}(F),T=null!=(n=null!=f?f:b.root)?n:"button",D=(0,y.Z)({elementType:T,getSlotProps:M,externalSlotProps:g.root,externalForwardedProps:m,additionalProps:{ref:t},ownerState:F,className:R.root});return(0,x.jsx)(T,(0,r.Z)({},D,{children:a}))}))},5826:function(e,t,n){n.d(t,{Z:function(){return Y}});var r=n(38331),i=n(23960),o=n(72791),u=n(94419),l=n(40536),a=n(97225);function c(e){return(0,a.Z)("MuiTabsList",e)}(0,n(75878).Z)("MuiTabsList",["root","horizontal","vertical"]);var s=n(47542),d={valueChange:"valueChange"},f=n(52662),v=n(50678),g=n(47563),h=n(61130),b=n(31303);function m(e,t,n){var r,i,o,u=n.items,l=n.isItemDisabled,a=n.disableListWrap,c=n.disabledItemsFocusable,s=n.itemComparer,d="DOM"===n.focusManagement?0:-1,f=u.length-1,v=null==e?-1:u.findIndex((function(t){return s(t,e)})),g=!a;switch(t){case"reset":if(-1===d)return null;i=0,o="next",g=!1;break;case"start":i=0,o="next",g=!1;break;case"end":i=f,o="previous",g=!1;break;default:var h=v+t;h<0?!g&&-1!==v||Math.abs(t)>1?(i=0,o="next"):(i=f,o="previous"):h>f?!g||Math.abs(t)>1?(i=f,o="previous"):(i=0,o="next"):(i=h,o=t>=0?"next":"previous")}var b=function(e,t,n,r,i,o){if(0===n.length||!r&&n.every((function(e,t){return i(e,t)})))return-1;for(var u=e;;){if(!o&&"next"===t&&u===n.length||!o&&"previous"===t&&-1===u)return-1;if(r||!i(n[u],u))return u;u+="next"===t?1:-1,o&&(u=(u+n.length)%n.length)}}(i,o,u,c,l,g);return-1!==b||null===e||l(e,v)?null!=(r=u[b])?r:null:e}function p(e,t,n){var i=n.itemComparer,o=n.isItemDisabled,u=n.selectionMode,l=n.items,a=t.selectedValues,c=l.findIndex((function(t){return i(e,t)}));if(o(e,c))return t;var s=function(e,t,n,r){return"none"===n?[]:"single"===n?r(t[0],e)?t:[e]:t.some((function(t){return r(t,e)}))?t.filter((function(t){return!r(t,e)})):[].concat((0,b.Z)(t),[e])}(e,a,u,i);return(0,r.Z)({},t,{selectedValues:s,highlightedValue:e})}function C(e,t,n){var r,i=null==(r=n(e))?void 0:r.trim().toLowerCase();return!(!i||0===i.length)&&0===i.indexOf(t)}function Z(e,t){var n=t.type,i=t.context;switch(n){case h.F.keyDown:return function(e,t,n){var i=t.highlightedValue,o=n.orientation,u=n.pageSize;switch(e){case"Home":return(0,r.Z)({},t,{highlightedValue:m(i,"start",n)});case"End":return(0,r.Z)({},t,{highlightedValue:m(i,"end",n)});case"PageUp":return(0,r.Z)({},t,{highlightedValue:m(i,-u,n)});case"PageDown":return(0,r.Z)({},t,{highlightedValue:m(i,u,n)});case"ArrowUp":if("vertical"!==o)break;return(0,r.Z)({},t,{highlightedValue:m(i,-1,n)});case"ArrowDown":if("vertical"!==o)break;return(0,r.Z)({},t,{highlightedValue:m(i,1,n)});case"ArrowLeft":if("vertical"===o)break;var l="horizontal-ltr"===o?-1:1;return(0,r.Z)({},t,{highlightedValue:m(i,l,n)});case"ArrowRight":if("vertical"===o)break;var a="horizontal-ltr"===o?1:-1;return(0,r.Z)({},t,{highlightedValue:m(i,a,n)});case"Enter":case" ":return null===t.highlightedValue?t:p(t.highlightedValue,t,n)}return t}(t.key,e,i);case h.F.itemClick:return p(t.item,e,i);case h.F.blur:return function(e,t){return"DOM"===t.focusManagement?e:(0,r.Z)({},e,{highlightedValue:null})}(e,i);case h.F.textNavigation:return function(e,t,n){for(var i=n.items,o=n.isItemDisabled,u=n.disabledItemsFocusable,l=n.itemStringifier,a=t.length>1,c=a?e.highlightedValue:m(e.highlightedValue,1,n),s=0;s<i.length;s+=1){if(!c||!a&&e.highlightedValue===c)return e;if(C(c,t,l)&&(!o(c,i.indexOf(c))||u))return(0,r.Z)({},e,{highlightedValue:c});c=m(c,1,n)}return e}(e,t.searchString,i);case h.F.itemsChange:return function(e,t,n,i){var o,u,l=i.itemComparer,a=i.focusManagement,c=null;null!=n.highlightedValue?c=null!=(u=e.find((function(e){return l(e,n.highlightedValue)})))?u:null:"DOM"===a&&0===t.length&&(c=m(null,"reset",i));var s=(null!=(o=n.selectedValues)?o:[]).filter((function(t){return e.some((function(e){return l(e,t)}))}));return(0,r.Z)({},n,{highlightedValue:c,selectedValues:s})}(t.items,t.previousItems,e,i);default:return e}}function w(){var e=o.useRef();return e.current||(e.current=function(){var e=new Map;return{subscribe:function(t,n){var r=e.get(t);return r?r.add(n):(r=new Set([n]),e.set(t,r)),function(){r.delete(n),0===r.size&&e.delete(t)}},publish:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=e.get(t);o&&o.forEach((function(e){return e.apply(void 0,r)}))}}}()),e.current}var y="select:change-selection",k="select:change-highlight";function x(e,t){return e===t}var V={},I=function(){};function S(e,t){var n=(0,r.Z)({},e);return Object.keys(t).forEach((function(e){void 0!==t[e]&&(n[e]=t[e])})),n}function P(e){var t=o.useRef(null),n=e.reducer,i=e.initialState,u=e.controlledProps,l=void 0===u?V:u,a=e.stateComparers,c=void 0===a?V:a,s=e.onStateChange,d=void 0===s?I:s,f=e.actionContext,g=o.useCallback((function(e,r){t.current=r;var i=S(e,l);return n(i,r)}),[l,n]),h=o.useReducer(g,i),b=(0,v.Z)(h,2),m=b[0],p=b[1],C=o.useCallback((function(e){p((0,r.Z)({},e,{context:f}))}),[f]);return function(e){var t=e.nextState,n=e.initialState,r=e.stateComparers,i=e.onStateChange,u=e.controlledProps,l=e.lastActionRef,a=o.useRef(n);o.useEffect((function(){if(null!==l.current){var e=S(a.current,u);Object.keys(t).forEach((function(n){var o,u,a,c=null!=(o=r[n])?o:x,s=t[n];c(s,e[n])||null==i||i(null!=(u=l.current.event)?u:null,n,s,null!=(a=l.current.type)?a:"",t)})),a.current=t,l.current=null}}),[a,t,l,i,r,u])}({nextState:m,initialState:i,stateComparers:null!=c?c:V,onStateChange:null!=d?d:I,controlledProps:l,lastActionRef:t}),[S(m,l),C]}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return e===t};return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}function F(e,t){var n=o.useRef(e);return o.useEffect((function(){n.current=e}),null!=t?t:[e]),n}var R=500;var T={},D=function(){},E=function(e,t){return e===t},H=function(){return!1},O=function(e){return"string"===typeof e?e:String(e)},A=function(){return{highlightedValue:null,selectedValues:[]}};var L=function(e){var t=e.controlledProps,n=void 0===t?T:t,i=e.disabledItemsFocusable,u=void 0!==i&&i,l=e.disableListWrap,a=void 0!==l&&l,c=e.focusManagement,s=void 0===c?"activeDescendant":c,d=e.getInitialState,f=void 0===d?A:d,b=e.getItemDomElement,m=e.getItemId,p=e.isItemDisabled,C=void 0===p?H:p,x=e.listRef,V=e.onStateChange,I=void 0===V?D:V,S=e.items,L=e.itemComparer,z=void 0===L?E:L,N=e.itemStringifier,j=void 0===N?O:N,B=e.onChange,U=e.onHighlightChange,K=e.orientation,W=void 0===K?"vertical":K,Y=e.pageSize,G=void 0===Y?5:Y,_=e.reducerActionContext,q=void 0===_?T:_,J=e.selectionMode,Q=void 0===J?"single":J,X=e.stateReducer,$=o.useRef(null),ee=(0,g.Z)(x,$),te=o.useCallback((function(e,t,n){var r;(null==U||U(e,t,n),"DOM"!==s||null==t||n!==h.F.itemClick&&n!==h.F.keyDown&&n!==h.F.textNavigation)||(null==b||null==(r=b(t))||r.focus())}),[b,U,s]),ne=o.useMemo((function(){return{highlightedValue:z,selectedValues:function(e,t){return M(e,t,z)}}}),[z]),re=o.useCallback((function(e,t,n,r,i){switch(null==I||I(e,t,n,r,i),t){case"highlightedValue":te(e,n,r);break;case"selectedValues":null==B||B(e,n,r)}}),[te,B,I]),ie=o.useMemo((function(){return{disabledItemsFocusable:u,disableListWrap:a,focusManagement:s,isItemDisabled:C,itemComparer:z,items:S,itemStringifier:j,onHighlightChange:te,orientation:W,pageSize:G,selectionMode:Q,stateComparers:ne}}),[u,a,s,C,z,S,j,te,W,G,Q,ne]),oe=f(),ue=P({reducer:null!=X?X:Z,actionContext:o.useMemo((function(){return(0,r.Z)({},q,ie)}),[q,ie]),initialState:oe,controlledProps:n,stateComparers:ne,onStateChange:re}),le=(0,v.Z)(ue,2),ae=le[0],ce=le[1],se=ae.highlightedValue,de=ae.selectedValues,fe=function(e){var t=o.useRef({searchString:"",lastTime:null});return o.useCallback((function(n){if(1===n.key.length&&" "!==n.key){var r=t.current,i=n.key.toLowerCase(),o=performance.now();r.searchString.length>0&&r.lastTime&&o-r.lastTime>R?r.searchString=i:1===r.searchString.length&&i===r.searchString||(r.searchString+=i),r.lastTime=o,e(r.searchString,n)}}),[e])}((function(e,t){return ce({type:h.F.textNavigation,event:t,searchString:e})})),ve=F(de),ge=F(se),he=o.useRef([]);o.useEffect((function(){M(he.current,S,z)||(ce({type:h.F.itemsChange,event:null,items:S,previousItems:he.current}),he.current=S)}),[S,z,ce]);var be=function(){var e=w();return{notifySelectionChanged:o.useCallback((function(t){e.publish(y,t)}),[e]),notifyHighlightChanged:o.useCallback((function(t){e.publish(k,t)}),[e]),registerSelectionChangeHandler:o.useCallback((function(t){return e.subscribe(y,t)}),[e]),registerHighlightChangeHandler:o.useCallback((function(t){return e.subscribe(k,t)}),[e])}}(),me=be.notifySelectionChanged,pe=be.notifyHighlightChanged,Ce=be.registerHighlightChangeHandler,Ze=be.registerSelectionChangeHandler;o.useEffect((function(){me(de)}),[de,me]),o.useEffect((function(){pe(se)}),[se,pe]);var we=function(e){return function(t){var n;if(null==(n=e.onKeyDown)||n.call(e,t),!t.defaultPrevented){var r=["Home","End","PageUp","PageDown"];"vertical"===W?r.push("ArrowUp","ArrowDown"):r.push("ArrowLeft","ArrowRight"),"activeDescendant"===s&&r.push(" ","Enter"),r.includes(t.key)&&t.preventDefault(),ce({type:h.F.keyDown,key:t.key,event:t}),fe(t)}}},ye=o.useCallback((function(e){var t,n=S.findIndex((function(t){return z(t,e)})),r=(null!=(t=ve.current)?t:[]).some((function(t){return null!=t&&z(e,t)})),i=C(e,n),o=null!=ge.current&&z(e,ge.current);return{disabled:i,focusable:"DOM"===s,highlighted:o,index:n,selected:r}}),[S,C,z,ve,ge,s]),ke=o.useMemo((function(){return{dispatch:ce,getItemState:ye,registerHighlightChangeHandler:Ce,registerSelectionChangeHandler:Ze}}),[ce,ye,Ce,Ze]);return o.useDebugValue({state:ae}),{contextValue:ke,dispatch:ce,getRootProps:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)({},t,{"aria-activedescendant":"activeDescendant"===s&&null!=se?m(se):void 0,onBlur:(e=t,function(t){var n,r;null==(n=e.onBlur)||n.call(e,t),t.defaultPrevented||null!=(r=$.current)&&r.contains(t.relatedTarget)||ce({type:h.F.blur,event:t})}),onKeyDown:we(t),tabIndex:"DOM"===s?-1:0,ref:ee})},state:ae}};function z(e,t){if(t.type===d.valueChange)return(0,r.Z)({},e,{highlightedValue:t.value});var n=Z(e,t),i=t.context.selectionFollowsFocus;if(t.type===h.F.itemsChange){if(n.selectedValues.length>0)return(0,r.Z)({},n,{highlightedValue:n.selectedValues[0]});m(null,"reset",t.context)}return i&&null!=n.highlightedValue?(0,r.Z)({},n,{selectedValues:[n.highlightedValue]}):n}var N=function(e){var t,n=e.ref,i=(0,s.g)(),u=i.direction,l=void 0===u?"ltr":u,a=i.onSelected,c=i.orientation,v=void 0===c?"horizontal":c,g=i.value,h=i.registerTabIdLookup,b=i.selectionFollowsFocus,m=(0,f.Y)(),p=m.subitems,C=m.contextValue;h(o.useCallback((function(e){var t;return null==(t=p.get(e))?void 0:t.id}),[p]));var Z,w=o.useMemo((function(){return Array.from(p.keys())}),[p]),y=o.useCallback((function(e){var t,n;return null==e?null:null!=(t=null==(n=p.get(e))?void 0:n.ref.current)?t:null}),[p]),k="rtl"===l;Z="vertical"===v?"vertical":k?"horizontal-rtl":"horizontal-ltr";var x=o.useCallback((function(e,t){var n;a(e,null!=(n=t[0])?n:null)}),[a]),V=o.useMemo((function(){return void 0===g?{}:null!=g?{selectedValues:[g]}:{selectedValues:[]}}),[g]),I=o.useCallback((function(e){var t,n;return null!=(t=null==(n=p.get(e))?void 0:n.disabled)&&t}),[p]),S=L({controlledProps:V,disabledItemsFocusable:!b,focusManagement:"DOM",getItemDomElement:y,isItemDisabled:I,items:w,listRef:n,onChange:x,orientation:Z,reducerActionContext:o.useMemo((function(){return{selectionFollowsFocus:b||!1}}),[b]),selectionMode:"single",stateReducer:z}),P=S.contextValue,M=S.dispatch,F=S.getRootProps,R=S.state,T=R.highlightedValue,D=R.selectedValues;return o.useEffect((function(){void 0!==g&&null!=g&&M({type:d.valueChange,value:g})}),[M,g]),{dispatch:M,isRtl:k,orientation:v,selectedValue:null!=(t=D[0])?t:null,highlightedValue:T,getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)({},e,F(e),{"aria-orientation":"vertical"===v?"vertical":void 0,role:"tablist"})},contextValue:(0,r.Z)({},C,P)}},j=n(6826),B=n(66133),U=n(80184);function K(e){var t=e.value,n=e.children,r=t.dispatch,i=t.getItemIndex,u=t.getItemState,l=t.registerHighlightChangeHandler,a=t.registerSelectionChangeHandler,c=t.registerItem,s=t.totalSubitemCount,d=o.useMemo((function(){return{dispatch:r,getItemState:u,getItemIndex:i,registerHighlightChangeHandler:l,registerSelectionChangeHandler:a}}),[r,i,u,l,a]),v=o.useMemo((function(){return{getItemIndex:i,registerItem:c,totalSubitemCount:s}}),[c,i,s]);return(0,U.jsx)(f.s.Provider,{value:v,children:(0,U.jsx)(B.Z.Provider,{value:d,children:n})})}var W=["children","component","slotProps","slots"],Y=o.forwardRef((function(e,t){var n,o=e.children,a=e.component,s=e.slotProps,d=void 0===s?{}:s,f=e.slots,v=void 0===f?{}:f,g=(0,i.Z)(e,W),h=N({ref:t}),b=h.isRtl,m=h.orientation,p=h.getRootProps,C=h.contextValue,Z=(0,r.Z)({},e,{isRtl:b,orientation:m}),w=function(e){var t={root:["root",e.orientation]};return(0,u.Z)(t,(0,j.T)(c))}(Z),y=null!=(n=null!=a?a:v.root)?n:"div",k=(0,l.Z)({elementType:y,getSlotProps:p,externalSlotProps:d.root,externalForwardedProps:g,ownerState:Z,className:w.root});return(0,U.jsx)(K,{value:C,children:(0,U.jsx)(y,(0,r.Z)({},k,{children:o}))})}))},47542:function(e,t,n){n.d(t,{g:function(){return o}});var r=n(72791),i=r.createContext(null);function o(){var e=r.useContext(i);if(null==e)throw new Error("No TabsContext provided");return e}t.Z=i},47748:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(38331),i=n(23960),o=n(72791),u=n(40536),l=n(94419),a=n(97225);function c(e){return(0,a.Z)("MuiTabs",e)}(0,n(75878).Z)("MuiTabs",["root","horizontal","vertical"]);var s=n(50678),d=n(58959),f=n(52662);var v=function(e){var t=e.value,n=e.defaultValue,i=e.onChange,u=e.orientation,l=e.direction,a=e.selectionFollowsFocus,c=(0,d.Z)({controlled:t,default:n,name:"Tabs",state:"value"}),v=(0,s.Z)(c,2),g=v[0],h=v[1],b=o.useCallback((function(e,t){h(t),null==i||i(e,t)}),[i,h]),m=(0,f.Y)(),p=m.subitems,C=m.contextValue,Z=o.useRef((function(){})),w=o.useCallback((function(e){return p.get(e)}),[p]),y=o.useCallback((function(e){return Z.current(e)}),[]),k=o.useCallback((function(e){Z.current=e}),[]);return{contextValue:(0,r.Z)({direction:l,getTabId:y,getTabPanelId:w,onSelected:b,orientation:u,registerTabIdLookup:k,selectionFollowsFocus:a,value:g},C)}},g=n(47542),h=n(80184);function b(e){var t=e.value,n=e.children,r=t.direction,i=t.getItemIndex,u=t.onSelected,l=t.orientation,a=t.registerItem,c=t.registerTabIdLookup,s=t.selectionFollowsFocus,d=t.totalSubitemCount,v=t.value,b=t.getTabId,m=t.getTabPanelId,p=o.useMemo((function(){return{getItemIndex:i,registerItem:a,totalSubitemCount:d}}),[a,i,d]),C=o.useMemo((function(){return{direction:r,getTabId:b,getTabPanelId:m,onSelected:u,orientation:l,registerTabIdLookup:c,selectionFollowsFocus:s,value:v}}),[r,b,m,u,l,c,s,v]);return(0,h.jsx)(f.s.Provider,{value:p,children:(0,h.jsx)(g.Z.Provider,{value:C,children:n})})}var m=n(6826),p=["children","value","defaultValue","orientation","direction","component","onChange","selectionFollowsFocus","slotProps","slots"],C=o.forwardRef((function(e,t){var n,o=e.children,a=e.orientation,s=void 0===a?"horizontal":a,d=e.direction,f=void 0===d?"ltr":d,g=e.component,C=e.slotProps,Z=void 0===C?{}:C,w=e.slots,y=void 0===w?{}:w,k=(0,i.Z)(e,p),x=v(e).contextValue,V=(0,r.Z)({},e,{orientation:s,direction:f}),I=function(e){var t={root:["root",e.orientation]};return(0,l.Z)(t,(0,m.T)(c))}(V),S=null!=(n=null!=g?g:y.root)?n:"div",P=(0,u.Z)({elementType:S,externalSlotProps:Z.root,externalForwardedProps:k,additionalProps:{ref:t},ownerState:V,className:I.root});return(0,h.jsx)(S,(0,r.Z)({},P,{children:(0,h.jsx)(b,{value:x,children:o})}))}))},66133:function(e,t,n){n.d(t,{Z:function(){return r}});var r=n(72791).createContext(null)},61130:function(e,t,n){n.d(t,{F:function(){return r}});var r={blur:"list:blur",focus:"list:focus",keyDown:"list:keyDown",itemClick:"list:itemClick",itemHover:"list:itemHover",itemsChange:"list:itemsChange",textNavigation:"list:textNavigation"}},6826:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(72791),i=(n(80184),{disableDefaultClasses:!1}),o=r.createContext(i);function u(e){var t=r.useContext(o).disableDefaultClasses;return function(n){return t?"":e(n)}}},52662:function(e,t,n){n.d(t,{Y:function(){return u},s:function(){return o}});var r=n(50678),i=n(72791),o=i.createContext(null);function u(){var e=i.useState(new Map),t=(0,r.Z)(e,2),n=t[0],o=t[1],u=i.useRef(new Set),l=i.useCallback((function(e){u.current.delete(e),o((function(t){var n=new Map(t);return n.delete(e),n}))}),[]),a=i.useCallback((function(e,t,n){var r;if(void 0===e){if(void 0===n)throw new Error("The compound component's child doesn't have a key. You need to provide a missingKeyGenerator to generate it.");r=n(u.current)}else r=e;return u.current.add(r),o((function(e){var n=new Map(e);return n.set(r,t),n})),{id:r,deregister:function(){return l(r)}}}),[l]);return{contextValue:{getItemIndex:i.useCallback((function(e){return Array.from(n.keys()).indexOf(e)}),[n]),registerItem:a,totalSubitemCount:n.size},subitems:n}}o.displayName="CompoundComponentContext"},34182:function(e,t,n){n.d(t,{B:function(){return l}});var r=n(50678),i=n(72791),o=n(75721),u=n(52662);function l(e,t,n){var l=i.useContext(u.s);if(null===l)throw new Error("useCompoundItem must be used within a useCompoundParent");var a=l.registerItem,c=i.useState(e),s=(0,r.Z)(c,2),d=s[0],f=s[1];return(0,o.Z)((function(){var r=a(e,t,n),i=r.id,o=r.deregister;return f(i),o}),[a,t,n,e]),{id:d,index:void 0!==d?l.getItemIndex(d):-1,totalItemCount:l.totalSubitemCount}}},58959:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(50678),i=n(72791);function o(e){var t=e.controlled,n=e.default,o=(e.name,e.state,i.useRef(void 0!==t).current),u=i.useState(n),l=(0,r.Z)(u,2),a=l[0],c=l[1];return[o?t:a,i.useCallback((function(e){o||c(e)}),[])]}},96248:function(e,t,n){var r;n.d(t,{Z:function(){return a}});var i=n(50678),o=n(72791),u=0;var l=(r||(r=n.t(o,2))).useId;function a(e){if(void 0!==l){var t=l();return null!=e?e:t}return function(e){var t=o.useState(e),n=(0,i.Z)(t,2),r=n[0],l=n[1],a=e||r;return o.useEffect((function(){null==r&&l("mui-".concat(u+=1))}),[r]),a}(e)}},19348:function(e,t,n){n.d(t,{YD:function(){return p}});var r=n(50678),i=n(27853),o=n(84531),u=n(81020),l=n(18992),a=n(72791);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=new Map,d=new WeakMap,f=0,v=void 0;function g(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(n=e.root)?(d.has(n)||(f+=1,d.set(n,f.toString())),d.get(n)):"0":e[t]);var n})).toString()}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=g(e),n=s.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},s.set(t,n)}return n}(n),u=o.id,l=o.observer,a=o.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),s.delete(u))}}var b=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function m(e){return"function"!==typeof e.children}a.Component;function p(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.threshold,i=t.delay,o=t.trackVisibility,u=t.rootMargin,l=t.root,c=t.triggerOnce,s=t.skip,d=t.initialInView,f=t.fallbackInView,v=t.onChange,g=a.useState(null),b=(0,r.Z)(g,2),m=b[0],p=b[1],C=a.useRef(),Z=a.useState({inView:!!d,entry:void 0}),w=(0,r.Z)(Z,2),y=w[0],k=w[1];C.current=v,a.useEffect((function(){var e;if(!s&&m)return e=h(m,(function(t,n){k({inView:t,entry:n}),C.current&&C.current(t,n),n.isIntersecting&&c&&e&&(e(),e=void 0)}),{root:l,rootMargin:u,threshold:n,trackVisibility:o,delay:i},f),function(){e&&e()}}),[Array.isArray(n)?n.toString():n,m,l,u,c,s,o,f,i]);var x=null==(e=y.entry)?void 0:e.target,V=a.useRef();m||!x||c||s||V.current===x||(V.current=x,k({inView:!!d,entry:void 0}));var I=[p,y.inView,y.entry];return I.ref=I[0],I.inView=I[1],I.entry=I[2],I}}}]);
//# sourceMappingURL=1299.b9834d32.chunk.js.map