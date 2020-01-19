import { shallowMount } from '@vue/test-utils'
import SimplePassword from '@/SimplePassword.vue'
import { checkPassword } from '@/logic'

const risky = 'asdfasfd'
const secure = 'asdfsASDFASD1231@?@'

describe('SimplePassword.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(SimplePassword, {
      propsData: {
        password: risky
      }
    })

    expect(wrapper.classes()).toContain('risky')
  })

  it('renders', () => {
    const wrapper = shallowMount(SimplePassword, {
      propsData: {
        password: secure
      }
    })

    expect(wrapper.classes()).toContain('secure')
  })
})

describe('checkPassword', () => {
  it('return risky', () => {
    expect(checkPassword(risky)).toBe('risky')
  })

  it('return secure', () => {
    expect(checkPassword(secure)).toBe('secure')
  })
})
