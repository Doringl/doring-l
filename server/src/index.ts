import 'reflect-metadata';
import express from 'express';
import { MikroORM } from '@mikro-orm/core';
import mikroConfig from './mikro-orm.config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { myContext } from './types/types';
import { SkillResolver } from './resolvers/SkillResolver';
import { ProjectResolver } from './resolvers/ProjectResolver';
import cors from 'cors';

(async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SkillResolver, ProjectResolver],
      validate: false,
    }),
    context: ({ req, res }): myContext => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(4000);
})().catch((err) => console.log(err));
