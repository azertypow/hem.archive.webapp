<template>
    <section
        class="v--project-uid"
        :class="[getClassColorUidFromAxesUid(project?.axes[0].uid || 'interpretation-historique')]"
    >
        <template
            v-if="project === null"
        >
            <h1
                style="color: white"
            >
                chargement…
            </h1>
        </template>

        <template
            v-else-if="errorMessage"
        >
            <h1
                style="color: white"
            >
                {{errorMessage}}
            </h1>
        </template>

        <template
            v-else
        >
            <div
                class="v--project-uid__header"
            >
                <app-header
                    :axesUid="project.axes[0].uid"
                    :date="`${new Date(project.dateStart).toLocaleString('FR-fr', {month: 'long', year:'numeric'})} - ${new Date(project.dateEnd).toLocaleString('FR-fr', {month: 'long', year:'numeric'})}`"
                    :responsables="project.authors"
                    :title="project.title"
                    :cover="Object.values(project.cover)[0].resize.large"
                />
            </div>


            <div
                class="fp-grid-coll-container"
            >
                <div
                    class="fp-grid-coll-24-24"
                >
                    coucou
                </div>
            </div>

            <div
                class="v--project-uid__connected"
            >
                <div
                    class="v--project-uid__connected__item"
                >
                    <cartel
                        :project-info="project"
                        @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    />
                </div>
            </div>

        </template>

        <div
            class="v--project-uid__end-page"
        >
            <div ref="endOfPage" class="v--project-uid__end-page__detector"></div>
        </div>
    </section>
</template>





<script lang="ts" setup>
import {getProjectDataByUdi, hemApiBaseUrl} from "~/global/getDataFromHemApi";
import {onMounted} from "@vue/runtime-core";
import {useAppStateStore} from "~/stores/appState";
import AppHeader from "~/components/appHeader.vue";
import {Ref, UnwrapRef} from "vue";
import {IHemApi_projectDetails} from "~/global/hemApi";
import {goToProject} from "~/global/goToProject";
import {getClassColorUidFromAxesUid} from "~/global/getClassColorUidFromAxesUid";

const project: Ref<UnwrapRef<null | IHemApi_projectDetails >> = ref(null)
const errorMessage: Ref<UnwrapRef<null | string>> = ref(null)
const endOfPage = ref()
const activeBackHistoryNavigation: Ref<UnwrapRef<boolean>> = ref(false)


definePageMeta({
    pageTransition: {
        name: 'over',
    }
})

onMounted(() => {
    nextTick(() => {
        console.log(endOfPage.value)

        if(! (endOfPage.value instanceof HTMLElement) ) return

        const endOfPageObserver = new IntersectionObserver((entries) => {
            entries.forEach(value => {
                if(activeBackHistoryNavigation.value && value.isIntersecting) useRouter().go(-1)
            })
        })

        endOfPageObserver.observe(endOfPage.value)
    })

    loadProjectDataFromHEMAPI().then(() => activeBackHistoryNavigation.value = true)
})

async function loadProjectDataFromHEMAPI() {
    const projectUid = useRoute().params.projectUid
    if( typeof projectUid === 'string') {
        const projectData = await getProjectDataByUdi(projectUid)

        if('error' in projectData) errorMessage.value = projectData.error
        else project.value = projectData
    }
}

</script>





<style lang="scss" scoped >
.v--project-uid {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 5rem;
    z-index: 10;
}


.v--project-uid__header {
    background: var(--color-main--green);

    .green & {
        background: var(--color-main--green);
    }

    .yellow & {
        background: var(--color-main--yellow);
    }

    .purple & {
        background: var(--color-main--purple);
    }

    .dark-green & {
        background: var(--color-main--dark-green);
    }

    .orange & {
        background: var(--color-main--orange);
    }

    .brick & {
        background: var(--color-main--brick);
    }
}
.v--project-uid__project-img {
    display: block;
    width: 100%;
}

.v--project-uid__end-page {

}

.v--project-uid__end-page__detector {
    width: 100%;
    height: 100vh;
    background-color: var(--color-grey);
}

.v--project-uid__connected {
    width: 100%;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 10rem;
    padding-bottom: calc(10rem + 33.333vh); // height of scroll detection space
    flex-wrap: nowrap;
    gap: var(--gutter-xl);
    background-color: var(--color-grey);

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    > * {
        flex-shrink: 0;
    }

    > *:first-child {
        margin-left: calc(100% / 24 * 4);
    }

    > *:last-child {
        margin-right: calc(100% / 24 * 4);
    }
}

.v--project-uid__connected__item {
    width: calc(100% / 24 * 7);
}
</style>
