import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { Project } from '../entities/Project';
import { myContext } from '../types/types';

@InputType()
class ProjectInputs {
  @Field()
  projectName: string;

  @Field()
  projectStatus: 'Active Development' | 'Deployed';

  @Field()
  projectGitHubLink: string;
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
      projectGitHubLink: inputs.projectGitHubLink,
    });
    await em.persistAndFlush(project);
    return project;
  }
}
