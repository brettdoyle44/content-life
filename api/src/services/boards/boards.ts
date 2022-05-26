import { db } from 'src/lib/db'
import type { QueryResolvers, BoardResolvers } from 'types/graphql'

export const boards: QueryResolvers['boards'] = () => {
  return db.board.findMany()
}

export const board: QueryResolvers['board'] = ({ id }) => {
  return db.board.findUnique({
    where: { id },
  })
}

export const Board: BoardResolvers = {
  storyboard: (_obj, { root }) =>
    db.board.findUnique({ where: { id: root.id } }).storyboard(),
}
