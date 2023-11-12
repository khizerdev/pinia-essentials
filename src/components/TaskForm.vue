<script setup>
import { ref } from "vue";
import { useTaskListStore } from "../stores/taskList";

const task = ref("");
const store = useTaskListStore();
console.log(store.taskList);

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  // invokes function in the store:
  store.addTask(item);
  task.value = "";
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(task)">
      <input v-model="task" type="text" /><button>Add</button>
    </form>
  </div>
</template>

<style scoped></style>
