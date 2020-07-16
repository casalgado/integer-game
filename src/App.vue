<template>
  <div id="app">
    <Sidebar />
    <router-view id="main"> </router-view>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "App",
  components: { Sidebar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 1250px;
}

#sidebar {
  background-color: lightskyblue;
}
</style>
