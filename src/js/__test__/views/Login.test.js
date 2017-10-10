import localStorage from '../mocks/localStorage.js';
import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../views/login/Login';

describe('Login', () => {
  const login = shallow(<Login />)

  it('renders a name input area', () => {
    expect(login.contains([
      <input
        type='text'
        ref='name'
        placeholder='name'
        className='textField username mousetrap'
      />
    ])).toBe(true);
  });

  it('renders a password input area', () => {
    expect(login.contains([
      <input
        type='password'
        ref='password'
        placeholder='password'
        className='textField password mousetrap'
      />
    ])).toBe(true);
  });

  it('renders a login button', () => {
    expect(login.find('.submit').first().text()).toBe('ログイン');
  });
})
