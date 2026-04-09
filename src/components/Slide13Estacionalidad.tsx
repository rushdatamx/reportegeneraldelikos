"use client";

import SlideWrapper from "./SlideWrapper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
import { Calendar } from "lucide-react";

const data = [
  { mes: "Ene", indice: 0.95, tipo: "normal" },
  { mes: "Feb", indice: 0.84, tipo: "debil" },
  { mes: "Mar", indice: 1.38, tipo: "fuerte" },
  { mes: "Abr", indice: 1.10, tipo: "fuerte" },
  { mes: "May", indice: 0.93, tipo: "normal" },
  { mes: "Jun", indice: 0.93, tipo: "normal" },
  { mes: "Jul", indice: 0.99, tipo: "normal" },
  { mes: "Ago", indice: 0.88, tipo: "debil" },
  { mes: "Sep", indice: 0.96, tipo: "normal" },
  { mes: "Oct", indice: 1.02, tipo: "normal" },
  { mes: "Nov", indice: 1.02, tipo: "normal" },
  { mes: "Dic", indice: 1.00, tipo: "normal" },
];

const colorMap: Record<string, string> = {
  fuerte: "#27AE60",
  normal: "#F7B500",
  debil: "#E31837",
};

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
      <p className="text-gray-800 text-xs font-bold">{label}: {payload[0].value.toFixed(2)}</p>
      <p className="text-gray-400 text-[10px]">{payload[0].value > 1.05 ? "Por encima del promedio" : payload[0].value < 0.90 ? "Por debajo del promedio" : "Cerca del promedio"}</p>
    </div>
  );
}

export default function Slide13Estacionalidad() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Calendar className="w-7 h-7 text-[#27AE60]" />
        <h2 className="text-3xl font-bold text-gray-800">Estacionalidad</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Indice mensual promedio (2024-2026) · 1.00 = promedio anual</p>

      <div className="flex gap-5 flex-1">
        {/* Chart */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
              <YAxis stroke="#9CA3AF" fontSize={10} domain={[0.7, 1.5]} tickFormatter={(v: number) => v.toFixed(1)} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={1} stroke="#9CA3AF" strokeDasharray="3 3" label={{ value: "Promedio", position: "right", fill: "#9CA3AF", fontSize: 10 }} />
              <Bar dataKey="indice" radius={[4, 4, 0, 0]}>
                {data.map((d, i) => (
                  <Cell key={i} fill={colorMap[d.tipo]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="w-[320px] flex flex-col gap-3">
          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl p-4">
            <h3 className="text-[#27AE60] font-bold text-sm mb-2">Meses Fuertes</h3>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm">Marzo</span>
                <span className="text-[#27AE60] font-bold">1.38</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm">Abril</span>
                <span className="text-[#27AE60] font-bold">1.10</span>
              </div>
            </div>
            <p className="text-gray-400 text-[10px] mt-2">Picos de pedidos — refuerzo de almacen previo a primavera</p>
          </div>

          <div className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-xl p-4">
            <h3 className="text-[#E31837] font-bold text-sm mb-2">Meses Debiles</h3>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm">Febrero</span>
                <span className="text-[#E31837] font-bold">0.84</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm">Agosto</span>
                <span className="text-[#E31837] font-bold">0.88</span>
              </div>
            </div>
            <p className="text-gray-400 text-[10px] mt-2">Valles naturales — oportunidad para promociones</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex-1">
            <div className="flex gap-3 text-[10px] mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-[#27AE60]" />
                <span className="text-gray-500">Fuerte ({">"}1.05)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-[#F7B500]" />
                <span className="text-gray-500">Normal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-[#E31837]" />
                <span className="text-gray-500">Debil ({"<"}0.90)</span>
              </div>
            </div>
            <p className="text-gray-400 text-[10px]">Nota: Mar 2025 inflado por pedido atipico ALSUPER ($8.1M). Indice real de marzo sin anomalia seria ~1.10.</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
