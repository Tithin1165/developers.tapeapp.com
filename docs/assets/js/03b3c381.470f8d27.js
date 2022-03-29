"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[97],{7859:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(2263),r=n(2792),l=n(1736),i=n(6010),o=n(7294);const d="codeBlock_FKPJ";function u(e){var t=e.children,n=e.language,u=e.title,s=(0,o.useState)((0,r.W5)()),c=s[0],p=s[1];(0,o.useEffect)((0,r.kw)((0,a.Z)(),p),[]);var m=(0,r.hd)(c),f=(0,r.jM)(c),h=(0,r.dz)(c),v=(0,r.xe)(c);function _(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),m).replace(new RegExp("#BASE_URL","g"),v).replace(new RegExp("#RECORD_ID","g"),f).replace(new RegExp("#RECORD_TITLE","g"),h)}var g=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?_(e):e})),y=_(u);return o.createElement("div",{className:(0,i.Z)(d)},o.createElement(l.Z,{title:y,language:n},g))}},4757:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t,n=e.method,r=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(2389),i=n(3725),o=n(6010);const d="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,s=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),_=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),b=y.tabGroupChoices,k=y.setTabGroupChoices,x=(0,r.useState)(g),E=x[0],R=x[1],T=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=b[m];null!=w&&w!==E&&v.some((function(e){return e.value===w}))&&R(w)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==E&&(N(t),R(a),null!=m&&k(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function s(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>_,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(4757),o=n(9877),d=n(8215),u=n(7859),s=["components"],c={id:"attachment",title:"Attachment Field Value",sidebar_label:"Attachment"},p=void 0,m={unversionedId:"api/resource/field-value/attachment",id:"api/resource/field-value/attachment",title:"Attachment Field Value",description:"A attachment field value consists of its value property which holds a reference to an attachment. An attachment has the properties id (unique ID), filename (the filename), size (filesize in bytes), download_url (URL to download the file) and others.",source:"@site/docs/api/resource/field-value/attachment.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/attachment",permalink:"/docs/api/resource/field-value/attachment",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/attachment.md",tags:[],version:"current",frontMatter:{id:"attachment",title:"Attachment Field Value",sidebar_label:"Attachment"},sidebar:"mainSidebar",previous:{title:"Relation",permalink:"/docs/api/resource/field-value/relation"},next:{title:"Checklist",permalink:"/docs/api/resource/field-value/checklist"}},f={},h=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],v={toc:h};function _(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A attachment field value consists of its ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property which holds a reference to an attachment. An attachment has the properties ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," (unique ID), ",(0,l.kt)("inlineCode",{parentName:"p"},"filename")," (the filename), ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," (filesize in bytes), ",(0,l.kt)("inlineCode",{parentName:"p"},"download_url")," (URL to download the file) and others.\nA ",(0,l.kt)("inlineCode",{parentName:"p"},"single_attachment")," field value holds at most one attachment reference while a ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_attachment")," field value can hold multiple attachment references."),(0,l.kt)("p",null,"More details on the file object and the two-step file upload process can be found ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/resource/file"},"here"),"."),(0,l.kt)("h2",{id:"record-creation"},"Record creation"),(0,l.kt)(i.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,'A attachment field value can be created as part of a record creation. Here is an example request body for creating a record with a value for the "Letter of recommendation" field with ID 2, type ',(0,l.kt)("inlineCode",{parentName:"p"},"single_attachment")," and external ID ",(0,l.kt)("inlineCode",{parentName:"p"},"letter_of_recommendation"),' and a value for the "HR documents" field with ID 3, type ',(0,l.kt)("inlineCode",{parentName:"p"},"multi_attachment")," and external ID ",(0,l.kt)("inlineCode",{parentName:"p"},"hr_documents"),":"),(0,l.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-1",\n      "hr_documents": ["temporary-file-2", "temporary-file-3"]\n    }\n  }\' \n')),(0,l.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "letter_of_recommendation": "temporary-file-1",\n    "hr_documents": ["temporary-file-2", "temporary-file-3"]\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "user",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 101,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "value": {\n            "user_id": 102,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,l.kt)(i.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A attachment field value can be retrieved as part of a record retrieval:"),(0,l.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "user",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 101,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "value": {\n            "user_id": 102,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"record-update"},"Record update"),(0,l.kt)(i.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"One or more attachment field values can be updated as part of a record update. Both existing IDs (integers) as well as temporary file IDs (strings) can be provided as input.\nHere is an example request body for updating multiple attachment field values of a record:"),(0,l.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-2",\n      "hr_documents": ["temporary-file-6", 102]\n    }\n  }\' \n')),(0,l.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "letter_of_recommendation": "temporary-file-2",\n    "hr_documents": ["temporary-file-6", 102]\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Delaney Beatty",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "user",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "user_id": 2,\n            "mail": ["delaney@tapeapp.com"],\n            "image": null,\n            "name": "Delaney Beatty",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 102,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}_.isMDXComponent=!0}}]);