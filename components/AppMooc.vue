<template>
    <section class="v-app-mooc"
    >
      <div class="v-app-mooc__body">
        <div class="v-app-mooc__content hem-rm-margins">
          <h4 class="v-app-mooc__title"
          >{{ data.content.mooc_title }}</h4>
          <p class="v-app-mooc__caption"
             v-html="data.content.caption"
          />
          <a class="v-app-mooc__link app-button-variant"
             :href="data.content.url"
          >accéder au cours en ligne</a>
        </div>

        <img class="v-app-mooc__img"
             :src="data.array_cover[0]?.resize.small"
             alt="image de couverture"
        />
      </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {IHemApi_bloks_mooc} from "~/global/hemApi";

defineProps<{
    data: IHemApi_bloks_mooc
}>()
</script>





<style lang="scss" scoped >
.v-app-mooc {
  border: solid 1px;
  border-radius: 1rem;
}

.v-app-mooc__body {
  display: flex;
  box-sizing: border-box;
}

.v-app-mooc__content {
  box-sizing: border-box;
  width: 100%;
  padding: var(--gutter-xl);
}

.v-app-mooc__img {
  display: block;
  height: auto;
  flex-shrink: 0;
  width: 20rem;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
}

</style>

<style lang="scss">
.orange {
  .v-app-mooc {
    background-color: var(--color-main--orange);
  }
}

.purple {
  .v-app-mooc {
    background-color: var(--color-main--purple);
  }
}

.brick {
  .v-app-mooc {
    background-color: var(--color-main--brick);
  }
}

.dark-green {
  .v-app-mooc {
    background-color: var(--color-main--dark-green);
  }
}

.green {
  .v-app-mooc {
    background-color: var(--color-main--green);
  }
}

.yellow {
  .v-app-mooc {
    background-color: var(--color-main--yellow);
  }
}
</style>
