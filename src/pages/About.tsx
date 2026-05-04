import { motion } from 'motion/react';
import { bio } from '../data';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

export default function About() {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Left: Bio & Profile */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-32">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-8 border-2 border-brand/20 shadow-2xl">
              <img src={bio.avatar} alt={bio.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{bio.name}</h1>
            <p className="text-brand font-mono text-sm mb-6 uppercase tracking-widest">{bio.title}</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin size={18} className="text-neutral-600" />
                <span className="text-sm">{bio.location}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail size={18} className="text-neutral-600" />
                <span className="text-sm">{bio.email}</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a href={bio.social.github} target="_blank" rel="noreferrer" className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-brand/50 hover:text-brand transition-all">
                <Github size={20} />
              </a>
              <a href={bio.social.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-brand/50 hover:text-brand transition-all">
                <Linkedin size={20} />
              </a>

            </div>

            <div className="glass-card p-6 border-brand/10">
              <h3 className="text-sm font-bold mb-4 uppercase tracking-tighter text-neutral-500">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {bio.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded border border-neutral-700 tracking-tight">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 border-brand/10 mt-6">
              <h3 className="text-sm font-bold mb-4 uppercase tracking-tighter text-neutral-500">Certifications</h3>
              <div className="flex flex-col gap-5">
                {bio.certifications?.map((cert, index) => {
                  const CardContent = (
                    <>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand transition-colors leading-snug">{cert.name}</h4>
                      <p className="text-brand font-mono text-[10px] uppercase tracking-widest mt-1">{cert.issuer}</p>
                      <p className="text-xs text-neutral-500 font-mono mt-1">Issued: {cert.date}</p>
                    </>
                  );

                  return cert.link && cert.link !== '#' ? (
                    <a 
                      key={index} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block group cursor-pointer"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div key={index}>
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-2"
        >
          <motion.section variants={item} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand" />
              About Me
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed italic mb-6">
              "{bio.tagline}"
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              {bio.description}
            </p>
          </motion.section>


          <motion.section variants={item}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-brand" />
              Experience
            </h2>
            <div className="relative border-l border-neutral-800 ml-4 space-y-12">
              {bio.experience.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-brand font-mono text-xs mb-4 uppercase tracking-widest">{exp.company}</p>
                  <ul className="text-neutral-400 leading-relaxed list-disc list-outside ml-4 space-y-2">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>{exp.description}</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
