<template>
  <div class="task-item" v-bind:class="{'is-complete':task.completed}">
    <input type="checkbox" v-on:change="markComplete">
      {{ task.title }}
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Task",
  props: ["task"],
  methods: {
    ...mapActions(['removeTask']),
    markComplete() {
      this.task.completed = !this.task.completed;
    },
    deleteTask() {
      this.removeTask(this.task);
    }
  }
}
</script>

<style scoped>
.task-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc solid;
}
.is-complete {
  text-decoration: line-through;
}
</style>