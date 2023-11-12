import { defineStore } from "pinia";

export const useTaskListStore = defineStore("taskList", {
  state: () => ({
    taskList: [],
  }),
});
