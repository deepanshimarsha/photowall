(this.webpackJsonpphotowall=this.webpackJsonpphotowall||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"removePost",(function(){return k})),n.d(a,"addPost",(function(){return D})),n.d(a,"addComment",(function(){return S}));var r=n(0),c=n.n(r),i=n(15),o=n.n(i),s=(n(31),n(44)),m=n(4),l=n(13),u=n(11),d=n(12),p=[{id:0,description:"beautiful landscape",imageLink:"https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"},{id:1,description:"Bridge",imageLink:"https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"},{id:2,description:"On a vacation!",imageLink:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"}];var b=Object(m.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE_POST":return[].concat(Object(l.a)(e.slice(0,t.index)),Object(l.a)(e.slice(t.index+1)));case"ADD_POST":return[].concat(Object(l.a)(e),[t.post]);default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":return e[t.postId]?Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.postId,[].concat(Object(l.a)(e[t.postId]),[t.comment]))):Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.postId,[t.comment]))}return e}}),f=n(16),h=n(5),E=n(6),v=n(8),O=n(7);var j=n(41);var g=function(e){var t=e.post;return c.a.createElement("figure",{className:"figure"},c.a.createElement(j.a,{to:"/single/".concat(t.id)},c.a.createElement("img",{className:"photo",src:t.imageLink,alt:t.description})),c.a.createElement("figurecaption",null,c.a.createElement("p",null,t.description)),c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{onClick:function(){e.removePost(e.index),e.history.push("/")}},"Remove"),c.a.createElement(j.a,{className:"button",to:"/single/".concat(t.id)},c.a.createElement("div",{className:"comment-count"},c.a.createElement("div",{className:"speech-bubble"}),e.comments[t.id]?e.comments[t.id].length:0))))};var x=function(e){return c.a.createElement("div",null,c.a.createElement(j.a,{className:"add-icon",to:"/addphotos"}),c.a.createElement("div",{className:"photo-grid"},e.posts.sort((function(e,t){return t.id-e.id})).map((function(t,n){return c.a.createElement(g,Object.assign({key:n,post:t},e,{index:n}))}))))},y=n(10),w=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(y.a)(e)),e}return Object(E.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.link.value,n=e.target.elements.desc.value,a={id:Number(new Date),imageLink:t,description:n};this.props.addPost(a),this.props.onHistory.push("/")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"form"},c.a.createElement("form",{className:"linkform",onSubmit:this.handleSubmit},c.a.createElement("input",{className:"inputlink",type:"text",placeholder:"Link",name:"link"}),c.a.createElement("input",{className:"inputlink",type:"text",placeholder:"Description",name:"desc"}),c.a.createElement("button",null,"POST"))))}}]),n}(r.Component),N=n(42);function k(e){return{type:"REMOVE_POST",index:e}}function D(e){return{type:"ADD_POST",post:e}}function S(e,t){return{type:"ADD_COMMENT",comment:e,postId:t}}var _=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(y.a)(e)),e}return Object(E.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.comment.value;this.props.addComment(t,this.props.id),e.target.elements.comment.value=""}},{key:"render",value:function(){return c.a.createElement("div",{className:"comment"},this.props.comments.map((function(e,t){return c.a.createElement("p",{key:t},e)})),c.a.createElement("form",{className:"comment-form",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",placeholder:"comment",name:"comment"}),c.a.createElement("input",{type:"submit",hidden:!0})))}}]),n}(r.Component),M=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props,t=e.match,n=e.posts,a=Number(t.params.id),r=n.find((function(e){return e.id===a})),i=this.props.comments[t.params.id]||[],o=this.props.posts.findIndex((function(e){return e.id===a}));return c.a.createElement("div",{className:"single-photo"},c.a.createElement(g,Object.assign({post:r},this.props,{index:o})),c.a.createElement(_,{addComment:this.props.addComment,comments:i,id:a}))}}]),n}(r.Component),C=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.call(this)}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props),c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement(j.a,{to:"/"},"Photowall")),c.a.createElement(N.a,{exact:!0,path:"/",render:function(){return c.a.createElement("div",null,c.a.createElement(x,e.props))}}),c.a.createElement(N.a,{path:"/addphotos",render:function(t){var n=t.history;return c.a.createElement(w,Object.assign({},e.props,{onHistory:n}))}}),c.a.createElement(N.a,{path:"/single/:id",render:function(t){return c.a.createElement(M,Object.assign({},e.props,t))}}))}}]),n}(r.Component),H=n(43);var T=Object(H.a)(Object(f.b)((function(e){return{posts:e.posts,comments:e.comments}}),(function(e){return Object(m.a)(a,e)}))(C)),P=Object(m.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(c.a.createElement(f.a,{store:P},c.a.createElement(s.a,null,c.a.createElement(T,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c2f3c7ed.chunk.js.map