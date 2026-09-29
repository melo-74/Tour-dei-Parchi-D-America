export type POICategory = 'viewpoint' | 'trail' | 'sunset_spot' | 'scenic_drive' | 'photo_spot' | 'lodge';

export interface POI {
  id: string;
  name: string;
  category: POICategory;
  lat: number;
  lng: number;
  shortDesc: string;
  description: string;
  photoUrl: string;
  elevation?: string;
  difficulty?: string;
  duration?: string;
  bestTime?: string;
  companionsTip?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  location: string;
  tag?: string;
}

export interface CompanionNote {
  title: string;
  text: string;
  type: 'tip' | 'warning' | 'must_do' | 'time';
}

export interface ParkSlide {
  id: string;
  slideNumber: number;
  dayLabel: string;
  title: string;
  subtitle: string;
  state: string;
  heroImage: string;
  emotionalIntro: string;
  overviewSummary: string;
  center: [number, number]; // [lat, lng]
  zoom: number;
  routePolyline?: [number, number][];
  pointsOfInterest: POI[];
  photos: PhotoItem[];
  companionNotes: CompanionNote[];
  quickStats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

export interface ItinerarySubStop {
  id: string;
  name: string;
  location: string;
  category: 'ghost_town' | 'diner' | 'western_town' | 'historic_town' | 'scenic';
  description: string;
  photoUrl: string;
  lat: number;
  lng: number;
  tag?: string;
  kmToNext?: number;
  drivingTimeToNext?: string;
  nextStopName?: string;
}

export interface ItineraryStop {
  id: string;
  day: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  kmFromStart: number;
  kmToNext?: number;
  drivingTimeToNext?: string;
  nextStopName?: string;
  highlights: string[];
  subStops?: ItinerarySubStop[];
}
