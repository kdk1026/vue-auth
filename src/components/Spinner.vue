<template>
    <div v-if="!isLoading"></div>
    <div v-else class="loading-spinner">
        <VueSpinner />
    </div>
</template>

<script setup>
import { VueSpinner } from 'vue3-spinners';
import { useStore } from "vuex";
import { computed } from "vue";

    const store = useStore();

    const isLoading = computed(() => store.getters['loading/getIsLoading']);
</script>

<style scoped>
.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
</style>