module.exports = {
  client: {
    includes: ['./container/**/*.tsx', './actions/**/*.tsx', './actions/**/*.ts', './components/resource/*.tsx'],
    tagName: 'gql',
    service: {
      name: "admin portal",
      localSchemaFile: './graphql/resource-schema.json'
    },
    connectToDevTools: true
  }
}