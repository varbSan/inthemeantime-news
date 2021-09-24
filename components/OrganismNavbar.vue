<template>
  <nav class="navbar">
    <div class="title">
      <nuxt-link to="/">
        <h1>ITM News</h1>
      </nuxt-link>
    </div>
    <div class="nav-links">
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}
</style>
