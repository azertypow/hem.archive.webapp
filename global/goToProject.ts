export function goToProject(cartelElement: HTMLElement) {
    console.log( useRouter().currentRoute.value.name )
    if(useRouter().currentRoute.value.name !== 'project') cartelElement.classList.add('is-full')
}
