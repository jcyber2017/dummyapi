import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Author from '../components/Author'
import user from '../mocks/user'

Enzyme.configure({adapter: new EnzymeAdapter()})
const defaultProps = {onClick: () => {}, author: {}}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Author {...setupProps} />)
}

test('Author se muestra correctamente', () => {
  const wrapper = setup()
})

test('Author muestra el nombre del autor', () => {
  const wrapper = setup({author: user})
  expect(wrapper.debug()).toContain(user.title)
  expect(wrapper.debug()).toContain(user.firstName)
  expect(wrapper.debug()).toContain(user.lastName)
})

test('haciendo click sobre el nombre llama a la función onClick', () => {
  let value = 'Hola'
  const expected = 'Listo'
  const onPress = () => {
    value = expected
  }
  const wrapper = setup({onClick: onPress})
  wrapper.simulate('click')
  wrapper.update()
  expect(value).toBe(expected)
})
