<template>
  <div class="answerBox" :class="classname">
    <p class="answerTitle">answer</p>
    <p v-if="answer.hidden" class="answerValue">?</p>
    <p v-else class="answerValue">{{ sign }}{{ Math.abs(answer.value) }}</p>
  </div>
</template>

<script>
export default {
  name: "AnswerBox",
  props: { answer: Object },
  data() {
    return {
      congratulations: false,
      sign: "",
      polarity: "",
      classname: "n-style",
    };
  },
  computed: {
    solved: function() {
      return this.$store.state.answer.solved;
    },
    active: function() {
      return this.$store.state.answer.active;
    },
  },
  methods: {
    reset: function() {
      if (this.answer.value >= 0) {
        this.sign = this.answer.value == 0 ? "" : "+";
        this.polarity = "p";
        this.classname = "p-style";
      }
      if (this.answer.value < 0) {
        this.sign = "-";
        this.polarity = "n";
        this.classname = "n-style";
      }
    },
  },
  watch: {
    active() {
      if (this.active) {
        this.classname += " active";
      } else {
        this.reset();
      }
    },
    solved() {
      if (this.solved == "correct") {
        this.classname += " correct";
      } else if (this.solved == "incorrect") {
        this.classname += " incorrect";
      }
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style scoped>
.answerBox {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  position: absolute;
  top: 360px;
  left: 460px;
  opacity: 0.6;
}

.answerTitle {
  position: relative;
  top: -15px;
}

.answerValue {
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
}

.n-style {
  border: 2px solid rgb(200, 200, 200);
  background-color: black;
  color: rgb(200, 200, 200);
}

.p-style {
  border: 2px solid rgb(100, 100, 100);
  background-color: rgb(255, 255, 255);
  color: rgb(100, 100, 100);
}

.active {
  opacity: 1;
}

.correct {
  color: white;
  background-color: green;
}

.incorrect {
  color: white;
  background-color: red;
}
</style>
