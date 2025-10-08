<template>
    <section
        class="v-app-ausha-player"
    >
        <iframe name="Ausha Podcast Player" frameborder="0"
                loading="lazy"
                :id="cleanedPodcastData.playerId"
                height="220"
                style="border: none; width:100%; height:220px"
                :src="`https://player.ausha.co/?podcastId=${cleanedPodcastData.podcastId}&playlist=false&color=%23000000&v=1&playerId=${cleanedPodcastData.playerId}`"
        />
        <h6 style="margin-top: 0"
            v-html="embedCode.content.caption"
        />
    </section>
</template>





<script setup lang="ts">
import {ComputedRef} from 'vue'
import {IHemApi_blocks__code} from "~/global/hemApi";

const props = defineProps<{
    embedCode: IHemApi_blocks__code
}>()

const cleanedPodcastData: ComputedRef<{ podcastId: string; playerId: string }> = computed(() => {

    const codeParse = new DOMParser().parseFromString(props.embedCode.content.code, 'text/html')
    const iframeElement = codeParse.querySelector('iframe')

    const iframeSrc: string | undefined = iframeElement?.src
    if(iframeSrc === undefined) console.error('iframe code without "src" attribute')

    const iframeId: string | undefined = iframeElement?.id
    if(iframeId === undefined) console.error('iframe code without "id" attribute')

    const iframeURL = new URL(iframeSrc || '')

    const iframePodcastId: string | null = iframeURL.searchParams.get('podcastId')
    if( iframePodcastId === null ) console.error('iframe code hasn\'t "podcastId" src url param')

    return {
        podcastId: iframePodcastId || 'error',
        playerId: iframeId || 'error',
    }
})


</script>





<style lang="scss" >
@use '../assets/__main';

.v-app-ausha-player {
    display: block;
    width: 100%;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

h6 {
    @extend .hem-font-reg;
    margin-top: 0.25rem;
    margin-bottom: 0;
}

iframe {
    border: none;
}
</style>
