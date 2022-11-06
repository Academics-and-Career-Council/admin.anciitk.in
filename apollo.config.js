module.exports = {
  client: {
    includes: ['./container/resource/**/*.tsx', './actions/resource/**/*.tsx', './actions/resource/**/*.ts'],
    tagName: 'gql',
    service: {
      name: "admin portal",
      localSchemaFile: './graphql/resource-schema.json'
    },
    connectToDevTools: true
  }
}