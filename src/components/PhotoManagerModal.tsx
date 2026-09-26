import React, { useState } from 'react';
import { Camera, X, Upload, RotateCcw, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Record<string, string>;
  onUpdatePhoto: (key: string, dataUrl: string) => void;
  onReset: () => void;
}

const PHOTO_SLOTS = [
  {
    key: 'heroTurquoise',
    title: 'Homepage Hero Portrait',
    desc: 'Studio portrait of Macall wearing turquoise outfit (Takoradi / Global hero)',
    aspect: 'aspect-[3/4]',
  },
  {
    key: 'aboutPortrait',
    title: 'About Section Portrait',
    desc: 'Professional portrait for "More Than A Voice" section',
    aspect: 'aspect-[3/4]',
  },
  {
    key: 'mcSuitMic',
    title: 'MC Section Stage Photo',
    desc: 'Macall wearing tailored suit holding stage microphone',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'ghanaianPodium',
    title: 'Ghanaian Attire at Podium',
    desc: 'Macall in traditional Ghanaian Kente delivering address at podium',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'radioStudio',
    title: 'Radio Studio Broadcast Photo',
    desc: 'Macall in broadcast studio behind microphone console',
    aspect: 'aspect-video',
  },
];

export default function PhotoManagerModal({
  isOpen,
  onClose,
  photos,
  onUpdatePhoto,
  onReset,
}: PhotoManagerModalProps) {
  const [successKey, setSuccessKey] = useState<string | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handleFileUpload = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUpdatePhoto(key, result);
        setSuccessKey(key);
        setTimeout(() => setSuccessKey(null), 2500);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className={`border rounded-2xl max-w-4xl w-full max-h-[92svh] flex flex-col shadow-2xl overflow-hidden transition-colors ${
          isLight
            ? 'bg-white border-slate-200 text-[#090D1E] shadow-slate-400/30'
            : 'bg-[#0A0E23] border-purple-500/25 text-white shadow-purple-950/50'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#070A18] border-white/10'
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 sm:text-purple-400 shrink-0">
              <Camera size={16} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-sm sm:text-lg truncate">
                Macall Mensah Photo Manager
              </h3>
              <p className={`text-[11px] sm:text-xs truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Customise or replace photos directly on your device
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onReset}
              className={`text-xs flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border transition-colors ${
                isLight
                  ? 'border-slate-300 text-slate-600 hover:text-purple-700 hover:bg-slate-100'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
              title="Reset to default artwork"
            >
              <RotateCcw size={12} />
              <span className="hidden xs:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                isLight
                  ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 flex-1">
          <div
            className={`border rounded-xl p-3.5 sm:p-4 flex items-start gap-3 ${
              isLight
                ? 'bg-purple-50/70 border-purple-200 text-purple-950'
                : 'bg-purple-950/20 border-purple-500/20 text-purple-200/90'
            }`}
          >
            <Sparkles className="text-purple-500 shrink-0 mt-0.5" size={16} />
            <p className="text-xs leading-relaxed font-light">
              <strong>Tip:</strong> Any photo you upload is updated live on this website and remembered on your device. Original aspect ratios and high resolutions are preserved automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {PHOTO_SLOTS.map((slot) => {
              const currentSrc = photos[slot.key];
              const isUpdated = successKey === slot.key;

              return (
                <div
                  key={slot.key}
                  className={`border rounded-xl p-3.5 sm:p-4 flex flex-col justify-between transition-colors group ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-purple-400'
                      : 'bg-[#080B1C] border-white/10 hover:border-purple-500/40'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-20 sm:w-24 ${slot.aspect} rounded-lg overflow-hidden border shrink-0 relative flex items-center justify-center ${
                        isLight ? 'bg-slate-200 border-slate-300' : 'bg-black/60 border-white/10'
                      }`}
                    >
                      <img
                        src={currentSrc}
                        alt={slot.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover sm:object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-display font-semibold text-xs sm:text-sm truncate ${
                          isLight ? 'text-[#090D1E]' : 'text-white'
                        }`}
                      >
                        {slot.title}
                      </h4>
                      <p
                        className={`text-[11px] sm:text-xs mt-1 line-clamp-2 leading-relaxed ${
                          isLight ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {slot.desc}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-display font-medium cursor-pointer transition-all duration-200 bg-purple-600 text-white hover:bg-purple-500 shadow-sm">
                          <Upload size={12} />
                          <span>Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(slot.key, e)}
                          />
                        </label>

                        {isUpdated && (
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-500 font-display animate-pulse">
                            <Check size={13} /> Updated
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-4 sm:px-6 py-3.5 sm:py-4 border-t flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#070A18] border-white/10'
          }`}
        >
          <span className="text-[11px] sm:text-xs text-slate-500">
            Macall Mensah • Takoradi, Ghana
          </span>
          <button
            onClick={onClose}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
