import { render } from '@redwoodjs/testing/web'

import StoryboardPage from './StoryboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StoryboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoryboardPage id={42} />)
    }).not.toThrow()
  })
})
