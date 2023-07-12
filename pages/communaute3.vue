<template>
    <section
        class="v-communaute3"
        :class="[useAppStateStore().currentProjectTheme]"
        @click="useRouter().push({name: 'communaute'})"
    >
        <img
            class="v-communaute3__project-img"
            src="/230707_HEM-pages_communaute3.jpeg" alt="project prototype"
        >
    </section>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

definePageMeta({
    pageTransition: {
        name: 'over',
    }
})

</script>





<style lang="scss" scoped >
.v-communaute3 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    padding-top: 5rem;
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
.v-communaute3__project-img {
    display: block;
    width: 100%;
}
</style>
