import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { POI, POICategory } from '../types';
import { Layers, Maximize2, Minimize2, ZoomIn, ZoomOut, Compass, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  center: [number, number];
  zoom: number;
  pointsOfInterest: POI[];
  routePolyline?: [number, number][];
  selectedPOIId?: string | null;
  onSelectPOI: (poi: POI) => void;
  heightClass?: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

// Icon generator for different POI types
const getPoiCategoryIcon = (category: POICategory) => {
  switch (category) {
    case 'viewpoint':
      return { bg: '#f59e0b', stroke: '#d97706', symbol: '👁️' };
    case 'trail':
      return { bg: '#10b981', stroke: '#059669', symbol: '🥾' };
    case 'sunset_spot':
      return { bg: '#ec4899', stroke: '#db2777', symbol: '🌅' };
    case 'scenic_drive':
      return { bg: '#38bdf8', stroke: '#0284c7', symbol: '🚗' };
    case 'photo_spot':
      return { bg: '#eab308', stroke: '#ca8a04', symbol: '📸' };
    default:
      return { bg: '#f59e0b', stroke: '#d97706', symbol: '📍' };
  }
};

const MAP_LAYERS = {
  voyager: {
    name: 'Stile Viaggio',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CartoDB & OpenStreetMap'
  },
  satellite: {
    name: 'Satellite Canyon',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri & Earthstar Geographics'
  },
  dark: {
    name: 'Notturno Deserto',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CartoDB Dark Matter'
  }
};

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  center,
  zoom,
  pointsOfInterest,
  routePolyline,
  selectedPOIId,
  onSelectPOI,
  heightClass = 'h-[360px] sm:h-[420px] lg:h-full',
  isExpanded = false,
  onToggleExpand,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  const polylineRef = useRef<L.Polyline | null>(null);

  const [activeLayerKey, setActiveLayerKey] = useState<'voyager' | 'satellite' | 'dark'>('voyager');
  const [showLayerMenu, setShowLayerMenu] = useState(false);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: center,
      zoom: zoom,
      zoomControl: false, // custom controls
      attributionControl: false,
    });

    const currentLayer = MAP_LAYERS[activeLayerKey];
    const tileLayer = L.tileLayer(currentLayer.url, {
      maxZoom: 18,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = tileLayer;
    mapInstanceRef.current = map;

    // Invalidate size after mount in case of flex/grid animation
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Layer when toggled
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (tileLayerRef.current) {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
    }
    const layerConfig = MAP_LAYERS[activeLayerKey];
    tileLayerRef.current = L.tileLayer(layerConfig.url, {
      maxZoom: 18,
      subdomains: 'abcd',
    }).addTo(mapInstanceRef.current);
  }, [activeLayerKey]);

  // Update Center and Zoom smoothly when props change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(center, zoom, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [center[0], center[1], zoom]);

  // Update Polyline Route
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (polylineRef.current) {
      mapInstanceRef.current.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    if (routePolyline && routePolyline.length > 1) {
      const line = L.polyline(routePolyline, {
        color: '#f59e0b',
        weight: 4,
        opacity: 0.85,
        dashArray: '8, 8',
        lineCap: 'round',
      }).addTo(mapInstanceRef.current);

      polylineRef.current = line;
    }
  }, [routePolyline]);

  // Update Markers
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Remove old markers
    Object.values(markersRef.current).forEach((m) => map.removeLayer(m));
    markersRef.current = {};

    pointsOfInterest.forEach((poi) => {
      const isSelected = selectedPOIId === poi.id;
      const { bg, stroke, symbol } = getPoiCategoryIcon(poi.category);

      const customIcon = L.divIcon({
        className: 'custom-poi-marker',
        html: `
          <div style="
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${isSelected ? '38px' : '32px'};
            height: ${isSelected ? '38px' : '32px'};
            background-color: ${bg};
            border: 2px solid ${isSelected ? '#ffffff' : stroke};
            border-radius: 9999px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            font-size: ${isSelected ? '18px' : '15px'};
            cursor: pointer;
            transition: all 0.2s ease-out;
            transform: ${isSelected ? 'scale(1.15)' : 'scale(1)'};
          ">
            <span>${symbol}</span>
            <div style="
              position: absolute;
              bottom: -6px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 6px solid ${bg};
            "></div>
          </div>
        `,
        iconSize: [32, 38],
        iconAnchor: [16, 38],
        popupAnchor: [0, -38],
      });

      const marker = L.marker([poi.lat, poi.lng], { icon: customIcon }).addTo(map);

      // Popup content with preview
      const popupHtml = `
        <div style="width: 240px; font-family: inherit;">
          <div style="height: 120px; width: 100%; overflow: hidden; position: relative;">
            <img 
              src="${poi.photoUrl}" 
              alt="${poi.name}" 
              style="width: 100%; height: 100%; object-fit: cover;" 
              referrerpolicy="no-referrer"
            />
            <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #f59e0b; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; text-transform: uppercase;">
              ${poi.difficulty || 'Tappa'}
            </div>
          </div>
          <div style="padding: 12px 14px; background: #1c1917;">
            <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #f5f5f4;">${poi.name}</h4>
            <p style="margin: 0 0 8px; font-size: 12px; color: #d6d3d1; line-height: 1.4;">${poi.shortDesc}</p>
            ${poi.elevation ? `<div style="font-size: 11px; color: #f59e0b; margin-bottom: 8px;">⛰️ Quota: ${poi.elevation}</div>` : ''}
            <div style="font-size: 11px; color: #a8a29e; font-style: italic;">Clicca per visualizzare i dettagli completi</div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        className: 'custom-popup',
        closeButton: true,
        maxWidth: 260,
      });

      marker.on('click', () => {
        onSelectPOI(poi);
      });

      markersRef.current[poi.id] = marker;
    });
  }, [pointsOfInterest, selectedPOIId]);

  // Center on selected POI when changed
  useEffect(() => {
    if (!selectedPOIId || !markersRef.current[selectedPOIId] || !mapInstanceRef.current) return;
    const marker = markersRef.current[selectedPOIId];
    const latLng = marker.getLatLng();
    mapInstanceRef.current.flyTo(latLng, Math.max(14, mapInstanceRef.current.getZoom()), {
      duration: 1.0,
    });
    marker.openPopup();
  }, [selectedPOIId]);

  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleResetView = () => {
    mapInstanceRef.current?.flyTo(center, zoom, { duration: 1.0 });
  };

  return (
    <div className={`relative w-full ${heightClass} rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl transition-all duration-300`}>
      {/* Map Container Element */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Floating Map Controls Top-Right */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {/* Layer Selector Dropdown */}
        <div className="relative">
          <button
            id="map-layer-selector-btn"
            onClick={() => setShowLayerMenu(!showLayerMenu)}
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 text-stone-200 text-xs font-medium shadow-lg backdrop-blur-md transition-colors"
            title="Cambia stile mappa"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{MAP_LAYERS[activeLayerKey].name}</span>
          </button>

          {showLayerMenu && (
            <div className="absolute right-0 mt-1 w-44 rounded-xl bg-stone-900/95 border border-stone-700 shadow-2xl backdrop-blur-md overflow-hidden z-20 py-1">
              {(Object.keys(MAP_LAYERS) as (keyof typeof MAP_LAYERS)[]).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveLayerKey(key);
                    setShowLayerMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                    activeLayerKey === key
                      ? 'bg-amber-500/20 text-amber-300 font-semibold'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <span>{MAP_LAYERS[key].name}</span>
                  {activeLayerKey === key && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Zoom In & Out */}
        <div className="flex flex-col rounded-xl bg-stone-900/90 border border-stone-700/80 shadow-lg backdrop-blur-md overflow-hidden">
          <button
            id="map-zoom-in-btn"
            onClick={handleZoomIn}
            className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors border-b border-stone-800"
            title="Ingrandisci"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="map-zoom-out-btn"
            onClick={handleZoomOut}
            className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
            title="Rimpicciolisci"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Reset View */}
        <button
          id="map-reset-view-btn"
          onClick={handleResetView}
          className="p-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 text-stone-300 hover:text-amber-400 shadow-lg backdrop-blur-md transition-colors"
          title="Ripristina visuale della tappa"
        >
          <Navigation className="w-4 h-4" />
        </button>

        {/* Fullscreen Expand Toggle */}
        {onToggleExpand && (
          <button
            id="map-toggle-expand-btn"
            onClick={onToggleExpand}
            className="p-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 text-stone-300 hover:text-white shadow-lg backdrop-blur-md transition-colors"
            title={isExpanded ? 'Riduci mappa' : 'Espandi mappa a tutto schermo'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Legend Top-Left */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-900/85 border border-stone-700/60 backdrop-blur-md text-[11px] text-stone-300 shadow-md">
        <Compass className="w-3.5 h-3.5 text-amber-400" />
        <span>Punti Interattivi: Clicca su un marker per esplorarlo</span>
      </div>

      {/* Polyline indicator */}
      {routePolyline && (
        <div className="absolute bottom-3 left-4 z-10 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded-lg bg-stone-900/80 border border-amber-500/30 backdrop-blur-md text-[11px] text-amber-300">
          <span className="w-3 h-0.5 border-t-2 border-dashed border-amber-400" />
          <span>Percorso Panoramico Suggerito</span>
        </div>
      )}
    </div>
  );
};
