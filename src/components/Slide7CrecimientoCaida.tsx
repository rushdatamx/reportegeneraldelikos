"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown, Plus, Minus } from "lucide-react";

const crecimiento = [
  { nombre: "Almendra Entera Domo", q25: "$194K", q26: "$1.4M", var: "+643%", delta: "+$1.2M" },
  { nombre: "Tostada Roja 70PZ", q25: "$3.4M", q26: "$4.6M", var: "+35%", delta: "+$1.2M" },
  { nombre: "Uva Pasa Domo 250g", q25: "$84K", q26: "$1.3M", var: "+1387%", delta: "+$1.2M" },
  { nombre: "Almendra Reb. Domo", q25: "$121K", q26: "$1.1M", var: "+815%", delta: "+$983K" },
  { nombre: "PDQ 240 Papa 340g", q25: "$0", q26: "$696K", var: "NUEVO", delta: "+$696K" },
];

const caida = [
  { nombre: "Papa Casera Sal 5KG", q25: "$5.8M", q26: "$0", var: "-100%", delta: "-$5.8M" },
  { nombre: "Papa Casera Jal 5KG", q25: "$2.3M", q26: "$202K", var: "-91.3%", delta: "-$2.1M" },
  { nombre: "Cacahuate Tost. 270g", q25: "$1.5M", q26: "$0", var: "-100%", delta: "-$1.5M" },
  { nombre: "Coco Rallado 190g", q25: "$1.3M", q26: "$0", var: "-100%", delta: "-$1.3M" },
  { nombre: "Canela Entera 50g", q25: "$1.2M", q26: "$0", var: "-100%", delta: "-$1.2M" },
];

export default function Slide7CrecimientoCaida() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Crecimiento y Caida Ene-Abr</h2>
      <p className="text-gray-500 text-sm mb-4">Productos con mayor cambio absoluto Ene-Abr 2025 → Ene-Abr 2026</p>

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
                  <span className="text-gray-400">Ene-Abr 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Ene-Abr 26: {p.q26}</span>
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
                  <span className="text-gray-400">Ene-Abr 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Ene-Abr 26: {p.q26}</span>
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
            <span className="text-gray-500 text-sm ml-2">productos nuevos en Ene-Abr 2026</span>
            <p className="text-gray-400 text-[10px]">PDQ HEB ($1.3M) + SKUs Domo ALSUPER + nuevos MERCO</p>
          </div>
        </div>
        <div className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-xl px-5 py-3 flex items-center gap-3">
          <Minus className="w-5 h-5 text-[#E31837]" />
          <div>
            <span className="text-[#E31837] font-bold text-lg">44</span>
            <span className="text-gray-500 text-sm ml-2">productos perdidos vs Ene-Abr 2025</span>
            <p className="text-gray-400 text-[10px]">Botanas y Derivados perdido ($16.5M total) — Casera 5KG, Cacahuate, Coco, Canela</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
