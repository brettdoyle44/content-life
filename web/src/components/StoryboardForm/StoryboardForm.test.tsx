import { render } from '@redwoodjs/testing/web'

import StoryboardForm from './StoryboardForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StoryboardForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoryboardForm />)
    }).not.toThrow()
  })
})
