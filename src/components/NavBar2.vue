<template>
    <div>
        <router-link to="/posts">게시물</router-link> | <router-link to="/mypage">마이페이지</router-link>
        <button @click="onLogout">로그아웃</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { removeToken } from "../utils/token";

    const router = useRouter();
    const store = useStore();

    const onLogout = () => {
        removeToken();
        store.dispatch('user/removeUserInfo');
        router.push('/login');
    };
</script>

<style scoped>

</style>