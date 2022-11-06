module.exports = {
  client: {
    includes: ['./container/career/**/*.tsx', './actions/career/**/*.tsx', './actions/career/**/*.ts'],
    tagName: 'gql',
    service: {
      name: "admin portal",
      localSchemaFile: './graphql/career-schema.json'
    },
    connectToDevTools: true
  }
}