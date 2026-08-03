"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown, ShieldCheck } from "lucide-react";

const months = [
  { mes: "Ene", v26: 11.2, v25: 8.1, var: "+36%", pos: true },
  { mes: "Feb", v26: 11.1, v25: 6.3, var: "+75%", pos: true },
  { mes: "Mar", v26: 11.7, v25: 14.4, var: "-19%", pos: false },
  { mes: "Abr", v26: 12.7, v25: 15.3, var: "-17%", pos: false },
  { mes: "May", v26: 10.1, v25: 10.0, var: "+1%", pos: true },
  { mes: "Jun", v26: 11.0, v25: 10.2, var: "+9%", pos: true },
  { mes: "Jul", v26: 10.8, v25: 12.0, var: "-10%", pos: false },
];

export default function Slide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Negocio comparable Ene-Jul 2026</h2>
      <p className="text-gray-500 text-sm mb-5">
        Facturacion sell-in DELIKOS · excluye maquila de terceros descontinuada (Botanas y Derivados)
      </p>

      <div className="flex items-stretch gap-4 mb-5">
        <div className="bg-white rounded-xl border-2 border-[#27AE60]/40 shadow-sm px-6 py-4 animate-count-up">
          <p className="text-gray-500 text-xs mb-1">Negocio comparable Ene-Jul 2026</p>
          <p className="text-5xl font-bold text-[#27AE60] tracking-tight">$78.4M</p>
          <div className="flex items-center gap-1.5 mt-1">
            <TrendingUp className="w-4 h-4 text-[#27AE60]" />
            <span className="text-[#27AE60] text-lg font-bold">+2.6%</span>
            <span className="text-gray-400 text-[11px]">vs $76.4M en 2025</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-4 animate-count-up" style={{ animationDelay: "120ms" }}>
          <p className="text-gray-500 text-xs mb-1">Facturacion total</p>
          <p className="text-5xl font-bold text-gray-800 tracking-tight">$78.6M</p>
          <p className="text-gray-400 text-[11px] mt-1">
            vs $87.5M en 2025 · incluye $11.1M de maquila 2025 ya descontinuada
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 flex flex-col justify-center animate-count-up" style={{ animationDelay: "240ms" }}>
            <p className="text-gray-500 text-[11px]">Clientes activos</p>
            <p className="text-2xl font-bold text-[#2E75B6]">34</p>
            <p className="text-[#27AE60] text-[10px] font-semibold">+42% vs 24 en 2025</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 flex flex-col justify-center animate-count-up" style={{ animationDelay: "300ms" }}>
            <p className="text-gray-500 text-[11px]">Facturas emitidas</p>
            <p className="text-2xl font-bold text-[#2E75B6]">811</p>
            <p className="text-[#27AE60] text-[10px] font-semibold">+15% vs 705</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 flex flex-col justify-center animate-count-up" style={{ animationDelay: "360ms" }}>
            <p className="text-gray-500 text-[11px]">Clientes nuevos 2026</p>
            <p className="text-2xl font-bold text-[#2E75B6]">16</p>
            <p className="text-[#27AE60] text-[10px] font-semibold">$5.1M facturados</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 flex flex-col justify-center animate-count-up" style={{ animationDelay: "420ms" }}>
            <p className="text-gray-500 text-[11px]">Mercados de export.</p>
            <p className="text-2xl font-bold text-[#2E75B6]">7</p>
            <p className="text-[#27AE60] text-[10px] font-semibold">vs 2 clientes en 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-4">
        <p className="text-gray-500 text-xs mb-3">
          Facturacion mensual comparable — 2026 vs 2025 (millones MXN, sin maquila)
        </p>
        <div className="flex items-end justify-between gap-3">
          {months.map((m, i) => {
            const Trend = m.pos ? TrendingUp : TrendingDown;
            const color = m.pos ? "#27AE60" : "#E31837";
            return (
              <div key={i} className="flex-1 flex flex-col items-center animate-count-up" style={{ animationDelay: `${200 + i * 90}ms` }}>
                <div className="flex items-end gap-1 h-[86px]">
                  <div className="w-7 rounded-t bg-gray-300" style={{ height: `${(m.v25 / 16) * 86}px` }} />
                  <div className="w-7 rounded-t bg-[#F7B500]" style={{ height: `${(m.v26 / 16) * 86}px` }} />
                </div>
                <p className="text-gray-800 text-sm font-bold mt-1.5">${m.v26}M</p>
                <div className="flex items-center gap-0.5">
                  <Trend className="w-3 h-3" style={{ color }} />
                  <span className="text-[11px] font-bold" style={{ color }}>{m.var}</span>
                </div>
                <p className="text-gray-400 text-[10px]">{m.mes}</p>
              </div>
            );
          })}
          <div className="flex flex-col gap-1.5 pl-3 border-l border-gray-200">
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
      </div>

      <div className="flex gap-4 flex-1">
        <div className="bg-[#27AE60]/5 border border-[#27AE60]/25 rounded-xl px-5 py-3 flex-1 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-[#27AE60] shrink-0" />
          <div>
            <p className="text-[#1E8449] text-sm font-bold mb-0.5">Ingreso mas predecible: variacion mensual de 27.2% a 6.6%</p>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Piso mensual sube de $9.1M (2025) a $10.1M (2026). Los 7 meses de 2026 caen en un rango de $10.1M a $12.7M — el flujo dejo de depender de pedidos extraordinarios.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 w-[330px] flex items-center">
          <p className="text-gray-600 text-[11px] leading-relaxed">
            <span className="font-bold text-gray-800">Marzo y abril 2025</span> incluyen pedidos extraordinarios de ALSUPER por $15.2M en dos meses, contra una corrida normal de $1.9M/mes. Es la unica razon de la variacion negativa en esos meses.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
