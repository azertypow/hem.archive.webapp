<template>
    <div
        class="v-tag"
        @click="$emit('clicked', name)"
    >
        <button
            class="v-tag__button"
            :class="{
                'is-active': isActive
            }"
        >
            {{name}}
        </button>
        <div
            v-if="isActive"
            class="v-tag__close"
        >x</div>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    name: string,
    isActive: boolean
}>()

defineEmits<{
    clicked: [name: string]
}>()

</script>





<style lang="scss" scoped >
.v-tag {
    position: relative;
    cursor: pointer;
    user-select: none;
}

.v-tag__button {
    background: none;
    border: solid 2px black;
    border-radius: 2rem;
    line-height: 2rem;
    padding: 1rem 4rem;
    cursor: pointer;
    background: white;

    &.is-active,
    &:hover {
        background: black;
        color: white;
    }
}

.v-tag__close {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(25%, -50%);
    background: black;
    color: white;
    padding: 1rem;
    border-radius: 50%;
    border: solid 2px white;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
}
</style>
