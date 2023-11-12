<script setup>
import TaskForm from "./TaskForm.vue";
import TaskList from "./TaskList.vue";
</script>

<template>
  <div class="todo-app">
    <h1>Task List</h1>
    <task-form />
    <task-list />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>
