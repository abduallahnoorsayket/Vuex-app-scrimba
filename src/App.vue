<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div>Double Count A: {{doubleCountA}}</div>
  <div>Double Count B: {{doubleCountB}}</div>
  <div>Double Count : {{doubleCount}}</div>
  <div>Double Count : {{this.$store.state.count}}</div>


  <br />
  <br />
  {{message}}
  <br />
  <input v-model="message" />
  <br />
  <br />
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <!-- <div>Completed Todos: {{ doneTodosCount }} </div>
  <div>get to by Id:{{getTodoById(2)}}</div>-->
</template>

<script>
// import { mapState } from "vuex";
// import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {
      localCount: 5,
    };
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementAsync");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    testAction() {
      this.$store.dispatch("acitonA").then(() => {});
    },
    // getData(){}
  },
  // mapMutaions
  // mapMutations([
  //   "increment",
  //   "incrementBy",
  //   "decrement",
  //   "decrementBy",
  // ]),

  computed: {
    count() {
      return this.$store.state.count;
    },
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
     doubleCountA() {
      return this.$store.getters["a/doubleCountA"];
    },
    doubleCountB() {
      return this.$store.getters["b/doubleCountB"];
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
  },

  // mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),

  //  {
  //   doneTodosCount() {
  //     return this.$store.getters.doneTodosCount;
  //   },
  //    getTodoById() {
  //     return this.$store.getters.getTodoById;
  //   },
  // },
  //  mapState(['count']),
  // Mapstate
  //  count: (state) => state.count,
  //   countAlias: "count",
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   },
  // with computed props
  //  {
  //   countComputed() {
  //     return this.$store.state.count;
  //   },

  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
