import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StoryboardCreateArgs>({
  storyboard: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        channel: 'String',
        updatedAt: '2022-05-23T23:36:44Z',
        owner: { create: { id: 'String8497563' } },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        channel: 'String',
        updatedAt: '2022-05-23T23:36:44Z',
        owner: { create: { id: 'String707161' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
