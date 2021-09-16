<template>
  <div class="news-content">
    {{ content.title }}
    {{ content.url }}<br>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.news-content {
  font-size: .6rem;
}
</style>
