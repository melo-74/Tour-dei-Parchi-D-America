import React, { useState } from 'react';
import { PRACTICAL_TIPS, TRIP_META } from '../data/itineraryData';
import { DollarSign, CheckSquare, Shield, Clock, Compass, Share2, Copy, Check, Car, Sparkles, FileText } from 'lucide-react';

interface PracticalInfoSlideProps {
  onOpenFullItinerary?: () => void;
}

export const PracticalInfoSlide: React.FC<PracticalInfoSlideProps> = ({ onOpenFullItinerary }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [copiedSummary, setCopiedSummary] = useState(false);

  const toggleCheck = (name: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleCopySummary = () => {
    const text = `🇺🇸 ROAD TRIP DEI GRANDI PARCHI AMERICANI
Partenza & Arrivo: Los Angeles (California)
Durata: 15 Giorni | 2.720 km di trasferimento (+ deviazioni parchi = ~3.500 km totali)
Stati: California, Arizona, Utah, Nevada

DISTANZE TRATTA PER TRATTA (Senza calcoli a mente):
• G1: Los Angeles (Arrivo LAX, SUV & Santa Monica Pier)
  -> Tratta successiva: +690 km verso Williams via Route 66 (~7h con soste Far West)
• G2: Route 66 Far West:
  - Da LA a Calico Ghost Town (225 km)
  - Da Calico a Peggy Sue’s 50's Diner (+6 km, 8 min)
  - Da Peggy Sue’s a Oatman (+254 km, 2h 45m)
  - Da Oatman a Williams (+205 km, 2h 20m)
  - Pernottamento a Williams -> Tratta successiva: +90 km al Grand Canyon (~1h 10m)
• G3-4: Grand Canyon South Rim (780 km da inizio)
  -> Tratta successiva: +290 km verso Monument Valley (~3h 15m)
• G5: Monument Valley & Navajo Nation (1.070 km da inizio)
  -> Tratta successiva: +190 km verso Page & Antelope (~2h)
• G6: Page, Antelope Canyon & Horseshoe Bend (1.260 km da inizio)
  -> Tratta successiva: +250 km verso Bryce Canyon (~2h 45m)
• G7-8: Bryce Canyon National Park (1.510 km da inizio)
  -> Tratta successiva: +140 km verso Zion National Park (~1h 50m)
• G9-10: Zion National Park (1.650 km da inizio)
  -> Tratta successiva: +290 km verso Valley of Fire & Las Vegas (~3h)
• G11: Valley of Fire & Notte a Las Vegas Strip (1.940 km da inizio)
  -> Tratta successiva: +280 km verso Death Valley (~2h 30m)
• G12-13: Death Valley National Park (2.220 km da inizio)
  -> Tratta successiva: +430 km verso Los Angeles & Hollywood (~4h 30m)
• G14: Rientro a Los Angeles & Griffith Observatory (2.650 km da inizio)
  -> Tratta successiva: +70 km per Beverly Hills, Venice & LAX (~1h 15m)
• G15: Los Angeles Icons, Riconsegna SUV & Volo da LAX (2.720 km totali)

STIMA COSTO A TESTA: circa 1.850€ - 2.250€ tutto compreso (volo A/R, noleggio SUV a LAX senza one-way drop fee, hotel, pasti, benzina divisa, pass parchi)
Pass 'America The Beautiful': 80$ TOTALI per l'auto!`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col p-4 sm:p-6 max-w-7xl mx-auto overflow-y-auto">
      {/* Slide Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Organizzazione di Gruppo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Logistica, Budget & Consigli per Noi Compagni
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            Tutti i numeri trasparenti e le informazioni operative per partire sereni: costi stimati a testa, pass parchi, fusi orari e cosa mettere in valigia.
          </p>
        </div>

        {/* Action Buttons: Full Itinerary & Copy Summary */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
          {onOpenFullItinerary && (
            <button
              onClick={onOpenFullItinerary}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white font-semibold text-xs shadow-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Itinerario Completo (G1-G15)</span>
            </button>
          )}

          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
          >
            {copiedSummary ? (
              <>
                <Check className="w-4 h-4 text-stone-950" />
                <span>Riepilogo Copiato negli Appunti!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-stone-950" />
                <span>Copia Scheda per la Chat di Gruppo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
        {/* Card 1: Stima Budget */}
        <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 backdrop-blur-md flex flex-col shadow-xl">
          <div className="flex items-center gap-2.5 pb-3 border-b border-stone-800 mb-4">
            <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <DollarSign className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-stone-100">Stima Costi per Persona</h3>
              <span className="text-[11px] text-stone-400">Base gruppo di 4 compagni di viaggio</span>
            </div>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto pr-1">
            {PRACTICAL_TIPS.budget.map((b, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-stone-950/50 border border-stone-800/80">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-stone-200">{b.item}</span>
                  <span className="text-xs font-bold text-amber-400 font-mono">{b.estCost}</span>
                </div>
                <p className="text-[11px] text-stone-400">{b.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
            <span className="text-stone-300 font-medium">Totale Stimato Completo:</span>
            <span className="text-sm font-extrabold text-amber-400 font-mono">~€ 1.900 - 2.300 a testa</span>
          </div>
        </div>

        {/* Card 2: Checklist Valigia & Attrezzatura */}
        <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 backdrop-blur-md flex flex-col shadow-xl">
          <div className="flex items-center gap-2.5 pb-3 border-b border-stone-800 mb-4">
            <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <CheckSquare className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-stone-100">Cosa Mettere in Valigia</h3>
              <span className="text-[11px] text-stone-400">Clicca per spuntare gli oggetti</span>
            </div>
          </div>

          <div className="space-y-2.5 flex-1 overflow-y-auto pr-1">
            {PRACTICAL_TIPS.packingChecklist.map((item, i) => {
              const isDone = !!checkedItems[item.name];
              return (
                <div
                  key={i}
                  onClick={() => toggleCheck(item.name)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isDone
                      ? 'bg-emerald-500/15 border-emerald-500/50 text-stone-400 line-through'
                      : 'bg-stone-950/50 border-stone-800 hover:border-stone-700 text-stone-200'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isDone ? 'bg-emerald-500 border-emerald-400 text-stone-950' : 'border-stone-600 bg-stone-900'
                    }`}
                  >
                    {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-xs leading-snug flex-1">{item.name}</span>
                  {item.essential && !isDone && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold flex-shrink-0">
                      Top
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-stone-950/40 border border-stone-800 text-[11px] text-stone-400">
            💡 Nota: Viaggiare leggeri! Le lavanderie a gettoni americane (Laundromat) nei motel permettono di lavare e asciugare tutto in 45 minuti a metà viaggio.
          </div>
        </div>

        {/* Card 3: Regole On The Road & Il Pass Parchi */}
        <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 backdrop-blur-md flex flex-col shadow-xl">
          <div className="flex items-center gap-2.5 pb-3 border-b border-stone-800 mb-4">
            <span className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
              <Shield className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-stone-100">Pass Parchi & Filosofia di Viaggio</h3>
              <span className="text-[11px] text-stone-400">America The Beautiful Pass</span>
            </div>
          </div>

          <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
            {/* The Pass Box */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/20 via-stone-900 to-stone-950 border border-amber-500/40">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Pass Nazionale Annuale</span>
                <span className="text-xs font-extrabold text-white px-2 py-0.5 rounded bg-amber-500/30 border border-amber-400/40">$80 Totale</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Costa solo 80 dollari e copre l'ingresso del nostro intero SUV e di tutti noi per Grand Canyon, Bryce Canyon, Zion e Death Valley (risparmiamo oltre 120$).
              </p>
            </div>

            {/* Timezones Alert */}
            <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Il Rompicapo dei Fusi Orari</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Nevada e California sono nel fuso Pacifico (PT). Lo Utah è sul fuso Montano (MT, +1 ora). L'Arizona non adotta l'ora legale, ma la Riserva Navajo sì! I nostri smartphone cambieranno orario automaticamente lungo la strada.
              </p>
            </div>

            {/* Road Trip Rules */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-300 block">Regole del Nostro Road Trip:</span>
              {PRACTICAL_TIPS.roadTripRules.map((rule, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-stone-950/40 border border-stone-800/80">
                  <span className="text-xs font-semibold text-amber-400 block mb-0.5">{rule.title}</span>
                  <p className="text-[11px] text-stone-400 leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
