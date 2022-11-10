<template>
  <div>
    <li
      class="list-group-item d-flex justify-content-between align-items-center rounded"
      style="background-color: #fdf5e6"
    >
      <input
        type="checkbox"
        name="todo"
        :id="todo.task"
        :checked="todo.isCompleted ? true : false"
        :class="['me-1', { 'is-completed': todo.isCompleted }]"
        @input="updateTodoStatus"
      />
      <label :for="todo.task" :class="{ 'is-completed': todo.isCompleted }">
      </label>
      <label :for="todo.task" :class="{ 'is-completed': todo.isCompleted }">
        {{ todo.task }}
      </label>

      <span class="badge bg-warning rounded-pill border" @click="deleteTodo"
        >DELETE</span
      >
      <!-- <b-button
        v-b-modal="todo.task"
        class="badge bg-warning rounded-pill border"
        >DELETE</b-button
      >
      <b-modal
        :id="todo.task"
        :title="todo.task + '를 삭제하시겠습니까?'"
        button-size="sm"
        @ok="deleteTodo"
      >
        <p class="my-2">
          {{ todo.task }}는 현재
          {{ todo.isCompleted ? "완료" : "미완료" }} 상태입니다.
        </p>
      </b-modal> -->
    </li>
  </div>
</template>

<script src="sweetalert2.all.min.js"></script>
<script>
const Swal = require("sweetalert2")

export default {
  name: "TodoListItem",
  props: {
    todo: Object,
  },
  methods: {
    updateTodoStatus() {
      this.$store.commit("UPDATE_TODO_STATUS", this.todo)
    },
    deleteTodo() {
      Swal.fire({
        title: `${this.todo.task}를 삭제하시겠습니까?`,
        text: `${this.todo.task}는 현재 ${
          this.todo.isCompleted ? "완료" : "미완료"
        } 상태입니다.`,
        icon: "warning",
        confirmButtonText: "삭제",
        showDenyButton: true,
        denyButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.commit("DELETE_TODO", this.todo)
        }
      })
    },
  },
}
</script>

<style>
.is-completed {
  color: gray;
  text-decoration-line: line-through;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  display: inline-block;
  background: url("https://cdn-icons-png.flaticon.com/512/5952/5952821.png");
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  /* border-radius: 100%; */
}
input[type="checkbox"]:checked + label {
  display: inline-block;
  background: url("https://cdn-icons-png.flaticon.com/512/5952/5952800.png");
  /* background: url("https://cdn-icons-png.flaticon.com/512/1828/1828652.png"); */
  /* background: url("https://cdn-icons-png.flaticon.com/512/1355/1355667.png"); */
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  /* border-radius: 100%; */
  /* float: inline-start; */
}
</style>
