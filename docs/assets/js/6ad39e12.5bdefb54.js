"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6984],{4757:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294);function d(e){var t,a=e.method,d=e.url;switch(a){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return n.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},n.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},a.toUpperCase()),n.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},d))}},8680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>_,toc:()=>f});var n=a(7462),d=a(3366),r=(a(7294),a(3905)),l=a(4757),i=a(9877),o=a(8215),s=a(7859),p=["components"],u={id:"date",title:"Date Field Value",sidebar_label:"Date"},c=void 0,_={unversionedId:"api/resource/field-value/date",id:"api/resource/field-value/date",title:"Date Field Value",description:"A date field value consists of its value property which holds a start date and optionally an end date. A start date has the properties start (datetime string), startdate (date string), starttime (HHss formatted string), an end date is structured in the same way. A singledate field value can only hold a start date while a rangedate field value can hold an additional end date.",source:"@site/docs/api/resource/field-value/date.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/date",permalink:"/docs/api/resource/field-value/date",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/date.md",tags:[],version:"current",frontMatter:{id:"date",title:"Date Field Value",sidebar_label:"Date"},sidebar:"mainSidebar",previous:{title:"Category",permalink:"/docs/api/resource/field-value/category"},next:{title:"Relation",permalink:"/docs/api/resource/field-value/relation"}},m={},f=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],g={toc:f};function k(e){var t=e.components,a=(0,d.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A date field value consists of its ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property which holds a start date and optionally an end date. A start date has the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," (datetime string), ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date")," (date string), ",(0,r.kt)("inlineCode",{parentName:"p"},"start_time")," (HH:mm:ss formatted string), an end date is structured in the same way. A ",(0,r.kt)("inlineCode",{parentName:"p"},"single_date")," field value can only hold a start date while a ",(0,r.kt)("inlineCode",{parentName:"p"},"range_date")," field value can hold an additional end date."),(0,r.kt)("p",null,"More details on date and datetime strings can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/date-timezone"},"here"),"."),(0,r.kt)("h2",{id:"record-creation"},"Record creation"),(0,r.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,'A date field value can be created as part of a record creation. Here is an example request body for creating a record with a value for the "Date of employment" field with ID 2, type ',(0,r.kt)("inlineCode",{parentName:"p"},"single_date")," and external ID ",(0,r.kt)("inlineCode",{parentName:"p"},"date_of_employment"),' and a value for the "Onboarding week" field with ID 3, type ',(0,r.kt)("inlineCode",{parentName:"p"},"range_date")," and external ID ",(0,r.kt)("inlineCode",{parentName:"p"},"onboarding_week"),":"),(0,r.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "date_of_employment": "2022-03-01",\n      "onboarding_week": "2022-03-07 - 2022-03-14"\n    }\n  }\' \n')),(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "date_of_employment": "2022-03-01",\n    "onboarding_week": "2022-03-07 - 2022-03-14"\n  }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Tuesday, 1. March 2022",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "date_of_employment",\n      "label": "Date of employment",\n      "type": "date",\n      "field_type": "single_date",\n      "values": [\n        {\n          "start": "2022-03-01 00:00:00",\n          "start_date": "2022-03-01",\n          "start_time": null,\n          "start_utc": "2022-03-01 00:00:00",\n          "start_date_utc": "2022-03-01",\n          "start_time_utc": null\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "onboarding_week",\n      "label": "Onboarding week",\n      "field_type": "range_date",\n      "type": "date",\n      "values": [\n        {\n          "start": "2022-03-07 00:00:00",\n          "start_date": "2022-03-07",\n          "start_time": "00:00:00",\n          "start_utc": "2022-03-07 00:00:00",\n          "start_date_utc": "2022-03-07",\n          "start_time_utc": "00:00:00",\n          "end": "2022-03-14 00:00:00",\n          "end_date": "2022-03-14",\n          "end_time": "00:00:00",\n          "end_utc": "2022-03-14 00:00:00",\n          "end_date_utc": "2022-03-14",\n          "end_time_utc": "00:00:00"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,r.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"A date field value can be retrieved as part of a record retrieval:"),(0,r.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tuesday, 1. March 2022",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "date_of_employment",\n      "label": "Date of employment",\n      "type": "date",\n      "field_type": "single_date",\n      "values": [\n        {\n          "start": "2022-03-01 00:00:00",\n          "start_date": "2022-03-01",\n          "start_time": null,\n          "start_utc": "2022-03-01 00:00:00",\n          "start_date_utc": "2022-03-01",\n          "start_time_utc": null\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "onboarding_week",\n      "label": "Onboarding week",\n      "field_type": "range_date",\n      "type": "date",\n      "values": [\n        {\n          "start": "2022-03-07 00:00:00",\n          "start_date": "2022-03-07",\n          "start_time": "00:00:00",\n          "start_utc": "2022-03-07 00:00:00",\n          "start_date_utc": "2022-03-07",\n          "start_time_utc": "00:00:00",\n          "end": "2022-03-14 00:00:00",\n          "end_date": "2022-03-14",\n          "end_time": "00:00:00",\n          "end_utc": "2022-03-14 00:00:00",\n          "end_date_utc": "2022-03-14",\n          "end_time_utc": "00:00:00"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"record-update"},"Record update"),(0,r.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"One or more date field values can be updated as part of a record update. Here is an example request body for updating multiple date field values of a record:"),(0,r.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n        "date_of_employment": "2022-03-02",\n        "onboarding_week": "2022-03-08 - 2022-03-15"\n    }\n  }\' \n')),(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "date_of_employment": "2022-03-02",\n    "onboarding_week": "2022-03-08 - 2022-03-15"\n  }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Wednesday, 2. March 2022",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "date_of_employment",\n      "label": "Date of employment",\n      "type": "date",\n      "field_type": "single_date",\n      "values": [\n        {\n          "start": "2022-03-02 00:00:00",\n          "start_date": "2022-03-02",\n          "start_time": null,\n          "start_utc": "2022-03-02 00:00:00",\n          "start_date_utc": "2022-03-02",\n          "start_time_utc": null\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "onboarding_week",\n      "label": "Onboarding week",\n      "field_type": "range_date",\n      "type": "date",\n      "values": [\n        {\n          "start": "2022-03-08 00:00:00",\n          "start_date": "2022-03-08",\n          "start_time": "00:00:00",\n          "start_utc": "2022-03-08 00:00:00",\n          "start_date_utc": "2022-03-08",\n          "start_time_utc": "00:00:00",\n          "end": "2022-03-15 00:00:00",\n          "end_date": "2022-03-15",\n          "end_time": "00:00:00",\n          "end_utc": "2022-03-15 00:00:00",\n          "end_date_utc": "2022-03-15",\n          "end_time_utc": "00:00:00"\n        }\n      ]\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);