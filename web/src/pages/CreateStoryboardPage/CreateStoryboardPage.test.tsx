import { render } from '@redwoodjs/testing/web'

import CreateStoryboardPage from './CreateStoryboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateStoryboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateStoryboardPage />)
    }).not.toThrow()
  })
})
