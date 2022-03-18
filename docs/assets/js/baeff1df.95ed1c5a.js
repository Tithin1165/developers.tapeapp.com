"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5897],{855:(e,t,n)=>{n.d(t,{BZ:()=>l,IB:()=>c,U4:()=>a,Wb:()=>i,hU:()=>p,j6:()=>u,rD:()=>s,zM:()=>r});var r="Developer",a="your_personal_user_api_key";function i(e){return e.activeUserState||{}}function o(e){return i(e).context}function u(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.context=t}function l(e){var t,n=i(e);return!n||(null==(t=n.isLoading)||t)}function s(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.isLoading=t}function c(e){var t=o(e);if(t)return t.apiKey}function p(e){var t=o(e);if(t&&t.user)return t.user.primaryName}},9212:(e,t,n)=>{n.d(t,{B:()=>g});var r=n(7185),a=n(6188),i=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"}),o={"content-type":"application/json"};var u=n(855),l=n(5861),s=n(7757),c=n.n(s),p=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),d=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"}),h={"content-type":"application/json"};function v(e,t){return fetch((0,a.S)(t)+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:Object.assign({},h,{uid:e}),credentials:"include",mode:"cors",body:p}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function f(e){return fetch((0,a.S)(e)+"/graphql/getUserSessions",{method:"POST",headers:h,credentials:"include",mode:"cors",body:d}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function m(){return(m=(0,l.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:if(n=e.sent,(r=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return a=r[0].userId,e.next=9,v(a,t);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=!1,g=function(e,t){var n=e.customFields.runtime,l=(0,u.Wb)(e);if(!b&&!l.isLoading&&!l.context){b=!0;(function(e){return m.apply(this,arguments)})(n).then((function(n){return b=!1,(0,u.rD)(e,!1),(0,u.j6)(e,n),t(Date.now()),n})).then((function(e){return function(e,t){return fetch((0,a.S)(t)+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:Object.assign({},o,{uid:e}),credentials:"include",mode:"cors",body:i}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalDemoBlabItem)||{}}))}(e.userId,n)})).then((function(n){(0,r.LW)(e,n),t(Date.now())})).catch((function(){b=!1,(0,u.rD)(e,!1),t(Date.now())}))}}},8793:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2263),a=n(1736),i=n(7294),o=n(855),u=n(9212),l=n(6188),s=n(6010);const c="codeBlock_L4rF";var p=n(7185);function d(e){var t,n,d,h=e.children,v=e.language,f=e.title,m=(0,i.useState)(Date.now()),b=(m[0],m[1]),g=(0,r.Z)().siteConfig;(0,i.useEffect)((function(){(0,u.B)(g,b)}),[]);var y=null!=(t=(0,o.IB)(g))?t:o.U4,T=null!=(n=(0,p.P4)(g))?n:p.hx,k=null!=(d=(0,p.Kh)(g))?d:p.Ye,A=(0,l.x)(g);function E(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),y).replace(new RegExp("#BASE_URL","g"),A).replace(new RegExp("#RECORD_ID","g"),T).replace(new RegExp("#RECORD_TITLE","g"),k)}var x=("string"==typeof h?[h]:Array.isArray(h)?h:[]).map((function(e){return"string"==typeof e?E(e):e})),D=E(f);return i.createElement("div",{className:(0,s.Z)(c)},i.createElement(a.Z,{title:D,language:v},x))}},7185:(e,t,n)=>{n.d(t,{Kh:()=>u,LW:()=>o,P4:()=>l,Ye:()=>r,hx:()=>a});var r="Demo Record",a=123;function i(e){return e.demoRecord||{}}function o(e,t){e.demoRecord=null!=t?t:{}}function u(e){return i(e).title}function l(e){return i(e).id}},6188:(e,t,n)=>{n.d(t,{S:()=>i,x:()=>o});var r="https://tapeapp.com",a="https://api.tapeapp.com";function i(e){var t,n="string"==typeof e?e:null==e||null==(t=e.customFields)?void 0:t.runtime;return"PRD"===n.toUpperCase()?r:"DEV"===n.toUpperCase()?"http://localhost:3000":r}function o(e){var t,n="string"==typeof e?e:null==e||null==(t=e.customFields)?void 0:t.runtime;return"PRD"===n.toUpperCase()?a:"DEV"===n.toUpperCase()?"http://localhost:3000":a}},7809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>A,frontMatter:()=>m,metadata:()=>g,toc:()=>T});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),u=n(8793),l=n(2389),s=n(3725),c=n(6010);const p="tabItem_LplD";function d(e){var t,n,a,o=e.lazy,u=e.block,l=e.defaultValue,d=e.values,h=e.groupId,v=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(m,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===l?l:null!=(t=null!=l?l:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!m.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),T=y.tabGroupChoices,k=y.setTabGroupChoices,A=(0,i.useState)(g),E=A[0],x=A[1],D=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var U=T[h];null!=U&&U!==E&&m.some((function(e){return e.value===U}))&&x(U)}var I=function(e){var t=e.currentTarget,n=D.indexOf(t),r=m[n].value;r!==E&&(S(t),x(r),null!=h&&k(h,r))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;n=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},v)},m.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return D.push(e)},onKeyDown:w,onFocus:I,onClick:I},a,{className:(0,c.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function h(e){var t=(0,l.Z)();return i.createElement(d,(0,r.Z)({key:String(t)},e))}function v(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var f=["components"],m={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},b=void 0,g={unversionedId:"api/authentication",id:"api/authentication",title:"Authentication",description:"Requests use the HTTP Authorization header to both authenticate and authorize operations. The Tape API accepts bearer tokens in this header. Bearer tokens are provided to you when you create an integration. If you're creating a public OAuth integration, the integration also receives bearer tokens each time a user completes the OAuth flow.",source:"@site/docs/api/authentication.md",sourceDirName:"api",slug:"/api/authentication",permalink:"/docs/api/authentication",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication",sidebar_label:"Authentication"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/api/introduction"},next:{title:"Pagination",permalink:"/docs/api/pagination"}},y={},T=[],k={toc:T};function A(e){var t=e.components,n=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Requests use the HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header to both authenticate and authorize operations. The Tape API accepts bearer tokens in this header. Bearer tokens are provided to you when you create an integration. If you're creating a public OAuth integration, the integration also receives bearer tokens each time a user completes the OAuth flow."),(0,o.kt)("p",null,"Here is your user API Key:"),(0,o.kt)(u.Z,{language:"shell",mdxType:"ApiKeyCodeblock"},"#USER_API_KEY"),(0,o.kt)("p",null,"You can use it to authenticate via the HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header:"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(v,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(u.Z,{language:"shell",mdxType:"ApiKeyCodeblock"},'curl #BASE_URL/v1/record/1 \\\n-H "Authorization: Bearer #USER_API_KEY"\n \n')),(0,o.kt)(v,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,o.kt)(u.Z,{language:"http",mdxType:"ApiKeyCodeblock"},"GET /v1/record/1 HTTP/1.1\nHost: api.tapeapp.com\nAuthorization: Bearer #USER_API_KEY\n"))))}A.isMDXComponent=!0}}]);