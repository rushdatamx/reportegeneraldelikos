"use client";

import SlideWrapper from "./SlideWrapper";

const AZUL = "#2E75B6";
const GOLD = "#F7B500";

type Periodo = {
  titulo: string;
  subtitulo: string;
  total: string;
  mexico: { monto: string; pct: number; clientes: number };
  export: { monto: string; pct: number; clientes: number };
};

const periodos: Periodo[] = [
  {
    titulo: "2025",
    subtitulo: "Año completo · 12 meses",
    total: "$140.0M",
    mexico: { monto: "$83.6M", pct: 59.7, clientes: 25 },
    export: { monto: "$56.5M", pct: 40.3, clientes: 6 },
  },
  {
    titulo: "2026",
    subtitulo: "Enero a julio · 7 meses",
    total: "$79.2M",
    mexico: { monto: "$46.6M", pct: 58.9, clientes: 27 },
    export: { monto: "$32.5M", pct: 41.1, clientes: 7 },
  },
];

const R = 92;
const CIRC = 2 * Math.PI * R;

function Pay({ periodo }: { periodo: Periodo }) {
  const pctMx = periodo.mexico.pct;
  const dashMx = (pctMx / 100) * CIRC;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5 flex-1 flex flex-col">
      <div className="mb-1">
        <span className="text-2xl font-bold text-gray-800">{periodo.titulo}</span>
        <span className="text-gray-400 text-xs ml-2">{periodo.subtitulo}</span>
      </div>
      <p className="text-gray-500 text-[11px] mb-2">
        Ventas totales{" "}
        <span className="font-bold text-gray-700 tabular-nums">{periodo.total}</span>
      </p>

      <div className="flex items-center gap-5 flex-1">
        <div className="relative shrink-0">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <g transform="rotate(-90 110 110)">
              <circle
                cx="110"
                cy="110"
                r={R}
                fill="none"
                stroke={AZUL}
                strokeWidth="34"
                strokeDasharray={`${dashMx} ${CIRC - dashMx}`}
              />
              <circle
                cx="110"
                cy="110"
                r={R}
                fill="none"
                stroke={GOLD}
                strokeWidth="34"
                strokeDasharray={`${CIRC - dashMx} ${dashMx}`}
                strokeDashoffset={-dashMx}
              />
            </g>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[11px] text-gray-400 leading-none">Total</span>
            <span className="text-xl font-bold text-gray-700 tabular-nums leading-tight">
              {periodo.total}
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {[
            { label: "México", d: periodo.mexico, color: AZUL },
            { label: "Exportación", d: periodo.export, color: GOLD },
          ].map((s, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-gray-700 text-sm font-semibold">{s.label}</span>
              </div>
              <div className="flex items-baseline gap-2 pl-5">
                <span
                  className="text-2xl font-bold tabular-nums"
                  style={{ color: s.color }}
                >
                  {s.d.pct.toFixed(1)}%
                </span>
                <span className="text-gray-600 text-sm font-semibold tabular-nums">
                  {s.d.monto}
                </span>
              </div>
              <p className="text-gray-400 text-[11px] pl-5">
                {s.d.clientes} clientes
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Slide7MexicoExport() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] px-10 pt-8 pb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">
        Ventas por mercado: México y Exportación
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Facturación DELIKOS en millones de pesos (MXN)
      </p>

      <div className="flex gap-5 mb-4 flex-1 min-h-0">
        {periodos.map((p, i) => (
          <Pay key={i} periodo={p} />
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-4">
        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wide mb-2.5">
          Highlights
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {[
            "Caída en ventas a clientes nacionales y clientes de exportación.",
            <>
              Se compensa con <span className="font-bold text-gray-800">5</span>{" "}
              nuevos clientes de exportación que se han desarrollado y se están
              desarrollando.
            </>,
            "Contamos con 48 proyectos activos y por concretar en los mercados EEUU, Guatemala, República Dominicana y Corea del Sur.",
            "Desarrollo de 4 cuentas globales en EEUU que cada una de ellas representará entre el 70% y 130% de la venta actual de la compañía.",
          ].map((txt, i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <span
                className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: GOLD }}
              />
              <p className="text-gray-700 text-[12px] leading-snug">{txt}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
