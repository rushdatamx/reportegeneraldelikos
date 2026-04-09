"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown, Plus, Minus } from "lucide-react";

const crecimiento = [
  { nombre: "Tostada Roja 70PZ", q25: "$1.3M", q26: "$3.9M", var: "+192.5%", delta: "+$2.6M" },
  { nombre: "Almendra Domo 250g", q25: "$184K", q26: "$1.5M", var: "+733%", delta: "+$1.3M" },
  { nombre: "Durito 20 pzs", q25: "$546K", q26: "$1.4M", var: "+154%", delta: "+$842K" },
  { nombre: "Uva Pasa Domo 250g", q25: "$87K", q26: "$1.1M", var: "+1164%", delta: "+$1.0M" },
  { nombre: "La Molienda Diabla", q25: "$4.4M", q26: "$5.0M", var: "+12.6%", delta: "+$557K" },
];

const caida = [
  { nombre: "Papa Casera Sal 5KG", q25: "$4.9M", q26: "$0", var: "-100%", delta: "-$4.9M" },
  { nombre: "Almendra Entera 250g*", q25: "$2.0M", q26: "$152K", var: "-92.4%", delta: "-$1.8M" },
  { nombre: "Uva Pasa 250g*", q25: "$1.1M", q26: "$94K", var: "-91.8%", delta: "-$1.0M" },
  { nombre: "Pepita Natural 250g*", q25: "$524K", q26: "$49K", var: "-90.6%", delta: "-$475K" },
  { nombre: "Papa Casera Jal 5KG", q25: "$393K", q26: "$43K", var: "-89.0%", delta: "-$350K" },
];

export default function Slide7CrecimientoCaida() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Crecimiento y Caida Q1</h2>
      <p className="text-gray-500 text-sm mb-4">Productos con mayor cambio absoluto Q1 2025 → Q1 2026</p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {/* Crecimiento */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            <h3 className="text-lg font-bold text-[#27AE60]">Mayor Crecimiento</h3>
          </div>
          <div className="space-y-3">
            {crecimiento.map((p, i) => (
              <div key={i} className="animate-count-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-800 font-semibold">{p.nombre}</span>
                  <span className="text-[#27AE60] font-bold text-sm">{p.delta}</span>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="text-gray-400">Q1 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Q1 26: {p.q26}</span>
                  <span className="text-[#27AE60] font-bold ml-auto bg-[#27AE60]/10 px-2 py-0.5 rounded">{p.var}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caida */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-[#E31837]" />
            <h3 className="text-lg font-bold text-[#E31837]">Mayor Caida</h3>
          </div>
          <div className="space-y-3">
            {caida.map((p, i) => (
              <div key={i} className="animate-count-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-800 font-semibold">{p.nombre}</span>
                  <span className="text-[#E31837] font-bold text-sm">{p.delta}</span>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="text-gray-400">Q1 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Q1 26: {p.q26}</span>
                  <span className="text-[#E31837] font-bold ml-auto bg-[#E31837]/10 px-2 py-0.5 rounded">{p.var}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: New vs Lost summary */}
      <div className="grid grid-cols-2 gap-5 mt-4">
        <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-5 py-3 flex items-center gap-3">
          <Plus className="w-5 h-5 text-[#27AE60]" />
          <div>
            <span className="text-[#27AE60] font-bold text-lg">52</span>
            <span className="text-gray-500 text-sm ml-2">productos nuevos en Q1 2026</span>
            <p className="text-gray-400 text-[10px]">SKUs Domo ALSUPER + PDQ HEB + nuevos MERCO</p>
          </div>
        </div>
        <div className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-xl px-5 py-3 flex items-center gap-3">
          <Minus className="w-5 h-5 text-[#E31837]" />
          <div>
            <span className="text-[#E31837] font-bold text-lg">41</span>
            <span className="text-gray-500 text-sm ml-2">productos perdidos vs Q1 2025</span>
            <p className="text-gray-400 text-[10px]">*SKUs Domo reemplazan versiones anteriores (migracion, no perdida)</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
