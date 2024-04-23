<template>
    <section
        ref="appGallery"
        class="v-app-gallery"
        :class="{
            'has-only-one-item': appGalleryData.content.length === 1,
            'is-scrolled': galleryScrollLeft > 10,
        }"
    >
        <div class="v-app-gallery__content"
        >
            <div class="v-app-gallery__content__scroll-view"
                 @scroll="onScrollInGallery"
            >
                <div class="v-app-gallery__content__scroll-view__item"
                     v-for="image of appGalleryData.content"
                >
                    <img class="v-app-gallery__content__scroll-view__item__img"
                         :alt="image.alt || 'pas de texte alt'"
                         :src="image.resize.large"
                    >
                    <h6 class="v-app-gallery__content__scroll-view__item__text"
                        v-if="image.caption && image.caption.length > 0" v-html="image.caption"></h6>
                </div>
            </div>
        </div>
        <h6 class="v-app-gallery__text"
            v-if="appGalleryData.caption && appGalleryData.caption.length > 0"
            v-html="appGalleryData.caption"
        ></h6>
    </section>
</template>




<script setup lang="ts">
import {IHemApi_blocks_gallery} from "~/global/hemApi";

const props = defineProps<{
    appGalleryData: IHemApi_blocks_gallery
}>()

const appGallery: Ref<any> = ref()

const galleryScrollLeft = ref(0)

function onScrollInGallery(ev: Event) {
    if( ! (ev.target instanceof HTMLElement) ) return
    galleryScrollLeft.value = ev.target.scrollLeft
}

</script>





<style lang="scss" scoped >
@use '@/assets/scss-var';

.v-app-gallery__content {
    --gallery-gap: 2rem;

    @media (max-width: scss-var.$breakpoint-reg) {
        --gallery-gap: 1rem;
    }

    position: relative;

    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 2rem;
        z-index: 1;
        background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    }

    &:before {
        left: 0;
    }

    &:after {
        right: 0;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 255));
    }

    .is-scrolled & {
        &:before {
            background: linear-gradient(to right, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0));
        }
    }
}

.v-app-gallery__content__scroll-view {
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: var(--gallery-gap);
    overflow: auto;
    height: 50vh;

    .has-only-one-item & {
        justify-content: center;
    }

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {

        .orange & {
            background-color: var(--color-main--orange);
        }
        .purple & {
            background-color: var(--color-main--purple);
        }
        .brick & {
            background-color: var(--color-main--brick);
        }
        .dark-green & {
            background-color: var(--color-main--dark-green);
        }
        .green & {
            background-color: var(--color-main--green);
        }
        .yellow & {
            background-color: var(--color-main--yellow);
        }
        border-radius: 1rem;
    }
}

.v-app-gallery__content__scroll-view__item {
    height: 100%;
    flex-shrink: 0;

    &:last-child {
        padding-right: 25%;

        .has-only-one-item & {
            padding: 0;
        }
    }

    h6 {
        margin-top: 1rem;
    }
}

img {
    display: block;
    width: auto;
    height: 100%;
}
</style>
