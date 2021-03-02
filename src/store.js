import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
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
    incrementBy(state, payload) {
      state.count += payload.amount;
    },
    decrement(state) {
      state.count--;
    },
    decrementBy(state, payload) {
      state.count -= payload.amount;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 2000);
    },
  },
});

// store.commit("incrementBy", { amount: 28 });
// console.log(store.state.count);
// this.state.obj = { ...state.obj, newProp: 123 }
export default store;
