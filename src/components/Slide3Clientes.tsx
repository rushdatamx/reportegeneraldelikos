"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown } from "lucide-react";

const clientes = [
  {
    nombre: "ALSUPER",
    razon: "Operadora Futurama",
    q1_2025: 10.1,
    q1_2026: 10.3,
    variacion: "+1.7%",
    positivo: true,
    topMes: "Ene 26: $4.0M",
    topProducto: "Almendra Entera Domo 250g",
    topVenta: "$1.5M (14.9%)",
    dotColor: "#F7B500",
  },
  {
    nombre: "MERCO",
    razon: "Operadora Merco",
    q1_2025: 3.7,
    q1_2026: 6.8,
    variacion: "+83.6%",
    positivo: true,
    topMes: "Feb 26: $2.4M",
    topProducto: "Tostada Roja 70PZ",
    topVenta: "$3.9M (57.5%)",
    dotColor: "#1A1A1A",
  },
  {
    nombre: "HEB",
    razon: "Supermercados Internacionales",
    q1_2025: 1.6,
    q1_2026: 3.3,
    variacion: "+113.5%",
    positivo: true,
    topMes: "Ene 26: $1.5M",
    topProducto: "Durito 20 piezas",
    topVenta: "$1.0M (30.6%)",
    dotColor: "#9CA3AF",
  },
];

const maxVal = 10.3;

export default function Slide3Clientes() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Top 3 Clientes Nacionales</h2>
      <p className="text-gray-500 text-sm mb-5">Q1 2025 vs Q1 2026 — Facturacion sell-in</p>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {clientes.map((c, i) => {
          const bar2025pct = (c.q1_2025 / maxVal) * 100;
          const bar2026pct = (c.q1_2026 / maxVal) * 100;
          const Trend = c.positivo ? TrendingUp : TrendingDown;
          const trendColor = c.positivo ? "#27AE60" : "#E31837";
          const trendBg = c.positivo ? "bg-[#27AE60]/10 border-[#27AE60]/20" : "bg-[#E31837]/10 border-[#E31837]/20";
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col animate-count-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.dotColor }} />
                  <h3 className="text-lg font-bold text-gray-800">{c.nombre}</h3>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${trendBg} border`} style={{ color: trendColor }}>
                  <Trend className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-400 text-[10px] mb-4">{c.razon}</p>

              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-gray-500">Q1 2025</span>
                    <span className="text-gray-600 font-semibold">${c.q1_2025}M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow flex items-center justify-end pr-2 bg-gray-800"
                      style={{ width: `${bar2025pct}%`, animationDelay: `${i * 200 + 300}ms` }}
                    >
                      {bar2025pct > 15 && <span className="text-white text-[9px] font-bold">${c.q1_2025}M</span>}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-[#B8860B] font-semibold">Q1 2026</span>
                    <span className="text-[#B8860B] font-bold">${c.q1_2026}M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow flex items-center justify-end pr-2 bg-[#F7B500]"
                      style={{ width: `${bar2026pct}%`, animationDelay: `${i * 200 + 500}ms` }}
                    >
                      {bar2026pct > 15 && <span className="text-[#1A1A1A] text-[9px] font-bold">${c.q1_2026}M</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3 text-[10px] text-gray-500">
                Mejor mes Q1: <span className="font-bold text-gray-800">{c.topMes}</span>
              </div>

              <div className="mt-auto bg-[#FDF8F0] rounded-lg p-3 border border-[#E8DCC8]">
                <p className="text-gray-400 text-[10px] mb-1">Producto #1 Q1 2026</p>
                <p className="text-gray-800 text-sm font-semibold">{c.topProducto}</p>
                <p className="text-gray-500 text-xs">{c.topVenta}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-6 mt-3 justify-center text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-gray-800" />
          <span className="text-gray-500">Q1 2025</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F7B500]" />
          <span className="text-[#B8860B]">Q1 2026</span>
        </div>
        <span className="text-gray-400 ml-4">Los 3 clientes nacionales crecen vs Q1 2025</span>
      </div>
    </SlideWrapper>
  );
}
