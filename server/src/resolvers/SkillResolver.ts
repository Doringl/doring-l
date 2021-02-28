import { Skill } from '../entities/Skill';
import { myContext } from 'src/types/types';
import { Ctx, Query, Resolver } from 'type-graphql';

@Resolver()
export class SkillResolver {
  @Query(() => [Skill])
  skills(@Ctx() { em }: myContext): Promise<Skill[]> {
    return em.find(Skill, {});
  }
}
