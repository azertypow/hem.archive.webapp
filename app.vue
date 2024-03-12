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
      <transition>
        <div class="v-app__cache"
             @click="closeMenuAndResearch"
             v-if="useAppStateStore().searchIsOpen || useAppStateStore().menuIsOPen"
        ></div>
      </transition>
        <NuxtPage/>
    </div>
</template>





<style lang="scss" scoped>
.v-app__cache {
  background: rgba(0, 0, 0, .75);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  backdrop-filter: blur(2px);
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
import {getTagsList} from "~/global/getDataFromHemApi";


onMounted(async () => {
  const tagsList = await getTagsList()
  useAppStateStore().tag_themeList = tagsList.listTheme
  useAppStateStore().tag_axesList = tagsList.listAxes
})

function closeMenuAndResearch() {
  useAppStateStore().menuIsOPen = false
  useAppStateStore().searchIsOpen = false
}

useRouter().beforeEach((to, from, next) => {


    useAppStateStore().menuIsOPen = false
    useAppStateStore().searchIsOpen = false
    useAppStateStore().activeTag_axes = null
    if( from.name !== "project-projectUid" ) useAppStateStore().activeTag_theme = null

    if(to.name === 'project-projectUid' ) {
        window.setTimeout(() => {
            next()
        }, 750)
    } else {
        next()
    }
})

</script>
