<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{post.title}}
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { fetchPosts } from "../apis/posts";

    const router = useRouter();

    const posts = ref([]);

    const getPosts = () => {
        fetchPosts()
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