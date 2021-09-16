<template>
  <div class="button">
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  background-image: linear-gradient(90deg, hsl(120, 58%, 49%), hsl(240, 69%, 47%));
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 2rem;
  transition: all 200ms;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(90deg, hsl(120, 58%, 59%), hsl(240, 69%, 57%));
  }
  &:active{
    transform: scale(1.03)
  }
}
</style>
