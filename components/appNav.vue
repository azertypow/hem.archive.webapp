<template>
    <section class="v-app-nav" >
        <div class="v-app-nav__title">Plateforme Recherche HEM</div>
        <nuxt-link
            class="v-app-nav__go-back"
            v-if="useRouter().currentRoute.value.path !== '/'"
            href="/"
        >go back</nuxt-link>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-app-nav {
  background-color: #d6d7d1ff;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  height: var(--nav-height);
  display: flex;
  flex-direction: column;
    position: relative;
}

.v-app-nav__title {
  text-align: center;
  margin: auto;
  font-size: 3rem;
}

.v-app-nav__go-back {
    position: absolute;
    right: var(--gutter);
    top: 50%;
    transform: translate(0, -50%);
}
</style>
