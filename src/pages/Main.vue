<template>
    <div>
        <NavBar v-if="!accessToken" />
        <NavBar2 v-else />
        <div v-if="pathname === '/'">홈 메인</div>
        <router-view v-else></router-view>
    </div>
</template>

<script setup>
    import NavBar from "../components/NavBar.vue";
    import NavBar2 from "../components/NavBar2.vue";
    import { getToken } from "../utils/token";

    const accessToken = getToken();

    const pathname = window.location.pathname;
</script>

<style scoped>

</style>