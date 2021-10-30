module.exports = {
  client: {
    includes: ['./container/**/*.tsx', './actions/**/*.tsx', './actions/**/*.ts'],
    tagName: 'gql',
    service: {
      name: "admin portal",
      localSchemaFile: './graphql/career-schema.json'
    },
    connectToDevTools: true
  }
}