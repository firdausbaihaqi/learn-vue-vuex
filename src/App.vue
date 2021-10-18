<script setup>
import { toggleTheme } from './composables/theme.js'
</script>

<template>
    <div class="dark:bg-gray-800">
        <div class="text-center">
            <router-link :to="{ name: 'Home' }">Home</router-link> -
            <router-link :to="{ name: 'About' }">About</router-link> -
            <button @click="toggleTheme">toggle theme</button>
        </div>
        <router-view></router-view>
    </div>
</template>
