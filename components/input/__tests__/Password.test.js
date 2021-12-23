import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line import/no-unresolved
import Input from '..';
import focusTest from '../../../tests/shared/focusTest';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { sleep } from '../../../tests/utils';
import Password from '../Password';

describe('Input.Password', () => {
  focusTest(Input.Password, { refFocus: true });
  mountTest(Input.Password);
  rtlTest(Input.Password);

  it('should get input element from ref', () => {
    const ref = React.createRef();
    const onSelect = jest.fn();

    const wrapper = mount(<Input.Password onSelect={onSelect} ref={ref} />);
    expect(ref.current.input instanceof HTMLInputElement).toBe(true);
    wrapper.find('input').simulate('select');
    expect(onSelect).toHaveBeenCalled();
  });

  it('should support size', () => {
    const wrapper = mount(<Password size="large" />);
    expect(wrapper.find('input').hasClass('ezd-input-lg')).toBe(true);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should change type when click', () => {
    const wrapper = mount(<Input.Password />);
    wrapper.find('input').simulate('change', { target: { value: '111' } });
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.find('.ezd-input-password-icon').at(0).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.find('.ezd-input-password-icon').at(0).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('visibilityToggle should work', () => {
    const wrapper = mount(<Input.Password visibilityToggle={false} />);
    expect(wrapper.find('.ezdicon-eye').length).toBe(0);
    wrapper.setProps({ visibilityToggle: true });
    expect(wrapper.find('.ezdicon-eye-invisible').length).toBe(1);
  });

  it('should not toggle visibility when disabled prop is true', () => {
    const wrapper = mount(<Input.Password disabled />);
    expect(wrapper.find('.ezdicon-eye-invisible').length).toBe(1);
    wrapper.find('.ezdicon-eye-invisible').simulate('click');
    expect(wrapper.find('.ezdicon-eye').length).toBe(0);
  });

  it('should keep focus state', () => {
    const wrapper = mount(<Input.Password defaultValue="111" autoFocus />, {
      attachTo: document.body,
    });
    expect(document.activeElement).toBe(wrapper.find('input').at(0).getDOMNode());
    document.activeElement.setSelectionRange(2, 2);
    expect(document.activeElement.selectionStart).toBe(2);
    wrapper.find('.ezd-input-password-icon').at(0).simulate('mousedown');
    wrapper.find('.ezd-input-password-icon').at(0).simulate('mouseup');
    wrapper.find('.ezd-input-password-icon').at(0).simulate('click');
    expect(document.activeElement).toBe(wrapper.find('input').at(0).getDOMNode());
    expect(document.activeElement.selectionStart).toBe(2);
    wrapper.unmount();
  });

  it('should not show value attribute in input element', async () => {
    const wrapper = mount(<Input.Password />);
    wrapper
      .find('input')
      .at('0')
      .simulate('change', { target: { value: 'value' } });
    await sleep();
    expect(wrapper.find('input').at('0').getDOMNode().getAttribute('value')).toBeFalsy();
  });

  it('should not show value attribute in input element after blur it', async () => {
    const wrapper = mount(<Input.Password />);
    wrapper
      .find('input')
      .at('0')
      .simulate('change', { target: { value: 'value' } });
    await sleep();
    expect(wrapper.find('input').at('0').getDOMNode().getAttribute('value')).toBeFalsy();
    wrapper.find('input').at('0').simulate('blur');
    await sleep();
    expect(wrapper.find('input').at('0').getDOMNode().getAttribute('value')).toBeFalsy();
    wrapper.find('input').at('0').simulate('focus');
    await sleep();
    expect(wrapper.find('input').at('0').getDOMNode().getAttribute('value')).toBeFalsy();
  });

  it('could be unmount without errors', () => {
    expect(() => {
      const wrapper = mount(<Input.Password />);
      wrapper
        .find('input')
        .at('0')
        .simulate('change', { target: { value: 'value' } });
      wrapper.unmount();
    }).not.toThrow();
  });

  it('should not contain value attribute in input element with defaultValue', async () => {
    const wrapper = mount(<Input.Password defaultValue="value" />);
    await sleep();
    expect(wrapper.find('input').at('0').getDOMNode().getAttribute('value')).toBeFalsy();
  });
});
