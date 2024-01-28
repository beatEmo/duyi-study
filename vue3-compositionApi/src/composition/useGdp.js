import { ref } from "vue";

export default function useGdp(gdpRef, maxSize) {
  console.log(gdpRef);
  const bars = ref([]);

  return {
    bars
  };
}
