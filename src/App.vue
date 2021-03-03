<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div>{{count}}</div>
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
      message: "hello vue",
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
    testAction(){
      this.$$store.dispatch('acitonA').then(() => {

      })
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
      console.log("31====", this.$store.state.count);
      return this.$store.state.count;
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
