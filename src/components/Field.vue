<template>
  <div
    class="field"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      v-for="obj in dropZones"
      :key="obj.id"
      :id="obj.id"
      class="drop-zone"
      :style="zoneCoordinates(obj)"
    >
      <p>{{ obj.name }}</p>
    </div>

    <Player
      v-for="obj in integers"
      :key="obj.id"
      :id="obj.id"
      :value="obj.value"
    />
  </div>
</template>

<script>
import Player from "./Player";

export default {
  name: "Field",
  components: {
    Player,
  },
  data() {
    return {};
  },

  methods: {
    drawIntegers: function() {
      let integers = this.integers;
      for (let i = 0; i < integers.length; i++) {
        let obj = integers[i];
        if (document.getElementById(obj.id)) {
          const domObj = document.getElementById(obj.id);
          domObj.style.top = `${obj.y}px`;
          domObj.style.left = `${obj.x}px`;
        }
      }
    },
    onDrop: function(evt) {
      // to move object ...
      this.$store.commit("saveHistory");
      const pid = evt.dataTransfer.getData("pid");
      let bounds = document.getElementById("main").getBoundingClientRect();
      this.$store.commit("modifyInteger", {
        id: pid,
        x:
          evt.clientX -
          bounds.left -
          parseInt(evt.dataTransfer.getData("xoff")),
        y:
          evt.clientY - bounds.top - parseInt(evt.dataTransfer.getData("yoff")),
      });
      // if collision exists
      let selected = this.$store.getters.getIntegerById(pid);
      let target = this.returnCollidingObject(selected);
      if (target) {
        const zone = this.getZone(target);
        if (zone) {
          let newValue = this.compute(target, selected, zone.operation);
          if (newValue % 1 === 0) {
            this.$store.commit("modifyInteger", {
              id: target.id,
              value: newValue,
            });
            this.$store.commit("removeInteger", {
              id: selected.id,
            });
          }
        }
      }
      this.drawIntegers();
    },
    compute(target, selected, operation) {
      let newValue;
      switch (operation) {
        case "addition":
          newValue = target.value + selected.value;
          break;
        case "subtraction":
          newValue = target.value - selected.value;
          break;
        case "multiplication":
          newValue = target.value * selected.value;
          break;
        case "division":
          newValue = target.value / selected.value;
          break;

        default:
          break;
      }
      return newValue;
    },

    getCenter: function(integer) {
      return { x: integer.x + 40, y: integer.y + 40 };
    },
    getZone: function(target) {
      let zones = this.dropZones;
      let center = this.getCenter(target);
      for (let i = 0; i < zones.length; i++) {
        if (
          center.x - zones[i].x1 > 0 &&
          center.x - zones[i].x1 < zones[i].x2 - zones[i].x1 &&
          center.y - zones[i].y1 > 0 &&
          center.y - zones[i].y1 < zones[i].y2 - zones[i].y1
        ) {
          return zones[i];
        }
      }
      return null;
    },
    objectsCollide: function(a, b) {
      if (Math.abs(a.x - b.x) < 80 && Math.abs(a.y - b.y) < 80) {
        return true;
      } else {
        return false;
      }
    },
    returnCollidingObject: function(obj) {
      let integers = this.integers;
      let centerCoordinates = this.getCenter(obj);
      for (let i = 0; i < integers.length; i++) {
        const center = this.getCenter(integers[i]);
        if (
          obj.id !== integers[i].id &&
          Math.abs(center.x - centerCoordinates.x) < 80 &&
          Math.abs(center.y - centerCoordinates.y) < 80
        )
          return integers[i];
      }
      return null;
    },
    zoneCoordinates: function(obj) {
      let t = obj.y1;
      let l = obj.x1;
      let h = obj.y2 - obj.y1;
      let w = obj.x2 - obj.x1;

      return `width: ${w}px; height: ${h}px; top: ${t}px; left: ${l}px;`;
    },
  },
  computed: {
    integers: function() {
      return this.$store.getters.integers;
    },
    loaded: function() {
      return this.$store.state.loaded;
    },
    dropZones: function() {
      return this.$store.getters.dropZones;
    },
    historyPosition: function() {
      return this.$store.state.historyPosition;
    },
  },
  mounted() {
    this.drawIntegers();
  },
  watch: {
    integers() {
      this.drawIntegers();
    },
    loaded() {
      setTimeout(() => {
        this.drawIntegers();
      }, 0);
    },
    historyPosition() {
      console.log("hello");
      this.drawIntegers();
    },
  },
};
</script>

<style>
.field {
  position: relative;
  height: 800px;
  background-color: lightblue;
}

.drop-zone {
  position: absolute;
  border: 1px solid white;
}
</style>
