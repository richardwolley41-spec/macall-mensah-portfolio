import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface UploadBannerProps {
  onFilesSelected: (files: FileList | File[]) => void;
  hasCustomPhotos: boolean;
  onOpenManager: () => void;
}

export default function UploadBanner({
  onFilesSelected,
  hasCustomPhotos,
  onOpenManager,
}: UploadBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [appliedCount, setAppliedCount] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
      setAppliedCount(e.target.files.length);
      setTimeout(() => setAppliedCount(null), 4000);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
      setAppliedCount(e.dataTransfer.files.length);
      setTimeout(() => setAppliedCount(null), 4000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  if (isDismissed && hasCustomPhotos) return null;

  return (
    <>
      {/* Global full-window drag & drop listener highlight */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`fixed inset-0 z-[200] pointer-events-none transition-all duration-300 ${
          isDragOver ? 'bg-purple-950/80 backdrop-blur-md pointer-events-auto flex items-center justify-center' : 'opacity-0'
        }`}
      >
        {isDragOver && (
          <div className="bg-[#0A0E26] border-2 border-dashed border-purple-400 p-10 rounded-3xl text-center shadow-2xl">
            <UploadCloud size={48} className="text-purple-400 mx-auto mb-4 animate-bounce" />
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider">
              Drop Macall's Photos Here
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Automatically assigns to Hero (Turquoise), MC Stage, Podium & About!
            </p>
          </div>
        )}
      </div>

      {/* Persistent floating action bar with mobile-optimized layout */}
      <div className="fixed top-18 sm:top-24 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl">
        <div
          className={`rounded-2xl border backdrop-blur-xl p-3 sm:p-5 shadow-2xl transition-all duration-500 ${
            hasCustomPhotos
              ? isLight
                ? 'bg-white/95 border-emerald-500/40 shadow-emerald-900/10'
                : 'bg-[#090D1E]/95 border-emerald-500/30 shadow-emerald-950/20'
              : isLight
              ? 'bg-white/95 border-purple-300 shadow-slate-300/50'
              : 'bg-[#0A0D24]/95 border-purple-500/40 shadow-purple-950/50'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  hasCustomPhotos
                    ? isLight
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : isLight
                    ? 'bg-purple-100 text-purple-700 border border-purple-300'
                    : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                }`}
              >
                {hasCustomPhotos ? <CheckCircle2 size={16} /> : <ImageIcon size={16} />}
              </div>

              <div className="min-w-0">
                <h4
                  className={`font-display font-bold text-xs sm:text-sm tracking-wide truncate ${
                    isLight ? 'text-[#090D1E]' : 'text-white'
                  }`}
                >
                  {hasCustomPhotos
                    ? "Macall's Real Photos Applied"
                    : 'Apply Uploaded Photos'}
                </h4>
                <p className={`text-[11px] sm:text-xs truncate ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {hasCustomPhotos
                    ? '100% authentic original photographs loaded.'
                    : 'Select your 4 uploaded photos of Macall.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-xl text-xs font-display font-semibold tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <UploadCloud size={14} />
                <span>{hasCustomPhotos ? 'Replace Photos' : 'Choose 4 Photos'}</span>
              </button>

              <button
                onClick={onOpenManager}
                className={`px-3 py-2 rounded-xl text-xs font-display border transition-colors ${
                  isLight
                    ? 'border-slate-300 text-slate-700 hover:text-purple-700 hover:bg-slate-100'
                    : 'border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
                title="Manage photo slots"
              >
                Slots
              </button>

              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100/50 transition-colors"
                aria-label="Dismiss banner"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {appliedCount !== null && (
            <div className="mt-3 pt-3 border-t border-purple-500/20 flex items-center gap-2 text-xs text-emerald-400 font-display">
              <CheckCircle2 size={14} />
              <span>
                Successfully loaded {appliedCount} photo{appliedCount > 1 ? 's' : ''} directly into the site!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
