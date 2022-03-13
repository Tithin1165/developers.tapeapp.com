"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4142:(e,t,n)=>{n.r(t),n.d(t,{MyComponent:()=>f,assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),a=n(3366),o=n(7294),i=n(3905),s=["components"],l={id:"api-reference-new",title:"API Reference NEW",sidebar_label:"API Reference NEW"},p=void 0,c={unversionedId:"api/api-reference-new",id:"api/api-reference-new",title:"API Reference NEW",description:"const [error, setError] = useState(null);",source:"@site/docs/api/api-reference-new.mdx",sourceDirName:"api",slug:"/api/api-reference-new",permalink:"/docs/api/api-reference-new",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/api-reference-new.mdx",tags:[],version:"current",frontMatter:{id:"api-reference-new",title:"API Reference NEW",sidebar_label:"API Reference NEW"},sidebar:"mainSidebar",previous:{title:"API Reference",permalink:"/docs/api/api-reference"},next:{title:"General",permalink:"/docs/calculation/intro"}},u={},d=[{value:"Base URL",id:"base-url",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Personal API keys",id:"personal-api-keys",level:3},{value:"OAuth2 Authentication Flow",id:"oauth2-authentication-flow",level:3},{value:"Rate Limiting",id:"rate-limiting",level:2}],f=function(e){var t=e.children,n=e.color,r=(0,o.useState)(null),a=(r[0],r[1]),s=(0,o.useState)(!1),l=(s[0],s[1]),p=(0,o.useState)([]),c=(p[0],p[1]);return(0,o.useEffect)((function(){fetch("https://mobile.tapeapp.com/graphql/getUserSessions",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:'{\n  "operationName": "getUserSessions",\n  "variables": {},\n  "query": "query getUserSessions {  defaultAlias: getUserSessions {    ...UserSessionDtoNoNesting    __typename  }}fragment UserSessionDtoNoNesting on UserSessionDto {  active  userId  createdAt  __typename}"\n}',mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){l(!0),c(e)}),(function(e){l(!0),a(e)}))}),[]),(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:d,MyComponent:f};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{color:"#25c2a0",mdxType:"MyComponent"},"Docusaurus green")," and ",(0,i.kt)(f,{color:"#1877F2",mdxType:"MyComponent"},"Facebook blue")," are my favorite colors.",(0,i.kt)("p",null,"I can write ",(0,i.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,i.kt)("em",{parentName:"p"},"JSX"),"!"),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs."),(0,i.kt)("h2",{id:"base-url"},"Base URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.tapeapp.com\n")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("h3",{id:"personal-api-keys"},"Personal API keys"),(0,i.kt)("p",null,"The Tape API uses personal API keys to authenticate requests. You can view and manage your API keys in your ",(0,i.kt)("a",{parentName:"p",href:"https://tapeapp.com/tape/(focus//root-modal:user-settings/profile)"},"Tape user settings"),"."),(0,i.kt)("p",null,"Your personal API key carries many privileges, so be sure to keep it secure! Avoid sharing it in public environments, such as GitHub, client-side code, and so forth. You can regenerate it anytime, the previuos one will not work in that case."),(0,i.kt)("p",null,"Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth username value. You do not need to provide a password."),(0,i.kt)("p",null,'In case you need to authenticate via bearer auth, use -H "Authorization: Bearer YOUR_API_KEY" instead of -u YOUR_API_KEY.'),(0,i.kt)("p",null,"All API requests are to be made over HTTPS, while calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl https://api.tapeapp.com/v1/charges -u YOUR_API_KEY:\n\n# The colon prevents curl from asking for a password.\n")),(0,i.kt)("h3",{id:"oauth2-authentication-flow"},"OAuth2 Authentication Flow"),(0,i.kt)("p",null,"In order to develop scalable integrations and applications around Tape, there will be an OAuth2 authentication flow in the future."),(0,i.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"Currently a global rate limit of X is enforced for all personal API keys. Contact us if you require a different limit."))}h.isMDXComponent=!0}}]);