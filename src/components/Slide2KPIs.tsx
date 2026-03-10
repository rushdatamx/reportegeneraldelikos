"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp } from "lucide-react";

const annualData = [
  { year: "2023", value: "$107.9M", growth: null },
  { year: "2024", value: "$113.5M", growth: "+5.2%" },
  { year: "2025", value: "$138.6M", growth: "+22.1%" },
];

const stackTotal = 7218 + 4551 + 1037;
const stackAlsuper = Math.round((7218 / stackTotal) * 100);
const stackMerco = Math.round((4551 / stackTotal) * 100);
const stackHeb = 100 - stackAlsuper - stackMerco;

export default function Slide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">KPIs Principales</h2>
      <p className="text-gray-500 text-sm mb-6">Facturacion sell-in DELIKOS · YTD Ene-Feb 2026</p>

      <div className="flex items-center gap-8 mb-6">
        <div className="animate-count-up">
          <p className="text-gray-500 text-sm mb-1">Venta YTD 2026</p>
          <p className="text-6xl font-bold text-[#F7B500] tracking-tight">$22.7M</p>
          <p className="text-gray-400 text-xs mt-1">Ene - Feb 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-[#27AE60]/10 border border-[#27AE60]/20 rounded-xl px-5 py-3 animate-count-up" style={{ animationDelay: "150ms" }}>
          <TrendingUp className="w-5 h-5 text-[#27AE60]" />
          <div>
            <p className="text-[#27AE60] text-2xl font-bold">+19.9%</p>
            <p className="text-gray-500 text-[10px]">vs YTD 2025</p>
          </div>
        </div>
        <div className="flex-1" />
        <div className="text-right animate-count-up" style={{ animationDelay: "300ms" }}>
          <p className="text-gray-500 text-xs mb-1">Febrero 2026</p>
          <p className="text-3xl font-bold text-gray-800">$11.5M</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-[#27AE60]" />
            <span className="text-[#27AE60] text-sm font-bold">+25.7%</span>
            <span className="text-gray-400 text-[10px]">vs $9.1M Feb 25</span>
          </div>
        </div>
        <div className="text-right animate-count-up" style={{ animationDelay: "450ms" }}>
          <p className="text-gray-500 text-xs mb-1">Enero 2026</p>
          <p className="text-3xl font-bold text-gray-800">$11.2M</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-[#27AE60]" />
            <span className="text-[#27AE60] text-sm font-bold">+14.4%</span>
            <span className="text-gray-400 text-[10px]">vs $9.8M Ene 25</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-4">
        <p className="text-gray-500 text-xs mb-3">Composicion YTD 2026 — Top 3 clientes</p>
        <div className="w-full h-6 rounded-full overflow-hidden flex animate-bar-grow border border-gray-200">
          <div style={{ width: `${stackAlsuper}%`, backgroundColor: "#F7B500" }} className="h-full" />
          <div style={{ width: `${stackMerco}%`, backgroundColor: "#1A1A1A" }} className="h-full" />
          <div style={{ width: `${stackHeb}%`, backgroundColor: "#9CA3AF" }} className="h-full" />
        </div>
        <div className="flex justify-between mt-2 text-[10px]">
          <span className="text-[#B8860B] font-semibold">ALSUPER $7.2M ({stackAlsuper}%)</span>
          <span className="text-gray-800 font-semibold">MERCO $4.6M ({stackMerco}%)</span>
          <span className="text-[#6B7280] font-semibold">HEB $1.0M ({stackHeb}%)</span>
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
        <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-5 py-4 max-w-[320px] flex items-center">
          <p className="text-[#27AE60] text-[11px] font-semibold leading-relaxed">
            &#10003; YTD 2026 crece +19.9% vs 2025. Ambos meses positivos: Ene +14.4%, Feb +25.7%.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
