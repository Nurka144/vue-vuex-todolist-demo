<template>
  <div id="app">
    <div class="container">
      <div class="row" v-on:submit.prevent="submitTodoForm">
        <form class="form-group">
          <label for="todoInput">Todo</label>
          <input type="text" class="form-control" id="todoInput" v-model="todoText">
          <input type="submit" value="Add item" class="">
        </form>
      </div>
      <div class="row">
        <div class="item-todo" v-for="todo in allTodos" :key="todo.id">
          <li>{{ todo.title }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'App',
  data: function() {
    return {
      todoText: ""
    }
  },
  computed: {
    allTodos: function() {
      return this.$store.getters.allTodos;
    }
  },
  async mounted() {
    this.$store.dispatch('getAllTodos');
  },
  methods: {
    ...mapMutations(['createTodo']),
    submitTodoForm: function() {
      this.createTodo({
        title: this.todoText,
        id: Date.now(),
        completed: false
      })
    }
  }
}
</script>

<style scoped>
  .form-group {
    width: 100%;
  }
</style>
