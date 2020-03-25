<template>
  <div>
    <p>Click on the links below for more info:</p>
    <nav class="navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav mr-auto">
        <router-link :to="{name: 'historyLink'}" class="nav-link">History</router-link>
        <router-link :to="{name: 'contactLink'}" class="nav-link">Contact</router-link>
        <router-link :to="{name: 'orderingGuideLink'}" class="nav-link">Ordering Guide</router-link>
        <router-link :to="{name: 'deliveryLink'}" class="nav-link">Delivery</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped></style>
