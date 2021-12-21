module.exports = {
  client: {
    includes: ['./container/**/*.tsx', './actions/**/*.tsx', './actions/**/*.ts', './components/**/*.tsx', './graphql/*.json'],
    tagName: 'gql',
    service: {
      name: "admin portal",
    },
    connectToDevTools: true
  }
}