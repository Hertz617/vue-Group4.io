import{_ as C,d as c,o as U,h as F,i as b,a as l,w as t,F as v,g as E,j as k,k as B,b as p,l as L,e as D,f as T,E as $}from"./index-1ed31e3c.js";import{E as S}from"./el-date-picker-c767ab16.js";import{E as m,a as W,b as z,c as A}from"./el-select-d613de18.js";import{G as N,g as O,a as G,b as j,c as M}from"./paper-6e105f47.js";import{c as q}from"./cloneDeep-d951e9a5.js";import"./index-f4cb1fd9.js";const H=c({data(){return{papers:[],paper:[],pi:[],searchText:"",userId:"",fileList:"",page:{total:0,current:1,size:10},dialogFormVisible:!1,dialogFormVisibleById:!1,dialogFormVisibleByUserId:!1,Paper:{attachment:"",count:0,id:0,name:"",publication:"",publicationCate:"",publishTime:"",type:"",userId:parseInt(localStorage.getItem("UserID"))},formLabelWidth:80}},mounted(){this.getPapers(parseInt(localStorage.getItem("UserID")))},methods:{toEdit(e){this.dialogFormVisible=!0,this.Paper=q(e)},currentchange(e){this.getPapers(parseInt(localStorage.getItem("UserID"))),this.page.current=e},getPaperById(e){console.log(e),this.paper=[],N({id:e}).then(s=>{this.dialogFormVisibleById=!1,this.paper.push(s.data.paper);const f=this.paper;this.papers=f})},getPapers(e){this.papers=[],O({id:e}).then(s=>{this.dialogFormVisibleByUserId=!1,console.log(s);const f=s.data;this.papers=f.papers,this.page=f}).catch(s=>{m("您尚未上传论文")})},del(e){confirm("是否删除")==!0&&(console.log(e),G({id:e}).then(s=>{if(s.success)this.getPapers(parseInt(localStorage.getItem("UserID")));else return m("删除失败，请联系管理员"),!1}).catch(s=>{}))},toAdd(){this.dialogFormVisible=!0,this.Paper={attachment:"",count:0,id:0,name:"",publication:"",publicationCate:"",publishTime:"",type:"",userId:parseInt(localStorage.getItem("UserID"))}},searchById(){this.dialogFormVisibleById=!0},searchByUserId(){this.dialogFormVisibleByUserId=!0},save(){const e=this.Paper;e.id==0?j(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getPapers(parseInt(localStorage.getItem("UserID"))),m(a.msg);else return m(a.msg),!1}).catch(a=>{m("网络错误联系管理员")}):M(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getPapers(parseInt(localStorage.getItem("UserID"))),m(a.msg);else return m(a.msg),!1}).catch(a=>{m("网络错误联系管理员")})}}}),J={class:"head"},K={class:"Paper-tools"},Q={class:"dialog-footer"},R={class:"dialog-footer"},X={class:"dialog-footer"};function Y(e,a,s,f,Z,_){const r=E,i=L,I=k,P=W,u=D,d=T,n=z,V=A,y=S,g=$,h=B;return U(),F(v,null,[b("div",J,[b("div",K,[l(r,{type:"warning",onClick:e.toAdd},{default:t(()=>[p("添加")]),_:1},8,["onClick"])]),l(I,{data:e.papers,style:{width:"100%"}},{default:t(()=>[l(i,{fixed:"",prop:"id",label:"论文编号",width:"80"}),l(i,{prop:"name",label:"论文题目",width:"120"}),l(i,{prop:"publication",label:"刊物",width:"120"}),l(i,{prop:"publicationCate",label:"刊物种类",width:"120"}),l(i,{prop:"publishTime",label:"发表时间",width:"120"}),l(i,{prop:"type",label:"论文类型",width:"120"}),l(i,{prop:"userId",label:"作者编号",width:"80"}),l(i,{prop:"attachment",label:"佐证材料",width:"300"}),l(i,{prop:"count",label:"引用次数",width:"120"}),l(i,{fixed:"right",label:"Operations",width:"120"},{default:t(o=>[l(r,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(o.row)},{default:t(()=>[p("更新")]),_:2},1032,["onClick"]),l(r,{link:"",type:"primary",size:"small",onClick:w=>e.del(o.row.id)},{default:t(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(P,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(h,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[9]||(a[9]=o=>e.dialogFormVisible=o),title:"论文编辑"},{footer:t(()=>[b("span",Q,[l(r,{onClick:a[7]||(a[7]=o=>e.dialogFormVisible=!1)},{default:t(()=>[p("Cancel")]),_:1}),l(r,{type:"primary",onClick:a[8]||(a[8]=o=>e.save())},{default:t(()=>[p(" 保存 ")]),_:1})])]),default:t(()=>[l(g,{model:e.Paper},{default:t(()=>[l(d,{label:"论文题目","label-width":e.formLabelWidth},{default:t(()=>[l(u,{modelValue:e.Paper.name,"onUpdate:modelValue":a[0]||(a[0]=o=>e.Paper.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"刊物","label-width":e.formLabelWidth},{default:t(()=>[l(u,{modelValue:e.Paper.publication,"onUpdate:modelValue":a[1]||(a[1]=o=>e.Paper.publication=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"刊物种类","label-width":e.formLabelWidth},{default:t(()=>[l(V,{modelValue:e.Paper.publicationCate,"onUpdate:modelValue":a[2]||(a[2]=o=>e.Paper.publicationCate=o),placeholder:"请选择刊物种类",autocomplete:"off"},{default:t(()=>[l(n,{label:"核心期刊",value:"核心期刊"}),l(n,{label:"国际会议",value:" 国际会议"}),l(n,{label:"SCI",value:"SCI"}),l(n,{label:"EI",value:"EI"}),l(n,{label:"本科学报",value:"本科学报"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"发表时间","label-width":e.formLabelWidth},{default:t(()=>[l(y,{modelValue:e.Paper.publishTime,"onUpdate:modelValue":a[3]||(a[3]=o=>e.Paper.publishTime=o),type:"date",placeholder:"Pick a day",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"论文类型","label-width":e.formLabelWidth},{default:t(()=>[l(V,{modelValue:e.Paper.type,"onUpdate:modelValue":a[4]||(a[4]=o=>e.Paper.type=o),placeholder:"请选择论文类型",autocomplete:"off"},{default:t(()=>[l(n,{label:"科技类",value:"科技类"}),l(n,{label:"教改类",value:" 教改类"}),l(n,{label:"其他",value:"其他"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"佐证材料","label-width":e.formLabelWidth},{default:t(()=>[l(u,{modelValue:e.Paper.attachment,"onUpdate:modelValue":a[5]||(a[5]=o=>e.Paper.attachment=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"引用次数","label-width":e.formLabelWidth},{default:t(()=>[l(u,{modelValue:e.Paper.count,"onUpdate:modelValue":a[6]||(a[6]=o=>e.Paper.count=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(h,{modelValue:e.dialogFormVisibleById,"onUpdate:modelValue":a[13]||(a[13]=o=>e.dialogFormVisibleById=o),title:"根据论文编号查询"},{footer:t(()=>[b("span",R,[l(r,{onClick:a[11]||(a[11]=o=>e.dialogFormVisible=!1)},{default:t(()=>[p("Cancel")]),_:1}),l(r,{type:"primary",onClick:a[12]||(a[12]=o=>e.getPaperById(e.searchText))},{default:t(()=>[p("查询 ")]),_:1})])]),default:t(()=>[l(g,{model:e.paper},{default:t(()=>[l(d,{label:"请输入论文编号","label-width":e.formLabelWidth},{default:t(()=>[l(u,{modelValue:e.searchText,"onUpdate:modelValue":a[10]||(a[10]=o=>e.searchText=o),placeholder:"请输入论文ID",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(h,{modelValue:e.dialogFormVisibleByUserId,"onUpdate:modelValue":a[17]||(a[17]=o=>e.dialogFormVisibleByUserId=o),title:"根据作者编号查询"},{footer:t(()=>[b("span",X,[l(r,{onClick:a[15]||(a[15]=o=>e.dialogFormVisible=!1)},{default:t(()=>[p("Cancel")]),_:1}),l(r,{type:"primary",onClick:a[16]||(a[16]=o=>e.getPapers(e.fileList))},{default:t(()=>[p("查询 ")]),_:1})])]),default:t(()=>[l(g,{model:e.paper},{default:t(()=>[l(d,{label:"请输入作者编号","label-width":e.formLabelWidth},{default:t(()=>[l(u,{modelValue:e.fileList,"onUpdate:modelValue":a[14]||(a[14]=o=>e.fileList=o),placeholder:"请输入作者ID",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ie=C(H,[["render",Y]]);export{ie as default};