import React, { useState } from 'react';
import { ParkSlide, POI, PhotoItem } from '../types';
import { InteractiveMap } from './InteractiveMap';
import { ParkDetailPanel } from './ParkDetailPanel';
import { MapPin, Sparkles, Compass, Maximize2, Minimize2 } from 'lucide-react';

interface ParkSlideViewProps {
  slide: ParkSlide;
  onOpenPhoto: (photo: PhotoItem) => void;
}

export const ParkSlideView: React.FC<ParkSlideViewProps> = ({ slide, onOpenPhoto }) => {
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(slide.pointsOfInterest[0] || null);
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const handleSelectPOI = (poi: POI) => {
    setSelectedPOI(poi);
  };

  return (
    <div className="w-full h-full flex flex-col p-3 sm:p-5 max-w-7xl mx-auto overflow-y-auto pb-24 sm:pb-24">
      {/* Slide Header */}
      <header className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 uppercase tracking-wider">
              {slide.dayLabel}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 text-amber-300">
              {slide.state}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Mappa & Marker Interattivi</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-amber-300/90 mt-0.5">
          {slide.subtitle}
        </p>
      </header>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-[460px]">
        {/* Map Column */}
        <div
          className={`transition-all duration-300 flex flex-col ${
            isMapExpanded ? 'lg:col-span-12' : 'lg:col-span-7'
          }`}
        >
          <InteractiveMap
            center={selectedPOI ? [selectedPOI.lat, selectedPOI.lng] : slide.center}
            zoom={slide.zoom}
            pointsOfInterest={slide.pointsOfInterest}
            routePolyline={slide.routePolyline}
            selectedPOIId={selectedPOI?.id}
            onSelectPOI={handleSelectPOI}
            heightClass={isMapExpanded ? 'h-[500px] sm:h-[600px]' : 'h-[320px] sm:h-[400px] lg:h-full'}
            isExpanded={isMapExpanded}
            onToggleExpand={() => setIsMapExpanded(!isMapExpanded)}
          />
        </div>

        {/* Details & POIs Column */}
        {!isMapExpanded && (
          <div className="lg:col-span-5 flex flex-col min-h-[380px] lg:min-h-full">
            <ParkDetailPanel
              slide={slide}
              selectedPOI={selectedPOI}
              onSelectPOI={handleSelectPOI}
              onOpenPhoto={onOpenPhoto}
            />
          </div>
        )}
      </div>
    </div>
  );
};
