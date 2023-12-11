<template>
    <div
        class="v-app"

        :class="{
            'nav-is-open':      useAppStateStore().menuIsOPen,
            'search-is-open':   useAppStateStore().searchIsOpen,
        }"
    >
        <div
            class="v-app__nav"
        >
            <app-nav/>
        </div>
        <NuxtPage/>
    </div>
</template>





<style lang="scss" scoped>
.v-app {
}

.v-app__nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
</style>


<style lang="scss">

.over-enter-active {
    transition: opacity .25s 0s linear;
}
.over-leave-active {
    transition: transform 1s ease-in-out;
}
.over-enter-from {
    transform: scale(1);
    opacity: 0;
}
.over-leave-to {
    transform: translate(0, -100vh) !important;
}


.page-enter-active,
.page-leave-active {
    transition: transform 1s;
    transform-origin: bottom;
}
.page-enter-from {
    transform: scale(1);
}
.page-leave-to {
    transform: scale(1);
}
</style>




<script lang="ts" setup >

import {useAppStateStore} from "~/stores/appState"



useRouter().beforeEach((to, from, next) => {

    useAppStateStore().menuIsOPen = false
    useAppStateStore().searchIsOpen = false
    useAppStateStore().activeTag = ""
    useAppStateStore().activeCategory = ""

    if(to.name === 'project-projectUid' ) {
        window.setTimeout(() => {
            next()
        }, 750)
    } else {
        next()
    }
})

</script>
