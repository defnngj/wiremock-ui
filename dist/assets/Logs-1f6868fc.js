import{d as A,l as v,s as H,u as U,G as R,H as F,I as B,r as n,c as d,e as i,b as e,w as l,o as c,i as J,y as m,h as _,t as b,K as G,v as K,F as O,f as Q,x as P,Q as W,g as M,j as X,R as Y,A as Z,_ as ee}from"./index-f6f51fa2.js";import{h as T,E as S,m as le}from"./style-28de6fc1.js";const te=(y,o)=>T({url:`${y}/__admin/requests`,method:"get",params:o}),se=y=>T({url:`${y}/__admin/requests`,method:"delete"}),ae={class:"logs-list"},oe={key:0,class:"empty-data"},ne={key:1},ce={key:0,class:"empty-data"},ue={key:1},de={class:"total-num"},_e=["onClick"],re={class:"first"},ie={class:"logged-date"},me={class:"second"},pe={class:"item-url"},fe=A({__name:"Logs",setup(y){const o=v({limit:"20",since:""}),g=v([]),C=v(-1),h=v({}),D=v(0),{currentMockUrl:p}=H(U());R(()=>{r(!1)}),F(p,(u,t)=>{p.value?r(!1):g.value=[]});const L=()=>{Y.alert("此操作将删除所有日志, 是否继续?","提示",{showClose:!1,showCancelButton:!0,type:"warning",callback:u=>{u==="confirm"&&se(p.value).then(()=>{B({type:"success",message:"删除成功"}),r(!1)}).catch(t=>{S.create(t).end()})}})},r=async u=>{const t=p.value;if(t!=null&&t.trim()!==""){for(let s in o.value)o.value[s]===""&&delete o.value[s];await te(t,o.value).then(s=>{C.value=-1,h.value={},g.value=s.requests,D.value=s.meta.total,u&&B({type:"success",message:"刷新成功"})}).catch(s=>{S.create(s).end()})}},N=(u,t)=>{C.value=t,h.value=Z(u)};return(u,t)=>{const s=n("el-form-item"),f=n("el-option"),$=n("el-select"),z=n("el-date-picker"),E=n("el-button"),I=n("el-form"),w=n("el-col"),k=n("el-row"),V=n("el-tag"),q=n("el-scrollbar"),j=n("json-viewer");return c(),d("div",ae,[i(J)(i(p))?(c(),d("div",oe,"请先选择一个项目")):(c(),d("div",ne,[g.value.length?(c(),d("div",ue,[e(k,null,{default:l(()=>[e(w,{span:24,class:"top-tools"},{default:l(()=>[e(I,{inline:!0,class:"form-inline",size:"small",model:o.value},{default:l(()=>[e(s,null,{default:l(()=>[m(" 总数："),_("span",de,b(D.value),1)]),_:1}),e(s,{label:"查询条数"},{default:l(()=>[e($,{modelValue:o.value.limit,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.limit=a),placeholder:"请选择查询条数",class:"tools-filter",onChange:t[1]||(t[1]=a=>r(!0))},{default:l(()=>[e(f,{label:"20",value:"20",key:"20"}),e(f,{label:"40",value:"40",key:"40"}),e(f,{label:"60",value:"60",key:"60"}),e(f,{label:"80",value:"80",key:"80"}),e(f,{label:"100",value:"100",key:"100"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"查询日期"},{default:l(()=>[e(z,{modelValue:o.value.since,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value.since=a),type:"datetime",placeholder:"选择日期时间",class:"tools-filter",onChange:t[3]||(t[3]=a=>r(!0))},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(E,{icon:i(G),type:"warning",onClick:t[4]||(t[4]=a=>r(!0))},{default:l(()=>[m("刷新")]),_:1},8,["icon"])]),_:1}),e(s,null,{default:l(()=>[e(E,{icon:i(K),type:"danger",onClick:L},{default:l(()=>[m("删除所有日志")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(w,{span:5,class:"left-list"},{default:l(()=>[e(q,{class:"list-content"},{default:l(()=>[_("ul",null,[(c(!0),d(O,null,Q(g.value,(a,x)=>(c(),d("li",{key:x,onClick:ve=>N(a,x),class:P(C.value===x?"content-item select":"content-item")},[_("div",null,[_("label",re,[_("span",ie,b(i(W)(a.request.loggedDate)),1),a.wasMatched?(c(),M(V,{key:0,size:"small",type:"success",class:"matched"},{default:l(()=>[m("MATCHED")]),_:1})):(c(),M(V,{key:1,size:"small",type:"danger",class:"matched"},{default:l(()=>[m("UNMATCHED")]),_:1}))]),_("label",me,[e(V,{size:"small",type:i(le)(a.request.method)},{default:l(()=>[m(b(a.request.method),1)]),_:2},1032,["type"]),_("span",pe,b(a.request.url),1)])])],10,_e))),128))])]),_:1})]),_:1}),JSON.stringify(h.value)!=="{}"?(c(),M(w,{key:0,span:19,class:"right-detail"},{default:l(()=>[e(q,{class:"json-detail"},{default:l(()=>[e(k,null,{default:l(()=>[e(k,null,{default:l(()=>[e(j,{value:h.value,copyable:{copyText:"复制",copiedText:"已复制"},"expand-depth":5},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})):X("",!0)]),_:1})])):(c(),d("div",ce,"暂无数据"))]))])}}});const he=ee(fe,[["__scopeId","data-v-dca1297e"]]);export{he as default};
