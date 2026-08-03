"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown, Plus, Minus } from "lucide-react";

const crecimiento = [
  { nombre: "Almendra Entera Domo 250g", q25: "$388K", q26: "$2.2M", var: "+478%", delta: "+$1.9M" },
  { nombre: "Tostada Roja 70PZ", q25: "$6.0M", q26: "$7.5M", var: "+24%", delta: "+$1.5M" },
  { nombre: "Almendra Rebanada Domo", q25: "$210K", q26: "$1.6M", var: "+645%", delta: "+$1.4M" },
  { nombre: "Uva Pasa Domo 250g", q25: "$111K", q26: "$1.4M", var: "+1,162%", delta: "+$1.3M" },
  { nombre: "Durito 20 piezas", q25: "$2.1M", q26: "$3.1M", var: "+47%", delta: "+$1.0M" },
  { nombre: "PDQ 1260 Papa 45g HEB", q25: "$197K", q26: "$1.1M", var: "+438%", delta: "+$861K" },
];

const caida = [
  { nombre: "Papa Casera Sal 5KG (maquila)", q25: "$6.5M", q26: "$0", var: "-100%", delta: "-$6.5M" },
  { nombre: "Papa Diabla 5.5oz", q25: "$13.5M", q26: "$10.9M", var: "-19%", delta: "-$2.6M" },
  { nombre: "Papa Casera Jalapeño 5KG (maq.)", q25: "$2.5M", q26: "$202K", var: "-92%", delta: "-$2.3M" },
  { nombre: "Papa Salada 5.5oz", q25: "$10.8M", q26: "$8.6M", var: "-20%", delta: "-$2.2M" },
  { nombre: "Cacahuate Tostado 270g", q25: "$1.7M", q26: "$0", var: "-100%", delta: "-$1.7M" },
  { nombre: "Coco Rallado 190g", q25: "$1.4M", q26: "$0", var: "-100%", delta: "-$1.4M" },
];

export default function Slide7CrecimientoCaida() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Rotacion de portafolio Ene-Jul</h2>
      <p className="text-gray-500 text-sm mb-4">Productos con mayor cambio absoluto Ene-Jul 2025 → Ene-Jul 2026</p>

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
                  <span className="text-gray-400">Ene-Jul 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Ene-Jul 26: {p.q26}</span>
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
                  <span className="text-gray-400">Ene-Jul 25: {p.q25}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600 font-semibold">Ene-Jul 26: {p.q26}</span>
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
            <span className="text-[#27AE60] font-bold text-lg">69</span>
            <span className="text-gray-500 text-sm ml-2">productos nuevos en Ene-Jul 2026</span>
            <p className="text-gray-400 text-[10px]">PDQ 240 Papa 340g, Pallet Cornisa, Charrines Mixteca, Durito Don Memo</p>
          </div>
        </div>
        <div className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-xl px-5 py-3 flex items-center gap-3">
          <Minus className="w-5 h-5 text-[#E31837]" />
          <div>
            <span className="text-[#E31837] font-bold text-lg">53</span>
            <span className="text-gray-500 text-sm ml-2">productos descontinuados vs 2025</span>
            <p className="text-gray-400 text-[10px]">Mayoria de maquila Botanas y Derivados (Casera 5KG) y granel ALSUPER</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
