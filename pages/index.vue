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
            class="fp-grid-coll-container fp-grid-with-gutter"
        >


            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Musique et mouvement",
                        "Geste et mouvement",
                        "Orchestre",
                        "Percussion",
                        "Solmisation",
                        "Pratique historiquement informée : Chant",
                    ],
                    category: "TRANSMISSION"
                })'
            >
                <cartel
                    title="Actes du congrès de&nbsp;l’Institut Jaques&#8209;Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="orange"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/brick.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Musique et mouvement",
                        "Geste et mouvement",
                        "Percussion",
                    ],
                    category: "MÉTIERS DE LA MUSIQUE"
                })'
            >
                <cartel
                    title="Alphabet du geste&nbsp;: l’art scénique du chanteur d’opéra"
                    :responsables="['Rémy Campos']"
                    date="2010-2012"
                    theme="green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/green.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Percussion",
                        "Solmisation",
                        "Pratique historiquement informée : Chant",
                    ],
                    category: "MUSIQUE ET SOCIÉTÉ"
                })'

            >
                <cartel
                    title="Apprentissage au clavier&nbsp;: Influence du mouvement corporel lorem sample"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy']"
                    date="2022-2023"
                    theme="purple"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/purple.jpg"
                />
            </div>




<!--=====-->
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Geste et mouvement",
                        "Orchestre",
                        "Percussion",
                        "Solmisation",
                    ],
                    category: "MUSIQUE ET TECHNOLOGIE"
                })'
            >
                <cartel
                    title="Art.School. Differences"
                    :responsables="[ 'Rémy Campos']"
                    date="2010-2012"
                    theme="yellow"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/yellow.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Percussion",
                        "Orchestre",
                        "Pratique historiquement informée : Chant",
                        "Recherche pédagogique",
                        "Échanges culturels",
                        "Geste et mouvement",
                        "Musique et arts performatifs",
                        "Métiers",
                        "Santé du musicien-ne",
                    ],
                    category: "INTERPRÉTATION HISTORIQUE"
                })'
            >
                <cartel
                    title="Aux origines du piano français"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy']"
                    date="2022-2023"
                    theme="dark-green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/dark-green.png"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Geste et mouvement",
                        "Percussion",
                        "Solmisation",
                        "Informatique musicale",
                        "Échanges culturels",
                        "Analyse et théorie de la musique",
                        "Geste et mouvement",
                        "Musique et arts performatifs",
                        "Musique à Genève et en Suisse",
                        "Santé du musicien-ne",
                    ],
                    category: "MUSIQUES DU MONDE"
                })'
            >
                <cartel
                    title="Actes du congrès de&nbsp;l’Institut Jaques&#8209;Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="brick"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/brick.jpg"
                />
            </div>


<!--=====-->
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Informatique musicale",
                        "Pratique historiquement informée : Chant",
                        "Geste et mouvement",
                        "Musiques d’aujourd’hui",
                        "Musique et arts performatifs",
                        "Musique à Genève et en Suisse",
                        "Métiers",
                        "Santé du musicien-ne",
                    ],
                    category: "MUSIQUE ET TECHNOLOGIE"
                })'
            >
                <cartel
                    title="Une nouvelle esthétique de la cadence"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="yellow"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/yellow.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Pratique historiquement informée : Claviers",
                        "Geste et mouvement",
                        "Diminution et ornementation",
                        "Recherche pédagogique",
                        "Échanges culturels",
                        "Geste et mouvement",
                        "Musiques d’aujourd’hui",
                        "Musique à Genève et en Suisse",
                        "Métiers",
                    ],
                    category: "MUSIQUE ET SOCIÉTÉ"
                })'
            >
                <cartel
                    title="Art.School. Differences"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="purple"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/purple.jpg"
                />
            </div>





<!--=====-->
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Informatique musicale",
                        "Musique et mouvement",
                        "Interprétation et ornementation",
                        "Percussion",
                        "Vents",
                        "Recherche pédagogique",
                        "Échanges culturels",
                        "Geste et mouvement",
                        "Musique et arts performatifs",
                        "Musique à Genève et en Suisse",
                        "Santé du musicien-ne",
                    ],
                    category: "MÉTIERS DE LA MUSIQUE"
                })'
            >
                <cartel
                    title="Art.School. Differences"
                    :responsables="[ 'Rémy Campos']"
                    date="2010-2012"
                    theme="green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/yellow.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Pratique historiquement informée : Claviers",
                        "Diminution et ornementation",
                        "Vents",
                    ],
                    category: "MUSIQUES DU MONDE"
                })'
            >
                <cartel
                    title="Aux origines du piano français"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy']"
                    date="2022-2023"
                    theme="brick"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/dark-green.png"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Musique et mouvement",
                        "Informatique musicale",
                        "Vents",
                    ],
                    category: "MUSIQUES DU MONDE"
                })'
            >
                <cartel
                    title="Actes du congrès de&nbsp;l’Institut Jaques&#8209;Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="brick"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/brick.jpg"
                />
            </div>





            <!--=====-->
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Musique et mouvement",
                        "Pratique historiquement informée : Claviers",
                        "Orchestre",
                        "Diminution et ornementation",
                        "Vents",
                    ],
                    category: "INTERPRÉTATION HISTORIQUE"
                })'
            >
                <cartel
                    title="Actes du congrès de&nbsp;l’Institut Jaques&#8209;Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="dark-green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/brick.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Musique et mouvement",
                        "Informatique musicale",
                        "Vents",
                    ],
                    category: "MUSIQUE ET TECHNOLOGIE"
                })'
            >
                <cartel
                    title="Alphabet du geste&nbsp;: l’art scénique du chanteur d’opéra"
                    :responsables="['Rémy Campos']"
                    date="2010-2012"
                    theme="yellow"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/green.jpg"
                />
            </div>
            <div
                class="v-index__items"
                v-if='showThisCartel({
                    tags: [
                        "Musique et mouvement",
                        "Diminution et ornementation",
                        "Geste et mouvement",
                        "Solmisation",
                        "Pratique historiquement informée : Chant",
                    ],
                    category: "INTERPRÉTATION HISTORIQUE"
                })'
            >
                <cartel
                    title="Apprentissage au clavier&nbsp;: Influence du mouvement corporel lorem sample"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy']"
                    date="2022-2023"
                    theme="dark-green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/yellow.jpg"
                />
            </div>
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
import {tagPosibility, useAppStateStore} from "~/stores/appState";
import {Ref, UnwrapRef} from "vue"
import {goToProject} from "~/global/goToProject";
import {onMounted} from "@vue/runtime-core";

const tags          = useAppStateStore().$state.tags

const classColor: Ref<UnwrapRef< string >> = ref('default')

const tagsContainer: Ref<HTMLElement|null> = ref(null)

onMounted(() => {
    nextTick(() => {
        setTagVisibilityInPageObserver()
    })
})

function setTagVisibilityInPageObserver() {
    if( ! (tagsContainer.value instanceof HTMLElement) ) return
    const tagsVisibilityObserver = new IntersectionObserver(entries => {
        for (const categoryContainer of entries) {
            useAppStateStore().tagsAreVisibleInIndexPage = categoryContainer.isIntersecting;
        }
    })
    tagsVisibilityObserver.observe(tagsContainer.value)
}

function onToggleTag(value: tagPosibility) {
    useAppStateStore().toggleActiveTag(value)
}

function showThisCartel({category, tags}: {
    category: string,
    tags: tagPosibility[],
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
