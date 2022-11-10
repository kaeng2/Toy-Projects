import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: []
  },
  getters: {
    todosTotalCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      return state.todos.filter((todo) => todo.isCompleted).length
    },
    unCompletedTodosCount(state, getters) {
      return getters.todosTotalCount - getters.completedTodosCount
    },
    progress (state, getters) {
      return 100 * getters.completedTodosCount / getters.todosTotalCount
    }
  },
  mutations: {
    ADD_TODO (state, todoToAdd) {
      state.todos.push({task: todoToAdd, isCompleted: false})
    },
    DELETE_TODO (state, todoToDelete) {
      const idx = state.todos.indexOf(todoToDelete)
      state.todos.splice(idx, 1)
    },
    UPDATE_TODO_STATUS (state, todoToUpdate) {
      const idx = state.todos.indexOf(todoToUpdate)
      state.todos[idx].isCompleted = !state.todos[idx].isCompleted
    }
  },
  actions: {
  },
  modules: {
  }
})
