import React from 'react'
import { render } from '@testing-library/react'

import Index from '.'

describe('<App />', () => {
  it('should contains hello world', () => {
    const component = render(<Index />)
    expect(component.baseElement.textContent).toBe('Hello world 🤠')
  })
})
