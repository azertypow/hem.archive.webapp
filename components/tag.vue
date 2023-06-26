<template>
    <button class="v-tag" >
        {{name}}
    </button>
</template>





<script lang="ts" setup>
defineProps<{
    name: string,
}>()

</script>





<style lang="scss" scoped >
.v-tag {
    background: none;
    border: solid 2px black;
    border-radius: 2rem;
    line-height: 2rem;
    padding: .5rem;
}
</style>
