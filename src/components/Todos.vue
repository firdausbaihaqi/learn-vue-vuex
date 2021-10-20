<template>
    <div v-if="allTodos" class="grid grid-cols-2 gap-5 my-5 md:grid-cols-3">
        <div
            :class="[
                todo.completed ? 'bg-green-800' : 'bg-green-400',
                'p-2 rounded-lg text-green-50 cursor-pointer',
            ]"
            v-for="todo in allTodos"
            :key="todo.id"
            @dblclick="updateTodoAction(todo)"
        >
            <p>
                {{ todo.title }}
            </p>

            <button
                @click="deleteTodoAction(todo.id)"
                class="p-1 mt-2 duration-300 border border-transparent  focus:border-white"
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
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'

export default {
    setup() {
        const store = useStore()

        const allTodos = computed(() => store.getters.allTodos)

        const deleteTodoAction = (id) => store.dispatch('deleteTodoAction', id)
        const updateTodoAction = (todo) => {
            const newTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed,
            }
            store.dispatch('updateTodoAction', newTodo)
        }

        const fetchTodos = () => store.dispatch('fetchTodos')
        onMounted(() => fetchTodos())

        return { allTodos, deleteTodoAction, updateTodoAction }
    },
}
</script>
