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
            v-if="useAppStateStore().currentProjectTheme === 'yellow'"
            class="v-project__project-img"
            src="/230628_HEM-page_projet-yellow.jpeg" alt="project prototype"
        >
        <img
            v-if="useAppStateStore().currentProjectTheme === 'brick'"
            class="v-project__project-img"
            src="/230628_HEM-page_projet-dark_red.jpeg" alt="project prototype"
        >
        <img
            v-if="useAppStateStore().currentProjectTheme === 'orange'"
            class="v-project__project-img"
            src="/230628_HEM-page_projet-orange.jpeg" alt="project prototype"
        >
        <img
            v-if="useAppStateStore().currentProjectTheme === 'purple'"
            class="v-project__project-img"
            src="/230628_HEM-page_projet-violet.jpeg" alt="project prototype"
        >
        <img
            v-if="useAppStateStore().currentProjectTheme === 'dark-green'"
            class="v-project__project-img"
            src="/230628_HEM-page_projet-drak_green.jpeg" alt="project prototype"
        >
        <img
            v-if="useAppStateStore().currentProjectTheme === 'green'"
            class="v-project__project-img"
            src="/230628_HEM-page_projet-turquoise.jpeg" alt="project prototype"
        >



        <div
            class="v-project__connected"
        >
            <div
                class="v-project__connected__item"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/green.jpg"
                />
            </div>
            <div
                class="v-project__connected__item"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="orange"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/brick.jpg"
                />
            </div>
            <div
                class="v-project__connected__item"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="purple"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/purple.jpg"
                />
            </div>
            <div
                class="v-project__connected__item"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="brick"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/brick.jpg"
                />
            </div>
            <div
                class="v-project__connected__item"
            >
                <cartel
                    title="Actes du congrès de l’Institut Jaques-Dalcroze"
                    :responsables="[ 'Rémy Campos', 'Pierre Goy', 'Aurélien']"
                    date="2010-2012"
                    theme="dark-green"
                    @cartel-clicked="(cartelElement) => goToProject(cartelElement)"
                    cover="cover/dark-green.png"
                />
            </div>
        </div>

        <div
            class="v-project__end-page"
        >
            <div ref="endOfPage" class="v-project__end-page__detector"></div>
        </div>

    </section>
</template>





<script lang="ts" setup>
import AppHeader from "~/components/appHeader.vue";
import {useAppStateStore} from "~/stores/appState";
import Tag from "~/components/tag.vue";
import {goToProject} from "~/global/goToProject";
import {onMounted} from "@vue/runtime-core";

definePageMeta({
    pageTransition: {
        name: 'over',
    }
})

const endOfPage = ref();

onMounted(() => {
    nextTick(() => {
        if(! (endOfPage.value instanceof HTMLElement) ) return

        const endOfPageObserver = new IntersectionObserver((entries) => {
            entries.forEach(value => {
                if(value.isIntersecting) useRouter().go(-1)
            })
        })

        endOfPageObserver.observe(endOfPage.value)
    })
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
.v-project__project-img {
    display: block;
    width: 100%;
}

.v-project__end-page {

}

.v-project__end-page__detector {
    width: 100%;
    height: 100vh;
    background-color: var(--color-grey);
}

.v-project__connected {
    width: 100%;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 10rem;
    padding-bottom: calc(10rem + 33.333vh); // height of scroll detection space
    flex-wrap: nowrap;
    gap: var(--gutter-xl);
    background-color: var(--color-grey);

    > * {
        flex-shrink: 0;
    }

    > *:first-child {
        margin-left: calc(100% / 24 * 4);
    }

    > *:last-child {
        margin-right: calc(100% / 24 * 4);
    }
}

.v-project__connected__item {
    width: calc(100% / 24 * 7);
}
</style>
