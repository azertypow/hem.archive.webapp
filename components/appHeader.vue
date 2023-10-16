<template>
    <header
        class="v-app-header"
        :class="[getClassColorUidFromAxesUid(axesUid)]"
    >
        <div
            class="fp-grid-coll-container"
        >
            <div
                class="fp-grid-coll-12-24"
            >
                <div
                    class="v-app-header__left"
                >
                    <h1 class="">{{ title }}</h1>
                    <div>
                        <div class="v-app-header__title">
                            <div><h5>Responsable</h5></div>
                            <div>
                                <p v-for="responsable of responsables">{{ responsable.firstname }}</p>
                            </div>
                        </div>
                        <div class="v-app-header__partners">
                            <div><h5>Partenaires</h5></div>
                            <div>
                                <p>Jean-Christophe Revel, CRR Paris</p>
                                <p>Mathieu Ferey , CNSM Lyon</p>
                                <p>Pierre Bornachot , Centre Culturel d’Ambronay</p>
                                <p>Nicolas Bucher, Centre de Musique Baroque de Versailles</p>
                            </div>
                        </div>
                        <div class="v-app-header__date" >
                            <div><h5>Période</h5></div>
                            <div>{{ date }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="fp-grid-coll-12-24"
            >
                <div
                    class="v-app-header__right"
                    :style="{
                        backgroundImage: `url(${cover})`,
                    }"
                >
                </div>
            </div>
        </div>
    </header>
</template>


<script lang="ts" setup>

import {onMounted} from "#imports";
import {IHemApi_authorInfo} from "~/global/hemApi"
import {AxesUid, getClassColorUidFromAxesUid} from "~/global/getClassColorUidFromAxesUid";

const props = defineProps<{
    title: string,
    responsables?: IHemApi_authorInfo[],
    date?: string,
    axesUid?: AxesUid,
    cover?: string,
}>()

</script>


<style lang="scss" scoped>
.v-app-header {
    box-sizing: border-box;
    width: 100%;
    height: calc( 100vh - 5rem );

    > * {
        height: 100%;
    }
}

h1, p, h5 {
    margin: 0;
}

.v-app-header__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 3rem 2rem 3rem 5rem;
    box-sizing: border-box;
}

.v-app-header__right {
    height: 100%;
    mix-blend-mode: color-burn;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.v-app-header__title,
.v-app-header__partners,
.v-app-header__date {
    display: flex;
    margin-top: 2rem;

    > *:first-child {
        width: calc(100% / 4 * 1);
    }
}

.brick,
.dark-green {
    color: white;

    .v-app-header__right {
        mix-blend-mode: color-dodge;
    }
}
</style>
