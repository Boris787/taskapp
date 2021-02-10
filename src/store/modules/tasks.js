import { splice } from "core-js/fn/array";

const state = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      completed: false
    },
    {
      id: 2,
      title: "Task 2",
      completed: false
    },
    {
      id: 3,
      title: "Task 3",
      completed: false
    }
  ]
};

const getters = {
  allTasks: state => state.tasks
};

const actions = {
  fetchTask({commit}, tasks) {
    commit('setTasks', tasks);
  },
  addTask({commit}, task) {
    commit('newTask', task);
  },
  updateTask({commit}, task) {
    commit('updTask', task)
  },
  removeTask({commit}, task) {
    commit('delTask', task);
  }
};

const mutations = {
  setTasks: (state, tasks) => state.tasks = tasks,
  newTask: (state, task) => state.tasks.push(task),
  updTask: (state, updatedTask) => {
    const index = state.tasks.findIndex(t => t.id === updatedTask.id);
    if(index !== -1) {
      state.tasks.splice(index, 1, updatedTask, splice);
    }
  },
  delTask: (state, task) => state.tasks = state.tasks.filter(t => t.id !== task.id)
};

export default {
  state, getters, actions, mutations
}