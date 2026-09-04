"use client";

import SlideWrapper from "./SlideWrapper";
import NotaSlide from "./NotaSlide";
import { TrendingUp, TrendingDown } from "lucide-react";

const clientes = [
  {
    nombre: "MERCO",
    razon: "Operadora Merco",
    y2025: 11.2,
    y2026: 16.1,
    variacion: "+43.6%",
    positivo: true,
    topMes: "May 26: $2.5M",
    topProducto: "Tostada Roja 70PZ",
    topVenta: "$8.4M (52.3%) · +23.6% vs 2025",
    skus: 40,
    dotColor: "#27AE60",
  },
  {
    nombre: "ALSUPER",
    razon: "Operadora Futurama",
    y2025: 26.9,
    y2026: 23.6,
    variacion: "-12.3%",
    positivo: false,
    topMes: "Ene 26: $4.0M",
    topProducto: "Papa Frita Natural Mimarca 450g",
    topVenta: "$2.5M (10.6%) · -2.1% vs 2025",
    skus: 41,
    dotColor: "#F7B500",
  },
  {
    nombre: "HEB",
    razon: "Supermercados Internacionales",
    y2025: 5.2,
    y2026: 5.1,
    variacion: "-2.1%",
    positivo: false,
    topMes: "May 26: $1.0M",
    topProducto: "Durito 20 piezas",
    topVenta: "$2.4M (47.1%) · +31.6% vs 2025",
    skus: 9,
    dotColor: "#2E75B6",
  },
];

const maxVal = 26.9;

export default function Slide4TopProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Clientes nacionales principales</h2>
      <p className="text-gray-500 text-sm mb-5">Ene-Ago 2025 vs 2026 — Facturacion sell-in</p>

      <div className="grid grid-cols-3 gap-5 flex-1 items-stretch">
        {clientes.map((c, i) => {
          const bar2025pct = (c.y2025 / maxVal) * 100;
          const bar2026pct = (c.y2026 / maxVal) * 100;
          const Trend = c.positivo ? TrendingUp : TrendingDown;
          const trendColor = c.positivo ? "#27AE60" : "#E31837";
          const trendBg = c.positivo
            ? "bg-[#27AE60]/10 border-[#27AE60]/20"
            : "bg-[#E31837]/10 border-[#E31837]/20";
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
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${trendBg} border`}
                  style={{ color: trendColor }}
                >
                  <Trend className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-400 text-[10px] mb-4">{c.razon}</p>

              <div className="space-y-3 mb-4 flex-1 flex flex-col justify-center">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-gray-500">Ene-Ago 2025</span>
                    <span className="text-gray-600 font-semibold">${c.y2025}M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow bg-gray-400"
                      style={{ width: `${bar2025pct}%`, animationDelay: `${i * 200 + 300}ms` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-[#B8860B] font-semibold">Ene-Ago 2026</span>
                    <span className="text-[#B8860B] font-bold">${c.y2026}M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow bg-[#F7B500]"
                      style={{ width: `${bar2026pct}%`, animationDelay: `${i * 200 + 500}ms` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-3">
                <div className="bg-gray-50 rounded-lg px-3 py-2 text-[10px] text-gray-500 flex-1">
                  Mejor mes: <span className="font-bold text-gray-800">{c.topMes}</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-3 py-2 text-[10px] text-gray-500">
                  <span className="font-bold text-gray-800">{c.skus}</span> SKUs
                </div>
              </div>

              <div className="bg-[#FDF8F0] rounded-lg p-3 border border-[#E8DCC8]">
                <p className="text-gray-400 text-[10px] mb-1">Producto #1 Ene-Ago 2026</p>
                <p className="text-gray-800 text-sm font-semibold">{c.topProducto}</p>
                <p className="text-gray-500 text-xs">{c.topVenta}</p>
              </div>
            </div>
          );
        })}
      </div>

      <NotaSlide>
        MERCO es la cuenta nacional que más crece, +43.6%, y más de la mitad de su compra corresponde a
        Tostada Roja 70PZ. HEB se mantiene prácticamente estable (-2.1%) y ALSUPER es la cuenta nacional
        más grande con $23.6M; su comparación anual sigue afectada por los picos de marzo y abril de 2025.
      </NotaSlide>
    </SlideWrapper>
  );
}
