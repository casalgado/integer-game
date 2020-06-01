<template>
  <div
    class="field"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <Player id="p1" />
    <Player id="p2" />
    <Player id="p3" />
  </div>
</template>

<script>
import Player from "../components/game/Player";

export default {
  name: "Home",
  components: {
    Player,
  },
  methods: {
    onDrop: function(evt) {
      const pid = evt.dataTransfer.getData("pid");
      const item = document.getElementById(pid);
      console.log(evt.clientY);
      console.log(evt.clientX);
      item.style.top = `${evt.clientY - 25}px`;
      item.style.left = `${evt.clientX - 25}px`;
    },
  },
};
</script>

<style>
.field {
  height: 800px;
  width: 1000px;
  border: 1px solid black;
  background-color: gray;
}
</style>
