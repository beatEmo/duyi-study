import { reactive, readonly } from "vue";

function useDebounce(obj, duration) {
  // 在这里补全函数
  const valueOrign = reactive(obj);
  const value = readonly(valueOrign);
  let timer = null;
  const setValue = (newValue) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("值改变了");
      Object.assign(valueOrign, newValue);
      // Object.entries(valueOrign).forEach(([k, v]) => {
      //   valueOrign[k] = v;
      // });
    }, duration);
  };
  return {
    value, // 这里是一个只读对象，响应式数据，默认值为参数值
    setValue // 这里是一个函数，传入一个新的对象，需要把新对象中的属性混合到原始对象中，混合操作需要在duration的时间中防抖
  };
}

const { value, setValue } = useDebounce({ a: 1, b: 2 }, 1000);

console.log(value);
window.value = value;
setValue({ b: 5, c: 9, d: 0 });
console.log(value);
