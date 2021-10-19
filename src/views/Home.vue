<template>
    <br />
    <div class="max-w-xl mx-auto dark:text-gray-200">
        <div class="mb-10 text-center">
            <div class="mb-2 text-3xl font-bold">Yes, Todo App again</div>
            <p>
                but this time i'm using vuex (state management plugin) and also
                that theme toggler and options dropdown is component from
                headless ui
            </p>
        </div>
        <AddTodo />
        <Filter />
        <p>
            use double click on each item to mark it as done (response might be
            slower depending on your connection)
        </p>
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
