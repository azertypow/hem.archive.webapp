export function goToProject(cartelElement: HTMLElement) {
    console.log( useRouter().currentRoute.value.name )
    cartelElement.classList.add('is-full')
}
