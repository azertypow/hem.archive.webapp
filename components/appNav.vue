<template>
    <section class="v-app-nav" >
        <div class="v-app-nav__title">Plateforme Recherche HEM</div>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-app-nav {
  background-color: #d6d7d1ff;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  height: var(--nav-height);
  display: flex;
  flex-direction: column;
}

.v-app-nav__title {
  text-align: center;
  margin: auto;
  font-size: 3rem;
}
</style>
