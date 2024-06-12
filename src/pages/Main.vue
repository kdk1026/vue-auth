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

    const accessToken = sessionStorage.getItem('accessToken');
</script>

<style scoped>

</style>