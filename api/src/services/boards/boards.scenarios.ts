import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BoardCreateArgs>({
  board: {
    one: {
      data: {
        script: 'String',
        actions: 'String',
        image: 'String',
        storyboard: {
          create: {
            title: 'String',
            description: 'String',
            channel: 'String',
            updatedAt: '2022-05-24T00:18:38Z',
            owner: { create: { id: 'String6981645' } },
          },
        },
      },
    },
    two: {
      data: {
        script: 'String',
        actions: 'String',
        image: 'String',
        storyboard: {
          create: {
            title: 'String',
            description: 'String',
            channel: 'String',
            updatedAt: '2022-05-24T00:18:38Z',
            owner: { create: { id: 'String1724331' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
