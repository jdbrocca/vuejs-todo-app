import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [
            { title: 'Todo A', project: 'Project A', done: true },
            { title: 'Todo B', project: 'Project B', done: true },
            { title: 'Todo C', project: 'Project C', done: false },
            { title: 'Todo D', project: 'Project D', done: false }
        ]
    },
    mutations: {
        createTodo(state, todo) {
            state.todos.push(todo)
        },
        deleteTodo(state, todo) {
            const todoIndex = state.todos.indexOf(todo)
            state.todos.splice(todoIndex, 1)
        },
        completeTodo(state, todo) {
            const todoIndex =  state.todos.indexOf(todo)
             state.todos[todoIndex].done = true
        }
    }
})