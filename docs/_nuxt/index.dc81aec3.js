import{g as T,_ as h}from"./goToProject.33a5358f.js";import{a as k,v as e,r as g,b as V,x as j,f as a,h as w,F as _,i as d,u as r,j as v,y as I,o as n,z as f,A as P,l as A}from"./entry.999c8d96.js";import{b as O}from"./getDataFromHemApi.9a636db2.js";const B={class:"v-index__tag"},N={key:0,class:"fp-grid-coll-container fp-grid-with-gutter"},z={key:0,class:"v-index__items"},D=k({__name:"index",setup(E){const m=e().$state.tags,p=g("default"),c=g(null);let l=g(null);V(()=>{x(),j(()=>{b()})});async function x(){l.value=await O(),console.log(l.value)}function b(){if(!(c.value instanceof HTMLElement))return;new IntersectionObserver(t=>{for(const u of t)e().tagsAreVisibleInIndexPage=u.isIntersecting}).observe(c.value)}function y(o){e().toggleActiveTag(o)}function C({category:o,tags:t}){return e().activeCategory.length<1&&e().activeTag.length<1||e().activeCategory.length>0&&o===e().activeCategory?!0:!!(e().activeTag.length>0&&t.includes(e().activeTag))}return(o,t)=>{const u=h;return n(),a("div",{class:I(["v-index",r(p)])},[w("div",{class:"v-index__tags fp-grid-with-gutter",ref_key:"tagsContainer",ref:c},[(n(!0),a(_,null,d(r(m),s=>(n(),a("div",B,[f(P,{onClicked:t[0]||(t[0]=i=>y(i)),name:s,"is-active":r(e)().activeTag===s},null,8,["name","is-active"])]))),256))],512),r(l)?(n(),a("div",N,[(n(!0),a(_,null,d(r(l).projects,s=>(n(),a(_,null,[C({tags:s.themes.map(i=>i.title),category:s.axes[0].title})?(n(),a("div",z,[f(u,{"project-info":s,onCartelClicked:t[1]||(t[1]=i=>r(T)(i))},null,8,["project-info"])])):v("",!0)],64))),256))])):v("",!0)],2)}}});const S=A(D,[["__scopeId","data-v-aebe8cb9"]]);export{S as default};
