<template>
    <header
        class="v-app-header"
        :class="[getClassColorUidFromAxesUid(axesUid)]"
    >
        <div
            class="fp-grid-coll-container v-app-header__container"
        >
            <div
                class="fp-grid-coll-12-24 fp--sm-grid-coll-24-24"
            >
                <div
                    class="v-app-header__left"
                >
                    <h1 class="" v-html="italicMarkdownToHtml(title)" ></h1>
                    <div>
                        <div class="v-app-header__title">
                            <div><h5>Responsable</h5></div>
                            <div>
                                <p v-for="responsable of responsables">{{responsable.firstname}} {{responsable.Name}}</p>
                            </div>
                        </div>
                        <div class="v-app-header__partners"
                             v-if="partners && partners.length > 0"
                        >
                            <div><h5>Partenaire<template v-if="listWithMoreThanOneLine(partners)" >s</template></h5></div>
                            <div v-html="partners"></div>
                        </div>
                        <div class="v-app-header__date" >
                            <div><h5>Période</h5></div>
                            <div>{{ date }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="fp-grid-coll-12-24 fp--sm-grid-coll-24-24"
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
import {italicMarkdownToHtml} from "~/global/italicMarkdownToHtml";
import {listWithMoreThanOneLine} from "~/global/listWithMoreThanOneLine";

const props = defineProps<{
    title: string,
    axesUid: AxesUid,
    responsables?: IHemApi_authorInfo[],
    date?: string,
    cover?: string,
    partners?: string,
}>()

</script>


<style lang="scss" scoped>
@use '@/assets/scss-var';

.v-app-header {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > * {
        height: 100%;
    }

    @media (max-width: scss-var.$breakpoint-sm) {
        height: auto;

        > * {
            height: auto;
        }
    }
}

.v-app-header__container {
    @media (max-width: scss-var.$breakpoint-sm) {
        flex-direction: column-reverse;
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

    @media (max-width: scss-var.$breakpoint-l) {
        padding: 3rem 2rem 3rem 1rem;
    }

    @media (max-width: scss-var.$breakpoint-sm) {
        padding: 4rem 1rem;
    }

    .brick &,
    .dark-green & {
        color: white;
    }
}

.v-app-header__right {
    height: 100%;
    mix-blend-mode: color-burn;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: scss-var.$breakpoint-sm) {
        height: 50vh;
        width: 100%;
    }
}

.v-app-header__title,
.v-app-header__partners,
.v-app-header__date {
    display: flex;
    margin-top: 2rem;

    > *:first-child {
        width: calc(100% / 4 * 1);
    }

    @media (max-width: scss-var.$breakpoint-reg) {
        flex-direction: column;
    }

    ul > li {
        :before {
            content: none;
        }
    }
}

.brick,
.dark-green {

    .v-app-header__right {
        mix-blend-mode: color-dodge;
    }
}
</style>

<style lang="scss">
.v-app-header__partners {
  ul {
    margin: 0;
    padding: 0;
    li {
      &:before {
        content: none;
      }
    }
  }
}
</style>
