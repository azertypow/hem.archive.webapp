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





<script lang="ts" setup >

</script>
