export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    name: String
    email: String
    image: String
    storyboards: [Storyboard]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String
    image: String
  }

  input UpdateUserInput {
    name: String
    email: String
    image: String
  }
`
