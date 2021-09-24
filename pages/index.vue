<template>
  <div>
    <OrganismNavbar />
    <OrganismPopularNews v-show="!isNewsWorthy" />
    <OrganismMeantimeNews v-show="isNewsWorthy" />
    <AtomButton msg="In the meantime..." @click.native="isNewsWorthy = !isNewsWorthy" />
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

<style lang="scss">
</style>
