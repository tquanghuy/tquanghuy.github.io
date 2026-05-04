export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  stars: number;
  forks: number;
  language: string | null;
}
