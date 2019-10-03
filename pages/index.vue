<template>
  <div class="container">
<a href="/users">Users</a> <!--Sends a request to the server-->
<nuxt-link to="/users">Users</nuxt-link> <!-- does not send a request to the server - routing by code only-->
  </div>
</template>

<script>

export default {
}
</script>

<style>
  
</style>
