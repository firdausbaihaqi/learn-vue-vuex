<template>
    <br />
    <div class="max-w-xl mx-auto">
        <div class="mb-5 text-3xl font-bold text-center dark:text-gray-200">Todo App</div>
        <AddTodo />
        <Filter />
        <Todos />
    </div>
</template>

<script>
import AddTodo from '../components/Add.vue'
import Todos from '../components/Todos.vue'
import Filter from '../components/Filter.vue'

// TODO : change to v3 form
// TODO : Add dark mode
export default {
    components: { AddTodo, Todos, Filter },
}
</script>
