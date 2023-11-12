<script setup>
import { useTaskListStore } from "../stores/taskList";
import { storeToRefs } from "pinia";

const store = useTaskListStore();

// storeToRefs lets TaskList keep reactivity:
const { taskList } = storeToRefs(store);

// destructuring action method doesn't require using storeToRefs:
const { toggleCompleted, deleteTask } = store;
</script>

<template>
  <div v-for="task in taskList" :key="task.id" class="list">
    <div class="item">
      <span :class="{ completed: task.completed }">{{ task.item }}</span>
      <span @click.stop="toggleCompleted(task.id)">&#10004;</span>
      <span @click="deleteTask(task.id)" class="x">&#10060;</span>
    </div>
  </div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>
