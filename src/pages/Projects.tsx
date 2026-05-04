import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { fetchGitHubRepos } from '../services/githubService';
import { Star, GitFork, ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  const [repos, setRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching more repos for the dedicated page (per_page=12)
    const fetchAll = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tquanghuy/repos?sort=updated&per_page=12');
        const data = await response.json();
        setRepos(data.map((repo: any) => ({
          id: repo.id.toString(),
          title: repo.name,
          description: repo.description || 'No description provided.',
          tags: [repo.language].filter(Boolean),
          link: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language
        })));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 h-full">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-brand font-mono text-sm mb-4 tracking-widest uppercase">
          <Code2 size={16} />
          <span>Projects</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
          Open Source <span className="text-neutral-500 italic">Contributions</span>
        </h1>
        <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed">
          A collection of tools, libraries, and experiments I've built or contribute to.
          Powered by the GitHub API.
        </p>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4"
      >
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass-card p-6 h-24 animate-pulse bg-neutral-900/20">
              <div className="h-6 w-48 bg-neutral-800 rounded mb-4" />
              <div className="h-4 w-full bg-neutral-800 rounded mb-2" />
            </div>
          ))
        ) : (
          repos.map((repo) => (
            <motion.a
              key={repo.id}
              variants={item}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between group hover:border-brand/40 hover:bg-brand/5 transition-all duration-300 gap-4 md:gap-6"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <Github size={20} className="text-neutral-400 group-hover:text-brand shrink-0" />
                  <h2 className="text-xl font-bold group-hover:text-brand transition-colors truncate">
                    {repo.title}
                  </h2>
                  <ExternalLink size={14} className="text-neutral-600 group-hover:text-white shrink-0" />
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:w-64 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-neutral-800/50 md:pl-6">
                <div className="flex gap-2 shrink-0">
                  {repo.language && (
                    <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono border border-neutral-700">
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-mono tracking-tighter shrink-0">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-yellow-500/50" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-neutral-500/50" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))
        )}
      </motion.div>
    </div>
  );
}
