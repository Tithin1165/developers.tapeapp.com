"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5896],{4757:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);function r(e){var n,t=e.method,r=e.url;switch(t){case"GET":n="#007959";break;case"POST":n="#0071BB";break;case"PUT":n="#DEA700";break;case"DELETE":n="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:n,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},t.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},8215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7462),r=t(7294),o=t(2389),l=t(3725),i=t(6010);const p="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,s=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),g=y.tabGroupChoices,T=y.setTabGroupChoices,x=(0,r.useState)(b),_=x[0],w=x[1],N=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==_&&f.some((function(e){return e.value===E}))&&w(E)}var R=function(e){var n=e.currentTarget,t=N.indexOf(n),a=f[t].value;a!==_&&(C(n),w(a),null!=m&&T(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.currentTarget)-1;t=N[r]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:R,onClick:R},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function s(e){var n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},5480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=t(4757),i=t(9877),p=t(8215),u=t(7859),s=["components"],d={id:"phone",title:"Phone Field Value",sidebar_label:"Phone"},c=void 0,m={unversionedId:"api/resource/field-value/phone",id:"api/resource/field-value/phone",title:"Phone Field Value",description:"A phone field value consists of its value property which holds one or multiple phone number entries. An entry contains the phone number itself, plus its type, e.g. work or home.",source:"@site/docs/api/resource/field-value/phone.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/phone",permalink:"/docs/api/resource/field-value/phone",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/phone.md",tags:[],version:"current",frontMatter:{id:"phone",title:"Phone Field Value",sidebar_label:"Phone"},sidebar:"mainSidebar",previous:{title:"Email",permalink:"/docs/api/resource/field-value/email"},next:{title:"Record Comment",permalink:"/docs/api/resource/record-comment"}},h={},v=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],f={toc:v};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A phone field value consists of its ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property which holds one or multiple phone number entries. An entry contains the phone number itself, plus its type, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"work")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"home"),"."),(0,o.kt)("p",null,"Currently the following values are allowed as type: ",(0,o.kt)("inlineCode",{parentName:"p"},"work"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"work_fax"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"home"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"home_fax"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"other"),". If no type is provided, phone address entries always default to ",(0,o.kt)("inlineCode",{parentName:"p"},"work"),"."),(0,o.kt)("h2",{id:"record-creation"},"Record creation"),(0,o.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"A phone field value can be created as part of a record creation. It is possible to provide either a string, an object following the phone number entry structure or an array of those two. It is advised to use an array of objects for the best accuracy of the provided data."),(0,o.kt)("p",null,'Here is an example request body for creating a record with a value for the "Customer phone" field with ID 2, type ',(0,o.kt)("inlineCode",{parentName:"p"},"multi_phone")," and external ID ",(0,o.kt)("inlineCode",{parentName:"p"},"customer_phone")," :"),(0,o.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_phone": \n        [\n          {"type": "work", "phone": "+1 444 555"},\n          {"type": "home", "phone": "+1 777 111"}\n        ]\n    }\n  }\' \n')),(0,o.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_phone": [\n      { "type": "work", "phone": "+1 444 555" },\n      { "type": "home", "phone": "+1 777 111" }\n    ]\n  }\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_phone",\n      "label": "Customer phone",\n      "type": "phone",\n      "field_type": "multi_phone",\n      "values": [\n        {\n          "id": 100,\n          "value": "+1 444 555",\n          "type": "work"\n        },\n        {\n          "id": 101,\n          "value": "+1 777 111",\n          "type": "home"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Note that the individual phone number entries contain an ID. Be sure to include them in updates, to keep existing phone entries. If you omit the ID, new entries will be created instead and the respective existing ones will be removed."),(0,o.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,o.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"A phone field value can be retrieved as part of a record retrieval:"),(0,o.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_phone",\n      "label": "Customer phone",\n      "type": "phone",\n      "field_type": "multi_phone",\n      "values": [\n        {\n          "id": 100,\n          "value": "+1 444 555",\n          "type": "work"\n        },\n        {\n          "id": 101,\n          "value": "+1 777 111",\n          "type": "home"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"record-update"},"Record update"),(0,o.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"One or more phone field values can be updated as part of a record update, and individual entries can be updated via their ID. Here is an example request body for updating the phone entries of a phone field with external ID ",(0,o.kt)("inlineCode",{parentName:"p"},"customer_phone")," of a record:"),(0,o.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_phone": \n      [\n        { "id": 100, "type": "work", "phone": "+1 444 333" },\n        { "type": "other", "phone": "+1 888 888" }\n      ]\n    }\n  }\' \n')),(0,o.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_phone": [\n      { "id": 100, "type": "work", "phone": "+1 444 333" },\n      { "type": "other", "phone": "+1 888 888" }\n    ]\n  }\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_phone",\n      "label": "Customer phone",\n      "type": "phone",\n      "field_type": "multi_phone",\n      "values": [\n        {\n          "id": 100,\n          "value": "+1 444 333",\n          "type": "work"\n        },\n        {\n          "id": 102,\n          "value": "+1 888 888",\n          "type": "other"\n        }\n      ]\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);