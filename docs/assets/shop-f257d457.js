import{_ as v,d as f,o as d,h as i,i as e,F as a,ad as u,a2 as y,a6 as s,af as t,a$ as p,bj as r,bk as m,bl as k,b as h}from"./index-1ed31e3c.js";const V=f({data(){return{shops:[{id:1,name:"shopA",area:1e3},{id:2,name:"shopB",area:800},{id:3,name:"shopC",area:888}],msg:"abc",checkedNames:[],selected:"",selecteds:[],picked:"",question:"",answer:"Questions usually contain a question mark. ;-)"}},methods:{del(o,n){console.log(o,n)},onSubmit(){console.log("submit")}},watch:{question:{hanlder(o,n){console.log(o,n)},deep:!0}}}),g=e("div",{class:"shops"},"连锁店CURD",-1),C=["onClick"],U=e("button",null,"提交",-1),w=[U],N=e("label",{for:"jack"},"Jack",-1),S=e("label",{for:"john"},"John",-1),q=e("label",{for:"one"},"One",-1),B=e("label",{for:"two"},"Two",-1),j=e("option",{disabled:"",value:""},"Please select one",-1),M=e("option",null,"A",-1),$=e("option",null,"B",-1),A=e("option",null,"C",-1),J=[j,M,$,A],T=e("option",null,"A",-1),D=e("option",null,"B",-1),F=e("option",null,"C",-1),O=[T,D,F];function P(o,n,R,z,E,L){return d(),i(a,null,[g,e("ul",null,[(d(!0),i(a,null,u(o.shops,(l,c)=>(d(),i("li",{key:l.id},[h(s(c)+":店名:"+s(l.name)+",面积"+s(l.area),1),e("button",{onClick:b=>o.del(l,b)},"删除",8,C)]))),128))]),(d(),i(a,null,u(10,l=>e("span",null,s(l),1)),64)),e("form",{action:"#",onSubmit:n[0]||(n[0]=y((...l)=>o.onSubmit&&o.onSubmit(...l),["prevent"]))},w,32),e("h3",null,"数据双向绑定（表单）"+s(o.msg),1),t(e("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=l=>o.msg=l)},null,512),[[p,o.msg,void 0,{lazy:!0}]]),e("div",null,"Checked names: "+s(o.checkedNames),1),t(e("input",{type:"checkbox",id:"jack",value:"Jack","onUpdate:modelValue":n[2]||(n[2]=l=>o.checkedNames=l)},null,512),[[r,o.checkedNames]]),N,t(e("input",{type:"checkbox",id:"john",value:"John","onUpdate:modelValue":n[3]||(n[3]=l=>o.checkedNames=l)},null,512),[[r,o.checkedNames]]),S,e("div",null,"Picked: "+s(o.picked),1),t(e("input",{type:"radio",id:"one",value:"One","onUpdate:modelValue":n[4]||(n[4]=l=>o.picked=l)},null,512),[[m,o.picked]]),q,t(e("input",{type:"radio",id:"two",value:"Two","onUpdate:modelValue":n[5]||(n[5]=l=>o.picked=l)},null,512),[[m,o.picked]]),B,e("div",null,"Selected: "+s(o.selected),1),t(e("select",{"onUpdate:modelValue":n[6]||(n[6]=l=>o.selected=l)},J,512),[[k,o.selected]]),e("div",null,"Selected: "+s(o.selecteds),1),t(e("select",{"onUpdate:modelValue":n[7]||(n[7]=l=>o.selecteds=l),multiple:""},O,512),[[k,o.selecteds]]),e("p",null,[h(" Ask a yes/no question: "),t(e("input",{"onUpdate:modelValue":n[8]||(n[8]=l=>o.question=l)},null,512),[[p,o.question]])])],64)}const G=v(V,[["render",P]]);export{G as default};
