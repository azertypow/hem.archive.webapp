<template>
    <div class="v-index">

        <div
            class="v-index__tags fp-grid-with-gutter"
        >
            <div
                v-for="tag of tags"
                class="v-index__tag"
            >
                <tag
                    :name="tag"
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
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="purple"
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
                class="fp-grid-coll-8-24 v-index__items"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="yellow"
                />
            </div>
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
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="orange"
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
}

.v-index__items {
    padding: 1rem;
}

.v-index__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.v-index__tag {
    padding: .5rem;
}
</style>





<script lang="ts" setup >

import Tag from "~/components/tag.vue";

const tags = [
"Musique et mouvement",
"Percussion",
"Vents",
"Diminution et ornementation",
"Solmisation",
"Informatique musicale",
"Pratique historiquement informée : Claviers",
"Pratique historiquement informée : Chant",
"Interprétation et ornementation",
"Orchestre",
"Recherche pédagogique",
"Échanges culturels",
"Analyse et théorie de la musique",
"Geste et mouvement",
"Musiques d’aujourd’hui",
"Musique et arts performatifs",
"Musique à Genève et en Suisse",
"Métiers",
"Santé du musicien-ne",
]

</script>
