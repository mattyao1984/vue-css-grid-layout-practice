<template>
  <div class="page home">
    <Navigation></Navigation>
    <div class="container">
      <img src="./../assets/logo.png">
      <h1>{{ msg }}</h1>
      <h2>{{ this.$route.name }}</h2>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'Home',
  components: {
    Navigation
  },
  data () {
    return {
      msg: 'Welcome to Matt\'s Vue Codepen!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
