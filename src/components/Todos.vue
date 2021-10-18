<template>
    <div v-if="allTodos" class="grid grid-cols-3 gap-5 mt-5">
        <div
            class="p-2 rounded-lg text-green-50"
            :class="todo.completed ? 'bg-green-800' : 'bg-green-400'"
            v-for="todo in allTodos"
            :key="todo.id"
            @dblclick="handleUpdate(todo)"
        >
            <p>
                {{ todo.title }}
            </p>

            <button
                @click="deleteTodoAction(todo.id)"
                class="p-1 mt-2 duration-300 border border-transparent focus:border-white"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['allTodos']),
    },
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodoAction', 'updateTodoAction']),
        handleUpdate(todo) {
            const newTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed,
            }
            this.updateTodoAction(newTodo)
        },
    },
    mounted() {
        this.fetchTodos()
    },
}
</script>
