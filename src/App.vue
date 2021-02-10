<template>
  <div id="app">
  <Header />
  <AddTask />
  <TaskMenager />
  </div>
</template>

<script>
import TaskMenager from './components/TaskMenager';
import Header from './components/layout/Header';
import AddTask from './components/AddTask'

export default {
  name: "app",
  components: {
    TaskMenager,
    Header,
    AddTask
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
}
</style>