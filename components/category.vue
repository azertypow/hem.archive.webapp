<template>
    <div
        class="v-category"
        :class="[
            theme,
            {'is-active': isActive},
            {'is-unactive': isUnactive},
        ]"
        @click="$emit('clicked', name)"
    >
        <button
            class="v-category__button"
        >
            {{name}}
        </button>
        <div
            v-if="isActive"
            class="v-category__close"
        >x</div>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    name: string,
    isActive: boolean
    isUnactive: boolean
    theme: 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick',
}>()

defineEmits<{
    clicked: [name: string]
}>()

</script>





<style lang="scss" scoped >
.v-category {
    position: relative;
    cursor: pointer;
    user-select: none;
}

.v-category__button {
    background: white;
    border: solid black 2px;
    border-radius: 2rem;
    line-height: 2rem;
    min-height: 4rem;
    padding: 1rem 2rem;
    cursor: pointer;
    box-sizing: content-box;

    // green
    .v-category.green & {
        background-color: var(--color-main--green);
        border: solid var(--color-main--green) 2px;

    }

    .v-category.is-unactive.green & {
        background-color: white;
        color: var(--color-main--green);
    }

    // yellow
    .v-category.yellow & {
        background-color: var(--color-main--yellow);
        border: solid var(--color-main--yellow) 2px;
    }

    .v-category.is-unactive.yellow & {
        background-color: white;
        color: var(--color-main--yellow);
    }

    // purple
    .v-category.purple & {
        background-color: var(--color-main--purple);
        border: solid var(--color-main--purple) 2px;
    }

    .v-category.is-unactive.purple & {
        background-color: white;
        color: var(--color-main--purple);
    }

    // dark-green
    .v-category.dark-green & {
        background-color: var(--color-main--dark-green);
        border: solid var(--color-main--dark-green) 2px;
        color: white;
    }

    .v-category.is-unactive.dark-green & {
        background-color: white;
        color: var(--color-main--dark-green);
    }

    // orange
    .v-category.orange & {
        background-color: var(--color-main--orange);
        border: solid var(--color-main--orange) 2px;
        color: white;
    }

    .v-category.is-unactive.orange & {
        background-color: white;
        color: var(--color-main--orange);
    }

    // orange
    .v-category.brick & {
        background-color: var(--color-main--brick);
        border: solid var(--color-main--brick) 2px;
        color: white;
    }

    .v-category.is-unactive.brick & {
        background-color: white;
        color: var(--color-main--brick);
    }

    .v-category:hover & {
        background: black !important;
        color: white !important;
    }
}

.v-category__close {
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
