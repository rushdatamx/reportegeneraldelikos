"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingDown } from "lucide-react";

const AZUL = "#2E75B6";
const GOLD = "#F7B500";
const DORADO_OSCURO = "#B8860B";

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

const cifras = [
  {
    numero: "5",
    titulo: "nuevos clientes de exportación",
    detalle: "Desarrollados y en desarrollo",
  },
  {
    numero: "48",
    titulo: "proyectos activos y por concretar",
    detalle: "EEUU · Guatemala · Rep. Dominicana · Corea del Sur",
  },
  {
    numero: "4",
    titulo: "cuentas globales en EEUU",
    detalle: "Cada una entre el 70% y 130% de la venta actual",
  },
];

const R = 88;
const CIRC = 2 * Math.PI * R;

function Pay({ periodo }: { periodo: Periodo }) {
  const dashMx = (periodo.mexico.pct / 100) * CIRC;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex-1 flex flex-col">
      <div className="mb-0.5">
        <span className="text-2xl font-bold text-gray-800">{periodo.titulo}</span>
        <span className="text-gray-400 text-xs ml-2">{periodo.subtitulo}</span>
      </div>

      <div className="flex items-center justify-center gap-3 flex-1">
        <div className="relative shrink-0">
          <svg width="212" height="212" viewBox="0 0 212 212">
            <g transform="rotate(-90 106 106)">
              <circle cx="106" cy="106" r={R} fill="none" stroke={AZUL} strokeWidth="34" />
              <circle
                cx="106"
                cy="106"
                r={R}
                fill="none"
                stroke={GOLD}
                strokeWidth="34"
                strokeDasharray={`${CIRC - dashMx} ${CIRC}`}
                strokeDashoffset={-dashMx}
              />
            </g>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] text-gray-400 leading-none">Total</span>
            <span className="text-xl font-bold text-gray-700 tabular-nums leading-tight">
              {periodo.total}
            </span>
          </div>
        </div>

        <div className="w-[190px] shrink-0 space-y-3">
          {[
            { label: "México", d: periodo.mexico, color: AZUL },
            { label: "Exportación", d: periodo.export, color: GOLD },
          ].map((s, i) => (
            <div key={i}>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-gray-700 text-sm font-semibold">{s.label}</span>
              </div>
              <div className="flex items-baseline gap-2 pl-[18px]">
                <span
                  className="text-[28px] font-bold tabular-nums leading-none"
                  style={{ color: s.color }}
                >
                  {s.d.pct.toFixed(1)}%
                </span>
                <span className="text-gray-600 text-sm font-semibold tabular-nums">
                  {s.d.monto}
                </span>
              </div>
              <p className="text-gray-400 text-[11px] pl-[18px] mt-0.5">
                {s.d.clientes} clientes
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Slide9MercadoHighlights() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] px-10 pt-7 pb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-0.5">
        Ventas por mercado: México y Exportación
      </h2>
      <p className="text-gray-500 text-sm mb-3">
        Facturación DELIKOS en millones de pesos (MXN)
      </p>

      <div className="flex gap-4 mb-3 flex-1 min-h-0">
        {periodos.map((p, i) => (
          <Pay key={i} periodo={p} />
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-300 shadow-sm px-5 py-2.5 mb-3 flex items-center gap-3">
        <TrendingDown className="w-5 h-5 text-gray-400 shrink-0" />
        <p className="text-gray-600 text-sm font-semibold">
          Caída en ventas a clientes nacionales y clientes de exportación.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 h-[132px] shrink-0">
        {cifras.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border-2 shadow-sm px-5 py-4 flex items-center gap-4 animate-count-up"
            style={{
              borderColor: "rgba(247,181,0,0.35)",
              animationDelay: `${150 + i * 140}ms`,
            }}
          >
            <p
              className="text-[64px] font-bold leading-none tracking-tight tabular-nums shrink-0"
              style={{ color: GOLD }}
            >
              {c.numero}
            </p>
            <div className="min-w-0">
              <p
                className="text-[15px] font-bold leading-tight"
                style={{ color: DORADO_OSCURO }}
              >
                {c.titulo}
              </p>
              <p className="text-gray-500 text-[12px] leading-snug mt-1">
                {c.detalle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
