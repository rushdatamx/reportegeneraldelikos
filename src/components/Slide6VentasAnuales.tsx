"use client";

import SlideWrapper from "./SlideWrapper";
import NotaSlide from "./NotaSlide";

const meses = [
  { mes: "Enero",      y25: 9.3,  y26: 10.0 },
  { mes: "Febrero",    y25: 8.4,  y26: 10.1 },
  { mes: "Marzo",      y25: 17.6, y26: 11.1 },
  { mes: "Abril",      y25: 16.2, y26: 10.9 },
  { mes: "Mayo",       y25: 9.7,  y26: 10.1 },
  { mes: "Junio",      y25: 10.1, y26: 11.0 },
  { mes: "Julio",      y25: 11.0, y26: 10.9 },
  { mes: "Agosto",     y25: 8.7,  y26: 9.2 },
  { mes: "Septiembre", y25: 9.7,  y26: null },
  { mes: "Octubre",    y25: 11.3, y26: null },
  { mes: "Noviembre",  y25: 10.2, y26: null },
  { mes: "Diciembre",  y25: 10.5, y26: null },
];

const totales = { y25: 140.4, y26: 83.5 };
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
        Ventas mensuales 2025 · 2026
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
                  <Celda valor={m.y25} />
                  <Celda valor={m.y26} destacado />
                </tr>
              ))}
              <tr className="border-t-2 border-gray-300 bg-gray-50/70">
                <td className="py-2 px-3 text-gray-800 text-sm font-bold">Total</td>
                <td className="py-2 px-3 text-right text-gray-700 text-sm font-bold tabular-nums">
                  {fmt(totales.y25)}
                </td>
                <td className="py-2 px-3 text-right text-[#B8860B] text-sm font-bold tabular-nums">
                  {fmt(totales.y26)}
                </td>
              </tr>
              <tr>
                <td className="pt-1 px-3 text-gray-400 text-[10px]" colSpan={2}>
                  2026 corresponde a ocho meses (enero a agosto)
                </td>
                <td className="pt-1 px-3 text-right text-gray-400 text-[10px]">8 meses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[290px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4">
            <p className="text-gray-500 text-[11px] mb-1">Mes más bajo del año</p>
            <div className="space-y-2 mt-3">
              {[
                { año: "2025", val: "$8.4M", color: "text-gray-500" },
                { año: "2026", val: "$9.2M", color: "text-[#27AE60]" },
              ].map((d, i) => (
                <div key={i} className="flex items-baseline justify-between">
                  <span className="text-gray-400 text-xs">{d.año}</span>
                  <span className={`text-xl font-bold tabular-nums ${d.color}`}>{d.val}</span>
                </div>
              ))}
            </div>
            <p className="text-[#1E8449] text-[11px] font-semibold mt-3 leading-snug">
              El piso mensual sube contra el año anterior
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex-1">
            <p className="text-gray-500 text-[11px] mb-3">Rango del año</p>
            {[
              { año: "2025", min: 8.4, max: 17.6, c: "#D1D5DB" },
              { año: "2026", min: 9.2, max: 11.1, c: "#F7B500" },
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
              En 2026 los ocho meses caen dentro de un rango de{" "}
              <span className="font-bold text-gray-700">$1.9M</span>, contra{" "}
              <span className="font-bold text-gray-700">$9.2M</span> en 2025.
            </p>
          </div>
        </div>
      </div>

      <NotaSlide>
        La facturación mes a mes contra el año anterior. Lo relevante no es el total, sino el piso: el mes
        más bajo de 2026 ($9.2M) es superior al mes más bajo de 2025 ($8.4M), y los ocho meses del año
        caen dentro de un rango de $1.9M contra $9.2M en 2025. Marzo y abril de 2025 son meses altos por
        pedidos extraordinarios de un cliente, no por corrida normal.
      </NotaSlide>
    </SlideWrapper>
  );
}
