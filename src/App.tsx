/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Wind,
  Moon,
  Zap,
  Activity,
  Heart,
  Droplets,
  ChevronDown,
  Info,
  Instagram
} from 'lucide-react';
import { translations, Language } from './translations';

import Gallery1 from './assets/images/regenerated_image_1778939241565.png';
import Gallery2 from './assets/images/regenerated_image_1778939273697.png';
import Gallery3 from './assets/images/regenerated_image_1778940104622.png';
import Gallery4 from './assets/images/regenerated_image_1778944756929.jpg';
import Gallery5 from './assets/images/regenerated_image_1778944758586.jpg';
import Gallery6 from './assets/images/regenerated_image_1778939273169.png';
import AboutImage from './assets/images/regenerated_image_1778941470110.png';
import Gallery120 from './assets/images/regenerated_image_1778943907732.png';
import FootMassageImg from './assets/images/regenerated_image_1778943911153.png';

// --- Helpers ---

const getMeccaDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Riyadh' }); // YYYY-MM-DD
  const time = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Riyadh', hour12: false, hour: '2-digit', minute: '2-digit' }); // HH:mm
  return { date, time };
};

// --- Components ---

const Navbar = ({ lang, setLang, t, scrollToSection }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages = [
    { id: 'en', name: 'English', flag: '🇬🇧' },
    { id: 'ar', name: 'العربية', flag: '🇸🇦' },
    { id: 'id', name: 'Bahasa', flag: '🇮🇩' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
            <span className="serif font-bold text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className={`serif font-bold text-lg tracking-wider transition-colors ${isScrolled ? 'text-maroon' : 'text-white'}`}>
              MADINAH MASSAGE
            </span>
            <span className={`text-[9px] uppercase tracking-[0.2em] font-semibold ${isScrolled ? 'text-gold' : 'text-gold-light'}`}>
              Luxury Wellness Service
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-gold border-b-2 border-transparent hover:border-gold pb-1 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 ml-4">
            <div className={`flex items-center gap-2 border rounded-full px-3 py-1 ${isScrolled ? 'border-slate-200 bg-white/50' : 'border-white/20 bg-white/10'}`}>
              {languages.map((l, i) => (
                <span key={l.id} className="flex items-center gap-2">
                   <button 
                    onClick={() => setLang(l.id as Language)}
                    className={`text-[10px] font-bold uppercase transition-colors ${lang === l.id ? 'text-gold' : (isScrolled ? 'text-slate-400 hover:text-slate-800' : 'text-white/50 hover:text-white')}`}
                  >
                    {l.id}
                  </button>
                  {i < languages.length - 1 && <span className="text-[10px] text-slate-300">|</span>}
                </span>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-maroon text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:gold-gradient hover:shadow-xl transition-all shadow-lg"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-slate-900" /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream shadow-2xl lg:hidden flex flex-col p-8 gap-5 border-t border-slate-100"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-maroon transition-colors serif tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-5 pt-6 border-t border-slate-200">
              <div className="flex gap-3">
                {languages.map(l => (
                  <button 
                    key={l.id} 
                    onClick={() => { setLang(l.id as Language); setIsMobileMenuOpen(false); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest ${lang === l.id ? 'bg-maroon text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => { scrollToSection('booking'); setIsMobileMenuOpen(false); }}
                className="gold-gradient text-white w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-lg"
              >
                {t.nav.bookNow}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ t, scrollToSection }: any) => {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Gallery1})` }}
      ></div>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster={Gallery1}
      >
        <source src="https://video.wixstatic.com/video/11062b_a766465451994af59325946808778f65/1080p/mp4/file.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 relative z-10 text-left max-w-7xl">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: 'easeOut' }}
           className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold-light uppercase tracking-[0.4em] text-[11px] font-bold">
              Sacred Serenity
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl text-white font-bold mb-8 leading-[1.1] serif">
            {t.hero.headline.split(' Near ').map((part: string, i: number) => (
              <span key={part} className="block">
                {part}{i === 0 && ' Near'}
              </span>
            ))}
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-xl">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => scrollToSection('booking')}
              className="group gold-gradient text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:brightness-110 transition-all duration-500 shadow-2xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.503-2.961-2.617-.087-.114-.708-.941-.708-1.792s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.105.007.246-.04.384.295.144.346.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.289.072.398-.058c.109-.13.463-.535.586-.717.123-.181.246-.152.412-.094.167.058 1.055.498 1.236.587s.304.13.348.21c.043.079.043.462-.101.867z" />
              </svg>
              {t.hero.bookViaWhatsApp}
            </button>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="p-4 glass rounded-2xl flex items-center gap-6 text-white">
                <div className="text-center border-r border-white/20 pr-6">
                  <div className="serif text-2xl text-gold-light font-bold">100%</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold opacity-60">Privacy</div>
                </div>
                <div className="text-center border-r border-white/20 pr-6">
                  <div className="serif text-2xl text-gold-light font-bold">24/7</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold opacity-60">Available</div>
                </div>
                <div className="text-center">
                  <div className="serif text-2xl text-gold-light font-bold">5.0</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold opacity-60">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-beige z-40 hidden md:block"></div>
      <div className="absolute inset-0 pointer-events-none border-[1px] border-gold/20 z-40 m-4 hidden md:block"></div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-16 right-16 text-white/50 cursor-pointer hidden md:flex items-center gap-4"
        onClick={() => scrollToSection('services')}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = ({ t, scrollToSection, setSelectedService }: any) => {
  const serviceList = [
    { 
      id: 'fullBody60', 
      title: t.services.items.fullBody60, 
      price: '150', 
      img: Gallery1,
      features: ['Deep Relaxation', 'Oil Massage', 'Full Body Focus']
    },
    { 
      id: 'fullBody90', 
      title: t.services.items.fullBody90, 
      price: '220', 
      img: Gallery3,
      features: ['Extended Stress Relief', 'Full Muscle Recovery', 'Premium Oils']
    },
    { 
      id: 'fullBody120', 
      title: t.services.items.fullBody120, 
      price: '290', 
      img: Gallery120,
      features: ['Ultimate Rejuvenation', 'Total Body Care', 'Sleep Better Focus']
    },
    { 
      id: 'footMassage60', 
      title: t.services.items.footMassage60, 
      price: '150', 
      img: FootMassageImg,
      features: ['Foot Reflexology', 'Warm Towel', 'Herbal Water Soak']
    },
  ];

  const handleBookNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('booking');
  };

  return (
    <section id="services" className="py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 islamic-pattern opacity-5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">The Collection</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-maroon serif leading-tight">{t.services.title}</h2>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-slate-500 text-sm max-w-sm font-medium tracking-wide leading-relaxed"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 transition-opacity group-hover:opacity-0"></div>
                <div className="absolute top-6 left-6 gold-gradient text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {service.price} {t.services.price}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="serif text-xl font-bold text-slate-800 leading-tight group-hover:text-maroon transition-colors">{service.title}</h3>
                </div>
                <ul className="space-y-3 mb-10">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-500 text-[11px] font-medium uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/40"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleBookNow(service.title)}
                  className="w-full py-4 bg-beige text-gold rounded-xl font-bold text-[10px] uppercase tracking-widest hover:gold-gradient hover:text-white transition-all duration-500"
                >
                  {t.nav.bookNow}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = ({ t }: any) => {
  const benefitList = [
    { icon: <Wind className="w-6 h-6" />, title: t.benefits.items.stressRelief },
    { icon: <Moon className="w-6 h-6" />, title: t.benefits.items.sleep },
    { icon: <Zap className="w-6 h-6" />, title: t.benefits.items.muscle },
    { icon: <Droplets className="w-6 h-6" />, title: t.benefits.items.umrah },
    { icon: <Activity className="w-6 h-6" />, title: t.benefits.items.fatigue },
    { icon: <Heart className="w-6 h-6" />, title: t.benefits.items.circulation },
  ];

  return (
    <section className="py-24 bg-maroon text-white overflow-hidden relative">
      <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Why Madinah Massage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold serif leading-tight">{t.benefits.title}</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {benefitList.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6 group cursor-default"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:gold-gradient group-hover:text-white transition-all duration-500">
                {b.icon}
              </div>
              <p className="font-bold text-[11px] uppercase tracking-[0.15em] text-white/90 leading-snug">{b.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = ({ t, selectedService, scrollToSection, lang }: any) => {
  const meccaTime = getMeccaDateTime();
  const [formData, setFormData] = useState({
    name: '',
    hotel: '',
    room: '',
    service: t.services.items.fullBody90,
    gender: 'Male',
    date: meccaTime.date,
    time: meccaTime.time,
    notes: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const genderLabel = formData.gender === 'Male' ? t.booking.male : t.booking.female;
    const message = `${t.booking.whatsappMessagePrefix}
    
${t.booking.fullName}: ${formData.name}
${t.booking.gender}: ${genderLabel}
${t.booking.hotelName}: ${formData.hotel}
${t.booking.roomNumber}: ${formData.room}
${t.booking.serviceType}: ${formData.service}
${t.booking.bookingDate}: ${formData.date}
${t.booking.preferredTime}: ${formData.time}
${t.booking.additionalNotes}: ${formData.notes}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282141562370?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-beige/50 relative overflow-hidden">
      <div className="absolute top-12 right-12 opacity-5 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100">
           <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39Z" fill="#5D101D"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-gold"></div>
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Reservations</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 serif text-maroon leading-tight">
              {t.booking.title}
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-6 lg:mb-12">
              {t.booking.subtitle}
            </p>
            
            <div className="space-y-8 hidden lg:block">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-maroon/10 flex items-center justify-center text-maroon">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Direct Support</p>
                   <p className="font-bold text-slate-800 tracking-wide">+62 821-4156-2370</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-14 rounded-[40px] shadow-2xl border border-slate-100 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">{t.booking.fullName}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-slate-800 focus:outline-none focus:border-gold transition-all shadow-sm"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">{t.booking.gender}</label>
                    <div className="flex gap-4">
                      {['Male', 'Female'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setFormData({ ...formData, gender: g })}
                          className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                            formData.gender === g 
                              ? 'gold-gradient text-white shadow-md' 
                              : 'bg-slate-50 border border-slate-100 text-slate-400 hover:border-gold/30'
                          }`}
                        >
                          {g === 'Male' ? t.booking.male : t.booking.female}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">{t.booking.hotelName}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-slate-800 focus:outline-none focus:border-gold transition-all shadow-sm"
                      placeholder="Hotel Name"
                      value={formData.hotel}
                      onChange={e => setFormData({...formData, hotel: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">{t.booking.roomNumber}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-slate-800 focus:outline-none focus:border-gold transition-all shadow-sm"
                      placeholder="Room No"
                      value={formData.room}
                      onChange={e => setFormData({...formData, room: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">{t.booking.serviceType}</label>
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <select 
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-slate-800 focus:outline-none focus:border-gold transition-all shadow-sm appearance-none"
                        value={formData.service}
                        onChange={e => setFormData({...formData, service: e.target.value})}
                      >
                        <option>{t.services.items.fullBody60}</option>
                        <option>{t.services.items.fullBody90}</option>
                        <option>{t.services.items.fullBody120}</option>
                        <option>{t.services.items.footMassage60}</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => scrollToSection('services')}
                      className="px-4 bg-beige text-gold rounded-xl border border-gold/20 hover:bg-gold/10 transition-colors flex items-center justify-center shrink-0 shadow-sm group"
                      title={t.nav.services}
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">
                      {t.booking.bookingDate} 
                      <span className="text-gold ml-1">
                        ({lang === 'ar' ? 'توقيت مكة' : (lang === 'id' ? 'Waktu Makkah' : 'Mecca Time')})
                      </span>
                    </label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-slate-800 focus:outline-none shadow-sm"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">
                      {t.booking.preferredTime}
                      <span className="text-gold ml-1">
                        ({lang === 'ar' ? 'توقيت مكة' : (lang === 'id' ? 'Waktu Makkah' : 'Mecca Time')})
                      </span>
                    </label>
                    <input 
                      required
                      type="time" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-slate-800 focus:outline-none shadow-sm"
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">{t.booking.additionalNotes}</label>
                  <textarea 
                    rows={2}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-3 text-slate-800 focus:outline-none focus:border-gold transition-all shadow-sm resize-none"
                    placeholder="..."
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl gold-gradient text-white font-bold text-xs uppercase tracking-[0.25em] hover:brightness-105 transition-all shadow-xl mt-4"
                >
                  {t.booking.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

const Gallery = () => {
  const images = [
    Gallery1,
    Gallery2,
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop',
    Gallery4,
    Gallery5,
    Gallery6,
  ];

  return (
    <section id="gallery" className="py-32 bg-white">
       <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">The Ambiance</span>
              <div className="h-[1px] w-8 bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-maroon serif">Visual Gallery</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-[32px] relative break-inside-avoid shadow-lg"
            >
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = ({ t, lang }: any) => {
  const reviews = [
    { name: 'Ahmad Faisal', country: 'Indonesia', text: 'Sangat recommended buat jamaah haji/umroh yang pegal-pegal. Terapisnya sopan dan sangat ahli. Langsung datang ke kamar hotel!', stars: 5 },
    { name: 'Sarah Malik', country: 'Malaysia', text: 'The best mobile massage in Madinah. Very professional and convenient. I could sleep so much better after the treatment.', stars: 5 },
    { name: 'Ibrahim Khaleb', country: 'Saudi Arabia', text: 'خدمة ممتازة واحترافية عالية. المعالج وصل في الموعد وكان الترتيب رائعاً.', stars: 5 },
    { name: 'Nur Azura', country: 'Singapore', text: 'Highly professional. They bring everything including clean towels and premium oils. Perfect after a long flight.', stars: 5 },
    { name: 'Siti Rahma', country: 'Indonesia', text: 'Pijatannya mantap sekali. Terapis ramah dan sangat membantu pemulihan kaki yang bengkak setelah tawaf.', stars: 5 },
  ];

  return (
    <section id="reviews" className="py-32 bg-beige overflow-hidden relative">
      <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Client Testimonials</span>
              <div className="h-[1px] w-8 bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-maroon serif">{t.nav.reviews}</h2>
        </div>

        <div className="flex gap-10 overflow-x-auto pb-16 snap-x no-scrollbar">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              className="min-w-[340px] md:min-w-[450px] p-12 bg-white rounded-[48px] snap-center shadow-xl border border-slate-50 relative"
            >
              <div className="absolute top-10 right-10 opacity-20">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="#C5A059"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 7.55228 13.017 7V4C13.017 3.44772 13.4647 3 14.017 3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H2.01697C1.46468 8 1.01697 7.55228 1.01697 7V4C1.01697 3.44772 1.46468 3 2.01697 3H7.01697C8.67382 3 10.017 4.34315 10.017 6V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" /></svg>
              </div>
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 gold-gradient text-white rounded-full flex items-center justify-center font-bold text-2xl serif shadow-lg">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg serif">{r.name}</h4>
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{r.country}</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light italic">"{r.text}"</p>
              <div className="flex gap-1.5">
                {Array.from({length: r.stars}).map((_, idx) => <Star key={idx} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-12 bg-white/50 backdrop-blur-sm p-12 rounded-[40px] border border-white/50">
          {[
            { label: lang === 'id' ? 'Jamaah Terlayani' : 'Happy Clients', value: '700+' },
            { label: 'Daily Treatments', value: '25+' },
            { label: 'Review Rating', value: '5.0/5' },
            { label: 'Expert Staff', value: '18+' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-bold text-maroon mb-2 serif">{stat.value}</h3>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ t, scrollToSection, lang }: any) => {
  return (
    <section id="about" className="py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative pr-12 pb-12"
            >
              <div className="absolute top-0 right-0 w-2/3 h-2/3 gold-gradient rounded-[60px] translate-x-8 translate-y-8"></div>
              <img 
                src={AboutImage} 
                alt="Madinah Massage Atmosphere" 
                className="rounded-[60px] relative z-10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-12 left-12 p-10 glass rounded-[40px] z-20 shadow-2xl backdrop-blur-3xl hidden md:block border border-white/40">
                <span className="serif text-6xl font-bold block text-maroon mb-2">700+</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">{lang === 'id' ? 'Jamaah Terlayani' : (lang === 'ar' ? 'معتمر مخدوم' : 'Pilgrims Served')}</span>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-gold"></div>
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">The Heritage</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-10 serif text-maroon leading-tight">{t.about.title}</h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-12 font-light italic border-l-4 border-gold/20 pl-8">
                {t.about.content}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {t.about.highlights.map((h: string) => (
                  <div key={h} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-700 font-bold text-[11px] uppercase tracking-wider leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-16 flex items-center gap-4 text-maroon hover:text-gold transition-colors font-bold uppercase tracking-[0.3em] text-xs"
              >
                Learn more about our standards
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ t }: any) => {
  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="container mx-auto px-8">
        <div className="bg-beige rounded-[60px] shadow-sm overflow-hidden border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-gold"></div>
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-10 serif text-maroon leading-tight">{t.contact.title}</h2>
              <p className="text-slate-500 mb-16 text-lg font-light">{t.contact.info}</p>
              
              <div className="space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-maroon shrink-0 shadow-lg group-hover:gold-gradient group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 uppercase tracking-widest text-[11px]">{t.contact.location}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Central Madinah & Hotels near Masjid Nabawi. We come to you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-maroon shrink-0 shadow-lg group-hover:gold-gradient group-hover:text-white transition-all duration-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 uppercase tracking-widest text-[11px]">{t.contact.hours}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">24 Hours / 7 Days. Global Concierge Standards.</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex flex-wrap gap-6">
                <button className="gold-gradient text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-4 hover:shadow-2xl transition-all" onClick={() => window.open('https://wa.me/6282141562370', '_blank')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.503-2.961-2.617-.087-.114-.708-.941-.708-1.792s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.105.007.246-.04.384.295.144.346.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.289.072.398-.058c.109-.13.463-.535.586-.717.123-.181.246-.152.412-.094.167.058 1.055.498 1.236.587s.304.13.348.21c.043.079.043.462-.101.867z" />
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-[500px] lg:h-auto min-h-[600px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14502.99221191398!2d39.60533038676571!3d24.47185012543977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe51199320e3%3A0x6bba843fdf91557!2sAl%20Masjid%20an%20Nabawi!5e0!3m2!1sen!2ssa!4v1715856422341!5m2!1sen!2ssa" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 border-none"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 m-8 rounded-[40px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t, scrollToSection }: any) => {
  return (
    <footer className="bg-maroon text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="serif font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold tracking-wider serif text-gold uppercase">MADINAH MASSAGE</span>
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-10 text-sm">
              Crafting premium wellness experiences for the global pilgrim in the Heart of Madinah. Redefining mobile spa services with luxury standards.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="https://wa.me/6282141562370" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-500 text-gold shadow-lg group">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.733 5.479 2.016 7.78L0 32l8.369-2.195c2.253 1.22 4.821 1.921 7.631 1.921c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.311 22.181c-.34.957-1.705 1.748-2.613 1.861-.624.08-1.44.144-2.316-.144-.544-.176-1.228-.404-2.108-.78-3.748-1.552-6.189-5.325-6.376-5.576-.184-.251-1.504-2.004-1.504-3.824 0-1.82 1.052-2.716 1.34-3.004.288-.288.752-.36 1.136-.36.144 0 .272.008.384.016.328.016.488.024.704.536.264.632.904 2.192.984 2.352.08.16.136.344.032.552-.104.208-.16.336-.32.512-.16.176-.344.4-.488.536-.168.16-.344.336-.144.68.2.336.888 1.464 1.904 2.368 1.312 1.168 2.416 1.528 2.76 1.696.344.168.544.144.752-.08.208-.224.888-1.032 1.128-1.392.24-.36.48-.304.808-.184.328.12 2.088 1.032 2.448 1.216.352.184.584.272.672.424.088.168.088.952-.256 1.904z" />
                </svg>
              </a>
              <a href="tel:+6282141562370" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-500 text-gold shadow-lg">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:gold-gradient hover:text-white transition-all duration-500 text-gold shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 text-gold shadow-lg">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.11-2.44v6.4c.02 2.76-1.11 5.43-3.13 7.31-2.13 2.01-5.26 2.75-8.03 1.83-2.92-.91-5.18-3.59-5.74-6.59-.62-3.16.51-6.55 2.89-8.73 2.05-1.89 4.96-2.58 7.64-1.87V8.12c-1.39-.43-2.99-.25-4.22.5-.94.57-1.63 1.5-1.92 2.57-.45 1.54-.03 3.32.96 4.54 1.12 1.34 2.97 1.95 4.63 1.62 1.44-.24 2.68-1.22 3.18-2.58.26-.64.36-1.34.33-2.03V0z"/>
                </svg>
              </a>
              <button onClick={() => scrollToSection('home')} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-500 text-gold shadow-lg">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-10 serif text-gold uppercase tracking-[0.2em]">{t.footer.quickLinks}</h4>
            <ul className="space-y-6">
              {[t.nav.home, t.nav.services, t.nav.about, t.nav.gallery].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-10 serif text-gold uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-6">
              {['Full Body Therapy', 'Foot Reflexology', 'Umrah Recovery', 'Deep Tissue'].map(s => (
                <li key={s} className="text-white/60 text-sm uppercase tracking-widest font-medium">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-10 serif text-gold uppercase tracking-[0.2em]">Support</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">+62 821 4156 2370</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">info@madinahmassage.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">Central Madinah, Kingdom of Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:row items-center justify-between gap-10 text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
          <p>© 2024 MADINAH MASSAGE. {t.footer.rights}</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [showToast, setShowToast] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    setShowToast(true);
    scrollToSection('booking');
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar lang={lang} setLang={setLang} t={t} scrollToSection={scrollToSection} />
      
      <main>
        <Hero t={t} scrollToSection={scrollToSection} />
        <Services t={t} scrollToSection={scrollToSection} setSelectedService={setSelectedService} />
        <Benefits t={t} />
        <About t={t} scrollToSection={scrollToSection} lang={lang} />
        <Gallery />
        <Reviews t={t} lang={lang} />
        <BookingForm t={t} selectedService={selectedService} scrollToSection={scrollToSection} lang={lang} />
        <Contact t={t} />
      </main>

      <Footer t={t} scrollToSection={scrollToSection} />

      {/* Floating WhatsApp */}
      <button 
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 duration-300"
      >
        <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.733 5.479 2.016 7.78L0 32l8.369-2.195c2.253 1.22 4.821 1.921 7.631 1.921c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.311 22.181c-.34.957-1.705 1.748-2.613 1.861-.624.08-1.44.144-2.316-.144-.544-.176-1.228-.404-2.108-.78-3.748-1.552-6.189-5.325-6.376-5.576-.184-.251-1.504-2.004-1.504-3.824 0-1.82 1.052-2.716 1.34-3.004.288-.288.752-.36 1.136-.36.144 0 .272.008.384.016.328.016.488.024.704.536.264.632.904 2.192.984 2.352.08.16.136.344.032.552-.104.208-.16.336-.32.512-.16.176-.344.4-.488.536-.168.16-.344.336-.144.68.2.336.888 1.464 1.904 2.368 1.312 1.168 2.416 1.528 2.76 1.696.344.168.544.144.752-.08.208-.224.888-1.032 1.128-1.392.24-.36.48-.304.808-.184.328.12 2.088 1.032 2.448 1.216.352.184.584.272.672.424.088.168.088.952-.256 1.904z"/>
        </svg>
      </button>

      {/* Elegant Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="fixed bottom-24 right-8 z-[60] glass p-6 rounded-2xl shadow-2xl max-w-sm border-l-4 border-maroon"
          >
            <div className="flex gap-4 items-start">
              <div className="bg-maroon/10 p-2 rounded-lg text-maroon">
                <Heart className="w-5 h-5 focus:animate-pulse" />
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-sm mb-1">Booking in Progress</h5>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {t.booking.toast}
                </p>
              </div>
              <button onClick={() => setShowToast(false)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
