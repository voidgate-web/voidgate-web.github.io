"use strict";(self.webpackChunkvoigate=self.webpackChunkvoigate||[]).push([[6234],{5363:function(e,t,a){var s=a(18489),i=a(83738),r=a(87087),n=(a(88082),a(19713),a(80184)),c=["src","alt","effect","className"];t.Z=function(e){var t=e.src,a=e.alt,o=e.effect,d=void 0===o?"blur":o,l=e.className,u=(0,i.Z)(e,c);return(0,n.jsx)(r.LazyLoadImage,(0,s.Z)({src:t,alt:a,effect:d,wrapperClassName:"".concat(l||""," lazy-image")},u))}},55015:function(e,t,a){a.d(t,{Z:function(){return c}});var s="style_header__crlkc",i="style_header_title__BSRtC",r=a(50200),n=a(80184),c=function(e){var t=e.title;return(0,n.jsx)("header",{className:s,children:(0,n.jsxs)("div",{className:"container d-flex flex-column g-10",children:[(0,n.jsx)("h2",{className:i,children:t}),(0,n.jsx)(r.Z,{})]})})}},31945:function(e,t,a){var s=a(18489),i=a(50678),r=a(83738),n=a(81406),c=a(19348),o=a(80184),d=["children","index","className","type","delay"];t.Z=function(e){var t=e.children,a=e.index,l=void 0===a?1:a,u=e.className,m=e.type,f=void 0===m?"slide":m,b=(e.delay,(0,r.Z)(e,d)),p=(0,c.YD)({threshold:.2,triggerOnce:!0}),x=(0,i.Z)(p,2),h=x[0],v=x[1],j={config:{duration:300,mass:1,tension:300,friction:30},delay:b.delay?b.delay:100*l},g={slide:(0,n.q_)((0,s.Z)((0,s.Z)({from:{transform:"translateY(40px)",opacity:0},to:{transform:v?"translateY(0px)":"translateY(40px)",opacity:v?1:0}},j),b)),fade:(0,n.q_)((0,s.Z)((0,s.Z)({from:{opacity:0},to:{opacity:v?1:0}},j),b)),grow:(0,n.q_)((0,s.Z)((0,s.Z)({from:{transform:"scale(0.4)"},to:{transform:v?"scale(1)":"scale(0.4)"}},j),b))};return(0,o.jsx)(n.q.div,{className:u||"",style:g[f],ref:h,children:t})}},38125:function(e,t,a){var s=a(54270),i=a(80184);t.Z=function(e){e.title;return(0,i.jsx)(s.q,{children:(0,i.jsx)("title",{children:" VoidGate "})})}},58670:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var s=a(38125),i=a(55015),r=a(27166),n=a(33032),c=a(50678),o={details:"style_details__PDVzR",details_container:"style_details_container__wbvTc",main_text:"style_main_text__3Fstf",main_about:"style_main_about__Lwmhk",title:"style_title__0pN2Q",bid:"style_bid__FlJ7C",actions:"style_actions__Tz+AF",btn:"style_btn__30Hsw",like:"style_like__RldYA",wrapper:"style_wrapper__4d0Ip",main_creator:"style_main_creator__z5ZEM",block:"style_block__TjgtM",block_details:"style_block_details__u1znj",buttons:"style_buttons__c7uFo",table:"style_table__r2Bjd"},d=a(20027),l=a(84892),u=a(23097),m=a(97018),f=a(31945),b=a(97892),p=a.n(b),x=a(31243),h=a(57689),v=a(72791),j=a(80184),g=a(40130);p().extend(g);var k=function(e){e.data;var t=e.active,a=(0,h.TH)(),s=a.pathname.split("/")[3],i=a.pathname.split("/")[4],o=(0,v.useState)([]),d=(0,c.Z)(o,2),l=d[0],u=d[1],b={method:"GET",headers:{accept:"*/*","x-api-key":"89079f7b-ce6a-5fb9-a571-4cefa93c4b01"}};return(0,v.useEffect)((function(){(0,n.Z)((0,r.Z)().mark((function e(){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api-goerli.reservoir.tools/orders/bids/v4?token=".concat(s,"%3A").concat(i),b);case 2:t=e.sent,a=t.data,u(a.orders),console.log("bids",a.orders);case 6:case"end":return e.stop()}}),e)})))()}),[s,i]),(0,j.jsx)("div",{className:"d-flex flex-column g-20",children:l.map((function(e,a){return(0,j.jsx)(f.Z,{index:a,children:(0,j.jsxs)("div",{className:"d-flex align-items-center g-15",children:[(0,j.jsx)(m.Z,{src:e.source.icon,isVerified:!0,alt:e.source.domain,size:"xs"}),(0,j.jsx)("div",{className:"text-sm",children:(0,j.jsxs)("p",{className:"text-overflow",children:[t?(0,j.jsxs)("span",{className:"text-accent text-bold",children:[e.price.amount.native," ETH"]}):(0,j.jsx)("span",{children:"bid cancelled"})," by ",(0,j.jsxs)("span",{className:"text-light text-bold",children:[" ",e.maker.substring(0,8)," "]})]})})]})},a)}))})},Z=a(7179),_=a(21498),y=a(14989),N=a(69291),w=a.p+"static/media/1.230ddc66dbde10ba8309.webp",C=a.p+"static/media/2.8f6bd00b7a7baba29009.webp",T=a.p+"static/media/3.4fd7713eb60b2d9503b4.webp",S=a.p+"static/media/4.29aa075527776908afd0.webp",V=a.p+"static/media/5.482da8ffbbe8a75ee90e.webp",E=a.p+"static/media/6.1ed8367274d2a54e6544.webp",B=a.p+"static/media/7.056aa6e1aaed76182682.webp",A=a.p+"static/media/8.aa55d68ca785f925d966.webp",z=a.p+"static/media/9.728296ac41d22136f007.webp",F=a.p+"static/media/10.0799c925f950cee53e89.webp",I=a.p+"static/media/11.fd4fb7b01c553a4a6647.webp",q=a.p+"static/media/12.07deea4da8194d7af9fc.webp",H=a.p+"static/media/13.d4b07c5c6295dfeea8ae.webp",M=a.p+"static/media/14.baab3a8c3883cfc22b1a.webp",L=a.p+"static/media/15.827f69314371f2a62feb.webp",D=a.p+"static/media/16.a613b022eddfd02578f9.webp",P=a.p+"static/media/17.1c0f100c1056c767f94e.webp",R={bids:[{id:"bid-1",price:.09,user:{name:"Helen Freeman",avatar:w,isVerified:!0},date:p()().subtract(10,"minutes"),active:!0},{id:"bid-2",price:2,user:{name:"Tammy Roberts",avatar:C,isVerified:!0},date:p()().subtract(10,"minutes"),active:!0},{id:"bid-3",price:.47,user:{name:"Jean Weber",avatar:T,isVerified:!1},date:p()().subtract(12,"minutes"),active:!0},{id:"bid-4",price:.21,user:{name:"Maria Wilson",avatar:S,isVerified:!0},date:p()().subtract(32,"minutes"),active:!0},{id:"bid-5",price:.38,user:{name:"Shannon Ramirez",avatar:V,isVerified:!1},date:p()().subtract(1,"hours"),active:!0},{id:"bid-6",price:1.1,user:{name:"Diana Day",avatar:E,isVerified:!0},date:p()().subtract(1,"hours"),active:!0},{id:"bid-7",price:4.94,user:{name:"Ray Blues",avatar:B,isVerified:!0},date:p()().subtract(4,"hours"),active:!1},{id:"bid-8",price:.59,user:{name:"Jolly Molly",avatar:A,isVerified:!1},date:p()().subtract(12,"hours"),active:!1},{id:"bid-9",price:1.15,user:{name:"Stacy Night",avatar:z,isVerified:!1},date:p()().subtract(14,"hours"),active:!1},{id:"bid-10",price:2.4,user:{name:"Bjorn Nord",avatar:F,isVerified:!0},date:p()().subtract(14,"hours"),active:!1},{id:"bid-11",price:14.01,user:{name:"Black Orchid",avatar:I,isVerified:!0},date:p()().subtract(1,"days"),active:!1},{id:"bid-12",price:.024,user:{name:"Anna Purple",avatar:q,isVerified:!0},date:p()().subtract(1,"days"),active:!1},{id:"bid-13",price:.47,user:{name:"Hazel Minnie",avatar:H,isVerified:!1},date:p()().subtract(4,"days"),active:!1},{id:"bid-14",price:1.19,user:{name:"Tommy Lee",avatar:M,isVerified:!0},date:p()().subtract(7,"days"),active:!1},{id:"bid-15",price:2.12,user:{name:"Derek Falcon",avatar:L,isVerified:!0},date:p()().subtract(10,"days"),active:!1},{id:"bid-16",price:.15,user:{name:"Liara Kelly",avatar:D,isVerified:!1},date:p()().subtract(14,"days"),active:!1},{id:"bid-17",price:5.31,user:{name:"Tia Smith",avatar:P,isVerified:!0},date:p()().subtract(25,"days"),active:!1}],details:{owner:"0x1435fabhf\u2026b3ec",background:"Colorful",blockchain:"Ethereum",category:"Abstract"},likes:4561},Y=function(){var e=(0,h.TH)(),t=e.pathname.split("/")[3],a=e.pathname.split("/")[4],s=(0,v.useState)([]),i=(0,c.Z)(s,2),d=i[0],l=i[1];return(0,v.useEffect)((function(){(0,n.Z)((0,r.Z)().mark((function e(){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api-goerli.reservoir.tools/tokens/v6?tokens=".concat(t,"%3A").concat(a,"&includeTopBid=true"));case 2:s=e.sent,i=s.data,l(i.tokens[0].token.kind);case 5:case"end":return e.stop()}}),e)})))()}),[]),(0,j.jsx)("table",{className:o.table,children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"text-bold text-accent",children:"Contract Address"}),(0,j.jsx)("td",{className:"text-overflow",onClick:function(){return window.open("https://etherscan.io/address/".concat(t),"_blank")},children:"".concat(t.substring(0,8),"...").concat(t.substring(t.length-4))})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"text-bold text-accent",children:"Chain"}),(0,j.jsx)("td",{className:"text-overflow",children:"Ethereum "})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"text-bold text-accent",children:"Token ID"}),(0,j.jsx)("td",{className:"text-overflow",children:a})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"text-bold text-accent",children:"Token Standard "}),(0,j.jsx)("td",{className:"text-overflow",children:d})]})]})})},O=function(){(0,y.mY)().openBidModal;var e=R.bids.filter((function(e){return e.active})),t=(R.bids.filter((function(e){return!e.active})),(0,v.useRef)(p()().add(7,"days").toDate()),(0,N.Z)().width>=768),a=(0,h.TH)(),s=a.pathname.split("/")[3],i=a.pathname.split("/")[4],m=(0,v.useState)([]),f=(0,c.Z)(m,2),b=f[0],g=f[1],w=(0,v.useState)([]),C=(0,c.Z)(w,2),T=C[0],S=C[1],V=(0,v.useState)([]),E=(0,c.Z)(V,2),B=E[0],A=E[1],z=(0,v.useState)([]),F=(0,c.Z)(z,2),I=F[0],q=F[1],H=(0,v.useState)([]),M=(0,c.Z)(H,2),L=M[0],D=M[1],P=(0,v.useState)([]),O=(0,c.Z)(P,2),J=(O[0],O[1]),W=(0,v.useState)([]),G=(0,c.Z)(W,2),K=G[0],Q=G[1];(0,v.useState)(!0);(0,v.useEffect)((function(){(0,n.Z)((0,r.Z)().mark((function e(){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api-goerli.reservoir.tools/collections/".concat(s,"/attributes/explore/v4?tokenId=").concat(i));case 2:t=e.sent,a=t.data,Q(a.attributes);case 5:case"end":return e.stop()}}),e)})))()}),[s,i]),(0,v.useEffect)((function(){(0,n.Z)((0,r.Z)().mark((function e(){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api-goerli.reservoir.tools/tokens/v6?tokens=".concat(s,"%3A").concat(i,"&includeTopBid=true"));case 2:t=e.sent,a=t.data,g(a.tokens[0].token.image),S(a.tokens[0].token.collection.name),A(a.tokens[0].market.floorAsk.price.amount.native),q(a.tokens[0].market.floorAsk.source.icon),D(a.tokens[0].market.floorAsk.source.domain),J(a.tokens[0].token.rarity);case 10:case"end":return e.stop()}}),e)})))()}),[]);var U=[{label:"Active sales",key:"item-1",children:(0,j.jsx)(k,{data:e,active:!0})},{label:"Details",key:"item-3",children:(0,j.jsx)(Y,{})}];return(0,j.jsx)("section",{className:o.details,children:(0,j.jsxs)("div",{className:"".concat(o.details_container," container"),children:[(0,j.jsxs)(Z.Z,{enabled:t,top:60,bottomBoundary:"#item_main",children:[(0,j.jsx)("div",{className:"media square border-10",children:(0,j.jsx)("img",{src:b})}),(0,j.jsx)("div",{className:o.main_creator,style:{marginTop:"12px"},children:function(){for(var e=[],t=0;t<K.length;t++){var a=K[t];e.push((0,j.jsx)("div",{className:"".concat(o.block," border-10"),children:(0,j.jsxs)("div",{className:o.block_details,children:[(0,j.jsx)("span",{className:"text-xs",children:(0,j.jsxs)("span",{className:"text-bold",children:[a.key," "]})}),(0,j.jsx)("span",{className:"text-sm text-bold text-light",children:a.value})]})},a.id))}return e}()})]}),(0,j.jsxs)("div",{className:o.main,id:"item_main",children:[(0,j.jsxs)("div",{className:o.main_about,children:[(0,j.jsxs)("div",{className:"d-flex flex-column g-10",children:[(0,j.jsxs)("span",{className:"h6",children:[" ",T," "]}),(0,j.jsxs)("h2",{className:o.title,children:["#",i]}),(0,j.jsx)("div",{className:o.bid,children:(0,j.jsx)("div",{className:"d-flex g-10",children:"Price"})}),(0,j.jsx)("div",{className:o.bid,children:(0,j.jsxs)("span",{className:"text-light text-bold",style:{fontSize:"24px",fontWeight:"700"},children:[B," ETH  "]})}),(0,j.jsxs)("div",{className:o.bid,children:[(0,j.jsx)("img",{src:I,style:{width:"26px"}})," ",(0,j.jsxs)("span",{children:[" ",L]})]})]}),(0,j.jsx)("div",{className:o.actions,children:(0,j.jsx)(u.Z,{className:"".concat(o.btn," ").concat(o.like," btn btn--icon"),count:R.likes})})]}),(0,j.jsx)("div",{className:o.buttons}),(0,j.jsxs)("div",{className:"main_tabs",children:[(0,j.jsx)(d.Z,{tabs:U}),(0,j.jsxs)("div",{className:o.buttons,children:[(0,j.jsx)(_.zY,{trigger:(0,j.jsxs)(l.Z,{tag:"button",children:["Buy Now For ",B," ETH "]}),referrer:"0x22c06A1639a1e674E43F2c75A65c81e76AA921f5",referrerFeeBps:1,collectionId:s,tokenId:i,onPurchaseComplete:function(e){return console.log("Purchase Complete")},onPurchaseError:function(e,t){return console.log("Transaction Error",e,t)},onClose:function(e,t,a){return console.log("Modal Closed")}}),(0,j.jsx)(_.D7,{trigger:(0,j.jsx)("button",{className:"btn btn--outline",children:"Place a bid"}),collectionId:s,tokenId:i,onBidComplete:function(e){console.log("Bid Complete",e)},onBidError:function(e,t){console.log("Bid Transaction Error",e,t)},onClose:function(e,t,a){console.log("BidModal Closed")}})]})]})]})]})})},J=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z,{title:"Item details"}),(0,j.jsx)(i.Z,{title:"Item details"}),(0,j.jsx)("main",{children:(0,j.jsx)(O,{})})]})}},97018:function(e,t,a){a.d(t,{Z:function(){return l}});var s=a(5363),i=a(81694),r=a.n(i),n=a(72791);var c=a.p+"static/media/verified.d712db63e7c4123b870c80f47dbeaf91.svg",o=a(80184),d=function(e){var t=e.src,a=e.alt,i=e.size,n=e.isVerified,d=e.className;return(0,o.jsxs)("div",{className:r()("avatar-wrapper",i,d),children:[(0,o.jsx)(s.Z,{className:"avatar",src:t,alt:a}),n&&(0,o.jsx)(s.Z,{className:"verified",src:c,alt:"verified",effect:"opacity"})]})},l=(0,n.memo)(d)},50200:function(e,t,a){var s=a(50678),i=a(93517),r=a(11087),n=a(72791),c=a(57689),o=a(81694),d=a.n(o),l=a(80184);t.Z=function(){var e=(0,c.TH)(),t=(0,n.useState)([]),a=(0,s.Z)(t,2),o=a[0],u=a[1];return(0,n.useEffect)((function(){var t=e.pathname.split("/"),a=t.map((function(e,a){return{name:""===e?"Home":e.replace(/-/g," "),path:""===e?"/":t.slice(0,a+1).join("/")}}));u(a)}),[e]),(0,l.jsx)(i.Z,{separator:"\u2022",sx:{color:"var(--text)",textTransform:"capitalize","& .MuiBreadcrumbs-separator":{color:"var(--accent)"}},children:o.map((function(t,a){return(0,l.jsx)(r.OL,{className:d()("text-bold link-hover",{"text-accent disabled":t.path===e.pathname,"text-uppercase":"faq"===t.name}),to:t.path,children:t.name},t.path)}))})}},84892:function(e,t,a){var s=a(50678),i=a(18489),r=a(83738),n=a(81406),c=a(11087),o=a(72791),d=a(81694),l=a.n(d),u=a(80184),m=["tag","href"],f=["className"],b=function(e){var t=e.tag,a=e.href,s=(0,r.Z)(e,m);if("button"===t)return(0,u.jsx)(n.q.button,(0,i.Z)({},s));if(void 0===a||"#"===a)return(0,u.jsx)(n.q.a,(0,i.Z)({},s));var o=(0,n.q)(c.OL);return(0,u.jsx)(o,(0,i.Z)({to:a},s))};t.Z=function(e){var t=e.className,a=(0,r.Z)(e,f),c=(0,o.useState)(!1),d=(0,s.Z)(c,2),m=d[0],p=d[1],x={background:"linear-gradient(98.49deg, #05C9F9 -11.31%, #E5F61B 76.26%)"},h={background:"linear-gradient(98.49deg, #E5F61B -11.31%, #05C9F9 76.26%)"},v=(0,n.q_)((0,i.Z)({background:m?h.background:x.background,config:{duration:300}},a)).background;return(0,u.jsx)(b,(0,i.Z)((0,i.Z)({className:l()("btn btn--gradient",t)},a),{},{onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},style:{background:v,color:"#000000"},children:a.children}))}},23097:function(e,t,a){var s=a(50678),i=a(83738),r=a(72791),n=a(81694),c=a.n(n),o=a(44238),d=a(80184),l=["count"],u=function(e){var t=e.count,a=(0,i.Z)(e,l),n=(0,r.useState)(a.isLiked),u=(0,s.Z)(n,2),m=u[0],f=u[1],b=(0,r.useState)(t),p=(0,s.Z)(b,2),x=p[0],h=p[1];return(0,d.jsxs)("button",{className:"like-button ".concat(a.className||""),onClick:function(){f(!m),h(m?x-1:x+1)},"aria-label":m?"Unlike":"Like",children:[(0,d.jsxs)("span",{className:"wrapper",children:[(0,d.jsx)("i",{className:"icon icon-heart-o"}),(0,d.jsx)("i",{className:c()("icon icon-heart",{visible:m})})]}),(0,o.uf)(x)]})};t.Z=(0,r.memo)(u)},20027:function(e,t,a){var s=a(50678),i=a(17691),r=a(47748),n=a(5826),c=a(60175),o=a(22718),d=a(60627),l=a(72791),u=a(80184),m=(0,i.default)(n.Z).withConfig({componentId:"sc-1n1w36c-0"})(["margin-bottom:20px;border-bottom:1px solid var(--divider);display:grid;grid-auto-flow:column;"]),f=(0,i.default)(c.Z).withConfig({componentId:"sc-1n1w36c-1"})(["text-align:center;color:var(--text-light);font-size:var(--text-sm);font-weight:600;font-family:var(--heading-font);position:relative;padding-bottom:15px;&::after{content:'';position:absolute;height:4px;width:100%;border-radius:10px 10px 0 0;background:var(--accent);left:0;bottom:0;opacity:0;transform:scale(0);transition:all var(--transition);}&[aria-selected='true']:after{opacity:1;transform:scale(1);}"]);t.Z=function(e){var t=e.tabs,a=(0,l.useState)(t[0].key),i=(0,s.Z)(a,2),n=i[0],c=i[1];return(0,u.jsxs)(r.Z,{value:n,onChange:function(e,t){return c(t)},children:[(0,u.jsx)(m,{children:t.map((function(e){return(0,u.jsx)(f,{value:e.key,children:e.label},"".concat(e.key,"-control"))}))}),t.map((function(e){return(0,u.jsx)(o.Z,{value:e.key,children:(0,u.jsx)(d.Z,{in:n===e.key,timeout:300,children:(0,u.jsx)("div",{children:e.children})})},"".concat(e.key,"-pane"))}))]})}}}]);
//# sourceMappingURL=6234.bdbbc6ce.chunk.js.map