<template>
    <header class="v-app-header">
        <div
            class="fp-grid-coll-container"
        >
            <div
                class="fp-grid-coll-12-24"
            >
                <div
                    class="v-app-header__left"
                >
                    <h1 class="" >{{title}}</h1>
                    <div>
                        <div class="v-app-header__title">
                            <div><h5>Responsable</h5></div>
                            <div>
                                <p v-for="responsable of responsables">{{responsable}}</p>
                            </div>
                        </div>
                        <div
                            class="v-app-header__content"
                        >
                            <div>
                                <div><h5>Partenaires</h5></div>
                                <div>
                                    <p>Jean-Christophe Revel, CRR Paris</p>
                                    <p>Mathieu Ferey , CNSM Lyon</p>
                                    <p>Pierre Bornachot , Centre Culturel d’Ambronay</p>
                                    <p>Nicolas Bucher, Centre de Musique Baroque de Versailles</p>
                                </div>
                            </div>
                            <div>
                                <div><h5>Période</h5></div>
                                <div>{{date}}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div
                class="fp-grid-coll-12-24"
            >
                <div
                    class="v-app-header__right"
                >
                    <img :src="cover" alt="cover" />
                </div>
            </div>
        </div>
    </header>
</template>


<script lang="ts" setup>

const props = defineProps<{
    title: string,
    responsables: string[],
    date: string,
    theme: 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick' | "",
    cover: string,
}>()

</script>


<style lang="scss" scoped>
.v-app-header {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    padding: 0 5rem;
}

h1, p, h5 {
    margin: 0;
}
</style>
