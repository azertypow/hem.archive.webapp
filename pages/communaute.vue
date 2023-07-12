<template>
    <section
        class="v-communaute"
        :class="[useAppStateStore().currentProjectTheme]"
        @click="useRouter().push({name: 'communaute2'})"
    >
        <img
            class="v-communaute__project-img"
            src="/230707_HEM-pages_communaute.jpg" alt="project prototype"
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
.v-communaute {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 5rem;
    z-index: 10;
    background: white;
}
.v-communaute__project-img {
    display: block;
    width: 100%;
    user-select: none;
    cursor: pointer;
}
</style>
