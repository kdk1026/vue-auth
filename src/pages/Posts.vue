<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{post.title}}
        </li>
    </ul>
</template>

<script setup>
import { useAxios } from "@/utils/http";
import { ref } from "vue";
import { useRouter } from "vue-router";

    const router = useRouter();

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