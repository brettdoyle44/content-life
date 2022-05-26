import { boards } from './boards'
import type { StandardScenario } from './boards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('boards', () => {
  scenario('returns all boards', async (scenario: StandardScenario) => {
    const result = await boards()

    expect(result.length).toEqual(Object.keys(scenario.board).length)
  })
})
