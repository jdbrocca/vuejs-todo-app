<template lang="pug">
    div.card
        .card-content
            div(v-show="!isEditing")
                div.card-title {{ todo.title }}
                h5 {{ todo.project }}
                div.right-align.extras
                    span(@click="showForm").btn-floating.blue
                        i.material-icons mode_edit
                    span(@click="deleteTodo(todo)").btn-floating.red
                        i.material-icons delete
            div(v-show="isEditing")
                div
                    div
                        label Title
                        input(type="text" v-model="todo.title" placeholder="Title")
                    div
                        label Project
                        input(type="text" v-model="todo.project" placeholder="Project")
                    div
                        button(@click="hideForm").btn.w100 Update
            div(v-show="!isEditing && todo.done" @click="reOpenTodo()").btn.disabled Completed
            div(v-show="!isEditing && !todo.done" @click="completeTodo(todo)").btn Pending
</template>
<script>
export default {
    props: ['todo'],
    data() {
        return {
            isEditing: false
        }
    },
    methods: {
        showForm() {
            this.isEditing = true
        },
        hideForm() {
            this.isEditing = false
        },
        deleteTodo(todo) {
            this.$store.commit('deleteTodo', todo)
        },
        completeTodo(todo) {
            this.$store.commit('completeTodo', todo)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .w100
        width 100%
    
    .extras
        span
            margin-left 5px
</style>