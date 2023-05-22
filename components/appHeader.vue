<template>
    <section
            :style="{
              backgroundColor: props.backgroundColor
            }"
            class="v-app-header">

        <div
          class="v-app-header__text">
          <img
                  alt=""
                  class="v-app-header__text__top"
                  :src="'./'+textTopSrc">

          <img
                  alt=""
                  class="v-app-header__text__bottom"
                  :src="'./'+textBottomSrc">
        </div>

        <img
                alt=""
                class="v-app-header__img"
                :src="'./'+imgSrc"
        >
        <img
                alt=""
                class="v-app-header__tags"
                src="./tags.jpeg"
        >
    </section>
</template>


<script lang="ts" setup>
const props = defineProps<{
    index: string
    backgroundColor: string
}>()

const textTopSrc    = computed(() => props.index + '-1.jpg')
const textBottomSrc = computed(() => props.index + '-2.jpg')
const imgSrc        = computed(() => props.index + '-3.jpg')

</script>


<style lang="scss" scoped>
.v-app-header {
  padding-top: 38px;
  padding-bottom: 38px;
  display: flex;
  scroll-snap-align: center;
  flex-wrap: nowrap;
  height: 100vh;
  box-sizing: border-box;
  position: relative;

  .v-app-header__text {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    mix-blend-mode: multiply;
  }

  .v-app-header__text__top {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
  }

  .v-app-header__text__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    mix-blend-mode: multiply;
  }

  .v-app-header__img {
    display: block;
    width: 50%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: color-burn;
  }

  .v-app-header__tags {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
}
</style>
