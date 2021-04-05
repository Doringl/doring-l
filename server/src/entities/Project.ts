import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'text' })
  projectName!: string;

  @Field()
  @Property({ type: 'text' })
  projectStatus!: 'Active Development' | 'Deployed';

  @Field()
  @Property({ type: 'text' })
  projectGitHubLink!: string;
}
