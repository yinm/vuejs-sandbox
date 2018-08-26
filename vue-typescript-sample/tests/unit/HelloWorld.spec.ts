import { Wrapper, shallowMount } from '@vue/test-utils'
import HelloVue from '@/components/HelloVue.vue'

describe('HelloVue.vue', () => {
  let wrapper: Wrapper<HelloVue>

  it('propsを受け取る値のテスト', () => {
    const val = 'Vue'
    wrapper = shallowMount(HelloVue, {
      propsData: { val },
    })

    expect(wrapper.props().val).toBe(val)
    expect(wrapper.text()).toMatch('Hello VUE')
  })
})
