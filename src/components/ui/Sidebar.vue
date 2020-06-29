<template>
  <div id="sidebar">
    <button @click="levelOne">
      Level 1
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    levelOne: function() {
      let payload = {
        integers: [
          { id: "o0", value: -3, x: 460, y: 60, active: true },
          { id: "o1", value: -3, x: 460, y: 260, active: true },
          { id: "o2", value: -5, x: 460, y: 460, active: true },
          { id: "o3", value: -2, x: 460, y: 660, active: true },
        ],
        dropZones: [
          {
            id: "add",
            operation: "addition",
            name: "?",
            x1: 50,
            y1: 50,
            x2: 450,
            y2: 750,
          },
          {
            id: "sub",
            operation: "subtraction",
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

<style></style>
