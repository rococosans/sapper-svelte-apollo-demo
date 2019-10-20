# GraphQL Examples

[WIP]

This project is setup to use MongoDB locally with no modifications. However, feel free to hook up the database of your choosing.

## Getting started

Rename `.env.sample` to `.env`

```bash
npm install
npm start
```

It will be available on `http://localhost:4000/`

### Seed the database

Run:

```graphql
mutation {
  seedDb
}
```

### Clear all data from the database

Run:

```graphql
mutation {
  resetDb
}
```

## Gotchas

You must define your GraphQL types in your SDL schema (.graphql file), **before** you write a query or mutation in the JS file where your resolvers live.

Not doing so will result in an error like this:

```
Error: Query.hello defined in resolvers, but not in schema
[nodemon] app crashed - waiting for file changes before starting...
```

The fix:

1. Make sure all of the Queries & Mutations you have defined in your resolvers are accounted for in your SDL schema (.graphql files).

- Note: even if your server has restarted with nodemon, it still may have not picked up the changes made in your graphql schema. (I think I fixed this bug.)

2. Make a change in your `typeDefs.js` file. A comments will work fine.

or

3. Restart your server from the command line
