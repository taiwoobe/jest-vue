import { mount } from '@vue/test-utils';
import HelloWorld from "@/components/HelloWorld.vue";

describe('Testing the HelloWorld Component', () => {
  const wrapper = mount(HelloWorld);

  test('Check if component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  });

  test('checks if the mounted component exists', () => {
    expect(wrapper.exists()).toBe(true)
  });

  test('checks if main wrapper is a div', () => {
    expect(wrapper.is('div')).toBe(true)
  });

  test('Check if data property is toggled', () => {
    wrapper.setData({
      content: true
    })
    wrapper.find('#toggle').trigger('click');
    expect(wrapper.vm.content).toBe(false);
  });
  
  test('check if something is logged to the console', () => {
    let logSomeText = jest.fn();
    wrapper.setMethods({
      logSomething: logSomeText
    });
    wrapper.find('#log').trigger('click');
    expect(logSomeText).toBeCalled();
  })

})

