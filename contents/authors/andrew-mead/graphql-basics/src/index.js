import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import { loadFilesSync } from "@graphql-tools/load-files";
import resolvers from "./resolvers/index.js";
import db from "./db.js";

const schema = createSchema({
  typeDefs: loadFilesSync("src/schema.graphql"),
  resolvers,
});

const yoga = createYoga({
  schema,
  context: {
    db,
  },
});

const server = createServer(yoga);

server.listen(4000, function () {
  console.log("Saabbir:", "Server is running on http://localhost:4000/graphql");
});
