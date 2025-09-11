import { Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';
import { Facebook } from '@mui/icons-material';

const socialLinks = [
        {
                name: 'LinkedIn',
                displayName: 'LinkedIn',
                subText: '@hha297',
                icon: Linkedin,
                url: 'https://www.linkedin.com/in/hha297/',
                color: '#0A66C2',
                gradient: 'from-[#0A66C2] to-[#0077B5]',
        },
        {
                name: 'GitHub',
                displayName: 'Github',
                subText: '@hha297',
                icon: Github,
                url: 'https://github.com/hha297',
                color: '#ffffff',
                gradient: 'from-[#333] to-[#24292e]',
        },
        {
                name: 'Facebook',
                displayName: 'Facebook',
                subText: '@hha297',
                icon: Facebook,
                url: 'https://www.facebook.com/hha.297/',
                color: '#0A66C2',
                gradient: 'from-[#0A66C2] to-[#0077B5]',
        },
        {
                name: 'Instagram',
                displayName: 'Instagram',
                subText: '@hha297',
                icon: Instagram,
                url: 'https://www.instagram.com/hha.297/',
                color: '#E4405F',
                gradient: 'from-[#833AB4] via-[#E4405F] to-[#FCAF45]',
        },
];

const SocialLinks = () => {
        const [linkedin, github, facebook, instagram] = socialLinks;

        return (
                <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
                                Connect With Me
                        </h3>

                        <div className="flex flex-col gap-4">
                                {/* First Row - LinkedIn & GitHub */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[linkedin, github].map((link) => (
                                                <a
                                                        key={link.name}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
                                                >
                                                        <div
                                                                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`}
                                                        />

                                                        <div className="relative flex items-center justify-center">
                                                                <div
                                                                        className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                                                                        style={{ backgroundColor: link.color }}
                                                                />
                                                                <div className="relative p-2 rounded-lg">
                                                                        <link.icon
                                                                                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                                                                style={{ color: link.color }}
                                                                        />
                                                                </div>
                                                        </div>

                                                        {/* Text Container */}
                                                        <div className="flex flex-col min-w-0">
                                                                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                                                        {link.displayName}
                                                                </span>
                                                                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                                                        {link.subText}
                                                                </span>
                                                        </div>

                                                        <ExternalLink
                                                                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
                                                        />

                                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                                                <div
                                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                                                />
                                                        </div>
                                                </a>
                                        ))}
                                </div>

                                {/* Second Row - Facebook & Instagram */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[facebook, instagram].map((link) => (
                                                <a
                                                        key={link.name}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
                                                >
                                                        <div
                                                                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`}
                                                        />

                                                        <div className="relative flex items-center justify-center">
                                                                <div
                                                                        className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                                                                        style={{ backgroundColor: link.color }}
                                                                />
                                                                <div className="relative p-2 rounded-lg">
                                                                        <link.icon
                                                                                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                                                                style={{ color: link.color }}
                                                                        />
                                                                </div>
                                                        </div>

                                                        {/* Text Container */}
                                                        <div className="flex flex-col min-w-0">
                                                                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                                                        {link.displayName}
                                                                </span>
                                                                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                                                        {link.subText}
                                                                </span>
                                                        </div>

                                                        <ExternalLink
                                                                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
                                                        />

                                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                                                <div
                                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                                                />
                                                        </div>
                                                </a>
                                        ))}
                                </div>
                        </div>
                </div>
        );
};

export default SocialLinks;
