import { computed, ref } from "vue";

export default function useEditTodo(todoRef) {
  const editingTodoRef = ref(null);
  let originTitle = null;
  const editTodo = (todo) => {
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };

  const doneEdit = (todo) => {
    editingTodoRef.value = null;
    const title = todo.title.trim();
    if (title) {
      todo.title = title;
    } else {
      // console.log(todo);
      todoRef.value.splice(todoRef.value.indexOf(todo), 1);
    }
  };

  const cancelEdit = (todo) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
  };

  const allDoneRef = computed({
    get() {
      return todoRef.value.filter((it) => !it.completed).length === 0;
    }
  });

  const setAllChecked = (checked) => {
    todoRef.value.forEach((item) => {
      item.completed = checked;
    });
  };

  return {
    editingTodoRef,
    editTodo,
    doneEdit,
    cancelEdit,
    allDoneRef,
    setAllChecked
  };
}
