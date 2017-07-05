<template lang="pug">
	.container.padding20
		.section
			create-todo
		.divider
		.section
			todo-list(:todos="todos")
</template>

<script>
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

export default {
	components: {
		TodoList,
		CreateTodo
	},
	computed: {
		todos() {
			return this.$store.state.todos
		}
	}
}
</script>

<style lang="stylus" scoped>
	.padding20
		padding 20px
</style>
