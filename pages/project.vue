<template>
    <section class="v-project" >
        <app-header
                background-color="#aae1c7"
                index="1"
        />
    </section>
</template>





<script lang="ts" setup>
import AppHeader from "~/components/appHeader.vue";
import {useAppStateStore} from "~/stores/appState";
import Tag from "~/components/tag.vue";

// defineProps<{
// }>()

definePageMeta({
    pageTransition: {
        name: 'over',
    }
})

const tags          = useAppStateStore().$state.tags
const categories    = useAppStateStore().$state.categories

function onToggleTag(value: string) {
    useAppStateStore().toggleActiveTag(value)
}

function onToggleCategory(value: string) {
    useAppStateStore().toggleActiveCategory(value)
}

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
}
.v-project__categories {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.v-project__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.v-project__tag {
    padding: .5rem;
}
</style>
