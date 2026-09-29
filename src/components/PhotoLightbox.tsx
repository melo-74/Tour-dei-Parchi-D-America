import React, { useEffect } from 'react';
import { PhotoItem } from '../types';
import { X, MapPin, Camera } from 'lucide-react';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      id="photo-lightbox-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-stone-950/70 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer border border-stone-700/50"
          title="Chiudi foto (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo Container */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Photo Caption / Location Bar */}
        <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{photo.location}</span>
            </div>
            <h3 className="text-base font-bold text-white">{photo.caption}</h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400 bg-stone-950/50 px-3 py-1.5 rounded-lg border border-stone-800 self-start sm:self-auto">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Foto per la Presentazione di Viaggio</span>
          </div>
        </div>
      </div>
    </div>
  );
};
