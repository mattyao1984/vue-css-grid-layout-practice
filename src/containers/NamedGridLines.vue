<template>
  <div class="page grid-layout">
    <Navigation></Navigation>
    <div class="container-grid">
      <div class="left-sidebar">Left Side</div>
      <div class="main-content">Main Content</div>
      <div class="right-sidebar">Right Side</div>
      <div class="footer">Footer</div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'GridRowCol',
  components: {
    Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container-grid {
    display: grid;
    font-size: 30px;
    grid-gap: 10px;
    height: 100vh;
    grid-template-columns:
      [left-sidebar-start] 1fr
      [main-content-start] 2fr
      [right-sidebar-start] 1fr;
    grid-template-rows:
      [body-start] 80%
      [footer-start] 20%;

    > * {
      background: mediumseagreen;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .footer {
      grid-column: main-content-start / span 2;
    }

    .left-sidebar {
      grid-column: left-sidebar-start;
      grid-row: body-start / span 2;
    }

    .main-content {
      grid-column: main-content-start;
    }

    .right-sidebar {
      grid-column: right-sidebar-start;
    }
  }
</style>
