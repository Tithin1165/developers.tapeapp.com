"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[167],{855:(e,t,n)=>{n.d(t,{BZ:()=>u,IB:()=>l,U4:()=>a,Wb:()=>i,hU:()=>p,j6:()=>s,rD:()=>c,zM:()=>r});var r="Tape Developer",a="user_key_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiLvv71cdTAwMDZcdTAwMTLvv73vv71cdTAwMWXvv73vv71U77-9Iiwic2NvcGUiOiJ1a192MSJ9.JTmsHguUWkP0b2dvwIZc2q8dsbjkDXg2FbZyC4_Sh20";function i(e){return e.activeUserState||{}}function o(e){return i(e).context}function s(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.context=t}function u(e){var t=i(e);if(t)return t.isLoading}function c(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.isLoading=t}function l(e){var t=o(e);if(t)return t.apiKey}function p(e){var t=o(e);if(t&&t.user)return t.user.primaryName}},9484:(e,t,n)=>{n.d(t,{B:()=>h});var r=n(855),a=n(5861),i=n(7757),o=n.n(i),s="http://localhost:3000",u=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),c=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"}),l={"content-type":"application/json"};function p(e){return fetch(s+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:Object.assign({},l,{uid:e}),credentials:"include",mode:"cors",body:u}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function d(){return fetch(s+"/graphql/getUserSessions",{method:"POST",headers:l,credentials:"include",mode:"cors",body:c}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function f(){return(f=(0,a.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:if(t=e.sent,(n=t.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return r=n[0].userId,e.next=9,p(r);case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=!1,h=function(e,t){var n=(0,r.Wb)(e);v||n.isLoading||n.context||(v=!0,function(){return f.apply(this,arguments)}().then((function(n){(0,r.rD)(e,"loaded"),(0,r.j6)(e,n),t(Date.now())})).catch((function(e){console.error(e),v=!1})))}},7832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>I,frontMatter:()=>h,metadata:()=>A,toc:()=>y});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),s=n(2263),u=n(1736),c=n(855),l=n(9484),p=function(){var e,t=(0,i.useState)(Date.now()),n=(t[0],t[1]),r=(0,s.Z)().siteConfig;return(0,i.useEffect)((function(){(0,l.B)(r,n)}),[]),null!=(e=(0,c.IB)(r))?e:c.U4},d="#USER_API_KEY";function f(e){var t,n=e.children,r=(0,i.useState)(Date.now()),a=(r[0],r[1]),o=(0,s.Z)().siteConfig;(0,i.useEffect)((function(){(0,l.B)(o,a)}),[]);var p=null!=(t=(0,c.IB)(o))?t:c.U4,f=("string"==typeof n?[n]:Array.isArray(n)?n:[]).map((function(e){return"string"==typeof e&&e.includes(d)?e.replace(d,p):e}));return i.createElement(u.Z,null,f)}var v=["components"],h={id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},m="API Reference",A={unversionedId:"api/api-reference",id:"api/api-reference",title:"API Reference",description:"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.",source:"@site/docs/api/api-reference.md",sourceDirName:"api",slug:"/api/api-reference",permalink:"/docs/api/api-reference",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/api-reference.md",tags:[],version:"current",frontMatter:{id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},sidebar:"mainSidebar",next:{title:"Pagination",permalink:"/docs/api/pagination"}},k={},y=[{value:"First example",id:"first-example",level:2},{value:"Base URL",id:"base-url",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Personal API keys",id:"personal-api-keys",level:3},{value:"OAuth2 Authentication Flow",id:"oauth2-authentication-flow",level:3},{value:"Rate Limiting",id:"rate-limiting",level:2}],g={toc:y};function I(e){var t=e.components,n=(0,a.Z)(e,v);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs."),(0,o.kt)("h2",{id:"first-example"},"First example"),(0,o.kt)(f,{mdxType:"ApiKeyCodeblock"},"curl https://api.tapeapp.com/v1/record \\\n  -u #USER_API_KEY:\n"),(0,o.kt)("h2",{id:"base-url"},"Base URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://api.tapeapp.com\n")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("h3",{id:"personal-api-keys"},"Personal API keys"),(0,o.kt)("p",null,"The easiest way to get started with the Tape API is to use personal API keys to authenticate requests. You can view and manage your API keys in your ",(0,o.kt)("a",{parentName:"p",href:"https://tapeapp.com/tape/(focus//root-modal:user-settings/profile)"},"Tape user settings"),"."),(0,o.kt)("p",null,"Your personal API key carries many privileges, so to keep it secure! Avoid sharing it in public environments, such as GitHub, client-side code, and so forth. You can regenerate it anytime, the previuos one will not work in that case."),(0,o.kt)("p",null,"Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth username value, providing a password is not required."),(0,o.kt)("p",null,'In case you need to authenticate via bearer auth, use -H "Authorization: Bearer ',(0,o.kt)(p,{mdxType:"ActiveUserApiKey"}),'" instead of -u ',(0,o.kt)(p,{mdxType:"ActiveUserApiKey"}),"."),(0,o.kt)("p",null,"All API requests are to be made over HTTPS, while calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ curl https://api.tapeapp.com/v1/charges -u <ActiveUserApiKey />:\n\n# The colon prevents curl from asking for a password.\n")),(0,o.kt)("h3",{id:"oauth2-authentication-flow"},"OAuth2 Authentication Flow"),(0,o.kt)("p",null,"In order to develop scalable integrations and applications around Tape, there will be an OAuth2 authentication flow in the future. Feel free to reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:developers@tapeapp.com"},"developers@tapeapp.com")," to vote for that feature."),(0,o.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,o.kt)("p",null,"Currently a global rate limit of X is enforced for all personal API keys. Contact us if you require a different limit."))}I.isMDXComponent=!0}}]);