import { ExternalLink, Github, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import restaurant from '../img/daawat-e-kuldeep.png'
import institute from '../img/institute.png'
import socialsite from '../img/socialsite.png' 
import instituteSoftware from '../img/instituteSoftware.png'
 

export default function Projects() {
  const { isDark } = useTheme();
  const projects = [
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: true,
    // },
    // {
    //   title: 'Task Management App',
    //   description: 'Real-time collaborative task management tool with drag-and-drop functionality and team features.',
    //   technologies: ['React', 'Firebase', 'Tailwind CSS'],
    //   image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: true,
    // },
    {
      title: 'Coaching & Institute Website',
      description: 'A responsive and professional website built for an educational institute or coaching center. Features include course listings, faculty profiles, student testimonials, and a contact form.',
      technologies: ['React', 'Javascript', 'Tailwind CSS', 'RestAPIs'],
      // image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      image:institute,
      github: 'https://github.com',
      live: 'https://school-web-delta.vercel.app/',
      featured: false,
    },
   
    {
      title: 'Cafe and Restaurant Websites',
      description: 'A visually appealing website built for a modern cafe, featuring an interactive menu, category filtering and smooth navigation.',
      technologies: ['React', 'Supabase', 'Tailwind CSS'],
      // image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      image:restaurant,
      github: 'https://github.com',
      live: 'https://dawat-e-kuldeep.vercel.app/',
      featured: true,
    },
    {
      title: 'School/Institute Management Software',
      description: 'Modern blogging platform with markdown support, comments, and social sharing features.',
      technologies: ['React', 'Nodejs', 'RestAPIs', 'Zustand', 'Axios', 'JWT', 'Multer','bcryptjs'],
      image: instituteSoftware,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Social Networking App',
      description: 'Analytics dashboard for tracking social media metrics and engagement across platforms.',
      technologies: ['React.js', 'NewsAPI', 'TailwindCSS', 'Lucide'],
      // image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      image:socialsite,
      github: 'https://github.com',
      live: 'https://i-talk-social-networking-app.vercel.app/',
      featured: true,
    },
   
  ];

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4 transition-colors duration-300`}>Projects & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-4"></div>
          <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            A collection of my recent work and accomplishments in web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${isDark ? 'bg-slate-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="relative overflow-hidden h-48">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Award size={14} />
                    Featured
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white group-hover:text-teal-400' : 'text-slate-900 group-hover:text-teal-600'} mb-2 transition-colors duration-300`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} mb-4 text-sm leading-relaxed transition-colors duration-300`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${isDark ? 'bg-slate-600 text-teal-300' : 'bg-teal-50 text-teal-600'} rounded-full text-xs font-medium transition-colors duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-slate-700 hover:text-teal-600'} transition-colors font-medium`}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${isDark ? 'text-gray-400 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors font-medium`}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
