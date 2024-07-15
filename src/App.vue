<template>
  <div>
    <router-view :key="$route.fullPath"></router-view>
    <Spinner />
  </div>
</template>

<script setup>
import Spinner from './components/Spinner';
</script>

<style scoped>

</style>