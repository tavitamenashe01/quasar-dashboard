<template>
  <div class="todoPage row flex flex-center">
    <div class="container">
      <h5>To-Do List</h5>
      <div>
        <TodoNew />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoNew from "../components/NewTodo/TodoNew";
import TodoList from "../components/NewTodo/TodoList";
export default {
  components: {
    TodoNew,
    TodoList
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.todoPage {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(45deg, #5189c1 25%, #41b883);
  height: 100vh;
  color: #333;
}


.container {
  width: 24rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 50px 0;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  margin-top: 0;
}

.vue-logo {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
