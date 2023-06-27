<template>
    <div class="v-app">
        <div
            class="v-app__nav"
        >
            <app-nav/>
        </div>
        <NuxtPage/>
    </div>
</template>





<style lang="scss" scoped>
.v-app {
    max-width: 1512px;
    margin: auto;
    padding-top: var(--nav-height);
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
</style>


<style lang="scss">

.over-enter-active,
.over-leave-active {
    transition: transform 1s, opacity .5s .5s;
}
.over-enter-from {
    transform: scale(0.9);
    opacity: 0;
}
.over-leave-to {
    transform: translate(0, -100vh);
}


.page-enter-active,
.page-leave-active {
    transition: opacity .5s, transform .5s;
}
.page-enter-from {
    opacity: 1;
    transform: translate(-1rem);
}
.page-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
</style>




<script lang="ts" setup >

</script>
