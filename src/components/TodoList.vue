<template lang="pug">
    div
        .row
            .col.l6.m12
                h4 Completed Tasks: {{ todos.filter(todo => { return todo.done === true }).length }}
            .col.l6.m12.right-align
                h5 Pending Tasks: {{ todos.filter(todo => { return todo.done === false }).length }}
        .row
            .col.l6.m12
                todo(v-for="todo in todos" :todo="todo" :key="todo.key" @delete-todo="deleteTodo" @complete-todo="completeTodo" v-if="!todo.done")
            .col.l6.m12
                todo(v-for="todo in todos" :todo="todo" :key="todo.key" @delete-todo="deleteTodo" @complete-todo="completeTodo" v-if="todo.done")
</template>
<script>
import Todo from './Todo'

export default {
  props: ['todos'],
  components: {
      Todo
  },
  methods: {
    deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo)
        this.todos.splice(todoIndex, 1)
    },
    completeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo)
        this.todos[todoIndex].done = true
    }
  }
}
</script>
<style lang="stylus">
    h4, h5
        margin 0
</style>