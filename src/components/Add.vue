<template>
    <div class="flex">
        <input
            v-model="newTodo"
            type="text"
            placeholder="new todo"
            class="w-full p-2 border"
        />
        <button
            class="flex-shrink-0 px-2 text-gray-100 bg-green-400 border"
            @click="handleAdd"
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

const newTodo = ref('')
const store = useStore()
const handleAdd = () => store.dispatch('addTodoAction', newTodo.value)
</script>
