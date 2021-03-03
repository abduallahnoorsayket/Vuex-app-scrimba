import { createStore } from "vuex";
import axios from "axios";

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
    actionA({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("someMutation");
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return dispatch("actionA").then(() => {
        commit("someOtherMutation");
      });
    },

    async actionC({ commit }) {
      commit(
        "gotData",
        await axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      );
    },
    async actionD({ commit }) {
      await this.dispatch("actionC");
      commit(
        "gotOtherData",
        await axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new").then((response) => {
          commit("increaseCounter", response.data);
        })
      );
    },
  },
});

// store.commit("incrementBy", { amount: 28 });
// console.log(store.state.count);
// this.state.obj = { ...state.obj, newProp: 123 }
export default store;
