"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown } from "lucide-react";

const annualData = [
  { year: "2023", value: "$107.9M", growth: null },
  { year: "2024", value: "$113.5M", growth: "+5.2%" },
  { year: "2025", value: "$138.6M", growth: "+22.1%" },
];

const months = [
  { mes: "Enero", q26: 11.2, q25: 9.8, var: "+14.5%", pos: true },
  { mes: "Febrero", q26: 11.1, q25: 9.1, var: "+21.8%", pos: true },
  { mes: "Marzo", q26: 11.4, q25: 18.2, var: "-37.3%", pos: false },
];

const stackTotal = 10277 + 6832 + 3338;
const stackAlsuper = Math.round((10277 / stackTotal) * 100);
const stackMerco = Math.round((6832 / stackTotal) * 100);
const stackHeb = 100 - stackAlsuper - stackMerco;

export default function Slide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">KPIs Q1 2026</h2>
      <p className="text-gray-500 text-sm mb-5">Facturacion sell-in DELIKOS · Enero - Marzo 2026</p>

      <div className="flex items-center gap-8 mb-5">
        <div className="animate-count-up">
          <p className="text-gray-500 text-sm mb-1">Venta Q1 2026</p>
          <p className="text-6xl font-bold text-[#F7B500] tracking-tight">$33.7M</p>
          <p className="text-gray-400 text-xs mt-1">Ene + Feb + Mar 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-[#E31837]/10 border border-[#E31837]/20 rounded-xl px-5 py-3 animate-count-up" style={{ animationDelay: "150ms" }}>
          <TrendingDown className="w-5 h-5 text-[#E31837]" />
          <div>
            <p className="text-[#E31837] text-2xl font-bold">-9.1%</p>
            <p className="text-gray-500 text-[10px]">vs Q1 2025 ($37.1M)</p>
          </div>
        </div>
        <div className="flex-1" />
        {months.map((m, i) => {
          const Trend = m.pos ? TrendingUp : TrendingDown;
          const color = m.pos ? "#27AE60" : "#E31837";
          return (
            <div key={i} className="text-right animate-count-up" style={{ animationDelay: `${300 + i * 150}ms` }}>
              <p className="text-gray-500 text-xs mb-1">{m.mes} 2026</p>
              <p className="text-2xl font-bold text-gray-800">${m.q26}M</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <Trend className="w-3 h-3" style={{ color }} />
                <span className="text-sm font-bold" style={{ color }}>{m.var}</span>
                <span className="text-gray-400 text-[10px]">vs ${m.q25}M</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-4">
        <p className="text-gray-500 text-xs mb-3">Composicion Q1 2026 — Top 3 clientes nacionales</p>
        <div className="w-full h-6 rounded-full overflow-hidden flex animate-bar-grow border border-gray-200">
          <div style={{ width: `${stackAlsuper}%`, backgroundColor: "#F7B500" }} className="h-full" />
          <div style={{ width: `${stackMerco}%`, backgroundColor: "#1A1A1A" }} className="h-full" />
          <div style={{ width: `${stackHeb}%`, backgroundColor: "#9CA3AF" }} className="h-full" />
        </div>
        <div className="flex justify-between mt-2 text-[10px]">
          <span className="text-[#B8860B] font-semibold">ALSUPER $10.3M ({stackAlsuper}%)</span>
          <span className="text-gray-800 font-semibold">MERCO $6.8M ({stackMerco}%)</span>
          <span className="text-[#6B7280] font-semibold">HEB $3.3M ({stackHeb}%)</span>
        </div>
      </div>

      <div className="flex gap-4 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex-1">
          <p className="text-gray-500 text-xs mb-3">Trayectoria anual</p>
          <div className="flex items-end gap-8">
            {annualData.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-gray-800 font-bold text-xl">{d.value}</span>
                {d.growth && (
                  <span className="text-[#27AE60] text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {d.growth}
                  </span>
                )}
                <span className="text-gray-400 text-sm">{d.year}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F7B500]/5 border border-[#F7B500]/20 rounded-xl px-5 py-4 max-w-[380px] flex items-center">
          <p className="text-[#B8860B] text-[11px] font-semibold leading-relaxed">
            &#9888; Q1 baja -9.1% vs 2025, pero la caida viene de Mar 25 ($18.2M, pedido atipico de ALSUPER). Ene y Feb 2026 crecen +14.5% y +21.8% respectivamente — tendencia de fondo positiva.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
