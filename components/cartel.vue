<template>
    <nuxt-link
        class="v-cartel"
        :class="theme"
        href="/project"
    >
        <h2
            class="v-cartel__title"
        >{{title}}</h2>
        <div
            class="v-cartel__details"
        >
            <h5>Responsabbles</h5>
            <p
                v-for="responsable of responsables"
            >{{responsable}}</p>

            <h5>Période</h5>
            <p
            >{{date}}</p>
        </div>
        <img
            class="v-cartel__cover"
            src="https://www.hesge.ch/hem/sites/default/files/styles/fiche_enseign_projet_publi/public/recherche/images/waouh_photo_choeur_escalier_1.jpg?itok=zk_Gu-kH"
            alt="cover"
        >
    </nuxt-link>
</template>





<script lang="ts" setup>
defineProps<{
    title: string,
    responsables: string[],
    date: string,
    theme: 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick',
}>()
</script>





<style lang="scss" scoped >
.v-cartel {
    background-color: red;
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
    top: var(--gutter);
    left: var(--gutter);
    font-weight: 400;
    font-size: 4rem;
    line-height: 4rem;
    margin: 0;
    font-family: 'PPAgrandir', sans-serif;
    max-height: 16rem;
    overflow: hidden;
    text-overflow: ellipsis;

    //transition: opacity .25s ease-in-out;
    opacity: 1;

    .v-cartel:hover & {
        opacity: 0;
    }
}

.v-cartel__details {
    position: absolute;
    top: 16rem;
    left: var(--gutter);

    //transition: opacity .25s ease-in-out;
    opacity: 1;

    p {
        margin: 0;
    }
    h5 {
        margin-bottom: 0;
    }
    .v-cartel:hover & {
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

    .v-cartel:hover & {
        opacity: 1;
    }

    .v-cartel.brick &,
    .v-cartel.dark-green & {
        mix-blend-mode: color-dodge;
    }
}

</style>
