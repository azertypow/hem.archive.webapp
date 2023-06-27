<template>
    <div class="v-index">
        <div>
            <div
                class="v-index__categories fp-grid-with-gutter"
            >
                    <category
                        v-for="category of categories"
                        @clicked="onToggleCategory($event)"
                        :name="category.value"
                        :theme="category.theme"
                        :is-active="useAppStateStore().activeCategory === category.value && useAppStateStore().activeCategory.length > 1"
                        :is-unactive="useAppStateStore().activeCategory !== category.value && useAppStateStore().activeCategory.length > 1"
                    />
            </div>
        </div>

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
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="orange"
                />
            </div>
            <div
                class="fp-grid-coll-8-24 v-index__items"
            >
                <cartel
                    title="Alphabet du geste : l’art scénique du chanteur d’opéra"
                    :responsables="['Rémy Campos']"
                    date="2010-2012"
                    theme="green"
                />
            </div>
            <div
                class="fp-grid-coll-8-24 v-index__items"
            >
                <cartel
                    title="Apprentissage au clavier : Influence du mouvement corporel lorem sample"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy']"
                    date="2022-2023"
                    theme="purple"
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
                />
            </div>
            <div
                class="fp-grid-coll-8-24 v-index__items"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="brick"
                />
            </div>


<!--=====-->
            <div
                class="fp-grid-coll-12-24 v-index__items"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="yellow"
                />
            </div>
            <div
                class="fp-grid-coll-12-24 v-index__items"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="purple"
                />
            </div>

        </div>


    </div>
</template>





<style lang="scss" scoped>
.v-index {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 6rem;
}

.v-index__items {
    padding: 1rem;
}

.v-index__categories {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
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

const tags          = useAppStateStore().$state.tags
const categories    = useAppStateStore().$state.categories

function onToggleTag(value: string) {
    useAppStateStore().toggleActiveTag(value)
}

function onToggleCategory(value: string) {
    useAppStateStore().toggleActiveCategory(value)
}

</script>
