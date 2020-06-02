<template>
  <div
    class="field"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div v-for="obj in fieldState" :key="obj.id">
      <Player :id="obj.id" />
    </div>
  </div>
</template>

<script>
import Player from "../components/game/Player";

export default {
  name: "Home",
  components: {
    Player,
  },
  data() {
    return {
      fieldState: [
        { id: "p1", x: 200, y: 300 },
        { id: "p2", x: 300, y: 300 },
        { id: "p3", x: 400, y: 300 },
      ],
    };
  },
  methods: {
    onDrop: function(evt) {
      const pid = evt.dataTransfer.getData("pid");
      for (let i = 0; i < this.fieldState.length; i++) {
        let obj = this.fieldState[i];
        if (obj.id == pid) {
          obj.y = evt.clientY - 25;
          obj.x = evt.clientX - 25;
        }
        this.draw();
      }
    },
    draw: function() {
      for (let i = 0; i < this.fieldState.length; i++) {
        const domObj = document.getElementById(this.fieldState[i].id);
        domObj.style.top = `${this.fieldState[i].y}px`;
        domObj.style.left = `${this.fieldState[i].x}px`;
      }
    },
  },
  mounted() {
    this.draw();
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
