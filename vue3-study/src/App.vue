<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keydown.enter="addTodo"
        />
      </header>
      <section class="main">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          :checked="allDoneRef"
          @input="setAllChecked($event.target.checked)"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            :class="{
              completed: todo.completed,
              editing: todo === editingTodoRef
            }"
            v-for="todo in filterTodosRef"
            :key="todo.id"
            @dblclick="editTodo(todo)"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label>{{ todo.title }}</label>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input
              v-model="todo.title"
              @blur="doneEdit(todo)"
              @keyup.enter="($event) => $event.target.blur()"
              @keyup.escape="cancelEdit(todo)"
              class="edit"
              type="text"
            />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{ remainingRef }}</strong>
          <span>items left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef === 'all' }"
              >All</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibilityRef === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" v-show="completedRef > 0">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script setup>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilter from "./composition/useFilter";
import useEditTodo from "./composition/useEditTodo";
import useRemoveTodo from "./composition/useRemoveTodo";
// @ts-ignore
const { todosRef } = useTodoList();

const { newTodoRef, addTodo } = useNewTodo(todosRef);
const { visibilityRef, filterTodosRef, remainingRef, completedRef } =
  useFilter(todosRef);
const {
  editingTodoRef,
  editTodo,
  doneEdit,
  cancelEdit,
  allDoneRef,
  setAllChecked
} = useEditTodo(todosRef);
const { remove, removeCompleted } = useRemoveTodo(todosRef);
</script>

<style scoped>
/* @import "./style/index.css"; */
</style>
