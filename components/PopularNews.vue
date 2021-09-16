<template>
  <section class="popular-news">
    <h2>Popular News</h2>
    <NewsContent v-if="popularContent !== null" :content="popularContent" />
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
        const nytKeyPath = '/api/nyt'
        const nytKeyResult = await axios.get(nytKeyPath)
        const nytKey = nytKeyResult.data

        const nytApiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${nytKey}`
        const nytPopularContent = await axios.get(nytApiUrl)
        console.log(nytPopularContent.data.results[0])

        this.popularContent = nytPopularContent.data.results[0]
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
