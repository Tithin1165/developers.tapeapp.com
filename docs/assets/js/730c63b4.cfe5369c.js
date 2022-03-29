"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[602],{6041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"pagination",title:"Pagination",sidebar_label:"Pagination"},p=void 0,l={unversionedId:"api/pagination",id:"api/pagination",title:"Pagination",description:"Endpoints which return a list of objects use pagination. Pagination allows an integration to request a part of the list, receiving an array of results and a cursor in the response. The integration can use the cursor in another request to receive the next part of the list. Using this technique, the integration can continue to make requests to receive the whole list (or just the parts the integration needs).",source:"@site/docs/api/pagination.md",sourceDirName:"api",slug:"/api/pagination",permalink:"/docs/api/pagination",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/pagination.md",tags:[],version:"current",frontMatter:{id:"pagination",title:"Pagination",sidebar_label:"Pagination"},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/api/authentication"},next:{title:"Versioning",permalink:"/docs/api/versioning"}},d={},m=[{value:"Requests",id:"requests",level:2},{value:"Responses",id:"responses",level:2}],h={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Endpoints which return a list of objects use pagination. Pagination allows an integration to request a part of the list, receiving an array of results and a ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor")," in the response. The integration can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor")," in another request to receive the next part of the list. Using this technique, the integration can continue to make requests to receive the whole list (or just the parts the integration needs)."),(0,r.kt)("h2",{id:"requests"},"Requests"),(0,r.kt)("p",null,"Each paginated endpoint accepts the following request parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cursor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A ",(0,r.kt)("inlineCode",{parentName:"td"},"cursor")," returned from a previous response, used to request the next page of results. Treat this as an opaque value. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"),", which indicates to return results from the beginning of the list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"limit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of objects from the full list desired in the response. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"50")," Maximum: ",(0,r.kt)("inlineCode",{parentName:"td"},"500")," The response may contain fewer than this number of results.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Parameter location varies by endpoint")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For endpoints using the HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method, these parameters are accepted in the request query string. For endpoints using the HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," method, these parameters are accepted in the request body."))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("p",null,"Responses from paginated endpoints contain the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"has_more")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When the response includes the end of the list, ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". Otherwise, ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cursor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only available when ",(0,r.kt)("inlineCode",{parentName:"td"},"has_more")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Used to retrieve the next page of results by passing the value as the ",(0,r.kt)("inlineCode",{parentName:"td"},"cursor")," parameter to the same endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"results")),(0,r.kt)("td",{parentName:"tr",align:"left"},"array of endpoint-dependent objects"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The page, or partial list, or results.")))))}u.isMDXComponent=!0}}]);