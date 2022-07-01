<template>
  <ul id="sidebar">
    <li>
      <button @click="exercise1">Exercise 1</button>
    </li>
    <li>
      <button @click="exercise2">Exercise 2</button>
    </li>
    <li>
      <button @click="exercise3">Exercise 3</button>
    </li>
    <li>
      <button @click="exercise4">Exercise 4</button>
    </li>
    <li>
      <button @click="exercise5">Exercise 5</button>
    </li>
    <li>
      <button @click="exercise6">Exercise 6</button>
    </li>
    <li>
      <button @click="exercise7">Exercise 7</button>
    </li>
    <li>
      <button @click="exercise8">Bonus 1</button>
    </li>

    <li>
      <ActionUndo />
    </li>
  </ul>
</template>

<script>
import ActionUndo from "./ActionUndo";
export default {
  name: "Sidebar",
  components: { ActionUndo },
  methods: {
    exercise1: function () {
      let payload = {
        answer: { value: 10, hidden: false, solved: false, active: false },
        integers: [
          { id: "o0", value: 1, x: 85, y: 360, active: true },
          { id: "o1", value: 4, x: 335, y: 360, active: true },
          { id: "o2", value: 7, x: 585, y: 360, active: true },
          { id: "o3", value: 12, x: 835, y: 360, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "addition",
            x1: 50,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 50,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise2: function () {
      let payload = {
        answer: { value: -5, hidden: false, solved: false, active: false },
        integers: [
          { id: "o0", value: 6, x: 85, y: 360, active: true },
          { id: "o1", value: 4, x: 335, y: 360, active: true },
          { id: "o2", value: -7, x: 585, y: 360, active: true },
          { id: "o3", value: -8, x: 835, y: 360, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "addition",
            x1: 50,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 50,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise3: function () {
      let payload = {
        answer: { value: 12, hidden: false, solved: false, active: false },
        integers: [
          { id: "o0", value: 1, x: 85, y: 360, active: true },
          { id: "o1", value: 4, x: 335, y: 360, active: true },
          { id: "o2", value: -7, x: 585, y: 360, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "addition",
            x1: 50,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 50,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise4: function () {
      let payload = {
        answer: { value: 6, hidden: false, solved: false, active: false },
        integers: [
          { id: "o0", value: 3, x: 460, y: 60, active: true },
          { id: "o1", value: 5, x: 460, y: 260, active: true },
          { id: "o2", value: 5, x: 460, y: 460, active: true },
          { id: "o3", value: 2, x: 460, y: 160, active: true },
        ],
        dropZones: [
          {
            id: "mul",
            operation: "multiplication",
            name: "multiplication",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 750,
          },
          {
            id: "div",
            operation: "division",
            name: "division",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise5: function () {
      let payload = {
        answer: { value: 16, hidden: false, solved: false, active: false },
        integers: [
          { id: "o0", value: -1, x: 460, y: 60, active: true },
          { id: "o1", value: 2, x: 460, y: 260, active: true },
          { id: "o2", value: -4, x: 460, y: 460, active: true },
          { id: "o3", value: 8, x: 460, y: 160, active: true },
        ],
        dropZones: [
          {
            id: "mul",
            operation: "multiplication",
            name: "multiplication",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 750,
          },
          {
            id: "div",
            operation: "division",
            name: "division",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },
    exercise6: function () {
      let payload = {
        answer: { value: 0, hidden: false, solved: false, active: false },
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
            x2: 950,
            y2: 350,
          },
          {
            id: "sub",
            operation: "subtraction",
            name: "subtraction",
            x1: 50,
            y1: 450,
            x2: 950,
            y2: 750,
          },
        ],
      };
      this.$store.commit("loadState", payload);
    },

    exercise7: function () {
      let payload = {
        answer: { value: -4, hidden: false, solved: false, active: false },
        integers: [
          { id: "o1", value: 5, x: 460, y: 460, active: true },
          { id: "o2", value: 4, x: 460, y: 260, active: true },
          { id: "o3", value: -3, x: 335, y: 360, active: true },
          { id: "o4", value: -2, x: 585, y: 360, active: true },
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
    exercise8: function () {
      let payload = {
        answer: { value: 108, hidden: true, solved: false, active: false },
        integers: [
          { id: "o1", value: 3, x: 460, y: 260, active: true },
          { id: "o2", value: -3, x: 460, y: 460, active: true },
          { id: "o3", value: -4, x: 460, y: 60, active: true },
          { id: "o4", value: 1, x: 335, y: 360, active: true },
          { id: "o5", value: -2, x: 585, y: 360, active: true },
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
    exercise9: function () {
      let payload = {
        answer: { value: 0, hidden: true, solved: false, active: false },
        integers: [
          { id: "o0", value: 1, x: 460, y: 60, active: true },
          { id: "o1", value: 2, x: 460, y: 260, active: true },
          { id: "o2", value: 4, x: 460, y: 460, active: true },
          { id: "o3", value: 8, x: 460, y: 160, active: true },
          { id: "o4", value: -1, x: 85, y: 360, active: true },
          { id: "o5", value: -2, x: 335, y: 360, active: true },
          { id: "o6", value: -4, x: 585, y: 360, active: true },
          { id: "o7", value: -8, x: 835, y: 360, active: true },
        ],
        dropZones: [
          {
            id: "sub",
            operation: "subtraction",
            name: "?",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 350,
          },
          {
            id: "mul",
            operation: "multiplication",
            name: "?",
            x1: 550,
            y1: 50,
            x2: 950,
            y2: 350,
          },
          {
            id: "div",
            operation: "division",
            name: "?",
            x1: 50,
            y1: 450,
            x2: 450,
            y2: 750,
          },
          {
            id: "add",
            operation: "addition",
            name: "?",
            x1: 550,
            y1: 450,
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

<style scoped>
li {
  list-style-type: none;
  margin-top: 25px;
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
  width: 100%;
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
