"use strict";(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[2361],{59380:function(e,n,t){t(72791);n.Z=t.p+"static/media/eth.8c2822b7b83dc6ddf7438a8670907da1.svg"},5363:function(e,n,t){var a=t(18489),r=t(83738),i=t(87087),l=(t(88082),t(19713),t(80184)),s=["src","alt","effect","className"];n.Z=function(e){var n=e.src,t=e.alt,c=e.effect,o=void 0===c?"blur":c,d=e.className,u=(0,r.Z)(e,s);return(0,l.jsx)(i.LazyLoadImage,(0,a.Z)({src:n,alt:t,effect:o,wrapperClassName:"".concat(d||""," lazy-image")},u))}},55015:function(e,n,t){t.d(n,{Z:function(){return s}});var a="style_header__crlkc",r="style_header_title__BSRtC",i=t(50200),l=t(80184),s=function(e){var n=e.title;return(0,l.jsx)("header",{className:a,children:(0,l.jsxs)("div",{className:"container d-flex flex-column g-10",children:[(0,l.jsx)("h2",{className:r,children:n}),(0,l.jsx)(i.Z,{})]})})}},38125:function(e,n,t){var a=t(54270),r=t(80184);n.Z=function(e){e.title;return(0,r.jsx)(a.q,{children:(0,r.jsx)("title",{children:" VoidGate "})})}},8576:function(e,n,t){t.d(n,{E3:function(){return m},FG:function(){return v},L0:function(){return x},M4:function(){return p},Nb:function(){return u},Oq:function(){return h}});var a=t(97018),r=t(11087),i=t(20975),l=t(60627),s=t(44238),c=t(80184),o=function(e,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=n["1day"]*t,r=n["30day"]*t,i=n["7day"]*t,l=n.allTime;switch(e.value){default:case"all":return l;case"year":return a;case"month":return r;case"week":return i}},d=function(e){var n=e.children;return(0,c.jsx)(l.Z,{in:!0,timeout:1e3,children:n})},u=function(e){var n=e.value;return(0,c.jsx)(d,{children:(0,c.jsxs)("div",{className:"d-flex align-items-center g-15",children:[(0,c.jsx)(a.Z,{src:n.image,alt:n.image,size:"sm"}),(0,c.jsx)(r.OL,{to:"/author/".concat(n.id),children:n.name})]})})},m=function(e){var n=e.value,t=e.type,a=e.period,r="eth"===t.value?1:2866.96;return(0,c.jsx)(d,{children:(0,c.jsx)("div",{className:"d-flex align-items-center justify-content-center g-10 text-uppercase",children:n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{crypto:t.value}),(0,s.uf)(o(a,n,!0,r))]})})})},f=function(e){var n=e.value;return(0,c.jsx)(d,{children:(0,c.jsxs)("div",{className:"d-flex align-items-center justify-content-center g-10 text-uppercase",children:[(0,c.jsx)(a.Z,{src:n.sampleImages[0],size:"xs"}),(0,c.jsx)(a.Z,{src:n.sampleImages[1],size:"xs"}),(0,c.jsx)(a.Z,{src:n.sampleImages[2],size:"xs"}),(0,c.jsx)(a.Z,{src:n.sampleImages[3],size:"xs"})]})})},v=function(e){var n=e.value,t=e.type;t.value;return(0,c.jsx)(d,{children:(0,c.jsx)("div",{className:"d-flex align-items-center justify-content-center g-10 text-uppercase",children:n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{crypto:t.value}),null==n.price?0:(0,s.uf)(n.price.amount.decimal)]})})})},p=function(e){var n=e.value;return(0,c.jsx)(d,{children:(0,c.jsx)("span",{className:"text-uppercase",children:n})})},x=function(e,n,t){return[{field:"id",headerName:"#",minWidth:50,maxWidth:90,headerAlign:"center",align:"center",flex:1,renderCell:function(e){var n=e.api.getRowIndex(e.id)+1;return(0,c.jsx)("span",{className:"text-accent",children:(0,s.vL)(n)})}},{field:"slug",accessor:"collections",headerName:"Collections",minWidth:200,maxWidth:400,flex:1,renderCell:function(e){var n=e.row;return(0,c.jsx)(u,{value:n})}},{field:"volume",headerName:"Volume",minWidth:80,maxWidth:160,flex:1,renderCell:function(n){var a=n.value;return(0,c.jsx)(m,{value:a,type:t,period:e})}},{field:"floorAsk",headerName:"Floor Price",minWidth:80,maxWidth:160,flex:1,renderCell:function(e){var n=e.value;return(0,c.jsx)(v,{value:n,type:t})}},{field:"topBid",headerName:"Top Bid",minWidth:80,maxWidth:160,flex:1,renderCell:function(e){var n=e.value;return(0,c.jsx)(v,{value:n,type:t})}},{field:"onSaleCount",headerName:"Items Listed",minWidth:80,maxWidth:160,flex:1,renderCell:function(e){var n=e.value;return(0,c.jsx)(p,{value:n})}},{field:"sampleImages",accessor:"sampleImages",headerName:"",minWidth:80,maxWidth:160,flex:1,renderCell:function(e){var n=e.row;return(0,c.jsx)(f,{value:n})}}]},h={period:[{value:"all",label:"All time"},{value:"week",label:"Week"},{value:"month",label:"Month"},{value:"year",label:"One Day"}],category:[{value:"all",label:"All categories"},{value:"art",label:"Art"},{value:"collectibles",label:"Collectibles"},{value:"games",label:"Games"},{value:"music",label:"Music"}],type:[{value:"eth",label:"Ethereum"},{value:"imx",label:"Immutable X"}]}},70719:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(38125),r=t(55015),i=t(50678),l="style_container__Rl9WF",s=t(72791),c=t(69291),o=t(8576),d=t(56549),u=t(80184),m=(0,s.lazy)((function(){return Promise.all([t.e(1243),t.e(1896),t.e(68),t.e(9162),t.e(2651)]).then(t.bind(t,22651))})),f=(0,s.lazy)((function(){return Promise.all([t.e(1243),t.e(6975),t.e(849)]).then(t.bind(t,68757))})),v=function(){var e=(0,s.useState)(o.Oq.period[0]),n=(0,i.Z)(e,2),t=n[0],a=n[1],r=(0,s.useState)(o.Oq.category[0]),v=(0,i.Z)(r,2),p=v[0],x=v[1],h=(0,s.useState)(o.Oq.type[0]),g=(0,i.Z)(h,2),j=g[0],b=g[1],y=(0,c.Z)().width<1024;return(0,u.jsx)("div",{className:"section mt-0",children:(0,u.jsxs)("div",{className:"container d-grid g-30",children:[(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)(d.Z,{selected:t,setSelected:a,options:o.Oq.period}),(0,u.jsx)(d.Z,{selected:p,setSelected:x,options:o.Oq.category}),(0,u.jsx)(d.Z,{selected:j,setSelected:b,options:o.Oq.type})]}),y?(0,u.jsx)(f,{period:t,category:p,type:j}):(0,u.jsx)(m,{period:t,category:p,type:j})]})})},p=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{title:"Ranking"}),(0,u.jsx)(r.Z,{title:"Ranking"}),(0,u.jsx)("main",{children:(0,u.jsx)(v,{})})]})}},97018:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(5363),r=t(81694),i=t.n(r),l=t(72791);var s=t.p+"static/media/verified.d712db63e7c4123b870c80f47dbeaf91.svg",c=t(80184),o=function(e){var n=e.src,t=e.alt,r=e.size,l=e.isVerified,o=e.className;return(0,c.jsxs)("div",{className:i()("avatar-wrapper",r,o),children:[(0,c.jsx)(a.Z,{className:"avatar",src:n,alt:t}),l&&(0,c.jsx)(a.Z,{className:"verified",src:s,alt:"verified",effect:"opacity"})]})},d=(0,l.memo)(o)},50200:function(e,n,t){var a=t(50678),r=t(93517),i=t(11087),l=t(72791),s=t(57689),c=t(81694),o=t.n(c),d=t(80184);n.Z=function(){var e=(0,s.TH)(),n=(0,l.useState)([]),t=(0,a.Z)(n,2),c=t[0],u=t[1];return(0,l.useEffect)((function(){var n=e.pathname.split("/"),t=n.map((function(e,t){return{name:""===e?"Home":e.replace(/-/g," "),path:""===e?"/":n.slice(0,t+1).join("/")}}));u(t)}),[e]),(0,d.jsx)(r.Z,{separator:"\u2022",sx:{color:"var(--text)",textTransform:"capitalize","& .MuiBreadcrumbs-separator":{color:"var(--accent)"}},children:c.map((function(n,t){return(0,d.jsx)(i.OL,{className:o()("text-bold link-hover",{"text-accent disabled":n.path===e.pathname,"text-uppercase":"faq"===n.name}),to:n.path,children:n.name},n.path)}))})}},20975:function(e,n,t){t.d(n,{Z:function(){return c}});var a="style_wrapper__dZxvR",r="style_img__ORmmz",i=t(59380);t(72791);var l=t.p+"static/media/imx.be40b749786bef3e51499acd99a3f309.svg",s=t(80184),c=function(e){var n=e.crypto,t=[{icon:i.Z,name:"eth",label:"Ethereum"},{icon:l,name:"imx",label:"ImmutableX"}].find((function(e){return e.name===n}));return(0,s.jsx)("div",{className:a,children:(0,s.jsx)("img",{className:r,src:t.icon,alt:t.label})})}},56549:function(e,n,t){t.d(n,{Z:function(){return y}});var a,r=t(18489),i=t(50678),l=t(83738),s=t(17186),c=t(17691),o=t(66903),d=(0,c.keyframes)(a||(a=(0,s.Z)(["\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),u=(0,c.default)(o.ZP).withConfig({componentId:"sc-wiyx35-0"})([".select{&__control{border:none;cursor:pointer;display:flex;align-items:center;background:transparent;min-height:unset;&--is-focused{box-shadow:none;}}&__value-container{padding:0;}&__single-value{margin:0;}&__indicator{padding:0;transition:color var(--transition);&:hover{color:var(--accent);}}&__indicator-separator{display:none;}&__menu{min-width:max-content;border-radius:10px;background:var(--bg-tertiary);animation:"," var(--transition);&.close{animation:"," var(--transition) reverse;}}&__option{padding:6px 20px;transition:all var(--transition);cursor:pointer;&:hover,&--is-selected{color:var(--text-light);}&--is-selected{font-weight:500;}&--is-selected,&--is-focused{background:transparent;}}}"],d,d),m=(0,c.default)(u).withConfig({componentId:"sc-wiyx35-1"})([".select{&__control{height:var(--elements-height);padding:0 20px;border-radius:10px;background:var(--bg-tertiary);}&__single-value{color:var(--text);}&__indicator{padding:0;margin-left:20px;transition:color var(--transition);&:hover{color:var(--accent);}}&__indicator-separator{display:none;}&__menu{min-width:max-content;border-radius:10px;background:var(--bg-tertiary);}&__option{padding:6px 20px;transition:all var(--transition);cursor:pointer;color:var(--text);&:hover,&--is-selected{color:var(--text-light);}&--is-selected{font-weight:500;}&--is-selected,&--is-focused{background:transparent;}}}&.outline{.select__control{border:1px solid var(--divider);background:transparent;}}"]),f=(0,c.default)(u).withConfig({componentId:"sc-wiyx35-2"})([".select{&__control{width:fit-content;gap:10px;}&__single-value{font-weight:500;color:var(--text-light);font-size:var(--text-sm);}&__indicator{font-size:var(--text-xs);}}"]),v=t(98925),p=t(72791),x=t(81694),h=t.n(x),g=t(80184),j=["options","selected","setSelected","placeholder","variant","className"],b=function(e){var n=e.options,t=e.selected,a=e.setSelected,s=e.placeholder,c=e.variant,o=e.className,d=(0,l.Z)(e,j),u="minimal"===c?f:m,x=(0,p.useState)((function(){return"select_"+Math.random().toFixed(5).slice(2)})),b=(0,i.Z)(x,1)[0];return(0,g.jsx)(u,{value:t,onChange:a,options:n,isSearchable:!1,openMenuOnFocus:!0,blurInputOnSelect:!0,onMenuClose:function(){var e=document.querySelector("#".concat(d.id||b," .select__menu")),n=null===e||void 0===e?void 0:e.parentElement,t=null===e||void 0===e?void 0:e.cloneNode(!0);t&&(t.classList.add("close"),t.addEventListener("animationend",(function(){null===n||void 0===n||n.removeChild(t)})),null===n||void 0===n||n.appendChild(t))},instanceId:"custom-select",classNamePrefix:"select",className:h()("select",o),components:{DropdownIndicator:function(e){return(0,g.jsx)(v.c.DropdownIndicator,(0,r.Z)((0,r.Z)({},e),{},{children:(0,g.jsx)("i",{className:"icon-angle-down"})}))},SingleValue:function(e){return(0,g.jsx)(v.c.SingleValue,(0,r.Z)((0,r.Z)({},e),{},{children:(0,g.jsx)("span",{children:e.children})}))}},placeholder:s||null})},y=(0,p.memo)(b)},69291:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(72791),r=function(e){(0,a.useEffect)(e,[])},i=function(e){var n=(0,a.useRef)(e);n.current=e,r((function(){return function(){return n.current()}}))},l=function(e){var n=(0,a.useRef)(0),t=(0,a.useState)(e),r=t[0],l=t[1],s=(0,a.useCallback)((function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame((function(){l(e)}))}),[]);return i((function(){cancelAnimationFrame(n.current)})),[r,s]};var s="undefined"!==typeof window,c=function(e,n){void 0===e&&(e=1/0),void 0===n&&(n=1/0);var t=l({width:s?window.innerWidth:e,height:s?window.innerHeight:n}),r=t[0],i=t[1];return(0,a.useEffect)((function(){if(s){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,n)}(window,"resize",e),function(){!function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,n)}(window,"resize",e)}}}),[]),r}}}]);
//# sourceMappingURL=2361.5ef673d3.chunk.js.map