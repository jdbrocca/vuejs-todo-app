<template lang="pug">
	.container.padding20
		.section
			create-todo(@create-todo="addTodo")
		.divider
		.section
			todo-list(:todos="todos")
</template>

<script>
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

export default {
	name: 'app',
	components: {
		TodoList,
		CreateTodo
	},
	data() {
		return {
			todos: [{
				title: 'Todo A',
				project: 'Project A',
				done: true
			}, {
				title: 'Todo B',
				project: 'Project B',
				done: true
			}, {
				title: 'Todo C',
				project: 'Project C',
				done: false
			}, {
				title: 'Todo D',
				project: 'Project D',
				done: false
			}]
		}
	},
	methods: {
		addTodo(newTodo) {
			this.todos.push(newTodo)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.padding20
		padding 20px
</style>
