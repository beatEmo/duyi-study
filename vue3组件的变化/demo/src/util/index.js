import { defineAsyncComponent, h } from "vue";
import loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

export function delay(duration) {
  if (!duration) {
    duration = random(1000, 5000);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getAsyncPage(path) {
  return defineAsyncComponent({
    loader: async () => {
      await delay();
      return import(path);
    },
    loadingComponent: loading
  });
}

export function getAsyncComponent(path) {
  return defineAsyncComponent({
    loader: async () => {
      await delay();
      if (Math.random() < 0.5) {
        throw new TypeError();
      }
      return import(path);
    },
    loadingComponent: loading,
    errorComponent: {
      render() {
        return h(Error, "出错了");
      }
    }
  });
}
