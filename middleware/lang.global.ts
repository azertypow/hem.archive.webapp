import {useUrlLangStore} from "~/composable/useUrlLang";

export default defineNuxtRouteMiddleware((to) => {
    const lang = to.query.lang || useUrlLangStore().lang ||'fr'

    // Si paramètre manquant, l'ajouter
    if (!to.query.lang) {
        return navigateTo({
            path: to.path,
            query: { ...to.query, lang }
        })
    }
})
