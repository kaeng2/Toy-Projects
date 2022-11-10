<template>
  <div>
    <h1>Todo Form</h1>
    <br />
    <input type="text" v-model.trim="userInput" @keyup.enter="addTodo" />
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      userInput: null,
    }
  },
  methods: {
    addTodo() {
      if (!this.userInput) {
        alert("할 일을 입력하세요!")
      } else if (
        this.$store.state.todos.some((todo) => todo.task === this.userInput)
      ) {
        alert("동일한 항목이 이미 존재합니다.")
      } else {
        this.$store.commit("ADD_TODO", this.userInput)
      }
      this.userInput = null
    },
  },
}
</script>

<style></style>
