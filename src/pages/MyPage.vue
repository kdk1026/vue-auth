<template>
    <div>
        <p>{{userInfo.email}}</p>
        <p>{{userInfo.id}}</p>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { getToken } from "../utils/token";
import { useRouter } from "vue-router";

    const router = useRouter();

    const accessToken = getToken();
    if ( !accessToken ) {
        router.push('/login');
    }    

    const store = useStore();

    const userInfo = computed(() => store.getters['user/getUserInfo']);
    console.log( userInfo );
</script>

<style scoped>

</style>