<template>
    <div
        class="v-index"
        :class="classColor"
        :style="{
            paddingTop: useAppStateStore().calculatingHomeNavHeight + 'px'
        }"
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
                    :title_en="tag.title_EN"
                    :uri="tag.uri"
                    :is-active="useAppStateStore().activeTag_theme?.uri === tag.uri"
                />
            </div>
        </div>

      <div class="v-index__ui-toggle fp-grid-with-gutter">

        <div class="v-index__ui-toggle__button" @click="projectItemViewList = !projectItemViewList">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
            :class="{ active: projectItemViewList }">
            <path
              d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
            :class="{ active: !projectItemViewList }">
            <path
              d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/>
          </svg>
        </div>
      </div>

      <template v-if="useAppStateStore().searchHomeStatus === 'ended' && useAppStateStore().searchHomeResults.length > 0">
        <div style="gap: 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 5rem">
          <tag
            title_en="close search"
            title="quitter la recherche"
            @clicked="useAppStateStore().clearHomeResearch"
            :is-active="true"
          />
        </div>
      </template>


        <template v-if='useAppStateStore().searchHomeStatus === null'
        >
            <div
                v-if="appHomeProjectsStore.allProjectsInfo"
                class="fp-grid-coll-container fp-grid-with-gutter v-index__container"
                :class="{
                  'list-view': projectItemViewList,
                }"
            >
              <template v-if="projectItemViewList">
                <template
                  v-for="(projectInfo, index) of projectsSort(appHomeProjectsStore.allProjectsInfo)"
                >
                  <div
                    class="v-index__container__items"
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
              </template>
              <template v-else>
                <template
                  v-for="(projectInfo, index) of appHomeProjectsStore.allProjectsInfo"
                >
                  <div
                    class="v-index__container__items"
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
              title_en="close search"
              @clicked="useAppStateStore().clearHomeResearch"
            />
          </div>
        </template>
        <template v-else>
            <div
                class="fp-grid-coll-container fp-grid-with-gutter v-index__container"
                :class="{
                  'list-view': projectItemViewList,
                }"
            >
                <template
                    v-for="(projectInfo) of useAppStateStore().searchHomeResults"
                >
                    <div
                        class="v-index__container__items"
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
    transition: padding-top ease-out 500ms;

    &.ts-nav-transition {
        overflow: hidden;
    }
}

.v-index__container {
  @media (min-width: scss-var.$breakpoint-xl) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }

  &.list-view {
    display: flex;
    justify-content: center;
  }
}

.v-index__container__items {
    padding: 1rem;
    width: calc( 100% / 24 * 8 );
    box-sizing: border-box;

    &.v-index__items--6,
    &.v-index__items--7 {
        width: calc( 100% / 24 * 12 );
    }

    @media (max-width: scss-var.$breakpoint-reg) {
        width: calc( 100% / 24 * 12 );
        &.v-index__items--6,
        &.v-index__items--7 {
            width: calc( 100% / 24 * 12 );
        }
    }
    @media (max-width: scss-var.$breakpoint-sm) {
        width: calc( 100% / 24 * 24 );
        &.v-index__items--6,
        &.v-index__items--7 {
            width: calc( 100% / 24 * 24 );
        }
    }

    @media (min-width: scss-var.$breakpoint-xl) {
      width: calc( 100% / 24 * 24 );

      &.v-index__items--6,
      &.v-index__items--7 {
        width: calc( 100% / 24 * 24 );
      }
    }

  .list-view & {
    width: 100%;
    padding-bottom: 0;

    @media (min-width: scss-var.$breakpoint-l) {
      //max-width: 60rem;
    }
  }
}

.v-index__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    gap: 1rem;

    @media (max-width: scss-var.$breakpoint-reg) {
        justify-content: flex-start;
    }

    @media (max-width: scss-var.$breakpoint-sm) {
        padding-top: .5rem;
        gap: .5rem;
    }
}

.v-index__ui-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
}

.v-index__ui-toggle__button {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  cursor: pointer;
  user-select: none;

  svg {
    display: block;
    height: 3rem;
    width: auto;
    fill: var(--color-grey--dark);

    &.active {
      fill: black;
    }
  }
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
import {useAppHomeProjectsStore} from "~/stores/appHomeProjectsStore";
import {useProjectItemViewList} from "~/composable/globalState";
import {projectsSort} from "~/global/projectSort";

const classColor: Ref<UnwrapRef< string >> = ref('default')

const tagsContainer: Ref<HTMLElement|null> = ref(null)

const projectItemViewList = useProjectItemViewList()

let appHomeProjectsStore = useAppHomeProjectsStore()

onMounted(() => {
    loadData()

    nextTick(() => {
        setTagVisibilityInPageObserver()
        setCategoryVisibility()
    })
})

let beforeScrollPosition = 0

function setCategoryVisibility() {
    useAppStateStore().categoriesContainerIsOpen = true

    document.querySelector('.v-index')?.addEventListener('scroll', (e: Event) => {
        const currentScrollPosition = (e.target as HTMLElement).scrollTop

        const scrollDirection = currentScrollPosition > beforeScrollPosition ? 'toBottom' : 'toTop'
        if (scrollDirection === 'toBottom') useAppStateStore().categoriesContainerIsOpen = false
        else if (scrollDirection === 'toTop') useAppStateStore().categoriesContainerIsOpen = true

        beforeScrollPosition = currentScrollPosition
    })
}

async function loadData() {
  const projectsData = await getProjectsData()
    if( appHomeProjectsStore.allProjectsInfo === null ) {

        const lastFiveYearsProjects = Object.values( projectsData.projects ).filter(project => {
            const projectDate = new Date(project.dateStart)
            const currentDate = new Date()
            const diff = currentDate.getFullYear() - projectDate.getFullYear()
            return diff <= 5
        }).sort((a, b) => 0.5 - Math.random())

        const overFiveYearsProjects = Object.values( projectsData.projects ).filter(project => {
            const projectDate = new Date(project.dateStart)
            const currentDate = new Date()
            const diff = currentDate.getFullYear() - projectDate.getFullYear()
            return diff > 5
        }).sort((a, b) => 0.5 - Math.random())

        appHomeProjectsStore.allProjectsInfo = [...lastFiveYearsProjects, ...overFiveYearsProjects]
    }
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
