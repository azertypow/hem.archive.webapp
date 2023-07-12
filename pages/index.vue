<template>
    <div
        class="v-index"
        :class="classColor"
    >
        <div
            class="v-index__tags fp-grid-with-gutter"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-12-24 v-index__items"
            >
                <cartel
                    size="big"
                    title="Une nouvelle esthétique de la cadence"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="yellow"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/yellow.jpg"
                />
            </div>
            <div
                class="fp-grid-coll-12-24 v-index__items"
            >
                <cartel
                    size="big"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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
                class="fp-grid-coll-8-24 v-index__items"
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

const tags          = useAppStateStore().$state.tags

const classColor: Ref<UnwrapRef< string >> = ref('default')

function onToggleTag(value: string) {
    useAppStateStore().toggleActiveTag(value)
}
</script>
