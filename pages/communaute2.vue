<template>
    <section
        class="v-communaute2"
        :class="[useAppStateStore().currentProjectTheme]"
        @click="useRouter().push({name: 'communaute'})"
    >
        <img
            class="v-communaute2__project-img"
            src="/230707_HEM-pages_communaute2.jpg" alt="project prototype"
        >
    </section>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

definePageMeta({
    pageTransition: false,
})

</script>





<style lang="scss" scoped >
.v-communaute2 {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 5rem;
    z-index: 10;
    background: white;
    left: 50%;
    transform: translate(-50%, 0);
}
.v-communaute2__project-img {
    display: block;
    width: 100%;
    user-select: none;
    cursor: pointer;
}
</style>
