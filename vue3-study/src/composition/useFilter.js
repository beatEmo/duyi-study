import { computed, onMounted, onUnmounted, ref } from "vue";
import { filter } from "../util/todoStorage";

const validHash = ["all", "active", "completed"];

export default function useFilter(todosRef) {
  const visibilityRef = ref("all");

  const onHashChange = () => {
    const hash = location.hash.replace(/#\/?/, "");
    if (validHash.includes(hash)) {
      // 有效的hash
      visibilityRef.value = hash;
    } else {
      location.hash = "";
      visibilityRef.value = "all";
    }
  };

  // 监听hash变化事件
  onMounted(() => {
    window.addEventListener("hashchange", onHashChange);
  });
  onUnmounted(() => {
    window.removeEventListener("hashchange", onHashChange);
  });

  const filterTodosRef = computed(() => {
    return filter(todosRef.value, visibilityRef.value);
  });

  const remainingRef = computed(() => {
    return filter(todosRef.value, "active").length;
  });

  const completedRef = computed(() => {
    return filter(todosRef.value, "completed").length;
  });

  return {
    visibilityRef,
    filterTodosRef,
    remainingRef,
    completedRef
  };
}
