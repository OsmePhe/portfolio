(this.webpackJsonpfront_bot=this.webpackJsonpfront_bot||[]).push([[0],{21:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(32),s=n.n(i),r=(n(42),n(43),n(44),n(15)),o=n(2),d=n(11),l=n(12),j=n(8),b=n(14),h=n(13),u=(n(21),n(10)),O=(n(45),n(0)),m=function(e){var t=e.byWordOrUser;return Object(O.jsx)("div",{id:"cartoucheContainer",className:"",children:t?Object(O.jsx)("div",{id:"cartoucheContainerWord"}):Object(O.jsx)("div",{className:"",children:Object(O.jsxs)("div",{className:"page-header header-cartouche",children:[Object(O.jsx)("div",{className:"col-sm-10",children:Object(O.jsx)("img",{className:"imgLogo","data-key":"",src:"../logo.png",alt:"Logo"})})," ",Object(O.jsxs)("div",{className:"headerAccueil",children:[Object(O.jsx)(u.a,{variant:"secondary",children:"Home"}),Object(O.jsx)(u.a,{variant:"secondary",children:"About"})]})]})})})},x=(n(47),n(48),n(34)),v=function(e){var t=e.file,n=e.fileName,c=e.urlTweet,a=Object(x.a)(),i=a.download,s=a.error;return Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col text-center",children:Object(O.jsxs)("div",{className:"btn-event",children:[Object(O.jsx)(u.a,{variant:"secondary",onClick:function(){return i(t,n)},children:"Download"}),c&&Object(O.jsx)(u.a,{variant:"secondary",onClick:function(){return window.open(c,"_blank")},children:"View original tweet"}),Object(O.jsx)(u.a,{variant:"secondary",onClick:function(){return window.open("https://twitter.com/cocodlbot/","_blank")},children:"Follow coco_bot"})]})}),s&&Object(O.jsxs)("p",{children:["possible error ",JSON.stringify(s)]})]})},f=n(23).default,p=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={id:null,url:null},c.searchVideoFromTweet=c.searchVideoFromTweet.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"searchVideoFromTweet",value:function(e){var t=this;f.get("/tweet/"+e+".mp4",{}).then((function(e){e.data.err||e.data&&(t.setState({url:e.data.data}),console.log(e),t.setState({redirect:!0}))})).catch((function(e){console.log("login error",e)}))}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname.substring(12),t=this.searchVideoFromTweet(e);this.setState({id:e}),this.setState({url:t})}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.url;return Object(O.jsx)("div",{id:"mainTweetVidContainer",children:t&&Object(O.jsxs)("div",{id:"tweetVidContainer",className:"col-sm-12",children:[Object(O.jsx)("video",{width:"700",height:"400",controls:!0,children:Object(O.jsx)("source",{src:window.location.protocol+"//"+window.location.hostname+"/coco_bot/back_bot/downloaded/"+t+".mp4",type:"video/mp4"})}),Object(O.jsx)(v,{file:n,fileName:t+".mp4",urlTweet:this.props.history.location.state?this.props.history.location.state.urlTweet:void 0})]})})}}]),n}(a.a.Component),w=n(23).default,g=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={objUrl:[]},c.convertDate=c.convertDate.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"convertDate",value:function(e){function t(e){return e<10?"0"+e:e}var n=new Date(e);return[t(n.getDate()),t(n.getMonth()+1),n.getFullYear()].join("/")}},{key:"componentDidMount",value:function(){var e=this;w.get("/tweet/",{}).then((function(t){t.data.err||t.data&&e.setState({objUrl:t.data.data})})).catch((function(e){console.log("login error",e)}))}},{key:"componentDidUpdate",value:function(e,t){t.objUrl,this.state.objUrl}},{key:"render",value:function(){var e=this.state.objUrl,t=this.convertDate;return Object(O.jsxs)("div",{id:"mainContainer",className:"text-center col-sm-12",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"Welcome to Cocodlbot"})}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"mainContainer",className:"main-container-pos col-sm-12",children:[this.props.location&&Object(O.jsx)(p,{}),0!==e.length&&e.map((function(e,n){return Object(O.jsx)(r.b,{to:{pathname:Object.keys(e[0])[0].includes(".mp4")?"/home/tweet/"+Object.keys(e[0])[0].substring(0,Object.keys(e[0])[0].indexOf(".mp4")):Object.keys(e[0])[0],state:{url:Object.values(e[0])[0],urlTweet:e[4]}},className:"disp-card",children:Object(O.jsx)("div",{id:"tweetVidContainer"+n,className:"col-sm-12","data-key":n,children:Object(O.jsx)("div",{id:"tweetVid"+n,children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card_image",children:[" ",Object(O.jsx)("img",{src:window.location.protocol+"//"+window.location.hostname+"/coco_bot/back_bot/downloaded/"+e[1],alt:"Avatar"})," "]}),Object(O.jsxs)("div",{className:"card_title title-white",children:[Object(O.jsxs)("h5",{children:["Mise en ligne par ",Object(O.jsx)("b",{children:e[2].substring(e[2].lastIndexOf("%")+1).trim()})]}),Object(O.jsxs)("h5",{children:["Le ",Object(O.jsx)("b",{children:t(e[2].substring(0,e[2].split("").findIndex((function(e){return"%"===e}))).trim())})]})]})]})})},n)})}))]})]})}}]),n}(a.a.Component),y=function(e){e.dataTwitTwittos;return Object(O.jsx)("div",{})},k=(n(75),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={dataTweet:[]},c.handleResultSearch=c.handleResultSearch.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"handleResultSearch",value:function(e){this.setState({dataTweet:e})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"wrapper",id:"container",children:[Object(O.jsx)(m,{}),Object(O.jsx)(y,{}),Object(O.jsxs)("div",{id:"searchContainer",children:[Object(O.jsx)("div",{id:"navRight",className:"col-sm-3"}),Object(O.jsx)("div",{id:"navLeft",className:"col-sm-3"})]}),Object(O.jsx)(g,{resultSearch:this.state.dataTweet}),Object(O.jsx)("div",{id:"modalContainer"})]})}}]),n}(c.Component)),N=n(37),C=(n(76),function(e){return Object(N.a)(e),Object(O.jsxs)("div",{class:"mainbox",children:[Object(O.jsx)("div",{class:"err",children:"4"}),Object(O.jsx)("i",{class:"far fa-question-circle fa-spin"}),Object(O.jsx)("div",{class:"err2",children:"4"}),Object(O.jsxs)("div",{class:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(O.jsxs)("p",{children:["Let's go ",Object(O.jsx)("a",{href:"#",children:"home"})," and try from there."]})]})]})}),T=function(){return Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/home",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/home/tweet",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/home/tweet/:id",component:p}),Object(O.jsx)(o.a,{path:"*",component:C})]})},S=function(){return Object(O.jsx)(T,{})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(S,{})})}),document.getElementById("root")),D()}},[[77,1,2]]]);
//# sourceMappingURL=main.c3e9bef0.chunk.js.map