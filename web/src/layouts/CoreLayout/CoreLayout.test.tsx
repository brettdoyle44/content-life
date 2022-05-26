import { render } from '@redwoodjs/testing/web'

import CoreLayout from './CoreLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CoreLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CoreLayout />)
    }).not.toThrow()
  })
})
