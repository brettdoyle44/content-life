import { db } from 'src/lib/db'
import type { QueryResolvers, UserResolvers } from 'types/graphql'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const User: UserResolvers = {
  storyboards: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).storyboards(),
}
