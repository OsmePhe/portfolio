(this.webpackJsonpfront_bot=this.webpackJsonpfront_bot||[]).push([[0],{22:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(33),i=c.n(s),r=(c(42),c(43),c(44),c(9)),o=c(2),l=c(12),d=c(13),j=c(8),b=c(15),h=c(14),u=(c(22),c(11)),m=(c(45),c(0)),O=function(e){var t=e.home;return Object(m.jsxs)("div",{id:"cartoucheContainer",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"page-header header-cartouche",children:[Object(m.jsx)("div",{className:"col-sm-10",children:Object(m.jsx)("img",{className:"imgLogo","data-key":"",src:t?"../logo.png":"../../logo.png",alt:"cocodlbot"})})," ",Object(m.jsxs)("div",{className:"headerAccueil",children:[Object(m.jsx)(u.a,{variant:"secondary",children:Object(m.jsx)(r.b,{to:{pathname:"/home/"},children:"Home"})}),Object(m.jsx)(u.a,{variant:"secondary",children:"About"})]})]})}),Object(m.jsx)("div",{id:"cartoucheContainerWord"})]})},x=(c(55),c(56),c(37)),p=function(e){var t=e.file,c=e.fileName,n=e.urlTweet,a=Object(x.a)(),s=a.download,i=a.error;return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col text-center",children:Object(m.jsxs)("div",{className:"btn-event",children:[Object(m.jsx)(u.a,{variant:"secondary",onClick:function(){return s(t,c)},children:"Download"}),n&&Object(m.jsx)(u.a,{variant:"secondary",onClick:function(){return window.open(n,"_blank")},children:"View original tweet"}),Object(m.jsx)(u.a,{variant:"secondary",onClick:function(){return window.open("https://twitter.com/cocodlbot/","_blank")},children:"Follow coco_bot"})]})}),i&&Object(m.jsxs)("p",{children:["possible error ",JSON.stringify(i)]})]})},v=c(24).default,f=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={id:null,url:null},n.searchVideoFromTweet=n.searchVideoFromTweet.bind(Object(j.a)(n)),n}return Object(d.a)(c,[{key:"searchVideoFromTweet",value:function(e){var t=this;v.get("/tweet/"+e+".mp4",{}).then((function(e){e.data.err||e.data&&(t.setState({url:e.data.data}),console.log(e),t.setState({redirect:!0}))})).catch((function(e){console.log("login error",e)}))}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname.substring(12),t=this.searchVideoFromTweet(e);this.setState({id:e}),this.setState({url:t})}},{key:"render",value:function(){var e=this.state,t=e.id,c=e.url;return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{home:!1}),Object(m.jsx)("div",{id:"mainTweetVidContainer",children:c&&Object(m.jsxs)("div",{id:"tweetVidContainer",className:"col-sm-12",children:[Object(m.jsx)("video",{width:"700",height:"400",controls:!0,children:Object(m.jsx)("source",{src:c.id_tweet,type:"video/mp4"})}),c&&Object(m.jsx)(p,{file:c.id_tweet,fileName:t+".mp4",urlTweet:this.props.history.location.state?this.props.history.location.state.url:c.expanded_url})]})})]})}}]),c}(a.a.Component),w=c(24).default,N=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={objUrl:[]},n.convertDate=n.convertDate.bind(Object(j.a)(n)),n}return Object(d.a)(c,[{key:"convertDate",value:function(e){function t(e){return e<10?"0"+e:e}var c=new Date(e);return[t(c.getDate()),t(c.getMonth()+1),c.getFullYear()].join("/")}},{key:"componentDidMount",value:function(){var e=this;w.get("/tweet/",{}).then((function(t){t.data.err||t.data&&e.setState({objUrl:t.data.data})})).catch((function(e){console.log("login error",e)}))}},{key:"componentDidUpdate",value:function(e,t){t.objUrl,this.state.objUrl}},{key:"render",value:function(){var e=this.state.objUrl,t=this.convertDate;return Object(m.jsxs)("div",{id:"mainContainer",className:"text-center col-sm-12",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Welcome to Cocodlbot"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"wrap-search",children:Object(m.jsxs)("div",{className:"search-div",children:[Object(m.jsx)("input",{type:"text",className:"search-term",placeholder:"What are you looking for? Use key-words"}),Object(m.jsx)("button",{type:"submit",className:"searchButton",children:Object(m.jsx)("i",{className:"fa fa-search"})})]})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)("h5",{children:"Latest downloads"})}),Object(m.jsxs)("div",{id:"divMainContainer",className:"main-container-pos col-sm-12",children:[this.props.location&&Object(m.jsx)(f,{}),!!e&&0!==e.length&&e.map((function(e,c){return Object(m.jsx)(r.b,{to:{pathname:e.url_tweet.includes(".mp4")?"/home/tweet/"+e.url_tweet.substring(0,e.url_tweet.indexOf(".mp4")):e.url_tweet,state:{url:e.expanded_url,urlTweet:e.id_tweet}},className:"disp-card",children:Object(m.jsx)("div",{id:"tweetVidContainer"+c,className:"col-sm-12","data-key":c,children:Object(m.jsx)("div",{id:"tweetVid"+c,children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card_image",children:[" ",Object(m.jsx)("img",{src:e.urlThumbnail,alt:"cocodlbot"})," "]})," ",Object(m.jsxs)("div",{className:"card_title title-white",children:[Object(m.jsxs)("h5",{children:["Mise en ligne par ",Object(m.jsx)("b",{children:e.user_info.substring(e.user_info.lastIndexOf("%")+1).trim()})]}),Object(m.jsxs)("h5",{children:["Le ",Object(m.jsx)("b",{children:t(e.user_info.substring(0,e.user_info.split("").findIndex((function(e){return"%"===e}))).trim())})]})]})]})})},c)})}))]})]})}}]),c}(a.a.Component),g=function(e){e.dataTwitTwittos;return Object(m.jsx)("div",{})},y=c(19),k=(c(75),function(e){return Object(y.a)(e),Object(m.jsxs)("footer",{className:"footerContainer",children:[Object(m.jsx)("div",{className:"container  py-5",children:Object(m.jsxs)("div",{className:"row py-4",children:[Object(m.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4 mb-lg-0",children:[Object(m.jsx)("p",{className:"font-italic text-muted"}),Object(m.jsx)("ul",{className:"list-inline mt-4",children:Object(m.jsx)("li",{className:"list-inline-item",children:Object(m.jsx)("a",{href:"#",target:"_blank",title:"twitter",children:Object(m.jsx)("i",{className:"fa fa-twitter"})})})})]}),Object(m.jsxs)("div",{className:"col-lg-4 col-md-6 mb-lg-0",children:[Object(m.jsx)("h6",{className:"text-uppercase font-weight-bold mb-4",children:"Newsletter (not functional yet)"}),Object(m.jsx)("p",{className:"text-muted mb-4",children:"If you have any comments, send them to us ! Thank you"}),Object(m.jsx)("div",{className:"p-1 rounded border",children:Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("input",{type:"email",placeholder:"Enter your comments","aria-describedby":"button-addon1",className:"form-control border-0 shadow-0"}),Object(m.jsx)("div",{className:"input-group-append",children:Object(m.jsx)("button",{id:"button-addon1",type:"submit",className:"btn btn-link",children:Object(m.jsx)("i",{className:"fa fa-paper-plane"})})})]})})]})]})}),Object(m.jsx)("div",{className:"footerContainer py-4",children:Object(m.jsx)("div",{className:"container text-center",children:Object(m.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2022 Cocodlbot All rights reserved."})})})]})}),C=(c(76),function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={dataTweet:[]},n.handleResultSearch=n.handleResultSearch.bind(Object(j.a)(n)),n}return Object(d.a)(c,[{key:"handleResultSearch",value:function(e){this.setState({dataTweet:e})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"wrapper",id:"container",children:[Object(m.jsx)(O,{home:!0}),Object(m.jsx)(g,{}),Object(m.jsxs)("div",{id:"searchContainer",children:[Object(m.jsx)("div",{id:"navRight",className:"col-sm-3"}),Object(m.jsx)("div",{id:"navLeft",className:"col-sm-3"})]}),Object(m.jsx)(N,{resultSearch:this.state.dataTweet}),Object(m.jsx)("div",{id:"modalContainer"}),Object(m.jsx)(k,{})]})}}]),c}(n.Component)),_=(c(77),function(e){return Object(y.a)(e),Object(m.jsxs)("div",{className:"mainbox",children:[Object(m.jsx)("div",{className:"err",children:"4"}),Object(m.jsx)("i",{className:"far fa-question-circle fa-spin"}),Object(m.jsx)("div",{className:"err2",children:"4"}),Object(m.jsxs)("div",{className:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(m.jsxs)("p",{children:["Let's go ",Object(m.jsx)("a",{href:"#",children:"home"})," and try from there."]})]})]})}),T=function(){return Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:C}),Object(m.jsx)(o.a,{exact:!0,path:"/home",component:C}),Object(m.jsx)(o.a,{exact:!0,path:"/home/tweet",component:C}),Object(m.jsx)(o.a,{exact:!0,path:"/home/tweet/:id",component:f}),Object(m.jsx)(o.a,{path:"*",component:_})]})},S=function(){return Object(m.jsx)(T,{})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(r.a,{children:Object(m.jsx)(S,{})})}),document.getElementById("root")),D()}},[[78,1,2]]]);
//# sourceMappingURL=main.da68fc8a.chunk.js.map