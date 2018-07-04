(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"7XBu":function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"d",function(){return a}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return s});var i={ADMIN:"fas fa-cog",PARENT:"fas fa-user",TEACHER:"fas fa-book",STUDENT:"fas fa-graduation-cap"},a={ADMIN:"Administrator",PARENT:"Parent",TEACHER:"Teacher",STUDENT:"Student"},r=[{label:"Admin",value:"ADMIN"},{label:"Student",value:"STUDENT"},{label:"Parent",value:"PARENT"},{label:"Teacher",value:"TEACHER"}];function s(n){return-1!==n.state.app.roles.indexOf("ADMIN")}},A3SY:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"m",function(){return P}),t.d(e,"n",function(){return g}),t.d(e,"h",function(){return _}),t.d(e,"g",function(){return D}),t.d(e,"d",function(){return E}),t.d(e,"l",function(){return q}),t.d(e,"k",function(){return B}),t.d(e,"j",function(){return z}),t.d(e,"i",function(){return U}),t.d(e,"c",function(){return C}),t.d(e,"b",function(){return I}),t.d(e,"f",function(){return w}),t.d(e,"e",function(){return y});var i=t("VkAN"),a=t.n(i),r=t("lTCR"),s=t.n(r);function u(){var n=a()(["\n  mutation DisableUserMutation($id: ID!){\n    disableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  }\n"]);return u=function(){return n},n}function o(){var n=a()(["\n  mutation EnableUserMutation($id: ID!){\n    enableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  } \n"]);return o=function(){return n},n}function d(){var n=a()(["\n  mutation CreateUserAndAvatarMutation($name: String!, $email: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $sub: String!, $username: String!) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        sub: $sub\n        avatar: {\n          connect: { id: $avatarId }\n        }\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      disabled\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      avatar {\n        url\n      }\n    }\n  }\n"]);return d=function(){return n},n}function m(){var n=a()(["\n  mutation CreateUserMutation($name: String!, $email: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $username: String!){\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      username\n    }\n  }\n"]);return m=function(){return n},n}function l(){var n=a()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return l=function(){return n},n}function c(){var n=a()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return c=function(){return n},n}function f(){var n=a()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return f=function(){return n},n}function $(){var n=a()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n      }\n    ){\n      id\n      name\n      email\n      timezone\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      disabled\n      avatar {\n        url\n      }\n    }\n  }\n"]);return $=function(){return n},n}function v(){var n=a()(["\n  mutation deleteUserMutation($id: ID!) {\n    deleteUser(where: {id: $id }) {\n      id\n    }\n  }\n"]);return v=function(){return n},n}function A(){var n=a()(["\n  query me {\n    me {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      username\n    }\n  }\n"]);return A=function(){return n},n}function S(){var n=a()(["\n  query ProfileQuery {\n    user: profile {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isParent\n      isStudent\n      username\n    }\n  }\n"]);return S=function(){return n},n}function b(){var n=a()(["\n  query userQuery($id: ID!) {\n    user( where: {id: $id} ) {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        url\n      }\n      isAdmin\n      isTeacher\n      isParent\n      isStudent\n      username\n    }\n  }\n"]);return b=function(){return n},n}function h(){var n=a()(["\n  subscription UsersSubscription {\n    userSubscription {\n      mutation\n      node {\n        id\n        sub\n        name\n        email\n        avatar {\n          url\n        }\n        createdAt\n        updatedAt\n        isAdmin\n        isTeacher\n        isParent\n        isStudent\n        disabled\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n"]);return h=function(){return n},n}function T(){var n=a()(["\n  query AllUsersQuery {\n    users(orderBy: name_ASC) {\n      id\n      name\n      email\n      avatar {\n        url\n      }\n      createdAt\n      updatedAt\n      isAdmin\n      isTeacher\n      isParent\n      isStudent\n      disabled\n      username\n    }\n  }\n"]);return T=function(){return n},n}var p=s()(T()),P=s()(h()),g=s()(b()),_=s()(S()),D=s()(A()),E=s()(v()),q=s()($()),B=s()(f()),z=s()(c()),U=s()(l()),C=s()(m()),I=s()(d()),w=s()(o()),y=s()(u())},IeHf:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("q-page",{staticClass:"page"},[t("q-list",{attrs:{separator:""}},n._l(n.users,function(e){return t("q-item",{key:e.id,class:n.itemClass(e),attrs:{to:"/users/"+e.id}},[t("q-item-side",{attrs:{inverted:"",letter:e.name[0],avatar:e.avatar?e.avatar.url:"",color:"grey-6"}}),t("q-item-main",[t("q-item-tile",{attrs:{label:""}},[n._v(n._s(e.name)+"\n          "),e.disabled?[n._v(" (disabled)")]:n._e()],2),t("q-item-tile",{attrs:{sublabel:""}},[n._v("\n          Username: "+n._s(e.username)+"\n        ")]),t("q-item-tile",{staticClass:"text-tertiary",attrs:{sublabel:""}},[n._v(n._s(e.email))]),t("q-item-tile",{staticClass:"text-light ",attrs:{sublabel:""}},[t("small",[n._v("Created "+n._s(n.formatDate(e.createdAt)))])]),t("q-item-tile",{staticClass:"text-faded row",attrs:{sublabel:""}},[e.isAdmin?t("span",{staticClass:"justify-center ellipsis-2-lines q-mr-md"},[t("q-icon",{attrs:{name:n.icons["ADMIN"]}}),n._v(" "+n._s(n.titles["ADMIN"])+"  \n          ")],1):n._e(),e.isAdmin?t("span",{staticClass:"justify-center ellipsis-2-lines q-mr-md"},[t("q-icon",{attrs:{name:n.icons["TEACHER"]}}),n._v(" "+n._s(n.titles["TEACHER"])+"  \n          ")],1):n._e(),e.isAdmin?t("span",{staticClass:"justify-center ellipsis-2-lines q-mr-md"},[t("q-icon",{attrs:{name:n.icons["STUDENT"]}}),n._v(" "+n._s(n.titles["STUDENT"])+"  \n          ")],1):n._e(),e.isAdmin?t("span",{staticClass:"justify-center ellipsis-2-lines q-mr-md"},[t("q-icon",{attrs:{name:n.icons["PARENT"]}}),n._v(" "+n._s(n.titles["PARENT"])+"  \n          ")],1):n._e()])],1),t("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)})),t("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[t("q-tooltip",{attrs:{self:"bottom left",delay:1e3}},[n._v("\n      Create profile\n    ")]),t("q-fab",{ref:"newUserButton",staticClass:"white",attrs:{color:"red",icon:"person add"},on:{show:function(e){n.$router.push("/users/new")}}})],1)],1)},a=[];i._withStripped=!0;var r=t("A3SY"),s=t("K405"),u=t("7XBu"),o=t("YgEf"),d=s["Ha"].formatDate,m={name:"Users",data:function(){return{users:[],icons:u["b"],titles:u["d"]}},methods:{formatDate:function(n){return d(n,"dddd, MMMM D, YYYY")},itemClass:function(n){return n.disabled?"text-weight-light":""}},apollo:{users:{query:r["a"],subscribeToMore:[{document:r["m"],updateQuery:function(n,e){var t=e.subscriptionData;return Object(o["a"])(n,t,"users","user")}}]}}},l=m,c=(t("hiXn"),t("KHd+")),f=Object(c["a"])(l,i,a,!1,null,"afd2279c",null);e["default"]=f.exports},YgEf:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var i=t("RIqP"),a=t.n(i);function r(n,e,t,i){var r=e.data["".concat(i,"Subscription")];if(r){var s={};return"CREATED"===r.mutation?(s[t]=[r.node].concat(a()(n[t])),s):"DELETED"===r.mutation?(s[t]=n[t].filter(function(n){return n.id!==r.previousValues.id}),s):void 0}}},hVsC:function(n,e,t){},hiXn:function(n,e,t){"use strict";var i=t("hVsC"),a=t.n(i);a.a}}]);