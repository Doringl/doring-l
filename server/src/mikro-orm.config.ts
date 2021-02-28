import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
import { Project } from './entities/Project';
import { Skill } from './entities/Skill';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d\.[tj]s$/,
  },
  entities: [Skill, Project],
  dbName: 'doringl',
  user: 'postgres',
  password: 'psql',
  type: 'postgresql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
