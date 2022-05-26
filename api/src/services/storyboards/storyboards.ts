import { db } from 'src/lib/db'
import type { QueryResolvers, StoryboardResolvers } from 'types/graphql'

export const storyboards: QueryResolvers['storyboards'] = () => {
  return db.storyboard.findMany()
}

export const storyboard: QueryResolvers['storyboard'] = ({ id }) => {
  return db.storyboard.findUnique({
    where: { id },
  })
}

export const createStoryboard = ({ input }) => {
  return db.storyboard.create({
    data: {
      title: input.title,
      description: input.description,
      channel: input.channel,
      owner: { connect: { id: input.userId } },
    },
  })
}

export const Storyboard: StoryboardResolvers = {
  owner: (_obj, { root }) =>
    db.storyboard.findUnique({ where: { id: root.id } }).owner(),
  boards: (_obj, { root }) =>
    db.storyboard.findUnique({ where: { id: root.id } }).boards(),
}
