import { defineStore } from 'pinia'
import {IHemApi_tag_axes, IHemApi_tag_theme} from "~/global/hemApi"

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        activeTag_axes: null as IHemApi_tag_axes | null,
        activeTag_theme: null as IHemApi_tag_theme | null,

        tag_themeList: [] as IHemApi_tag_theme[],

        tagsAreVisibleInIndexPage: true,

        tag_axesList: [] as IHemApi_tag_axes[],


        menuIsOPen: false,
        searchIsOpen: false,
    }),

    actions: {
        toggleActiveTag_theme(value: IHemApi_tag_theme) {
            this.$state.activeTag_theme = this.$state.activeTag_theme?.uri === value.uri ? null : value
            this.$state.activeTag_axes = null
        },
        toggleActiveTag_axes(value: IHemApi_tag_axes) {
            this.$state.activeTag_axes = this.$state.activeTag_axes?.uri === value.uri ? null : value
            this.$state.activeTag_theme = null
        }
    },
})
