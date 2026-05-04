import { Post, Project } from './types';

export const posts: Post[] = [
  /* Template for future blog posts
  {
    id: '1',
    title: 'Your Blog Title Here',
    excerpt: 'A short summary of your blog post.',
    content: `## Your Heading Here\n\nYour markdown content goes here.`,
    date: 'May 04, 2026',
    category: 'Backend',
    readingTime: '5 min',
    image: 'https://picsum.photos/seed/placeholder/800/400',
    slug: 'your-blog-title'
  }
  */
];

export const projects: Project[] = []; // Now fetched dynamically

export const bio = {
  name: 'Tran Quang Huy (Cameron)',
  title: 'Backend Software Engineer',
  tagline: 'Crafting robust backend services and distributed systems.',
  description: 'A passionate software engineer from Vietnam with expertise in building scalable backend architectures, high-performance APIs, and resilient microservices. I believe in writing clean, maintainable code and staying at the cutting edge of cloud technologies.',
  avatar: 'https://github.com/tquanghuy.png',
  location: 'Vietnam',
  email: 'tquanghuy.dev@gmail.com',
  social: {
    github: 'https://github.com/tquanghuy',
    linkedin: 'https://www.linkedin.com/in/tquanghuy'
  },
  experience: [
    {
      company: 'Cake by VPBank Digital Bank',
      role: 'Software Engineer II',
      period: 'Jun 2024 - Present',
      description: [
        'Implemented an LLM-powered Conversation Insight solution to support QA of customer support conversations.',
        'Engineered and scaled SIP-based communication services for a Call Center handling 100+ concurrent calls and 100,000+ daily interactions.',
        'Strengthened anti-spoofing in eKYC and optimized system resilience.'
      ]
    },
    {
      company: 'Teko Vietnam JSC, VNLIFE Group',
      role: 'Software Engineer',
      period: 'Mar 2022 - Jun 2024',
      description: [
        'Engineered robust APIs for Inventory and Orders Management services within an ERP system offered as SaaS for clients like Phong Vu, Vnshop, and Takashimaya.',
        'Enhanced performance and ensured high availability of high-traffic APIs during peak loads.'
      ]
    }
  ],
  skills: [
    'Go', 'GCP', 'PostgreSQL', 'Redis', 'Kafka', 'Microservices'
  ],
  certifications: [
    {
      name: 'Associate Cloud Engineer Certification',
      issuer: 'Google Cloud',
      date: 'Aug 2025',
      link: 'https://www.credly.com/badges/a1343504-036b-4dee-ab27-42c985e32a49'
    },
    {
      name: 'IBM DevOps and Software Engineering',
      issuer: 'Coursera',
      date: 'Oct 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/4ZGT8NJPUFZ2'
    },
    {
      name: 'TOEIC 825',
      issuer: 'IIG Vietnam',
      date: 'Jul 2022',
      link: '#'
    }
  ]
};
