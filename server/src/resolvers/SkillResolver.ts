import { Skill } from '../entities/Skill';
import { myContext } from '../types/types';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class SkillResolver {
  @Query(() => [Skill])
  skills(@Ctx() { em }: myContext): Promise<Skill[]> {
    return em.find(Skill, {});
  }

  @Mutation(() => Skill)
  async addSkill(
    @Arg('skillName') skillName: string,
    @Ctx() { em }: myContext
  ): Promise<Skill> {
    const skill = em.create(Skill, { skillName });
    await em.persistAndFlush(skill);
    return skill;
  }
}
