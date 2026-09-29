import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid, Play, Pause, Home, Map, Mountain, Info, Compass, FileText } from 'lucide-react';
import { PARK_SLIDES, TRIP_META } from '../data/itineraryData';

interface SlideNavigationProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  onOpenFullItinerary?: () => void;
  isPlayingAuto: boolean;
  onToggleAutoPlay: () => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  onGoToSlide,
  onOpenFullItinerary,
  isPlayingAuto,
  onToggleAutoPlay,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  // Helper label for current slide
  const getSlideInfo = (idx: number) => {
    if (idx === 0) return { title: 'Benvenuto & Partenza', subtitle: 'Monument Valley Highway' };
    if (idx === 1) return { title: 'Mappa Completa Anello', subtitle: `The Grand Loop (${TRIP_META.totalKm})` };
    if (idx === totalSlides - 1) return { title: 'Guida Pratica & Budget', subtitle: 'Logistica per il gruppo' };
    
    const park = PARK_SLIDES[idx - 2];
    if (park) {
      return { title: park.title, subtitle: `${park.dayLabel} - ${park.state}` };
    }
    return { title: `Slide ${idx + 1}`, subtitle: '' };
  };

  const currentInfo = getSlideInfo(currentSlideIndex);

  return (
    <>
      {/* Floating Bottom Navigation Bar */}
      <nav aria-label="Navigazione slide" className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-4xl">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-2xl backdrop-blur-xl">
          {/* Left: Home & Quick Jump Drawer */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onGoToSlide(0)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                currentSlideIndex === 0
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="Torna alla copertina iniziale"
            >
              <Home className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
              title="Indice delle slide"
            >
              <Grid className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Indice</span>
            </button>

            {onOpenFullItinerary && (
              <button
                onClick={onOpenFullItinerary}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-colors cursor-pointer"
                title="Apri l'Itinerario Completo (Giorno 1 - 15) in formato testo continuo"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline">Itinerario Completo</span>
              </button>
            )}

            {/* Auto Play toggle */}
            <button
              onClick={onToggleAutoPlay}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isPlayingAuto
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
              title={isPlayingAuto ? "Ferma avanzamento automatico" : "Avanzamento automatico presentazione"}
            >
              {isPlayingAuto ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Center: Current Slide Label & Progress Indicator */}
          <div className="flex flex-col items-center text-center px-2 flex-1 max-w-[280px] sm:max-w-xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-100 truncate w-full justify-center">
              <span className="text-amber-400 font-mono text-[11px]">{currentSlideIndex + 1}/{totalSlides}</span>
              <span className="truncate">{currentInfo.title}</span>
            </div>
            {currentInfo.subtitle && (
              <span className="text-[10px] text-stone-400 truncate hidden sm:block">
                {currentInfo.subtitle}
              </span>
            )}
            
            {/* Tiny Progress Bar */}
            <div className="w-full bg-stone-800 h-1 rounded-full mt-1 overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          {/* Right: Prev & Next Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              id="slide-prev-btn"
              onClick={onPrev}
              disabled={currentSlideIndex === 0}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                currentSlideIndex === 0
                  ? 'text-stone-600 opacity-40 cursor-not-allowed'
                  : 'text-stone-200 hover:text-white hover:bg-stone-800 active:scale-95'
              }`}
              title="Slide precedente (Tasto freccia sinistra)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              id="slide-next-btn"
              onClick={onNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                currentSlideIndex === totalSlides - 1
                  ? 'text-stone-600 opacity-40 cursor-not-allowed'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 active:scale-95 shadow-md shadow-amber-500/20'
              }`}
              title="Slide successiva (Tasto freccia destra)"
            >
              <span className="hidden sm:inline">Avanti</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide Drawer / Index Modal */}
      {showDrawer && (
        <div
          id="slide-drawer-backdrop"
          onClick={() => setShowDrawer(false)}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[80vh] bg-stone-900 border border-stone-800 rounded-3xl p-5 sm:p-6 shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Indice della Presentazione</h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-xs text-stone-400 hover:text-white px-2 py-1 rounded-lg bg-stone-800"
              >
                Chiudi
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Slide 0: Copertina */}
              <button
                onClick={() => {
                  onGoToSlide(0);
                  setShowDrawer(false);
                }}
                className={`p-3 rounded-xl text-left border transition-all flex items-center gap-3 ${
                  currentSlideIndex === 0
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950/40 border-stone-800 hover:bg-stone-800 text-stone-200'
                }`}
              >
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 font-bold block uppercase">Slide 1</span>
                  <span className="text-xs font-bold block">Copertina & Monument Valley</span>
                </div>
              </button>

              {/* Slide 1: Grande Anello */}
              <button
                onClick={() => {
                  onGoToSlide(1);
                  setShowDrawer(false);
                }}
                className={`p-3 rounded-xl text-left border transition-all flex items-center gap-3 ${
                  currentSlideIndex === 1
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950/40 border-stone-800 hover:bg-stone-800 text-stone-200'
                }`}
              >
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400">
                  <Map className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 font-bold block uppercase">Slide 2</span>
                  <span className="text-xs font-bold block">Mappa Completa dell'Anello</span>
                </div>
              </button>

              {/* Park Slides */}
              {PARK_SLIDES.map((park, idx) => {
                const sIdx = idx + 2;
                return (
                  <button
                    key={park.id}
                    onClick={() => {
                      onGoToSlide(sIdx);
                      setShowDrawer(false);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center gap-3 ${
                      currentSlideIndex === sIdx
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-stone-950/40 border-stone-800 hover:bg-stone-800 text-stone-200'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-stone-700">
                      <img
                        src={park.heroImage}
                        alt={park.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-amber-400 font-bold block uppercase">{park.dayLabel}</span>
                      <span className="text-xs font-bold block truncate">{park.title}</span>
                    </div>
                  </button>
                );
              })}

              {/* Final Slide: Practical Info */}
              <button
                onClick={() => {
                  onGoToSlide(totalSlides - 1);
                  setShowDrawer(false);
                }}
                className={`p-3 rounded-xl text-left border transition-all flex items-center gap-3 sm:col-span-2 ${
                  currentSlideIndex === totalSlides - 1
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950/40 border-stone-800 hover:bg-stone-800 text-stone-200'
                }`}
              >
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 font-bold block uppercase">Ultima Slide</span>
                  <span className="text-xs font-bold block">Logistica, Budget & Checklist Valigia per i Compagni</span>
                </div>
              </button>

              {/* Special Button: Itinerario Completo (Giorno 1 - 15) */}
              {onOpenFullItinerary && (
                <button
                  onClick={() => {
                    onOpenFullItinerary();
                    setShowDrawer(false);
                  }}
                  className="p-3.5 rounded-xl text-left border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all flex items-center gap-3 sm:col-span-2 shadow-lg"
                >
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider">
                      Guida Scritta Completa
                    </span>
                    <span className="text-xs font-bold block text-white">
                      Itinerario Completo (Giorno 1 - 15) • Testo Continuo & Punti Panoramici
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
