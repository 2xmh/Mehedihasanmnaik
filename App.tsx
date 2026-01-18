
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, BookOpen, Microscope, Award, 
  Mail, Linkedin, Github, MapPin, ExternalLink,
  ChevronRight, Camera, Settings, Users, GraduationCap,
  Facebook, Briefcase, Calendar, CheckCircle, FileText,
  Phone, Globe, UserCheck, ShieldCheck, Fingerprint,
  Cpu, Zap, Thermometer, Box, Heart, Map, ShieldAlert,
  Flag, Send, Trophy, Star
} from 'lucide-react';
import { 
  NAVIGATION_LINKS, 
  CORE_SUBJECTS, 
  LAB_EXPERIENCES, 
  RESEARCH_INTERESTS,
  TECHNICAL_SKILLS,
  DETAILED_EXPERIENCES,
  PUBLICATIONS,
  EDUCATION_HISTORY,
  CAREER_OBJECTIVE,
  CERTIFICATIONS,
  LANGUAGES,
  REFERENCES,
  PROJECTS,
  VOLUNTEERING_EXPERIENCES,
  AWARDS
} from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/maniklikesbd",
    researchgate: "https://www.researchgate.net/profile/Mehedi-Manik-2",
    linkedin: "https://www.linkedin.com/in/maniklikesbd/",
    orcid: "https://orcid.org/0009-0003-8240-063X",
    email: "mehedihassanmanik@gmail.com",
    phone: "+8801741845221",
    address: "House#36, Road#6, Sector-10, Uttara, Dhaka-1230, Bangladesh"
  };

  const directPhotoUrl = "https://drive.google.com/uc?id=1A-SJd23hu0b4WG14CP6PJ6IXHCzlFrcU";

  const getVolunteeringIcon = (org: string) => {
    const o = org.toLowerCase();
    if (o.includes('google')) return <Map size={18} />;
    if (o.includes('rotaract') || o.includes('volunteer')) return <Heart size={18} />;
    if (o.includes('cyber') || o.includes('scanner')) return <ShieldAlert size={18} />;
    if (o.includes('ambassador')) return <Flag size={18} />;
    return <Users size={18} />;
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
              <span className={`text-xl font-bold tracking-tight text-slate-900`}>Mehedi Hasan Manik</span>
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAVIGATION_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero / About */}
      <header id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
          <div className="w-[600px] h-[600px] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 mb-6 border border-blue-100">
                Mechanical Engineering Student & Researcher
              </span>
              <h1 className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl mb-6 leading-[1.1]">
                Mehedi Hasan <span className="text-blue-600 italic">Manik</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/30 rounded-r-2xl">
                {CAREER_OBJECTIVE}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10 sm:justify-center lg:justify-start">
                <a href={socialLinks.orcid} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-white hover:text-blue-600 transition-all group">
                  <Fingerprint size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-bold">ORCID</span>
                </a>
                <a href={socialLinks.researchgate} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-white hover:text-blue-600 transition-all group">
                  <Microscope size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-bold">ResearchGate</span>
                </a>
                <a href={socialLinks.linkedin} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-white hover:text-blue-600 transition-all group">
                  <Linkedin size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-bold">LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <a href="#experience" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                  Leadership Roles
                </a>
                <a href="#publications" className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-semibold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 transition-all">
                  View Publications
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[360px] p-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                <img 
                  className="w-full h-auto aspect-[3/4] object-cover rounded-2xl transition-all duration-700 hover:scale-105" 
                  src={directPhotoUrl} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/manik/800/1000"; }}
                  alt="Mehedi Hasan Manik" 
                />
                <div className="absolute bottom-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-blue-600 uppercase tracking-tighter shadow-sm">Uttara, Dhaka</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl italic">Professional & Academic Roles</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Leading innovation and coordination across multiple technical societies.</p>
          </div>

          <div className="grid gap-8">
            {DETAILED_EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{exp.company}</h3>
                    <div className="space-y-8">
                      {exp.roles.map((role, rIdx) => (
                        <div key={rIdx} className="relative pl-6 border-l-2 border-slate-100 group-hover:border-blue-100 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <h4 className="text-lg font-bold text-slate-800 italic">{role.title}</h4>
                            <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">{role.duration}</span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Research & Publications</h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-8 space-y-6">
                {PUBLICATIONS.map((pub, idx) => (
                  <div key={idx} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">{pub.year}</span>
                      <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg">{pub.stats}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{pub.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">{pub.authors}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">{pub.journal}</p>
                      <a href={pub.url} target="_blank" className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                ))}
             </div>
             <div className="lg:col-span-4 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm lg:mt-24">
                <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-2">
                  <Microscope className="text-blue-600" /> Interests
                </h3>
                <div className="space-y-4">
                  {RESEARCH_INTERESTS.map((interest, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 text-sm font-semibold text-slate-700 hover:border-blue-200 transition-colors">
                      {interest}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl italic">Honors & Awards</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Recognized for media contribution, integrity, and active involvement.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {AWARDS.map((award, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-amber-50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Trophy size={28} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    {award.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {award.title}
                </h3>
                <p className="text-amber-600 font-bold text-xs uppercase tracking-tight mb-4">{award.issuer}</p>
                <div className="flex gap-3">
                  <div className="shrink-0 pt-1 text-amber-500"><Star size={16} fill="currentColor" /></div>
                  <p className="text-slate-600 text-sm leading-relaxed italic border-l border-slate-200 pl-4">
                    "{award.note}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Community Impact</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Commitment to social service, campus embassy, and public awareness.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOLUNTEERING_EXPERIENCES.map((vol, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    {getVolunteeringIcon(vol.organization)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {vol.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{vol.role}</h3>
                <p className="text-blue-600 font-bold text-xs mb-4 uppercase tracking-tighter">{vol.organization}</p>
                <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-blue-100 pl-4 py-1 flex-grow">
                  "{vol.note}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Let's Connect</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed italic border-l-4 border-blue-600 pl-8">
                Available for research collaborations and professional consultations.
              </p>
              <div className="space-y-4 text-sm font-medium">
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-400"><Phone size={20}/></div>
                    {socialLinks.phone}
                 </div>
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-400"><Mail size={20}/></div>
                    {socialLinks.email}
                 </div>
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-400"><MapPin size={20}/></div>
                    {socialLinks.address}
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href={socialLinks.linkedin} target="_blank" className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-slate-900 rounded-xl group-hover:rotate-12 transition-transform"><Linkedin size={24} /></div>
                  <div><p className="text-xs font-black uppercase opacity-60">LinkedIn</p><p className="font-bold">maniklikesbd</p></div>
                </div>
                <ExternalLink size={18} className="opacity-40" />
              </a>
              <a href={socialLinks.orcid} target="_blank" className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-slate-900 rounded-xl group-hover:rotate-12 transition-transform"><Fingerprint size={24} /></div>
                  <div><p className="text-xs font-black uppercase opacity-60">ORCID</p><p className="font-bold">0009-0003-8240-063X</p></div>
                </div>
                <ExternalLink size={18} className="opacity-40" />
              </a>
              <a href={socialLinks.facebook} target="_blank" className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-slate-900 rounded-xl group-hover:rotate-12 transition-transform"><Facebook size={24} /></div>
                  <div><p className="text-xs font-black uppercase opacity-60">Facebook</p><p className="font-bold">maniklikesbd</p></div>
                </div>
                <ExternalLink size={18} className="opacity-40" />
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 text-center opacity-40">
             <p className="text-[10px] font-black uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Mehedi Hasan Manik • Mechanical Engineering Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
