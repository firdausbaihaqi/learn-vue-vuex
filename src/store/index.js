import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state: {
        todos: []
    },
    getters: {
        allTodos: state => state.todos,
    },
    mutations: {
        addTodo: (state, newTodo) => state.todos.unshift(newTodo),
        setTodos: (state, newTodos) => state.todos = newTodos,
        deleteTodo: (state, id) => {
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        updateTodo: (state, newTodo) => {
            // simple but not recommended
            // const targetTodo = state.todos.find((todo) => todo.id === newTodo.id);
            // targetTodo.completed = !targetTodo.completed

            const targetIndex = state.todos.findIndex(todo => todo.id === newTodo.id);
            state.todos.splice(targetIndex, 1, newTodo)
        }
    },
    actions: {
        fetchTodos: async ({ commit }) => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=50')
            commit('setTodos', res.data)
        },
        addTodoAction: async ({ commit }, value) => {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos',
                { title: value, completed: false })
            commit('addTodo', res.data)
        },
        deleteTodoAction: async ({ commit }, id) => {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('deleteTodo', id)
        },
        filterTodosAction: async ({ commit }, amount) => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${amount}`)
            commit('setTodos', res.data)
        },
        updateTodoAction: async ({ commit }, newTodo) => {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${newTodo.id}`, newTodo)
            commit('updateTodo', res.data)
        }
    }
})