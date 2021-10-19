<template>
    <div class="dark:bg-gray-800">
        <div class="fixed top-5 right-10"><ThemeToggler /></div>
        <div class="text-center">
            <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -
            <router-link :to="{ name: 'About' }">About</router-link> - -->
        </div>
        <div class="px-5 md:px-0">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import ThemeToggler from './components/ThemeToggler.vue'
</script>
