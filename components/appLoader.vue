<template>
    <div
        class="v-app-loader"
    >
        <img
            class="v-app-loader__img"
            alt="Chargement de la page en cour"
            :src="isBlack ? '/logo-hem.svg' : '/logo-hem--white.svg'"
        >
    </div>
</template>





<script setup lang="ts">
const props = defineProps<{
    isBlack?: boolean
}>()
</script>





<style lang="scss" scoped >
.v-app-loader {
    position: relative;
    animation: opacityLoop 2s infinite;
    animation-timing-function: ease-in-out;
    width: 100%;
    height: 100%;
    max-width: 15rem;
    max-height: 15rem;
}

.v-app-loader__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@keyframes opacityLoop {
    0%      {opacity: 0.75; transform: scale(1)}
    20%     {opacity: 0.75; transform: scale(1)}
    50%     {opacity: 0.25; transform: scale(.95)}
    80%     {opacity: 0.75; transform: scale(1)}
    100%    {opacity: 0.75; transform: scale(1)}
}

</style>
