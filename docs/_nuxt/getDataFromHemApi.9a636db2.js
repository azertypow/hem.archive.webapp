const s="https://hemadmin.sdrvl.ch/webapp/api/v1";async function n(){return await(await fetch(`${s}/projects`)).json()}async function a(t){return await(await fetch(`${s}/project-by-uid/${t}`)).json()}async function o(){return await(await fetch(`${s}/community`)).json()}async function c(t){return await(await fetch(`${s}/community-by-uid/${t}`)).json()}export{o as a,n as b,a as c,c as g};
