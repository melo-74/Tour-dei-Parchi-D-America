import React, { useState, useMemo } from 'react';
import { 
  FULL_15_DAYS_ITINERARY, 
  FULL_ITINERARY_STATS, 
  DayItinerary 
} from '../data/fullItineraryData';
import { 
  Compass, 
  ArrowLeft, 
  Printer, 
  Copy, 
  Check, 
  Search, 
  MapPin, 
  Car, 
  Clock, 
  Mountain, 
  Navigation, 
  Eye, 
  Calendar, 
  FileText, 
  Sparkles, 
  BedDouble, 
  Lightbulb, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  Bookmark
} from 'lucide-react';

interface FullItineraryPageProps {
  onBackToSlides: () => void;
  onGoToParkSlide?: (parkId: string) => void;
}

export const FullItineraryPage: React.FC<FullItineraryPageProps> = ({
  onBackToSlides,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>(() => {
    // Default: all days expanded for continuous reading
    const initial: Record<number, boolean> = {};
    for (let i = 1; i <= 15; i++) {
      initial[i] = true;
    }
    return initial;
  });

  const allExpanded = useMemo(() => {
    return Object.values(expandedDays).every(Boolean);
  }, [expandedDays]);

  const toggleAllDays = () => {
    const nextState = !allExpanded;
    const updated: Record<number, boolean> = {};
    for (let i = 1; i <= 15; i++) {
      updated[i] = nextState;
    }
    setExpandedDays(updated);
  };

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }));
  };

  // Filter days based on search and state filter
  const filteredDays = useMemo(() => {
    return FULL_15_DAYS_ITINERARY.filter((day) => {
      const matchesState = 
        selectedState === 'all' || 
        day.state.toLowerCase().includes(selectedState.toLowerCase());

      if (!matchesState) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchInTitle = day.title.toLowerCase().includes(query);
      const matchInSubtitle = day.subtitle.toLowerCase().includes(query);
      const matchInNarrative = day.narrative.toLowerCase().includes(query);
      const matchInRoute = day.routeSummary.toLowerCase().includes(query);
      const matchInStops = day.stops.some(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.location.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.categoryTag.toLowerCase().includes(query)
      );
      const matchInViewpoints = day.panoramicViewpoints.some(
        (v) =>
          v.name.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query)
      );

      return (
        matchInTitle ||
        matchInSubtitle ||
        matchInNarrative ||
        matchInRoute ||
        matchInStops ||
        matchInViewpoints ||
        day.dayLabel.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, selectedState]);

  // Copy complete formatted text roadbook to clipboard
  const handleCopyFullText = async () => {
    let fullText = `🇺🇸 ROAD TRIP DEI GRANDI PARCHI DEL WEST - ITINERARIO COMPLETO (GIORNO 1 - 15)\n`;
    fullText += `Durata: ${FULL_ITINERARY_STATS.durationDays} Giorni | Distanza: ${FULL_ITINERARY_STATS.totalTransferKm} km di trasferimento (+ deviazioni parchi = ~${FULL_ITINERARY_STATS.totalEstimatedKmWithParks} km totali)\n`;
    fullText += `Stati: ${FULL_ITINERARY_STATS.statesVisited.join(', ')}\n`;
    fullText += `Formula: Ritiro e Riconsegna a Los Angeles LAX (Anello chiuso, nessun costo di drop-off)\n`;
    fullText += `------------------------------------------------------------\n\n`;

    FULL_15_DAYS_ITINERARY.forEach((day) => {
      fullText += `============================================================\n`;
      fullText += `${day.dayLabel.toUpperCase()}: ${day.title.toUpperCase()}\n`;
      fullText += `${day.subtitle}\n`;
      fullText += `Stato: ${day.state} | Tratta del giorno: ${day.stageKm} km (${day.estimatedDrivingTime})\n`;
      fullText += `Km progressivi da inizio viaggio: ${day.progressiveKm} km\n`;
      if (day.kmToNextLeg > 0) {
        fullText += `Tratta successiva: +${day.kmToNextLeg} km verso ${day.nextLegDestination} (${day.drivingTimeToNextLeg})\n`;
      } else {
        fullText += `Destinazione finale: Rientro in Italia\n`;
      }
      fullText += `Pernottamento: ${day.overnightStay}\n`;
      fullText += `Percorso: ${day.routeSummary}\n\n`;
      fullText += `DESCRIZIONE DEL GIORNO:\n${day.narrative}\n\n`;

      fullText += `SOSTE & TAPPE PRINCIPALI:\n`;
      day.stops.forEach((stop, idx) => {
        fullText += `  ${idx + 1}. ${stop.name} [${stop.categoryTag}]\n`;
        fullText += `     Luogo: ${stop.location}\n`;
        if (stop.distanceFromPrev) fullText += `     Distanza: ${stop.distanceFromPrev}\n`;
        if (stop.distanceToNext) fullText += `     Verso prox sosta: ${stop.distanceToNext}\n`;
        fullText += `     Descrizione: ${stop.description}\n`;
        if (stop.practicalTip) fullText += `     Consiglio: ${stop.practicalTip}\n`;
      });

      if (day.panoramicViewpoints.length > 0) {
        fullText += `\nPUNTI PANORAMICI & BELVEDERI:\n`;
        day.panoramicViewpoints.forEach((vp) => {
          fullText += `  • ${vp.name}${vp.elevation ? ` (Quota: ${vp.elevation})` : ''}${vp.bestTime ? ` - Orario migliore: ${vp.bestTime}` : ''}\n`;
          fullText += `    ${vp.description}\n`;
        });
      }

      fullText += `\nCONSIGLIO SERALE & CENA: ${day.eveningTip}\n\n`;
    });

    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToDay = (dayNumber: number) => {
    const el = document.getElementById(`day-section-${dayNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-stone-950/90 border-b border-stone-800 backdrop-blur-md px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToSlides}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-700/80 hover:bg-stone-800 hover:border-amber-500/50 text-stone-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer group"
            title="Torna alla presentazione a slide"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Torna alle Slide</span>
          </button>

          <div className="h-5 w-px bg-stone-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <h1 className="text-sm sm:text-base font-display font-bold text-white tracking-tight leading-none">
                Itinerario Completo (Giorno 1 - 15)
              </h1>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                Guida descrittiva continua • Tutte le soste, km e punti panoramici
              </p>
            </div>
          </div>
        </div>

        {/* Right header actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyFullText}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 hover:bg-stone-800 text-xs text-stone-200 font-medium transition-colors cursor-pointer"
            title="Copia l'intero testo dell'itinerario negli appunti"
          >
            {copiedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Copia Testo Completo</span>
                <span className="sm:hidden">Copia</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 hover:bg-stone-800 text-xs text-stone-200 font-medium transition-colors cursor-pointer"
            title="Stampa o salva in PDF l'itinerario"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Stampa / PDF</span>
          </button>

          <button
            onClick={toggleAllDays}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-colors cursor-pointer"
            title={allExpanded ? "Comprimi tutte le giornate" : "Espandi tutte le giornate per lettura continua"}
          >
            {allExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Comprimi Tutto</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Espandi Tutto</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Intro & Key Highlights Hero Banner (Text-only, no images) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900/90 via-stone-900/60 to-stone-950 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Roadbook Descrittivo Integrale • Senza Immagini</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Il Grande Anello del West: 15 Giorni di Viaggio On The Road
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Ecco la descrizione scritta completa, continua e dettagliata di ogni singolo giorno di viaggio dal Giorno 1 al Giorno 15.
              Per ciascuna giornata trovi il percorso narrato passo per passo, le relative soste storiche e naturalistiche, 
              i chilometri di tappa e progressivi, i tempi di guida, i punti panoramici consigliati, i consigli per la sera e il pernottamento.
            </p>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-stone-950/70 border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">Durata Viaggio</span>
                <span className="text-base font-bold text-amber-400">{FULL_ITINERARY_STATS.durationDays} Giorni</span>
                <span className="text-[11px] text-stone-400 block">Anello completo</span>
              </div>

              <div className="p-3 rounded-2xl bg-stone-950/70 border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">Km Totali</span>
                <span className="text-base font-bold text-amber-400">{FULL_ITINERARY_STATS.totalTransferKm} km</span>
                <span className="text-[11px] text-stone-400 block">(~3.500 km con parchi)</span>
              </div>

              <div className="p-3 rounded-2xl bg-stone-950/70 border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">Stati & Parchi</span>
                <span className="text-base font-bold text-amber-400">4 Stati • 7 Parchi</span>
                <span className="text-[11px] text-stone-400 block">CA, AZ, UT, NV</span>
              </div>

              <div className="p-3 rounded-2xl bg-stone-950/70 border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">Veicolo & Voli</span>
                <span className="text-base font-bold text-amber-400">SUV 4x4 a LAX</span>
                <span className="text-[11px] text-emerald-400 block">Zero spese drop-off</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Day Navigator Pills (Sticky Bar) */}
        <section className="sticky top-[61px] z-40 py-2.5 bg-stone-950/95 backdrop-blur-md border-y border-stone-800/80 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-stone-400 flex items-center gap-1 mr-1 flex-shrink-0">
              <Bookmark className="w-3 h-3 text-amber-400" />
              <span>Salta al Giorno:</span>
            </span>
            {FULL_15_DAYS_ITINERARY.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => scrollToDay(day.dayNumber)}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-900 border border-stone-800 hover:bg-amber-500/20 hover:border-amber-500/40 hover:text-amber-300 text-stone-300 transition-colors flex-shrink-0 cursor-pointer"
                title={`${day.dayLabel}: ${day.title}`}
              >
                G{day.dayNumber}
              </button>
            ))}
          </div>
        </section>

        {/* Search & State Filter Controls */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca una tappa, sentiero o sosta (es. Oatman, Calico, Narrows, Peggy Sue, Badwater, Mather)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-700/80 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-stone-400 flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Stato:</span>
            </span>
            {['all', 'California', 'Arizona', 'Utah', 'Nevada'].map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex-shrink-0 font-medium ${
                  selectedState === state
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-950 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {state === 'all' ? 'Tutti gli Stati' : state}
              </button>
            ))}
          </div>
        </section>

        {/* Results Counter */}
        {searchQuery && (
          <div className="text-xs text-stone-400 px-1">
            Trovati <span className="text-amber-400 font-bold">{filteredDays.length}</span> giorni su 15 corrispondenti alla ricerca "{searchQuery}".
          </div>
        )}

        {/* Continuous Day-by-Day Reading Section */}
        <div className="space-y-10">
          {filteredDays.map((day) => {
            const isExpanded = expandedDays[day.dayNumber] ?? true;

            return (
              <article
                key={day.dayNumber}
                id={`day-section-${day.dayNumber}`}
                className="scroll-mt-28 rounded-3xl bg-stone-900/40 border border-stone-800/90 shadow-xl overflow-hidden transition-all hover:border-stone-700/80"
              >
                {/* Day Header Banner */}
                <header
                  onClick={() => toggleDay(day.dayNumber)}
                  className="p-5 sm:p-6 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-950 border-b border-stone-800 flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-xs font-extrabold uppercase tracking-wide">
                        {day.dayLabel} di 15
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700">
                        {day.state}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                      {day.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-amber-400/90 font-medium">
                      {day.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="p-2 rounded-xl bg-stone-800 group-hover:bg-stone-700 text-stone-300 transition-colors flex-shrink-0"
                    title={isExpanded ? "Comprimi giorno" : "Espandi giorno"}
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </header>

                {/* Day Content Body (when expanded) */}
                {isExpanded && (
                  <div className="p-5 sm:p-7 space-y-6">
                    {/* Route Strip & Distance Metrics */}
                    <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                        <Navigation className="w-4 h-4 text-amber-400" />
                        <span>Percorso del Giorno:</span>
                        <span className="text-stone-300 font-normal">{day.routeSummary}</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-stone-800/60 text-xs">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-stone-400 flex items-center gap-1">
                            <Car className="w-3 h-3 text-amber-400" /> Tratta Odierna
                          </span>
                          <span className="font-bold text-stone-100">{day.stageKm} km</span>
                          <span className="text-[10px] text-stone-400">({day.estimatedDrivingTime})</span>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[10px] text-stone-400 flex items-center gap-1">
                            <Compass className="w-3 h-3 text-amber-400" /> Prog. da LAX
                          </span>
                          <span className="font-bold text-amber-400">{day.progressiveKm} km</span>
                          <span className="text-[10px] text-stone-400">cumulativi</span>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[10px] text-stone-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-400" /> Prox Tratta
                          </span>
                          <span className="font-bold text-stone-100">
                            {day.kmToNextLeg > 0 ? `+${day.kmToNextLeg} km` : 'Arrivo finale'}
                          </span>
                          <span className="text-[10px] text-stone-400 truncate">
                            {day.drivingTimeToNextLeg}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[10px] text-stone-400 flex items-center gap-1">
                            <BedDouble className="w-3 h-3 text-amber-400" /> Pernottamento
                          </span>
                          <span className="font-semibold text-stone-200 text-[11px] truncate" title={day.overnightStay}>
                            {day.overnightStay}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Day Narrative (Continuous Written Description) */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span>Descrizione & Diario del Percorso</span>
                      </h4>
                      <p className="text-sm sm:text-base text-stone-200 leading-relaxed bg-stone-950/40 p-4 sm:p-5 rounded-2xl border border-stone-800/60 text-justify sm:text-left">
                        {day.narrative}
                      </p>
                    </div>

                    {/* Stops & Sub-Stops in Sequence */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>Tutte le Soste & Tappe in Sequenza ({day.stops.length})</span>
                      </h4>

                      <div className="space-y-3">
                        {day.stops.map((stop, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 space-y-2 hover:border-amber-500/30 transition-colors"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                                  {sIdx + 1}
                                </span>
                                <h5 className="text-sm sm:text-base font-bold text-white">
                                  {stop.name}
                                </h5>
                              </div>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-800 text-amber-300 border border-stone-700">
                                {stop.categoryTag}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
                              <span>📍 {stop.location}</span>
                              {stop.distanceFromPrev && (
                                <>
                                  <span>•</span>
                                  <span>🚗 {stop.distanceFromPrev}</span>
                                </>
                              )}
                              {stop.distanceToNext && (
                                <>
                                  <span>•</span>
                                  <span className="text-amber-400/90 font-medium">➔ Prox sosta: {stop.distanceToNext}</span>
                                </>
                              )}
                            </div>

                            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                              {stop.description}
                            </p>

                            {stop.practicalTip && (
                              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/90">
                                <Lightbulb className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span><strong>Consiglio per il gruppo:</strong> {stop.practicalTip}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Panoramic Viewpoints */}
                    {day.panoramicViewpoints.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>Punti Panoramici & Belvederi da Non Perdere</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {day.panoramicViewpoints.map((vp, vIdx) => (
                            <div
                              key={vIdx}
                              className="p-3.5 rounded-2xl bg-stone-950/50 border border-stone-800/80 space-y-1.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                                  <Mountain className="w-3.5 h-3.5 text-amber-400" />
                                  {vp.name}
                                </span>
                                {vp.elevation && (
                                  <span className="text-[10px] text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded">
                                    {vp.elevation}
                                  </span>
                                )}
                              </div>

                              {vp.bestTime && (
                                <span className="text-[10px] text-amber-400 block font-medium">
                                  ⏰ Momento ideale: {vp.bestTime}
                                </span>
                              )}

                              <p className="text-xs text-stone-300 leading-relaxed">
                                {vp.description}
                              </p>

                              {vp.photoTip && (
                                <p className="text-[11px] text-stone-400 italic">
                                  💡 {vp.photoTip}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Evening & Dinner Suggestion */}
                    <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-start gap-2.5 text-xs">
                      <BedDouble className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">Sera & Cena Consigliata:</span>
                        <span className="text-stone-300">{day.eveningTip}</span>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Comprehensive Summary Strip */}
        <section className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4 text-center text-xs text-stone-400">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-white">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Itinerario Completo Pronto per il Viaggio</span>
          </div>

          <p className="max-w-xl mx-auto leading-relaxed">
            Tutti i 15 giorni sono stati pianificati con tappe bilanciate per alternare trasferimenti panoramici, 
            visite nei grandi parchi e tempi di riposo per i compagni di viaggio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              type="button"
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold transition-colors cursor-pointer"
            >
              ↑ Torna all'inizio dell'itinerario
            </button>

            <button
              onClick={onBackToSlides}
              type="button"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Torna alla Presentazione a Slide
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
