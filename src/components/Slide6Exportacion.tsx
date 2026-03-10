"use client";

import SlideWrapper from "./SlideWrapper";
import { Globe, TrendingUp, ArrowRight } from "lucide-react";

const clientes = [
  {
    nombre: "La Molienda Mexicana",
    pais: "USA",
    mxn2025ytd: "$6.0M",
    mxn2026ytd: "$6.2M",
    variacion: "+3.2%",
    positivo: true,
    tc: "Factura en MXN",
    nota: "Cliente #1 de exportacion",
  },
  {
    nombre: "Dulces La Mejor",
    pais: "USA",
    mxn2025ytd: "$1.7M",
    mxn2026ytd: "$2.1M",
    variacion: "+27.6%",
    positivo: true,
    tc: "TC prom: 7.96",
    nota: "Crecimiento sostenido",
  },
  {
    nombre: "Puente Foods",
    pais: "USA",
    mxn2025ytd: "$0",
    mxn2026ytd: "$437K",
    variacion: "Nuevo",
    positivo: true,
    tc: "TC prom: 7.96",
    nota: "Cliente nuevo 2026",
  },
];

const topProductos = [
  { nombre: "Papa Diabla 5.5oz La Molienda", venta: "$3.8M" },
  { nombre: "Papa Salada 5.5oz La Molienda", venta: "$2.8M" },
  { nombre: "Rueda Enchilada 84g C/24", venta: "$426K" },
  { nombre: "Rueda con Salsita 84g C/24", venta: "$418K" },
  { nombre: "Ranchito con Chile La Molienda", venta: "$379K" },
];

const exportAnual = [
  { year: "2023", value: "$49.6M", bar: 88 },
  { year: "2024", value: "$47.0M", bar: 83 },
  { year: "2025", value: "$56.5M", bar: 100 },
];

export default function Slide6Exportacion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Globe className="w-7 h-7 text-[#F7B500]" />
        <h2 className="text-3xl font-bold text-gray-800">Exportacion</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Clientes internacionales · YTD Ene-Feb 2026 vs 2025 · Montos en Total (M)</p>

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
                <span className="text-gray-800 text-2xl font-bold">{c.mxn2026ytd}</span>
                <span
                  className="text-xs font-bold flex items-center gap-0.5"
                  style={{ color }}
                >
                  <TrendingUp className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-400 text-[10px] mb-1">2025 YTD: {c.mxn2025ytd}</p>
              <p className="text-gray-400 text-[10px]">{c.tc}</p>
              <p className="text-[#B8860B] text-[10px] mt-2 font-semibold">{c.nota}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-gray-500 text-xs mb-3">Top productos exportacion 2026</p>
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
          <p className="text-[#27AE60] text-[10px] mt-3 font-semibold">+13.9% crecimiento 2023 a 2025</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
