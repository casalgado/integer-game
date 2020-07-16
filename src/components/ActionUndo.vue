<template>
  <button @click="undo">undo</button>
</template>

<script>
export default {
  name: "ActionUndo",
  methods: {
    undo: function() {
      this.$store.commit("undo");
    },
  },
};
</script>

<style></style>
