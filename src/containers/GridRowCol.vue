<template>
  <div class="page grid-layout">
    <Navigation></Navigation>
    <div class="container-grid">
      <div class="grid-item" v-for="item in items" v-bind:key="item.id">
        Item - {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'GridRowCol',
  components: {
    Navigation
  },
  data () {
    return {
      items: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container-grid {
    display: grid;
    font-size: 30px;
    grid-gap: 20px;
    height: 100vh;
    grid-template-columns: 200px 300px auto auto;

    .grid-item {
      min-height: 50px;
      line-height: 50px;
      background: mediumvioletred;
      color: white;

      &:nth-of-type(2) {
        grid-row-start: span 2;
      }

      &:nth-of-type(6) {
        grid-column: 3 / span 2;
      }
    }
  }
</style>
