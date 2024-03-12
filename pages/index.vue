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

      <template v-if="useAppStateStore().searchHomeStatus === 'ended' && useAppStateStore().searchHomeResults.length > 0">
        <div style="gap: 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 5rem">
          <tag
            title="quitter la recherche"
            @clicked="useAppStateStore().clearHomeResearch"
          />
        </div>
      </template>


        <template v-if='useAppStateStore().searchHomeStatus === null'
        >
            <div
                v-if="allProjectsInfo"
                class="fp-grid-coll-container fp-grid-with-gutter"
            >
                <template
                    v-for="(projectInfo, index) of allProjectsInfo"
                >
                    <div
                        class="v-index__items"
                        :class="`v-index__items--${index % 8}`"
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
        </template>
        <template v-else-if="useAppStateStore().searchHomeStatus === 'waiting'"
        >
            <div class="v-index__search--loader fp-grid-coll-container fp-grid-coll-container--center">
                <app-loader :is-black="true"/>
            </div>
        </template>
        <template v-else-if="useAppStateStore().searchHomeStatus === 'ended' && useAppStateStore().searchHomeResults.length === 0">
          <div style="gap: 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; height: calc(100vh - 40rem)">
            <div>Aucun résultats</div>
            <tag
              title="quitter la recherche"
              @clicked="useAppStateStore().clearHomeResearch"
            />
          </div>
        </template>
        <template v-else>
            <div
                class="fp-grid-coll-container fp-grid-with-gutter"
            >
                <template
                    v-for="(projectInfo) of useAppStateStore().searchHomeResults"
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
        </template>


    </div>
</template>





<style lang="scss" scoped>
@use "@/assets/scss-var";

.v-index {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    scrollbar-gutter: stable;
    padding-top: 11rem;
    left: 50%;
    transform: translate(-50%, 0);
    background: white;

    @media (max-width: scss-var.$breakpoint-reg) {
        padding-top: 16rem;
    }

    &.ts-nav-transition {
        overflow: hidden;
    }
}

.v-index__items {
    padding: 1rem;
    width: calc( 100% / 24 * 8 );
    box-sizing: border-box;

    &.v-index__items--6,
    &.v-index__items--7 {
        width: calc( 100% / 24 * 12 );
    }

    @media (max-width: scss-var.$breakpoint-reg) {
        width: calc( 100% / 24 * 12 );
    }
    @media (max-width: scss-var.$breakpoint-sm) {
        width: calc( 100% / 24 * 24 );
    }
}

.v-index__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 2rem;

    @media (max-width: scss-var.$breakpoint-reg) {
        justify-content: flex-start;
    }
}

.v-index__tag {
    padding: .5rem;
}

.v-index__search--loader {
    padding-top: 5rem;
}
</style>





<script lang="ts" setup >

import Tag from "~/components/tag.vue";
import {useAppStateStore} from "~/stores/appState";
import {Ref, UnwrapRef} from "vue"
import {goToProject} from "~/global/goToProject";
import {onMounted} from "@vue/runtime-core";
import {getProjectsData} from "~/global/getDataFromHemApi"
import {IHemApi_projectInfo, IHemApi_tag_theme} from "~/global/hemApi"

const classColor: Ref<UnwrapRef< string >> = ref('default')

const tagsContainer: Ref<HTMLElement|null> = ref(null)

let allProjectsInfo: Ref<UnwrapRef<IHemApi_projectInfo[] | null>> = ref(null)

onMounted(() => {
    loadData()

    nextTick(() => {
        setTagVisibilityInPageObserver()
    })
})

async function loadData() {
  const projectsData = await getProjectsData()
  allProjectsInfo.value = Object.values( projectsData.projects )
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
