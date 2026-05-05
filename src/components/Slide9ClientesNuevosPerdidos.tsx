"use client";

import SlideWrapper from "./SlideWrapper";
import { UserPlus, UserMinus, AlertTriangle } from "lucide-react";

const nuevos = [
  { nombre: "Aztek Marketing LLC", tipo: "Export", monto: "$452K", nota: "Nuevo cliente USA — diversificacion export" },
  { nombre: "Puente Foods LLC", tipo: "Export", monto: "$437K", nota: "Nuevo cliente USA" },
];

const crecimiento = [
  { nombre: "MERCO", tipo: "Nacional", monto: "$8.1M", var: "+51.7%", nota: "Ene-Abr 25: $5.3M — crecimiento sostenido" },
  { nombre: "HEB / MITIENDA", tipo: "Nacional", monto: "$2.7M", var: "+26.8%", nota: "Ene-Abr 25: $2.2M — PDQs + Duritos" },
  { nombre: "Dulces La Mejor", tipo: "Export", monto: "$4.3M", var: "+21.8%", nota: "Ene-Abr 25: $3.5M — crecimiento acelerado" },
];

const enRiesgo = [
  { nombre: "Botanas y Derivados", tipo: "Nacional", q25: "$10.1M", q26: "$202K", var: "-98.0%", nota: "Colapso — era cliente #2 en Ene-Abr 25" },
  { nombre: "ALSUPER", tipo: "Nacional", q25: "$17.2M", q26: "$13.4M", var: "-21.8%", nota: "Baja vs Ene-Abr 25 (pedidos atipicos Mar-Abr 25)" },
];

export default function Slide9ClientesNuevosPerdidos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Movimiento de Clientes Ene-Abr</h2>
      <p className="text-gray-500 text-sm mb-4">Nuevos, en crecimiento, y en riesgo — Ene-Abr 2025 vs Ene-Abr 2026</p>

      <div className="flex gap-4 flex-1">
        {/* Column 1: Nuevos + Crecimiento */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Nuevo */}
          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <UserPlus className="w-5 h-5 text-[#27AE60]" />
              <h3 className="text-[#27AE60] font-bold">Cliente Nuevo</h3>
            </div>
            {nuevos.map((c, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-[#27AE60]/20 animate-count-up">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-800 font-bold">{c.nombre}</span>
                  <span className="text-[#27AE60] font-bold">{c.monto}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#27AE60]/10 text-[#27AE60] font-semibold">{c.tipo}</span>
                  <span className="text-gray-400 text-[10px]">{c.nota}</span>
                </div>
              </div>
            ))}
          </div>

          {/* En crecimiento */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#27AE60] flex items-center justify-center">
                <span className="text-white text-xs font-bold">↑</span>
              </div>
              <h3 className="text-gray-800 font-bold">En Crecimiento</h3>
            </div>
            <div className="space-y-2">
              {crecimiento.map((c, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 animate-count-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-semibold text-sm">{c.nombre}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-200 text-gray-500">{c.tipo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-sm">{c.monto}</span>
                      <span className="text-[#27AE60] text-xs font-bold bg-[#27AE60]/10 px-2 py-0.5 rounded">{c.var}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-[10px]">{c.nota}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: En riesgo */}
        <div className="w-[420px]">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#E31837]" />
              <h3 className="text-[#E31837] font-bold">Atencion Requerida</h3>
            </div>
            <div className="space-y-3">
              {enRiesgo.map((c, i) => (
                <div key={i} className="bg-[#E31837]/5 border border-[#E31837]/15 rounded-lg p-4 animate-count-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-bold">{c.nombre}</span>
                    <span className="text-[#E31837] font-bold text-sm">{c.var}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white rounded px-2 py-1">
                      <p className="text-gray-400 text-[9px]">Ene-Abr 2025</p>
                      <p className="text-gray-600 font-semibold text-sm">{c.q25}</p>
                    </div>
                    <div className="bg-white rounded px-2 py-1">
                      <p className="text-gray-400 text-[9px]">Ene-Abr 2026</p>
                      <p className="text-gray-800 font-bold text-sm">{c.q26}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[10px]">{c.nota}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-[#FDF8F0] rounded-lg p-3 border border-[#E8DCC8]">
              <p className="text-[#B8860B] text-[11px] font-semibold leading-relaxed">
                Botanas y Derivados colapso de $10.1M a $202K — investigar causa. ALSUPER baja -21.8% (normalizar Mar-Abr 25 atipicos).
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
