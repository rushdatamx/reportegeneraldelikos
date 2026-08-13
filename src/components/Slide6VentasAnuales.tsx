"use client";

import SlideWrapper from "./SlideWrapper";
import NotaSlide from "./NotaSlide";

const meses = [
  { mes: "Enero",      y24: 14.3, y25: 9.8,  y26: 11.2 },
  { mes: "Febrero",    y24: 8.0,  y25: 9.1,  y26: 11.1 },
  { mes: "Marzo",      y24: 10.5, y25: 18.5, y26: 11.7 },
  { mes: "Abril",      y24: 8.6,  y25: 16.8, y26: 12.7 },
  { mes: "Mayo",       y24: 9.4,  y25: 10.5, y26: 10.0 },
  { mes: "Junio",      y24: 7.6,  y25: 10.7, y26: 10.9 },
  { mes: "Julio",      y24: 8.8,  y25: 12.0, y26: 10.8 },
  { mes: "Agosto",     y24: 7.8,  y25: 9.9,  y26: null },
  { mes: "Septiembre", y24: 8.9,  y25: 9.6,  y26: null },
  { mes: "Octubre",    y24: 9.9,  y25: 11.2, y26: null },
  { mes: "Noviembre",  y24: 11.7, y25: 10.1, y26: null },
  { mes: "Diciembre",  y24: 8.1,  y25: 10.4, y26: null },
];

const totales = { y24: 113.6, y25: 138.6, y26: 78.5 };
const MAX = 19;

const fmt = (v: number) => `$${v.toFixed(1)}M`;

function Celda({
  valor,
  destacado = false,
}: {
  valor: number | null;
  destacado?: boolean;
}) {
  if (valor === null) {
    return (
      <td className="py-[5px] px-3 text-right">
        <span className="text-gray-300 text-sm">—</span>
      </td>
    );
  }
  return (
    <td className="py-[5px] px-3 text-right relative">
      <div className="absolute inset-y-[3px] right-2 rounded-sm" style={{
        width: `${(valor / MAX) * 78}px`,
        backgroundColor: destacado ? "rgba(247,181,0,0.16)" : "rgba(156,163,175,0.13)",
      }} />
      <span
        className={`relative text-sm tabular-nums ${
          destacado ? "font-bold text-[#B8860B]" : "text-gray-600"
        }`}
      >
        {fmt(valor)}
      </span>
    </td>
  );
}

export default function Slide6VentasAnuales() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] px-10 pt-8 pb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">
        Ventas mensuales 2024 · 2025 · 2026
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Facturación total por mes en millones de pesos (MXN)
      </p>

      <div className="flex gap-5 flex-1 min-h-0">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-3 flex-1">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 px-3 text-gray-500 text-[11px] font-semibold uppercase tracking-wide">
                  Mes
                </th>
                <th className="text-right py-2 px-3 text-gray-500 text-[11px] font-semibold">2024</th>
                <th className="text-right py-2 px-3 text-gray-500 text-[11px] font-semibold">2025</th>
                <th className="text-right py-2 px-3 text-[#B8860B] text-[11px] font-bold">2026</th>
              </tr>
            </thead>
            <tbody>
              {meses.map((m, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 ${m.y26 === null ? "opacity-50" : ""}`}
                >
                  <td className="py-[5px] px-3 text-gray-700 text-sm">{m.mes}</td>
                  <Celda valor={m.y24} />
                  <Celda valor={m.y25} />
                  <Celda valor={m.y26} destacado />
                </tr>
              ))}
              <tr className="border-t-2 border-gray-300 bg-gray-50/70">
                <td className="py-2 px-3 text-gray-800 text-sm font-bold">Total</td>
                <td className="py-2 px-3 text-right text-gray-700 text-sm font-bold tabular-nums">
                  {fmt(totales.y24)}
                </td>
                <td className="py-2 px-3 text-right text-gray-700 text-sm font-bold tabular-nums">
                  {fmt(totales.y25)}
                </td>
                <td className="py-2 px-3 text-right text-[#B8860B] text-sm font-bold tabular-nums">
                  {fmt(totales.y26)}
                </td>
              </tr>
              <tr>
                <td className="pt-1 px-3 text-gray-400 text-[10px]" colSpan={3}>
                  2026 corresponde a siete meses (enero a julio)
                </td>
                <td className="pt-1 px-3 text-right text-gray-400 text-[10px]">7 meses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[290px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4">
            <p className="text-gray-500 text-[11px] mb-1">Mes más bajo del año</p>
            <div className="space-y-2 mt-3">
              {[
                { año: "2024", val: "$7.6M", color: "text-gray-500" },
                { año: "2025", val: "$9.1M", color: "text-gray-500" },
                { año: "2026", val: "$10.0M", color: "text-[#27AE60]" },
              ].map((d, i) => (
                <div key={i} className="flex items-baseline justify-between">
                  <span className="text-gray-400 text-xs">{d.año}</span>
                  <span className={`text-xl font-bold tabular-nums ${d.color}`}>{d.val}</span>
                </div>
              ))}
            </div>
            <p className="text-[#1E8449] text-[11px] font-semibold mt-3 leading-snug">
              El piso mensual sube por tercer año consecutivo
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex-1">
            <p className="text-gray-500 text-[11px] mb-3">Rango del año</p>
            {[
              { año: "2024", min: 7.6, max: 14.3, c: "#D1D5DB" },
              { año: "2025", min: 9.1, max: 18.5, c: "#D1D5DB" },
              { año: "2026", min: 10.0, max: 12.7, c: "#F7B500" },
            ].map((d, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-400">{d.año}</span>
                  <span className="text-gray-600 font-semibold tabular-nums">
                    ${d.min}M – ${d.max}M
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 relative">
                  <div
                    className="h-3 rounded-full absolute"
                    style={{
                      left: `${(d.min / MAX) * 100}%`,
                      width: `${((d.max - d.min) / MAX) * 100}%`,
                      backgroundColor: d.c,
                    }}
                  />
                </div>
              </div>
            ))}
            <p className="text-gray-500 text-[11px] leading-snug mt-2">
              En 2026 los siete meses caen dentro de un rango de{" "}
              <span className="font-bold text-gray-700">$2.7M</span>, contra{" "}
              <span className="font-bold text-gray-700">$9.4M</span> en 2025.
            </p>
          </div>
        </div>
      </div>

      <NotaSlide>
        La facturación mes a mes de los últimos tres años. Lo relevante no es el total, sino el piso:
        el mes más bajo de 2026 ($10.0M) es superior al mes más bajo de 2025 ($9.1M) y al de 2024 ($7.6M).
        Marzo y abril de 2025 son meses altos por pedidos extraordinarios de un cliente, no por corrida normal.
      </NotaSlide>
    </SlideWrapper>
  );
}
