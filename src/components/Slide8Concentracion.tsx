"use client";

import SlideWrapper from "./SlideWrapper";
import { PieChart } from "lucide-react";

const clientShares = [
  { nombre: "ALSUPER", pct: 30.5, color: "#F7B500", monto: "$10.3M" },
  { nombre: "La Molienda", pct: 29.9, color: "#2E75B6", monto: "$10.1M" },
  { nombre: "MERCO", pct: 20.2, color: "#1A1A1A", monto: "$6.8M" },
  { nombre: "HEB", pct: 9.9, color: "#9CA3AF", monto: "$3.3M" },
  { nombre: "Dulces La Mejor", pct: 7.3, color: "#27AE60", monto: "$2.5M" },
  { nombre: "Otros (5)", pct: 2.2, color: "#E5E7EB", monto: "$744K" },
];

const segments = (() => {
  let offset = 0;
  return clientShares.map((c) => {
    const start = offset;
    offset += c.pct;
    return { ...c, start, end: offset };
  });
})();

function DonutSegment({ start, end, color, radius = 90, cx = 120, cy = 120, strokeWidth = 35 }: {
  start: number; end: number; color: string; radius?: number; cx?: number; cy?: number; strokeWidth?: number;
}) {
  const circumference = 2 * Math.PI * radius;
  const startAngle = (start / 100) * 360 - 90;
  const sweepPct = (end - start) / 100;
  return (
    <circle
      cx={cx} cy={cy} r={radius}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={`${sweepPct * circumference} ${circumference}`}
      strokeDashoffset={-((start / 100) * circumference)}
      transform={`rotate(-90 ${cx} ${cy})`}
    />
  );
}

export default function Slide8Concentracion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <PieChart className="w-7 h-7 text-[#2E75B6]" />
        <h2 className="text-3xl font-bold text-gray-800">Concentracion de Clientes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Q1 2026 · Top 3 = 80.6% del ingreso</p>

      <div className="flex gap-6 flex-1">
        {/* Donut */}
        <div className="w-[300px] flex flex-col items-center justify-center">
          <svg width="240" height="240" viewBox="0 0 240 240">
            {segments.map((s, i) => (
              <DonutSegment key={i} start={s.start} end={s.end} color={s.color} />
            ))}
            <text x="120" y="110" textAnchor="middle" className="text-2xl font-bold" fill="#1A1A1A">80.6%</text>
            <text x="120" y="135" textAnchor="middle" className="text-xs" fill="#9CA3AF">Top 3</text>
          </svg>
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            {clientShares.map((c, i) => (
              <div key={i} className="flex items-center gap-1 text-[9px]">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-gray-500">{c.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Client breakdown */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-3">Participacion por cliente</p>
            <div className="space-y-2">
              {clientShares.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                  <span className="text-gray-700 text-sm w-32">{c.nombre}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-3">
                    <div
                      className="h-3 rounded-full animate-bar-grow"
                      style={{ width: `${c.pct}%`, backgroundColor: c.color, animationDelay: `${i * 80}ms` }}
                    />
                  </div>
                  <span className="text-gray-800 font-bold text-sm w-16 text-right">{c.pct}%</span>
                  <span className="text-gray-500 text-xs w-16 text-right">{c.monto}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[10px] mb-1">HHI Q1 2026</p>
              <p className="text-[#2E75B6] text-2xl font-bold">0.234</p>
              <p className="text-gray-400 text-[9px]">Concentracion moderada</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Nacional</p>
              <p className="text-gray-800 text-2xl font-bold">60.5%</p>
              <p className="text-[#E31837] text-[9px] font-semibold">-19.1% vs Q1 25</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Exportacion</p>
              <p className="text-[#2E75B6] text-2xl font-bold">39.5%</p>
              <p className="text-[#27AE60] text-[9px] font-semibold">+12.1% vs Q1 25</p>
            </div>
          </div>

          <div className="bg-[#2E75B6]/5 border border-[#2E75B6]/20 rounded-xl px-4 py-2">
            <p className="text-[#2E75B6] text-[11px] font-semibold">
              &#9888; HHI sube de 0.206 a 0.234 — concentracion aumentando. Diversificar con nuevos clientes nacionales es prioridad.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
