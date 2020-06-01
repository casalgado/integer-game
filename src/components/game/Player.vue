<template>
  <div
    :id="id"
    class="circle"
    draggable
    @ondrag.prevent
    @dragstart="startDrag($event, id)"
  >
    <svg width="50" height="50">
      <circle
        cx="25"
        cy="25"
        r="24"
        stroke="black"
        stroke-width="1"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    id: String,
  },
  methods: {
    startDrag: (evt, id) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("pid", id);
    },
  },
};
</script>

<style>
.circle {
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 200px;
  left: 200px;
  border-radius: 99px;
}
</style>
