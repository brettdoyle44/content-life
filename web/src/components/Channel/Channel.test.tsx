import { render } from '@redwoodjs/testing/web'

import Channel from './Channel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Channel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Channel />)
    }).not.toThrow()
  })
})
