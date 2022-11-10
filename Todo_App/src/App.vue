<template>
  <div id="app">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4295/4295930.png"
      alt="logo"
      class="w-25 h-25"
    />
    <br />
    <br />

    <todo-list />
    <progress-bar />

    <hr style="border: dotted 2px gray" />
    <br />
    <todo-form />
  </div>
</template>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
const Swal = require("sweetalert2")
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import ProgressBar from "@/components/ProgressBar"

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    ProgressBar,
  },
  computed: {
    // todos() {
    //   return this.$store.state.todos
    // },
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap");

#app {
  font-family: "Gaegu", cursive;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-block: 60px;
  margin-inline: 50px;
}

#progress-icon {
  width: 50px;
  height: 50px;
  margin: 10px;
  margin-bottom: 20px;
}
</style>
