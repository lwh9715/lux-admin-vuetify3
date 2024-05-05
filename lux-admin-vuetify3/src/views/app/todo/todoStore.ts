import { defineStore } from "pinia";
import { Todo } from "./todoTypes";

const todos = [
  {
    id: 1,
    title: "Write a report",
    detail: "Draft the quarterly update for the team",
    completed: false,
    tags: ["work"],
  },
  {
    id: 2,
    title: "Attend a meeting",
    detail: "Join the conference call with the client",
    completed: false,
    tags: ["work"],
  },
  {
    id: 3,
    title: "Complete a project",
    detail: "Finish the coding task before the deadline",
    completed: false,
    tags: ["work"],
  },
  {
    id: 4,
    title: "Complete a project",
    detail: "Finish the coding task before the deadline",
    completed: false,
    tags: ["Init"],
  },
  {
    id: 5,
    title: "Complete a project",
    detail: "Finish the coding task before the deadline",
    completed: false,
    tags: ["work"],
  },
];

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todList: todos,
    currentLabel: "work",
    labels: [
      {
        id: "work",
        title: "Work",
        color: "orange",
      },
      {
        id: "relaxation",
        title: "Relaxation",
        color: "green",
      },
      {
        id: "shopping",
        title: "Shopping",
        color: "blue",
      },
    ],
  }),

  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       storage: localStorage,
  //       paths: ["todoList"],
  //     },
  //   ],
  // },

  getters: {
    // Full list of todos
    getTodoList() {
      return this.todList.filter((todo: Todo) => !todo.completed);
    },

    // Completed todos
    getCompletedTodos() {
      return this.todList.filter((todo: Todo) => todo.completed);
    },

    // Specific Label todos
    getLabelTodos() {
      return this.todList.filter(
        (todo: Todo) =>
          todo.tags && todo.tags.includes(this.currentLabel) && !todo.completed
      );
    },
  },
  actions: {
    // Add new todo
    addNewTodo(todo: Todo) {
      todo.id = "_" + Math.random().toString(36).substring(2, 11);
      this.todList.push(todo);
    },
    // update todo
    updateTodo(todo: Todo) {
      const index = this.todList.findIndex((item: Todo) => item.id === todo.id);
      this.todList.splice(index, 1, todo);
    },

    // Delete todo By Id
    deleteTodoById(todoId: string) {
      const index = this.todList.findIndex((todo: Todo) => todo.id === todoId);
      this.todList.splice(index, 1);
    },
  },
});
