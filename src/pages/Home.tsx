import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { posts } from '../data';
import { Clock } from 'lucide-react';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 h-full tech-grid">
      <div className="max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Technical <span className="text-neutral-500 italic">Blog</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Thoughts, tutorials, and deep dives into software architecture and development.
          </p>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-16"
        >
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              variants={item}
              className="group relative"
            >
              <Link to={`/post/${post.slug}`} className="block">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-neutral-800 rounded-full" />
                    <span className="text-brand/80">{post.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold group-hover:text-brand transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 text-lg line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-neutral-500 text-xs font-mono uppercase tracking-widest pt-2">
                     <Clock size={14} /> {post.readingTime} read
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
