(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(t){t.exports=[{title:"Я тут пост такой",description:"Текст текст текст Текст текст текст Текст текст текст Текст текст текст Текст текст текст Текст текст текст",image:"https://picsum.photos/300/300?image=1",id:1,content:"# first post content"},{title:"Я тут пост такой второй",description:"Текст текст текст Текст текст текст Текст текст текст Текст текст текст Текст текст текст Текст текст текст",image:"https://picsum.photos/300/100?image=2",id:2,content:"## second post content"},{title:"Я тут пост такой третий весь из себя",description:"Текст текст текст....",image:"https://picsum.photos/300/200?image=3",id:3,content:"### third post content"}]},180:function(t,e,n){"use strict";n(33);var r=n(5),o=n(178),c=n(179);n.d(e,"a",function(){return l});var h="http://localhost:5000/endpoint",l=function(){function t(e){Object(o.a)(this,t),this.axios=e}return Object(c.a)(t,[{key:"getLayout",value:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=4;break;case 4:return t.next=6,this.axios.get(h+"/layout",{params:e||{}});case 6:return n=t.sent,t.abrupt("return",n.data);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getPosts",value:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=4;break;case 4:return t.next=6,this.axios.get(h+"/posts");case 6:return e=t.sent,t.abrupt("return",e.data);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getPost",value:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=4;break;case 4:return t.next=6,this.axios.get(h+"/post/"+e);case 6:return n=t.sent,t.abrupt("return",n.data);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}()},203:function(t,e,n){},204:function(t,e,n){},361:function(t,e,n){"use strict";var r=n(203);n.n(r).a},362:function(t,e,n){"use strict";var r=n(204);n.n(r).a},365:function(t,e,n){"use strict";n.r(e);n(33);var r=n(5),o=n(192),c=n.n(o),h=n(180),l=n(96),f=n(13),v=n(363),d={props:["spec"],data:function(){return{vegaMounted:!1}},mounted:function(){this.mountVegaEmbed(),window.addEventListener("resize",this.updater)},beforeDestroy:function(){this.destroyVegaEmbed(),window.removeEventListener("resize",this.updater)},watch:{spec:function(){this.destroyVegaEmbed(),this.mountVegaEmbed()}},methods:{mountVegaEmbed:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.wrap=this.$refs.view,t.next=3,Object(v.a)(this.wrap,Object(f.a)({},this.spec,{width:this.wrap.offsetWidth,autosize:"fit"}),{renderer:"svg",hover:!0});case 3:this.vegaEmbedObject=t.sent,this.view=this.vegaEmbedObject.view,setTimeout(this.updater,100);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),destroyVegaEmbed:function(){this.view&&this.view.finalize()},updater:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(38,!this.wrap){t.next=4;break}return t.next=4,this.view.width(this.wrap.offsetWidth-38).height((this.wrap.offsetWidth-38)/this.spec.width*this.spec.height).runAsync("enter");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},m=(n(361),n(14)),w=Object(m.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"view",staticClass:"vega",staticStyle:{overflow:"hidden"}})},[],!1,null,"1e482dc4",null).exports,x=n(0),y=n(191),k=n.n(y);x.default.use(k.a,{ops:{bar:{background:"rgba(0, 0, 0, 0.25)"}},name:"vue-scroll"});var j={components:{VueMarkdown:c.a,Controls:l.a,VegaEmbed:w},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.store,o=new h.a(n),t.next=4,o.getLayout();case 4:return data=t.sent,r.commit("setControls",data.controls),t.abrupt("return",{layout:data.tabs,activeTab:0,rendered:!1,resizers:[]});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),methods:{tune:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new h.a(this.$axios),t.next=3,n.getLayout(e);case 3:data=t.sent,this.layout=data.tabs,this.activeTab=0;case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},O=(n(362),Object(m.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{class:t.$store.state.controls.length?"xs8":"xs12",staticStyle:{overflow:"hidden",height:"calc(100vh - 100px)"}},[n("vue-scroll",[n("v-tabs",{class:t.layout.length<2?"tabbar-invisible":"",model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[t._l(t.layout,function(e,r){return t.layout.length>1?n("v-tab",{key:r,attrs:{ripple:""}},[t._v("\n          "+t._s(e.tabName)+"\n        ")]):t._e()}),t._v(" "),t._l(t.layout,function(e,r){return n("v-tab-item",{key:r,staticClass:"pt-2"},[n("v-layout",{attrs:{row:"",wrap:""}},[t._l(e.widgets,function(t,e){return[n("v-flex",{key:e,class:t.width},[n("v-card",{staticClass:"mb-4 mx-2 pa-1 elevation-8 height-initial"},[t.spec?n("VegaEmbed",{attrs:{spec:t.spec}}):n("div",{staticClass:"pa-1"},[n("vue-markdown",{attrs:{source:t.text}})],1)],1)],1)]})],2)],1)})],2)],1)],1),t._v(" "),t.$store.state.controls.length?n("v-flex",{staticStyle:{overflow:"hidden",height:"calc(100vh - 100px)"},attrs:{xs4:""}},[n("vue-scroll",[n("Controls",{attrs:{controls:t.$store.state.controls,listener:t.tune}})],1)],1):t._e()],1)},[],!1,null,null,null));e.default=O.exports}}]);