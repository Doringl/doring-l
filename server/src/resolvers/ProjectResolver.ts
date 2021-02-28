import { myContext } from '../types/types';
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  InputType,
  Field,
} from 'type-graphql';
import { Project } from '../entities/Project';

@InputType()
class ProjectInputs {
  @Field()
  projectName: string;

  @Field()
  projectStatus: 'Active Development' | 'Maintenance';
}

@Resolver()
export class ProjectResolver {
  @Query(() => [Project])
  projects(@Ctx() { em }: myContext): Promise<Project[]> {
    return em.find(Project, {});
  }

  @Mutation(() => Project)
  async addProject(
    @Arg('inputs') inputs: ProjectInputs,
    @Ctx() { em }: myContext
  ): Promise<Project> {
    const project = em.create(Project, {
      projectName: inputs.projectName,
      projectStatus: inputs.projectStatus,
    });
    await em.persistAndFlush(project);
    return project;
  }
}
