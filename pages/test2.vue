<template>
    <div>
        <div>
            <button>Click</button>
        </div>
        <div>
            <p> Count: {{ testStore.count }}</p>
            <p>Count *2 : {{ testStore.getCount }}</p>
            <base-button @click="testStore.increase()"> Increase</base-button>
            <base-button @click="testStore.decrease()"> Decrease</base-button>
        </div> 
        <hr/>
        <div>
            <button>Click</button>
        </div>
        <div>
            <p> Count: {{ testStore2.count }}</p>
            <p>Count *2 : {{ testStore2.getCount }}</p>
            <base-button @click="testStore2.increase()"> Increase</base-button>
            <base-button @click="testStore2.decrease()"> Decrease</base-button>
        </div> 
    </div>
</template>

<script setup lang="ts">
import { useTest2Store, useTestStore } from '~/stores/testStore';
import { FetchApi } from '~/utilities/CustomFetchApi';
const testStore = useTestStore();
const testStore2 = useTest2Store();
onMounted(async () => {
    var res = await FetchApi('/banner');
})
</script>

<style scoped></style>