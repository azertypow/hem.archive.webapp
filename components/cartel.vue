<template>
    <a
        class="v-cartel"
        :class="theme"
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
    </a>
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
}
.v-cartel__title {
    position: absolute;
    top: var(--gutter);
    left: var(--gutter);
    font-weight: 400;
    font-size: 4rem;
    line-height: 4rem;
    margin: 0;
}

.v-cartel__details {
    position: absolute;
    bottom: var(--gutter);
    left: var(--gutter);

    p {
        margin: 0;
    }
    h5 {
        margin-bottom: 0;
    }
}

.green {
    background-color: var(--color-main--green);
}

.yellow {
    background-color: var(--color-main--yellow);
}

.purple {
    background-color: var(--color-main--purple);
}

.dark-green {
    background-color: var(--color-main--dark-green);
}

.orange {
    background-color: var(--color-main--orange);
}

.brick {
    background-color: var(--color-main--brick);
    color: white;
}

</style>
