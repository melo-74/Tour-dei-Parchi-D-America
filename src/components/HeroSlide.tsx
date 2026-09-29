import React from 'react';
import { motion } from 'motion/react';
import { Compass, MapPin, Calendar, Sparkles, ChevronRight, Volume2, VolumeX, ShieldCheck, Flag, FileText } from 'lucide-react';
import { monumentValleyHeroImg, TRIP_META } from '../data/itineraryData';

interface HeroSlideProps {
  onStartJourney: () => void;
  onJumpToOverview: () => void;
  onOpenFullItinerary: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({
  onStartJourney,
  onJumpToOverview,
  onOpenFullItinerary,
  isAudioPlaying,
  onToggleAudio,
}) => {
  return (
    <div id="hero-welcome-slide" className="relative w-full h-full min-h-[600px] flex flex-col justify-between overflow-hidden">
      {/* Background Image: Monument Valley Straight Road */}
      <div className="absolute inset-0 z-0">
        <img
          src={monumentValleyHeroImg}
          alt="Strada diritta verso Monument Valley"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Subtle cinematic gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-stone-950/30 to-stone-950/80" />
      </div>

      {/* Top Bar / Audio & Meta badge */}
      <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 backdrop-blur-md">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </span>
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Progetto di Viaggio 2026</span>
            <p className="text-sm font-medium text-stone-300">Southwest USA National Parks</p>
          </div>
        </div>

        {/* Ambient audio toggle */}
        <button
          id="toggle-ambient-audio-btn"
          onClick={onToggleAudio}
          type="button"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/70 border border-stone-700/60 text-stone-200 text-xs font-medium backdrop-blur-md hover:bg-stone-800 transition-colors shadow-lg"
          title={isAudioPlaying ? "Disattiva atmosfera sonora del deserto" : "Attiva atmosfera sonora del deserto"}
        >
          {isAudioPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-amber-300">Musica & Vento On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-stone-400" />
              <span className="text-stone-300">Atmosfera Sonora</span>
            </>
          )}
        </button>
      </header>

      {/* Center / Bottom Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 text-center flex flex-col items-center justify-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Presentazione per i Compagni di Viaggio</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md"
        >
          {TRIP_META.title}
        </motion.h1>

        {/* Emotional Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-stone-200 font-normal max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow"
        >
          {TRIP_META.emotionalDescription}
        </motion.p>

        {/* Key Trip Pillars Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-700/60 backdrop-blur-md text-stone-200">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>{TRIP_META.durationDays}</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-700/60 backdrop-blur-md text-stone-200">
            <Flag className="w-4 h-4 text-amber-400" />
            <span>4 Stati & 7 Parchi</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-700/60 backdrop-blur-md text-stone-200">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{TRIP_META.totalKm} in SUV</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-700/60 backdrop-blur-md text-stone-200">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Pass Parchi Incluso</span>
          </div>
        </motion.div>

        {/* Primary Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <button
            id="start-presentation-cta-btn"
            onClick={onStartJourney}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
          >
            <span>Inizia la Presentazione</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="view-overview-map-cta-btn"
            onClick={onJumpToOverview}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-sm backdrop-blur-md transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Mappa Grande Anello</span>
          </button>

          <button
            id="view-full-itinerary-cta-btn"
            onClick={onOpenFullItinerary}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 hover:text-white font-semibold text-sm backdrop-blur-md transition-all cursor-pointer group"
          >
            <FileText className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Itinerario Completo (G1-G15)</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle indicator at bottom */}
      <footer className="relative z-10 w-full px-6 py-4 text-center text-xs text-stone-400/80 flex items-center justify-center gap-2">
        <span>Scorri con le frecce o clicca sui pulsanti in basso per esplorare le tappe</span>
      </footer>
    </div>
  );
};
