import { Project } from '../types';

export async function fetchGitHubRepos(username: string): Promise<Project[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  
  return data.map((repo: any) => ({
    id: repo.id.toString(),
    title: repo.name,
    description: repo.description || 'No description provided.',
    tags: [repo.language].filter(Boolean),
    link: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language
  }));
}
