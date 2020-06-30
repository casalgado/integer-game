<template>
  <ul id="sidebar">
    <li>
      <button @click="exercise1">
        Exercise 1
      </button>
    </li>
    <li>
      <button @click="exercise2">
        Exercise 2
      </button>
    </li>
    <li>
      <button @click="exercise3">
        Exercise 3
      </button>
    </li>
    <li>
      <button @click="exercise4">
        Exercise 4
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    exercise1: function() {
      let payload = {
        integers: [
          { id: "o0", value: 8, x: 460, y: 60, active: true },
          { id: "o1", value: 4, x: 460, y: 260, active: true },
          { id: "o2", value: -3, x: 460, y: 460, active: true },
          { id: "o3", value: -5, x: 460, y: 660, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "addition",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "mul",
            operation: "multiplication",
            name: "multiplication",
            x1: 50,
            y1: 450,
            x2: 450,
            y2: 750,
          },
          {
            id: "div",
            operation: "division",
            name: "division",
            x1: 550,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise2: function() {
      let payload = {
        integers: [
          { id: "o0", value: 5, x: 85, y: 360, active: true },
          { id: "o1", value: 3, x: 335, y: 360, active: true },
          { id: "o2", value: -4, x: 585, y: 360, active: true },
          { id: "o3", value: -6, x: 835, y: 360, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "addition",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "mul",
            operation: "multiplication",
            name: "multiplication",
            x1: 50,
            y1: 450,
            x2: 450,
            y2: 750,
          },
          {
            id: "div",
            operation: "division",
            name: "division",
            x1: 550,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise3: function() {
      let payload = {
        integers: [
          { id: "o0", value: 8, x: 460, y: 60, active: true },
          { id: "o1", value: 4, x: 460, y: 260, active: true },
          { id: "o2", value: 1, x: 335, y: 360, active: true },
          { id: "o3", value: -2, x: 585, y: 360, active: true },
          { id: "o4", value: -3, x: 460, y: 460, active: true },
          { id: "o5", value: -5, x: 460, y: 660, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "addition",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "mul",
            operation: "multiplication",
            name: "multiplication",
            x1: 50,
            y1: 450,
            x2: 450,
            y2: 750,
          },
          {
            id: "div",
            operation: "division",
            name: "division",
            x1: 550,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise4: function() {
      let payload = {
        integers: [
          { id: "o0", value: -3, x: 460, y: 60, active: true },
          { id: "o1", value: -3, x: 460, y: 260, active: true },
          { id: "o2", value: -5, x: 460, y: 460, active: true },
          { id: "o3", value: -2, x: 460, y: 660, active: true },
        ],
        dropZones: [
          {
            id: "sub",
            operation: "subtraction",
            name: "?",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 750,
          },
          {
            id: "add",
            operation: "addition",
            name: "?",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
  },
};
</script>

<style>
li {
  list-style-type: none;
  margin: 25px;
}

ul {
  padding: 20px 40px 0px 40px;
  margin: 0px;
}

button {
  cursor: pointer;
  background-color: rgb(26, 123, 249);
  border: 1px solid rgb(15, 119, 255);
  border-radius: 5px;
  width: 120%;
  height: 35px;
  color: seashell;
  font-weight: bold;
  font-size: 15px;
}

button:hover {
  background-color: rgb(22, 104, 211);
}

button:active,
button:focus {
  -moz-outline-style: none;
  outline: none;
  background-color: rgb(255, 208, 0);
  border: 1px solid rgb(202, 175, 55);
  color: rgb(63, 38, 0);
}
</style>
