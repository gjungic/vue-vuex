import Vue from 'vue';
import Users from '@/components/Users';

describe('Users.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Users);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.users-data h1').textContent)
      .to.equal('Users Data')
  })
});
