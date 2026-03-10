"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

const productos = [
  { nombre: "Papa Diabla 5.5oz La Molienda", venta: 3769759, pct: 14.7, color: "#F7B500", tag: "Export" },
  { nombre: "Tostada Roja 70PZ Mi Marca", venta: 2846736, pct: 11.1, color: "#1A1A1A", tag: "MERCO" },
  { nombre: "Papa Salada 5.5oz La Molienda", venta: 2810546, pct: 11.0, color: "#F7B500", tag: "Export" },
  { nombre: "Almendra Entera Domo 250g", venta: 854243, pct: 3.3, color: "#F7B500", tag: "ALSUPER" },
  { nombre: "Durito con 20 piezas", venta: 845610, pct: 3.3, color: "#1A1A1A", tag: "MERCO" },
  { nombre: "Almendra Rebanada Domo 200g", venta: 799629, pct: 3.1, color: "#F7B500", tag: "ALSUPER" },
  { nombre: "Uva Pasa Domo 250g", venta: 747930, pct: 2.9, color: "#F7B500", tag: "ALSUPER" },
  { nombre: "Papa Frita Natural Mimarca 450g", venta: 704955, pct: 2.8, color: "#F7B500", tag: "ALSUPER" },
  { nombre: "Papa Deshidratada 300g", venta: 457459, pct: 1.8, color: "#F7B500", tag: "ALSUPER" },
  { nombre: "Rueda Enchilada 84g C/24", venta: 426014, pct: 1.7, color: "#F7B500", tag: "Export" },
];

const maxVenta = productos[0].venta;

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

const tagColors: Record<string, { bg: string; text: string }> = {
  Export: { bg: "#F7B50025", text: "#B8860B" },
  MERCO: { bg: "#1A1A1A15", text: "#1A1A1A" },
  ALSUPER: { bg: "#F7B50020", text: "#B8860B" },
  HEB: { bg: "#9CA3AF20", text: "#6B7280" },
};

export default function Slide4TopProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-7 h-7 text-[#F7B500]" />
        <h2 className="text-3xl font-bold text-gray-800">Top 10 Productos 2026</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Ranking por venta acumulada YTD (Ene-Mar parcial) · Top 10 concentra 55.8%</p>

      <div className="flex-1 space-y-2">
        {productos.map((p, i) => {
          const barPct = (p.venta / maxVenta) * 100;
          const isFirst = i === 0;
          const tc = tagColors[p.tag] || tagColors.HEB;

          return (
            <div key={i} className="flex items-center gap-3">
              <span className={`w-6 text-right text-sm font-bold ${isFirst ? "text-[#F7B500]" : "text-gray-400"}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${isFirst ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                      {p.nombre}
                    </span>
                    <span
                      className="text-[9px] px-1.5 py-0.5 rounded font-semibold"
                      style={{ backgroundColor: tc.bg, color: tc.text }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-bold text-sm">{formatPesos(p.venta)}</span>
                    <span className="text-gray-400 text-xs w-12 text-right">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full animate-bar-grow"
                    style={{
                      width: `${barPct}%`,
                      backgroundColor: p.color,
                      animationDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex justify-between items-center bg-[#FDF8F0] rounded-lg px-5 py-3 border border-[#E8DCC8]">
        <span className="text-gray-500 text-sm">Total 2026 YTD</span>
        <span className="text-[#F7B500] font-bold text-lg">$25.6M</span>
      </div>
    </SlideWrapper>
  );
}
