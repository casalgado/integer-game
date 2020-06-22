<template>
  <div id="app">
    <div id="sidebar"></div>
    <router-view id="main"> </router-view>
  </div>
</template>

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
