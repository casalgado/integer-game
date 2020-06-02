<template>
  <div
    class="field"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div v-for="obj in fieldState" :key="obj.id">
      <Player :id="obj.id" :value="obj.value" />
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
        { id: "o0", value: 1, x: 100, y: 100 },
        { id: "o1", value: 1, x: 200, y: 100 },
        { id: "o2", value: 1, x: 300, y: 100 },
        { id: "o3", value: 1, x: 400, y: 100 },
        { id: "o4", value: 1, x: 500, y: 100 },
        { id: "o5", value: 1, x: 100, y: 200 },
        { id: "o6", value: 1, x: 200, y: 200 },
        { id: "o7", value: 1, x: 300, y: 200 },
        { id: "o8", value: 1, x: 400, y: 200 },
        { id: "o9", value: 1, x: 500, y: 200 },
      ],
    };
  },
  methods: {
    onDrop: function(evt) {
      const pid = evt.dataTransfer.getData("pid");
      let obj = this.fieldState.find((o) => o.id === pid);
      obj.y = evt.clientY - 40;
      obj.x = evt.clientX - 40;
      let colliding = this.returnPairsOfCollidingObjects();
      if (colliding) {
        this.add(colliding[0], colliding[1]);
      }
      this.draw();
    },
    draw: function() {
      for (let i = 0; i < this.fieldState.length; i++) {
        let obj = this.fieldState[i];
        const domObj = document.getElementById(obj.id);
        domObj.style.top = `${obj.y}px`;
        domObj.style.left = `${obj.x}px`;
      }
    },
    objectsCollide: function(a, b) {
      if (Math.abs(a.x - b.x) < 80 && Math.abs(a.y - b.y) < 80) {
        return true;
      } else {
        return false;
      }
    },
    returnPairsOfCollidingObjects: function() {
      let array = this.fieldState;
      let colliding = [];
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if (array[i].id !== array[j].id) {
            if (this.objectsCollide(array[i], array[j])) {
              colliding.push([array[i], array[j]]);
            }
          }
        }
      }
      return colliding[0] || null;
    },
    add: function(a, b) {
      this.fieldState = this.fieldState.filter((e) => {
        return e.id !== a.id && e.id !== b.id;
      });
      this.fieldState.push({
        id: "",
        value: a.value + b.value,
        x: a.x,
        y: a.y,
      });
      console.log(a);
      console.log(b);
      this.fieldState.map((e, i) => {
        e.id = "o" + i;
        return e;
      });
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
