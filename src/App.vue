<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- <div>{{count}}</div> -->
  <div>Completed Todos: {{ doneTodosCount }} </div>
  <div>get to by Id:{{getTodoById(3)}}</div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from 'vuex';
export default {
  name: "App",
  components: {},
  data() {
    return {
      message: "hello vue",
      localCount: 5,
    };
  },
  computed:mapGetters([
    'doneTodos', 'doneTodosCount', 'getTodoById'
  ])

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
