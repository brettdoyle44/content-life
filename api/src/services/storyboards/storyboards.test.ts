import { storyboards } from './storyboards'
import type { StandardScenario } from './storyboards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('storyboards', () => {
  scenario('returns all storyboards', async (scenario: StandardScenario) => {
    const result = await storyboards()

    expect(result.length).toEqual(Object.keys(scenario.storyboard).length)
  })
})
