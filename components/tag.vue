<template>
    <div
        class="v-tag"
        @click="$emit('clicked')"
    >
        <button
            class="v-tag__button"
            :class="{
                'is-active': isActive
            }"
        >
            {{title}}
        </button>
        <div
            v-if="isActive"
            class="v-tag__close"
        ><span>x</span></div>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    title?: string,
    isActive?: boolean,
    uri?: string,
}>()

defineEmits<{
    clicked: []
}>()

</script>





<style lang="scss" scoped >
.v-tag {
    position: relative;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
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
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
