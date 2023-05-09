<template>
    <div>
        <button @click="refresh()">Click</button>
        <div>{{ data }}</div>
        <div v-if="pending">Loading...</div>
        <div v-else> {{ data }}</div>
    </div>
</template>

<script setup lang="ts">
import { FetchApi } from '~/utilities/CustomFetchApi';

onMounted(async ()=>{
    var res = await FetchApi('/banner');
})
</script>

<style scoped>

</style>