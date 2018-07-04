(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"8YgZ":function(t,a,e){},Nb8X:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"page"},[e("q-pull-to-refresh",{attrs:{handler:t.refresher}},t._l(t.activities,function(a){return e("q-card",{key:a.id,staticClass:"smaller q-ma-sm",attrs:{inline:""}},[e("q-card-media",[a.image?e("img",{attrs:{src:a.image.url}}):e("img",{attrs:{src:"https://images.pexels.com/photos/1068989/pexels-photo-1068989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}})]),e("q-card-title",{staticClass:"relative-position"},[e("q-btn",{staticClass:"absolute",staticStyle:{top:"0",right:"8px",transform:"translateY(-50%)"},attrs:{fab:"",color:"primary",icon:"fas fa-tv",disabled:t.screenAvailable},on:{click:t.present}}),e("div",{staticClass:"ellipsis"},[t._v(t._s(a.title))]),a.metadata.duration?e("div",{staticClass:"row items-center",attrs:{slot:"subtitle"},slot:"subtitle"},[e("q-icon",{attrs:{name:"far fa-clock q-pr-sm"}}),a.metadata.duration.hours?[t._v("\n            "+t._s(a.metadata.duration.hours)+" hours"),a.metadata.duration.mins?[t._v(", ")]:t._e()]:t._e(),a.metadata.duration.mins?[t._v("\n            "+t._s(a.metadata.duration.mins)+" minutes\n          ")]:t._e()],2):t._e(),a.metadata.ageRange?e("div",{staticClass:"row items-center",attrs:{slot:"subtitle"},slot:"subtitle"},[e("q-icon",{attrs:{name:"fas fa-child q-pr-md q-pt-sm q-pb-sm"}}),a.metadata.ageRange.from?[t._v("\n            Ages "+t._s(a.metadata.ageRange.from)+"\n            "),a.metadata.ageRange.to?[t._v(" to "+t._s(a.metadata.ageRange.to)+" ")]:t._e(),a.metadata.ageRange.to?t._e():[t._v("\n              and up\n            ")]]:t._e()],2):t._e(),e("q-rating",{staticClass:"block text-center",attrs:{slot:"subtitle",max:5},slot:"subtitle",model:{value:a.rating,callback:function(e){t.$set(a,"rating",e)},expression:"item.rating"}})],1),e("q-card-main",[e("p",[t._l(a.metadata.categories,function(s,n){return[t._v("\n            "+t._s(s.category)),n+1<a.metadata.categories.length?e("span",{key:n},[t._v(", ")]):t._e()]})],2),e("p",{staticClass:"text-faded"},[t._v(t._s(a.introduction))])]),e("q-card-separator"),e("q-card-actions",[e("q-btn",{attrs:{flat:""},on:{click:function(a){t.sendMessage()}}},[t._v("Save")]),e("q-btn",{attrs:{flat:""}},[t._v("Schedule")]),e("q-btn",{attrs:{flat:""}},[t._v("Share")]),e("q-btn",{attrs:{flat:"",color:"primary"}},[t._v("View")])],1)],1)})),e("q-layout-footer",{attrs:{reveal:""}},[e("q-toolbar",{staticClass:"justify-center row"},[e("q-btn",{staticClass:"q-ml-md q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"filter"}}),e("q-btn",{staticClass:"q-ml-md q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"sort"}}),e("q-btn",{staticClass:"q-ml-md q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"mail"}})],1)],1)],1)},n=[];s._withStripped=!0;var i=e("VkAN"),r=e.n(i),o=e("lTCR"),l=e.n(o);function c(){var t=r()(["\n  query AllActivitiesQuery {\n    activities(orderBy: title_ASC) {\n      id\n      title\n      introduction\n      rating\n      image {\n        url\n      }\n      metadata {\n        id\n        duration {\n          hours\n          mins\n        }\n        categories {\n          category\n        }\n        ageRange {\n          from\n          to\n        }\n      }\n    }\n  }\n"]);return c=function(){return t},t}var d=l()(c()),u={name:"Activities",data:function(){return{activities:[],session:null,screenAvailable:!1}},created:function(){navigator.presentation.onavailablechange=function(t){t.available&&(this.screenAvailable=!0)}},methods:{refresher:function(t){this.$apollo.queries.courses.refetch(),setTimeout(function(){t()},500)},present:function(){this.session=navigator.presentation.requestSession("https://www.boredkids.org/auth/testExternal")},sendMessage:function(){this.session.postMessage("Test message from phone 77777777")}},apollo:{activities:{query:d,fetchPolicy:"cache-and-network"}}},m=u,f=(e("bWyA"),e("KHd+")),g=Object(f["a"])(m,s,n,!1,null,"151cca00",null);a["default"]=g.exports},bWyA:function(t,a,e){"use strict";var s=e("8YgZ"),n=e.n(s);n.a}}]);