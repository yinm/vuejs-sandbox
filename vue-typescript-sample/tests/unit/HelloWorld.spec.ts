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

  it('描画されるDOMのテスト', () => {
    wrapper = shallowMount(HelloVue)

    expect(wrapper.contains('h1')).toBeTruthy()
    expect(wrapper.contains('input')).toBeTruthy()
    expect(wrapper.contains('button')).toBeTruthy()
  })

  it('ボタンの非活性のテスト', () => {
    wrapper = shallowMount(HelloVue)
    const button = wrapper.find('button')

    wrapper.setData({ inputValue: '' })

    expect(button.element.getAttribute('disabled')).toBeTruthy()
  })

})
