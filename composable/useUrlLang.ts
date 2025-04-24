export const useUrlLang = () => {
    const route = useRoute()
    const router = useRouter()

    // Valeur par défaut: 'fr' si paramètre absent
    const lang = ref(route.query.lang?.toString() || 'fr')

    // Mise à jour synchrone quand l'URL change
    watch(
        () => route.query.lang,
        (newLang) => {
            lang.value = newLang?.toString() || 'fr'
        }
    )

    // Change la langue (met à jour l'URL)
    const setLang = (newLang: 'fr' | 'en') => {
        router.push({
            query: { ...route.query, lang: newLang }
        })
    }

    return { lang, setLang }
}
