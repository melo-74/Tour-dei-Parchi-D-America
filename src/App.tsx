/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HeroSlide } from './components/HeroSlide';
import { OverviewSlide } from './components/OverviewSlide';
import { ParkSlideView } from './components/ParkSlideView';
import { PracticalInfoSlide } from './components/PracticalInfoSlide';
import { SlideNavigation } from './components/SlideNavigation';
import { PhotoLightbox } from './components/PhotoLightbox';
import { FullItineraryPage } from './components/FullItineraryPage';
import { PARK_SLIDES } from './data/itineraryData';
import { PhotoItem } from './types';
import { toggleDesertAmbiance } from './utils/audioAmbiance';
import { Compass, Volume2, VolumeX, Home, Map, Info, FileText } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'slides' | 'full_itinerary'>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);

  // Total slides:
  // Slide 0: Hero Welcome
  // Slide 1: Overview Route Loop
  // Slides 2 to 7: 6 Parks (Grand Canyon, Monument Valley, Page, Bryce, Zion, Death Valley)
  // Slide 8: Practical Info & Group Budget
  const totalSlides = 2 + PARK_SLIDES.length + 1; // 9 slides

  const handlePrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const handleGoToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Jump to specific park by ID
  const handleGoToParkSlide = useCallback((parkId: string) => {
    const parkIndex = PARK_SLIDES.findIndex((p) => p.id === parkId);
    if (parkIndex !== -1) {
      setCurrentSlideIndex(2 + parkIndex);
    }
  }, []);

  // Keyboard navigation support (only during slide view)
  useEffect(() => {
    if (currentView !== 'slides') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if an input is focused
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleGoToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleGoToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, handleGoToSlide, totalSlides, currentView]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlayingAuto || currentView !== 'slides') return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        if (prev >= totalSlides - 1) {
          setIsPlayingAuto(false);
          return prev;
        }
        return prev + 1;
      });
    }, 12000); // 12 seconds per slide

    return () => clearInterval(timer);
  }, [isPlayingAuto, totalSlides, currentView]);

  // Toggle audio ambiance
  const handleToggleAudio = () => {
    const nextState = !isAudioPlaying;
    const success = toggleDesertAmbiance(nextState);
    if (success) {
      setIsAudioPlaying(true);
    } else {
      setIsAudioPlaying(false);
    }
  };

  // Render active slide
  const renderSlideContent = () => {
    if (currentSlideIndex === 0) {
      return (
        <HeroSlide
          onStartJourney={() => handleGoToSlide(2)} // Goes directly to first park or overview
          onJumpToOverview={() => handleGoToSlide(1)}
          onOpenFullItinerary={() => setCurrentView('full_itinerary')}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={handleToggleAudio}
        />
      );
    }

    if (currentSlideIndex === 1) {
      return (
        <OverviewSlide 
          onGoToParkSlide={handleGoToParkSlide} 
          onOpenFullItinerary={() => setCurrentView('full_itinerary')}
        />
      );
    }

    if (currentSlideIndex === totalSlides - 1) {
      return (
        <PracticalInfoSlide 
          onOpenFullItinerary={() => setCurrentView('full_itinerary')} 
        />
      );
    }

    const parkIndex = currentSlideIndex - 2;
    const parkSlide = PARK_SLIDES[parkIndex];
    if (parkSlide) {
      return (
        <ParkSlideView
          key={parkSlide.id}
          slide={parkSlide}
          onOpenPhoto={(photo) => setActivePhoto(photo)}
        />
      );
    }

    return null;
  };

  if (currentView === 'full_itinerary') {
    return (
      <FullItineraryPage
        onBackToSlides={() => setCurrentView('slides')}
        onGoToParkSlide={(parkId) => {
          setCurrentView('slides');
          handleGoToParkSlide(parkId);
        }}
      />
    );
  }

  return (
    <div className="relative w-screen h-screen bg-stone-950 text-stone-100 flex flex-col overflow-hidden select-none">
      {/* Top persistent header bar (shown when beyond Hero slide 0) */}
      {currentSlideIndex > 0 && (
        <header className="relative z-30 w-full px-4 sm:px-6 py-2.5 bg-stone-950/80 border-b border-stone-800/80 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleGoToSlide(0)}
              className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors cursor-pointer group"
              title="Torna alla copertina"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30">
                <Compass className="w-4 h-4" />
              </span>
              <span className="text-xs sm:text-sm font-display font-bold tracking-tight text-white group-hover:text-amber-300">
                Road Trip Parchi USA
              </span>
            </button>

            <span className="hidden sm:inline text-stone-600">•</span>

            {/* Breadcrumb quick tabs */}
            <nav aria-label="Breadcrumbs" className="hidden sm:flex items-center gap-1.5 text-xs text-stone-400">
              <button
                onClick={() => handleGoToSlide(1)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentSlideIndex === 1
                    ? 'bg-amber-500/20 text-amber-300 font-semibold'
                    : 'hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                <Map className="w-3 h-3" />
                <span>Mappa Grande Anello</span>
              </button>

              <button
                onClick={() => handleGoToSlide(totalSlides - 1)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentSlideIndex === totalSlides - 1
                    ? 'bg-amber-500/20 text-amber-300 font-semibold'
                    : 'hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                <Info className="w-3 h-3" />
                <span>Logistica & Budget</span>
              </button>

              <button
                onClick={() => setCurrentView('full_itinerary')}
                className="px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-semibold"
                title="Apri l'Itinerario Completo (Giorno 1 - 15) in formato testo continuo"
              >
                <FileText className="w-3 h-3 text-amber-400" />
                <span>Itinerario Completo (G1-G15)</span>
              </button>
            </nav>
          </div>

          {/* Sound toggle & slide quick indicator */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setCurrentView('full_itinerary')}
              className="sm:hidden flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30 cursor-pointer"
              title="Itinerario Completo"
            >
              <FileText className="w-3 h-3" />
              <span>G1-15</span>
            </button>

            <button
              onClick={handleToggleAudio}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-700/80 text-xs text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              title={isAudioPlaying ? "Disattiva atmosfera sonora" : "Attiva atmosfera sonora"}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="hidden md:inline text-amber-300 font-medium">Atmosfera Sonora On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                  <span className="hidden md:inline text-stone-400">Suono Off</span>
                </>
              )}
            </button>
          </div>
        </header>
      )}

      {/* Main Slide Presentation Stage with AnimatePresence */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Floating Navigation Bar (always present) */}
      <SlideNavigation
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        onGoToSlide={handleGoToSlide}
        onOpenFullItinerary={() => setCurrentView('full_itinerary')}
        isPlayingAuto={isPlayingAuto}
        onToggleAutoPlay={() => setIsPlayingAuto(!isPlayingAuto)}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      <PhotoLightbox
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
