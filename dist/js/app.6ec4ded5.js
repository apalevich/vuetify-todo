(function(){"use strict";var t={5964:function(t,o,e){var n=e(144),r=e(998),i=e(6843),a=e(5550),d=e(6312),s=e(9582),u=e(9223),c=e(4324),l=e(5495),f=e(5808),p=e(4525),m=e(9796),h=e(4611),v=e(3059),T=e(6975),y=e(8718),g=function(){var t=this,o=t._self._c;return o(r.Z,{attrs:{id:"inspire"}},[o(T.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[o(p.Z,[o(m.km,[o(m.V9,{staticClass:"text-h6"},[t._v(" Vuetify Todo ")]),o(m.oZ,[t._v(" The only todo you ever need ")])],1)],1),o(u.Z),o(f.Z,{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return o(p.Z,{key:e.title,attrs:{to:e.to,link:""}},[o(h.Z,[o(c.Z,[t._v(t._s(e.icon))])],1),o(m.km,[o(m.V9,[t._v(t._s(e.title))])],1)],1)})),1)],1),o(s.Z,{staticClass:"overflow-hidden"},[o(i.Z,{attrs:{app:"",color:"primary",dark:"",src:"https://picsum.photos/1920/1080?random",prominent:""},scopedSlots:t._u([{key:"img",fn:function({props:e}){return[o(l.Z,t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",e,!1))]}}])},[o(a.Z,{on:{click:function(o){t.drawer=!t.drawer}}}),o(d.Z,[t._v("Vuetify Todo")]),o(y.Z,[o("div",{staticClass:"subtitle-1 text-right"},[t._v(" "+t._s(t.curTime)+" ")])])],1)],1),o(v.Z,[o("router-view")],1)],1)},b=[],Z={data:()=>({drawer:null,items:[{title:"Todo",icon:"mdi-format-list-checks",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"}],curTime:null}),methods:{getCurTime(){const t=new Date,o=`${t.toDateString()} ${t.toLocaleTimeString()}`;this.curTime=o}},created(){setInterval(this.getCurTime,1e3)}},w=Z,k=e(1001),_=(0,k.Z)(w,g,b,!1,null,null,null),j=_.exports,P=e(8345),C=e(6190),O=e(120),x=e(5187),S=e(1357),E=function(){var t=this,o=t._self._c;return o("div",{staticClass:"home"},[o(S.Z,{staticClass:"pa-3",attrs:{outlined:"",label:"Add todo","append-icon":"mdi-plus","hide-details":""},on:{"click:append":function(o){return t.addTodo()},keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo()}},model:{value:t.newTodoTitle,callback:function(o){t.newTodoTitle=o},expression:"newTodoTitle"}}),o(f.Z,{staticClass:"pt-0",attrs:{flat:""}},t._l(t.allTodos,(function(e){return o("div",{key:e.id},[o(p.Z,{class:{"blue lighten-5":e.completed},on:{click:function(o){return t.toggleDone(e)}}},[[o(x.Z,[o(O.Z,{attrs:{"input-value":e.completed,color:"primary"}})],1),o(m.km,[o(m.V9,{class:{"text-decoration-line-through":e.completed}},[t._v(" "+t._s(e.title)+" ")])],1),o(x.Z,[o(C.Z,{attrs:{icon:""},on:{click:function(o){return o.stopPropagation(),t.deleteTodo(e.id)}}},[o(c.Z,{attrs:{color:"secondary lighten-1"}},[t._v("mdi-delete")])],1)],1)]],2),o(u.Z)],1)})),0)],1)},A=[],V=e(629),$={name:"Todo",data(){return{newTodoTitle:""}},methods:{...(0,V.nv)(["fetchTodos","pushTodo","deleteTodo","updateTodo"]),addTodo(){this.pushTodo(this.newTodoTitle),this.newTodoTitle=""},toggleDone({id:t,title:o,completed:e}){const n={id:t,title:o,completed:!e};this.updateTodo(n)}},computed:(0,V.Se)(["allTodos"]),created(){this.fetchTodos()}},D=$,L=(0,k.Z)(D,E,A,!1,null,null,null),M=L.exports;n.ZP.use(P.ZP);const N=[{path:"/",name:"Todo",component:M},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,6578))}],F=new P.ZP({routes:N});var I=F,q=e(9669),B=e.n(q);const z={todos:[]},G={allTodos:t=>t.todos},H={async fetchTodos({commit:t}){const o=await B().get("https://jsonplaceholder.typicode.com/todos?_limit=5");t("setTodos",o.data)},async pushTodo({commit:t},o){const e=await B().post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:!1});t("newTodo",e.data)},async updateTodo({commit:t},o){const e=await B().put(`https://jsonplaceholder.typicode.com/todos/${o.id}`,o);console.log(e.data),t("updTodo",e.data)},async deleteTodo({commit:t},o){await B()["delete"](`https://jsonplaceholder.typicode.com/todos/${o}`),t("removeTodo",o)}},J={setTodos:(t,o)=>{t.todos=o},newTodo:(t,o)=>t.todos.unshift(o),updTodo:(t,o)=>{const e=t.todos.findIndex((t=>t.id===o.id));e>-1&&t.todos.splice(e,1,o)},removeTodo:(t,o)=>t.todos=t.todos.filter((t=>t.id!==o))};var K={state:z,getters:G,actions:H,mutations:J};n.ZP.use(V.ZP);var Q=new V.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{todos:K}}),R=e(6560);n.ZP.use(R.Z);var U=new R.Z({});n.ZP.config.productionTip=!1,new n.ZP({router:I,store:Q,vuetify:U,render:t=>t(j)}).$mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,i){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var d=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[s])}))?n.splice(s--,1):(d=!1,i<a&&(a=i));if(d){t.splice(c--,1);var u=r();void 0!==u&&(o=u)}}return o}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(o,n){return e.f[n](t,o),o}),[]))}}(),function(){e.u=function(t){return"js/about.f3ac11bf.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={},o="vuetify-todo:";e.l=function(n,r,i,a){if(t[n])t[n].push(r);else{var d,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==o+i){d=l;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,e.nc&&d.setAttribute("nonce",e.nc),d.setAttribute("data-webpack",o+i),d.src=n),t[n]=[r];var f=function(o,e){d.onerror=d.onload=null,clearTimeout(p);var r=t[n];if(delete t[n],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((function(t){return t(e)})),o)return o(e)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),s&&document.head.appendChild(d)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/vuetify-todo/"}(),function(){var t={143:0};e.f.j=function(o,n){var r=e.o(t,o)?t[o]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(e,n){r=t[o]=[e,n]}));n.push(r[2]=i);var a=e.p+e.u(o),d=new Error,s=function(n){if(e.o(t,o)&&(r=t[o],0!==r&&(t[o]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+o+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,r[1](d)}};e.l(a,s,"chunk-"+o,o)}},e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,i,a=n[0],d=n[1],s=n[2],u=0;if(a.some((function(o){return 0!==t[o]}))){for(r in d)e.o(d,r)&&(e.m[r]=d[r]);if(s)var c=s(e)}for(o&&o(n);u<a.length;u++)i=a[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},n=self["webpackChunkvuetify_todo"]=self["webpackChunkvuetify_todo"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5964)}));n=e.O(n)})();
//# sourceMappingURL=app.6ec4ded5.js.map