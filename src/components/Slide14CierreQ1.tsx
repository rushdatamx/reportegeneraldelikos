"use client";

import SlideWrapper from "./SlideWrapper";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const hallazgos = [
  { tipo: "positivo", texto: "Ene y Feb 2026 crecen +14.5% y +21.8% vs 2025 — tendencia de fondo solida" },
  { tipo: "positivo", texto: "MERCO crece +83.6% Q1 vs Q1 — mayor motor de crecimiento nacional" },
  { tipo: "positivo", texto: "Exportacion +12.1% con La Molienda estable y Puente Foods como cliente nuevo" },
  { tipo: "positivo", texto: "Precios unitarios estables o con incrementos moderados (+3-6%)" },
  { tipo: "alerta", texto: "Q1 total baja -9.1% vs 2025, pero 100% explicado por Mar 25 atipico ($18.2M ALSUPER)" },
  { tipo: "alerta", texto: "Botanas y Derivados colapso de $8.6M a $202K — perdida de cliente significativa" },
  { tipo: "alerta", texto: "Concentracion HHI sube a 0.234 — top 3 = 80.6% del ingreso" },
];

const acciones = [
  "Investigar situacion Botanas y Derivados — cliente perdido o retraso temporal",
  "Acelerar expansion de categorias en HEB (solo 2/12) — presentar plan a comprador",
  "Reforzar MERCO: mantener momentum tostadas + crecer FyV y Papas",
  "Diversificar base de clientes nacionales — reducir dependencia de top 3",
  "Preparar propuesta de venta cruzada ALSUPER (Durito, Churrito, Conchita)",
  "Gestionar proactivamente Q2: Abril historicamente fuerte (indice 1.10)",
];

export default function Slide14CierreQ1() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Cierre Q1 2026</h2>
      <p className="text-gray-500 text-sm mb-4">Resumen ejecutivo — hallazgos clave y acciones para Q2</p>

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
            <h3 className="text-[#27AE60] font-bold mb-3">Acciones Q2 2026</h3>
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
              <p className="text-gray-400 text-[9px]">Q1 2026</p>
              <p className="text-[#F7B500] text-xl font-bold">$33.7M</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Productos activos</p>
              <p className="text-gray-800 text-xl font-bold">123</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Clientes activos</p>
              <p className="text-gray-800 text-xl font-bold">11</p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
