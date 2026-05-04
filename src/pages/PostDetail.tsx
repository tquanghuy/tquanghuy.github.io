import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { posts, bio } from '../data';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-brand hover:underline">Return to home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto px-6 py-12 md:py-20"
    >
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-mono tracking-tighter">back_to_feed()</span>
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 text-sm font-mono text-brand mb-6 uppercase tracking-widest">
          <span>{post.category}</span>
          <span className="w-1 h-1 bg-neutral-700 rounded-full" />
          <span className="text-neutral-500">{post.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between border-y border-neutral-800 py-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-700">
              <img 
                src={bio.avatar} 
                alt={bio.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-sm font-bold">{bio.name}</p>
              <p className="text-xs text-neutral-500 font-mono">{bio.title} @ tquanghuy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-neutral-500">
            <span className="flex items-center gap-1.5 text-xs font-mono"><Clock size={16} /> {post.readingTime}</span>
            <div className="h-4 w-px bg-neutral-800 mx-2" />
            <div className="flex gap-3">
              <button className="hover:text-white transition-colors"><Bookmark size={18} /></button>
              <button className="hover:text-white transition-colors"><Share2 size={18} /></button>
            </div>
          </div>
        </div>
      </header>

      <div className="rounded-2xl overflow-hidden mb-12 border border-neutral-800 aspect-video">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="markdown-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <footer className="mt-20 pt-10 border-t border-neutral-900">
        <div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 text-center">
          <h3 className="text-xl font-bold mb-3 text-white">Enjoyed this post?</h3>
          <p className="text-neutral-400 mb-6">
            Join 2k+ developers receiving my weekly newsletter on system architecture.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-black border border-neutral-700 rounded-lg px-4 py-3 text-sm w-full focus:ring-1 focus:ring-brand focus:outline-none"
            />
            <button className="bg-brand text-black px-6 py-3 rounded-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
