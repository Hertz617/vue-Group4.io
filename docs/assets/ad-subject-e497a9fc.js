import{_ as f,d as _,o as j,h as y,i as d,a as t,w as l,F as I,g as C,j as V,k as B,b as p,l as E,e as S,f as F,E as k}from"./index-1ed31e3c.js";import{E as T,a as v}from"./el-select-d613de18.js";import{s as w,a as D}from"./subject-ddd32c29.js";/* empty css                   */import{c as P}from"./cloneDeep-d951e9a5.js";const $=_({data(){return{searchText:"",subjects:[],subject:[],currentCtrl:0,page:{total:0,current:2,size:10},dialogFormVisible:!1,dialogFormVisibleById:!1,Subject:{attachment:"",fee:0,finished:"",id:0,level:"",name:"",origin:"",participant:"",period:"",subjectNo:"",type:"",userId:0},formLabelWidth:80}},mounted(){this.getSubjectsPage(1)},methods:{toEdit(e){this.dialogFormVisible=!0,this.Subject=P(e)},getSubjectsPage(e){w({current:e,size:4}).then(s=>{const n=s.data.page;this.subjects=n.records,this.page=n}).catch(s=>{console.log(s)})},refresh(){this.getSubjectsPage(1),this.currentCtrl=0},getSubjectsById(e){this.currentCtrl=1,this.subject=[],D({id:e}).then(s=>{console.log(s),this.dialogFormVisibleById=!1;const n=s.data;this.subjects=n.subjects,this.page=n}).catch(s=>{T("查询失败，没有该课题"),this.refresh(),console.log(s)})},currentchange(e){this.currentCtrl==0?(this.getSubjectsPage(e),this.page.current=e):(this.getSubjectsById(this.searchText),this.page.current=e)},selectById(){this.dialogFormVisibleById=!0},refresh(){this.getSubjectsPage(1)}}}),z={class:"subjects"},N={class:"subject-tools"},U={class:"dialog-footer"};function L(e,o,s,n,M,W){const i=C,a=E,c=V,u=v,m=S,g=F,b=k,h=B;return j(),y(I,null,[d("div",z,[d("div",N,[t(i,{type:"warning",onClick:e.selectById},{default:l(()=>[p("按负责人ID查询数据")]),_:1},8,["onClick"]),t(i,{type:"warning",onClick:e.refresh},{default:l(()=>[p("刷新查询")]),_:1},8,["onClick"])]),t(c,{data:e.subjects,style:{width:"100%"}},{default:l(()=>[t(a,{fixed:"",prop:"id",label:"编号",width:"60",align:"center"}),t(a,{prop:"name",label:"课题名称"}),t(a,{prop:"userId",label:"负责人"}),t(a,{prop:"origin",label:"课题来源"}),t(a,{prop:"fee",label:"课题费用"}),t(a,{prop:"finished",label:"是否结项"}),t(a,{prop:"participant",label:"参与者"}),t(a,{prop:"period",label:"课题周期"}),t(a,{prop:"level",label:"课题等级"}),t(a,{prop:"subjectNo",label:"课题编号"}),t(a,{prop:"type",label:"课题类型"}),t(a,{prop:"attachment",label:"佐证材料"})]),_:1},8,["data"]),t(u,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(h,{modelValue:e.dialogFormVisibleById,"onUpdate:modelValue":o[3]||(o[3]=r=>e.dialogFormVisibleById=r),title:"ID查询"},{footer:l(()=>[d("span",U,[t(i,{onClick:o[1]||(o[1]=r=>e.dialogFormVisibleById=!1)},{default:l(()=>[p("Cancel")]),_:1}),t(i,{type:"primary",onClick:o[2]||(o[2]=r=>e.getSubjectsById(e.searchText))},{default:l(()=>[p("查询 ")]),_:1})])]),default:l(()=>[t(b,{model:e.Subject},{default:l(()=>[t(g,{label:"请输入负责人ID","label-width":120},{default:l(()=>[t(m,{modelValue:e.searchText,"onUpdate:modelValue":o[0]||(o[0]=r=>e.searchText=r),placeholder:"按ID搜索，请输入ID",style:{"margin-bottom":"20px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const K=f($,[["render",L]]);export{K as default};