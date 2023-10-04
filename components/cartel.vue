<template>
    <div
        class="v-cartel"
        ref="cartelElement"
    >
        <nuxt-link
            class="v-cartel__link"
            :class="getClassColorUidFromAxesUid(projectInfo.axes[0].uid)"
            :href="`/project/${projectInfo.uid}`"
            @click="onCartelClicked"
        >
            <h2
                class="v-cartel__title"
            >{{projectInfo.title}}</h2>
            <div
                class="v-cartel__details"
            >
                <h5>Responsables</h5>
                <p
                    v-for="responsable of projectInfo.authors"
                >{{responsable.firstname}} {{responsable.Name}}</p>

                <h5>Période</h5>
                <p
                >{{`${new Date(projectInfo.dateStart).toLocaleString('FR-fr', {month: 'long', year:'numeric'})} - ${new Date(projectInfo.dateEnd).toLocaleString('FR-fr', {month: 'long', year:'numeric'})}`}}</p>
            </div>
            <img
                class="v-cartel__cover"
                :src="Object.values(projectInfo.cover)[0].resize.large"
                alt="cover"
            >
        </nuxt-link>
    </div>
</template>





<script lang="ts" setup>
import {Ref} from "vue";
import {IHemApi_projectInfo} from "~/global/hemApi"
import {getClassColorUidFromAxesUid} from "~/global/getClassColorUidFromAxesUid";

const props = defineProps<{
    projectInfo: IHemApi_projectInfo
}>()

const emit = defineEmits<{
    cartelClicked: [cartelElement: HTMLElement]
}>()

const cartelElement: Ref<HTMLElement | null> = ref(null)

function onCartelClicked() {
    if( cartelElement.value instanceof HTMLElement) {
        emit('cartelClicked', cartelElement.value)
    } else {
        console.error("cartelElement.value isn't instanceof HTMLElement", cartelElement.value)
    }
}
</script>





<style lang="scss" scoped >
.v-cartel {
    position: relative;
    container-name: container-cartel;
    container-type: inline-size;

    &.is-full { // for page transition started in parent
        transform: scale(100);
        transition: transform .75s cubic-bezier(1,0,1,0);
        z-index: 1000;

        .v-cartel__title,
        .v-cartel__details, {
            display: none !important;
        }

        .v-cartel__cover {
            opacity: 0 !important;
            transition: opacity .25s ease-in !important;
        }
    }

}

.v-cartel__link {
    background-color: rgb(50, 50, 50);
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    border-radius: 2rem;
    cursor: pointer;
    display: block;
    overflow: hidden;
    user-select: none;
    color: black;

    &.green {
        background-color: var(--color-main--green);
    }

    &.yellow {
        background-color: var(--color-main--yellow);
    }

    &.purple {
        background-color: var(--color-main--purple);
    }

    &.dark-green {
        background-color: var(--color-main--dark-green);
        color: white;
    }

    &.orange {
        background-color: var(--color-main--orange);
    }

    &.brick {
        background-color: var(--color-main--brick);
        color: white;
    }

    transition: transform .25s ease-in-out;
    transform: scale(1);

    &:hover {
        transform: scale(1.05);
    }
}
.v-cartel__title {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    padding: var(--gutter-xl);
    box-sizing: border-box;
    max-height: 16rem;
    overflow: hidden;
    padding-bottom: 10px;
    text-overflow: ellipsis;

    transition: opacity .15s .15s ease-in-out;
    opacity: 1;

    .v-cartel__link:hover & {
        transition: none;
        opacity: 0;
    }
}

.v-cartel__details {
    position: absolute;
    top: 50%;
    left: var(--gutter-xl);

    transition: opacity .15s .2s ease-in-out;
    opacity: 1;

    *:first-child {
        margin-top: 0 !important;
    }

    p {
        margin: 0;
    }
    h5 {
        margin-bottom: 0;
    }
    .v-cartel__link:hover & {
        transition: none;
        opacity: 0;
    }
}


.v-cartel__cover {
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: color-burn;

    transition: opacity .25s ease-in-out;
    opacity: 0;

    .v-cartel__link:hover & {
        opacity: 1;
    }

    .v-cartel__link.brick &,
    .v-cartel__link.dark-green & {
        mix-blend-mode: color-dodge;
    }
}

@container container-cartel (min-width: 500px) {
        .v-cartel__title {
            font-size: 6rem;
            line-height: 7rem;
            max-height: 24rem;
        }
}

</style>
