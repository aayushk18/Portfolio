import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();

  const experiences = [
    {
      role: 'Maths Tutor',
      company: 'Self-Employed',
      period: '2020',
      description: 'Provided tuition to Class 9 and 10 students, focusing on strengthening core mathematical concepts and improving academic performance through personalized teaching methods.',
      achievements: [
        'Specialized in Number Systems, Algebra, Coordinate Geometry, Geometry (Lines & Angles, Triangles, Circles, etc), and Mensuration',
        'Helped students improve their understanding and performance through structured lessons and regular practice tests',
        'Developed simplified explanations and step-by-step problem-solving strategies for difficult topics',
      ],
    },
    // {
    //   role: 'Mechanical Intern',
    //   company: 'Modern Transformers Pvt Ltd',
    //   period: '2024',
    //   description: 'Worked in a transformer manufacturing environment, assisting the engineering team in production processes, quality checks, and technical documentation.',
    //   achievements: [
    //     'Supported the assembly and testing of distribution and power transformers',
    //     'Assisted in quality inspection, material handling, and workflow optimization',
    //     'Prepared technical reports and helped maintain manufacturing records',
    //   ],
    // },
    {
      role: 'MERN Stack Developer',
      company: 'Aas Educom Pvt Ltd',
      period: 'May 2025',
      description: 'Built complete MERN stack applications ranging from institute management systems to fully responsive websites. Handled both frontend and backend development with focus on performance, security, and clean architecture.',
      achievements: [
        'Developed a full Institute Management System with modules for attendance, students, teachers, classes, and admin dashboards',
        'Implemented secure REST APIs, JWT authentication, and role-based access control in Node.js/Express',
        'Designed optimized MongoDB schemas for scalable data handling and faster query performance',
      ],
     
    },

    {
      role: 'AI Video Creator',
      company: 'Tirth Electronics Security Solutions',
      period: 'Nov 2025',
      description: 'Created AI-driven promotional, product, and security-focused advertisement videos using Google Veo 3, VN Video Editor, Canva, and other AI-generation tools. Delivered professional short-form ads tailored for social media marketing and brand campaigns.',
      link: 'https://www.instagram.com/tess_gpstracker/',    // replace with actual link
      linkText: 'View Reels & Videos',
      achievements: [
      'Produced 10+ high-quality AI-based ads used on Instagram and YouTube',
      'Created engaging ad visuals, designed animated brand elements, and edited complete advertisement videos with transitions, captions, effects, and polished branding',
      'Videos and reels are available on Instagram & YouTube – can be viewed by clicking the link above',
      ],
    },
   
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-slate-700' : 'bg-slate-100'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4 transition-colors duration-300`}>Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 to-emerald-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2 w-full`}
              >
                <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ml-8 md:ml-0`}>
                  <div className="absolute -left-3 md:-left-3 top-6 w-6 h-6 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full border-4 border-current"></div>

                  <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-slate-600'} mb-2 transition-colors duration-300`}>
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-white" size={20} />
                    </div>
                    <div>
                      {/* <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} transition-colors duration-300`}>{exp.role}   {exp.role?<a className='text-sm font-medium bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent' href={exp.link}>{exp.linkText}</a>:''}</h3> */}
                      <h3
  className={`text-xl font-bold flex items-center gap-2 ${
    isDark ? "text-white" : "text-slate-900"
  } transition-colors duration-300`}
>
  {exp.role}

  {exp.role ? (
    <div  className="
    text-sm font-semibold
    bg-gradient-to-r from-blue-400 to-blue-600
    bg-clip-text text-transparent
    flex items-center gap-1
    hover:from-blue-300 hover:to-blue-500
    transition-all duration-200
    underline-offset-2 hover:underline
  " >
       <ExternalLink className="w-3 h-3  " />
       <a href={exp.link}
      target="_blank"
    
     >
         {exp.linkText}
       </a>
     
     
    </div>
  ) : (
    ""
  )}
</h3>
                      <p className="font-medium bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">{exp.company}</p>
                    </div>
                  </div>

                  <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} mb-4 transition-colors duration-300`}>{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} text-sm transition-colors duration-300`}>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
