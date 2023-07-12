<template>
    <section
        class="v-app-nav"
    >
        <img
            class="v-app-nav__logo"
            src="/logo-hem.svg"
            alt="logo"
        >

        <nuxt-link
            href="/"
            class="v-app-nav__title"

        >Plateforme Recherche HEM</nuxt-link>

        <div
            class="v-app-nav__right"
        >
            <img
                alt="open research"
                src="/ui/HEM-loupe-10pt.png"
                class="v-app-nav__icon v-app-nav__icon--search_open"
                v-if="useRouter().currentRoute.value.fullPath === '/'"
                @click="useAppStateStore().searchIsOpen = !useAppStateStore().searchIsOpen"
            >
            <img
                src="/ui/HEM-close-2.png"
                alt="close project"
                class="v-app-nav__icon v-app-nav__icon--close-project"
                v-if="useRouter().currentRoute.value.path !== '/'"
                @click="useRouter().go(-1)"
            >
            <img
                alt="close menu"
                @click="useAppStateStore().menuIsOPen = !useAppStateStore().menuIsOPen"
                class="v-app-nav__icon v-app-nav__icon--menu_close"
                src="/ui/HEM-crois-10pt.png"
                style="filter: invert(1);"
                v-if="useAppStateStore().menuIsOPen"
            >
            <img
                v-else
                alt="open menu"
                @click="useAppStateStore().menuIsOPen = !useAppStateStore().menuIsOPen"
                class="v-app-nav__icon v-app-nav__icon--menu_open"
                src="/ui/HEM-burger-10pt.png"
            >
        </div>

        <div
            class="v-app-nav__search v-app-nav__animation"
            v-if="useAppStateStore().searchIsOpen"
        >
            <div
                class="v-app-nav__search__content"
            >
                <input type="text" placeholder="recherche">

                <select>
                    <option selected disabled >Nom du projet</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Alphabet du geste : l’art scénique du chanteur d’opéra</option>
                    <option>Apprentissage au clavier : Influence du mouvement corporel lorem sample</option>
                    <option>Art.School. Differences</option>
                    <option>Aux origines du piano français</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Alphabet du geste : l’art scénique du chanteur d’opéra</option>
                    <option>Apprentissage au clavier : Influence du mouvement corporel lorem sample</option>
                    <option>Art.School. Differences</option>
                    <option>Aux origines du piano français</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                    <option>Actes du congrès de l’Institut Jaques-Dalcroze</option>
                </select>
                <select>
                    <option selected disabled >Responsable de projet</option>
                </select>
                <select>
                    <option selected disabled >Membres de l’équipe</option>
                </select>
                <select>
                    <option selected disabled >Début du projet</option>
                </select>
                <select>
                    <option selected disabled >Partenaires</option>
                </select>
                <select>
                    <option selected disabled>Objets</option>
                </select>
                <select>
                    <option selected disabled>Matières</option>
                </select>

            </div>



        </div>

        <div
            class="v-app-nav__menu v-app-nav__animation"
            v-if="useAppStateStore().menuIsOPen"
        >
            <div class="hem-font-xl" >À propos</div>
            <nuxt-link
                href="/communaute"
                class="hem-font-xl"
            >Communauté</nuxt-link>
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition:
        color .25s ease-in-out,
        background-color .25s ease-in-out,
        border-radius .25s ease-in-out;

    .nav-is-open & {
        background-color: black;
        color: white;
        border-radius: 0;
    }

    .search-is-open & {
        border-radius: 0;
    }
}

.v-app-nav__icon {
    display: block;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem 0;

    &.v-app-nav__icon--menu_close {
        padding: 1rem 1.35rem;
    }

    &.v-app-nav__icon--search_open {

    }


}
.nav-is-open {
    .v-app-nav__icon.v-app-nav__icon--search_open {
        filter: invert(1);
    }
}

.v-app-nav__logo {
    display: block;
    height: 3rem;
    padding-left: var(--gutter-xl);
}

.v-app-nav__title {
    text-align: center;
    margin: auto;
    font-size: 3rem;
    font-family: 'PPAgrandir', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    text-decoration: none;
    color: inherit;
}

.v-app-nav__right {
    user-select: none;
    top: 0;
    display: flex;
    padding-right: var(--gutter-xl);
    height: 100%;
    align-items: center;
    gap: 2rem;

    > * {
        cursor: pointer;
    }
}

.v-app-nav__icon--close-project {
    display: block;
}

.v-app-nav__search {
    background: var(--color-grey);
    width: 100%;
    color: white;
    position: fixed;
    top: 13rem;
    text-align: center;
    border-bottom-left-radius: 8rem;
    border-bottom-right-radius: 8rem;
    animation-delay: .5s !important;

    > * {
        animation-delay: 1s !important;
    }
}

.v-app-nav__search__content {
    max-width: 1100px;
    margin: auto;
    width: 100%;
    padding: 5rem var(--gutter-xl) 10rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: var(--gutter-xl);

    > input[type='text'] {
        width: 100%;
    }

    > select {
        width: calc( ( ( 100% + var(--gutter-xl) )  / 3 ) - var(--gutter-xl) );
    }
}

.v-app-nav__menu {
    background: black;
    width: 100%;
    color: white;
    position: fixed;
    top: 5rem;
    text-align: center;
    border-bottom-left-radius: 8rem;
    border-bottom-right-radius: 8rem;
    padding-bottom: 10rem;
    padding-top: 5rem;

    > * {
        display: block;
        font-weight: 400;
        font-size: 5rem;
        line-height: 5rem;
        margin-top: 2rem;
        font-family: 'modernGothic', sans-serif;
        text-decoration: none;
        color: inherit;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}

.v-app-nav__animation {
    animation: open-menu .5s .25s ease-in-out;
    animation-fill-mode: forwards;
    transform: scale(1, 0);
    transform-origin: top;

    > * {
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
