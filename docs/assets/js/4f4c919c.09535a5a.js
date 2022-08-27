"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9998],{4757:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){var t,a=e.method,l=e.url;switch(a){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return n.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},n.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},a.toUpperCase()),n.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},l))}},4688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>c,toc:()=>v});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),o=a(4757),r=a(9877),d=a(8215),s=a(7859),p=["components"],m={id:"email",title:"Email Field Value",sidebar_label:"Email"},u=void 0,c={unversionedId:"api/resource/field-value/email",id:"api/resource/field-value/email",title:"Email Field Value",description:"An email field value consists of its value property which holds one or multiple email address entries. An entry contains the email address itself, plus its type, e.g. work or home. Currently the following values are allowed as type: work, home and other. If no type is provided, email address entries always default to work.",source:"@site/docs/api/resource/field-value/email.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/email",permalink:"/docs/api/resource/field-value/email",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/email.md",tags:[],version:"current",frontMatter:{id:"email",title:"Email Field Value",sidebar_label:"Email"},sidebar:"mainSidebar",previous:{title:"Location",permalink:"/docs/api/resource/field-value/location"},next:{title:"Phone",permalink:"/docs/api/resource/field-value/phone"}},h={},v=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],k={toc:v};function f(e){var t=e.components,a=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An email field value consists of its ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," property which holds one or multiple email address entries. An entry contains the email address itself, plus its type, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"work")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"home"),". Currently the following values are allowed as type: ",(0,i.kt)("inlineCode",{parentName:"p"},"work"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"home")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"other"),". If no type is provided, email address entries always default to ",(0,i.kt)("inlineCode",{parentName:"p"},"work"),"."),(0,i.kt)("h2",{id:"record-creation"},"Record creation"),(0,i.kt)(o.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"An email field value can be created as part of a record creation. It is possible to provide either a string, an object following the email address entry structure or an array of those two. It is advised to use an array of objects for the best accuracy of the provided data."),(0,i.kt)("p",null,'Here is an example request body for creating a record with a value for the "Customer email" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"multi_email")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_email")," :"),(0,i.kt)(r.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_email": \n        [\n          {"type": "work", "email": "johndoe@samplebusiness.com"},\n          {"type": "home", "email": "john@doe.com"}\n        ]\n    }\n  }\' \n')),(0,i.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_email": [\n      { "type": "work", "email": "johndoe@samplebusiness.com" },\n      { "type": "home", "email": "john@doe.com" }\n    ]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_email",\n      "label": "Customer email",\n      "type": "email",\n      "field_type": "multi_email",\n      "values": [\n        {\n          "id": 100,\n          "value": "johndoe@samplebusiness.com",\n          "type": "work"\n        },\n        {\n          "id": 101,\n          "value": "john@doe.com",\n          "type": "home"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Note that the individual email address entries contain an ID. Be sure to include them in updates, to keep existing email entries. If you omit the ID, new entries will be created instead and the respective existing ones will be removed."),(0,i.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,i.kt)(o.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"An email field value can be retrieved as part of a record retrieval:"),(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_email",\n      "label": "Customer email",\n      "type": "email",\n      "field_type": "multi_email",\n      "values": [\n        {\n          "id": 100,\n          "value": "johndoe@samplebusiness.com",\n          "type": "work"\n        },\n        {\n          "id": 101,\n          "value": "john@doe.com",\n          "type": "home"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-update"},"Record update"),(0,i.kt)(o.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"One or more email field values can be updated as part of a record update, and individual entries can be updated via their ID. Here is an example request body for updating the email entries of an email field with external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_email")," of a record:"),(0,i.kt)(r.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_email": \n      [\n        { "id": 100, "type": "work", "email": "johndoeNEW@samplebusiness.com" },\n        { "type": "other", "email": "johndoe@gmail.com" }\n      ]\n    }\n  }\' \n')),(0,i.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_email": [\n      { "id": 100, "type": "work", "email": "johndoeNEW@samplebusiness.com" },\n      { "type": "other", "email": "johndoe@gmail.com" }\n    ]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_email",\n      "label": "Customer email",\n      "type": "email",\n      "field_type": "multi_email",\n      "values": [\n        {\n          "id": 100,\n          "value": "johndoeNEW@samplebusiness.com",\n          "type": "work"\n        },\n        {\n          "id": 102,\n          "value": "johndoe@gmail.com",\n          "type": "other"\n        }\n      ]\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);