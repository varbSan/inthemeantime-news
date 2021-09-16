<template>
  <section class="meantime-news">
    <h2>Meantime News</h2>
    <NewsContent v-if="meantimeContent !== null" :content="meantimeContent" />
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      meantimeContent: null
    }
  },
  mounted () {
    const getMeantimeContent = async () => {
      try {
        const nytKeyPath = '/api/nyt'
        const nytKeyResult = await axios.get(nytKeyPath)
        const nytKey = nytKeyResult.data

        const nytApiUrl = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${nytKey}`
        const nytMeantimeContent = await axios.get(nytApiUrl)
        // console.log(content.data.results[0])
        console.log(nytMeantimeContent.data)

        this.meantimeContent = nytMeantimeContent.data.results[0]
      } catch (err) {
        console.log(err)
      }
    }
    getMeantimeContent()
  }
}
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
