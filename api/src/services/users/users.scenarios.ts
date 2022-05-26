import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { id: 'String2166775' } },
    two: { data: { id: 'String6899389' } },
  },
})

export type StandardScenario = typeof standard
