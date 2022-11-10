<template>
  <div class="mx-auto my-5 w-75">
    <p v-if="progress === 0">
      <img
        src="https://cdn-icons-png.flaticon.com/512/427/427469.png"
        id="progress-icon"
      />
      치타는 이제부터 달린다.
    </p>
    <p v-else-if="progress < 34">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4697/4697134.png"
        id="progress-icon"
      />
      시작이 반이에요.
    </p>
    <p v-else-if="progress < 67">
      <img
        src="https://cdn-icons-png.flaticon.com/512/8282/8282931.png"
        id="progress-icon"
      />
      벌써 {{ completedTodosCount }}개나 해치웠어요! 영차영차
    </p>
    <p v-else-if="progress < 100">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1534/1534999.png"
        id="progress-icon"
      />
      {{ unCompletedTodosCount }}개 남았어요! 고지가 눈 앞입니다!
    </p>
    <p v-else>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3557/3557540.png"
        id="progress-icon"
      />
    </p>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated bg-success"
        role="progressbar"
        :style="{ width: `${progress}%` }"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progress.toFixed(2) }}%
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  computed: {
    todosTotalCount() {
      return this.$store.getters.todosTotalCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    unCompletedTodosCount() {
      return this.$store.getters.unCompletedTodosCount
    },
    progress() {
      if (this.$store.state.todos.length) {
        return this.$store.getters.progress
      } else {
        return 0
      }
    },
  },
}
</script>

<style></style>
