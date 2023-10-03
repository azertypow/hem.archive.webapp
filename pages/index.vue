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
                v-for="tag of tags"
                class="v-index__tag"
            >
                <tag
                    @clicked="onToggleTag($event)"
                    :name="tag"
                    :is-active="useAppStateStore().activeTag === tag"
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
                        tags: projectInfo.themes.map(value => {return value.title}),
                        category: "TRANSMISSION"
                    })'
                >
                    <cartel
                        :title="projectInfo.title"
                        :responsables="projectInfo.authors"
                        :dateStart="projectInfo.dateStart"
                        :dateEnd="projectInfo.dateEnd"
                        theme="orange"
                        @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                        cover="cover/brick.jpg"
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
    max-width: 1500px;
    min-width: 1400px;
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
import {IHemApi_allProjectInfo} from "~/global/hemApi"

const tags          = useAppStateStore().$state.tags

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

function onToggleTag(value: string) {
    useAppStateStore().toggleActiveTag(value)
}

function showThisCartel({category, tags}: {
    category: string,
    tags: string[],
}): boolean {

    if(
        useAppStateStore().activeCategory.length < 1
        && useAppStateStore().activeTag.length < 1
    ) return true

    else if(
        useAppStateStore().activeCategory.length > 0
        && category === useAppStateStore().activeCategory
    ) return true

    else if(
        useAppStateStore().activeTag.length > 0
        && tags.includes(useAppStateStore().activeTag)
    ) return true

    return false
}
</script>
