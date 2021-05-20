import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Likes from '../components/Likes'

Enzyme.configure({adapter: new EnzymeAdapter()})
const defaultProps = {likes: 0}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Likes {...setupProps} />)
}

test('Likes se muestra correctamente', () => {
  const wrapper = setup()
})

test('Likes muestra el número de likes', () => {
  const likes = 45
  const wrapper = setup({likes})
  expect(wrapper.debug()).toContain(likes)
})
