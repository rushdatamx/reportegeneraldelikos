"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown, Plus, Minus } from "lucide-react";

const crecimiento = [
  { nombre: "Almendra Entera Domo 250g", q25: "$310K", q26: "$1.9M", var: "+522%", delta: "+$1.6M" },
  { nombre: "Tostada Roja 70PZ", q25: "$5.0M", q26: "$6.5M", var: "+28.4%", delta: "+$1.4M" },
  { nombre: "Uva Pasa Domo 250g", q25: "$101K", q26: "$1.4M", var: "+1240%", delta: "+$1.2M" },
  { nombre: "Almendra Rebanada Domo", q25: "$174K", q26: "$1.4M", var: "+709%", delta: "+$1.2M" },
  { nombre: "PDQ 1260 Papa 45g HEB", q25: "$0", q26: "$994K", var: "NUEVO", delta: "+$994K" },
];

const caida = [
  { nombre: "Papa Casera Sal 5KG", q25: "$6.5M", q26: "$0", var: "-100%", delta: "-$6.5M" },
  { nombre: "Papa Casera Jalapeño 5KG", q25: "$2.5M", q26: "$202K", var: "-91.8%", delta: "-$2.3M" },
  { nombre: "Cacahuate Tostado 270g", q25: "$1.6M", q26: "$0", var: "-100%", delta: "-$1.6M" },
  { nombre: "Coco Rallado 190g", q25: "$1.4M", q26: "$0", var: "-100%", delta: "-$1.4M" },
  { nombre: "Canela Entera 50g", q25: "$1.4M", q26: "$0", var: "-100%", delta: "-$1.4M" },
];

export default function Slide7CrecimientoCaida() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Crecimiento y Caida Ene-Jun</h2>
      <p className="text-gray-500 text-sm mb-4">Productos con mayor cambio absoluto Ene-Jun 2025 → Ene-Jun 2026</p>

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
                  <span className="text-gray-400">Ene-Jun 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Ene-Jun 26: {p.q26}</span>
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
                  <span className="text-gray-400">Ene-Jun 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Ene-Jun 26: {p.q26}</span>
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
            <span className="text-[#27AE60] font-bold text-lg">66</span>
            <span className="text-gray-500 text-sm ml-2">productos nuevos en Ene-Jun 2026</span>
            <p className="text-gray-400 text-[10px]">PDQ HEB + SKUs Domo ALSUPER + nuevos MERCO</p>
          </div>
        </div>
        <div className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-xl px-5 py-3 flex items-center gap-3">
          <Minus className="w-5 h-5 text-[#E31837]" />
          <div>
            <span className="text-[#E31837] font-bold text-lg">48</span>
            <span className="text-gray-500 text-sm ml-2">productos perdidos vs Ene-Jun 2025</span>
            <p className="text-gray-400 text-[10px]">Botanas y Derivados ($11.1M total) — Casera 5KG, Cacahuate, Coco, Canela</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
