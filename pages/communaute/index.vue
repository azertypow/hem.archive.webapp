<template>
    <section class="v-communaute-index" >
        <template
                v-if="communaute === null"
        >
            <div
                class="v-communaute-index__header"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center v-communaute-index__header__box"
                >
                    <div
                        class="fp-grid-coll-16-24 hem-rm-margins fp-grid-row-container fp-grid-row-container--center fp-grid-row-container--align-center"
                    >
                        <div class="hem-loader" ></div>
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
                class="v-communaute-index__header"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center v-communaute-index__header__box"
                >
                    <div
                        class="fp-grid-coll-16-24 hem-rm-margins fp-grid-row-container fp-grid-row-container--center"
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
                    <div class="hem-form">
                        <input type="text" placeholder="Recherche">
                        <button>recherche</button>
                    </div>
                    <div class="hem-form">
                        <select>
                            <option selected disabled>Ordre</option>
                        </select>
                    </div>
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

    window.setTimeout(() => {
        if('error' in communauteData) errorMessage.value = communauteData.error
        else communaute.value = communauteData
    }, 2_000)

}

</script>





<style lang="scss" scoped >
.v-communaute-index {
    background: white;
}

.v-communaute-index__form {
    display: flex;
    flex-direction: column;
    gap: var(--gutter-xl);
    margin-top: 8rem;
}

.v-communaute-index__header {
    margin-top: var(--nav-height);
    background-color: #0e264e;
    color: white;
    height: 30rem;
}

.v-communaute-index__header__box {
    height: 100%;
}

.v-communaute-index__person-box {
    margin-top: 8rem;
}

.v-communaute-index__person-box__item {
    display: block;
    border-top: solid 2px black;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: black;
    text-decoration: none;
}

.v-communaute-index__person-box__item__user {
    margin: 0;
}

.v-communaute-index__person-box__item__status {
    margin-top: 0;
    margin-bottom: 0;
}
</style>

