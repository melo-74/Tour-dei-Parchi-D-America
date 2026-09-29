import monumentValleyHeroImg from '../assets/images/monument_valley_road_1789889999986.jpg';
import grandCanyonSunsetImg from '../assets/images/grand_canyon_sunset_1789890035441.jpg';
import bryceCanyonHoodoosImg from '../assets/images/bryce_canyon_hoodoos_1789890049706.jpg';
import { ParkSlide, ItineraryStop } from '../types';

export { monumentValleyHeroImg, grandCanyonSunsetImg, bryceCanyonHoodoosImg };

export const TRIP_META = {
  title: "ON THE ROAD: I GRANDI PARCHI DEL WEST",
  subtitle: "Partenza & Arrivo da Los Angeles • 15 Giorni, 4 Stati, Il Grande Anello del Southwest",
  emotionalDescription: "Dall'Oceano Pacifico di Santa Monica e le luci di Los Angeles, attraverso la leggendaria Route 66 e il deserto del Mojave, fino ai colossali canyon rossi dell'Arizona e dello Utah, il silenzio della Death Valley e il ritorno nella Città degli Angeli. Un'avventura epica studiata per essere vissuta insieme chilometro dopo chilometro.",
  datesSuggestion: "Maggio - Giugno oppure Settembre - Ottobre (Meteo Ideale)",
  totalKm: "~3.500 km",
  totalParks: "7 Parchi Nazionali + Riserve Tribali",
  durationDays: "15 Giorni",
  states: ["California", "Arizona", "Utah", "Nevada"],
};

export const ITINERARY_STOPS: ItineraryStop[] = [
  {
    id: "la_start",
    day: "Giorno 1",
    name: "Arrivo a Los Angeles (LAX) & Santa Monica",
    state: "California",
    lat: 34.0195,
    lng: -118.4912,
    kmFromStart: 0,
    kmToNext: 690,
    drivingTimeToNext: "~7 ore (con soste Far West)",
    nextStopName: "Calico, Oatman & Williams (Route 66)",
    highlights: [
      "Atterraggio a Los Angeles LAX & Ritiro SUV 4x4",
      "Tramonto sull'Oceano Pacifico al Santa Monica Pier (cartello Route 66)",
      "Prima cena californiana e pernottamento a LA per smaltire il fuso"
    ]
  },
  {
    id: "route_66",
    day: "Giorno 2",
    name: "Route 66: Calico Ghost Town, Peggy Sue’s Diner, Oatman & Williams",
    state: "California / Arizona",
    lat: 35.0261,
    lng: -114.3836,
    kmFromStart: 690,
    kmToNext: 90,
    drivingTimeToNext: "~1h 10m",
    nextStopName: "Grand Canyon South Rim",
    highlights: [
      "Calico Ghost Town (città fantasma dell'argento 1881)",
      "Peggy Sue’s 50's Diner (pranzo vintage anni '50)",
      "Oatman (borgo western con asini selvatici liberi)",
      "Williams (la capitale della Route 66 e pernottamento)"
    ],
    subStops: [
      {
        id: "calico_ghost_town",
        name: "Calico Ghost Town",
        location: "Yermo / Deserto del Mojave, California",
        category: "ghost_town",
        description: "Autentica città mineraria del Far West fondata nel 1881 durante la corsa all'argento. Si passeggia tra edifici in legno d'epoca, saloon, la vecchia Maggie Mine e botteghe storiche restaurate con vista mozzafiato sulle colline aride del Mojave.",
        photoUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
        lat: 34.9697,
        lng: -116.8647,
        tag: "Far West 1881",
        kmToNext: 6,
        drivingTimeToNext: "8 min",
        nextStopName: "Peggy Sue’s 50's Diner"
      },
      {
        id: "peggy_sues_diner",
        name: "Peggy Sue’s 50's Diner",
        location: "Yermo (I-15 Exit Ghost Town Rd), California",
        category: "diner",
        description: "Il diner vintage per eccellenza costruito originariamente nel 1954 nel cuore del deserto. Jukebox funzionanti, cameriere in uniforme retrò, milk-shake monumentali, cheeseburger leggendari e un'incredibile collezione di memorabilia di Elvis, Marilyn Monroe e James Dean.",
        photoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        lat: 34.9037,
        lng: -116.9147,
        tag: "Pranzo Vintage Anni '50",
        kmToNext: 254,
        drivingTimeToNext: "2h 45m",
        nextStopName: "Oatman (Historic Route 66)"
      },
      {
        id: "oatman_arizona",
        name: "Oatman (Historic Route 66)",
        location: "Black Mountains, Mohave County, Arizona",
        category: "western_town",
        description: "Si risalgono i tornanti panoramici dello storico Sitgreaves Pass per raggiungere questo borgo minerario fermo all'epoca della corsa all'oro. Celebre per i docili asini selvatici ('wild burros') che passeggiano liberi in mezzo alla strada e per il saloon dell'Oatman Hotel.",
        photoUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
        lat: 35.0261,
        lng: -114.3836,
        tag: "Route 66 & Asini Selvatici",
        kmToNext: 205,
        drivingTimeToNext: "2h 20m",
        nextStopName: "Williams (Route 66)"
      },
      {
        id: "williams_arizona",
        name: "Williams (Gateway to Grand Canyon)",
        location: "Coconino County, Arizona",
        category: "historic_town",
        description: "La celebre cittadina della Route 66 e porta d'accesso al Grand Canyon. Un'esplosione di insegne al neon d'epoca, diner storici, negozi di artigianato western e il capolinea della storica Grand Canyon Railway. Perfetta per il pernottamento prima della visita al parco.",
        photoUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        lat: 35.2495,
        lng: -112.1910,
        tag: "Cena & Pernottamento Route 66",
        kmToNext: 90,
        drivingTimeToNext: "1h 10m",
        nextStopName: "Grand Canyon South Rim"
      }
    ]
  },
  {
    id: "grand_canyon",
    day: "Giorni 3 - 4",
    name: "Grand Canyon South Rim",
    state: "Arizona",
    lat: 36.0544,
    lng: -112.1401,
    kmFromStart: 780,
    kmToNext: 290,
    drivingTimeToNext: "~3h 15m",
    nextStopName: "Monument Valley (US-163)",
    highlights: ["Mather Point", "Bright Angel Trail", "Tramonto a Hopi Point", "Desert View Drive"]
  },
  {
    id: "monument_valley",
    day: "Giorno 5",
    name: "Monument Valley & Navajo Nation",
    state: "Utah / Arizona",
    lat: 36.9980,
    lng: -110.0985,
    kmFromStart: 1070,
    kmToNext: 190,
    drivingTimeToNext: "~2 ore",
    nextStopName: "Page, Antelope & Lake Powell",
    highlights: ["Forrest Gump Point (US-163)", "Mittens Buttes", "Tour su sterrato con guida Navajo", "Notte sotto la via lattea"]
  },
  {
    id: "page_antelope",
    day: "Giorno 6",
    name: "Page, Antelope & Horseshoe Bend",
    state: "Arizona",
    lat: 36.9147,
    lng: -111.4558,
    kmFromStart: 1260,
    kmToNext: 250,
    drivingTimeToNext: "~2h 45m",
    nextStopName: "Bryce Canyon (Utah)",
    highlights: ["Lower Antelope Canyon", "Horseshoe Bend meandro", "Tramonto a Lake Powell", "Fasci di luce di roccia rossa"]
  },
  {
    id: "bryce_canyon",
    day: "Giorni 7 - 8",
    name: "Bryce Canyon National Park",
    state: "Utah",
    lat: 37.5930,
    lng: -112.1871,
    kmFromStart: 1510,
    kmToNext: 140,
    drivingTimeToNext: "~1h 50m",
    nextStopName: "Zion National Park",
    highlights: ["Anfiteatro naturale di Hoodoos", "Queens Garden & Navajo Loop (Wall Street)", "Alba gelida e luminosa a Sunrise Point"]
  },
  {
    id: "zion",
    day: "Giorni 9 - 10",
    name: "Zion National Park",
    state: "Utah",
    lat: 37.2982,
    lng: -113.0263,
    kmFromStart: 1650,
    kmToNext: 290,
    drivingTimeToNext: "~3 ore",
    nextStopName: "Valley of Fire & Las Vegas",
    highlights: ["The Narrows (trekking nell'acqua del fiume)", "Scout Lookout / Angels Landing", "Canyon Overlook Trail"]
  },
  {
    id: "valley_of_fire",
    day: "Giorno 11",
    name: "Valley of Fire & Sosta a Las Vegas",
    state: "Nevada",
    lat: 36.1699,
    lng: -115.1398,
    kmFromStart: 1940,
    kmToNext: 280,
    drivingTimeToNext: "~2h 30m",
    nextStopName: "Death Valley National Park",
    highlights: ["Fire Wave e rocce d'arenaria ondulate", "Sosta nella Strip di Las Vegas con cena spettacolare", "Luci del Bellagio e sosta serale"]
  },
  {
    id: "death_valley",
    day: "Giorni 12 - 13",
    name: "Death Valley National Park",
    state: "California",
    lat: 36.5323,
    lng: -116.9325,
    kmFromStart: 2220,
    kmToNext: 430,
    drivingTimeToNext: "~4h 30m",
    nextStopName: "Los Angeles & Hollywood",
    highlights: ["Badwater Basin (-86 m)", "Zabriskie Point", "Artists Palette", "Dune di sabbia di Mesquite Flat"]
  },
  {
    id: "la_return",
    day: "Giorno 14",
    name: "Rientro a Los Angeles & Notte a Hollywood",
    state: "California",
    lat: 34.1184,
    lng: -118.3004,
    kmFromStart: 2650,
    kmToNext: 70,
    drivingTimeToNext: "~1h 15m",
    nextStopName: "Venice Beach & Aeroporto LAX",
    highlights: [
      "Discesa dalla Death Valley verso la costa pacifica attraverso il Mojave",
      "Sosta vintage lungo la Route 66 (Barstow Station / Elmer's Bottle Tree)",
      "Tramonto al Griffith Observatory con vista su Los Angeles e la scritta Hollywood",
      "Cena finale del road trip per festeggiare insieme l'impresa"
    ]
  },
  {
    id: "la_departure",
    day: "Giorno 15",
    name: "Los Angeles Icons & Volo di Rientro da LAX",
    state: "California",
    lat: 33.9416,
    lng: -118.4085,
    kmFromStart: 2720,
    kmToNext: 0,
    drivingTimeToNext: "Arrivo finale / Volo per l'Italia",
    nextStopName: "Rientro a Casa",
    highlights: [
      "Mattinata a Beverly Hills e Hollywood Walk of Fame",
      "Passeggiata e pranzo a Venice Beach / Canals",
      "Riconsegna comoda del SUV all'aeroporto di Los Angeles LAX e volo per l'Italia"
    ]
  }
];

export const PARK_SLIDES: ParkSlide[] = [
  {
    id: "grand-canyon",
    slideNumber: 1,
    dayLabel: "Giorni 3 - 4",
    title: "Grand Canyon National Park",
    subtitle: "La Vertigine dell'Infinito sul South Rim",
    state: "Arizona",
    heroImage: grandCanyonSunsetImg,
    emotionalIntro: "Nessuna foto rende giustizia al primo impatto visivo con il bordo del Grand Canyon: una spaccatura colossale lunga oltre 440 chilometri e profonda più di 1.800 metri, dove il fiume Colorado ha scavato due miliardi di anni di storia della Terra.",
    overviewSummary: "Esploreremo il South Rim lungo la panoramica Desert View Drive, cammineremo lungo il Bright Angel Trail fino a scendere dentro il canyon e aspetteremo che il tramonto tinga la gola di viola, porpora e oro a Hopi Point.",
    center: [36.0544, -112.1401],
    zoom: 11,
    routePolyline: [
      [35.9880, -112.1280],
      [36.0544, -112.1401],
      [36.0610, -112.1550],
      [36.0710, -112.1750],
      [36.0420, -111.8310]
    ],
    pointsOfInterest: [
      {
        id: "gc-mather",
        name: "Mather Point",
        category: "viewpoint",
        lat: 36.0560,
        lng: -112.1077,
        shortDesc: "Il primo affaccio iconico sul canyon dal Visitor Center.",
        description: "Il balcone naturale più celebre del parco. Offre una visuale a 360 gradi sulle formazioni rocciose Vishnu Schist e sul labirinto di torri del canyon.",
        photoUrl: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
        elevation: "2.170 m s.l.m.",
        difficulty: "Facile",
        duration: "45 min",
        bestTime: "Alba o prima mattina",
        companionsTip: "Perfetto per scattare la prima foto di gruppo ufficiale senza faticare!"
      },
      {
        id: "gc-bright-angel",
        name: "Bright Angel Trail (fino a 1.5-Mile Resthouse)",
        category: "trail",
        lat: 36.0573,
        lng: -112.1438,
        shortDesc: "Trekking a tornanti che scende nel cuore del baratro.",
        description: "Uno dei sentieri più famosi del mondo. Scende lungo le pareti del canyon permettendo di toccare con mano le stratificazioni di roccia rossa. Arriveremo alla prima o seconda Resthouse per non esagerare con la risalita.",
        photoUrl: "https://images.unsplash.com/photo-1527334134484-b21880f7845c?auto=format&fit=crop&w=1200&q=80",
        elevation: "-340 m dislivello",
        difficulty: "Moderata",
        duration: "2 - 3 ore",
        bestTime: "Mattino presto per evitare il calore riflesso",
        companionsTip: "Ricordate: scendere è facoltativo, risalire è obbligatorio! Portate minimo 2 litri d'acqua e snack salati."
      },
      {
        id: "gc-hopi-point",
        name: "Hopi Point (Sunset View)",
        category: "sunset_spot",
        lat: 36.0754,
        lng: -112.1554,
        shortDesc: "Il punto panoramico definitivo per il tramonto.",
        description: "Sporge verso nord regalando una vista aperta sulle curve argentee del fiume Colorado centinaia di metri più in basso. I colori virano dall'arancio ruggine al carminio.",
        photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
        elevation: "2.154 m s.l.m.",
        difficulty: "Facile",
        duration: "1 ora e mezza",
        bestTime: "30 minuti prima del tramonto fino al crepuscolo",
        companionsTip: "Accessibile solo con la navetta gratuita Hermit Road (linea rossa). Arriviamo con un'ora d'anticipo per prendere posto sul bordo."
      },
      {
        id: "gc-desert-view",
        name: "Desert View Watchtower",
        category: "viewpoint",
        lat: 36.0423,
        lng: -111.8268,
        shortDesc: "La torre in pietra di Mary Colter verso il Painted Desert.",
        description: "Situata all'uscita orientale del parco, questa torre architettonica ospita affreschi dei nativi e permette di scorgere il fiume Colorado che svolta verso il Grand Canyon vero e proprio.",
        photoUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        elevation: "2.267 m s.l.m.",
        difficulty: "Facile",
        duration: "45 min",
        bestTime: "Pomeriggio",
        companionsTip: "Sosta perfetta durante il tragitto in auto verso Monument Valley!"
      }
    ],
    photos: [
      {
        id: "p-gc-1",
        url: grandCanyonSunsetImg,
        caption: "Il mare di roccia dorata del South Rim all'ora d'oro",
        location: "Grand Canyon South Rim"
      },
      {
        id: "p-gc-2",
        url: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
        caption: "La vastità silenziosa da Mather Point",
        location: "Mather Point"
      },
      {
        id: "p-gc-3",
        url: "https://images.unsplash.com/photo-1527334134484-b21880f7845c?auto=format&fit=crop&w=1200&q=80",
        caption: "I tornanti scavati nella roccia del Bright Angel Trail",
        location: "Bright Angel Trail"
      }
    ],
    companionNotes: [
      {
        title: "Freddo la sera e al mattino!",
        text: "Il South Rim si trova a oltre 2.100 metri di quota. Portate una felpa pesante o un piumino cento-grammi per l'alba e il tramonto.",
        type: "warning"
      },
      {
        title: "Navette Gratuite",
        text: "Non useremo l'auto per spostarci all'interno del villaggio: la linea navetta rossa e blu collega tutti i punti panoramici senza problemi di parcheggio.",
        type: "tip"
      },
      {
        title: "Stelle al Desert View",
        text: "Il cielo notturno del Grand Canyon è certificato International Dark Sky: appena cala il buio, la Via Lattea si vede ad occhio nudo.",
        type: "must_do"
      }
    ],
    quickStats: [
      { label: "Quota", value: "2.170 m", sublabel: "Aria fresca e secca" },
      { label: "Profondità", value: "1.800 m", sublabel: "Fino al letto del Colorado" },
      { label: "Durata Tappa", value: "2 Giorni", sublabel: "Con notte al parco" }
    ]
  },
  {
    id: "monument-valley",
    slideNumber: 2,
    dayLabel: "Giorno 5",
    title: "Monument Valley Navajo Tribal Park",
    subtitle: "La Strada Infinita e i Giganti di Pietra Rossa",
    state: "Utah / Arizona",
    heroImage: monumentValleyHeroImg,
    emotionalIntro: "Ecco la cartolina per eccellenza dell'ovest americano: la celebre US Route 163 che scende diritta come un fuso tra le colline del deserto fino a rivelare all'orizzonte i monoliti sacri della Monument Valley.",
    overviewSummary: "Dormiremo a ridosso del parco per goderci la luce magica dell'alba sulle 'Mittens', scatteremo la foto leggendaria al Forrest Gump Point e percorreremo la Valley Drive tra polvere rossa, silenzio e spiritualità Navajo.",
    center: [36.9980, -110.0985],
    zoom: 12,
    routePolyline: [
      [36.9800, -110.1120],
      [36.9980, -110.0985],
      [37.0350, -110.0500],
      [37.1015, -109.9906] // Forrest Gump Point
    ],
    pointsOfInterest: [
      {
        id: "mv-forrest-gump",
        name: "Forrest Gump Point (US Route 163, Mile 13)",
        category: "photo_spot",
        lat: 37.1015,
        lng: -109.9906,
        shortDesc: "Il punto esatto della strada dritta iconica di Monument Valley.",
        description: "Il punto panoramico più cinematografico del mondo, reso immortale dal film Forrest Gump ('Sono un po' stanchino, credo che tornerò a casa'). La strada si allunga all'infinito verso i giganti rossi.",
        photoUrl: monumentValleyHeroImg,
        elevation: "1.600 m",
        difficulty: "Facile",
        duration: "30 min",
        bestTime: "Primo mattino (luce alle spalle e poco traffico)",
        companionsTip: "Attenzione alle auto mentre scattiamo la foto di gruppo sulla mezzeria della carreggiata!"
      },
      {
        id: "mv-the-mittens",
        name: "The Mittens & Merrick Butte",
        category: "viewpoint",
        lat: 36.9980,
        lng: -110.0985,
        shortDesc: "I due celebri 'guanti' di roccia rossa che svettano sul deserto.",
        description: "Le formazioni simbolo del Navajo Tribal Park, che si ergono per oltre 300 metri dalla sabbia rossa. La vista dal piazzale del Visitor Center è semplicemente ipnotica.",
        photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.670 m",
        difficulty: "Facile",
        duration: "1 ora",
        bestTime: "Alba con i primi raggi orizzontali",
        companionsTip: "Puntiamo la sveglia prima dell'alba per fare colazione con questo panorama di fronte!"
      },
      {
        id: "mv-john-ford",
        name: "John Ford's Point",
        category: "viewpoint",
        lat: 36.9535,
        lng: -110.0910,
        shortDesc: "Il promontorio dei classici film western.",
        description: "Il promontorio roccioso che il regista John Ford ha utilizzato in decine di capolavori western con John Wayne. Sovrasta un'immensa distesa desertica punteggiata da monoliti solenni.",
        photoUrl: "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.640 m",
        difficulty: "Panoramica in auto",
        duration: "45 min",
        bestTime: "Pomeriggio",
        companionsTip: "Spesso c'è un cavaliere Navajo a cavallo sul ciglio dello sperone per una foto d'epoca memorabile."
      },
      {
        id: "mv-valley-drive",
        name: "17-Mile Valley Drive Loop",
        category: "scenic_drive",
        lat: 36.9650,
        lng: -110.0800,
        shortDesc: "Pista sterrata tra le formazioni più remote.",
        description: "Un anello di 17 miglia non asfaltato che si snoda tra Elephant Butte, Camel Butte, Three Sisters e l'antico Totem Pole alto e sottile come uno spillo.",
        photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.600 m",
        difficulty: "Panoramica in auto",
        duration: "2 - 3 ore in SUV",
        bestTime: "Tardo pomeriggio",
        companionsTip: "Qui servirà guidare con calma a velocità ridotta per via delle buche e della sabbia."
      }
    ],
    photos: [
      {
        id: "p-mv-1",
        url: monumentValleyHeroImg,
        caption: "La leggendaria US 163 verso la Monument Valley",
        location: "Forrest Gump Point"
      },
      {
        id: "p-mv-2",
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        caption: "I Mittens Buttes illuminati dai colori del tramonto navajo",
        location: "Monument Valley Tribal Park"
      },
      {
        id: "p-mv-3",
        url: "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?auto=format&fit=crop&w=1200&q=80",
        caption: "La vista panoramica dall'affaccio John Ford's Point",
        location: "John Ford Point"
      }
    ],
    companionNotes: [
      {
        title: "Pass Parchi non valido qui!",
        text: "Monument Valley non è un National Park federale, ma una riserva della Nazione Navajo. L'ingresso costa 8$ a persona (circa 20$ a veicolo).",
        type: "warning"
      },
      {
        title: "Fuso Orario Navajo",
        text: "Attenzione ai telefoni: la riserva Navajo adotta l'ora legale (Daylight Saving Time), mentre il resto dell'Arizona non lo fa. Potremmo cambiare orario guidando di pochi chilometri!",
        type: "tip"
      },
      {
        title: "Navajo Taco a cena",
        text: "Da provare assolutamente per cena: il tradizionale pane fritto 'Frybread' con fagioli speziati, carne, pomodoro e formaggio!",
        type: "must_do"
      }
    ],
    quickStats: [
      { label: "Icona", value: "US Route 163", sublabel: "Forrest Gump Mile 13" },
      { label: "Territorio", value: "Navajo Nation", sublabel: "Terra sacra indigena" },
      { label: "Pista Sterrata", value: "17 Miglia", sublabel: "Avventura con il nostro SUV" }
    ]
  },
  {
    id: "page-antelope",
    slideNumber: 3,
    dayLabel: "Giorno 6",
    title: "Page: Antelope Canyon & Horseshoe Bend",
    subtitle: "Le Onde di Roccia Fluida e il Meandro Smeraldo",
    state: "Arizona",
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    emotionalIntro: "Vicino alla cittadina di Page la natura si trasforma in scultura liquida: dentro gli slot canyon la luce filtra in fasci mistici tra pareti levigate dall'acqua, mentre a Horseshoe Bend il fiume Colorado descrive una curva perfetta a 300 metri sotto i nostri piedi.",
    overviewSummary: "Giornata dedicata a due dei capolavori più fotografati d'America: il trekking guidato all'interno di Lower Antelope Canyon e il tramonto vertiginoso sul bordo a strapiombo di Horseshoe Bend.",
    center: [36.9050, -111.4700],
    zoom: 12,
    routePolyline: [
      [36.8620, -111.5100], // Horseshoe Bend
      [36.9147, -111.4558], // Page town
      [36.8619, -111.3743], // Antelope
      [37.0030, -111.4880]  // Lake Powell Wahweap
    ],
    pointsOfInterest: [
      {
        id: "page-antelope-lower",
        name: "Lower Antelope Canyon",
        category: "trail",
        lat: 36.8619,
        lng: -111.3743,
        shortDesc: "Lo slot canyon scavato da improvvise inondazioni di fango e sabbia.",
        description: "Si scende tramite scalette in ferro nel grembo della terra. Le pareti d'arenaria creano curve sinuose dai toni pesca, ocra e magenta che sembrano dipinte a mano.",
        photoUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.200 m",
        difficulty: "Facile",
        duration: "1 ora e mezza",
        bestTime: "Tra le 10:30 e le 12:30 per massima luce all'interno",
        companionsTip: "Prenotazione con guida Navajo obbligatoria mesi prima: vietati selfie stick e zaini grandi, ammesso solo smartphone o fotocamera!"
      },
      {
        id: "page-horseshoe-bend",
        name: "Horseshoe Bend",
        category: "sunset_spot",
        lat: 36.8790,
        lng: -111.5105,
        shortDesc: "Il meandro a ferro di cavallo del fiume Colorado.",
        description: "Una breve camminata di 1,2 km conduce a uno sperone vertiginoso a picco sul fiume verde smeraldo, circondato da canyon di roccia rossa a 300 metri d'altezza.",
        photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.300 m",
        difficulty: "Facile",
        duration: "1 ora",
        bestTime: "Tramonto (la luce avvolge la curva del fiume)",
        companionsTip: "Non ci sono parapetti tranne che su una piccola terrazza: massima prudenza vicino all'orlo!"
      },
      {
        id: "page-lake-powell",
        name: "Wahweap Overlook & Lake Powell",
        category: "viewpoint",
        lat: 36.9940,
        lng: -111.5050,
        shortDesc: "Lo specchio d'acqua blu zaffiro incastonato nei canyon rossi.",
        description: "Il secondo bacino artificiale più grande degli Stati Uniti. Da Wahweap Overlook il contrasto tra l'acqua blu intenso e le mesas rosse dell'Arizona è spettacolare.",
        photoUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.220 m",
        difficulty: "Facile",
        duration: "30 min",
        bestTime: "Tardo pomeriggio",
        companionsTip: "Ottimo posto per rilassarci o per fare un picnic al tramonto in riva al lago."
      }
    ],
    photos: [
      {
        id: "p-pg-1",
        url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
        caption: "La luce che si riflette sulle pareti ondulate di Antelope Canyon",
        location: "Lower Antelope Canyon"
      },
      {
        id: "p-pg-2",
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
        caption: "Il salto a picco sul meandro di Horseshoe Bend",
        location: "Horseshoe Bend"
      }
    ],
    companionNotes: [
      {
        title: "Prenotazione Antelope Cruciale",
        text: "I biglietti vanno a ruba sei mesi prima. Ho già segnato il tour con Dixie Ellis o Ken's Tours per la fascia delle 10:45.",
        type: "must_do"
      },
      {
        title: "Caldo sul sentiero di Horseshoe",
        text: "Anche se il sentiero è breve (circa 15 minuti a piedi), non c'è ombra ed è battuto dal sole del deserto: cappellino e acqua indispensabili.",
        type: "warning"
      }
    ],
    quickStats: [
      { label: "Salto", value: "305 m", sublabel: "Dall'orlo a Horseshoe Bend" },
      { label: "Slot Canyon", value: "Magia di Luce", sublabel: "Fasci solari tra le fessure" },
      { label: "Distanza Tappa", value: "190 km", sublabel: "Da Monument Valley" }
    ]
  },
  {
    id: "bryce-canyon",
    slideNumber: 4,
    dayLabel: "Giorni 7 - 8",
    title: "Bryce Canyon National Park",
    subtitle: "La Foresta di Guglie d'Arenaria (Hoodoos)",
    state: "Utah",
    heroImage: bryceCanyonHoodoosImg,
    emotionalIntro: "Benvenuti in uno scenario da fiaba gotica: Bryce non è un vero canyon, ma un gigantesco anfiteatro naturale popolato da decine di migliaia di torri e pinnacoli rocciosi (chiamati Hoodoos) modellati dal gelo invernale e dalle piogge.",
    overviewSummary: "Scenderemo nel labirinto di pietra rossa percorrendo il Navajo Loop attraverso lo stretto passaggio di Wall Street tra abeti secolari, per poi risalire lungo il Queens Garden Trail.",
    center: [37.5930, -112.1871],
    zoom: 12,
    routePolyline: [
      [37.6400, -112.1550],
      [37.6280, -112.1680],
      [37.5930, -112.1871],
      [37.5300, -112.2500]
    ],
    pointsOfInterest: [
      {
        id: "bryce-sunset-point",
        name: "Sunset Point & Wall Street",
        category: "viewpoint",
        lat: 37.6235,
        lng: -112.1675,
        shortDesc: "Il punto panoramico più vertiginoso sull'anfiteatro.",
        description: "Da qui parte la discesa a serpentina tra le alte pareti di Wall Street, l'unico slot canyon naturale di Bryce Canyon fiancheggiato da alberi di Douglas centenari.",
        photoUrl: bryceCanyonHoodoosImg,
        elevation: "2.440 m",
        difficulty: "Facile per la vista / Moderato per scendere",
        duration: "1 - 2 ore",
        bestTime: "Pomeriggio o tramonto",
        companionsTip: "Da qui scatta il sentiero combinato Queens Garden + Navajo Loop!"
      },
      {
        id: "bryce-queens-garden",
        name: "Queens Garden & Navajo Loop Trail",
        category: "trail",
        lat: 37.6285,
        lng: -112.1620,
        shortDesc: "Il trekking più bello del parco: dentro la foresta di pinnacoli.",
        description: "Un anello di 4,6 km che scende sul fondovalle tra guglie chiamate 'Thor's Hammer' e 'Queen Victoria', camminando letteralmente tra i giganti d'arenaria.",
        photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        elevation: "180 m dislivello",
        difficulty: "Moderata",
        duration: "2 - 3 ore",
        bestTime: "Mattina presto",
        companionsTip: "Scarpe da trekking con buon grip: la ghiaia fine in discesa può scivolare."
      },
      {
        id: "bryce-sunrise-point",
        name: "Sunrise Point",
        category: "viewpoint",
        lat: 37.6283,
        lng: -112.1650,
        shortDesc: "I primi raggi che accendono le guglie di fuoco dorato.",
        description: "All'alba l'anfiteatro si accende progressivamente: le cime degli hoodoos passano dal blu cobalto della notte a un arancio fluorescente spettacolare.",
        photoUrl: "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?auto=format&fit=crop&w=1200&q=80",
        elevation: "2.444 m",
        difficulty: "Facile",
        duration: "45 min",
        bestTime: "Alba esatta",
        companionsTip: "Indossate giacca antivento, guanti leggeri e berretto: a 2.500 m all'alba la temperatura può scendere vicino allo zero!"
      },
      {
        id: "bryce-point",
        name: "Bryce Point",
        category: "viewpoint",
        lat: 37.6040,
        lng: -112.1570,
        shortDesc: "Visuale a 270 gradi sull'intero anfiteatro monumentale.",
        description: "Situato a oltre 2.520 metri d'altezza, offre la panoramica a perdita d'occhio più drammatica dell'intero altopiano di Paunsaugunt.",
        photoUrl: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
        elevation: "2.529 m",
        difficulty: "Facile",
        duration: "30 min",
        bestTime: "Qualsiasi ora della giornata",
        companionsTip: "Ottimo prima di lasciare il parco per una panoramica d'addio aerea."
      }
    ],
    photos: [
      {
        id: "p-bc-1",
        url: bryceCanyonHoodoosImg,
        caption: "La selva di guglie rosse e ocra nell'anfiteatro di Bryce",
        location: "Bryce Amphitheater"
      },
      {
        id: "p-bc-2",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        caption: "Tra gli abeti e le pareti di roccia di Wall Street",
        location: "Navajo Loop"
      }
    ],
    companionNotes: [
      {
        title: "Altitudine elevata (2.500 m)",
        text: "Siamo sul punto più alto del nostro viaggio. Bere molta acqua e fare pause regolari mentre risaliamo dal canyon.",
        type: "tip"
      },
      {
        title: "Cielo Stellato Certificato Gold Tier",
        text: "Bryce ha un'aria così limpida e zero inquinamento luminoso che si possono scorgere fino a 7.500 stelle ad occhio nudo (contro le 500 delle città).",
        type: "must_do"
      }
    ],
    quickStats: [
      { label: "Altitudine", value: "2.529 m", sublabel: "Il parco più alto del loop" },
      { label: "Migliaia", value: "Hoodoos", sublabel: "Guglie naturali intarsiate" },
      { label: "Trekking Re", value: "Navajo Loop", sublabel: "4,6 km indimenticabili" }
    ]
  },
  {
    id: "zion-national-park",
    slideNumber: 5,
    dayLabel: "Giorni 9 - 10",
    title: "Zion National Park",
    subtitle: "I Giganti di Pietra e il Trekking nel Fiume (The Narrows)",
    state: "Utah",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    emotionalIntro: "A differenza del Grand Canyon e di Bryce dove guardiamo dall'alto verso il basso, a Zion ci troviamo sul fondo della valle con imponenti monoliti verticali alti fino a 900 metri che svettano verso il cielo blu cobalto.",
    overviewSummary: "Due giorni epici: cammineremo con i piedi nell'acqua gelida del Virgin River dentro la gola strettissima delle Narrows e percorreremo la celebre scenic drive del parco fino al Canyon Overlook.",
    center: [37.2982, -113.0263],
    zoom: 12,
    routePolyline: [
      [37.2000, -112.9800], // Springdale entrance
      [37.2500, -112.9650], // Canyon Junction
      [37.2982, -113.0263], // The Grotto
      [37.3480, -112.9470]  // Temple of Sinawava / The Narrows
    ],
    pointsOfInterest: [
      {
        id: "zion-narrows",
        name: "The Narrows (dal Temple of Sinawava)",
        category: "trail",
        lat: 37.2965,
        lng: -112.9472,
        shortDesc: "Il leggendario trekking dentro il letto del fiume Virgin.",
        description: "Uno dei trekking più avventurosi del pianeta. Si cammina direttamente nell'acqua del fiume (dal polpaccio alla vita) tra pareti di roccia verticali alte 300 metri e larghe in alcuni punti solo 6 metri.",
        photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        elevation: "1.350 m",
        difficulty: "Impegnativa",
        duration: "3 - 5 ore (adattabile)",
        bestTime: "Dalle 09:00 per evitare la calca",
        companionsTip: "Noleggeremo a Springdale l'equipaggiamento speciale: stivaletti in neoprene, calzari stagni e bastone in legno da guado!"
      },
      {
        id: "zion-scout-lookout",
        name: "Scout Lookout (via West Rim / Angels Landing Trail)",
        category: "viewpoint",
        lat: 37.2690,
        lng: -112.9470,
        shortDesc: "I 21 celebri tornanti di Walter's Wiggles e la vista sul canyon.",
        description: "Salita scenografica lungo la parete rocciosa che culmina a Scout Lookout, con un panorama vertiginoso sull'intero Zion Canyon. (Per la cresta finale di Angels Landing serve permesso a lotteria).",
        photoUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        elevation: "+320 m dislivello",
        difficulty: "Moderata",
        duration: "3 ore a/r",
        bestTime: "Primo mattino prima che batta il sole cocente sui tornanti",
        companionsTip: "Anche fermandosi a Scout Lookout senza fare la catena esposta la vista è mozzafiato!"
      },
      {
        id: "zion-canyon-overlook",
        name: "Canyon Overlook Trail",
        category: "trail",
        lat: 37.2135,
        lng: -112.9405,
        shortDesc: "Trekking breve ma panoramico all'uscita del tunnel di Zion.",
        description: "Appena oltre lo storico Zion-Mount Carmel Tunnel scavato nel 1930, questo sentiero di 1,6 km si affaccia a strapiombo sulla valle di Pine Creek e sulla Grande Arco di roccia.",
        photoUrl: "https://images.unsplash.com/photo-1527334134484-b21880f7845c?auto=format&fit=crop&w=1200&q=80",
        elevation: "50 m dislivello",
        difficulty: "Facile",
        duration: "1 ora",
        bestTime: "Tramonto",
        companionsTip: "Parcheggio piccolo: ci fermiamo subito prima o dopo il tunnel per visitarlo mentre arriviamo da Bryce!"
      }
    ],
    photos: [
      {
        id: "p-zn-1",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        caption: "La gola scolpita e l'acqua limpida delle Narrows",
        location: "The Narrows"
      },
      {
        id: "p-zn-2",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        caption: "Le pareti maestose del canyon viste da valle",
        location: "Zion Canyon Scenic Drive"
      }
    ],
    companionNotes: [
      {
        title: "Navette Obbligatorie a Zion",
        text: "Da marzo a novembre la Zion Canyon Scenic Drive è chiusa alle auto private. Si usano solo le navette frequenti ed efficienti con capolinea al Visitor Center.",
        type: "tip"
      },
      {
        title: "Pericolo Flash Flood nelle Narrows",
        text: "Verificheremo sempre il bollettino del ranger al mattino: se ci sono temporali anche a 30 km di distanza, il torrente può alzarsi improvvisamente.",
        type: "warning"
      }
    ],
    quickStats: [
      { label: "Pareti Rocciose", value: "900 m", sublabel: "Verticali di arenaria Navajo" },
      { label: "Trekking Fiume", value: "The Narrows", sublabel: "Guado nel Virgin River" },
      { label: "Alloggio Base", value: "Springdale", sublabel: "Paesino alle porte del parco" }
    ]
  },
  {
    id: "death-valley",
    slideNumber: 6,
    dayLabel: "Giorni 12 - 13",
    title: "Death Valley National Park",
    subtitle: "La Terra degli Estremi, il Sale e le Dune Dorate",
    state: "California",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    emotionalIntro: "Il punto più basso, più caldo e più secco del Nord America. La Valle della Morte non è affatto un deserto sterile: è un paesaggio lunare di poligoni di sale candido, colline ondulate dai colori pastello e dune di sabbia che cambiano forma a ogni alito di vento.",
    overviewSummary: "Visiteremo la celebre depressione di Badwater a -86 metri sotto il livello del mare, percorreremo la strada a tornanti tra le rocce color lavanda e verde smeraldo di Artists Palette e cammineremo a piedi nudi sulle dune al tramonto.",
    center: [36.5323, -116.9325],
    zoom: 10,
    routePolyline: [
      [36.2300, -116.7670], // Badwater
      [36.3630, -116.8200], // Artists Palette
      [36.4200, -116.8100], // Zabriskie Point
      [36.6060, -117.1150]  // Mesquite Flat Sand Dunes
    ],
    pointsOfInterest: [
      {
        id: "dv-badwater",
        name: "Badwater Basin (-86 m)",
        category: "viewpoint",
        lat: 36.2300,
        lng: -116.7670,
        shortDesc: "Il punto più depresso del continente nordamericano.",
        description: "Un'immensa distesa di 500 kmq di crosta di sale esagonale. Alzando gli occhi sulla parete montuosa alle spalle si scorge il cartello che indica dove si troverebbe il livello reale del mare, 86 metri più in alto!",
        photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
        elevation: "-86 m s.l.m.",
        difficulty: "Facile",
        duration: "45 min",
        bestTime: "Primo mattino prima delle ore calde",
        companionsTip: "Camminiamo per 10 minuti oltre la passerella per raggiungere i cristalli di sale geometrici incontaminati!"
      },
      {
        id: "dv-zabriskie",
        name: "Zabriskie Point",
        category: "sunset_spot",
        lat: 36.4200,
        lng: -116.8100,
        shortDesc: "I calanchi dorati ondulati come onde d'oro fuso.",
        description: "Reso celebre dal film omonimo di Michelangelo Antonioni. Le creste d'argilla sedimentaria erose dalle antiche alluvioni creano un labirinto di rughe dorate e ombre spettacolari.",
        photoUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        elevation: "200 m",
        difficulty: "Facile",
        duration: "45 min",
        bestTime: "Alba (imperdibile) o tramonto",
        companionsTip: "Qui i colori cambiano minuto per minuto: macchina fotografica carica e cavalletto pronti."
      },
      {
        id: "dv-artists-palette",
        name: "Artists Drive & Artists Palette",
        category: "scenic_drive",
        lat: 36.3630,
        lng: -116.8200,
        shortDesc: "Strada panoramica a senso unico tra colline multicolore.",
        description: "Una sinuosa scenic drive tra colline che sembrano schizzate da un pittore: le ossidazioni di ferro, manganese e mica tingono le rocce di turchese, viola, rosa e verde pastello.",
        photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        elevation: "20 m",
        difficulty: "Panoramica in auto",
        duration: "45 min",
        bestTime: "Tardo pomeriggio con il sole laterale",
        companionsTip: "Divertente da guidare con il nostro SUV tra discese e salite naturali come sulle montagne russe!"
      },
      {
        id: "dv-sand-dunes",
        name: "Mesquite Flat Sand Dunes",
        category: "viewpoint",
        lat: 36.6060,
        lng: -117.1150,
        shortDesc: "Vaste dune di sabbia dorata incorniciate dalle montagne viola.",
        description: "Dune di sabbia soffice che raggiungono i 30 metri d'altezza. Camminare sulle creste di sabbia al calar del sole regala un silenzio e una pace assoluti.",
        photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        elevation: "0 m",
        difficulty: "Facile",
        duration: "1 ora e mezza",
        bestTime: "Tramonto e prima ora di buio",
        companionsTip: "Togliamoci le scarpe e camminiamo a piedi nudi sulla sabbia fresca della sera!"
      }
    ],
    photos: [
      {
        id: "p-dv-1",
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
        caption: "La crosta di sale bianca a perdita d'occhio a Badwater Basin",
        location: "Badwater Basin (-86 m)"
      },
      {
        id: "p-dv-2",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        caption: "Le pieghe dorate della terra a Zabriskie Point",
        location: "Zabriskie Point"
      }
    ],
    companionNotes: [
      {
        title: "Regola d'oro: Acqua a bordo!",
        text: "Nel bagagliaio del SUV terremo sempre due scorte da 10 litri d'acqua in bottiglia. L'aria è talmente secca che non ci si accorge nemmeno di disidratarsi.",
        type: "warning"
      },
      {
        title: "Serbatoio sempre pieno",
        text: "All'interno della Death Valley le distanze sono enormi e i pochi distributori (Furnace Creek, Stovepipe Wells) hanno prezzi molto alti. Faremo il pieno prima di entrare a Pahrump o Beatty.",
        type: "tip"
      }
    ],
    quickStats: [
      { label: "Punto Minimo", value: "-86 m", sublabel: "Sotto il livello degli oceani" },
      { label: "Estensione", value: "13.600 kmq", sublabel: "Il parco più esteso degli USA continentali" },
      { label: "Distanza LA", value: "4 ore", sublabel: "Rientro panoramico verso il Pacifico" }
    ]
  }
];

export const PRACTICAL_TIPS = {
  budget: [
    { item: "Volo A/R (Italia - Los Angeles LAX)", estCost: "€ 650 - 850", note: "Voli diretti o con 1 scalo comodo per LAX" },
    { item: "Noleggio SUV 4x4 (diviso per 4 persone)", estCost: "€ 240 a testa", note: "Ritiro e riconsegna entrambi a LAX senza alcuna tassa di one-way!" },
    { item: "Carburante (stimati ~3.500 km in 4)", estCost: "€ 85 a testa", note: "La benzina negli USA costa circa la metà che in Italia" },
    { item: "Pass Parchi 'America The Beautiful'", estCost: "$ 80 TOTALE", note: "Vale per l'intera auto e tutti i passeggeri!" },
    { item: "Alloggi (Motel tipici, Lodge nei parchi, Cabins)", estCost: "€ 650 - 850 a testa", note: "Camere doppie con letti Queen condivisibili" },
    { item: "Pasti & Cibo (Diner, Steakhouse e picnic)", estCost: "€ 450 - 600 a testa", note: "Picnic a pranzo nei parchi e cena tipica la sera" },
    { item: "Permessi speciali (Lower Antelope + Navajo)", estCost: "~€ 95 a testa", note: "Con guida nativa inclusa" }
  ],
  packingChecklist: [
    { name: "Scarpe da trekking con suola scolpita (già rodate!)", essential: true },
    { name: "Giacca a vento / strati termici per quote oltre 2.200m", essential: true },
    { name: "Zaino giornaliero da 20-30 litri con sacca idrica Camelbak", essential: true },
    { name: "Occhiali da sole polarizzati e crema solare 50+", essential: true },
    { name: "Torcia frontale per albe, tramonti e foto notturne alle stelle", essential: true },
    { name: "Adattatore prese USA a lamelle piatte e ciabatta multipresa", essential: true },
    { name: "Passaporto valido + Autorizzazione ESTA approvata", essential: true },
    { name: "Scarpe da scoglio / sandali da trekking per Zion Narrows", essential: false },
    { name: "Power bank capiente per le lunghe giornate on the road", essential: true }
  ],
  roadTripRules: [
    { title: "Playlist e Podcast On the Road", desc: "Creeremo una playlist condivisa su Spotify con country, classic rock e colonne sonore dei film western!" },
    { title: "Turni di Guida Rilassati", desc: "Ci alterneremo al volante ogni 2 ore per non stancarci e goderci il paesaggio che scorre fuori dal finestrino." },
    { title: "Picnic nei Punti Panoramici", desc: "La spesa al superstore all'inizio del viaggio con borsa frigo nel bagagliaio per pranzi indimenticabili sui bordi dei canyon." }
  ]
};
