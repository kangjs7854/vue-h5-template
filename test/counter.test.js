/*
 * @Date: 2020-08-18 15:20:05
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-18 17:13:02
 * @FilePath: \vue-h5-template\test\counter.test.js
 */

import { mount } from '@vue/test-utils';
import Counter  from './counter.vue'

describe('Counter', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = mount(Counter)
  
    it('button click should increment the count text', async () => {
        expect(wrapper.text()).toContain('0')
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.text()).toContain('1')
      })
  
    
  })