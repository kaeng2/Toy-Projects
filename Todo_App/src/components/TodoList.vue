<template>
  <div>
    <h1 style="font-size: 50px">Todos</h1>
    <div class="row my-4">
      <ul class="col-3"></ul>
      <ul class="list-group col-6">
        <todo-list-item
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
        />
      </ul>
      <ul class="col-3"></ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem"

export default {
  name: "TodoList",
  components: { TodoListItem },
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
}
</script>

<style></style>
