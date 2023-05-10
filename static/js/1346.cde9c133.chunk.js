"use strict";(self.webpackChunkxchain=self.webpackChunkxchain||[]).push([[1346],{9217:function(e,t,i){var n=i(29439),a=i(52183),s=i(72791),r=i(80184);t.Z=function(e){var t=e.text,i=e.lines,c=void 0===i?2:i,l=e.className,o=e.withButton,d=void 0!==o&&o,m=e.width,x=(0,s.useState)(!1),h=(0,n.Z)(x,2),u=h[0],p=h[1],g=(0,s.useState)(!1),f=(0,n.Z)(g,2),b=f[0],v=f[1],j=(0,s.useState)(!1),N=(0,n.Z)(j,2),w=N[0],y=N[1];return(0,s.useEffect)((function(){return y(!0),function(){return y(!1)}}),[]),(0,r.jsx)("span",{className:l||"",children:w&&(0,r.jsx)(a.Z,{lines:!b&&c,ellipsis:(0,r.jsxs)("span",{children:["... ",d&&(0,r.jsx)("button",{className:"text-divider",onClick:function(e){e.preventDefault(),v(!0)},children:"Read more"})]}),onTruncate:function(){return p(!u)},width:m,children:t})})}},32770:function(e,t,i){var n=i(29439),a=i(72791);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=(0,a.useState)(!0),s=(0,n.Z)(i,2),r=s[0],c=s[1],l=(0,a.useState)(0),o=(0,n.Z)(l,2),d=o[0],m=o[1],x=Math.ceil(e.length/t),h=(0,a.useRef)(null);(0,a.useEffect)((function(){r?c(!1):h.current.scrollIntoView({behavior:"smooth"})}),[d]);var u=function(){var i=d*t,n=i+t;return e.slice(i,n)};(0,a.useEffect)((function(){d>x-1?m(x-1):d<0&&x>0&&m(0)}),[u()]);return{next:function(){m((function(e){return Math.min(e+1,x)}))},prev:function(){m((function(e){return Math.max(e-1,0)}))},goToPage:function(e){var t=Math.max(0,e);m((function(){return Math.min(t,x)}))},showingOf:function(){var i=d*t,n=e.length>t?i+t:e.length;return e.length>0?"Showing ".concat(i+1,"-").concat(n," of ").concat(e.length," results"):""},currentItems:u,currentPage:d,maxPage:x,containerRef:h}}},15754:function(e,t,i){i.r(t),i.d(t,{default:function(){return J}});var n=i(38125),a=i(54019),s=i(17691),r=s.default.div.withConfig({componentId:"sc-v4sft9-0"})(["position:relative;@media screen and (min-width:1024px){display:grid;grid-template-columns:minmax(0,900px) minmax(0,360px);gap:60px;}@media screen and (min-width:1280px){grid-template-columns:minmax(0,900px) minmax(0,460px);}"]),c=s.default.div.withConfig({componentId:"sc-v4sft9-1"})(["display:flex;flex-direction:column;gap:40px;margin-top:30px;@media screen and (min-width:768px){gap:60px;}"]),l=i(1413),o=i(29439),d=s.default.div.withConfig({componentId:"sc-1pwx7ka-0"})([".media{position:relative;height:220px;&_img{z-index:-1;height:100%;width:100%;img{height:100%;}}}.main{&_meta{margin:15px 0;padding-bottom:15px;border-bottom:1px solid var(--divider);}&_title{display:inline-block;margin-bottom:10px;}}@media screen and (min-width:768px){.media{height:300px;}.main_meta{margin:20px 0;padding-bottom:20px;}}@media screen and (min-width:1280px){.media{height:450px;}}"]),m=(0,s.default)(d).withConfig({componentId:"sc-1pwx7ka-1"})(["grid-area:1 / 1 / 2 / 3;display:grid;grid-template-columns:minmax(0,900px) minmax(0,360px);gap:60px;align-items:center;@media screen and (min-width:1280px){grid-template-columns:minmax(0,900px) minmax(0,460px);}"]),x=i(5363),h=i(11087),u=i(43423),p=i(58068),g=i(27722),f=i(9217),b=i(47332),v=i(80184),j=function(e){var t=e.post,i=e.pinned,n=void 0!==i&&i,a=(e.index,(0,b.Z)()),s=(0,o.Z)(a,2),r=s[0],c=s[1].width,j=t.img,N=t.title,w=t.preview,y=t.date,_=t.read,k=t.comments,Z=t.shared,P=t.isPinned,S=n?m:d,T={};return(0,v.jsxs)(S,(0,l.Z)((0,l.Z)({},T),{},{children:[(0,v.jsxs)("div",{className:"media border-10",children:[(0,v.jsx)(x.Z,{className:"media_img",src:j,alt:N}),(0,v.jsx)(g.Z,{})]}),(0,v.jsxs)("div",{className:"main",ref:r,children:[(0,v.jsxs)("div",{className:"main_meta d-flex flex-wrap justify-content-between g-10",children:[(0,v.jsxs)("div",{className:"d-flex g-8",children:[P&&(0,v.jsx)("i",{className:"icon icon-bookmark text-accent"}),(0,v.jsx)(u.Z,{date:y,read:_,comments:k})]}),(0,v.jsx)(p.Z,{shared:Z})]}),(0,v.jsx)(h.OL,{className:"main_title h3 link-hover",to:"/post",children:(0,v.jsx)(f.Z,{text:N,width:c})}),(0,v.jsx)("p",{className:"main_preview",children:w})]})]}))},N=s.default.div.withConfig({componentId:"sc-10zrs3b-0"})(["max-width:460px;margin-left:auto;width:100%;@media screen and (min-width:1024px){margin-top:25px;}.block{&:not(:last-child){padding-bottom:30px;border-bottom:1px solid var(--divider);}.list-item{height:var(--elements-height);border:1px solid var(--divider);padding:0 20px;line-height:1;transition:border-color var(--transition);&:hover,&.active{border-color:var(--accent);}.icon-calendar{font-size:20px;}}}.react-calendar{padding-bottom:20px;border-bottom:1px solid var(--divider);&__navigation{height:var(--elements-height);border-radius:10px;background:var(--bg-tertiary);margin-bottom:10px;text-align:center;display:flex;align-items:center;font-family:var(--heading-font);color:var(--text-light);font-size:var(--text-sm);pointer-events:none;&__arrow{display:none;}}&__tile{height:42px;aspect-ratio:1/1;border-radius:10px;border:1px solid transparent;transition:all var(--transition);margin:0 auto;&:hover{border-color:var(--accent);color:var(--text-light);}&--now{background:var(--accent);color:var(--bg-secondary) !important;border-color:var(--accent);font-weight:600;}}&__month-view{&__weekdays{margin-bottom:10px;gap:10px;display:grid !important;grid-template-columns:repeat(7,1fr);@media screen and (min-width:414px){gap:12px;}&__weekday{font-weight:500;color:var(--text-light);display:flex;align-items:center;justify-content:center;height:34px;border-radius:10px;border:1px solid var(--divider);abbr{text-decoration:none;}}}&__days{display:grid !important;grid-template-columns:repeat(7,1fr);}}}"]),w=i(24374),y=i(90979),_=i(85017),k=i(72791),Z=i(93513),P=i(30520),S=i(97892),T=i.n(S),C=i(81694),F=i.n(C),M=function(e){var t=e.posts,i=e.isDrawer,n=(0,b.Z)(),a=(0,o.Z)(n,2),s=a[0],r=a[1].width,c=(0,P.j4)(),l=c.setQuery,d=c.filters,m=c.changeFilters,p=(0,k.useState)(new Date),g=(0,o.Z)(p,2),j=g[0],S=g[1],C=i?_.Z:k.Fragment;return(0,v.jsx)(C,{children:(0,v.jsxs)(N,{className:"sidebar sidebar_wrapper",children:[(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsx)("h5",{children:"Search"}),(0,v.jsx)(y.Z,{handler:l,placeholder:"Search here..."})]}),(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,v.jsx)("h5",{children:"Categories"}),(0,v.jsx)(Z.Z,{})]}),(0,v.jsx)("ul",{className:"sidebar_list",children:[{name:"crypto",label:"Crypto"},{name:"nft",label:"NFT"},{name:"internet",label:"Internet"},{name:"token",label:"Token"},{name:"blockchain",label:"Blockchain"}].map((function(e){return(0,v.jsxs)("li",{className:F()("sidebar_list-item justify-content-between",{active:d.includes(e.name)}),onClick:function(){return m(e.name)},children:[(0,v.jsx)("span",{children:e.label}),(0,v.jsx)("span",{className:"count",children:t.filter((function(t){return t.categories.includes(e.name)})).length})]},e.name)}))})]}),(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsx)("h5",{children:"Recent posts"}),(0,v.jsx)("ul",{className:"sidebar_list g-20",children:t.filter((function(e){return T()(e.date).isSame(T()(),"month")})).slice(0,5).map((function(e){return(0,v.jsxs)("li",{className:"sidebar_list-item--post d-flex align-items-center g-20",children:[(0,v.jsx)("div",{className:"media border-10",children:(0,v.jsx)(x.Z,{src:e.img,alt:e.title})}),(0,v.jsxs)("div",{className:"main d-flex flex-column g-5",ref:s,children:[(0,v.jsx)(u.Z,{date:e.date,read:e.read,isShort:!0}),(0,v.jsx)(h.OL,{className:"text-bold text-light link-hover",to:"/post",children:(0,v.jsx)(f.Z,{text:e.title,width:r})})]})]},e.id)}))})]}),(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsx)("h5",{children:"Tags"}),(0,v.jsx)("ul",{className:"tags-list",children:["bitcoin","cryptocurrency","art","music","internet","NFT","etherium","games","trends","finance","blockchain","3D","development","images","faq"].map((function(e,t){return(0,v.jsxs)("li",{className:"tag tag--sm",children:["#",e]},t)}))})]}),(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsx)("h5",{children:"Comments"}),(0,v.jsxs)("ul",{className:"d-flex flex-column g-10",children:[(0,v.jsxs)("li",{className:"d-flex g-10",children:[(0,v.jsx)("i",{className:"icon icon-comment text-accent"}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:"text-bold",children:"Admin"})," in tempor eros tortor, a ornare"]})]}),(0,v.jsxs)("li",{className:"d-flex g-10",children:[(0,v.jsx)("i",{className:"icon icon-comment text-accent"}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:"text-bold",children:"Admin"})," in tempor eros tortor, a ornare"]})]}),(0,v.jsxs)("li",{className:"d-flex g-10",children:[(0,v.jsx)("i",{className:"icon icon-comment text-accent"}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:"text-bold",children:"Admin"})," in tempor eros tortor, a ornare"]})]})]})]}),(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsx)("h5",{children:"Archives"}),(0,v.jsxs)("ul",{className:"sidebar_list",children:[(0,v.jsxs)("li",{className:"sidebar_list-item justify-content-between",children:[(0,v.jsxs)("a",{className:"d-flex align-items-center g-10 text-bold text-light link-hover",href:"@layout/blog-sidebar/Menu/index#",children:[(0,v.jsx)("i",{className:"icon icon-calendar text-accent"})," February"]}),(0,v.jsx)("span",{className:"count",children:"23"})]}),(0,v.jsxs)("li",{className:"sidebar_list-item justify-content-between",children:[(0,v.jsxs)("a",{className:"d-flex align-items-center g-10 text-bold text-light link-hover",href:"@layout/blog-sidebar/Menu/index#",children:[(0,v.jsx)("i",{className:"icon icon-calendar text-accent"})," March"]}),(0,v.jsx)("span",{className:"count",children:"08"})]}),(0,v.jsxs)("li",{className:"sidebar_list-item justify-content-between",children:[(0,v.jsxs)("a",{className:"d-flex align-items-center g-10 text-bold text-light link-hover",href:"@layout/blog-sidebar/Menu/index#",children:[(0,v.jsx)("i",{className:"icon icon-calendar text-accent"})," April"]}),(0,v.jsx)("span",{className:"count",children:"12"})]}),(0,v.jsxs)("li",{className:"sidebar_list-item justify-content-between",children:[(0,v.jsxs)("a",{className:"d-flex align-items-center g-10 text-bold text-light link-hover",href:"@layout/blog-sidebar/Menu/index#",children:[(0,v.jsx)("i",{className:"icon icon-calendar text-accent"})," March"]}),(0,v.jsx)("span",{className:"count",children:"16"})]})]})]}),(0,v.jsxs)("div",{className:"sidebar_block",children:[(0,v.jsx)("h5",{children:"Calendar"}),(0,v.jsx)(w.Z,{locale:"en-US",value:j,formatShortWeekday:function(e,t){return function(e){return T()(e).format("dd").charAt(0)}(t)}}),(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsxs)("button",{className:"calendar-nav d-flex align-items-center g-10",onClick:function(){S(T()(j).subtract(1,"month").set("date",1).toDate())},"data-direction":"prev",children:[(0,v.jsx)("i",{className:"icon icon-angle-left"})," Previous"]}),(0,v.jsxs)("button",{className:"calendar-nav d-flex align-items-center g-10",onClick:function(){S(T()(j).add(1,"month").set("date",1).toDate())},"data-direction":"next",children:["Next ",(0,v.jsx)("i",{className:"icon icon-angle-right"})]})]})]})]})})},D=i(75218),I=i(83268),L=i(77801),z=i(69291),A=i(32770),R=i.p+"static/media/1.957da35aa90639bd94c2.webp",q=i.p+"static/media/2.1e99a0bc0b23b3d09b9e.webp",E=i.p+"static/media/3.66b583e269ac0650e978.webp",O=i.p+"static/media/4.597dacca04e5083b6835.webp",Y=i.p+"static/media/5.e59fa9464c3217c0b200.webp",B=i.p+"static/media/6.01ac4792a1d5c06acb9c.webp",X=i.p+"static/media/7.f797648bacf00e98f258.webp",K=i.p+"static/media/8.8307dacfc424283a0c52.webp",W=i.p+"static/media/9.eb17b534e432edad0c31.webp",G=i.p+"static/media/10.5e5689292b3f6f33847d.webp",U=i.p+"static/media/11.8d9eb33993e6a7fe1621.webp",V="Tincidunt tortor aliquam nulla facilisi cras fermentum. Tincidunt augue interdum velit euismod.\n         Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Scelerisque in dictum\n         non consectetur.",H=[{id:"post-1",date:T()(),read:3,comments:2,shared:1,title:"Mint your own Tezos collections on Xchain",preview:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:R,isPinned:!0,categories:["internet","crypto"]},{id:"post-2",date:T()(),read:10,comments:5,shared:4,title:"Top 10 NFT projects that shocked the Internet with their uniqueness",preview:V,img:q,isPinned:!1,categories:["internet","nft"]},{id:"post-3",date:T()(),read:5,comments:3,shared:2,title:"The rise of the non fungible token internet having trouble",preview:V,img:E,isPinned:!1,categories:["internet","token"]},{id:"post-4",date:T()().subtract(1,"days"),read:2,comments:1,shared:1,title:"Features of NFT games that have gained popularity in 2022",preview:V,img:O,isPinned:!1,categories:["blockchain","nft"]},{id:"post-5",date:T()().subtract(2,"days"),read:15,comments:24,shared:12,title:"Guide to creating & selling digital art NFTs",preview:V,img:Y,isPinned:!1,categories:["crypto","nft"]},{id:"post-6",date:T()().subtract(3,"days"),read:3,comments:2,shared:8,title:"NFT art exists in the digital world collector",preview:V,img:B,isPinned:!1,categories:["crypto","nft"]},{id:"post-7",date:T()().subtract(4,"days"),read:5,comments:10,shared:4,title:"Sell like a pro: 5 tips for selling NFTs",preview:V,img:X,isPinned:!1,categories:["blockchain","crypto"]},{id:"post-8",date:T()().subtract(5,"days"),read:2,comments:1,shared:1,title:"How to create a digital art NFT: a step-by-step guide",preview:V,img:K,isPinned:!1,categories:["internet","nft"]},{id:"post-9",date:T()().subtract(6,"days"),read:15,comments:24,shared:12,title:"Xchain Top sellers: the most popular NFTs of the week",preview:V,img:W,isPinned:!1,categories:["internet","nft"]},{id:"post-10",date:T()().subtract(7,"days"),read:3,comments:2,shared:8,title:"Blockchain technology and NFTs: what is the connection?",preview:V,img:G,isPinned:!1,categories:["blockchain","nft"]},{id:"post-11",date:T()().subtract(8,"days"),read:5,comments:10,shared:4,title:"What's the difference between NFTs and cryptocurrencies?",preview:V,img:U,isPinned:!1,categories:["crypto","nft"]}],Q=function(){var e=(0,P.j4)().filterData,t=(0,z.Z)().width<1024,i=t?H:H.filter((function(e){return!e.isPinned})),n=H.filter((function(e){return e.isPinned})),a=(0,A.Z)(e(i,"title"),5);return(0,v.jsx)("section",{children:(0,v.jsxs)(r,{className:"container",style:{position:"relative"},children:[t&&(0,v.jsx)(I.Z,{text:"Menu",bottom:"#posts"}),!t&&(0,v.jsx)(j,{post:n[0],pinned:!0}),(0,v.jsxs)("div",{ref:a.containerRef,children:[(0,v.jsx)(c,{id:"posts",children:0!==a.currentItems().length?a.currentItems().map((function(e,t){return(0,v.jsx)(j,{post:e,index:t},e.id)})):(0,v.jsx)(L.Z,{})}),a.maxPage>1&&(0,v.jsx)(D.Z,{pagination:a})]}),(0,v.jsx)(M,{posts:i,isDrawer:t})]})})},J=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n.Z,{title:"Blog"}),(0,v.jsx)(a.Z,{title:"Blog"}),(0,v.jsx)("main",{children:(0,v.jsx)(P.Di,{children:(0,v.jsx)(Q,{})})})]})}},27722:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(1413),a=i(45987),s="style_container__ax2tb",r="style_avatar__PFOLm",c=i(11087),l=i(5363),o=i(72791),d=i(25394),m=i(80184),x=["avatar","name"],h=function(e){var t=e.avatar,i=void 0===t?d.Z:t,o=e.name,h=void 0===o?"Xchain":o,u=(0,a.Z)(e,x);return(0,m.jsxs)("div",(0,n.Z)((0,n.Z)({className:"".concat(s," d-flex align-items-center g-10 bg-secondary")},u),{},{children:[(0,m.jsx)(l.Z,{className:r,src:i,alt:h}),(0,m.jsx)(c.OL,{to:"/author",children:"Xchain"===h?h:"@".concat(h)})]}))},u=(0,o.memo)(h)},43423:function(e,t,i){var n=i(97892),a=i.n(n),s=i(72791),r=i(80184),c=function(e){var t=e.date,i=e.read,n=e.comments,s=e.isShort,c=void 0!==s&&s,l=e.className;return(0,r.jsxs)("div",{className:"".concat(l||""," metadata d-flex align-items-center g-10 text-xs text-bold text-overflow}"),style:{color:"var(--meta)"},children:[(0,r.jsx)("span",{className:"date",children:a()(t).format("MMM DD, YYYY")}),(0,r.jsx)("i",{className:"icon icon-dot text-accent",style:{fontSize:"3px"}}),(0,r.jsxs)("span",{className:"read",children:[i," min read"]}),!c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("i",{className:"icon icon-dot text-accent",style:{fontSize:"3px"}}),(0,r.jsxs)("span",{className:"comments text-overflow",children:[n," comment",1!==n?"s":""]})]})]})};t.Z=(0,s.memo)(c)},75218:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(93433),a="style_wrapper__CtKLE",s="style_btn__LG+VL",r=i(81694),c=i.n(r),l=i(80184),o=function(e){var t=e.pagination,i=t.maxPage;return(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("button",{className:"btn btn--outline text-sm",onClick:t.prev,disabled:t.currentPage<=0,"aria-label":"Previous page",children:"prev"}),(0,l.jsx)("div",{className:"d-flex g-10",children:(0,n.Z)(Array(i)).map((function(e,i){return(0,l.jsx)("button",{className:c()("".concat(s," btn btn--outline text-sm"),{active:i===t.currentPage}),onClick:function(){return t.goToPage(i)},"data-pagination":!0,disabled:t.currentPage===i,"aria-label":"Page ".concat(i+1),children:i+1},i)}))}),(0,l.jsx)("button",{className:"btn btn--outline text-sm",onClick:t.next,disabled:t.currentPage+1===t.maxPage,"aria-label":"Next page",children:"next"})]})}},93513:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(4942),a="style_button__gYyav",s="style_visible__KY7r4",r=i(30520),c=i(81694),l=i.n(c),o=i(80184),d=function(e){var t=e.text,i=void 0===t?"Reset":t,c=(0,r.j4)(),d=c.resetFilters,m=c.filters;return(0,o.jsx)("button",{className:l()(a,(0,n.Z)({},s,m.length>0)),onClick:d,children:i})}},90979:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(29439),a="style_form__6OUaE",s=i(72791),r=i(80184),c=function(e){var t=e.placeholder,i=void 0===t?"Search":t,c=e.className,l=e.handler,o=(0,s.useState)(""),d=(0,n.Z)(o,2),m=d[0],x=d[1];return(0,r.jsxs)("form",{className:"".concat(a," search-form field bg-tertiary ").concat(c||""),children:[(0,r.jsx)("input",{className:"text-overflow",type:"text",placeholder:i,onChange:function(e){x(e.target.value),l&&l(e.target.value)}}),(0,r.jsx)("button",{className:"".concat(0!==m.length?"visible":""),type:"reset","aria-label":"Reset form",onClick:function(){x(""),l&&l("")},children:(0,r.jsx)("i",{className:"icon icon-xmark"})}),(0,r.jsx)("button",{type:"submit","aria-label":"Search",children:(0,r.jsx)("i",{className:"icon icon-search"})})]})}},58068:function(e,t,i){i.d(t,{Z:function(){return c}});var n="style_button__66kWT",a="style_icon__KsfSk",s=i(44238),r=i(80184),c=function(e){var t=e.shared,i=void 0===t?0:t;return(0,r.jsxs)("button",{className:"".concat(n," text-xs"),"aria-label":"Share post",children:[(0,r.jsx)("i",{className:"".concat(a," icon-reply text-accent")})," (",(0,s.vL)(i),")"]})}}}]);
//# sourceMappingURL=1346.cde9c133.chunk.js.map