import {defineStore} from "pinia";

export const useUrlLangStore = defineStore('urlLangStore', {
  state: () => ({
    lang: 'fr' as 'fr' | 'en'
  }),

  actions: {
    init() {
      const route = useRoute()
      this.lang = (route.query.lang?.toString() as 'fr' | 'en') || 'fr'

      // // Setup route watcher
      // watch(
      //   () => route.query.lang,
      //   (newLang) => {
      //     this.lang = (newLang?.toString() as 'fr' | 'en') || 'fr'
      //   }
      // )
    },

    setLang(newLang: 'fr' | 'en') {
      const router = useRouter()
      const route = useRoute()

      router.push({
        query: { ...route.query, lang: newLang }
      })

      this.lang = newLang
    }
  }
})
