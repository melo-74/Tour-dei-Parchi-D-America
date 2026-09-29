import React, { useState } from 'react';
import { ParkSlide, POI, PhotoItem } from '../types';
import { MapPin, Camera, AlertCircle, Info, Clock, Mountain, Award, Sparkles } from 'lucide-react';

interface ParkDetailPanelProps {
  slide: ParkSlide;
  selectedPOI: POI | null;
  onSelectPOI: (poi: POI) => void;
  onOpenPhoto: (photo: PhotoItem) => void;
}

export const ParkDetailPanel: React.FC<ParkDetailPanelProps> = ({
  slide,
  selectedPOI,
  onSelectPOI,
  onOpenPhoto,
}) => {
  const [activeTab, setActiveTab] = useState<'points' | 'photos' | 'companion_tips' | 'stats'>('points');

  return (
    <div className="flex flex-col h-full bg-stone-900/90 rounded-2xl border border-stone-800 backdrop-blur-md overflow-hidden shadow-xl">
      {/* Tab Navigation */}
      <div className="flex items-center border-b border-stone-800 bg-stone-950/40 p-1.5 gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab('points')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'points'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Punti di Interesse ({slide.pointsOfInterest.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('photos')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'photos'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Foto & Panorami ({slide.photos.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('companion_tips')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'companion_tips'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          <Info className="w-3.5 h-3.5" />
          <span>Note per il Gruppo</span>
        </button>

        <button
          onClick={() => setActiveTab('stats')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'stats'
              ? 'bg-amber-500 text-stone-950 shadow-md'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          <Mountain className="w-3.5 h-3.5" />
          <span>Dati & Quota</span>
        </button>
      </div>

      {/* Tab Content Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        {/* TAB: Points of Interest */}
        {activeTab === 'points' && (
          <div className="space-y-3.5">
            <div className="text-xs text-stone-400 mb-2 flex items-center justify-between">
              <span>Seleziona un punto per centrarlo sulla mappa:</span>
              <span className="text-amber-400 font-medium">Marker cliccabili</span>
            </div>

            {slide.pointsOfInterest.map((poi) => {
              const isSelected = selectedPOI?.id === poi.id;
              return (
                <div
                  key={poi.id}
                  id={`poi-card-${poi.id}`}
                  onClick={() => onSelectPOI(poi)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/60 shadow-lg ring-1 ring-amber-500/30'
                      : 'bg-stone-900/60 hover:bg-stone-800/70 border-stone-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-stone-700/60">
                        <img
                          src={poi.photoUrl}
                          alt={poi.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          <h4 className="text-sm font-bold text-stone-100">{poi.name}</h4>
                          {poi.difficulty && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-800 border border-stone-700 text-amber-300 font-medium">
                              {poi.difficulty}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed mb-2">{poi.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-stone-400">
                          {poi.elevation && (
                            <span className="flex items-center gap-1 text-amber-400/90 font-medium">
                              <Mountain className="w-3 h-3" />
                              {poi.elevation}
                            </span>
                          )}
                          {poi.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {poi.duration}
                            </span>
                          )}
                          {poi.bestTime && (
                            <span className="flex items-center gap-1 text-stone-300">
                              <Sparkles className="w-3 h-3 text-amber-400" />
                              {poi.bestTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Companion Tip Box inside POI */}
                  {poi.companionsTip && (
                    <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-start gap-2 text-xs text-amber-200/90 bg-amber-500/5 p-2 rounded-lg">
                      <span className="text-amber-400 font-bold text-xs flex-shrink-0">💡 Consiglio:</span>
                      <span className="text-stone-300 leading-snug">{poi.companionsTip}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB: Photos & Sceneries */}
        {activeTab === 'photos' && (
          <div>
            <p className="text-xs text-stone-400 mb-3">Clicca su qualsiasi foto per ingrandirla a pieno schermo con note fotografiche:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {slide.photos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => onOpenPhoto(photo)}
                  className="group relative h-40 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer shadow-md hover:border-amber-500/50 transition-all"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">{photo.location}</span>
                    <p className="text-xs font-medium text-stone-100 line-clamp-1">{photo.caption}</p>
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-stone-950/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: Companion Notes */}
        {activeTab === 'companion_tips' && (
          <div className="space-y-3.5">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Consigli pratici, accorgimenti meteo e logistica studiati per il nostro gruppo di viaggio.</span>
            </div>

            {slide.companionNotes.map((note, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-stone-800 bg-stone-900/60 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  {note.type === 'warning' ? (
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  ) : note.type === 'must_do' ? (
                    <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  ) : (
                    <Info className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  )}
                  <h4 className="text-sm font-semibold text-stone-100">{note.title}</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed pl-6">{note.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* TAB: Stats & Overview */}
        {activeTab === 'stats' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2.5">
              {slide.quickStats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-center">
                  <span className="text-[10px] uppercase text-stone-400 block mb-1">{stat.label}</span>
                  <span className="text-base font-bold text-amber-400 block">{stat.value}</span>
                  {stat.sublabel && <span className="text-[10px] text-stone-500">{stat.sublabel}</span>}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-stone-800 bg-stone-950/40 space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Sintesi del Percorso</h4>
              <p className="text-xs text-stone-300 leading-relaxed">{slide.overviewSummary}</p>
            </div>

            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
              <p className="italic text-xs text-stone-300 leading-relaxed">
                "{slide.emotionalIntro}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
