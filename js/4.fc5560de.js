(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"/ZTO":function(n,e,t){"use strict";var i=t("YLej"),a=t.n(i);a.a},"4xUk":function(n,e,t){"use strict";var i=t("wrQP"),a=t.n(i);a.a},"6Lju":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{"enter-active-class":"animated fadeIn",appear:""}},[t("q-alert",{staticClass:"q-mb-sm",attrs:{color:"negative",icon:"error",appear:""}},[n._v("\n    "+n._s(n.type)+" not found\n  ")])],1)},a=[];i._withStripped=!0;var r={name:"notFound",props:["type"]},o=r,s=(t("4xUk"),t("KHd+")),u=Object(s["a"])(o,i,a,!1,null,"38f663b5",null);e["a"]=u.exports},A3SY:function(n,e,t){"use strict";t.d(e,"a",function(){return T}),t.d(e,"m",function(){return A}),t.d(e,"n",function(){return q}),t.d(e,"h",function(){return g}),t.d(e,"g",function(){return P}),t.d(e,"d",function(){return C}),t.d(e,"l",function(){return I}),t.d(e,"k",function(){return z}),t.d(e,"j",function(){return x}),t.d(e,"i",function(){return B}),t.d(e,"c",function(){return D}),t.d(e,"b",function(){return w}),t.d(e,"f",function(){return E}),t.d(e,"e",function(){return U});var i=t("VkAN"),a=t.n(i),r=t("lTCR"),o=t.n(r);function s(){var n=a()(["\n  mutation DisableUserMutation($id: ID!){\n    disableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  }\n"]);return s=function(){return n},n}function u(){var n=a()(["\n  mutation EnableUserMutation($id: ID!){\n    enableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  } \n"]);return u=function(){return n},n}function d(){var n=a()(["\n  mutation CreateUserAndAvatarMutation($name: String!, $email: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $sub: String!, $username: String!) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        sub: $sub\n        avatar: {\n          connect: { id: $avatarId }\n        }\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      disabled\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      avatar {\n        url\n      }\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=a()(["\n  mutation CreateUserMutation($name: String!, $email: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $username: String!){\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      username\n    }\n  }\n"]);return l=function(){return n},n}function c(){var n=a()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return c=function(){return n},n}function m(){var n=a()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return m=function(){return n},n}function v(){var n=a()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return v=function(){return n},n}function f(){var n=a()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return f=function(){return n},n}function $(){var n=a()(["\n  mutation deleteUserMutation($id: ID!) {\n    deleteUser(where: {id: $id }) {\n      id\n    }\n  }\n"]);return $=function(){return n},n}function p(){var n=a()(["\n  query me {\n    me {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      username\n    }\n  }\n"]);return p=function(){return n},n}function h(){var n=a()(["\n  query ProfileQuery {\n    user: profile {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isParent\n      isStudent\n      username\n    }\n  }\n"]);return h=function(){return n},n}function b(){var n=a()(["\n  query userQuery($id: ID!) {\n    user( where: {id: $id} ) {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isParent\n      isStudent\n      username\n    }\n  }\n"]);return b=function(){return n},n}function y(){var n=a()(["\n  subscription UsersSubscription {\n    userSubscription {\n      mutation\n      node {\n        id\n        sub\n        name\n        email\n        avatar {\n          url\n        }\n        createdAt\n        updatedAt\n        isAdmin\n        isTeacher\n        isParent\n        isStudent\n        disabled\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n"]);return y=function(){return n},n}function S(){var n=a()(["\n  query AllUsersQuery {\n    users(orderBy: name_ASC) {\n      id\n      name\n      email\n      avatar {\n        url\n      }\n      createdAt\n      updatedAt\n      isAdmin\n      isTeacher\n      isParent\n      isStudent\n      disabled\n      username\n    }\n  }\n"]);return S=function(){return n},n}var T=o()(S()),A=o()(y()),q=o()(b()),g=o()(h()),P=o()(p()),C=o()($()),I=o()(f()),z=o()(v()),x=o()(m()),B=o()(c()),D=o()(l()),w=o()(d()),E=o()(u()),U=o()(s())},YLej:function(n,e,t){},ihjQ:function(n,e,t){"use strict";t.d(e,"b",function(){return v}),t.d(e,"f",function(){return f}),t.d(e,"a",function(){return $}),t.d(e,"c",function(){return p}),t.d(e,"e",function(){return h}),t.d(e,"d",function(){return b});var i=t("VkAN"),a=t.n(i),r=t("lTCR"),o=t.n(r);function s(){var n=a()(["\n  subscription EventsSubscription {\n    eventSubscription {\n      mutation\n      node {\n        id\n        event\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n"]);return s=function(){return n},n}function u(){var n=a()(["\n  query EventQuery($id: ID!) {\n    event( where: {id: $id}) {\n      id\n      event\n    }\n  }  \n"]);return u=function(){return n},n}function d(){var n=a()(["\n  mutation DeleteEventMutation($id: ID!) {\n    deleteEvent(where: {id: $id }) {\n      id\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=a()(["\n  query AllEventsQuery {\n    events(orderBy: createdAt_DESC) {\n      id\n      event\n    }\n  }  \n"]);return l=function(){return n},n}function c(){var n=a()(["\n  mutation UpdateEventMutation($eventId: ID!, $event: Json!){\n    updateEvent(\n      where: {id: $eventId }\n      data: {\n        event: $event\n      }\n    ){\n      id\n      event\n    }\n  }\n"]);return c=function(){return n},n}function m(){var n=a()(["\n  mutation CreateEventMutation($event: Json!){\n    createEvent(\n      data: {\n        event: $event\n      }\n    ){\n      id\n      event\n    }\n  }\n"]);return m=function(){return n},n}var v=o()(m()),f=o()(c()),$=o()(l()),p=o()(d()),h=o()(u()),b=o()(s())},wrQP:function(n,e,t){},xYeC:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("q-page",{staticClass:"page",attrs:{padding:""}},[n.found?n._e():t("notFound",{attrs:{type:"Event"}}),n.found?[t("q-btn",{staticClass:"float-right on-right q-ml-xl",attrs:{color:"primary",size:"md",label:"Save",loading:n.$apollo.loading,disable:n.$v.$invalid},on:{click:function(e){n.updateEvent()}}}),t("q-field",{staticClass:"q-mb-md q-ml-lg",attrs:{"error-label":"Please enter an event title",error:n.$v.event.summary.$error}},[t("q-input",{attrs:{"float-label":"Add title",type:"text",delayfocus:""},on:{blur:n.$v.event.summary.$touch},model:{value:n.event.summary,callback:function(e){n.$set(n.event,"summary","string"===typeof e?e.trim():e)},expression:"event.summary"}})],1),t("div",{staticClass:"q-pt-md"},[t("div",{staticClass:"row gutter-xs text-center q-ml-xl q-pl-md"},[t("div",{staticClass:"col-xs-6 col-sm-4"},[t("q-field",{attrs:{"error-label":"Please enter an start date",error:n.$v.start.$error}},[t("q-datetime",{attrs:{type:n.dateInputType(),placeholder:"Start",format:n.dateInputFormat()},on:{blur:n.$v.start.$touch},model:{value:n.start,callback:function(e){n.start=e},expression:"start"}})],1)],1),t("div",{staticClass:"col-xs-1 col-sm-1"},[n._v("\n          to\n        ")]),t("div",{staticClass:"col-xs-6 col-sm-4"},[t("q-field",{attrs:{"error-label":"Please enter an end date",error:n.$v.end.$error}},[t("q-datetime",{attrs:{type:n.dateInputType(),placeholder:"end",format:n.dateInputFormat()},on:{blur:n.$v.end.$touch},model:{value:n.end,callback:function(e){n.end=e},expression:"end"}})],1)],1),t("div",{staticClass:"col-xs-6 col-sm-3 text-left"},[n._v("\n          TIME ZONE\n        ")])])]),t("div",{staticClass:"q-ml-xl q-pl-md q-mt-lg"},[t("q-checkbox",{attrs:{label:"All day"},model:{value:n.allDay,callback:function(e){n.allDay=e},expression:"allDay"}})],1),t("div",{staticClass:"q-mt-xl q-pa-md"},[t("p",{staticClass:"caption uppercase"},[n._v("Event details")]),t("q-field",{staticClass:"q-mb-md",attrs:{icon:"room"}},[t("q-input",{attrs:{type:"text","float-label":"Add location"},model:{value:n.event.location,callback:function(e){n.$set(n.event,"location","string"===typeof e?e.trim():e)},expression:"event.location"}})],1),t("q-field",{staticClass:"q-mb-md",attrs:{icon:"fiber_manual_record","icon-color":n.color}},[t("q-select",{staticStyle:{width:"100px"},attrs:{options:n.colorOptions,"float-label":"Color",color:n.color},model:{value:n.event.color,callback:function(e){n.$set(n.event,"color",e)},expression:"event.color"}})],1),t("q-editor",{staticClass:"q-mt-lg",model:{value:n.event.description,callback:function(e){n.$set(n.event,"description","string"===typeof e?e.trim():e)},expression:"event.description"}})],1)]:n._e()],2)},a=[];i._withStripped=!0;t("pIFo"),t("KKXr");var r=t("6Lju"),o=t("ta7f"),s=t("ihjQ"),u=t("A3SY"),d={name:"editUser",components:{notFound:r["a"]},data:function(){return{event:{description:"",color:"",start:{},end:{}},start:"",end:"",allDay:!1,found:!0,starTimeZone:"",endTimeZone:"",colorOptions:[{value:"",label:""},{label:"Primary",leftColor:"primary",icon:"lens",value:"primary"},{label:"Secondary",leftColor:"secondary",icon:"lens",value:"secondary"},{label:"Tertiary",leftColor:"tertiary",icon:"lens",value:"tertiary"},{label:"Positive",leftColor:"positive",icon:"lens",value:"positive"},{label:"Negative",leftColor:"negative",icon:"lens",value:"negative"},{label:"Info",leftColor:"info",icon:"lens",value:"info"},{label:"Warning",leftColor:"warning",icon:"lens",value:"warning"},{label:"Light",leftColor:"light",icon:"lens",value:"light"},{label:"Dark",leftColor:"dark",icon:"lens",value:"dark"},{label:"Faded",leftColor:"faded",icon:"lens",value:"faded"}]}},validations:{start:{required:o["required"]},end:{required:o["required"]},event:{summary:{required:o["required"]}}},computed:{color:function(){return this.event.color}},methods:{mutation:function(){return this.$route.params.id?s["f"]:s["b"]},updateLabel:function(){return this.isNew?"Create Event":"Update Event"},dateInputType:function(){return this.allDay?"date":"datetime"},dateInputFormat:function(){return this.allDay?"MMM Do, YYYY":"MMM Do, YYYY - hh:mm a"},composeEvent:function(){this.event.start={},this.event.end={},this.allDay?(this.event.start.date=this.start.split("T")[0],this.event.end.date=this.end.split("T")[0]):(this.event.start.dateTime=this.start,this.event.end.dateTime=this.end),this.event.start.timeZone=this.me.timezone,this.event.end.timeZone=this.me.timezone},updateEvent:function(){var n=this;this.composeEvent(),this.$apollo.mutate({mutation:this.mutation(),variables:{event:this.event,eventId:this.$route.params.id}}).then(function(e){var t=n.$route.params.id?"updated":"created";n.$q.notify({message:"Event sucessfully ".concat(t),type:"positive"}),n.$router.replace("/calendar/")}).catch()}},apollo:{me:{query:u["g"],fetchPolicy:"cache-first"},event:{query:s["e"],variables:function(){return{id:this.$route.params.id}},skip:function(){return!this.$route.params.id},update:function(n){var e=n.event.event;e.start.date?(this.allDay=!0,this.start=e.start.date,this.end=e.end.date):(this.start=e.start.dateTime,this.end=e.end.dateTime),e.start.timeZone&&(this.startTimeZone=e.start.timeZone),e.end.timeZone&&(this.endTimeZone=e.end.timeZone);var t={description:e.description,summary:e.summary,color:e.color,start:{},end:{},location:e.location};return e.color&&(t.color=e.color),t}}}},l=d,c=(t("/ZTO"),t("KHd+")),m=Object(c["a"])(l,i,a,!1,null,"67be203d",null);e["default"]=m.exports}}]);