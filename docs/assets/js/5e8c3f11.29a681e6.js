"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[613],{4757:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294);function r(e){var t,n=e.method,r=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return i.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},i.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),i.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},1582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var i=n(7462),r=n(3366),l=(n(7294),n(3905)),a=n(4757),o=n(9877),s=n(8215),d=n(7859),p=["components"],c={id:"link",title:"Link Field Value",sidebar_label:"Link"},u=void 0,m={unversionedId:"api/resource/field-value/link",id:"api/resource/field-value/link",title:"Link Field Value",description:"A link field value consists of its value property which holds one or multiple link entries. An entry contains the link url itself, plus link preview meta information, such as a website title or a description. These previews are generated by the server asynchronously, so they are not instantly available after creation / update.",source:"@site/docs/api/resource/field-value/link.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/link",permalink:"/docs/api/resource/field-value/link",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/link.md",tags:[],version:"current",frontMatter:{id:"link",title:"Link Field Value",sidebar_label:"Link"},sidebar:"mainSidebar",previous:{title:"Number",permalink:"/docs/api/resource/field-value/number"},next:{title:"Calculation",permalink:"/docs/api/resource/field-value/calculation"}},k={},b=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],h={toc:b};function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A link field value consists of its ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property which holds one or multiple link entries. An entry contains the link url itself, plus link preview meta information, such as a website title or a description. These previews are generated by the server asynchronously, so they are not instantly available after creation / update."),(0,l.kt)("h2",{id:"record-creation"},"Record creation"),(0,l.kt)(a.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A link field value can be created as part of a record creation. It is possible to provide either a url string, or an array of such."),(0,l.kt)("p",null,'Here is an example request body for creating a record with a value for the "Customer website" field with ID 2, type ',(0,l.kt)("inlineCode",{parentName:"p"},"multi_link")," and external ID ",(0,l.kt)("inlineCode",{parentName:"p"},"customer_website")," :"),(0,l.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_website": \n        [\n          "https://somecustomerwebsite.com"\n        ]\n    }\n  }\' \n')),(0,l.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_website": [{ "url": "https://somecustomerwebsite.com" }]\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_website",\n      "label": "Customer website",\n      "type": "link",\n      "field_type": "multi_link",\n      "values": [\n        {\n          "embed_id": 100,\n          "url": "https://somecustomerwebsite.com"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Note that the individual link address entries contain an ",(0,l.kt)("inlineCode",{parentName:"p"},"embed_id"),". Be sure to include them in updates, to keep existing link entries. If you omit it, new entries will be created instead and the respective existing ones will be removed. Individual link entries can not be updated, only removed."),(0,l.kt)("p",null,"After the link preview has been fully generated, it will contain meta info. The body will contain more information in that case, follow the next section about record retrieval:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response (after link preview has been generated)"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,Response:!0,"(after":!0,link:!0,preview:!0,has:!0,been:!0,'generated)"':!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_website",\n      "label": "Customer website",\n      "type": "link",\n      "field_type": "multi_link",\n      "values": [\n        {\n          "embed_id": 100,\n          "url": "https://somecustomerwebsite.com",\n          "title": "Some awesome customer website",\n          "description": "Welcome, Find our products and services here.",\n          "type": "link"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,l.kt)(a.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A link field value can be retrieved as part of a record retrieval:"),(0,l.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_website",\n      "label": "Customer website",\n      "type": "link",\n      "field_type": "multi_link",\n      "values": [\n        {\n          "embed_id": 100,\n          "url": "https://somecustomerwebsite.com",\n          "title": "Some awesome customer website",\n          "description": "Welcome, Find our products and services here.",\n          "type": "link"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"record-update"},"Record update"),(0,l.kt)(a.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"One or more link field values can be updated as part of a record update, while omitted entries will be removed. Be sure to include the ID of existing entries, to prevent them from being recreated and regenerated. Here is an example request body for updating the link entries of an link field with external ID ",(0,l.kt)("inlineCode",{parentName:"p"},"customer_website")," of a record, keeping one existing entry and adding another one via URL:"),(0,l.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_website": \n      [\n        {\n          "embed_id": 100,\n          "url": "https://somecustomerwebsite.com",\n          "title": "Some awesome customer website",\n          "description": "Welcome, Find our products and services here."\n        },\n        "https://secondcustomerwebsite.com"\n      ]\n    }\n  }\' \n')),(0,l.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_website": [\n      {\n        "embed_id": 100,\n        "url": "https://somecustomerwebsite.com",\n        "title": "Some awesome customer website",\n        "description": "Welcome, Find our products and services here."\n      },\n      "https://secondcustomerwebsite.com"\n    ]\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_website",\n      "label": "Customer website",\n      "type": "link",\n      "field_type": "multi_link",\n      "values": [\n        {\n          "embed_id": 100,\n          "url": "https://somecustomerwebsite.com",\n          "title": "Some awesome customer website",\n          "description": "Welcome, Find our products and services here.",\n          "type": "link"\n        },\n        {\n          "embed_id": 101,\n          "url": "https://secondcustomerwebsite.com",\n          "title": "Another awesome customer website",\n          "description": "Welcome, Find our more and other products and services here.",\n          "type": "link"\n        }\n      ]\n    }\n  ]\n}\n')))}v.isMDXComponent=!0}}]);