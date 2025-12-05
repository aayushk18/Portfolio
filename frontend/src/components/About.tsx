import { GraduationCap, Award, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4 transition-colors duration-300`}>About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6 transition-colors duration-300`}>
              Passionate Developer with a Vision
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} leading-relaxed mb-6 transition-colors duration-300`}>
              I'm a web developer with a strong foundation in computer science, having graduated with a BTech degree from Netaji Subhas University of Technology (NSUT), Delhi.
            </p>
            <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} leading-relaxed mb-6 transition-colors duration-300`}>
              My journey in tech has been driven by curiosity and a desire to solve real-world problems through innovative solutions. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>
            <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} leading-relaxed transition-colors duration-300`}>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to stay ahead in this ever-evolving field.
            </p>
          </div>

          <div className="space-y-6">
            <div className={`${isDark ? 'bg-slate-700' : 'bg-gradient-to-br from-slate-50 to-emerald-50'} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2 transition-colors duration-300`}>Education</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-slate-700'} font-medium transition-colors duration-300`}>Bachelor of Technology (BTech)</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} transition-colors duration-300`}>Netaji Subhas University of Technology (NSUT), Delhi</p>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-slate-700' : 'bg-gradient-to-br from-slate-50 to-emerald-50'} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2 transition-colors duration-300`}>Goals</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} transition-colors duration-300`}>
                    To become a full-stack expert, contribute to impactful projects, and mentor aspiring developers while continuously pushing the boundaries of web technology.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-slate-700' : 'bg-gradient-to-br from-slate-50 to-emerald-50'} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2 transition-colors duration-300`}>Achievements</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} transition-colors duration-300`}>
                    Successfully delivered multiple web applications, contributed to open-source projects, and consistently exceeded project expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
