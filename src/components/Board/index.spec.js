import React from 'react'
import { shallow } from 'enzyme'

import Board from '.'

describe('components:Board', () => {
  it('renders the board with the proper styles', () => {
    expect(toJson(shallow(<Board />))).toMatchSnapshot()
  })
})
