import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import img from '../img/dp.jpg'

export default function Hero() {
  const { isDark } = useTheme();

  return (
    // <section id="home" className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-white to-emerald-50'} pt-16 transition-colors duration-300`}>
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    //     <div className="text-center">
    //       <div className="mb-8">
    //         <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
    //           WD
    //         </div>
    //       </div>

    //       <h1 className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4 transition-colors duration-300`}>
    //         Hi, I'm a <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Web Developer</span>
    //       </h1>

    //       <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-400' : 'text-slate-600'} mb-8 max-w-3xl mx-auto transition-colors duration-300`}>
    //         BTech Graduate from NSUT, Delhi | Building innovative web solutions with modern technologies
    //       </p>

    //       <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-slate-600'} mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300`}>
    //         Passionate about creating scalable, user-friendly applications.
    //         I transform ideas into reality through clean code and thoughtful design.
    //       </p>

    //       <div className="flex justify-center gap-4 mb-12 flex-wrap">
    //         <a
    //           href="#contact"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    //           }}
    //           className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    //         >
    //           Get In Touch
    //         </a>
    //         <button className={`px-8 py-3 border-2 ${isDark ? 'border-teal-600 text-teal-400 hover:bg-teal-600/10' : 'border-teal-600 text-teal-600 hover:bg-teal-50'} rounded-lg font-medium transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2`}>
    //           <Download size={20} />
    //           Download CV
    //         </button>
    //       </div>

    //       <div className="flex justify-center gap-6">
    //         <a
    //           href="https://github.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={`w-12 h-12 ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-teal-600 hover:text-white' : 'bg-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white'} rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
    //         >
    //           <Github size={24} />
    //         </a>
    //         <a
    //           href="https://linkedin.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={`w-12 h-12 ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-teal-600 hover:text-white' : 'bg-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white'} rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
    //         >
    //           <Linkedin size={24} />
    //         </a>
    //         <a
    //           href="mailto:your.email@example.com"
    //           className={`w-12 h-12 ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-teal-600 hover:text-white' : 'bg-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white'} rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
    //         >
    //           <Mail size={24} />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>






<section
  id="home"
  className={`min-h-screen flex items-center justify-center ${
    isDark
      ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      : "bg-gradient-to-br from-slate-50 via-white to-emerald-50"
  } pt-16 transition-colors duration-300`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div className="text-center">

      {/* Profile Image */}
      <div className="mb-8">
        <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full p-[3px] sm:p-[4px] shadow-lg">
          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full overflow-hidden flex items-center justify-center">
            <img className="rounded-full w-full h-full object-cover" src={img} alt="" />
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1
        className={`text-3xl sm:text-4xl md:text-6xl font-bold ${
          isDark ? "text-white" : "text-slate-900"
        } mb-4 transition-colors duration-300`}
      >
        Hi, My name is{" "}
        <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Aayush Kumar
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-lg sm:text-xl md:text-2xl ${
          isDark ? "text-gray-400" : "text-slate-600"
        } mb-6 sm:mb-8 max-w-3xl mx-auto transition-colors duration-300`}
      >
        BTech Graduate from NSUT, Delhi | Building innovative web solutions with modern technologies
      </p>

      {/* Description */}
      <p
        className={`text-base sm:text-lg ${
          isDark ? "text-gray-400" : "text-slate-600"
        } mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 px-2`}
      >
        Passionate about creating scalable, user-friendly applications.
        I transform ideas into reality through clean code and thoughtful design.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap px-3">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
        >
          Get In Touch
        </a>

        {/* <button
          className={`px-6 py-2 sm:px-8 sm:py-3 border-2 ${
            isDark
              ? "border-teal-600 text-teal-400 hover:bg-teal-600/10"
              : "border-teal-600 text-teal-600 hover:bg-teal-50"
          } rounded-lg font-medium transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base`}
        >
          <Download size={18} className="sm:w-5 sm:h-5" />
          Download CV
        </button> */}


      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 sm:gap-6">
        <a
          href="https://github.com/aayushk18"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 sm:w-12 sm:h-12 ${
            isDark
              ? "bg-slate-700 text-gray-300 hover:bg-teal-600 hover:text-white"
              : "bg-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white"
          } rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
        >
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/aayush-kumar-8904a0269/"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 sm:w-12 sm:h-12 ${
            isDark
              ? "bg-slate-700 text-gray-300 hover:bg-teal-600 hover:text-white"
              : "bg-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white"
          } rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
        >
          <Linkedin size={20} className="sm:w-6 sm:h-6" />
        </a>

        <a
          href="mailto:kumaraayush1807@gmail.com"
          className={`w-10 h-10 sm:w-12 sm:h-12 ${
            isDark
              ? "bg-slate-700 text-gray-300 hover:bg-teal-600 hover:text-white"
              : "bg-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white"
          } rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
        >
          <Mail size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  </div>
</section>





  );
}
