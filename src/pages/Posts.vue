<template>
    <ul>
        <span v-if="isLoading">로딩 중</span>
        <li v-else v-for="post in posts" :key="post.id">
            {{post.title}}
        </li>
    </ul>
</template>

<script setup>
import { useAxios } from "@/utils/http";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

    const router = useRouter();
    const store = useStore();

    const isLoading = computed(() => store.getters['loading/getIsLoading']);

    const {instance} = useAxios();

    const posts = ref([]);

    const getPosts = async () => {
        await instance.get('/posts')
        .then(res => {
            posts.value = res.data;
        })
        .catch(err => {
            if ( err.response.status === 401 ) {
                router.push('/login');
            }
        });   
    };
    getPosts();
</script>

<style scoped>

</style>