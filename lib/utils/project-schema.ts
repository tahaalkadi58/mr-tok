import { iGithubRepo, iProject, iProjectByTypes } from "../types/app-type";

export function mapGithubReposToProjects(repos: iGithubRepo[]): iProject[] {
  return repos
    .filter((repo) => !repo.fork && repo.name !== "mr-tok")
    .map((repo, index) => {
      const parts = repo.name.split("-");
      const type = parts.pop() || "other";
      const name = parts.join("-");
      return {
        id: index,
        name,
        type,
        repoName: repo.name,
        createdAt: new Date(repo.created_at),
        githubUrl: repo.html_url,
        homepageUrl: repo.homepage || undefined,
        description: repo.description || "",
        language: repo.language || "",
        stars: repo.stargazers_count,
        isProject: true,
      } as iProject;
    });
}

export function groupProjectsByType(projects: iProject[]): iProjectByTypes {
  return projects.reduce<iProjectByTypes>(
    (acc, project) => {
      const { type } = project;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(project);
      if (!acc.all) acc.all = [];
      acc.all.push(project);
      return acc;
    },
    { all: [] }
  );
}
