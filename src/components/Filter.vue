<template>
    <div class="w-full my-5 text-left">
        Show
        <select
            class="border"
            ref="show"
            @change="filterTodosAction($refs.show.value)"
        >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50" selected>50</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['filterTodosAction']),
    },
}
</script>

<style></style>
