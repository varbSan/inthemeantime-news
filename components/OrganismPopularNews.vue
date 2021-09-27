<template>
  <section class="popular-news">
    <MoleculeNewsContent v-if="popularContent !== null" :content="popularContent" />
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      popularContent: null
    }
  },
  mounted () {
    const getPopularContent = async () => {
      try {
        const newsKeyPath = '/api/news'
        const newsKeyResult = await axios.get(newsKeyPath)
        const newsKey = newsKeyResult.data

        const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=1&apiKey=${newsKey}`
        const newsPopularContent = await axios.get(newsApiUrl)
        // console.log(content.data.results[0])
        console.log(newsPopularContent)

        this.popularContent = newsPopularContent.data.articles[0]
      } catch (err) {
        console.log(err)
      }
    }
    getPopularContent()
  }
}
</script>

<style>

</style>
