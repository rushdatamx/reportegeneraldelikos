"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown } from "lucide-react";

const months = [
  { mes: "Ene", v26: 11.0, v25: 8.1, var: "+36%", pos: true },
  { mes: "Feb", v26: 11.1, v25: 6.3, var: "+75%", pos: true },
  { mes: "Mar", v26: 11.7, v25: 14.4, var: "-19%", pos: false },
  { mes: "Abr", v26: 12.7, v25: 15.3, var: "-17%", pos: false },
  { mes: "May", v26: 10.1, v25: 10.0, var: "+1%", pos: true },
  { mes: "Jun", v26: 10.9, v25: 10.2, var: "+7%", pos: true },
  { mes: "Jul", v26: 10.8, v25: 12.0, var: "-10%", pos: false },
];

const kpis = [
  { label: "Clientes activos", val: "33", sub: "vs 24" },
  { label: "Facturas emitidas", val: "814", sub: "vs 705" },
  { label: "Clientes nuevos", val: "16", sub: "$5.1M" },
  { label: "Mercados export.", val: "7", sub: "vs 2" },
];

export default function Slide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Ventas Ene-Jul 2026</h2>
      <p className="text-gray-500 text-sm mb-6">Facturación DELIKOS · comparativo contra 2025</p>

      <div className="flex items-stretch gap-4 mb-6">
        <div className="bg-white rounded-xl border-2 border-[#27AE60]/40 shadow-sm px-7 py-5 animate-count-up">
          <p className="text-gray-500 text-xs mb-1">Ventas del negocio</p>
          <p className="text-6xl font-bold text-[#27AE60] tracking-tight">$78.4M</p>
          <div className="flex items-center gap-1.5 mt-2">
            <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            <span className="text-[#27AE60] text-xl font-bold">+2.6%</span>
            <span className="text-gray-400 text-xs">vs 2025</span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-3">
          {kpis.map((k, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 flex flex-col justify-center animate-count-up"
              style={{ animationDelay: `${150 + i * 90}ms` }}
            >
              <p className="text-gray-500 text-[11px]">{k.label}</p>
              <p className="text-3xl font-bold text-[#2E75B6]">{k.val}</p>
              <p className="text-gray-400 text-[10px]">{k.sub} en 2025</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-500 text-xs">Facturación mensual (millones MXN)</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#F7B500]" />
              <span className="text-gray-500 text-[10px]">2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-gray-300" />
              <span className="text-gray-500 text-[10px]">2025</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between gap-4">
          {months.map((m, i) => {
            const Trend = m.pos ? TrendingUp : TrendingDown;
            const color = m.pos ? "#27AE60" : "#E31837";
            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center animate-count-up"
                style={{ animationDelay: `${200 + i * 90}ms` }}
              >
                <div className="flex items-end gap-1 h-[95px]">
                  <div className="w-8 rounded-t bg-gray-300" style={{ height: `${(m.v25 / 16) * 95}px` }} />
                  <div className="w-8 rounded-t bg-[#F7B500]" style={{ height: `${(m.v26 / 16) * 95}px` }} />
                </div>
                <p className="text-gray-800 text-base font-bold mt-2">${m.v26}M</p>
                <div className="flex items-center gap-0.5">
                  <Trend className="w-3 h-3" style={{ color }} />
                  <span className="text-[11px] font-bold" style={{ color }}>{m.var}</span>
                </div>
                <p className="text-gray-400 text-[11px]">{m.mes}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#27AE60]/5 border border-[#27AE60]/25 rounded-xl px-6 py-4 flex items-center gap-8">
        <div>
          <p className="text-[#1E8449] text-base font-bold">Ingreso más estable</p>
          <p className="text-gray-500 text-[11px]">Variación mensual</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-gray-400 text-[10px]">2025</p>
            <p className="text-2xl font-bold text-gray-500">27.2%</p>
          </div>
          <TrendingDown className="w-6 h-6 text-[#27AE60]" />
          <div className="text-center">
            <p className="text-gray-400 text-[10px]">2026</p>
            <p className="text-2xl font-bold text-[#27AE60]">6.6%</p>
          </div>
        </div>
        <div className="border-l border-gray-200 pl-8">
          <p className="text-gray-500 text-[11px]">Piso mensual</p>
          <p className="text-gray-800 text-lg font-bold">
            $9.1M <span className="text-gray-300">→</span> <span className="text-[#27AE60]">$10.1M</span>
          </p>
        </div>
        <p className="text-gray-500 text-[11px] leading-relaxed border-l border-gray-200 pl-8 flex-1">
          Marzo y abril 2025 incluyen pedidos extraordinarios de un cliente por $15.2M.
        </p>
      </div>
    </SlideWrapper>
  );
}
