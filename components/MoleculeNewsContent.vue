<template>
  <div class="news-content">
    <h2>
      {{ content.title }}
    </h2>
    <figure v-if="content.urlToImage" class="picture">
      <img :src="content.urlToImage" :alt="content.urlToImage[0].caption">
      <figcaption>{{ content.description }}</figcaption>
    </figure>
    <h6>
      {{ content.content }}
    </h6>
    <h4>
      {{ content.author }}
    </h4>
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
.picture {
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }
  figcaption {
    width: 100%;
    padding: .5rem 2rem;
  }
}
</style>
