(this.webpackJsonpfront_bot=this.webpackJsonpfront_bot||[]).push([[0],{22:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(33),s=n.n(i),r=(n(42),n(43),n(44),n(9)),o=n(2),d=n(12),l=n(13),j=n(8),h=n(15),b=n(14),u=(n(22),n(11)),O=(n(45),n(0)),x=function(e){var t=e.home;return Object(O.jsxs)("div",{id:"cartoucheContainer",children:[Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"page-header header-cartouche",children:[Object(O.jsx)("div",{className:"col-sm-10",children:Object(O.jsx)("img",{className:"imgLogo","data-key":"",src:t?"../logo.png":"../../logo.png",alt:"Logo"})})," ",Object(O.jsxs)("div",{className:"headerAccueil",children:[Object(O.jsx)(u.a,{variant:"secondary",children:Object(O.jsx)(r.b,{to:{pathname:"/home/"},children:"Home"})}),Object(O.jsx)(u.a,{variant:"secondary",children:"About"})]})]})}),Object(O.jsx)("div",{id:"cartoucheContainerWord"})]})},m=(n(55),n(56),n(37)),v=function(e){var t=e.file,n=e.fileName,c=e.urlTweet,a=Object(m.a)(),i=a.download,s=a.error;return Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col text-center",children:Object(O.jsxs)("div",{className:"btn-event",children:[Object(O.jsx)(u.a,{variant:"secondary",onClick:function(){return i(t,n)},children:"Download"}),c&&Object(O.jsx)(u.a,{variant:"secondary",onClick:function(){return window.open(c,"_blank")},children:"View original tweet"}),Object(O.jsx)(u.a,{variant:"secondary",onClick:function(){return window.open("https://twitter.com/cocodlbot/","_blank")},children:"Follow coco_bot"})]})}),s&&Object(O.jsxs)("p",{children:["possible error ",JSON.stringify(s)]})]})},f=n(24).default,p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={id:null,url:null},c.searchVideoFromTweet=c.searchVideoFromTweet.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"searchVideoFromTweet",value:function(e){var t=this;f.get("/tweet/"+e+".mp4",{}).then((function(e){e.data.err||e.data&&(t.setState({url:e.data.data}),console.log(e),t.setState({redirect:!0}))})).catch((function(e){console.log("login error",e)}))}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname.substring(12),t=this.searchVideoFromTweet(e);this.setState({id:e}),this.setState({url:t})}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.url;return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{home:!1}),Object(O.jsx)("div",{id:"mainTweetVidContainer",children:t&&Object(O.jsxs)("div",{id:"tweetVidContainer",className:"col-sm-12",children:[Object(O.jsx)("video",{width:"700",height:"400",controls:!0,children:Object(O.jsx)("source",{src:"/downloaded/"+t+".mp4",type:"video/mp4"})}),n&&Object(O.jsx)(v,{file:n.id_tweet,fileName:t+".mp4",urlTweet:this.props.history.location.state?this.props.history.location.state.urlTweet:n.expanded_url})]})})]})}}]),n}(a.a.Component),w=n(24).default,g=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={objUrl:[]},c.convertDate=c.convertDate.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"convertDate",value:function(e){function t(e){return e<10?"0"+e:e}var n=new Date(e);return[t(n.getDate()),t(n.getMonth()+1),n.getFullYear()].join("/")}},{key:"componentDidMount",value:function(){var e=this;w.get("/tweet/",{}).then((function(t){t.data.err||t.data&&e.setState({objUrl:t.data.data})})).catch((function(e){console.log("login error",e)}))}},{key:"componentDidUpdate",value:function(e,t){t.objUrl,this.state.objUrl}},{key:"render",value:function(){var e=this.state.objUrl,t=this.convertDate;return Object(O.jsxs)("div",{id:"mainContainer",className:"text-center col-sm-12",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"Welcome to Cocodlbot"})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"wrap-search",children:Object(O.jsxs)("div",{className:"search-div",children:[Object(O.jsx)("input",{type:"text",className:"search-term",placeholder:"What are you looking for? Use key-words"}),Object(O.jsx)("button",{type:"submit",className:"searchButton",children:Object(O.jsx)("i",{className:"fa fa-search"})})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)("h5",{children:"Latest downloads"})}),Object(O.jsxs)("div",{id:"divMainContainer",className:"main-container-pos col-sm-12",children:[this.props.location&&Object(O.jsx)(p,{}),!!e&&0!==e.length&&e.map((function(e,n){return Object(O.jsx)(r.b,{to:{pathname:e.url_tweet.includes(".mp4")?"/home/tweet/"+e.url_tweet.substring(0,e.url_tweet.indexOf(".mp4")):e.url_tweet,state:{url:e.expanded_url,urlTweet:e.id_tweet}},className:"disp-card",children:Object(O.jsx)("div",{id:"tweetVidContainer"+n,className:"col-sm-12","data-key":n,children:Object(O.jsx)("div",{id:"tweetVid"+n,children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card_image",children:[" ",Object(O.jsx)("img",{src:"/downloaded/"+e.thumbnail,alt:"Avatar"})," "]})," ",Object(O.jsxs)("div",{className:"card_title title-white",children:[Object(O.jsxs)("h5",{children:["Mise en ligne par ",Object(O.jsx)("b",{children:e.user_info.substring(e.user_info.lastIndexOf("%")+1).trim()})]}),Object(O.jsxs)("h5",{children:["Le ",Object(O.jsx)("b",{children:t(e.user_info.substring(0,e.user_info.split("").findIndex((function(e){return"%"===e}))).trim())})]})]})]})})},n)})}))]})]})}}]),n}(a.a.Component),y=function(e){e.dataTwitTwittos;return Object(O.jsx)("div",{})},N=n(19),k=(n(75),n(76),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={dataTweet:[]},c.handleResultSearch=c.handleResultSearch.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"handleResultSearch",value:function(e){this.setState({dataTweet:e})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"wrapper",id:"container",children:[Object(O.jsx)(x,{home:!0}),Object(O.jsx)(y,{}),Object(O.jsxs)("div",{id:"searchContainer",children:[Object(O.jsx)("div",{id:"navRight",className:"col-sm-3"}),Object(O.jsx)("div",{id:"navLeft",className:"col-sm-3"})]}),Object(O.jsx)(g,{resultSearch:this.state.dataTweet}),Object(O.jsx)("div",{id:"modalContainer"})]})}}]),n}(c.Component)),C=(n(77),function(e){return Object(N.a)(e),Object(O.jsxs)("div",{class:"mainbox",children:[Object(O.jsx)("div",{class:"err",children:"4"}),Object(O.jsx)("i",{class:"far fa-question-circle fa-spin"}),Object(O.jsx)("div",{class:"err2",children:"4"}),Object(O.jsxs)("div",{class:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(O.jsxs)("p",{children:["Let's go ",Object(O.jsx)("a",{href:"#",children:"home"})," and try from there."]})]})]})}),_=function(){return Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/home",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/home/tweet",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/home/tweet/:id",component:p}),Object(O.jsx)(o.a,{path:"*",component:C})]})},T=function(){return Object(O.jsx)(_,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(T,{})})}),document.getElementById("root")),S()}},[[78,1,2]]]);
//# sourceMappingURL=main.bcf35049.chunk.js.map