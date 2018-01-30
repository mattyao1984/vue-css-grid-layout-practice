<template>
  <div class="page grid-layout">
    <Navigation></Navigation>
    <div class="container-grid">
      <header>{{ this.$route.name }}</header>
      <aside>Left Aside</aside>
      <section>Main Body</section>
      <aside>Right Aside</aside>
      <footer>{{ author }} &copy; {{ year }}</footer>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

const date = new Date()

export default {
  name: 'CSS Grid Layout',
  components: {
    Navigation
  },
  data () {
    return {
      author: 'Matt Yao',
      year: date.getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container-grid {
  display: grid;
  font-size: 30px;
  grid-gap: 10px;
  grid-template-areas:
    "header"
    "section"
    "aside-1"
    "aside-2"
    "footer";

  > * {
    min-height: 50px;
    line-height: 50px;
  }

  header {
    grid-area: header;
    background: mediumturquoise;
  }

  aside:nth-of-type(1) {
    grid-area: aside-1;
    background: mediumorchid;
  }

  section {
    grid-area: section;
    background: lightsalmon;
  }

  aside:nth-of-type(2) {
    grid-area: aside-2;
    background: forestgreen;
  }

  footer {
    grid-area: footer;
    background: darkgray;
  }
}

@media (min-width: 768px) {
  .container-grid {
    grid-gap: 5px;
    grid-template-areas:
      "header header header"
      "aside-1 section aside-2"
      "footer footer footer";
  }
}
</style>
