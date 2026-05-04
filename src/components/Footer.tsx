import { Terminal } from 'lucide-react';
import { bio } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 mt-20 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-brand" />
          <span className="font-mono text-sm text-neutral-500">
            © {new Date().getFullYear()} {bio.name}. Built with React & Vite.
          </span>
        </div>
        
        <div className="flex gap-8 text-neutral-500 text-sm font-mono">
          <a href="#" className="hover:text-white transition-colors">RSS Feed</a>
          <a href="#" className="hover:text-white transition-colors">Newsletter</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
