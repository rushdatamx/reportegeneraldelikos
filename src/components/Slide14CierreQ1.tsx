"use client";

import SlideWrapper from "./SlideWrapper";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const hallazgos = [
  { tipo: "positivo", texto: "Ene y Feb 2026 crecen +14.5% y +21.8% vs 2025 — tendencia de fondo solida" },
  { tipo: "positivo", texto: "MERCO crece +51.7% Ene-Abr — mayor motor de crecimiento nacional" },
  { tipo: "positivo", texto: "Exportacion +17.1% ($20.3M) — 43.7% del total, 2 clientes nuevos (Aztek + Puente)" },
  { tipo: "positivo", texto: "Precios unitarios estables o con incrementos moderados (+3-4%)" },
  { tipo: "alerta", texto: "Ene-Abr baja -13.7% vs 2025, explicado por Mar-Abr 25 atipicos (ALSUPER $14.8M)" },
  { tipo: "alerta", texto: "Botanas y Derivados colapso de $10.1M a $202K — perdida de cliente critica" },
  { tipo: "alerta", texto: "44 productos perdidos ($16.5M) vs 52 nuevos ($6.1M) — deficit de $10.4M" },
];

const acciones = [
  "Investigar Botanas y Derivados — de $10.1M a $202K, perdida critica de volumen",
  "Acelerar expansion en HEB (solo 2/13 categorias) — oportunidad mas grande",
  "Reforzar MERCO: mantener momentum tostadas + expandir Almendra y Frutos Secos",
  "Propuesta venta cruzada ALSUPER: Durito, Churrito, Conchita, Palomitas, Donita",
  "Diversificar base de clientes nacionales — La Molienda ya es cliente #1 (32.5%)",
  "Preparar Mayo: indice estacionalidad 0.95, impulsar con promociones",
];

export default function Slide14CierreQ1() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Cierre Ene-Abr 2026</h2>
      <p className="text-gray-500 text-sm mb-4">Resumen ejecutivo — hallazgos clave y acciones para Mayo-Jun</p>

      <div className="flex gap-5 flex-1">
        {/* Hallazgos */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-gray-800 font-bold mb-3">Hallazgos Clave</h3>
          <div className="space-y-2.5">
            {hallazgos.map((h, i) => {
              const isPositivo = h.tipo === "positivo";
              const color = isPositivo ? "#27AE60" : "#E31837";
              const Icon = isPositivo ? CheckCircle : AlertTriangle;
              return (
                <div key={i} className="flex items-start gap-2.5 animate-count-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                  <p className="text-gray-600 text-xs leading-relaxed">{h.texto}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Acciones */}
        <div className="w-[480px] flex flex-col gap-3">
          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl p-5 flex-1">
            <h3 className="text-[#27AE60] font-bold mb-3">Acciones Mayo-Jun 2026</h3>
            <div className="space-y-2.5">
              {acciones.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 animate-count-up" style={{ animationDelay: `${i * 80 + 400}ms` }}>
                  <ArrowRight className="w-4 h-4 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-xs leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom KPIs */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Ene-Abr 2026</p>
              <p className="text-[#F7B500] text-xl font-bold">$46.4M</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Productos activos</p>
              <p className="text-gray-800 text-xl font-bold">138</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Clientes activos</p>
              <p className="text-gray-800 text-xl font-bold">26</p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
