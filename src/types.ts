export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export interface UserInfo {
  name: string;
  login: string;
  avatar_url: string;
  bio: string | null;
  location: string;
  company: string;
  public_repos: number;
}
