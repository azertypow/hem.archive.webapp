<template>
    <div class="v-app">
        <NuxtPage/>
        <nav>
            <NuxtLink href="/"      >00</NuxtLink>
            <NuxtLink href="/01"    >01</NuxtLink>
            <NuxtLink href="/02"    >02</NuxtLink>
            <NuxtLink href="/03"    >03</NuxtLink>
            <NuxtLink href="/04"    >04</NuxtLink>
            <NuxtLink href="/05"    >05</NuxtLink>
            <NuxtLink href="/06"    >06</NuxtLink>
            <NuxtLink href="/07"    >07</NuxtLink>
            <NuxtLink href="/08"    >08</NuxtLink>
            <NuxtLink href="/09"    >09</NuxtLink>
        </nav>
    </div>
</template>





<style lang="scss" scoped>
.filter-test {
    position: fixed;
    top: 0;
    left: 0;
    scroll-snap-type: y mandatory;
    height: 100%;
    width: 100%;
    overflow: auto;
}


.v-app {
    max-width: 1440px;
    margin: auto;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    padding: 20px;
    font-family: sans-serif;
    font-size: 20px;
    color: black;
    background: white;
    box-sizing: border-box;
    height: 100%;

    opacity: 0;

    &:hover {
        opacity: 1;
    }

    > a {
        display: block;
        color: black;
        text-decoration: none;
    }
}
</style>





<script lang="ts" setup >

import AppHeader from "~/components/appHeader.vue";
</script>
