import {defineStore} from "pinia";
import {IHemApi_projectInfo} from "~/global/hemApi";

export const useAppHomeProjectsStore = defineStore('appHomeProjectsStore', {
    state: () => ({
        allProjectsInfo: null as null | IHemApi_projectInfo[]
    }),
})
