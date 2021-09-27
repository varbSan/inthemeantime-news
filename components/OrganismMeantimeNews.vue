<template>
  <section class="meantime-news">
    <MoleculeNewsContent v-if="meantimeContent !== null" :content="meantimeContent" />
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
        const newsKeyPath = '/api/news'
        const newsKeyResult = await axios.get(newsKeyPath)
        const newsKey = newsKeyResult.data

        const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=1&apiKey=${newsKey}`
        const newsMeantimeContent = await axios.get(newsApiUrl)
        // console.log(content.data.results[0])
        console.log(newsMeantimeContent)

        this.meantimeContent = newsMeantimeContent.data.articles[0]
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
