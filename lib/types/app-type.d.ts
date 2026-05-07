export interface iData {
  name: string;
  createdAt: Date;
}

export interface iGithubRepo {
  name: string;
  created_at: string;
  language: string | null;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
}

export interface iProjectByTypes {
  [key: string]: iProject[];
}

export interface iProject {
  name: string;
  type: string;
  repoName?: string;
  createdAt: Date;
  id: number;
  githubUrl?: string;
  description?: string;
  language?: string;
  stars?: number;
  readme?: string;
}
