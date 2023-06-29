<template>
    <section
        class="v-app-nav"
        :class="{
            'nav-is-open': useAppStateStore().menuIsOPen,
        }"
    >
        <div class="v-app-nav__title">Plateforme Recherche HEM</div>

        <div
            class="v-app-nav__right"
        >
            <div
                @click="useAppStateStore().searchIsOpen = !useAppStateStore().searchIsOpen"
            >recherche</div>
            <div
                @click="useAppStateStore().menuIsOPen = !useAppStateStore().menuIsOPen"
            >menu</div>
            <div
                class="v-app-nav__go-back"
                v-if="useRouter().currentRoute.value.path !== '/'"
                @click="useRouter().go(-1)"
            >go back</div>

        </div>

        <div
            class="v-app-nav__menu"
            v-if="useAppStateStore().menuIsOPen"
        >
            <div class="hem-font-xl" >À propos</div>
            <div class="hem-font-xl" >Communauté</div>
            <div class="hem-font-xl" >Contact</div>
            <div class="hem-font-xl" >Impressum</div>
        </div>

    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import {useAppStateStore} from "~/stores/appState";
</script>





<style lang="scss" scoped >
.v-app-nav {
    background-color: var(--color-grey);
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    height: var(--nav-height);
    display: flex;
    flex-direction: column;
    position: relative;
    transition:
        color .25s ease-in-out,
        background-color .25s ease-in-out,
        border-radius .25s ease-in-out;

    &.nav-is-open {
        background-color: black;
        color: white;
        border-radius: 0;
    }
}

.v-app-nav__title {
    text-align: center;
    margin: auto;
    font-size: 3rem;
    font-family: 'PPAgrandir', sans-serif;
}

.v-app-nav__right {
    user-select: none;
    position: absolute;
    top: 0;
    display: flex;
    right: var(--gutter);
    height: 100%;
    align-items: center;
    gap: 2rem;

    > * {
        cursor: pointer;
    }
}

.v-app-nav__go-back {
}

.v-app-nav__menu {
    background: black;
    width: 100%;
    color: white;
    position: fixed;
    top: 5rem;
    text-align: center;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding-bottom: 20rem;
    padding-top: 5rem;

    animation: open-menu .5s .25s ease-in-out;
    animation-fill-mode: forwards;
    transform: scale(1, 0);
    transform-origin: top;

    > * {
        font-weight: 400;
        font-size: 5rem;
        line-height: 5rem;
        margin-top: 2rem;
        font-family: 'PPAgrandir', sans-serif;

        animation: open-menu__text .1s .75s ease-in-out;
        animation-fill-mode: forwards;
        opacity: 0;
        transform-origin: top;
    }
}

@keyframes open-menu {
    0% {
        transform: scale(1, 0);
    }

    100% {
        transform: scale(1, 1);
    }
}


@keyframes open-menu__text {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>
