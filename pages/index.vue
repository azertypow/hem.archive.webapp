<template>
    <div class="v-index">
        <svg
                display="none"
                xmlns="http://www.w3.org/2000/svg"><filter id="svgTint"><feColorMatrix type="matrix" values="0.1803921568627451 0.1803921568627451 0.1803921568627451  0 0 1 1 1  0 0 0.6313725490196078 0.6313725490196078 0.6313725490196078  0 0  0 0 0 1 0" /></filter></svg>

        <img class="header" alt="" src="./header.jpeg"/>

        <div class="filter-test">

            <app-header
                    background-color="#aae1c7"
                    index="1"
            />
            <app-header
                    background-color="#f0e380"
                    index="2"
            />
            <app-header
                    background-color="#d1b8ec"
                    index="3"
            />
            <app-header
                    background-color="#d6d7d0"
                    index="4"
            />
            <app-header
                    background-color="#f79c7b"
                    index="5"
            />
            <app-header
                    background-color="#9fd8ff"
                    index="6"
            />

            <!--            SVG FILTER-->
            <!--            <div-->
            <!--                class="filter-test__item"-->
            <!--                style="filter: brightness(140%) contrast(200%) saturate(203%) url(#svgTint); mix-blend-mode: normal"-->
            <!--            >-->
            <!--                <div>text</div>-->
            <!--                <img-->
            <!--                    alt=""-->
            <!--                    src="./1.png"-->
            <!--                >-->
            <!--            </div>-->
        </div>
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
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
</style>





<script lang="ts" setup >

import AppHeader from "~/components/appHeader.vue";
</script>
