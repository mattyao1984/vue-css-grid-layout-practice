import Vue from 'vue'
import Home from '@/containers/Home.vue'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container h1').textContent)
      .to.equal('Welcome to Matt\'s Vue Codepen!')
  })
})
