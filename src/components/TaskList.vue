<script setup>
import { useTaskListStore } from "../stores/taskList";
import { storeToRefs } from "pinia";

const store = useTaskListStore();

// storeToRefs lets TaskList keep reactivity:
const { taskList } = storeToRefs(store);

// destructuring action method doesn't require using storeToRefs:
const { toggleCompleted } = store;
</script>

<template>
  <div v-for="task in taskList" :key="task.id" class="list">
    <div class="item">
      <span :class="{ completed: task.completed }">{{ task.item }}</span>
      <span @click.stop="toggleCompleted(task.id)">&#10004;</span>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
