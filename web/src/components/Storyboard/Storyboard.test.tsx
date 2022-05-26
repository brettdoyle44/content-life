import { render } from '@redwoodjs/testing/web'

import Storyboard from './Storyboard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Storyboard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Storyboard />)
    }).not.toThrow()
  })
})
