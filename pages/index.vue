<template>
    <div
        class="v-index"
        :class="classColor"
    >
        <div
            class="v-index__tags fp-grid-with-gutter"
            ref="tagsContainer"
        >
            <div
                v-for="tag of useAppStateStore().tag_themeList"
                class="v-index__tag"
            >
                <tag
                    @clicked="onToggleTag(tag)"
                    :title="tag.title"
                    :uri="tag.uri"
                    :is-active="useAppStateStore().activeTag_theme?.uri === tag.uri"
                />
            </div>
        </div>
        <div
            v-if="allProjectsInfo"
            class="fp-grid-coll-container fp-grid-with-gutter"
        >
            <template
                v-for="projectInfo of allProjectsInfo.projects"
            >
                <div
                    class="v-index__items"
                    v-if='showThisCartel({
                        themes: projectInfo.themes.map(value => {return value.uri}),
                        axe: projectInfo.axes[0].uri,
                    })'
                >
                    <cartel
                        :project-info="projectInfo"
                        @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    />
                </div>
            </template>
        </div>


    </div>
</template>





<style lang="scss" scoped>
.v-index {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 11rem;
    left: 50%;
    transform: translate(-50%, 0);
    background: white;
}

.v-index__items {
    padding: 1rem;

    &:nth-child(1n) {
        width: calc( 100% / 24 * 8 );
        box-sizing: border-box;
    }

    &:nth-child(7n):not( &:nth-child(14n) ),
    &:nth-child(8n) {
        width: calc( 100% / 24 * 12 );
        box-sizing: border-box;
    }
}

.v-index__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.v-index__tag {
    padding: .5rem;
}
</style>





<script lang="ts" setup >

import Tag from "~/components/tag.vue";
import {useAppStateStore} from "~/stores/appState";
import {Ref, UnwrapRef} from "vue"
import {goToProject} from "~/global/goToProject";
import {onMounted} from "@vue/runtime-core";
import {getProjectsData} from "~/global/getDataFromHemApi"
import {IHemApi_allProjectInfo, IHemApi_tag_theme} from "~/global/hemApi"

const classColor: Ref<UnwrapRef< string >> = ref('default')

const tagsContainer: Ref<HTMLElement|null> = ref(null)

let allProjectsInfo: Ref<UnwrapRef<IHemApi_allProjectInfo | null>> = ref(null)

onMounted(() => {
    loadData()

    nextTick(() => {
        setTagVisibilityInPageObserver()
    })
})

async function loadData() {
    allProjectsInfo.value = await getProjectsData()
    console.log( allProjectsInfo.value )
}

function setTagVisibilityInPageObserver() {
    if( ! (tagsContainer.value instanceof HTMLElement) ) return
    const tagsVisibilityObserver = new IntersectionObserver(entries => {
        for (const categoryContainer of entries) {
            useAppStateStore().tagsAreVisibleInIndexPage = categoryContainer.isIntersecting;
        }
    })
    tagsVisibilityObserver.observe(tagsContainer.value)
}

function onToggleTag(value: IHemApi_tag_theme) {
    useAppStateStore().toggleActiveTag_theme(value)
}

function showThisCartel({axe, themes}: {
    axe: string,
    themes: string[],
}): boolean {

    const activeTag_axes = useAppStateStore().activeTag_axes
    const activeTag_theme = useAppStateStore().activeTag_theme

    if(
        !activeTag_axes
        && !activeTag_theme
    ) return true

    else if(
        axe === activeTag_axes?.uri
    ) return true

    else if(
        activeTag_theme
        && themes.includes(activeTag_theme.uri)
    ) return true

    return false
}
</script>
