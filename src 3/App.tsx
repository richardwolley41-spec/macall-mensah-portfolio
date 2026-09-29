import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';
import './index.css';

const photo = (name: string) => `/photos/${name}`;
const whatsapp = (message: string) => `https://wa.me/233208022554?text=${encodeURIComponent(message)}`;
const bookLink = whatsapp('Hello Macall, I would like to enquire about booking you for an event.');
const images = [
  { src: photo('macall-on-stage.jpg'), label: 'On stage', type: 'Event hosting' },
  { src: photo('macall-radio-studio.jpg'), label: 'Behind the mic', type: 'Broadcasting' },
  { src: photo('macall-at-podium.jpg'), label: 'At the podium', type: 'Speaking' },
  { src: photo('macall-turquoise.jpg'), label: 'Macall Mensah', type: 'Portrait' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const links = [['About', '#about'], ['Experience', '#experience'], ['Media', '#media'], ['Contact', '#contact']];
  const enquiry = whatsapp(`Hello Macall, I would like to enquire about booking you.\nName: ${name || 'Not specified'}\nEvent: ${event || 'Not specified'}\nDate: ${date || 'To be discussed'}\nDetails: ${details || 'To be discussed'}`);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const selectors = '.section-inner .eyebrow, .section-inner h1, .section-inner h2, .section-inner h3, .section-inner p:not(.eyebrow), .section-inner img, .section-inner .portrait-note, .section-inner .text-link, .section-inner .pill-button, .section-inner .service-row, .section-inner .gallery-grid figure, .section-inner form label, .section-inner form button';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors))
      .filter(el => !el.closest('.service-row, .gallery-grid figure, form label') || el.matches('.service-row, .gallery-grid figure, form label'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    elements.forEach((el, index) => {
      el.classList.add('scroll-reveal');
      el.style.setProperty('--reveal-delay', `${(index % 5) * 70}ms`);
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.querySelector<HTMLElement>('.hero');
      const about = document.querySelector<HTMLElement>('.about-section');
      const gallery = document.querySelector<HTMLElement>('.gallery-section');
      const progress = (element: HTMLElement | null) => {
        if (!element) return 0;
        const rect = element.getBoundingClientRect();
        return Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight)));
      };
      if (hero) {
        const amount = progress(hero);
        hero.style.setProperty('--hero-progress', String(amount));
        hero.style.setProperty('--hero-rotation', `${amount * 180}deg`);
        hero.style.setProperty('--hero-rise', `${amount * -38}px`);
      }
      if (about) {
        const amount = Math.max(0, Math.min(1, (window.innerHeight - about.getBoundingClientRect().top) / (window.innerHeight + about.offsetHeight)));
        about.style.setProperty('--about-shift', `${(amount - .5) * -70}px`);
        about.style.setProperty('--note-shift', `${(amount - .5) * 60}px`);
      }
      if (gallery) {
        const track = gallery.querySelector<HTMLElement>('.gallery-grid');
        const viewport = gallery.querySelector<HTMLElement>('.section-inner');
        const shift = Math.max(0, (track?.scrollWidth || 0) - (viewport?.clientWidth || 0) + 60);
        gallery.style.setProperty('--gallery-offset', `${-progress(gallery) * shift}px`);
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(frame); };
  }, []);

  return <div className="site">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Macall Mensah, home">macall<span>®</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-cta" href={bookLink} target="_blank" rel="noopener noreferrer">Book Macall <ArrowUpRight size={16}/></a>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
       <div className="hero-stage">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-topline"><span>MC · BROADCASTER · MODERATOR</span><span>TAKORADI, GHANA ↗</span></div>
        <div className="hero-grid">
          <div className="hero-roles" aria-label="Event host, broadcaster, storyteller"><span>EVENT HOST</span><span>BROADCASTER</span><span>STORYTELLER</span></div>
          <div className="id-wrap"><div className="lanyard" aria-hidden="true" /><div className="id-flipper"><div className="id-card id-front"><div className="id-card-top"><span>MACALL MENSAH</span><span>MM / 001</span></div><img src={photo('macall-turquoise.jpg')} alt="Macall Mensah in a turquoise outfit" fetchPriority="high" /><div className="id-card-bottom"><div><strong>MACALL<br/>MENSAH</strong><small>THE VOICE. THE PRESENCE.</small></div><span className="id-star">✳</span></div></div><div className="id-card id-back"><div className="id-card-top"><span>MACALL MENSAH</span><span>MM / 001</span></div><div className="id-back-body"><span>WHAT I DO</span><strong>01 / EVENT HOST<br/>02 / BROADCASTER<br/>03 / MODERATOR</strong><p>Making each moment count, on stage and on air.</p><a href="#contact">LET'S CONNECT ↗</a></div><div className="id-card-bottom"><small>TAKORADI, GHANA</small><span className="id-star">✳</span></div></div></div></div>
          <div className="hero-side"><span>THE RIGHT VOICE<br/>FOR THE MOMENT.</span><a href="#about" aria-label="Explore Macall's portfolio"><ArrowDown size={24}/></a></div>
        </div>
        <div className="hero-bottom"><span>MAKE EVERY MOMENT COUNT.</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={15}/></a></div>
       </div>
      </section>

      <section id="about" className="about-section pink-section"><div className="section-inner about-layout">
        <div className="portrait-stack"><img src={photo('macall-portrait.jpg')} alt="Portrait of Macall Mensah" loading="lazy"/><div className="portrait-note">ON AIR<br/>ON STAGE<br/>ON POINT <span>✳</span></div></div>
        <div className="about-copy"><p className="eyebrow">01 / ABOUT MACALL</p><h1>More than<br/>a <em>voice.</em></h1><p className="lead">I’m Macall Mensah, an MC, broadcaster and moderator based in Takoradi, Ghana. I bring warmth, energy and a sense of occasion to every room and every conversation.</p><p>From live events to the studio microphone, I’m here to help people connect and make the moment memorable.</p><a className="text-link" href="#experience">Explore what I do <ArrowUpRight size={20}/></a></div>
      </div></section>

      <section id="experience" className="services-section pink-section"><div className="section-inner"><p className="eyebrow">02 / WHAT I DO</p><div className="section-heading-row"><h2>Presence that<br/><em>moves people.</em></h2><p>Whether it’s a stage, a microphone or a conversation, the goal is always the same: make people feel part of it.</p></div><div className="service-list">
        {[['01','MC & event hosting','Corporate events, celebrations, awards and live experiences.'],['02','Radio & broadcasting','Conversations, interviews and programmes with a human touch.'],['03','Moderation & speaking','Clear, engaging facilitation for panels and public conversations.']].map(([n,title,desc]) => <div className="service-row" key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight size={24}/></div>)}
      </div></div></section>

      <section id="media" className="media-section"><div className="section-inner media-layout"><div><p className="eyebrow">03 / BEHIND THE MIC</p><h2>Every voice<br/>has a <em>story.</em></h2><p>Radio is where curiosity meets connection. Macall brings that same attentive energy to every interview, event and audience.</p><a className="pill-button light" href={whatsapp('Hello Macall, I would like to enquire about a broadcasting or media engagement.')} target="_blank" rel="noopener noreferrer">LET’S TALK MEDIA <ArrowUpRight size={19}/></a></div><img src={photo('macall-radio-studio.jpg')} alt="Macall Mensah wearing headphones beside a studio microphone" loading="lazy"/></div></section>

      <section id="gallery" className="gallery-section pink-section"><div className="section-inner"><p className="eyebrow">04 / SELECTED MOMENTS</p><div className="section-heading-row"><h2>Moments in<br/><em>motion.</em></h2><p>Scroll to see the stage, studio and beyond →</p></div><div className="gallery-grid">{images.map((item, index) => <figure className={index === 0 ? 'featured' : ''} key={item.src}><img src={item.src} alt={item.label} loading="lazy"/><figcaption><strong>{item.label}</strong><span>{item.type}</span></figcaption></figure>)}</div></div></section>

      <section id="contact" className="contact-section pink-section"><div className="section-inner"><p className="eyebrow">05 / BOOKINGS</p><h2>Got an idea?<br/><em>Let’s make it happen.</em></h2><p>Planning an event or a media project? Send the details and start the conversation with Macall on WhatsApp.</p><form onSubmit={e => { e.preventDefault(); window.open(enquiry, '_blank', 'noopener,noreferrer'); }}><label>Your name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" required/></label><label>Event or project<input value={event} onChange={e=>setEvent(e.target.value)} placeholder="What are you planning?" required/></label><label>Preferred date<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label><label>Tell us more<textarea value={details} onChange={e=>setDetails(e.target.value)} placeholder="Location, audience and anything else to know" rows={3}/></label><button type="submit">SEND ENQUIRY ON WHATSAPP <ArrowUpRight size={20}/></button></form></div></section>
    </main>
    <footer><a className="brand" href="#home">macall<span>®</span></a><span>MC · BROADCASTER · MODERATOR</span><div><a href="https://www.linkedin.com/in/macall-mensah-5759b799/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href={bookLink} target="_blank" rel="noopener noreferrer">WHATSAPP ↗</a></div></footer>
  </div>;
}
