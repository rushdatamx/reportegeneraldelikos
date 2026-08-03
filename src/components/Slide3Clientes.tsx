"use client";

import SlideWrapper from "./SlideWrapper";
import { ArrowRight } from "lucide-react";

const maquila = [
  { year: "2024", value: 29.1, label: "$29.1M" },
  { year: "2025", value: 11.7, label: "$11.7M" },
  { year: "2026", value: 0.2, label: "$0.2M" },
];

export default function Slide3Clientes() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">El ajuste de portafolio</h2>
      <p className="text-gray-500 text-sm mb-5">
        Salida de maquila para terceros (Botanas y Derivados) y su efecto en la comparacion anual
      </p>

      <div className="flex gap-5 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 w-[420px] flex flex-col">
          <p className="text-gray-500 text-xs mb-1">Maquila de terceros — Botanas y Derivados</p>
          <p className="text-gray-400 text-[10px] mb-4">Papa a granel 5KG marca BYDSA · no es marca DELIKOS</p>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {maquila.map((m, i) => (
              <div key={i} className="animate-count-up" style={{ animationDelay: `${i * 180}ms` }}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-gray-500 font-semibold">{m.year}</span>
                  <span className="text-gray-700 font-bold">{m.label}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-6">
                  <div
                    className="h-6 rounded-full animate-bar-grow"
                    style={{
                      width: `${Math.max((m.value / 29.1) * 100, 2)}%`,
                      backgroundColor: i === 2 ? "#E31837" : "#9CA3AF",
                      animationDelay: `${i * 180 + 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg px-3 py-2.5 mt-4 border border-gray-200">
            <p className="text-gray-600 text-[10px] leading-relaxed">
              Cliente en salida progresiva desde 2024. Maquila de bajo margen bajo marca del cliente, sin contribucion a la marca DELIKOS.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <p className="text-gray-500 text-xs mb-4">Facturacion Ene-Jul — con y sin maquila</p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-gray-400 text-[10px] mb-2 uppercase tracking-wide">Total reportado</p>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-gray-500 text-[10px]">2025</p>
                    <p className="text-2xl font-bold text-gray-700">$87.5M</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 mt-3" />
                  <div>
                    <p className="text-gray-500 text-[10px]">2026</p>
                    <p className="text-2xl font-bold text-gray-700">$78.6M</p>
                  </div>
                </div>
                <p className="text-[#E31837] text-sm font-bold mt-1">-10.2%</p>
              </div>

              <div className="border-l border-gray-200 pl-5">
                <p className="text-[#27AE60] text-[10px] mb-2 uppercase tracking-wide font-bold">Negocio comparable</p>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-gray-500 text-[10px]">2025</p>
                    <p className="text-2xl font-bold text-gray-700">$76.4M</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 mt-3" />
                  <div>
                    <p className="text-gray-500 text-[10px]">2026</p>
                    <p className="text-2xl font-bold text-[#27AE60]">$78.4M</p>
                  </div>
                </div>
                <p className="text-[#27AE60] text-sm font-bold mt-1">+2.6%</p>
              </div>
            </div>
          </div>

          <div className="bg-[#27AE60]/5 border-2 border-[#27AE60]/30 rounded-xl p-5 flex-1 flex flex-col justify-center">
            <p className="text-[#1E8449] text-xl font-bold mb-2">
              El negocio de marca absorbio $10.9M de hueco en un solo periodo
            </p>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              La maquila de terceros aportaba $11.1M en Ene-Jul 2025 y hoy aporta practicamente cero.
              Aun asi, el resto de la compania no solo cubrio esa salida: crecio $2.0M por encima.
              El ingreso que queda es de marca propia, con mejor margen y mayor control comercial.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="bg-white rounded-lg px-4 py-2 border border-gray-200">
                <p className="text-gray-400 text-[10px]">Hueco por cubrir</p>
                <p className="text-lg font-bold text-gray-700">$10.9M</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-gray-200">
                <p className="text-gray-400 text-[10px]">Crecimiento bruto generado</p>
                <p className="text-lg font-bold text-[#27AE60]">$11.7M</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-gray-200">
                <p className="text-gray-400 text-[10px]">Resultado comparable</p>
                <p className="text-lg font-bold text-[#27AE60]">+$2.0M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
