<template lang="pug">
    div
        button.btn(@click="openForm" v-show="!isCreating")
            i.material-icon add
        div(v-show="isCreating")
            div
                div
                    div
                        label Title
                        input(type="text" v-model="titleText" placeholder="Title" ref="txtTitle")
                    div
                        label Project
                        input(type="text" v-model="projectText" placeholder="Project")
                    div.buttons.align-center
                        button.btn.blue(@click="sendForm") Create
                        button.btn.red(@click="closeForm") Cancel
</template>
<script>
export default {
    data() {
        return {
            titleText: '',
            projectText: '',
            isCreating: false
        }
    },
    methods: {
        openForm() {
            this.isCreating = true
            setTimeout(() => this.$refs.txtTitle.focus(), 1)
        },
        closeForm() {
            this.isCreating = false
        },
        sendForm() {
            if (this.titleText.length > 0 && this.projectText.length > 0) {
                const title = this.titleText
                const project = this.projectText
                this.$emit('create-todo', {
                    title,
                    project,
                    done: false
                })
                this.titleText = ''
                this.projectText = ''
            }
            this.isCreating = false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .buttons
        .btn
            margin 0 5px
</style>