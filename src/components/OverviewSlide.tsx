import React, { useState } from 'react';
import { ITINERARY_STOPS, TRIP_META } from '../data/itineraryData';
import { InteractiveMap } from './InteractiveMap';
import { POI } from '../types';
import { Compass, Calendar, MapPin, ArrowRight, Car, Sparkles, Mountain, Clock, Navigation, FileText } from 'lucide-react';

interface OverviewSlideProps {
  onGoToParkSlide: (parkId: string) => void;
  onOpenFullItinerary?: () => void;
}

export const OverviewSlide: React.FC<OverviewSlideProps> = ({ 
  onGoToParkSlide,
  onOpenFullItinerary,
}) => {
  const [selectedStopId, setSelectedStopId] = useState<string>('grand_canyon');

  // Map center framing Los Angeles to Monument Valley and Zion
  const southwestCenter: [number, number] = [35.9000, -114.5000];

  // Convert stops to POI format for the map
  const stopPOIs: POI[] = [];

  ITINERARY_STOPS.forEach((stop) => {
    if (stop.subStops && stop.subStops.length > 0) {
      // Add each sub-stop as a distinct POI marker on the map!
      stop.subStops.forEach((sub) => {
        stopPOIs.push({
          id: sub.id,
          name: `${stop.day}: ${sub.name}`,
          category: sub.category === 'ghost_town' || sub.category === 'western_town' ? 'viewpoint' : sub.category === 'diner' ? 'lodge' : 'scenic_drive',
          lat: sub.lat,
          lng: sub.lng,
          shortDesc: `${sub.location}${sub.kmToNext ? ` • Prox tratta: +${sub.kmToNext} km (${sub.drivingTimeToNext})` : ' • Pernottamento'}`,
          description: `${sub.description}${sub.kmToNext ? ` • Distanza alla tappa successiva (${sub.nextStopName}): ${sub.kmToNext} km in circa ${sub.drivingTimeToNext}.` : ''}`,
          photoUrl: sub.photoUrl,
          difficulty: sub.kmToNext ? `+${sub.kmToNext} km (${sub.drivingTimeToNext})` : 'Pernottamento',
        });
      });
    } else {
      let photo = 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80';
      if (stop.id === 'la_start' || stop.id === 'la_departure') {
        photo = 'https://images.unsplash.com/photo-1534190760635-2587f950438e?auto=format&fit=crop&w=800&q=80'; // Santa Monica Pier
      } else if (stop.id === 'la_return') {
        photo = 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80'; // Los Angeles skyline / Griffith
      } else if (stop.id === 'monument_valley') {
        photo = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';
      } else if (stop.id === 'bryce_canyon') {
        photo = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
      } else if (stop.id === 'death_valley') {
        photo = 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80';
      }

      stopPOIs.push({
        id: stop.id,
        name: `${stop.day}: ${stop.name}`,
        category: stop.id === 'monument_valley' ? 'photo_spot' : stop.id === 'grand_canyon' || stop.id === 'bryce_canyon' ? 'viewpoint' : 'scenic_drive',
        lat: stop.lat,
        lng: stop.lng,
        shortDesc: `${stop.state} • Prog. Totale: ${stop.kmFromStart} km${stop.kmToNext && stop.kmToNext > 0 ? ` • Prox tratta: +${stop.kmToNext} km (${stop.drivingTimeToNext})` : ' • Traguardo finale'}`,
        description: `Tappe principali del giorno: ${stop.highlights.join(' • ')}${stop.kmToNext && stop.kmToNext > 0 ? ` • Prossima tappa (${stop.nextStopName}): +${stop.kmToNext} km in circa ${stop.drivingTimeToNext}.` : ''}`,
        photoUrl: photo,
        difficulty: stop.kmToNext && stop.kmToNext > 0 ? `+${stop.kmToNext} km prox tappa` : 'Traguardo finale',
      });
    }
  });

  // Southwest Grand Loop polyline route coordinates (closed loop through all real stops)
  const loopCoordinates: [number, number][] = [
    [34.0195, -118.4912], // LA Santa Monica Pier
    [34.9697, -116.8647], // Calico Ghost Town (Yermo)
    [34.9037, -116.9147], // Peggy Sue's 50's Diner
    [35.0261, -114.3836], // Oatman (Historic Route 66 Sitgreaves Pass)
    [35.2495, -112.1910], // Williams, Arizona
    [36.0544, -112.1401], // Grand Canyon South Rim
    [36.9980, -110.0985], // Monument Valley
    [36.9147, -111.4558], // Page & Antelope Canyon
    [37.5930, -112.1871], // Bryce Canyon
    [37.2982, -113.0263], // Zion National Park
    [36.1699, -115.1398], // Valley of Fire / Las Vegas Strip
    [36.5323, -116.9325], // Death Valley
    [34.1184, -118.3004], // Griffith Observatory & Hollywood
    [33.9416, -118.4085], // Los Angeles LAX Airport
    [34.0195, -118.4912], // Closed back at Santa Monica
  ];

  // Resolve active stop (whether selectedStopId is a main stop or a sub-stop like calico_ghost_town)
  const activeStop = ITINERARY_STOPS.find(
    (s) => s.id === selectedStopId || s.subStops?.some((sub) => sub.id === selectedStopId)
  ) || ITINERARY_STOPS[1];

  const activePOI = stopPOIs.find((p) => p.id === selectedStopId);
  const currentMapCenter: [number, number] = activePOI
    ? [activePOI.lat, activePOI.lng]
    : activeStop
    ? [activeStop.lat, activeStop.lng]
    : southwestCenter;

  // Map stop ID to park slide ID
  const getParkSlideIdForStop = (stopId: string) => {
    switch (stopId) {
      case 'grand_canyon':
        return 'grand-canyon';
      case 'monument_valley':
        return 'monument-valley';
      case 'page_antelope':
        return 'page-antelope';
      case 'bryce_canyon':
        return 'bryce-canyon';
      case 'zion':
        return 'zion-national-park';
      case 'death_valley':
        return 'death-valley';
      default:
        return 'grand-canyon';
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-4 sm:p-6 max-w-7xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Itinerario Completo ad Anello</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Il Grande Anello dei Parchi (The Grand Loop)
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            Partenza e arrivo a Los Angeles (California): un itinerario leggendario ad anello senza tempi morti, attraversando la storica Route 66, i 7 parchi più iconici d'America, la Death Valley e il ritorno sull'Oceano Pacifico.
          </p>
        </div>

        {/* Overview Stats Badges & Full Itinerary CTA */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
          {onOpenFullItinerary && (
            <button
              onClick={onOpenFullItinerary}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-md"
              title="Apri l'Itinerario Completo (Giorno 1 - 15) in formato testo continuo"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Itinerario Completo (G1-G15)</span>
            </button>
          )}

          <div className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-center">
            <span className="text-[10px] text-stone-400 uppercase block">Totale</span>
            <span className="text-xs sm:text-sm font-bold text-amber-400">{TRIP_META.totalKm}</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-center">
            <span className="text-[10px] text-stone-400 uppercase block">Durata</span>
            <span className="text-xs sm:text-sm font-bold text-amber-400">{TRIP_META.durationDays}</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-center">
            <span className="text-[10px] text-stone-400 uppercase block">Stati</span>
            <span className="text-xs sm:text-sm font-bold text-amber-400">4 (CA, AZ, UT, NV)</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map + Day by Day Stops List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-[460px]">
        {/* Map Container (7 columns) */}
        <div className="lg:col-span-7 flex flex-col min-h-[350px] lg:min-h-full">
          <InteractiveMap
            center={currentMapCenter}
            zoom={7}
            pointsOfInterest={stopPOIs}
            routePolyline={loopCoordinates}
            selectedPOIId={selectedStopId}
            onSelectPOI={(poi) => setSelectedStopId(poi.id)}
            heightClass="h-[340px] sm:h-[400px] lg:h-full"
          />
        </div>

        {/* Timeline & Stops List (5 columns) */}
        <div className="lg:col-span-5 flex flex-col bg-stone-900/90 rounded-2xl border border-stone-800 p-4 sm:p-5 backdrop-blur-md overflow-hidden shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-3">
            <h3 className="text-sm font-bold text-stone-200 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Programma Giorno per Giorno</span>
            </h3>
            <span className="text-xs text-stone-400">Seleziona una tappa</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
            {ITINERARY_STOPS.map((stop) => {
              const isSelected = selectedStopId === stop.id || stop.subStops?.some((sub) => sub.id === selectedStopId);
              const hasSlide = ['grand_canyon', 'monument_valley', 'page_antelope', 'bryce_canyon', 'zion', 'death_valley'].includes(stop.id);

              return (
                <div
                  key={stop.id}
                  onClick={() => setSelectedStopId(stop.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                      : 'bg-stone-950/40 hover:bg-stone-800/60 border-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                        {stop.day}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-100">{stop.name}</h4>
                    </div>
                    <span className="text-[10px] text-stone-400 font-medium px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                      {stop.state}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {stop.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-stone-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Km Breakdown: Progressive Total from start & Next-Leg Distance */}
                  <div className="mt-2.5 pt-2 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-stone-300 font-mono">
                      <Car className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-stone-400 text-[10.5px]">Totale inizio:</span>
                      <span className="font-bold text-amber-300">{stop.kmFromStart} km</span>
                    </div>

                    {stop.kmToNext && stop.kmToNext > 0 ? (
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/35 text-amber-300 font-mono text-[11px] shadow-sm">
                        <ArrowRight className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="text-stone-400 text-[10.5px]">Prox tappa:</span>
                        <span className="font-extrabold text-white">+{stop.kmToNext} km</span>
                        {stop.drivingTimeToNext && (
                          <span className="text-amber-200/90 font-sans text-[10px] ml-0.5">({stop.drivingTimeToNext})</span>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10.5px] font-semibold">
                        <span>🏁 Traguardo finale road trip</span>
                      </div>
                    )}
                  </div>

                  {/* If this stop has dedicated sub-stops (like Day 2 Route 66), display rich cards */}
                  {stop.subStops && stop.subStops.length > 0 && isSelected && (
                    <div className="mt-3 pt-2.5 border-t border-amber-500/20 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>4 Tappe del Giorno (distanze tratta per tratta):</span>
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stop.subStops.map((sub, idx) => {
                          const isSubSelected = selectedStopId === sub.id;
                          return (
                            <div
                              key={sub.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedStopId(sub.id);
                              }}
                              className={`p-2 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                                isSubSelected
                                  ? 'bg-amber-500/30 border-amber-400 ring-1 ring-amber-400 shadow-md'
                                  : 'bg-stone-900/90 hover:bg-stone-850 border-stone-700/70'
                              }`}
                            >
                              <div className="flex items-start gap-2 mb-1.5">
                                <img
                                  src={sub.photoUrl}
                                  alt={sub.name}
                                  referrerPolicy="no-referrer"
                                  className="w-11 h-11 rounded-md object-cover flex-shrink-0 border border-stone-700"
                                />
                                <div className="min-w-0">
                                  <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-500/25 text-amber-300 inline-block mb-0.5">
                                    Tappa {idx + 1}
                                  </span>
                                  <h5 className="text-xs font-bold text-stone-100 leading-tight truncate">{sub.name}</h5>
                                  <span className="text-[10px] text-stone-400 block truncate">{sub.location}</span>
                                </div>
                              </div>
                              <p className="text-[10px] text-stone-300 line-clamp-2 leading-relaxed">{sub.description}</p>
                              <div className="mt-2 pt-1 border-t border-stone-800 flex items-center justify-between text-[10px]">
                                <span className="text-amber-300/90 font-medium truncate">{sub.tag}</span>
                                {sub.kmToNext && sub.kmToNext > 0 ? (
                                  <span className="px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-200 border border-amber-500/35 font-mono text-[9.5px] flex items-center gap-1 font-bold flex-shrink-0">
                                    <ArrowRight className="w-2.5 h-2.5 text-amber-400" />
                                    <span>+{sub.kmToNext} km</span>
                                    <span className="text-stone-300 font-sans">({sub.drivingTimeToNext})</span>
                                  </span>
                                ) : (
                                  <span className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300 font-mono text-[9.5px] flex items-center gap-1">
                                    <span>Pernottamento Route 66</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* If this stop has a dedicated park slide, offer direct jump */}
                  {hasSlide && isSelected && (
                    <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-amber-300/90 font-medium">Vuoi vedere la presentazione dettagliata?</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onGoToParkSlide(getParkSlideIdForStop(stop.id));
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>Apri Slide Parco</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Stop Quick Callout */}
          <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-stone-300 flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-amber-300">
                  Tappa attiva: {activePOI ? activePOI.name : `${activeStop.name} (${activeStop.state})`}
                </span>
                {activeStop.kmToNext && activeStop.kmToNext > 0 && (
                  <span className="px-2 py-0.5 rounded bg-amber-500/25 border border-amber-500/40 text-amber-200 font-mono text-[10.5px] font-bold inline-flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                    Tratta successiva: +{activeStop.kmToNext} km ({activeStop.drivingTimeToNext})
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-400 mt-1">
                {activePOI
                  ? activePOI.shortDesc
                  : `Progresso totale: ${activeStop.kmFromStart} km${activeStop.kmToNext && activeStop.kmToNext > 0 ? ` • Distanza alla tappa successiva (${activeStop.nextStopName}): ${activeStop.kmToNext} km in circa ${activeStop.drivingTimeToNext}` : ' • Ultima tappa del viaggio'}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
