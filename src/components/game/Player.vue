<template>
  <div
    :id="id"
    class="player"
    :class="oclass"
    draggable
    @ondrag.prevent
    @dragstart="startDrag($event, id)"
  >
    <img :src="isrc()" alt="" />
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    id: String,
    value: Number,
  },
  methods: {
    startDrag: (evt, id) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("pid", id);
    },
    isrc: function() {
      return require("./../../assets/" + "y" + this.value + ".png");
    },
  },
  computed: {
    oclass: function() {
      return "p" + this.value;
    },
  },
};
</script>

<style scoped>
.player {
  cursor: pointer;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 200px;
  left: 200px;
  border-radius: 99px;
}
</style>
