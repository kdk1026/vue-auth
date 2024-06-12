<template>
    <div>
        <router-link to="/posts">게시물</router-link> | <router-link to="/mypage">마이페이지</router-link>
        <button @click="onLogout">로그아웃</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

    const router = useRouter();
    const store = useStore();

    const onLogout = () => {
        sessionStorage.removeItem('accessToken');
        router.push('/login');
        store.dispatch('user/removeUserInfo');
    };
</script>

<style scoped>

</style>