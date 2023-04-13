<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Posts</RouterLink> -
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.navbar {
  background-color: lightgreen;
  padding: 1.2rem;
}
</style>
