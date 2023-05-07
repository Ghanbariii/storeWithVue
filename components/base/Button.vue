<template>
    <button :class="['btn',
        { 'btn-sm': size === 'sm' },
        { 'btn-lg': size === 'lg' },
        { 'w-100': wFull },
        outline ? `btn-outline-${color}` : `btn-${color}`,
    ]">
        <slot />
        <slot name="icon" />
    </button>
</template>
<script setup lang="ts">
defineProps({
    size: {
        default: "normal",
        type: String,
    },
    wFull: {
        default: false,
        type: Boolean,
    },
    outline: {
        default: false,
        type: Boolean,
    },
    color: {
        default: "primary",
        type: String,
    },
})
</script>