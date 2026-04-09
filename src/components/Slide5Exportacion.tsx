"use client";

import SlideWrapper from "./SlideWrapper";
import { Globe, TrendingUp, ArrowRight } from "lucide-react";

const clientes = [
  {
    nombre: "La Molienda Mexicana",
    pais: "USA",
    q1_2025: "$9.1M",
    q1_2026: "$10.1M",
    variacion: "+11.2%",
    positivo: true,
    tc: "Factura en MXN",
    nota: "Cliente #1 de exportacion — 75.8% del total export",
  },
  {
    nombre: "Dulces La Mejor",
    pais: "USA",
    q1_2025: "$2.3M",
    q1_2026: "$2.5M",
    variacion: "+7.2%",
    positivo: true,
    tc: "TC prom: ~8.00",
    nota: "Crecimiento sostenido",
  },
  {
    nombre: "Puente Foods",
    pais: "USA",
    q1_2025: "$0",
    q1_2026: "$437K",
    variacion: "Nuevo",
    positivo: true,
    tc: "TC prom: ~8.00",
    nota: "Cliente nuevo 2026",
  },
];

const topProductos = [
  { nombre: "Papa Diabla 5.5oz La Molienda", venta: "$5.0M" },
  { nombre: "Papa Salada 5.5oz La Molienda", venta: "$3.8M" },
  { nombre: "Ranchito con Chile La Molienda", venta: "$620K" },
  { nombre: "Rueda Enchilada 84g C/24", venta: "$590K" },
  { nombre: "Rueda con Salsita 84g C/24", venta: "$520K" },
];

const exportAnual = [
  { year: "2023", value: "$49.6M", bar: 88 },
  { year: "2024", value: "$47.0M", bar: 83 },
  { year: "2025", value: "$56.5M", bar: 100 },
];

export default function Slide5Exportacion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Globe className="w-7 h-7 text-[#F7B500]" />
        <h2 className="text-3xl font-bold text-gray-800">Exportacion Q1</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Q1 2025: $11.9M → Q1 2026: $13.3M · <span className="text-[#27AE60] font-semibold">+12.1%</span> · 39.5% del total</p>

      <div className="grid grid-cols-3 gap-4 mb-5">
        {clientes.map((c, i) => {
          const color = c.positivo ? "#27AE60" : "#E31837";
          return (
            <div
              key={i}
              className="rounded-xl p-5 animate-count-up bg-white border border-gray-200 shadow-sm"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-800 font-bold text-sm">{c.nombre}</h3>
                <span className="text-gray-500 text-[10px] bg-gray-100 px-2 py-0.5 rounded">{c.pais}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-800 text-2xl font-bold">{c.q1_2026}</span>
                <span className="text-xs font-bold flex items-center gap-0.5" style={{ color }}>
                  <TrendingUp className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-400 text-[10px] mb-1">Q1 2025: {c.q1_2025}</p>
              <p className="text-gray-400 text-[10px]">{c.tc}</p>
              <p className="text-[#B8860B] text-[10px] mt-2 font-semibold">{c.nota}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-gray-500 text-xs mb-3">Top productos exportacion Q1 2026</p>
          <div className="space-y-2.5">
            {topProductos.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-[#F7B500]" />
                  <span className="text-gray-700 text-xs">{p.nombre}</span>
                </div>
                <span className="text-[#B8860B] font-bold text-xs">{p.venta}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-gray-500 text-xs mb-3">Exportacion anual (Total M)</p>
          <div className="space-y-2">
            {exportAnual.map((d, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500 text-xs">{d.year}</span>
                  <span className="text-gray-800 font-bold text-sm">{d.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-[#F7B500] animate-bar-grow"
                    style={{ width: `${d.bar}%`, animationDelay: `${i * 150}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#27AE60] text-[10px] mt-3 font-semibold">Export crece +12.1% Q1 vs Q1 — motor de diversificacion activo</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
