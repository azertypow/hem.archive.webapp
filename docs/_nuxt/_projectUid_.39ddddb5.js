import{a as w,f as o,h as e,u as s,F as r,i as v,t as n,B as R,y as L,o as i,p as k,k as C,l as M,r as f,b as S,x as U,C as F,e as D,z as q,j as p,c as x,q as B,A as z}from"./entry.575a7c81.js";import{i as A,a as H,_ as N,g as O}from"./goToProject.1a213b20.js";import{c as E}from"./getDataFromHemApi.18465da4.js";const V=""+new URL("downloading_FILL0_wght400_GRAD0_opsz24.baf9c80a.svg",import.meta.url).href,j=l=>(k("data-v-83e24270"),l=l(),C(),l),I={class:"fp-grid-coll-container"},G={class:"fp-grid-coll-12-24"},J={class:"v-app-header__left"},Z=["innerHTML"],K={class:"v-app-header__title"},Q=j(()=>e("div",null,[e("h5",null,"Responsable")],-1)),W=j(()=>e("div",{class:"v-app-header__partners"},[e("div",null,[e("h5",null,"Partenaires")]),e("div",null,[e("p",null,"Jean-Christophe Revel, CRR Paris"),e("p",null,"Mathieu Ferey , CNSM Lyon"),e("p",null,"Pierre Bornachot , Centre Culturel d’Ambronay"),e("p",null,"Nicolas Bucher, Centre de Musique Baroque de Versailles")])],-1)),X={class:"v-app-header__date"},Y=j(()=>e("div",null,[e("h5",null,"Période")],-1)),ee={class:"fp-grid-coll-12-24"},te=w({__name:"appHeader",props:{title:{},axesUid:{},responsables:{},date:{},cover:{}},setup(l){return(t,m)=>(i(),o("header",{class:L(["v-app-header",[s(H)(t.axesUid)]])},[e("div",I,[e("div",G,[e("div",J,[e("h1",{class:"",innerHTML:s(A)(t.title)},null,8,Z),e("div",null,[e("div",K,[Q,e("div",null,[(i(!0),o(r,null,v(t.responsables,h=>(i(),o("p",null,n(h.firstname),1))),256))])]),W,e("div",X,[Y,e("div",null,n(t.date),1)])])])]),e("div",ee,[e("div",{class:"v-app-header__right",style:R({backgroundImage:`url(${t.cover})`})},null,4)])])],2))}});const se=M(te,[["__scopeId","data-v-83e24270"]]),c=l=>(k("data-v-44d576b4"),l=l(),C(),l),ie={key:0,class:"v--project-uid__header"},oe=c(()=>e("h1",{style:{color:"white"}}," chargement… ",-1)),_e=[oe],ne={key:1,style:{color:"white"}},ae={class:"v--project-uid__header"},ce={class:"fp-grid-coll-container fp-grid-coll-container--center"},le=c(()=>e("div",{class:"fp-grid-coll-16-24"},[e("h2",null,"Résumé")],-1)),re={class:"fp-grid-coll-16-24"},de=["innerHTML"],ue={key:1,class:"v--project-uid__content__img"},pe=["alt","src"],ve={key:2,class:"v--project-uid__content__video"},he=["src"],me={key:0,class:"v--project-uid__details"},fe={class:"fp-grid-coll-container fp-grid-coll-container--center"},ge={class:"fp-grid-coll-16-24 hem-rm-margins"},je=c(()=>e("h2",null,"Fiche technique du projet",-1)),ye={class:"v--project-uid__details__item"},be=c(()=>e("div",{class:"v--project-uid__details__item__title"}," Responsable ",-1)),xe={class:"v--project-uid__details__item__content"},we={class:"v--project-uid__details__item"},Le=c(()=>e("div",{class:"v--project-uid__details__item__title"}," Partenaire ",-1)),ke={class:"v--project-uid__details__item__content"},Ce=["innerHTML"],Me={class:"v--project-uid__details__item"},He=c(()=>e("div",{class:"v--project-uid__details__item__title"}," Équipe ",-1)),Te={class:"v--project-uid__details__item__content"},$e=c(()=>e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae blanditiis cumque deleniti dignissimos doloribus, dolorum eaque excepturi exercitationem hic, id impedit iusto nemo perspiciatis quaerat quibusdam saepe vitae voluptatum?",-1)),Pe=["innerHTML"],Re={class:"v--project-uid__details__item"},Se=c(()=>e("div",{class:"v--project-uid__details__item__title"}," Période ",-1)),Ue={class:"v--project-uid__details__item__content"},Fe={class:"v--project-uid__details__item"},De=c(()=>e("div",{class:"v--project-uid__details__item__title"}," Financement ",-1)),qe={class:"v--project-uid__details__item__content"},Be=["innerHTML"],ze={class:"v--project-uid__details__item"},Ae=c(()=>e("div",{class:"v--project-uid__details__item__title"}," Thèmes ",-1)),Ne={class:"v--project-uid__details__item__content v--project-uid__details__item__content--is-list"},Oe={key:1,class:"v--project-uid__filesChapter-box"},Ee={class:"fp-grid-coll-container fp-grid-coll-container--center"},Ve={class:"fp-grid-coll-16-24"},Ie={class:"hem-rm-margins v--project-uid__filesChapter-box__chapter"},Ge={class:"v--project-uid__filesChapter-box__chapter__title"},Je=["innerHTML"],Ze={class:"fp-grid-coll-container v--project-uid__filesChapter-box__chapter__files"},Ke={class:"v--project-uid__filesChapter-box__chapter__files__coll"},Qe=["href","download"],We={class:"v--project-uid__filesChapter-box__chapter__files__item__name"},Xe={class:""},Ye=c(()=>e("div",null,[e("img",{class:"v--project-uid__download-icon",alt:"download icon",src:V})],-1)),et={class:"v--project-uid__connected"},tt={class:"v--project-uid__connected__item"},st={class:"v--project-uid__end-page"},it=w({__name:"[projectUid]",setup(l){const t=f(null),m=f(null),h=f(),y=f(!1);S(()=>{U(()=>{if(!(h.value instanceof HTMLElement))return;new IntersectionObserver(a=>{a.forEach(g=>{y.value&&g.isIntersecting&&F().go(-1)})}).observe(h.value)}),T().then(()=>y.value=!0)});async function T(){const d=D().params.projectUid;if(typeof d=="string"){const a=await E(d);"error"in a?m.value=a.error:t.value=a}}function $(d){const a=d.match(/[?&]v=([a-zA-Z0-9_-]+)/);return a?a[1]:null}return(d,a)=>{var b;const g=z,P=N;return i(),o("section",{class:L(["v--project-uid",[s(H)(((b=s(t))==null?void 0:b.axes[0].uid)||"interpretation-historique")]])},[s(t)===null?(i(),o("div",ie,_e)):s(m)?(i(),o("h1",ne,n(s(m)),1)):(i(),o(r,{key:2},[e("div",ae,[q(se,{axesUid:s(t).axes[0].uid,date:`${new Date(s(t).dateStart).toLocaleString("FR-fr",{month:"long",year:"numeric"})} - ${new Date(s(t).dateEnd).toLocaleString("FR-fr",{month:"long",year:"numeric"})}`,responsables:s(t).authors,title:s(t).title,cover:Object.values(s(t).cover)[0].resize.large},null,8,["axesUid","date","responsables","title","cover"])]),e("div",ce,[le,e("div",re,[(i(!0),o(r,null,v(s(t).content,_=>(i(),o(r,null,[_.type==="text"?(i(),o("div",{key:0,class:"v--project-uid__content__text hem-rm-margins",innerHTML:_.value},null,8,de)):p("",!0),_.type==="image"?(i(),o("div",ue,[e("img",{alt:_.alt,src:_.image.resize.small},null,8,pe),e("h6",null,n(_.caption),1)])):p("",!0),_.type==="video"?(i(),o("div",ve,[e("iframe",{width:"1280",height:"800",src:`https://www.youtube.com/embed/${$(_.content.url)}`,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,he),e("h6",null,n(_.content.caption),1)])):p("",!0)],64))),256))])]),s(t)?(i(),o("div",me,[e("div",fe,[e("div",ge,[je,e("div",ye,[be,e("div",xe,[(i(!0),o(r,null,v(s(t).authors,_=>(i(),o(r,null,[B(n(_.firstname)+" "+n(_.Name)+", ",1)],64))),256))])]),e("div",we,[Le,e("div",ke,[e("div",{innerHTML:s(t).partners},null,8,Ce)])]),e("div",Me,[He,e("div",Te,[$e,e("div",{innerHTML:s(t).team},null,8,Pe)])]),e("div",Re,[Se,e("div",Ue,n(new Date(s(t).dateStart).toLocaleString("FR-fr",{month:"long",year:"numeric"}))+" - "+n(new Date(s(t).dateEnd).toLocaleString("FR-fr",{month:"long",year:"numeric"})),1)]),e("div",Fe,[De,e("div",qe,[e("div",{innerHTML:s(t).financement},null,8,Be)])]),e("div",ze,[Ae,e("div",Ne,[(i(!0),o(r,null,v(s(t).themes,_=>(i(),x(g,{name:_.title,"is-active":!1},null,8,["name"]))),256))])])])])])):p("",!0),s(t)?(i(),o("div",Oe,[e("div",Ee,[e("div",Ve,[(i(!0),o(r,null,v(s(t).filesChapters,_=>(i(),o("div",Ie,[e("h2",Ge,n(_.title),1),e("div",{innerHTML:_.textDescription},null,8,Je),e("div",Ze,[(i(!0),o(r,null,v(_.files,u=>(i(),o("div",Ke,[e("a",{href:u.url,download:`${u.name}.${u.extension}`,class:"v--project-uid__filesChapter-box__chapter__files__item",target:"_blank"},[e("div",null,[e("div",We,n(u.name),1),e("div",Xe,n(u.extension)+" ("+n(u.niceSize)+") ",1)]),Ye],8,Qe)]))),256))])]))),256))])])])):p("",!0),e("div",et,[e("div",tt,[s(t)?(i(),x(P,{key:0,"project-info":s(t),onCartelClicked:a[0]||(a[0]=_=>s(O)(_))},null,8,["project-info"])):p("",!0)])])],64)),e("div",st,[e("div",{ref_key:"endOfPage",ref:h,class:"v--project-uid__end-page__detector"},null,512)])],2)}}});const at=M(it,[["__scopeId","data-v-44d576b4"]]);export{at as default};
