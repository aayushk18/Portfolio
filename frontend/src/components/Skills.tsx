import { Code, Database, Layout, Server, Wrench, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express', 'REST APIs', 'Python', 'Java'],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
    },
    {
      title: 'DevOps & Deployment',
      icon: Globe,
      skills: ['Git',  'Vercel', 'Netlify', 'CI/CD'],
    },
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['VS Code', 'Figma', 'Testing', 'VN', 'Veo','Canva'],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-slate-700' : 'bg-slate-100'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4 transition-colors duration-300`}>Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-4"></div>
          <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} transition-colors duration-300`}>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-teal-600/20 hover:text-teal-300' : 'bg-slate-50 text-slate-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50 hover:text-teal-600'} rounded-lg text-sm font-medium transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className={`mt-16 bg-gradient-to-br ${isDark ? 'from-slate-900 to-slate-800' : 'from-teal-600 to-emerald-600'} rounded-2xl p-8 ${isDark ? 'text-gray-100' : 'text-white'} shadow-xl transition-colors duration-300`}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className={isDark ? 'text-gray-400' : 'text-emerald-100'}>Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className={isDark ? 'text-gray-400' : 'text-emerald-100'}>Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className={isDark ? 'text-gray-400' : 'text-emerald-100'}>Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className={isDark ? 'text-gray-400' : 'text-emerald-100'}>Client Satisfaction</div>
            </div>
          </div>
        </div> */}


      </div>
    </section>
  );
}
