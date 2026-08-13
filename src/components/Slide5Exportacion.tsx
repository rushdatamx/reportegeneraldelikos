"use client";

import SlideWrapper from "./SlideWrapper";
import NotaSlide from "./NotaSlide";
import { Globe, TrendingUp, ArrowRight } from "lucide-react";

const clientes = [
  {
    nombre: "Dulces La Mejor",
    pais: "USA",
    y2025: "$6.5M",
    y2026: "$6.9M",
    variacion: "+5.6%",
    positivo: true,
    nota: "Cliente export consolidado, crecimiento sostenido",
  },
  {
    nombre: "5 clientes nuevos export",
    pais: "USA",
    y2025: "$0",
    y2026: "$2.4M",
    variacion: "Nuevos",
    positivo: true,
    nota: "Mixteca $1.2M · Aztek $0.5M · Puente, Safari, Sakia",
  },
  {
    nombre: "La Molienda Mexicana",
    pais: "USA · MXN",
    y2025: "$28.1M",
    y2026: "$23.2M",
    variacion: "-17.4%",
    positivo: false,
    nota: "Menor dependencia de un solo comprador",
  },
];

const topProductos = [
  { nombre: "Papa Diabla 5.5oz La Molienda", venta: "$11.0M" },
  { nombre: "Papa Salada 5.5oz La Molienda", venta: "$8.6M" },
  { nombre: "Ranchito con Chile La Molienda", venta: "$1.6M" },
  { nombre: "Rueda Enchilada 84g C/24", venta: "$1.2M" },
  { nombre: "Rueda con Salsita 84g C/24", venta: "$1.2M" },
];

export default function Slide5Exportacion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] px-10 pt-8 pb-6">
      <div className="flex items-center gap-3 mb-1">
        <Globe className="w-7 h-7 text-[#F7B500]" />
        <h2 className="text-3xl font-bold text-gray-800">Exportacion: de 2 a 7 compradores</h2>
      </div>
      <p className="text-gray-500 text-sm mb-3">
        Ene-Jul 2026 · $32.5M exportados · 41.1% de la facturacion total
      </p>

      <div className="grid grid-cols-3 gap-4 mb-3">
        {clientes.map((c, i) => {
          const color = c.positivo ? "#27AE60" : "#E31837";
          return (
            <div
              key={i}
              className={`rounded-xl p-5 animate-count-up bg-white border shadow-sm ${
                c.positivo ? "border-[#27AE60]/30" : "border-gray-200"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-800 font-bold text-sm">{c.nombre}</h3>
                <span className="text-gray-500 text-[10px] bg-gray-100 px-2 py-0.5 rounded">{c.pais}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-800 text-2xl font-bold">{c.y2026}</span>
                <span className="text-xs font-bold" style={{ color }}>
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-400 text-[10px] mb-2">Ene-Jul 2025: {c.y2025}</p>
              <p className="text-[#B8860B] text-[10px] font-semibold leading-relaxed">{c.nota}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-[#27AE60]/5 border-2 border-[#27AE60]/30 rounded-xl px-5 py-3 mb-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#27AE60]" />
            <div>
              <p className="text-[#1E8449] text-sm font-bold">Exportacion fuera de La Molienda</p>
              <p className="text-gray-500 text-[10px]">El motor de diversificacion real</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-gray-400 text-[10px]">2025</p>
              <p className="text-xl font-bold text-gray-600">$6.5M</p>
              <p className="text-gray-400 text-[10px]">1 cliente</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-300" />
            <div className="text-center">
              <p className="text-gray-400 text-[10px]">2026</p>
              <p className="text-xl font-bold text-[#27AE60]">$9.4M</p>
              <p className="text-gray-400 text-[10px]">6 clientes</p>
            </div>
            <div className="bg-[#27AE60] text-white rounded-lg px-3 py-1.5 ml-2">
              <p className="text-lg font-bold">+44%</p>
            </div>
          </div>
          <p className="text-gray-600 text-[11px] leading-relaxed flex-1 border-l border-gray-200 pl-5">
            En 2025 el 81% de la exportacion dependia de un solo comprador. En 2026 esa dependencia baja
            a 71% y el riesgo se reparte entre siete cuentas en Estados Unidos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-gray-500 text-xs mb-3">Top productos exportacion Ene-Jul 2026</p>
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
          <p className="text-gray-500 text-xs mb-3">Compradores de exportacion activos (Ene-Jul)</p>
          <div className="flex items-end gap-6 h-[100px] px-2">
            {[
              { year: "2023", n: 2 },
              { year: "2024", n: 3 },
              { year: "2025", n: 2 },
              { year: "2026", n: 7 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="text-gray-800 font-bold text-lg mb-1">{d.n}</span>
                <div
                  className="w-full rounded-t animate-bar-grow"
                  style={{
                    height: `${(d.n / 7) * 70}px`,
                    backgroundColor: i === 3 ? "#27AE60" : "#D1D5DB",
                    animationDelay: `${i * 150}ms`,
                  }}
                />
                <span className="text-gray-400 text-[10px] mt-1">{d.year}</span>
              </div>
            ))}
          </div>
          <p className="text-[#27AE60] text-[10px] mt-2 font-semibold">
            Mayor numero de compradores internacionales en la historia de la compania
          </p>
        </div>
      </div>

      <NotaSlide>
        El punto es la diversificación. Pasamos de 2 a 7 compradores en el extranjero, y lo que se vende
        fuera de nuestro cliente más grande creció 44%. En 2025 el 81% de la exportación dependía de un solo
        comprador; hoy esa dependencia bajó a 71% y el riesgo está repartido entre siete cuentas.
      </NotaSlide>
    </SlideWrapper>
  );
}
