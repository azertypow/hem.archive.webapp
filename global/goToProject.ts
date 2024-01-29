export function goToProject(cartelElement: HTMLElement) {
    document.querySelector('.v-index')?.classList.add('ts-nav-transition')
    cartelElement.classList.add('is-full')
}
