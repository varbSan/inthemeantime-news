<template>
  <div>
    <Navbar />
    <h1>In the Meantime News</h1>
    <PopularNews v-show="!isNewsWorthy" />
    <MeantimeNews v-show="isNewsWorthy" />
    <Button msg="In the meantime..." @click.native="isNewsWorthy = !isNewsWorthy" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isNewsWorthy: false
    }
  }

}
</script>
