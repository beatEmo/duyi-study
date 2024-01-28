<template>
  {{ gdp }}
</template>

<script setup>
// @ts-ignore
import { ref } from "vue";

const gdp = ref([]);

async function getGdp() {
  gdp.value = await fetch("/api/gdp.json").then((res) => res.json());
}
getGdp();
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
