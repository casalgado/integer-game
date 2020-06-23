<template>
  <div
    class="field"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      v-for="obj in fieldState.dropZones"
      :key="obj.id"
      :id="obj.id"
      class="drop-zone"
      :style="zoneCoordinates(obj)"
    >
      <p>{{ obj.name }}</p>
    </div>

    <Player
      v-for="obj in fieldState.integers"
      :key="obj.id"
      :id="obj.id"
      :value="obj.value"
    />
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
      fieldState: {
        integers: [
          { id: "o0", value: -3, x: 200, y: 100 },
          { id: "o1", value: -3, x: 600, y: 200 },
          { id: "o2", value: -5, x: 700, y: 600 },
          { id: "o3", value: -2, x: 200, y: 600 },
          { id: "o4", value: -1, x: 700, y: 100 },
          { id: "o5", value: 2, x: 300, y: 200 },
          { id: "o6", value: 2, x: 100, y: 200 },
          { id: "o7", value: 9, x: 200, y: 500 },
          { id: "o8", value: 6, x: 700, y: 500 },
          { id: "o9", value: 10, x: 800, y: 200 },
        ],
        dropZones: [
          { id: "add", name: "addition", x1: 50, y1: 50, x2: 450, y2: 350 },
          { id: "sub", name: "subtraction", x1: 550, y1: 50, x2: 950, y2: 350 },
          {
            id: "mul",
            name: "multiplication",
            x1: 50,
            y1: 450,
            x2: 450,
            y2: 750,
          },
          { id: "div", name: "division", x1: 550, y1: 450, x2: 950, y2: 750 },
        ],
      },
    };
  },

  methods: {
    onDrop: function(evt) {
      const pid = evt.dataTransfer.getData("pid");
      let obj = this.fieldState.integers.find((o) => o.id === pid);
      let bounds = document.getElementById("main").getBoundingClientRect();
      obj.y =
        evt.clientY - bounds.top - parseInt(evt.dataTransfer.getData("yoff"));
      obj.x =
        evt.clientX - bounds.left - parseInt(evt.dataTransfer.getData("xoff"));

      let target = this.returnCollidingObject(obj);
      if (target) {
        const zone = this.getZone(target);
        if (zone) {
          this.compute(target, obj, zone);
        }
        console.log(zone);
      }

      this.drawIntegers();
    },
    compute(target, object, zone) {
      let newValue;
      switch (zone) {
        case "addition":
          newValue = target.value + object.value;
          break;
        case "subtraction":
          newValue = target.value - object.value;
          break;
        case "multiplication":
          newValue = target.value * object.value;
          break;
        case "division":
          newValue = target.value / object.value;
          break;

        default:
          break;
      }
      target.value = newValue;
      this.fieldState.integers = this.fieldState.integers.filter(
        (e) => e.id !== object.id
      );
      this.drawIntegers();
    },
    drawIntegers: function() {
      for (let i = 0; i < this.fieldState.integers.length; i++) {
        let obj = this.fieldState.integers[i];
        const domObj = document.getElementById(obj.id);
        domObj.style.top = `${obj.y}px`;
        domObj.style.left = `${obj.x}px`;
      }
    },
    getCenter: function(obj) {
      return { x: obj.x + 40, y: obj.y + 40 };
    },
    getZone: function(target) {
      let zones = this.fieldState.dropZones;
      let center = this.getCenter(target);
      for (let i = 0; i < zones.length; i++) {
        if (
          center.x - zones[i].x1 > 0 &&
          center.x - zones[i].x1 < zones[i].x2 - zones[i].x1 &&
          center.y - zones[i].y1 > 0 &&
          center.y - zones[i].y1 < zones[i].y2 - zones[i].y1
        ) {
          console.log(`${zones[i].name}`);
          return zones[i].name;
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
    returnPairsOfCollidingObjects: function() {
      let array = this.fieldState.integers;
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
    returnCollidingObject: function(obj) {
      let all = this.fieldState.integers;
      let centerCoordinates = this.getCenter(obj);
      for (let i = 0; i < all.length; i++) {
        const center = this.getCenter(all[i]);
        if (
          obj.id !== all[i].id &&
          Math.abs(center.x - centerCoordinates.x) < 80 &&
          Math.abs(center.y - centerCoordinates.y) < 80
        )
          return all[i];
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
    add: function(a, b) {
      this.fieldState.integers = this.fieldState.integers.filter((e) => {
        return e.id !== a.id && e.id !== b.id;
      });
      this.fieldState.integers.push({
        id: "",
        value: a.value + b.value,
        x: a.x,
        y: a.y,
      });
      console.log(a);
      console.log(b);
      this.fieldState.integers.map((e, i) => {
        e.id = "o" + i;
        return e;
      });
    },
  },
  mounted() {
    this.drawIntegers();
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
