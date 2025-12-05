// import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDark ? 'bg-slate-900' : 'bg-slate-800'} text-white py-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-300'} text-center flex items-center gap-2 transition-colors duration-300`}>
            Developed by Aayush kumar
          </p>
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'} text-sm transition-colors duration-300`}>
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
