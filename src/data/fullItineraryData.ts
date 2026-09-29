export interface FullItineraryStopDetail {
  name: string;
  categoryTag: string;
  location: string;
  distanceFromPrev?: string;
  distanceToNext?: string;
  description: string;
  practicalTip?: string;
}

export interface PanoramicViewpointDetail {
  name: string;
  elevation?: string;
  bestTime?: string;
  description: string;
  photoTip?: string;
}

export interface DayItinerary {
  dayNumber: number;
  dayLabel: string;
  title: string;
  subtitle: string;
  state: string;
  routeSummary: string;
  stageKm: number;
  progressiveKm: number;
  kmToNextLeg: number;
  estimatedDrivingTime: string;
  drivingTimeToNextLeg: string;
  nextLegDestination: string;
  overnightStay: string;
  narrative: string;
  stops: FullItineraryStopDetail[];
  panoramicViewpoints: PanoramicViewpointDetail[];
  eveningTip: string;
}

export const FULL_15_DAYS_ITINERARY: DayItinerary[] = [
  {
    dayNumber: 1,
    dayLabel: "Giorno 1",
    title: "Arrivo a Los Angeles (LAX) & Tramonto a Santa Monica",
    subtitle: "Ritiro SUV 4x4, Oceano Pacifico e il capolinea della Route 66",
    state: "California",
    routeSummary: "Aeroporto Internazionale LAX ➔ Ritiro Veicolo ➔ Santa Monica Pier ➔ Hotel Los Angeles",
    stageKm: 40,
    progressiveKm: 0,
    kmToNextLeg: 690,
    estimatedDrivingTime: "~1h 15m (traffico metropolitano)",
    drivingTimeToNextLeg: "~7 ore (con le soste a Calico, Peggy Sue's e Oatman)",
    nextLegDestination: "Calico Ghost Town, Oatman & Williams (Route 66)",
    overnightStay: "Los Angeles (zona Santa Monica / El Segundo / LAX)",
    narrative: `L'avventura americana comincia all'aeroporto internazionale di Los Angeles (LAX). Dopo aver superato i controlli d'immigrazione e ritirato i bagagli, raggiungiamo con la navetta dedicata la stazione di noleggio per prendere possesso del nostro SUV 4x4, che sarà la nostra casa su ruote per i prossimi quindici giorni. Ci dirigiamo subito verso la costa dell'Oceano Pacifico: a Santa Monica l'aria salmastra e le palme della California accolgono il gruppo dopo il lungo volo intercontinentale. Passeggiamo sulle assi di legno del leggendario molo di Santa Monica Pier fino al cartello ufficiale 'Route 66 End of the Trail', punto simbolico dove la 'Mother Road' incontra le onde dell'oceano. Ci godiamo il primo tramonto californiano mentre il sole scende all'orizzonte tingendo l'acqua d'arancio, respirando l'emozione per il grande viaggio che inizierà l'indomani all'alba verso i deserti dell'interno.`,
    stops: [
      {
        name: "Aeroporto Internazionale di Los Angeles (LAX) & Ritiro SUV",
        categoryTag: "Logistica & Ritiro Mezzo",
        location: "1 World Way, Los Angeles, CA",
        distanceFromPrev: "Inizio Viaggio (Volo dall'Italia)",
        distanceToNext: "20 km fino a Santa Monica Pier (~25-35 min)",
        description: "Disbrigo delle formalità doganali statunitensi, ritiro dei bagagli e trasferimento al centro noleggio auto tramite shuttle navetta. Ritiro di un comodo SUV 4x4 spazioso con trazione integrale, ideale per ospitare 4 passeggeri con relativi bagagli e perfetto per affrontare le piste sterrate dei parchi.",
        practicalTip: "Prima di lasciare il parcheggio noleggio, verificate la presenza della ruota di scorta, l'efficienza del climatizzatore e collegate i telefoni tramite Apple CarPlay / Android Auto."
      },
      {
        name: "Santa Monica Pier & Cartello 'Route 66 End of the Trail'",
        categoryTag: "Icona Storica & Oceano",
        location: "200 Santa Monica Pier, Santa Monica, CA",
        distanceFromPrev: "20 km da LAX",
        distanceToNext: "18 km per rientro in hotel a LA",
        description: "Il molo più celebre della West Coast, inaugurato nel 1909. Qui sorge il celebre cartello che segna la fine geografica delle 2.448 miglia della Route 66 che partono da Chicago. Atmosfera vibrante con il Pacific Park, la storica giostra del 1922 e la vista infinita sulle spiagge dorate.",
        practicalTip: "Ottimo punto per acquistare un cappellino o la prima cartolina ricordo. La brezza dell'oceano è fresca: tenete a portata di mano una felpa leggera."
      },
      {
        name: "Supermercato & Prime Scorte di Viaggio",
        categoryTag: "Provviste On The Road",
        location: "Los Angeles / Santa Monica",
        distanceFromPrev: "5 km dal molo",
        distanceToNext: "10 km verso la struttura alberghiera",
        description: "Sosta tattica in un grande superstore americano (Walmart o Target) per acquistare una borsa frigo termica morbida per il bagagliaio, snack salati, frutta secca e due confezioni formato famiglia d'acqua naturale in bottiglia da conservare nel SUV.",
        practicalTip: "L'acqua è fondamentale nel deserto: calcolate almeno 3 litri a persona al giorno per i giorni successivi."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Santa Monica Pier Boardwalk al Tramonto",
        elevation: "5 m s.l.m.",
        bestTime: "Ora del tramonto (18:30 - 19:45)",
        description: "La luce dorata del tramonto californiano illumina la spiaggia e la silhouette della ruota panoramica a energia solare riflessa sulle onde del Pacifico.",
        photoTip: "Scattate la foto di gruppo sotto il cartello 'Route 66 End of the Trail' con il sole che cala alle vostre spalle."
      }
    ],
    eveningTip: "Cena informale con Pier Burger o frutti di mare sul molo, passeggiata rilassante lungo la Third Street Promenade e a letto presto per smaltire il fuso orario di 9 ore e partire riposati all'alba."
  },
  {
    dayNumber: 2,
    dayLabel: "Giorno 2",
    title: "Route 66: Calico Ghost Town, Peggy Sue’s Diner, Oatman & Williams",
    subtitle: "Dalla metropoli al Far West: miniere d'argento, burger vintage e asini selvatici",
    state: "California / Arizona",
    routeSummary: "Los Angeles ➔ Barstow / Yermo (Calico) ➔ Peggy Sue's ➔ Mojave Desert ➔ Sitgreaves Pass ➔ Oatman ➔ Williams",
    stageKm: 690,
    progressiveKm: 690,
    kmToNextLeg: 90,
    estimatedDrivingTime: "~7 ore di guida effettiva distribuite nell'arco della giornata",
    drivingTimeToNextLeg: "~1h 10m fino al Grand Canyon South Rim",
    nextLegDestination: "Grand Canyon National Park South Rim (Arizona)",
    overnightStay: "Williams, Arizona (Hotel / Motel storico Route 66)",
    narrative: `Lasciamo Los Angeles alle prime luci dell'alba superando il Cajon Pass per addentrarci nell'immensità del Deserto del Mojave. Il paesaggio urbano lascia subito spazio a distese sterminate di cespugli creosoto e scoscese montagne aride. La prima sosta è a Calico Ghost Town, autentica cittadina mineraria fondata nel 1881 durante la febbre dell'argento: passeggiare tra i suoi saloon in legno e gli ingressi delle miniere fa fare un tuffo immediato nell'epopea dei pionieri. A pochissimi minuti ci attende il pranzo vintage da Peggy Sue's 50's Diner, un'icona assoluta del 1954 con cameriere in divisa d'epoca, jukebox originali e memorabilia di Marilyn e James Dean. Nel pomeriggio attraversiamo il confine con l'Arizona e imbocchiamo il tratto più autentico e selvaggio della Historic Route 66: scaliamo i tornanti a picco dello scenografico Sitgreaves Pass fino a raggiungere Oatman, sperduto villaggio minerario tra le Black Mountains dove i discendenti degli asini da soma ('wild burros') pascolano in totale libertà tra le case di legno e i marciapiedi rialzati. Concludiamo la traversata arrivando a Williams, vivace cittadina della Route 66 illuminata da splendide insegne al neon d'epoca e porta d'accesso privilegiata al Grand Canyon.`,
    stops: [
      {
        name: "Calico Ghost Town",
        categoryTag: "Città Fantasma del Far West (1881)",
        location: "Yermo / Calico Rd, Deserto del Mojave, California",
        distanceFromPrev: "210 km da Los Angeles (circa 2h 15m)",
        distanceToNext: "6 km fino a Peggy Sue’s Diner (8 minuti)",
        description: "Fondata nel 1881 dopo la scoperta di ricche vene argentifere, contava oltre 500 miniere e 1.200 residenti. Oggi è uno dei parchi storici meglio conservati della California: vi si trovano la vecchia prigione, il Lane's General Store, la bottega del fabbro, il saloon e la Maggie Mine visitabile a piedi.",
        practicalTip: "Passeggiate fino in cima alla collina principale per abbracciare con lo sguardo l'intero bacino desertico del Mojave e le montagne color ruggine."
      },
      {
        name: "Peggy Sue’s 50's Diner",
        categoryTag: "Diner Vintage Anni '50 & Pranzo On The Road",
        location: "36540 Ghost Town Rd, Yermo, CA (uscita I-15)",
        distanceFromPrev: "6 km da Calico Ghost Town",
        distanceToNext: "254 km fino a Oatman, Arizona (circa 2h 45m)",
        description: "Creato nel 1954 come piccolo chiosco per i viaggiatori del deserto e successivamente ampliato preservando arredi originali degli anni '50. Propone hamburger classici, patatine curly, pizza rustica e milk-shake monumentali serviti nei tipici bicchieri d'acciaio. All'interno si trova anche un piccolo Dinosaur Park e un negozio di souvenir retrò.",
        practicalTip: "Ordinate il classico cheeseburger accompagnato da anelli di cipolla e provate il milk-shake alla vaniglia o cioccolato."
      },
      {
        name: "Oatman & Sitgreaves Pass (Historic Route 66)",
        categoryTag: "Borgo Minerario & Asini Selvatici",
        location: "Black Mountains, Mohave County, Arizona",
        distanceFromPrev: "254 km da Peggy Sue’s Diner",
        distanceToNext: "205 km fino a Williams, Arizona (circa 2h 20m)",
        description: "Antico insediamento minerario sorto nel 1915 dopo la scoperta di 10 milioni di dollari in oro. Raggiungibile tramite i tortuosi e spettacolari tornanti del Sitgreaves Pass. Il borgo conserva saloon intatti (come l'Oatman Hotel con le sue pareti tappezzate da decine di migliaia di banconote da un dollaro) e gli asinelli selvatici, protetti dal governo, che chiedono carote ai viaggiatori.",
        practicalTip: "Guidate con prudenza sui tornanti del passo montano e non date da mangiare agli asinelli cibo umano: nei negozietti locali vendono i cubetti d'erba medica autorizzati."
      },
      {
        name: "Williams (Gateway to Grand Canyon)",
        categoryTag: "Capitale della Route 66 & Pernottamento",
        location: "Coconino County, Altopiano del Colorado, Arizona",
        distanceFromPrev: "205 km da Oatman",
        distanceToNext: "90 km fino al Grand Canyon South Rim (tappa di domani)",
        description: "L'ultima città degli Stati Uniti a essere bypassata dalla moderna autostrada Interstate 40 nel 1984. È un autentico museo all'aperto della Route 66 con diner con musica rockabilly, officine d'epoca riconvertite, negozi d'artigianato in cuoio e la stazione da cui parte il treno storico a vapore Grand Canyon Railway.",
        practicalTip: "La sera a Williams la temperatura cala sensibilmente trovandosi a 2.060 metri di quota: uscite con giacca antivento."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Sitgreaves Pass Scenic Vista",
        elevation: "1.082 m s.l.m.",
        bestTime: "Pomeriggio (15:00 - 16:30)",
        description: "Valico montano tra le Black Mountains dell'Arizona con vista spettacolare a strapiombo sulle vallate desertiche attraversate dall'antico nastro d'asfalto della Route 66.",
        photoTip: "Accostate nelle piazzole panoramiche poco prima di Oatman per fotografare la strada che si arrampica tra gole di roccia bruna."
      },
      {
        name: "Main Street di Williams illuminata dai Neon",
        elevation: "2.060 m s.l.m.",
        bestTime: "Sera dopo il crepuscolo",
        description: "Le insegne a gas neon color ambra, rosso e turchese delle storiche pompe di benzina e dei motel Route 66 creano un'atmosfera da film anni Cinquanta.",
        photoTip: "Fotografate l'insegna del Cruiser's Cafe 66 con le vecchie auto americane parcheggiate all'esterno."
      }
    ],
    eveningTip: "Cena a Williams con bistecche alla brace o ribs da Cruiser's Cafe 66 o Pine Country Restaurant (famoso per le sue crostate fatte in casa), passeggiata tra i neon e meritato riposo in hotel."
  },
  {
    dayNumber: 3,
    dayLabel: "Giorno 3",
    title: "Grand Canyon National Park: Il Primo Impatto sul South Rim",
    subtitle: "Mather Point, il bordo del baratro e il tramonto di fuoco a Hopi Point",
    state: "Arizona",
    routeSummary: "Williams ➔ Tusayan ➔ Grand Canyon Village ➔ Mather Point ➔ Rim Trail ➔ Hopi Point",
    stageKm: 90,
    progressiveKm: 780,
    kmToNextLeg: 60,
    estimatedDrivingTime: "~1h 10m da Williams al parco",
    drivingTimeToNextLeg: "Brevi spostamenti interni con la navetta gratuita",
    nextLegDestination: "Desert View Drive & Watchtower",
    overnightStay: "Tusayan / Grand Canyon Village (Arizona)",
    narrative: `Una breve ora di guida tra le foreste di pini ponderosa dell'Arizona ci conduce alle porte di una delle sette meraviglie naturali del pianeta: il Grand Canyon National Park. Varcato l'ingresso del South Rim, l'impatto visivo da Mather Point toglie letteralmente il respiro: una voragine ciclopica lunga 446 chilometri, larga fino a 29 chilometri e profonda oltre 1.800 metri si apre sotto i nostri passi. Due miliardi di anni di storia geologica della Terra sono qui esposti a strati di calcare, arenaria e scisti dai colori che variano dall'ocra al rosso vermiglio. Dopo una sosta allo storico Yavapai Geology Museum, utilizziamo la navetta panoramica gratuita sulla Hermit Road (chiusa al traffico privato) scendendo tra diversi punti d'osservazione a picco sulla gola. Nel tardo pomeriggio prendiamo posizione sul promontorio roccioso di Hopi Point: da qui la vista spazia apertamente verso ovest lungo i meandri argentei del fiume Colorado. Al tramonto la roccia si incendia in sfumature porpora, oro e violetto in un silenzio reverenziale, lasciando spazio a un cielo notturno trapuntato da miliardi di stelle.`,
    stops: [
      {
        name: "Grand Canyon Visitor Center & Mather Point",
        categoryTag: "Punto Panoramico Mondiale",
        location: "South Rim, Grand Canyon National Park, AZ",
        distanceFromPrev: "90 km da Williams",
        distanceToNext: "2 km a piedi lungo il Rim Trail fino a Yavapai Point",
        description: "Il balcone naturale più famoso al mondo. Proteso sulla gola a 2.170 metri d'altitudine, offre un panorama a 360 gradi sulle guglie erose dal tempo come il Vishnu Temple e il Temple of Zoroaster.",
        practicalTip: "Presentate all'ingresso il pass federale 'America the Beautiful'. A Mather Point riempite le borracce alle fontanelle d'acqua potabile gratuita del Visitor Center."
      },
      {
        name: "Rim Trail da Mather a Yavapai Geology Museum",
        categoryTag: "Passeggiata Panoramica Pianeggiante",
        location: "South Rim Trail, Grand Canyon, AZ",
        distanceFromPrev: "1,8 km a piedi",
        distanceToNext: "Bus navetta per Hermit Road",
        description: "Sentiero pavimentato e completamente pianeggiante che costeggia il ciglio del canyon tra boschetti di ginepro e panorami vertiginosi. All'interno del museo di Yavapai grandi vetrate affacciate sul baratro spiegano la successione degli strati rocciosi e la potenza erosiva del fiume Colorado.",
        practicalTip: "Passeggiata rilassante adatta a tutti, perfetta per acclimatarsi alla quota (siamo oltre 2.100 metri)."
      },
      {
        name: "Hermit Road & Navetta Linea Rossa",
        categoryTag: "Scenic Route Panoramica",
        location: "Hermits Rest Route, Grand Canyon, AZ",
        distanceFromPrev: "Accessibile con navetta dal Village",
        distanceToNext: "Fermata a Hopi Point per il tramonto",
        description: "Percorso panoramico di 11 km riservato esclusivamente alle silenziose navette del parco. Tocca punti spettacolari come Trailview Overlook, Maricopa Point, Powell Point e The Abyss, dove la parete rocciosa precipita verticalmente per oltre 900 metri.",
        practicalTip: "I bus passano ogni 10-15 minuti: potete salire e scendere a piacimento tra una fermata e l'altra."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Hopi Point al Tramonto",
        elevation: "2.154 m s.l.m.",
        bestTime: "1 ora prima del tramonto fino al crepuscolo",
        description: "Il miglior punto del South Rim per osservare il tramonto: lo sperone si protende verso l'interno della gola permettendo di scorgere il corso scintillante del fiume Colorado.",
        photoTip: "Portate un mini-treppiede o appoggiate la fotocamera sui muretti in pietra: con il calare della luce le pareti rocciose assumono toni magenta incredibili."
      }
    ],
    eveningTip: "Cena rustica nei pressi del Grand Canyon Village (Bright Angel Lodge Restaurant o El Tovar Lounge) e breve sosta serale col naso all'insù per ammirare la Via Lattea in uno dei cieli più bui e limpidi del continente."
  },
  {
    dayNumber: 4,
    dayLabel: "Giorno 4",
    title: "Grand Canyon: Discesa nel Canyon & Desert View Drive",
    subtitle: "Bright Angel Trail verso il cuore della terra e la torre di guardia di Mary Colter",
    state: "Arizona",
    routeSummary: "Grand Canyon Village ➔ Bright Angel Trail ➔ Desert View Drive ➔ Watchtower ➔ Tusayan / Cameron",
    stageKm: 65,
    progressiveKm: 780,
    kmToNextLeg: 290,
    estimatedDrivingTime: "~1h 30m di scenic drive tra i vari belvederi",
    drivingTimeToNextLeg: "~3h 15m attraverso la Nazione Navajo",
    nextLegDestination: "Monument Valley & Navajo Tribal Park",
    overnightStay: "Tusayan / Cameron Trading Post (Arizona)",
    narrative: `La seconda giornata al Grand Canyon comincia al mattino presto con l'esperienza più emozionante: scendere fisicamente all'interno della gola lungo il Bright Angel Trail. Finché si resta sul bordo si percepisce il canyon come un quadro bidimensionale; quando invece si iniziano a scendere i tornanti scavati nella roccia rossa, tra tunnel di pietra e scogliere torreggianti, si comprende appieno la scala titanica del luogo. Raggiungiamo la 1.5-Mile Resthouse (-340 metri di dislivello), dove la temperatura aumenta e le formazioni rocciose sovrastano i nostri sguardi, prima di risalire con passo costante. Nel pomeriggio percorriamo con il nostro SUV la magnifica Desert View Drive verso l'estremità orientale del parco. La sosta culminante è alla Desert View Watchtower, una spettacolare torre in pietra progettata nel 1932 dall'architetto Mary Colter ispirandosi alle torri di guardia degli antichi indiani Pueblo: dall'alto delle sue finestre circolari la vista si spalanca sul Colorado che svolta verso nord e sulle distese policrome del Painted Desert.`,
    stops: [
      {
        name: "Bright Angel Trail (fino a 1.5-Mile Resthouse)",
        categoryTag: "Trekking nel Canyon",
        location: "Partenza a ovest di Bright Angel Lodge, Grand Canyon",
        distanceFromPrev: "Dal villaggio",
        distanceToNext: "Risalita e riposo al Village",
        description: "Il sentiero storico più celebre del parco. Scende a zig-zag tra scarpate calcaree e formazioni rocciose millenarie. Lungo il sentiero si attraversano due gallerie naturali scavate nella roccia viva. Alla 1.5-Mile Resthouse si trovano punto acqua potabile e servizi igienici.",
        practicalTip: "Regola d'oro: calcolate per la risalita il doppio del tempo impiegato per la discesa. Portate snack energetici e bevete costantemente."
      },
      {
        name: "Desert View Drive & Belvederi Orientali",
        categoryTag: "Scenic Drive in Auto",
        location: "Arizona State Route 64 East",
        distanceFromPrev: "Dal Village verso est per 40 km",
        distanceToNext: "Desert View Watchtower",
        description: "Strada panoramica di 40 km che attraversa le foreste di pini costeggiando il ciglio orientale del canyon con affacci spettacolari e meno affollati: Grandview Point, Moran Point, Lipan Point e Navajo Point.",
        practicalTip: "A Lipan Point si gode la vista più ravvicinata sulle rapide del fiume Colorado, le cui acque ruggiscono 1.500 metri più sotto."
      },
      {
        name: "Desert View Watchtower & Painted Desert Overlook",
        categoryTag: "Monumento Storico & Architettura Nativi",
        location: "Estremità est del Grand Canyon National Park, AZ",
        distanceFromPrev: "40 km dal Village",
        distanceToNext: "50 km verso Cameron Trading Post",
        description: "Torre cilindrica in pietra alta 21 metri costruita per integrarsi armoniosamente con la scogliera. All'interno le pareti sono decorate da affreschi originali dell'artista hopi Fred Kabotie. L'ultimo piano regala un panorama a perdita d'occhio sul fiume Colorado e sul Deserto Dipinto.",
        practicalTip: "Entrate nella torre per ammirare i soffitti decorati con travi di pino e glifi tradizionali. Ottimo gift shop per autentico artigianato indiano."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Desert View Point & Watchtower Rim",
        elevation: "2.267 m s.l.m.",
        bestTime: "Pomeriggio (14:30 - 17:00)",
        description: "Il punto panoramico più alto del South Rim, dove il canyon si allarga e rivela la transizione geologica verso le pianure del territorio Navajo.",
        photoTip: "Inquadrate la Watchtower in primo piano con la curva del canyon e il letto del fiume Colorado sullo sfondo."
      }
    ],
    eveningTip: "Cena a base di specialità del sud-ovest (torta Navajo o zuppa di mais) allo storico Cameron Trading Post fondato nel 1916 sul Little Colorado River, e sistemazione in camera."
  },
  {
    dayNumber: 5,
    dayLabel: "Giorno 5",
    title: "Monument Valley Navajo Tribal Park & US-163",
    subtitle: "La strada infinita di Forrest Gump, i giganti di pietra rossa e la cultura Navajo",
    state: "Arizona / Utah",
    routeSummary: "Cameron ➔ Kayenta ➔ US Route 163 ➔ Forrest Gump Point ➔ Monument Valley Tribal Park ➔ 17-Mile Valley Drive",
    stageKm: 290,
    progressiveKm: 1070,
    kmToNextLeg: 190,
    estimatedDrivingTime: "~3h 15m di trasferimento autostradale + 2 ore di pista sterrata",
    drivingTimeToNextLeg: "~2 ore fino a Page e Lake Powell",
    nextLegDestination: "Page, Antelope Canyon & Horseshoe Bend",
    overnightStay: "Monument Valley / Goulding's / Kayenta (Utah/Arizona)",
    narrative: `Lasciamo l'altopiano del Grand Canyon per entrare nel cuore della Nazione Navajo, la più vasta riserva indiana degli Stati Uniti d'America. La vegetazione si fa via via più rada mentre la terra assume una brillante colorazione rosso ocra. All'improvviso, percorrendo la leggendaria US Route 163 verso nord, il nastro d'asfalto scende rettilineo verso l'infinito: siamo al celeberrimo Forrest Gump Point (Mile 13), lo scorcio cinematografico più iconico d'America con i monoliti che svettano solenni all'orizzonte. Varcato l'ingresso del Navajo Tribal Park, la vista dal belvedere del Visitor Center su West Mitten Butte, East Mitten Butte e Merrick Butte sembra un dipinto di John Ford. Nel pomeriggio inseriamo la trazione 4x4 del nostro SUV per percorrere la mitica 17-Mile Valley Drive, una pista sterrata di sabbia e roccia che conduce ai piedi delle formazioni più recondite: Three Sisters, Elephant Butte, Camel Butte e l'affilato Totem Pole. La sera ceniamo con il tradizionale Navajo Frybread sotto una volta celeste spettacolare, dove il silenzio del deserto regna sovrano.`,
    stops: [
      {
        name: "Forrest Gump Point (US Route 163, Mile 13)",
        categoryTag: "Punto Iconico Cinematografico",
        location: "US-163 Scenic Byway, Utah (13 miglia a nord del parco)",
        distanceFromPrev: "250 km da Cameron",
        distanceToNext: "20 km fino all'ingresso del Tribal Park",
        description: "Il punto esatto in cui il protagonista del film di Robert Zemeckis decide di interrompere la sua corsa durata tre anni. La strada scende dritta tra due colline d'arenaria regalando la prospettiva prospettica più famosa al mondo.",
        practicalTip: "Scendete dall'auto per scattare la foto sulla linea di mezzeria della carreggiata, prestando sempre la massima attenzione ai veicoli in transito."
      },
      {
        name: "The View & Piazzale delle Mittens",
        categoryTag: "Belvedere Sacro Navajo",
        location: "Monument Valley Navajo Tribal Park Visitor Center",
        distanceFromPrev: "20 km da Forrest Gump Point",
        distanceToNext: "Partenza pista sterrata interna",
        description: "Il belvedere principale affacciato sui tre giganti di arenaria alti oltre 300 metri dalla piana: le due 'muffole' (Mittens) con i loro speroni laterali che somigliano a pollici, e la maestosa Merrick Butte.",
        practicalTip: "Il parco è gestito dalla Nazione Navajo (il pass federale NPS qui non è valido; ingresso circa 8$ a persona). Rispettate i luoghi sacri nativi."
      },
      {
        name: "17-Mile Valley Drive in SUV 4x4",
        categoryTag: "Pista Sterrata & Avventura Fuoristrada",
        location: "Anello sterrato all'interno della valle",
        distanceFromPrev: "Dal Visitor Center",
        distanceToNext: "Rientro al belvedere",
        description: "Un anello sterrato non asfaltato di 27 km tra sabbia rossa e canyon. Tappe imperdibili lungo la pista: John Ford's Point (il promontorio roccioso dei film con John Wayne), Three Sisters, Artist's Point e il Totem Pole alto e sottile come una guglia gotica.",
        practicalTip: "Guidate a bassa velocità per evitare sollevamento di polvere e dossi sabbiosi. Se presente un cavaliere Navajo a John Ford's Point, lasciate una mancia per la foto ricordo col cavallo."
      }
    ],
    panoramicViewpoints: [
      {
        name: "John Ford's Point Overlook",
        elevation: "1.640 m s.l.m.",
        bestTime: "Pomeriggio (15:30 - 17:30)",
        description: "Uno sperone di roccia rossa a sbalzo sulla vallata desertica, utilizzato dal leggendario regista John Ford per inquadrare l'epopea del West nei suoi capolavori.",
        photoTip: "Posizionate un compagno di viaggio sul ciglio dello sperone per immortalare le proporzioni titaniche del deserto circostante."
      },
      {
        name: "Belvedere del Visitor Center all'Alba",
        elevation: "1.670 m s.l.m.",
        bestTime: "Prime luci del mattino",
        description: "Quando il sole sorge alle spalle delle formazioni rocciose, i profili scuri delle Mittens si stagliano contro un cielo che vira dal viola al vermiglio.",
        photoTip: "Sveglia puntata 45 minuti prima del sorgere del sole per godersi lo spettacolo con un caffè caldo."
      }
    ],
    eveningTip: "Cena tipica al ristorante panoramico con 'Navajo Taco' (pane fritto croccante con fagioli speziati, carne, formaggio e pomodoro) e serata a contemplare le costellazioni e la Via Lattea ad occhio nudo."
  },
  {
    dayNumber: 6,
    dayLabel: "Giorno 6",
    title: "Page: Lower Antelope Canyon & Horseshoe Bend",
    subtitle: "Le curve fluide della roccia scavata dall'acqua e il salto smeraldo sul Colorado",
    state: "Arizona",
    routeSummary: "Monument Valley ➔ Kayenta ➔ Page ➔ Lower Antelope Canyon ➔ Wahweap Overlook (Lake Powell) ➔ Horseshoe Bend",
    stageKm: 190,
    progressiveKm: 1260,
    kmToNextLeg: 250,
    estimatedDrivingTime: "~2 ore da Monument Valley a Page",
    drivingTimeToNextLeg: "~2h 45m verso lo Utah e Bryce Canyon",
    nextLegDestination: "Bryce Canyon National Park (Utah)",
    overnightStay: "Page, Arizona (Hotel / Motel)",
    narrative: `Lasciamo le guglie della Monument Valley per dirigerci verso ovest, verso la cittadina di Page fondata nel 1957 durante la costruzione della colossale diga di Glen Canyon. Questa giornata è dedicata a due delle formazioni geologiche più spettacolari e fotografate dell'intero continente americano. In mattinata scendiamo nelle viscere della terra a Lower Antelope Canyon, guidati da un nativo Navajo attraverso scalette in ferro: ci ritroviamo all'interno di una fessura sinuosa scavata nei millenni da improvvise piene alluvionali, dove i raggi solari filtrano dall'alto creando sculture fluide color salmone, ocra, lavanda e porpora. Dopo un pranzo a base di barbecue a Page e una sosta panoramica a Wahweap Overlook sulle acque turchesi del Lago Powell, ci dirigiamo a Horseshoe Bend. Una facile camminata di 1,2 km su sabbia dorata conduce all'improvviso sul bordo di una vertiginosa scarpata: 300 metri a picco sotto i nostri piedi il maestoso fiume Colorado compie una perfetta curva a ferro di cavallo a 270 gradi tra pareti di roccia vermiglia, mentre le sue acque smeraldine brillano nella luce dorata del tramonto.`,
    stops: [
      {
        name: "Lower Antelope Canyon (Tour Guidato Navajo)",
        categoryTag: "Slot Canyon Sotterraneo & Magia di Luce",
        location: "Antelope Point Rd, Page, AZ (Nazione Navajo)",
        distanceFromPrev: "190 km da Monument Valley",
        distanceToNext: "15 km fino a Page centro",
        description: "Uno slot canyon sotterraneo lungo 400 metri. Si scende tramite scalette d'acciaio ancorate alla roccia e si cammina sul fondovalle sabbioso tra pareti ondulate e levigate dall'erosione di piogge torrenziali. La luce riflessa illumina le formazioni rocciose (chiamate 'The Lady in the Wind' e 'The Eagle').",
        practicalTip: "Visita consentita solo con guida Navajo autorizzata. Vietati borse, zaini e bastoni selfie: ammessi esclusivamente smartphone o macchine fotografiche a tracolla e borraccia d'acqua."
      },
      {
        name: "Wahweap Overlook su Lake Powell",
        categoryTag: "Punto Panoramico Lacustre",
        location: "Lakeshore Dr, Glen Canyon National Recreation Area, AZ",
        distanceFromPrev: "12 km da Page",
        distanceToNext: "18 km fino a Horseshoe Bend",
        description: "Punto panoramico sopraelevato che abbraccia l'incredibile contrasto cromatico tra l'acqua blu cobalto del Lago Powell (il secondo bacino artificiale degli USA) e i canyon e le mesas d'arenaria bianca e rossa dell'Arizona e dello Utah.",
        practicalTip: "Sosta perfetta per una pausa rilassante e per scattare foto panoramiche a 180 gradi dell'intera baia di Wahweap."
      },
      {
        name: "Horseshoe Bend Overlook",
        categoryTag: "Icona Naturale Vertiginosa",
        location: "US Route 89, Milepost 545, Page, AZ",
        distanceFromPrev: "8 km a sud di Page",
        distanceToNext: "Rientro a Page per il pernottamento",
        description: "Lo spettacolare meandro a ferro di cavallo inciso dal fiume Colorado. Dal parcheggio si percorre un sentiero pianeggiante di 1,2 km (circa 15-20 minuti a piedi) fino alla terrazza panoramica a strapiombo su un salto verticale di oltre 300 metri.",
        practicalTip: "A parte la piattaforma centrale protetta da ringhiera, la scarpata non presenta barriere: prestate la massima cautela vicino al bordo roccioso senza sporgervi inutilmente."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Horseshoe Bend al Tramonto",
        elevation: "1.300 m s.l.m.",
        bestTime: "17:30 - 19:00 (luce calda)",
        description: "Quando il sole cala alle spalle del meandro, le pareti di roccia riflettono una luce ramata intensa mentre il fiume Colorado si tinge di riflessi smeraldini.",
        photoTip: "Utilizzate un obiettivo grandangolare (o la modalità 0.5x dello smartphone) per riuscire a inquadrare l'intero ferro di cavallo e la barca dei canoisti minuscola sul letto del fiume."
      }
    ],
    eveningTip: "Cena a Page con carne affumicata e pulled pork da Big John's Texas BBQ (allestito in una vecchia stazione di servizio con musica country dal vivo) o bistecche da State 48 Tavern."
  },
  {
    dayNumber: 7,
    dayLabel: "Giorno 7",
    title: "Verso lo Utah: L'Anfiteatro Magico di Bryce Canyon",
    subtitle: "Dall'Arizona all'altopiano di Paunsaugunt tra decine di migliaia di guglie (Hoodoos)",
    state: "Utah",
    routeSummary: "Page ➔ Kanab (Little Hollywood) ➔ Red Canyon ➔ Bryce Canyon National Park ➔ Sunset Point ➔ Bryce Point",
    stageKm: 250,
    progressiveKm: 1510,
    kmToNextLeg: 40,
    estimatedDrivingTime: "~2h 45m di viaggio panoramico attraverso lo Utah",
    drivingTimeToNextLeg: "Spostamenti all'interno del parco tra i punti panoramici",
    nextLegDestination: "Trekking Navajo Loop & Queens Garden",
    overnightStay: "Bryce Canyon City / Tropic (Utah)",
    narrative: `Lasciamo l'Arizona e superiamo il confine con lo Utah, attraversando la graziosa cittadina di Kanab, soprannominata 'Little Hollywood' per le centinaia di film western girati tra i suoi canyon. Man mano che risaliamo verso nord la vegetazione si arricchisce di abeti e pini mentre la quota sale costantemente fino a superare i 2.500 metri sull'altopiano di Paunsaugunt. Prima dell'ingresso al parco attraversiamo gli spettacolari archi di roccia rossa di Red Canyon. Entrati a Bryce Canyon National Park, l'emozione si rinnova: Bryce non è una gola scavata da un fiume, ma un colossale anfiteatro d'erosione a forma di ferro di cavallo scolpito dall'azione del gelo e del disgelo. Sotto i nostri occhi si estende una selva sconfinata di decine di migliaia di pinnacoli e guglie rocciose multicolori chiamate 'Hoodoos', dalle forme di castelli di sabbia fatati e torri gotiche intarsiate. Camminiamo lungo il panoramico Rim Trail tra Sunset Point, Inspiration Point e Bryce Point, godendoci la vista aerea a 270 gradi mentre il crepuscolo tinge le formazioni di salmone, ambra e porpora. Concludiamo la giornata sotto uno dei cieli stellati più incontaminati al mondo, certificato Gold Tier Dark Sky.`,
    stops: [
      {
        name: "Kanab & Red Canyon Scenic Byway 12",
        categoryTag: "Strada Scenografica & Archi Rossi",
        location: "UT-12 Scenic Byway, Dixie National Forest, UT",
        distanceFromPrev: "120 km da Page",
        distanceToNext: "30 km fino a Bryce Canyon",
        description: "La strada panoramica dello Utah attraversa due gallerie scavate direttamente dentro archi d'arenaria vermiglia fiammeggiante circondati da foreste di pini verdi, anticipando la magnificenza geologica di Bryce.",
        practicalTip: "Piccola sosta fotografica nell'area di sosta di Red Canyon per scattare una foto alle caratteristiche gallerie scavate nella roccia rossa."
      },
      {
        name: "Sunset Point & Anfiteatro Centrale",
        categoryTag: "Belvedere Spettacolare",
        location: "Bryce Canyon National Park, UT",
        distanceFromPrev: "30 km da Red Canyon",
        distanceToNext: "Passeggiata sul Rim Trail",
        description: "Il balcone più celebre sull'anfiteatro centrale di Bryce Canyon. Da qui si dominano formazioni celebri come il 'Martello di Thor' (Thor's Hammer) e l'inizio della vertiginosa discesa a fessura di Wall Street.",
        practicalTip: "Siamo a 2.440 metri di altitudine: l'aria è fresca e frizzante anche in piena estate. Indossate una giacca a vento."
      },
      {
        name: "Bryce Point Overlook",
        categoryTag: "Visuale Aerea a 270 Gradi",
        location: "Estremità sud dell'anfiteatro di Bryce, UT",
        distanceFromPrev: "4 km di auto o navetta",
        distanceToNext: "Rientro verso l'alloggio",
        description: "Situato a oltre 2.520 metri di quota, questo promontorio sporge nel vuoto offrendo la prospettiva più drammatica e sconfinata sull'intera catena di hoodoos e sulle vallate dello Utah meridionale.",
        practicalTip: "Punto eccezionale per comprendere l'estensione geografica dell'anfiteatro e la disposizione geometrica delle creste rocciose."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Inspiration Point & Silent City",
        elevation: "2.470 m s.l.m.",
        bestTime: "Tardo pomeriggio prima del tramonto",
        description: "La vista guarda verso la cosiddetta 'Silent City', un labirinto fittissimo di torri rocciose allineate che ricordano le rovine di un'antica metropoli pietrificata.",
        photoTip: "Cercate di catturare il contrasto tra le scanalature in ombra e le cime delle guglie illuminate dall'ultimo raggio di sole radente."
      }
    ],
    eveningTip: "Cena a Bryce Canyon City con carne alla griglia o zuppa calda da Ruby's Inn Cowboy's Buffet & Steak Room, e uscita serale a osservare le stelle: la trasparenza dell'aria a 2.500 metri permette di scorgere fino a 7.500 stelle ad occhio nudo."
  },
  {
    dayNumber: 8,
    dayLabel: "Giorno 8",
    title: "Bryce Canyon: Trekking nel Labirinto di Guglie & Trasferimento",
    subtitle: "Alba dorata a Sunrise Point, discesa a Wall Street e Queens Garden Trail",
    state: "Utah",
    routeSummary: "Sunrise Point ➔ Queens Garden & Navajo Loop ➔ Wall Street ➔ Thor's Hammer ➔ Preparazione per Zion",
    stageKm: 40,
    progressiveKm: 1510,
    kmToNextLeg: 140,
    estimatedDrivingTime: "~40 min di spostamenti interni",
    drivingTimeToNextLeg: "~1h 50m verso la vallata di Zion",
    nextLegDestination: "Zion National Park & Springdale (Utah)",
    overnightStay: "Bryce Canyon City / Orderville / Mount Carmel (Utah)",
    narrative: `La sveglia suona presto per vivere uno dei momenti clou dell'intero viaggio: l'alba a Sunrise Point. Quando i primi raggi del sole superano l'orizzonte, le cime degli hoodoos si accendono progressivamente come torce dorate, passando dall'ombra bluastra della notte a un arancio ruggine brillante. Subito dopo ci allacciamo gli scarponi da trekking per percorrere l'anello escursionistico più bello del parco: la combinazione tra Navajo Loop e Queens Garden Trail (4,6 km). Scendiamo dentro la fessura verticale di Wall Street, fiancheggiata da pareti d'arenaria alte sessanta metri e da abeti Douglas centenari che cercano la luce verso l'alto; camminiamo sul fondovalle tra le guglie di Thor's Hammer e la formazione regale di Queen Victoria, toccando con mano la fragilità e la magnificenza della roccia. Nel pomeriggio ci riposiamo, visitiamo il centro visite del parco per approfondire la geologia e ci prepariamo per il trasferimento dell'indomani verso i colossi di pietra di Zion.`,
    stops: [
      {
        name: "Sunrise Point all'Alba",
        categoryTag: "Spettacolo dell'Alba",
        location: "Bryce Canyon National Park Rim",
        distanceFromPrev: "Dal lodge/hotel (5 min)",
        distanceToNext: "Partenza trekking Queens Garden",
        description: "Il punto panoramico orientato perfettamente a est. Il sole nascente illumina frontalmente l'anfiteatro naturale creando contrasti cromatici indimenticabili tra la pietra rosa e gli alberi verdi.",
        practicalTip: "Vestitevi 'a cipolla': all'alba la temperatura può essere vicina allo zero anche nei mesi caldi, ma risalendo dal canyon il sole scalderà rapidamente."
      },
      {
        name: "Navajo Loop & Wall Street Canyon",
        categoryTag: "Trekking nel Cuore degli Hoodoos",
        location: "Discesa da Sunset Point",
        distanceFromPrev: "Punto di partenza del sentiero",
        distanceToNext: "Raccordo con Queens Garden",
        description: "Sentiero a tornanti stretti ('switchbacks') che scende ripido sul fondo dell'anfiteatro insinuandosi dentro Wall Street, l'unico vero slot canyon naturale di Bryce, chiuso tra pareti verticali e abeti svettanti.",
        practicalTip: "Scarpe da trekking con suola scolpita obbligatorie: il fondo ghiaioso può essere scivoloso in discesa."
      },
      {
        name: "Queens Garden Trail & Thor's Hammer",
        categoryTag: "Trekking & Formazioni Geologiche",
        location: "Tratto centrale e risalita verso Sunrise Point",
        distanceFromPrev: "Dal fondo di Wall Street",
        distanceToNext: "Risalita al bordo dell'anfiteatro",
        description: "Il sentiero risale dolcemente tra archi di pietra, guglie isolate e formazioni evocative tra cui la celebre Queen Victoria, regalando una prospettiva dal basso verso l'alto che fa comprendere l'altezza delle sculture naturali.",
        practicalTip: "La salita finale ha un dislivello di circa 180 metri: affrontatela con passo regolare e fate pause per bere e scattare foto."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Thor's Hammer dal Navajo Loop",
        elevation: "2.350 m s.l.m.",
        bestTime: "Metà mattinata (09:30 - 11:00)",
        description: "Un immenso masso d'arenaria in bilico sulla cima di un pinnacolo sottile, che ricorda il leggendario martello della divinità norrena.",
        photoTip: "Inquadrate il pinnacolo dal sentiero mentre il cielo blu cobalto dello Utah fa da contrasto allo stelo rosso-arancio della roccia."
      }
    ],
    eveningTip: "Cena conviviale in stile western da Bryce Canyon Pines Restaurant (famose le zuppe calde e le crostate fatte in casa ai mirtilli) e meritato riposo muscolare dopo il trekking."
  },
  {
    dayNumber: 9,
    dayLabel: "Giorno 9",
    title: "Verso Zion National Park: La Zion-Mount Carmel Highway",
    subtitle: "Dall'asfalto rosso al tunnel storico del 1930 e il balcone di Canyon Overlook",
    state: "Utah",
    routeSummary: "Bryce ➔ Orderville ➔ UT-9 East Entrance ➔ Checkerboard Mesa ➔ Zion Tunnel ➔ Canyon Overlook ➔ Springdale",
    stageKm: 140,
    progressiveKm: 1650,
    kmToNextLeg: 30,
    estimatedDrivingTime: "~1h 50m di guida scenografica spettacolare",
    drivingTimeToNextLeg: "Spostamenti con la navetta ecologica interna di Zion",
    nextLegDestination: "The Narrows & Scout Lookout",
    overnightStay: "Springdale / Hurricane (Utah)",
    narrative: `La transizione da Bryce a Zion National Park è un capolavoro paesaggistico: percorriamo la leggendaria Utah State Route 9, la Zion-Mount Carmel Highway, con il suo asfalto tinto di rosso per fondersi con l'ambiente naturale circostante. Il paesaggio muta radicalmente: non più guglie sottili, ma massicce montagne d'arenaria levigata e scogliere ciclopiche. Ammiriamo Checkerboard Mesa, una montagna di pietra caratterizzata da una curiosa scacchiera di fratture orizzontali e verticali. Attraversiamo quindi il celeberrimo tunnel storico di Zion, lungo 1,8 km e scavato a mano nella roccia viva nel 1930, con le sue gallerie a finestra affacciate sul vuoto. Appena fuori dal tunnel imbocchiamo il sentiero di Canyon Overlook Trail: una camminata su passerelle di legno e gradini di roccia che culmina su una vertiginosa terrazza naturale a strapiombo sul Pine Creek Canyon e sul maestoso arco di roccia naturale. Nel pomeriggio scendiamo lungo i tornanti fino al verde fondovalle di Springdale, delizioso paesino incastonato tra pareti rocciose di 900 metri. Qui ritiriamo l'attrezzatura tecnica fluviale in vista della leggendaria camminata nelle acque del fiume Virgin l'indomani.`,
    stops: [
      {
        name: "Checkerboard Mesa & East Entrance",
        categoryTag: "Geologia Monumentale",
        location: "East Entrance, Zion National Park, UT-9",
        distanceFromPrev: "100 km da Bryce Canyon",
        distanceToNext: "12 km fino al Tunnel di Zion",
        description: "Una colossale collina di arenaria bianca e ocra la cui superficie è incisa da una griglia naturale di linee di faglia, formata dall'erosione del vento su antiche dune di sabbia giurassiche pietrificate.",
        practicalTip: "Comoda piazzola di sosta sulla destra per scattare una fotografia d'insieme della montagna prima di proseguire verso il tunnel."
      },
      {
        name: "Zion-Mount Carmel Tunnel (1930)",
        categoryTag: "Ingegneria Storica & Galleria di Roccia",
        location: "UT-9, Zion National Park, UT",
        distanceFromPrev: "12 km da Checkerboard Mesa",
        distanceToNext: "Imbocco Canyon Overlook Trail",
        description: "Opera ingegneristica inaugurata nel 1930 dopo tre anni di scavi col plastico nella roccia viva. Lungo 1,8 chilometri, presenta grandi finestre naturali aperte sulla parete del canyon per illuminare e ventilare la galleria.",
        practicalTip: "All'interno del tunnel è vietato fermarsi: godetevi gli scorci panoramici che baluginano dalle finestre della roccia."
      },
      {
        name: "Canyon Overlook Trail",
        categoryTag: "Trekking Panoramico su Passerelle",
        location: "Uscita est del tunnel di Zion",
        distanceFromPrev: "Subito dopo il tunnel",
        distanceToNext: "15 km di discesa fino a Springdale",
        description: "Uno dei sentieri più appaganti e accessibili del parco (1,6 km andata e ritorno, circa 1 ora). Si snoda su ponticelli in legno a sbalzo sulla roccia fino a raggiungere una spettacolare piattaforma affacciata sul Great Arch e sulla vallata principale di Zion.",
        practicalTip: "I posti auto all'uscita del tunnel sono limitati: se il parcheggio è occupato, attendete qualche minuto o usate le piazzole poco più a monte."
      },
      {
        name: "Springdale & Ritiro Attrezzatura Fluviale",
        categoryTag: "Noleggio Tecnico & Campo Base",
        location: "Zion Canyon Village / Springdale, UT",
        distanceFromPrev: "15 km dal Canyon Overlook",
        distanceToNext: "Hotel / B&B a Springdale",
        description: "La porta d'ingresso ideale di Zion. Qui noleggiamo presso gli outfitters locali (Zion Adventure Company o Zion Outfitter) il kit indispensabile per The Narrows: scarponcini specifici con suola in mescola speciale per il bagnato, calzari in neoprene termico e bastone di supporto in legno massiccio.",
        practicalTip: "Provate con cura gli scarponcini con i calzari in neoprene per essere certi che calzino perfettamente senza stringere."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Canyon Overlook Terrace",
        elevation: "1.520 m s.l.m.",
        bestTime: "Pomeriggio inoltrato (16:00 - 17:30)",
        description: "La gola di Pine Creek precipita per centinaia di metri sotto i piedi, mentre di fronte svetta l'arco di roccia naturale scavato nella scogliera rossa e la strada a tornanti che scende verso valle.",
        photoTip: "Ottimo punto per foto panoramiche verticali che catturano la profondità del burrone e l'imponenza delle pareti."
      }
    ],
    eveningTip: "Cena a Springdale nel patio all'aperto di Bit & Spur Restaurant & Saloon (specialità del sud-ovest) o al Whiptail Grill (allestito in una vecchia pompa di benzina riconvertita), con vista sulle scogliere che si tingono di viola al tramonto."
  },
  {
    dayNumber: 10,
    dayLabel: "Giorno 10",
    title: "Zion National Park: The Narrows & I Giganti di Roccia",
    subtitle: "Trekking con i piedi nell'acqua del Virgin River e i tornanti di Scout Lookout",
    state: "Utah",
    routeSummary: "Springdale ➔ Navetta Zion Canyon ➔ Temple of Sinawava ➔ The Narrows (Virgin River) ➔ The Grotto / Scout Lookout",
    stageKm: 25,
    progressiveKm: 1650,
    kmToNextLeg: 290,
    estimatedDrivingTime: "Spostamenti con navetta a emissioni zero del parco",
    drivingTimeToNextLeg: "~3 ore verso il Nevada e la Valley of Fire",
    nextLegDestination: "Valley of Fire State Park & Las Vegas (Nevada)",
    overnightStay: "Springdale / St. George (Utah)",
    narrative: `Entrare a Zion Canyon è un'esperienza opposta rispetto al Grand Canyon o a Bryce: qui ci si trova sul fondovalle rigoglioso, con lo sguardo che deve alzarsi per quasi un chilometro per scorgere la cima dei colossi di pietra rossa e bianca (come il Great White Throne e gli Angeli). Con la comoda navetta gratuita raggiungiamo il capolinea di Temple of Sinawava e imbocchiamo la Riverside Walk fino a entrare nell'acqua del Virgin River: inizia l'avventura leggendaria di The Narrows. Camminiamo controcorrente tra le gole scavate dal torrente, dove le pareti verticali d'arenaria si innalzano per oltre 300 metri restringendosi fino a pochi passi l'una dall'altra (la spettacolare sezione di Wall Street delle Narrows). L'acqua limpida, i ciottoli levigati e i riflessi smeraldini creano un'atmosfera magica e primordiale. Nel pomeriggio, per chi ha ancora fiato e gambe, risaliamo i 21 ripidi tornanti di Walter's Wiggles verso Scout Lookout, una magnifica balconata naturale affacciata sull'intero canyon e punto d'accesso alla cresta di Angels Landing. Concludiamo la giornata a Springdale con il meritato brindisi con birra artigianale locale dello Utah.`,
    stops: [
      {
        name: "Temple of Sinawava & Riverside Walk",
        categoryTag: "Passeggiata Botanica & Accesso Fiume",
        location: "Fermata 9 della navetta di Zion Canyon, UT",
        distanceFromPrev: "45 min di navetta dal Visitor Center",
        distanceToNext: "Ingresso nel letto del Virgin River",
        description: "Sentiero pavimentato di 1,6 km che costeggia il corso del fiume Virgin tra salici, felci e sorgenti d'acqua sorgiva che stillano dalle pareti rocciose, fino alla rampa dove finisce il terreno asciutto e inizia il fiume.",
        practicalTip: "Prima di entrare nel fiume, assicuratevi che gli oggetti elettronici (telefoni, chiavi auto) siano riposti in sacche stagne o custodie impermeabili."
      },
      {
        name: "The Narrows (Trekking Fluviale nel Virgin River)",
        categoryTag: "Trekking Fluviale Epico",
        location: "Gole del Virgin River Narrows, Zion, UT",
        distanceFromPrev: "Dal Temple of Sinawava",
        distanceToNext: "Rientro a Temple of Sinawava (circa 3-4 ore a/r)",
        description: "Uno dei percorsi escursionistici più celebri del pianeta. Si cammina direttamente nell'acqua (dal livello del polpaccio a quello della vita) risalendo la gola fino alla biforcazione di Orderville Canyon e alla sezione di Wall Street, dove il canyon si restringe fino a 6 metri di larghezza sotto pareti titaniche.",
        practicalTip: "Usate il bastone di legno da guado come 'terza gamba' per saggiare la profondità e l'equilibrio tra i ciottoli sommersi del fondale."
      },
      {
        name: "Scout Lookout via Walter's Wiggles",
        categoryTag: "Punto Panoramico & Sentiero a Tornanti",
        location: "Fermata 6 (The Grotto), West Rim Trail, Zion, UT",
        distanceFromPrev: "In navetta da Temple of Sinawava",
        distanceToNext: "Rientro al fondovalle",
        description: "Spettacolare salita panoramica (+320 metri di dislivello) che risale il canyon laterale di Refrigerator Canyon per poi affrontare i 21 tornantini serrati pavimentati nella roccia ('Walter's Wiggles') fino all'affaccio vertiginoso di Scout Lookout.",
        practicalTip: "La vista panoramica su Zion Canyon da Scout Lookout è superba e non richiede il permesso speciale a lotteria (che serve solo per affrontare la catena esposta finale di Angels Landing)."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Wall Street Section dentro The Narrows",
        elevation: "1.350 m s.l.m.",
        bestTime: "Tarda mattinata (11:00 - 13:30 con luce zenitale)",
        description: "Il punto in cui le pareti di roccia levigata si sfiorano quasi in alto, lasciando passare una lama di luce dorata che illumina i vortici d'acqua trasparente.",
        photoTip: "Tenete la fotocamera ferma o utilizzate un'esposizione breve per congelare il movimento dell'acqua e la silhouette dei camminatori tra le pareti."
      }
    ],
    eveningTip: "Cena rigenerante a Springdale con pizza e birra artigianale locale alla Zion Brewery (all'ingresso del parco) o hamburger gourmet da Oscar's Cafe, condividendo le foto del trekking nel fiume."
  },
  {
    dayNumber: 11,
    dayLabel: "Giorno 11",
    title: "Valley of Fire State Park & La Notte di Las Vegas",
    subtitle: "Dalle onde d'arenaria fiammeggiante alle luci sfavillanti della Strip del Nevada",
    state: "Nevada",
    routeSummary: "Springdale (UT) ➔ Virgin River Gorge (AZ) ➔ Valley of Fire (NV) ➔ Fire Wave ➔ Las Vegas Strip",
    stageKm: 290,
    progressiveKm: 1940,
    kmToNextLeg: 280,
    estimatedDrivingTime: "~3 ore di guida panoramica",
    drivingTimeToNextLeg: "~2h 30m attraverso il deserto verso la Death Valley",
    nextLegDestination: "Death Valley National Park (California)",
    overnightStay: "Las Vegas, Nevada (Hotel / Resort sulla Strip)",
    narrative: `Lasciamo lo Utah attraversando lo spettacolare canyon autostradale della Virgin River Gorge in Arizona prima di fare ingresso nello Stato del Nevada. Prima di tuffarci nell'elettrizzante atmosfera di Las Vegas, ci concediamo una deviazione indimenticabile a Valley of Fire State Park, il parco più antico del Nevada. Il nome è azzeccatissimo: qui le dune di sabbia fossili d'arenaria azteca, risalenti all'epoca dei dinosauri (150 milioni di anni fa), sembrano bruciare sotto il sole del deserto con tonalità vermiglie, ocra e magenta. Percorriamo il facile sentiero di Fire Wave, dove la roccia ondula in ipnotiche strisce zebrate bianche e rosse come caramelle zuccherate, e ammiriamo i petroglifi millenari incisi dagli antichi indiani Anasazi ad Atlatl Rock. Nel tardo pomeriggio il contrasto è totale: l'orizzonte desertico lascia il posto all'abbagliante skyline di Las Vegas. Facciamo il nostro ingresso trionfale sulla mitica Strip, tra resort a tema faraonici, fontane zampillanti e insegne luminose. Dopo il check-in in hotel, passeggiamo tra le fontane del Bellagio a tempo di musica, i canali veneziani del Venetian con le gondole e ceniamo celebrando il completamento dei parchi montani.`,
    stops: [
      {
        name: "Valley of Fire Scenic Drive & Scenic Overlooks",
        categoryTag: "Parco Statale & Dune Fossili",
        location: "Moapa Valley, Nevada (uscita I-15 Exit 75)",
        distanceFromPrev: "210 km da Springdale",
        distanceToNext: "10 km fino al trailhead di Fire Wave",
        description: "Una delle scenic byway più belle del deserto del Mojave: asfalto nero pece che taglia colline di roccia arenaria color fuoco vivo. Lungo il tragitto si ammirano curiose formazioni come Elephant Rock (una roccia modellata a forma di elefante con la proboscide) e i petroglifi indiani di Atlatl Rock.",
        practicalTip: "Valley of Fire è un parco statale (ingresso circa 15$ a veicolo). Portate sempre con voi acqua: a metà giornata il deserto del Nevada può essere molto caldo."
      },
      {
        name: "Fire Wave Trail",
        categoryTag: "Trekking su Onde di Roccia Zebrata",
        location: "Dipendenza White Domes Rd, Valley of Fire, NV",
        distanceFromPrev: "Lungo la scenic drive",
        distanceToNext: "80 km verso Las Vegas",
        description: "Breve camminata su sabbia e roccia viva (2,4 km a/r, circa 45 minuti). Conduce a una cresta d'arenaria liscia modellata dal vento con onde concentriche e strisce alternate di colore bianco calcareo e rosso lampone.",
        practicalTip: "Seguite i pali indicatori con i catarifrangenti per orientarvi facilmente sulla roccia nuda."
      },
      {
        name: "Las Vegas Boulevard (The Strip)",
        categoryTag: "Metropoli & Intrattenimento Mondiale",
        location: "Las Vegas Strip, Nevada",
        distanceFromPrev: "80 km da Valley of Fire",
        distanceToNext: "Arrivo in hotel sulla Strip",
        description: "Il viale più celebre al mondo per l'intrattenimento: oltre 6 chilometri di resort iconici che ricreano le capitali del mondo (dalla Torre Eiffel del Paris alla Piramide del Luxor, dai canali del Venetian alla Statua della Libertà del New York-New York).",
        practicalTip: "Per muoversi lungo la Strip usate le passerelle pedonali sopraelevate o la monorotaia per evitare il traffico serale."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Fire Wave Swirls",
        elevation: "610 m s.l.m.",
        bestTime: "Pomeriggio (15:00 - 16:30 con luce radente)",
        description: "Le ondulazioni cromatiche della roccia creano un'illusione ottica di movimento fluido che sembra sfidare la durezza della pietra.",
        photoTip: "Scattate dall'alto verso il basso per esaltare il disegno circolare delle venature concentriche zebrate."
      },
      {
        name: "Fontane del Bellagio dalla Strip",
        elevation: "610 m s.l.m.",
        bestTime: "Sera dopo il tramonto (spettacoli ogni 15 minuti)",
        description: "Gli oltre mille getti d'acqua illuminati che danzano a ritmo di colonne sonore liriche e sinfoniche fino a 140 metri d'altezza con la Tour Eiffel sullo sfondo.",
        photoTip: "Posizionatevi sulla terrazza rialzata di fronte all'hotel Bellagio per inquadrare lago, getti d'acqua e luci della Strip."
      }
    ],
    eveningTip: "Cena scenografica a Las Vegas (buffet imperiale del Caesars Palace o Wynn, oppure burger gourmet da Gordon Ramsay Burger) e passeggiata tra le luci, i casinò e gli spettacoli della Strip prima della quiete del deserto."
  },
  {
    dayNumber: 12,
    dayLabel: "Giorno 12",
    title: "Da Las Vegas alla Death Valley National Park",
    subtitle: "Dalle luci della Strip al silenzio primordiale: Zabriskie Point e le dune dorate",
    state: "California",
    routeSummary: "Las Vegas ➔ Pahrump (rifornimento) ➔ Death Valley Junction ➔ Zabriskie Point ➔ Furnace Creek ➔ Artists Palette ➔ Mesquite Dunes",
    stageKm: 280,
    progressiveKm: 2220,
    kmToNextLeg: 110,
    estimatedDrivingTime: "~2h 30m di viaggio panoramico",
    drivingTimeToNextLeg: "Spostamenti interni tra i punti del parco",
    nextLegDestination: "Badwater Basin (-86 m) & Devils Golf Course",
    overnightStay: "The Ranch at Death Valley / Stovepipe Wells / Beatty (California/Nevada)",
    narrative: `Lasciamo le scintillanti luci di Las Vegas dirigendoci a ovest verso il confine californiano. Facciamo una sosta strategica nella cittadina di Pahrump per effettuare il pieno di carburante e fare abbondante scorta d'acqua in bottiglia: stiamo per entrare nella Death Valley National Park, il parco nazionale più vasto, più arido e più caldo degli Stati Uniti continentali (13.600 chilometri quadrati). L'impatto paesaggistico ribalta ogni pregiudizio: la Valle della Morte non è affatto un deserto piatto e sterile, ma un tripudio di contrasti geologici straordinari. Il nostro primo affaccio è a Zabriskie Point, reso leggendario dal film di Michelangelo Antonioni: una sequenza ipnotica di calanchi e creste d'argilla dorata modellate da antichi torrenti che sembrano onde di sabbia pietrificata. Dopo una visita al Visitor Center di Furnace Creek (con il grande termometro digitale che segna i record mondiali di temperatura), percorriamo nel pomeriggio la scenografica Artists Drive, una strada a senso unico che si insinua tra colline multicolori: a Artists Palette l'ossidazione naturale dei minerali regala sfumature pastello di turchese, rosa, lavanda e verde menta. Concludiamo la giornata camminando a piedi nudi sulle Mesquite Flat Sand Dunes mentre il sole scompare dietro le montagne viola di Panamint.`,
    stops: [
      {
        name: "Pahrump & Preparazione al Deserto",
        categoryTag: "Rifornimento Strategico",
        location: "Pahrump, Nye County, Nevada",
        distanceFromPrev: "100 km da Las Vegas",
        distanceToNext: "60 km fino all'ingresso della Death Valley",
        description: "Ultima cittadina prima del parco nazionale. Tappa fondamentale per fare il pieno di benzina a prezzi normali (all'interno del parco la benzina è molto costosa) e caricare nel SUV scorte supplementari d'acqua fresca.",
        practicalTip: "Verificate la pressione degli pneumatici e assicuratevi di avere a bordo almeno 4-5 litri d'acqua a persona."
      },
      {
        name: "Zabriskie Point Overlook",
        categoryTag: "Punto Panoramico Iconico",
        location: "California State Route 190, Death Valley, CA",
        distanceFromPrev: "75 km da Pahrump",
        distanceToNext: "8 km fino a Furnace Creek",
        description: "Il belvedere più celebre del parco. Una breve rampa lastricata conduce alla sommità di una collina da cui si ammira il labirinto di rughe dorate e creste sedimentarie del bacino di Furnace Creek, con il promontorio di Manly Beacon che domina la scena.",
        practicalTip: "I colori cambiano a seconda dell'inclinazione del sole: al pomeriggio le ombre esaltano la tridimensionalità delle creste rocciose."
      },
      {
        name: "Artists Drive & Artists Palette",
        categoryTag: "Scenic Drive a Senso Unico & Minerali",
        location: "Artists Drive Loop, Badwater Rd, Death Valley, CA",
        distanceFromPrev: "15 km a sud di Furnace Creek",
        distanceToNext: "35 km verso Mesquite Flat Sand Dunes",
        description: "Una sinuosa strada asfaltata di 14 km a senso unico che si snoda tra gole e dossi naturali simili a montagne russe. A metà percorso si apre Artists Palette: formazioni rocciose dove depositi vulcanici ricchi di ferro, manganese e clorite hanno tinto la roccia di verde smeraldo, rosa, ocra e viola.",
        practicalTip: "Guidate assaporando i continui saliscendi e fermatevi nella piazzola dedicata per una breve camminata tra le colline colorate."
      },
      {
        name: "Mesquite Flat Sand Dunes",
        categoryTag: "Dune di Sabbia & Silenzio del Deserto",
        location: "Stovepipe Wells, CA-190, Death Valley, CA",
        distanceFromPrev: "35 km a nord di Furnace Creek",
        distanceToNext: "Rientro all'alloggio",
        description: "Un vasto campo di dune di sabbia finissima dorata incorniciato da montagne frastagliate. Le creste sabbiose raggiungono i 30 metri d'altezza e cambiano profilo a ogni soffio di vento.",
        practicalTip: "Toglietevi le scarpe e camminate a piedi nudi sulla sabbia soffice: al calar del sole la superficie è fresca e piacevole."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Zabriskie Point & Manly Beacon",
        elevation: "200 m s.l.m.",
        bestTime: "Primo mattino o tardo pomeriggio (16:30 - 18:00)",
        description: "Il promontorio piramidale di Manly Beacon si staglia solenne sopra i calanchi dorati con il fondovalle bianco di sale sullo sfondo.",
        photoTip: "Utilizzate il teleobiettivo per isolare i dettagli grafici delle rughe d'argilla e le linee sinuose del terreno."
      },
      {
        name: "Creste delle Mesquite Flat Sand Dunes al Tramonto",
        elevation: "0 m s.l.m.",
        bestTime: "30 minuti prima del tramonto",
        description: "Le ombre allungate delle creste di sabbia creano contrasti geometrici netti tra i versanti dorati illuminati e i versanti blu scuro in ombra.",
        photoTip: "Camminate 15 minuti verso il centro del campo di dune per trovare creste vergini prive di impronte umane."
      }
    ],
    eveningTip: "Cena all'oasi di The Ranch at Death Valley (1849 Restaurant o The Last Kind Words Saloon) o a Stovepipe Wells con birra fredda del deserto, seguita da una sessione di osservazione delle stelle nel silenzio più totale della valle."
  },
  {
    dayNumber: 13,
    dayLabel: "Giorno 13",
    title: "Death Valley: La Depressione di Badwater Basin & Dante's View",
    subtitle: "-86 metri sotto il mare: la crosta di sale esagonale e la vista a volo d'uccello",
    state: "California",
    routeSummary: "Furnace Creek ➔ Badwater Basin (-86 m) ➔ Devils Golf Course ➔ Dante's View (1.669 m) ➔ Pahrump / Death Valley",
    stageKm: 110,
    progressiveKm: 2220,
    kmToNextLeg: 430,
    estimatedDrivingTime: "~2 ore di escursioni interne",
    drivingTimeToNextLeg: "~4h 30m di traversata verso Los Angeles",
    nextLegDestination: "Los Angeles & Hollywood (California)",
    overnightStay: "Death Valley / Pahrump / Ridgecrest (California)",
    narrative: `La mattinata inizia scendendo nel punto più depresso dell'intero continente nordamericano: Badwater Basin, situato a ben 86 metri sotto il livello degli oceani. Parcheggiata l'auto, una passerella in legno lascia spazio a un'immensa distesa candida di oltre 500 chilometri quadrati di sale purissimo. Camminando verso il centro del bacino, la coltre salina si organizza in geometrici poligoni esagonali perfetti, creati dall'evaporazione ciclica dell'acqua salmastra. Alzando lo sguardo verso la vertiginosa parete montuosa alle spalle, si scorge un minuscolo cartello bianco arroccato sulla roccia che indica il livello reale del mare: un promemoria impressionante della profondità del baratro in cui ci troviamo. Proseguiamo verso Devils Golf Course, una distesa lunare di guglie di salgemma così frastagliate e taglienti che 'solo il diavolo potrebbe giocarci a golf'. Nel pomeriggio risaliamo i tornanti della Black Mountains fino a Dante's View, situato a 1.669 metri d'altitudine: da questa terrazza d'aquila abbracciamo con un solo sguardo l'intera vallata della Death Valley, con la chiazza bianca di Badwater centinaia di metri sotto di noi e le cime innevate del Telescope Peak di fronte.`,
    stops: [
      {
        name: "Badwater Basin (-86 Metri sotto il Livello del Mare)",
        categoryTag: "Punto Più Basso del Nord America",
        location: "Badwater Rd, Death Valley National Park, CA",
        distanceFromPrev: "28 km a sud di Furnace Creek",
        distanceToNext: "18 km fino a Devils Golf Course",
        description: "Un'infinita distesa bianca di sali minerali. Camminando per una decina di minuti oltre la rampa iniziale ci si ritrova immersi in una coltre candida di cristalli di sale disposti a nido d'ape. Sulla parete rocciosa a monte si trova il celebre cartello 'Sea Level'.",
        practicalTip: "Il riverbero del sole sul sale bianco è intensissimo: occhiali da sole scuri protettivi e cappellino indispensabili anche di mattina presto."
      },
      {
        name: "Devils Golf Course",
        categoryTag: "Formazione Salina Surreale",
        location: "Pista sterrata da Badwater Rd, Death Valley, CA",
        distanceFromPrev: "18 km a nord di Badwater",
        distanceToNext: "35 km fino a Dante's View",
        description: "Un antico lago disseccato dove i cristalli di salgemma sono stati erosi da vento e piogge fino a formare guglie e crateri aguzzi durissimi. Avvicinando l'orecchio nelle giornate calde si può udire il crepitio sordo dei cristalli di sale che si espandono col calore.",
        practicalTip: "Camminate con prudenza: la superficie è estremamente accidentata e tagliente come cocci di vetro."
      },
      {
        name: "Dante's View (1.669 m s.l.m.)",
        categoryTag: "Belvedere Aereo Panoramico",
        location: "Dante's View Rd, Black Mountains, Death Valley, CA",
        distanceFromPrev: "40 km da Furnace Creek",
        distanceToNext: "Discesa verso l'alloggio",
        description: "Il più spettacolare punto panoramico aereo del parco. Si trova sul ciglio delle Black Mountains e offre una vista a picco su Badwater Basin (1.750 metri più in basso) e sulla catena dei Panamint con il Telescope Peak alto 3.368 metri.",
        practicalTip: "A 1.669 metri la temperatura è di circa 10-15 gradi più fresca rispetto al fondovalle di Badwater: tenete una felpa a portata di mano."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Dante's View Peak",
        elevation: "1.669 m s.l.m.",
        bestTime: "Pomeriggio o prima mattina (visibilità nitida)",
        description: "La distesa bianca di sale di Badwater sembra un fiume di ghiaccio che serpeggia sul fondovalle bruno tra due catene montuose titaniche.",
        photoTip: "Scattate un panorama grandangolare che includa la cresta rocciosa in primo piano e la distesa di sale sul fondovalle."
      },
      {
        name: "Cartello 'Sea Level' a Badwater Basin",
        elevation: "-86 m s.l.m.",
        bestTime: "Mattina prima che il sole sia troppo alto",
        description: "Il cartello affisso sulla scogliera rocciosa che testimonia la verticalità della depressione geografica.",
        photoTip: "Inquadrate un compagno di viaggio sulla passerella di sale con la scogliera e il minuscolo cartello 'Sea Level' alle sue spalle."
      }
    ],
    eveningTip: "Cena rilassante a base di bistecca e patate dolci al saloon, riordino dei bagagli in vista della lunga tappa di rientro verso la costa californiana e meritato riposo."
  },
  {
    dayNumber: 14,
    dayLabel: "Giorno 14",
    title: "Dalla Death Valley a Los Angeles: Hollywood & Griffith Observatory",
    subtitle: "Rientro nella Città degli Angeli, il tramonto sulla metropoli e la Walk of Fame",
    state: "California",
    routeSummary: "Death Valley ➔ Mojave Desert ➔ Barstow (Route 66) ➔ San Gabriel Mountains ➔ Los Angeles ➔ Griffith Observatory ➔ Hollywood",
    stageKm: 430,
    progressiveKm: 2650,
    kmToNextLeg: 70,
    estimatedDrivingTime: "~4h 30m di viaggio autostradale",
    drivingTimeToNextLeg: "~1h 15m tra i quartieri di LA e verso LAX",
    nextLegDestination: "Venice Beach, Beverly Hills & Aeroporto LAX",
    overnightStay: "Los Angeles (Hollywood / West Hollywood / Santa Monica)",
    narrative: `Iniziamo la grande discesa dal cuore del deserto verso l'Oceano Pacifico. Ripercorriamo le piste leggendarie del Deserto del Mojave, incrociando i binari della storica ferrovia Santa Fe a Barstow Station e salutando gli alberi di Joshua Tree che punteggiano le alture. Superato il valico delle San Gabriel Mountains, all'orizzonte si riaffaccia l'immensa distesa urbana di Los Angeles: dopo oltre 2.500 chilometri di silenzi, gole e parchi naturali, l'energia della metropoli accoglie il nostro SUV. Nel tardo pomeriggio saliamo sulla collina verdeggiante del Griffith Observatory: dall'iconica terrazza in stile Art Déco la vista spazia a 360 gradi sull'oceano di grattacieli di Downtown LA fino all'Oceano Pacifico, mentre poco sopra svettano le gigantesche lettere bianche della scritta Hollywood Sign sul Mount Lee. Con l'accendersi delle prime luci della città ci spostiamo su Hollywood Boulevard per una passeggiata sulla mitica Walk of Fame tra le stelle di bronzo incastonate nei marciapiedi e le impronte delle mani dei divi davanti al TCL Chinese Theatre. La sera ci riuniamo per la grande cena celebrativa del road trip, brindando all'anello compiuto con successo.`,
    stops: [
      {
        name: "Barstow Station & Storica Route 66",
        categoryTag: "Sosta Vintage On The Road",
        location: "Barstow, San Bernardino County, California",
        distanceFromPrev: "240 km dalla Death Valley",
        distanceToNext: "190 km fino a Los Angeles",
        description: "Storico nodo ferroviario e punto di sosta della Route 66 allestito con veri vagoni ferroviari storici riconvertiti in ristorantini e botteghe di souvenir vintage della Mother Road.",
        practicalTip: "Ottimo punto per una sosta caffè, sgranchirsi le gambe e spezzare la traversata del deserto prima dell'ingresso nella conurbazione di LA."
      },
      {
        name: "Griffith Observatory & Hollywood Sign Vista",
        categoryTag: "Icona di Los Angeles & Belvedere Metropolitano",
        location: "2800 E Observatory Rd, Los Angeles, CA",
        distanceFromPrev: "190 km da Barstow",
        distanceToNext: "8 km fino a Hollywood Boulevard",
        description: "Uno dei luoghi più amati al mondo, reso immortale da film come 'Gioventù Bruciata' e 'La La Land'. Sorge sulla sommità del Monte Hollywood e offre telescopi storici, sale espositive astronomiche e la vista più scenografica sulla città e sulla scritta 'Hollywood'.",
        practicalTip: "Salite circa un'ora e mezza prima del tramonto per trovare agevolmente parcheggio lungo la salita di Observatory Road e godervi la transizione dal giorno alla notte."
      },
      {
        name: "Hollywood Walk of Fame & TCL Chinese Theatre",
        categoryTag: "Cinema & Storia di Hollywood",
        location: "Hollywood Blvd, Los Angeles, CA",
        distanceFromPrev: "8 km dal Griffith Observatory",
        distanceToNext: "Rientro in hotel",
        description: "La passeggiata più famosa del mondo: oltre 2.700 stelle a cinque punte in granito rosa dedicate ai protagonisti della storia del cinema, della televisione e della musica. Davanti allo storico Chinese Theatre si possono confrontare le proprie mani con le impronte storiche impresse nel cemento.",
        practicalTip: "Cercate le stelle dei vostri attori e registi preferiti e ammirate la facciata a pagoda del Chinese Theatre inaugurato nel 1927."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Terrazza del Griffith Observatory al Tramonto",
        elevation: "346 m s.l.m.",
        bestTime: "Tramonto e crepuscolo (18:30 - 20:00)",
        description: "Il sole cala sul Pacifico mentre lo skyline dei grattacieli di Downtown Los Angeles si accende di migliaia di luci scintillanti.",
        photoTip: "Scattate verso ovest per la silhouette dell'osservatorio col tramonto, e verso nord-est per la scritta 'Hollywood' illuminata dalla luce dorata."
      }
    ],
    eveningTip: "Cena celebrativa finale del gruppo in uno storico ristorante di Hollywood (come Musso & Frank Grill, il più antico locale di Hollywood dal 1919, o Hard Rock Cafe) per festeggiare insieme i chilometri percorsi e le meraviglie scoperte."
  },
  {
    dayNumber: 15,
    dayLabel: "Giorno 15",
    title: "Los Angeles Icons, Venice Beach & Volo di Rientro da LAX",
    subtitle: "Rodeo Drive, i canali di Venice, riconsegna SUV senza costi di drop-off e rientro",
    state: "California",
    routeSummary: "Hollywood ➔ Beverly Hills (Rodeo Drive) ➔ Venice Beach & Canals ➔ Aeroporto LAX ➔ Volo per l'Italia",
    stageKm: 70,
    progressiveKm: 2720,
    kmToNextLeg: 0,
    estimatedDrivingTime: "~1h 15m di tragitto finale urbano",
    drivingTimeToNextLeg: "Volo intercontinentale di rientro in Italia",
    nextLegDestination: "Rientro a Casa in Italia (Arrivo il Giorno 16 per fuso orario)",
    overnightStay: "A bordo del volo aereo per l'Italia",
    narrative: `L'ultimo giorno del nostro epico viaggio californiano è dedicato alle icone della costa pacifica prima della partenza serale. La mattinata inizia tra le eleganti palme di Beverly Hills e le boutique di lusso di Rodeo Drive, celebre per il suo stile impeccabile. Ci spostiamo poi verso l'oceano a Venice Beach: passeggiamo tra i suggestivi e romantici Venice Canals, ideati nel 1905 dal mecenate Abbot Kinney per ricreare una 'Venezia d'America' con ponticelli pedonali in legno, passerelle fiorite e barchette ormeggiate. Raggiungiamo quindi il vivace lungomare di Venice Boardwalk tra artisti di strada, murales colorati, la celebre Muscle Beach e la pista degli skater affacciata sulla spiaggia. Nel pomeriggio percorriamo le poche miglia che ci separano dall'aeroporto internazionale di Los Angeles (LAX). Riconsegniamo con grande semplicità il nostro fedele SUV 4x4 direttamente al centro noleggio: poiché l'anello si è chiuso nella stessa città di partenza, non è prevista alcuna tassa di sola andata ('one-way fee'), massimizzando il risparmio. Saliamo sulla navetta per il terminal partenze, effettuiamo il check-in e ci imbarchiamo sul volo per l'Italia con gli occhi e il cuore ricolmi di immagini indimenticabili dei grandi parchi americani.`,
    stops: [
      {
        name: "Beverly Hills & Rodeo Drive",
        categoryTag: "Icona Californiana & Eleganza",
        location: "Rodeo Dr & Wilshire Blvd, Beverly Hills, CA",
        distanceFromPrev: "8 km da Hollywood",
        distanceToNext: "16 km fino a Venice Beach",
        description: "Il triangolo d'oro dello shopping e dell'architettura di lusso. Passeggiata lungo la via alberata di palme reali, la scalinata europea di Two Rodeo e vista sul celebre Beverly Wilshire Hotel.",
        practicalTip: "Perfetto per una sosta caffè e per scattare una foto ricordo con le famose palme californiane altissime che svettano nel cielo azzurro."
      },
      {
        name: "Venice Canals Historic District",
        categoryTag: "Quartiere Storico & Relax",
        location: "Dell Ave & Venice Blvd, Venice, Los Angeles, CA",
        distanceFromPrev: "16 km da Beverly Hills",
        distanceToNext: "500 metri a piedi fino a Venice Boardwalk",
        description: "Una gemma nascosta a due passi dall'oceano: quattro canali d'acqua navigabili progettati nel 1905, collegati da ponticelli pedonali bianchi e fiancheggiati da splendidi cottage moderni, canoisti e giardini rigogliosi.",
        practicalTip: "Passeggiata rilassante e silenziosa lontana dal traffico delle auto, ideale per godersi gli ultimi raggi di sole californiani."
      },
      {
        name: "Venice Beach Boardwalk & Muscle Beach",
        categoryTag: "Oceano Pacifico & Spirito Bohemien",
        location: "Ocean Front Walk, Venice, CA",
        distanceFromPrev: "Pochi passi dai canali",
        distanceToNext: "14 km fino al centro noleggio di LAX",
        description: "La passeggiata lungomare più eccentrica e vivace d'America: artisti di strada, mercatini artigianali, la celebre palestra all'aperto di Muscle Beach dove si allenava Arnold Schwarzenegger e lo storico skate park sulla sabbia.",
        practicalTip: "Pranzo veloce sul lungomare con un taco californiano o un panino prima di dirigerci verso l'aeroporto."
      },
      {
        name: "Riconsegna SUV & Aeroporto LAX (Partenze)",
        categoryTag: "Logistica di Rientro & Conclusione",
        location: "Rental Car Center LAX / Terminal Internazionale Tom Bradley",
        distanceFromPrev: "14 km da Venice Beach (circa 20-30 min)",
        distanceToNext: "Volo di rientro in Italia",
        description: "Riconsegna rapida del nostro SUV (controllo carburante e chilometri, rilascio ricevuta immediata senza costi di drop-off). Shuttle navetta verso il Terminal Tom Bradley, disbrigo del check-in, controlli TSA e imbarco sul volo per l'Italia.",
        practicalTip: "Arrivate al centro noleggio con almeno 3 ore e mezza di anticipo rispetto all'orario di decollo del volo intercontinentale per gestire con calma riconsegna e controlli di sicurezza."
      }
    ],
    panoramicViewpoints: [
      {
        name: "Venice Beach Skatepark & Oceano Pacifico",
        elevation: "3 m s.l.m.",
        bestTime: "Primo pomeriggio (13:00 - 15:00)",
        description: "La spiaggia sconfinata di sabbia dorata con le onde del Pacifico che si infrangono a riva e la caratteristica pista da skate tra le palme.",
        photoTip: "Scattate l'ultima foto ricordo di gruppo sulla sabbia di Venice Beach prima di salire sul SUV per l'aeroporto."
      }
    ],
    eveningTip: "Volo notturno per l'Italia. A bordo dell'aereo: relax, visione dei film di bordo, ripasso delle centinaia di foto scattate e sonno ristoratore mentre si attraversa l'Atlantico verso casa."
  }
];

export const FULL_ITINERARY_STATS = {
  totalTransferKm: 2720,
  totalEstimatedKmWithParks: 3500,
  durationDays: 15,
  statesVisited: ["California", "Arizona", "Utah", "Nevada"],
  parksCount: 7,
  pickupDropoff: "Los Angeles LAX (Anello Chiuso a Zero Drop-off Fee)",
  vehicleSuggested: "SUV 4x4 Categoria Standard / Full-Size",
  optimalPeriod: "Maggio - Giugno oppure Settembre - Ottobre"
};
