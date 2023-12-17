<template>
    <section
        class="v--project-uid"
        :class="[getClassColorUidFromAxesUid(project?.axes[0].uid || 'interpretation-historique')]"
    >
        <template
            v-if="project === null"
        >
            <div
                class="v--project-uid__header"
            >
                <h1
                    style="color: white"
                >
                    chargement…
                </h1>
            </div>
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
                class="fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div
                    class="fp-grid-coll-16-24"
                >
                    <h2>Résumé</h2>
                </div>
                <div
                    class="fp-grid-coll-16-24"
                >
                    <template
                        v-for="projectItem of project.content"
                    >
                        <div
                            class="v--project-uid__content__text hem-rm-margins"
                            v-if="projectItem.type === 'text'"
                            v-html="projectItem.value"
                        ></div>
                        <div
                            class="v--project-uid__content__img"
                            v-if="projectItem.type === 'image'"
                        >
                            <img
                                :alt="projectItem.alt"
                                :src="projectItem.image.resize.small"
                            >
                            <h6>{{projectItem.caption}}</h6>
                        </div>

                        <div
                            class="v--project-uid__content__video"
                            v-if="projectItem.type === 'video'"
                        >
                            <iframe width="1280"
                                    height="800"
                                    :src="`https://www.youtube.com/embed/${extractVideoID(projectItem.content.url)}`"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                            ></iframe>
                            <h6>{{projectItem.content.caption}}</h6>
                        </div>
                    </template>
                </div>
            </div>

            <div
                v-if="project"
                class="v--project-uid__details"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div
                        class="fp-grid-coll-16-24 hem-rm-margins"
                    >
                        <h2>Fiche technique du projet</h2>

                        <div
                            class="v--project-uid__details__item"
                        >
                            <div
                                class="v--project-uid__details__item__title"
                            >
                                Responsable
                            </div>
                            <div
                                class="v--project-uid__details__item__content"
                            >
                                <template
                                    v-for="author of project.authors"
                                >{{ author.firstname }} {{ author.Name }}, </template>
                            </div>
                        </div>
                        <div
                            class="v--project-uid__details__item"
                        >
                            <div
                                class="v--project-uid__details__item__title"
                            >
                                Partenaire
                            </div>
                            <div
                                class="v--project-uid__details__item__content"
                            >
                                <div
                                    v-html="project.partners"
                                ></div>
                            </div>
                        </div>
                        <div
                            class="v--project-uid__details__item"
                        >
                            <div
                                class="v--project-uid__details__item__title"
                            >
                                Équipe
                            </div>
                            <div
                                class="v--project-uid__details__item__content"
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae blanditiis cumque deleniti dignissimos doloribus, dolorum eaque excepturi exercitationem hic, id impedit iusto nemo perspiciatis quaerat quibusdam saepe vitae voluptatum?</p>
                                <div
                                    v-html="project.team"
                                ></div>
                            </div>
                        </div>
                        <div
                            class="v--project-uid__details__item"
                        >
                            <div
                                class="v--project-uid__details__item__title"
                            >
                                Période
                            </div>
                            <div
                                class="v--project-uid__details__item__content"
                            >
                                {{ new Date(project.dateStart).toLocaleString('FR-fr', {month: 'long', year:'numeric'}) }} -
                                {{ new Date(project.dateEnd).toLocaleString('FR-fr', {month: 'long', year:'numeric'}) }}
                            </div>
                        </div>
                        <div
                            class="v--project-uid__details__item"
                        >
                            <div
                                class="v--project-uid__details__item__title"
                            >
                                Financement
                            </div>
                            <div
                                class="v--project-uid__details__item__content"
                            >
                                <div
                                    v-html="project.financement"
                                ></div>
                            </div>
                        </div>

                        <div
                            class="v--project-uid__details__item"
                        >
                            <div
                                class="v--project-uid__details__item__title"
                            >
                                Thèmes
                            </div>
                            <div
                                class="v--project-uid__details__item__content v--project-uid__details__item__content--is-list"
                            >
                                <tag
                                    v-for="theme of project.themes"
                                    :name="theme.title"
                                    :is-active="false"
                                >
                                </tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                v-if="project"
                class="v--project-uid__filesChapter-box"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-16-24">
                        <div
                            class="hem-rm-margins v--project-uid__filesChapter-box__chapter"
                            v-for="filesChapter of project.filesChapters"
                        >
                            <h2
                                class="v--project-uid__filesChapter-box__chapter__title"
                            >{{ filesChapter.title }}</h2>

                            <div
                                v-html="filesChapter.textDescription"
                            ></div>

                            <div
                                class="fp-grid-coll-container v--project-uid__filesChapter-box__chapter__files"
                            >
                                <div
                                    v-for="file of filesChapter.files"
                                    class="v--project-uid__filesChapter-box__chapter__files__coll"
                                >
                                    <a
                                        :href="file.url"
                                        :download="`${file.name}.${file.extension}`"
                                        class="v--project-uid__filesChapter-box__chapter__files__item"
                                        target="_blank"
                                    >
                                        <div>
                                            <div
                                                class="v--project-uid__filesChapter-box__chapter__files__item__name">
                                                {{ file.name }}
                                            </div>
                                            <div class="">
                                                {{ file.extension }} ({{ file.niceSize }})
                                            </div>
                                        </div>

                                        <div>
                                            <img
                                                class="v--project-uid__download-icon"
                                                alt="download icon"
                                                src="../../assets/downloading_FILL0_wght400_GRAD0_opsz24.svg"
                                            >
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                class="v--project-uid__connected"
            >
                <div
                    class="v--project-uid__connected__item"
                >
                    <cartel
                        v-if="project"
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
import {getProjectDataByUdi} from "~/global/getDataFromHemApi";
import {onMounted} from "@vue/runtime-core";
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

function extractVideoID(url: string) {
    const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

</script>





<style lang="scss" scoped >
.v--project-uid {
    background: white;
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 50rem;

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

.v--project-uid__content__img {
    img {
        display: block;
        width: 100%;
    }
}

.v--project-uid__content__video {
    position: relative;
    padding-bottom: 50%;
    margin-top: 3rem;
    margin-bottom: 3rem;

    > iframe {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

.v--project-uid__details {
    background: var(--color-main--green);
    padding-top: 5rem;
    padding-bottom: 10rem;
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;

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
        color: white;
        background: var(--color-main--dark-green);
    }

    .orange & {
        background: var(--color-main--orange);
    }

    .brick & {
        background: var(--color-main--brick);
    }

    .v--project-uid__details__item {
        display: flex;
        border-top: black 1px solid;
        padding-top: 2rem;
        padding-bottom: 2rem;

        .dark-green & {
            border-color: white;
        }
    }

    .v--project-uid__details__item__title {
        width: calc(100% / 12 * 3);
        font-weight: 600;
    }

    .v--project-uid__details__item__content {
        width: calc(100% / 12 * 9);

        &.v--project-uid__details__item__content--is-list {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
    }
}

.v--project-uid__filesChapter-box {
    padding-top: 10rem;
}

.v--project-uid__filesChapter-box__chapter {
}

.v--project-uid__filesChapter-box__chapter__title {

}

.v--project-uid__filesChapter-box__chapter__files {
    padding-bottom: 10rem;
    gap: 2rem;
}

.v--project-uid__filesChapter-box__chapter__files__coll {
    width: calc( (100% - 2rem * 2 ) / 3);
}

.v--project-uid__filesChapter-box__chapter__files__item {
    box-sizing: border-box;
    border: solid 1px black;
    background-color: var(--color-grey);
    padding: 1rem;
    border-radius: 1rem;
    color: inherit;
    text-decoration: none;
    user-select: none;
    display: block;
}
.v--project-uid__filesChapter-box__chapter__files__item__name {
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    position: relative;

    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 2rem;
        height: 100%;
        background: linear-gradient(90deg, rgba(0,0,0,0), rgba(214,215,210,255));
    }
}

.v--project-uid__download-icon {
    user-select: none;
    display: block;
    height: 5rem;
    width: auto;
}

</style>

<style lang="scss">
@use '../../assets/__main';

.v--project-uid__content__text {
    p {
        @extend .hem-font-l;
    }

}
h6 {
    @extend .hem-font-reg;
}
</style>
