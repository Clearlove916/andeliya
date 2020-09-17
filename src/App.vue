<template>
  <div id="app">
    <keep-alive exclude="">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
