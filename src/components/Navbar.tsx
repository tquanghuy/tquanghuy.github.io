import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Profile', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="nav-blur border-b border-neutral-800 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-muted/30 p-2 rounded-lg border border-brand/20 group-hover:border-brand/50 transition-colors">
            <Terminal size={20} className="text-brand" />
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter text-white lowercase">
            tquanghuy
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === item.path ? 'text-white' : 'text-neutral-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="h-px bg-brand mt-0.5"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="h-4 w-px bg-neutral-800" />
          
          <div className="flex items-center gap-4 text-neutral-400">
          </div>
        </div>
      </div>
    </nav>
  );
}
