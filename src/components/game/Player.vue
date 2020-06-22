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
    <p>{{ text }}</p>
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
      let obj = document.getElementById(id).getBoundingClientRect();
      let xoff = evt.clientX - obj.x;
      let yoff = evt.clientY - obj.y;

      evt.dataTransfer.setData("pid", id);
      evt.dataTransfer.setData("xoff", xoff);
      evt.dataTransfer.setData("yoff", yoff);
    },
    isrc: function() {
      let polarity = this.value < 0 ? "n" : "p";
      return require("./../../assets/" + polarity + ".png");
    },
  },
  computed: {
    oclass: function() {
      return "p" + this.value;
    },
    text: function() {
      if (this.value > 0) {
        return "+" + Math.abs(this.value);
      } else if (this.value < 0) {
        return "−" + Math.abs(this.value);
      } else {
        return this.value;
      }
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
}

p {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 40px;
  font-size: 25px;
  font-weight: 900;
  margin: 22px 10px 18px 10px;
  text-align: center;
  vertical-align: middle;
  color: rgb(100, 100, 100);
}
</style>
