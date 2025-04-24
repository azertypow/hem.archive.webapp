export default defineNuxtRouteMiddleware((to) => {
    const lang = to.query.lang || 'fr'
    const router = useRouter()

    // Si paramètre manquant, l'ajouter
    if (!to.query.lang) {
        return navigateTo({
            path: to.path,
            query: { ...to.query, lang }
        })
    }
})
