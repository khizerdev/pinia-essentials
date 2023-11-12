import { defineStore } from "pinia";

export const useTaskListStore = defineStore("taskList", {
  state: () => ({
    taskList: [],
    id: 0,
  }),
  actions: {
    addTask(item) {
      this.taskList.push({ item, id: this.id++, completed: false });
    },
    deleteTask(itemId) {
      this.taskList = this.taskList.filter((item) => {
        return item.id !== itemId;
      });
    },
  },
});
