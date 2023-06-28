<template>
    <div class="v-app">
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
    max-width: 1512px;
    margin: auto;
    padding-top: var(--nav-height);
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
</style>


<style lang="scss">

.over-enter-active {
    transition: transform .5s, opacity .5s 0s linear;
}
.over-leave-active {
    transition: transform 1s;
}
.over-enter-from {
    transform: scale(1);
    opacity: 0;
}
.over-leave-to {
    transform: translate(0, -100vh);
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
    if(from.fullPath === '/') {
        window.setTimeout(() => {
            next()
        }, 1000)
    } else {
        next()
    }
})

</script>
