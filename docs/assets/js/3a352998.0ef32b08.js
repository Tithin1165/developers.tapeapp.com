"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[735],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(t),k=i,m=f["".concat(c,".").concat(k)]||f[k]||u[k]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],o={id:"link",title:"Links",sidebar_label:"Links"},c=void 0,p={unversionedId:"calculation/example/link",id:"calculation/example/link",title:"Links",description:"It is quite easy to generate a clickable link inside the calculation field:",source:"@site/docs/calculation/example/link.md",sourceDirName:"calculation/example",slug:"/calculation/example/link",permalink:"/docs/calculation/example/link",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/calculation/example/link.md",tags:[],version:"current",frontMatter:{id:"link",title:"Links",sidebar_label:"Links"},sidebar:"mainSidebar",previous:{title:"HTML & CSS",permalink:"/docs/calculation/html"},next:{title:"Contribute",permalink:"/docs/contribute"}},s={},u=[{value:"Open a Link In a New Tab",id:"open-a-link-in-a-new-tab",level:2}],f={toc:u};function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is quite easy to generate a clickable link inside the calculation field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Reference the "Link" field of your app, which can contain multiple links\nconst links = @Link;\n\n// Get the first link\nconst firstLinkUrl = links[0];\n\n// Result is the URL of the first link\nfirstLinkUrl\n')),(0,a.kt)("p",null,"Markdown will automatically make a link clickable if it has the correct URL format."),(0,a.kt)("h2",{id:"open-a-link-in-a-new-tab"},"Open a Link In a New Tab"),(0,a.kt)("p",null,"A markdown link does not have the option to open the link in a new tab. We can use HTML for this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Reference the "Link" field of your app, which can contain multiple links\nconst links = @Link;\n\n// Get the first link\nconst firstLinkUrl = links[0];\n\n// Result is the URL of the first link, opens in new tab\n`<a href="${firstLinkUrl}" target="_blank">Click!</a>`\n')))}k.isMDXComponent=!0}}]);