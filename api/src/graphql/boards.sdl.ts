export const schema = gql`
  type Board {
    id: String!
    script: String!
    actions: [String]!
    image: String!
    storyboard: Storyboard!
    storyboardId: String!
  }

  type Query {
    boards: [Board!]! @requireAuth
  }

  input CreateBoardInput {
    script: String!
    actions: [String]!
    image: String!
    storyboardId: String!
  }

  input UpdateBoardInput {
    script: String
    actions: [String]!
    image: String
    storyboardId: String
  }
`
