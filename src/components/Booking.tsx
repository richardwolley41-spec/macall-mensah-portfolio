import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

const WHATSAPP_NUMBER = '233208022554';
const WHATSAPP_DISPLAY = '+233 20 802 2554';

export default function Booking() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    eventType: 'Corporate Event',
    eventDate: '',
    location: '',
    audience: '',
    notes: '',
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Macall, I would like to enquire about booking you for an event:
- Name: ${formData.fullName || 'Not specified'}
- Organization: ${formData.organization || 'Individual'}
- Event Type: ${formData.eventType}
- Date: ${formData.eventDate || 'TBD'}
- Location: ${formData.location || 'Ghana'}
- Expected Audience: ${formData.audience || 'TBD'}
- Notes: ${formData.notes || 'Looking forward to discussing.'}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Macall, I visited your website and would like to enquire about booking you for an event."
  )}`;

  return (
    <section
      id="contact"
      className={`relative py-32 lg:py-44 overflow-hidden border-t transition-colors duration-500 ${
        isLight
          ? 'bg-white text-[#090D1E] border-slate-200'
          : 'bg-[#050711] text-white border-white/[0.06]'
      }`}
    >
      {/* Deep purple atmospheric lighting glow */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[150px] pointer-events-none ${
          isLight ? 'bg-purple-200/30' : 'bg-purple-950/20'
        }`}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-purple-500" />
          <span
            className={`font-display text-xs tracking-[0.3em] uppercase font-semibold ${
              isLight ? 'text-purple-600' : 'text-purple-400'
            }`}
          >
            Bookings & Inquiries
          </span>
        </div>

        {/* Section Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 lg:mb-14"
        >
          <h2
            className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.92] ${
              isLight ? 'text-[#090D1E]' : 'text-white'
            }`}
          >
            LET'S
            <br />
            MAKE
            <br />
            SOMETHING
            <br />
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-[#090D1E]'
                  : 'bg-gradient-to-r from-purple-400 via-purple-200 to-white'
              }`}
            >
              MEMORABLE.
            </span>
          </h2>

          <div
            className={`mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}
          >
            <p
              className={`text-lg sm:text-xl font-light max-w-xl leading-relaxed ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              Need an MC, radio personality, moderator or public speaker?
            </p>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 shrink-0"
            >
              <MessageSquare size={17} className="text-purple-200" />
              <span>BOOK MACALL</span>
            </a>
          </div>
        </motion.div>

        {/* Structured Booking Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct WhatsApp & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div
              className={`p-8 rounded-2xl border transition-colors ${
                isLight
                  ? 'bg-slate-50 border-slate-200 shadow-md'
                  : 'bg-[#080B1E] border-white/10 hover:border-purple-500/30'
              }`}
            >
              <span
                className={`text-xs font-display tracking-[0.25em] uppercase font-semibold block mb-3 ${
                  isLight ? 'text-purple-600' : 'text-purple-400'
                }`}
              >
                Fastest Response
              </span>
              <h3
                className={`font-display font-bold text-2xl uppercase tracking-wider mb-2 ${
                  isLight ? 'text-[#090D1E]' : 'text-white'
                }`}
              >
                WhatsApp Direct
              </h3>
              <p
                className={`text-sm font-light mb-6 leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                Connect directly with Macall's management team for date availability, engagement briefs, and technical riders.
              </p>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 font-display font-bold text-base transition-colors group ${
                  isLight ? 'text-purple-700 hover:text-purple-900' : 'text-gold hover:text-white'
                }`}
              >
                <span>{WHATSAPP_DISPLAY}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            <div
              className={`p-8 rounded-2xl border ${
                isLight ? 'bg-slate-50/50 border-slate-200' : 'bg-white/[0.02] border-white/[0.06]'
              }`}
            >
              <h4
                className={`font-display font-bold text-base uppercase tracking-wider mb-4 ${
                  isLight ? 'text-[#090D1E]' : 'text-white'
                }`}
              >
                Booking Protocols
              </h4>
              <ul
                className={`space-y-3 text-xs leading-relaxed font-light ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                  <span>Base of Operations: <strong>Takoradi, Western Region</strong> (available nationwide across Ghana and for international travel).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                  <span>Early reservations advised for high-season dates (Q4 galas, festive seasons and awards).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                  <span>Custom event run-of-show consultations included with all major hosting agreements.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Tailored Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 sm:p-10 rounded-2xl border shadow-2xl lg:col-span-7 transition-colors ${
              isLight
                ? 'bg-[#F8F9FD] border-slate-200 shadow-slate-200/50 text-[#090D1E]'
                : 'bg-[#070A1A] border-white/10 text-white'
            }`}
          >
            <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-2">
              Event Briefing Form
            </h3>
            <p className={`text-xs mb-8 font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Submit your event details below to initiate your booking directly via WhatsApp.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ama Mensah"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                      isLight
                        ? 'bg-white border border-slate-300 text-[#090D1E] placeholder-slate-400'
                        : 'bg-[#050711] border border-white/10 text-white placeholder-slate-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Standard Bank / Private"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                      isLight
                        ? 'bg-white border border-slate-300 text-[#090D1E] placeholder-slate-400'
                        : 'bg-[#050711] border border-white/10 text-white placeholder-slate-600'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                      isLight
                        ? 'bg-white border border-slate-300 text-[#090D1E]'
                        : 'bg-[#050711] border border-white/10 text-white'
                    }`}
                  >
                    <option value="Corporate Event">Corporate Event / Summit</option>
                    <option value="Awards & Gala">Awards & Gala Dinner</option>
                    <option value="Conference / Moderation">Conference / Panel Moderation</option>
                    <option value="Luxury Wedding">Luxury Wedding Reception</option>
                    <option value="Brand Activation">Brand Activation / Product Launch</option>
                    <option value="Radio / Media Broadcast">Radio / Media Broadcast</option>
                    <option value="Other">Other Engagement</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                      isLight
                        ? 'bg-white border border-slate-300 text-[#090D1E]'
                        : 'bg-[#050711] border border-white/10 text-white'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Event Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Atlantic Hotel, Takoradi / Accra"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                      isLight
                        ? 'bg-white border border-slate-300 text-[#090D1E] placeholder-slate-400'
                        : 'bg-[#050711] border border-white/10 text-white placeholder-slate-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Expected Audience Size
                  </label>
                  <input
                    type="text"
                    value={formData.audience}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                    placeholder="e.g. 500+ Guests"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                      isLight
                        ? 'bg-white border border-slate-300 text-[#090D1E] placeholder-slate-400'
                        : 'bg-[#050711] border border-white/10 text-white placeholder-slate-600'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-[11px] font-display uppercase tracking-widest mb-2 ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  Event Brief & Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any key notes regarding theme, VIP dignitaries, or schedule..."
                  className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                    isLight
                      ? 'bg-white border border-slate-300 text-[#090D1E] placeholder-slate-400'
                      : 'bg-[#050711] border border-white/10 text-white placeholder-slate-600'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-display font-bold text-xs tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-purple-950/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <MessageSquare size={16} />
                <span>SEND INQUIRY VIA WHATSAPP</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
