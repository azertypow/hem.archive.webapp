import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        activeCategory: "",
        activeTag: "",

        tags: [
            "Musique et mouvement",
            "Percussion",
            "Vents",
            "Diminution et ornementation",
            "Solmisation",
            "Informatique musicale",
            "Pratique historiquement informée : Claviers",
            "Pratique historiquement informée : Chant",
            "Interprétation et ornementation",
            "Orchestre",
            "Recherche pédagogique",
            "Échanges culturels",
            "Analyse et théorie de la musique",
            "Geste et mouvement",
            "Musiques d’aujourd’hui",
            "Musique et arts performatifs",
            "Musique à Genève et en Suisse",
            "Métiers",
            "Santé du musicien-ne",
        ],

        categories: [
            {value: "MÉTIERS DE LA MUSIQUE", theme:     "green"},
            {value: "MUSIQUE ET TECHNOLOGIE", theme:    "yellow"},
            {value: "MUSIQUE ET SOCIÉTÉ", theme:        "purple"},
            {value: "INTERPRÉTATION HISTORIQUE", theme: "dark-green"},
            {value: "TRANSMISSION", theme:              "orange"},
            {value: "MUSIQUES DU MONDE", theme:         "brick"},
        ] satisfies {value: string, theme: 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick'}[],


        currentProjectTitle: "",
        currentProjectResponsables: [] satisfies string[],
        currentProjectDate: "",
        currentProjectTheme: "" satisfies 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick' | "",
        currentProjectCover: "",

        menuIsOPen: false,
        searchIsOpen: false,
    }),

    actions: {
        toggleActiveTag(value: string) {
            this.$state.activeTag = this.$state.activeTag === value ? "" : value;
            this.$state.activeCategory = "";
        },
        toggleActiveCategory(value: string) {
            this.$state.activeCategory = this.$state.activeCategory === value ? "" : value;
            this.$state.activeTag = "";
        }
    },
})
