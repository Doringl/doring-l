import 'reflect-metadata';
import express from 'express';
import { MikroORM } from '@mikro-orm/core';
import mikroConfig from './mikro-orm.config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { myContext } from './types/types';
import { SkillResolver } from './resolvers/SkillResolver';
import { ProjectResolver } from './resolvers/ProjectResolver';

(async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();
  app.listen(4000);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SkillResolver, ProjectResolver],
      validate: false,
    }),
    context: ({ req, res }): myContext => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({ app });
})().catch((err) => console.log(err));
