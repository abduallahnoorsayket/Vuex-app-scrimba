import { createStore } from "vuex";

const store = createStore({
  state: {
    // count: 1,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: true },
      { id: 3, text: "...", done: false },
      { id: 4, text: "...", done: false },
    ],
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

// store.commit('increment');
// console.log(store.state.count);

export default store;
