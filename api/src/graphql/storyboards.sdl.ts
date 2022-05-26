export const schema = gql`
  type Storyboard {
    id: String!
    title: String!
    description: String!
    channel: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    owner: User!
    userId: String!
    boards: [Board]!
  }

  type Query {
    storyboards: [Storyboard!]! @requireAuth
    storyboard(id: String!): Storyboard @requireAuth
  }

  input CreateStoryboardInput {
    title: String!
    description: String!
    channel: String!
    userId: String!
  }

  input UpdateStoryboardInput {
    title: String
    description: String
    channel: String
    userId: String
  }

  type Mutation {
    createStoryboard(input: CreateStoryboardInput!): Storyboard! @requireAuth
  }
`
