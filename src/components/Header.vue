<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{name: 'homeLink'}" class="nav-link">Home</router-link>
            <!-- <a href="/" class="nav-link">Home</a> -->
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'menuLink'}" class="nav-link">Menu</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
  }

</script>

<style>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>