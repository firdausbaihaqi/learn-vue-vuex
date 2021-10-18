<template>
    <h1>Home</h1>
    <br />
    <div class="max-w-xl mx-auto">
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
