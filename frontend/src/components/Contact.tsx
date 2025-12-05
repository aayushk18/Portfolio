import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
// import { useState, FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kumaraayush1807@gmail.com',
      href: 'mailto:kumaraayush1807@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98106 35268',
      href: 'tel:+919810635268',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghaziabad, UP',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aayushk18', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aayush-kumar-8904a0269/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aayusshs_', label: 'Twitter' },
  ];

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-white to-emerald-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4 transition-colors duration-300`}>Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-4"></div>
          <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid  gap-12">
          <div>
            <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-xl p-8 mb-8 transition-colors duration-300`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6 transition-colors duration-300`}>Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'} mb-1 transition-colors duration-300`}>{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`${isDark ? 'text-white hover:text-teal-400' : 'text-slate-900 hover:text-teal-600'} font-medium transition-colors duration-300`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`${isDark ? 'text-white' : 'text-slate-900'} font-medium transition-colors duration-300`}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'} transition-colors duration-300`}>
                <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} mb-4 transition-colors duration-300`}>Connect with me on social media:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600' : 'bg-slate-200 text-slate-700 hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600'} rounded-lg flex items-center justify-center hover:text-white transition-all duration-200 hover:scale-110`}
                        title={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-emerald-100 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-xl p-8 transition-colors duration-300`}>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6 transition-colors duration-300`}>Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2 transition-colors duration-300`}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white focus:ring-teal-600' : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600'} focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2 transition-colors duration-300`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white focus:ring-teal-600' : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600'} focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2 transition-colors duration-300`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white focus:ring-teal-600' : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600'} focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'} mb-2 transition-colors duration-300`}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white focus:ring-teal-600' : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-600'} focus:ring-2 focus:border-transparent transition-all duration-200 outline-none resize-none`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div> */}


        </div>
      </div>
    </section>
  );
}
