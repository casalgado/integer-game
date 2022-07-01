<template>
  <div>
    <h4>Intro</h4>
    <p>
      The purpose of this game is to give you a way to interact with number
      operations directly. Sometimes the numbers will behave in unexpected ways,
      in those moments try to stop and think about why they behave like they do.
    </p>

    <h4>How to play:</h4>

    <p>
      In the game there will be boxes labeled with the four operations. If you
      place a number inside a box, and then another on top of it, the operation
      in the box will be applied. For example, if there is a 2 in the addition
      box and you place a 3 on top, the result will be five. Doing the same in
      the subtraction box will give a result of -1. Try it below!
    </p>

    <h4>How to beat the levels:</h4>
    <p>
      The goal of the game is to combine all the numbers in a way that the
      result is equal to the answer box. When you have only
      <b>one number left</b> on the board, place it on the answer box, if it
      turns green, you are ready to move to the next level.
    </p>

    <h4>The Bonus Level:</h4>
    <p>
      In the bonus stage the answer is marked "?". The goal of this level is to
      combine the numbers until you have the largest possible positive number.
      If the answer box turns green, you know you have the answer.
    </p>
  </div>
</template>

<script>
export default {
  name: "TheIntro",
};
</script>

<style scoped>
h4 {
  margin: 0px;
}

h4:first-child {
  margin-top: 15px;
}

p {
  margin: 10px;
}
</style>