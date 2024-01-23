import { mount } from '@vue/test-utils'
import aboutssr from '@/pages/aboutssr.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('Counter Component', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('the count initially should be 0', async () => {
    const wrapper = mount(aboutssr)
    expect(wrapper.find('.count').text()).toBe('0')
  })

  test('clicking the button should increment counter by 1', async () => {
    const wrapper = mount(aboutssr)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.count').text()).toBe('1')
  })

  test('double counter should be twice the counter value', async () => {
    const wrapper = mount(aboutssr)
    expect(wrapper.find('.count').text()).toBe('0')
    expect(wrapper.find('.doubleCount').text()).toBe('0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.count').text()).toBe('1')
    expect(wrapper.find('.doubleCount').text()).toBe('2')
  })

})