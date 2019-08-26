import { shallowMount } from '@vue/test-utils';
import Main from '../../src/components/Main'; // name of your Vue component

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Main, {
    propsData: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Main Component', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
