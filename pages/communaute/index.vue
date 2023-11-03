<template>
    <section class="v-communaute-index" >
        <template
                v-if="communaute === null"
        >
            <div
                class="v-communaute-index__header hem-rm-margins"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div
                        class="fp-grid-coll-20-24"
                    >
                        <h1>
                            Chargement…
                        </h1>
                    </div>
                </div>
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
                class="v-communaute-index__header hem-rm-margins"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div
                        class="fp-grid-coll-16-24"
                    >
                        <h1>
                            Communauté des chercheur•euse•s
                        </h1>
                    </div>
                </div>

            </div>

            <div
                class="fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div
                    class="fp-grid-coll-16-24 v-communaute-index__form"
                >
                    <form>
                        <fieldset
                            class="fp-grid-coll-container fp-grid-coll-container--no-wrap"
                        >
                            <div
                                class="fp-grid-coll-24-24"
                            >
                                <input type="text" placeholder="Recherche">
                            </div>
                            <button>valider la recherche</button>
                        </fieldset>
                        <fieldset
                            class="fp-grid-coll-container"
                        >
                            <div
                                class="fp-grid-coll-8-24"
                            >
                                <select>
                                    <option>Ordre</option>
                                </select>
                            </div>

                            <div
                                class="fp-grid-coll-8-24"
                            >
                                <select>
                                    <option>Département</option>
                                </select>
                            </div>

                            <div
                                class="fp-grid-coll-8-24"
                            >
                                <select>
                                    <option>Disciplines principale</option>
                                </select>
                            </div>

                            <div
                                class="fp-grid-coll-8-24"
                            >
                                <select>
                                    <option>Lieu d'enseignement</option>
                                </select>
                            </div>

                            <div
                                class="fp-grid-coll-8-24"
                            >
                                <select>
                                    <option>Arrivé par année académique</option>
                                </select>
                            </div>
                        </fieldset>

                    </form>
                </div>
            </div>


            <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div
                        class="fp-grid-coll-16-24 v-communaute-index__person-box"
                >
                    <nuxt-link
                        :href="`/communaute/${person.uid}`"
                        class="v-communaute-index__person-box__item hem-rm-margins"
                        v-for="person of communaute.pages"
                    >
                        <h3
                            class="v-communaute-index__person-box__item__user"
                        >
                            {{person.firstname}} <span style="text-transform: uppercase;" >{{person.name}}</span>
                        </h3>
                        <h4
                            class="v-communaute-index__person-box__item__status"
                        >
                            {{person.job}}
                        </h4>
                    </nuxt-link>
                </div>
            </div>
        </template>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import {Ref, UnwrapRef} from "vue";
import {IHemApi_bloks, IHemApi_bloks_image, IHemApi_communaute} from "~/global/hemApi";
import {getCommunityData, getProjectDataByUdi} from "~/global/getDataFromHemApi";

const communaute: Ref<UnwrapRef<null | IHemApi_communaute>> = ref(null)
const errorMessage: Ref<UnwrapRef<null | string>> = ref(null)

onMounted(() => {
    loadCommunauteDataFromHEMAPI()
})

async function loadCommunauteDataFromHEMAPI() {
    const communauteData = await getCommunityData()

    if('error' in communauteData) errorMessage.value = communauteData.error
    else communaute.value = communauteData
}

</script>





<style lang="scss" scoped >
.v-communaute-index {
    background: white;
}

.v-communaute-index__header {
    background-color: #0e264e;
    color: white;
}

.v-communaute-index__person-box {
    margin-top: 10rem;
}

.v-communaute-index__person-box__item {
  display: block;
  border-top: solid 1px black;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.v-communaute-index__person-box__item__user {
    margin: 0;
}

.v-communaute-index__person-box__item__status {

}
</style>

