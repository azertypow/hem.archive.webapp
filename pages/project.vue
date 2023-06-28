<template>
    <section
        class="v-project"
        :class="[useAppStateStore().currentProjectTheme]"
    >
        <app-header
            :theme="useAppStateStore().currentProjectTheme"
            :date="useAppStateStore().currentProjectDate"
            :responsables="useAppStateStore().currentProjectResponsables"
            :title="useAppStateStore().currentProjectTitle"
            :cover="useAppStateStore().currentProjectCover"
        />
        <img
            class="v-project__project-img"
            src="/230628_HEM-page_projet.jpeg" alt="project prototype"
        >
    </section>
</template>





<script lang="ts" setup>
import AppHeader from "~/components/appHeader.vue";
import {useAppStateStore} from "~/stores/appState";
import Tag from "~/components/tag.vue";

definePageMeta({
    pageTransition: {
        name: 'over',
    }
})

</script>





<style lang="scss" scoped >
.v-project {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 6rem;
    z-index: 10;
    background: var(--color-main--green);

    &.green {
        background: var(--color-main--green);
    }

    &.yellow {
        background: var(--color-main--yellow);
    }

    &.purple {
        background: var(--color-main--purple);
    }

    &.dark-green {
        background: var(--color-main--dark-green);
    }

    &.orange {
        background: var(--color-main--orange);
    }

    &.brick {
        background: var(--color-main--brick);
    }

}
.v-project__project-img {
    display: block;
    width: 100%;
}
</style>
