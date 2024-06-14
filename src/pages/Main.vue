<template>
    <div>
        <NavBar v-if="!accessToken" />
        <NavBar2 v-else />
        <router-view></router-view>
    </div>
</template>

<script setup>
    import NavBar from "../components/NavBar.vue";
    import NavBar2 from "../components/NavBar2.vue";
    import { getToken } from "../utils/token";

    const accessToken = getToken();
</script>

<style scoped>

</style>