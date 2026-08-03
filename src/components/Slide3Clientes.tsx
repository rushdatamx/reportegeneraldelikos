"use client";

import SlideWrapper from "./SlideWrapper";
import { ArrowRight } from "lucide-react";

const contrato = [
  { year: "2024", value: 29.1, label: "$29.1M" },
  { year: "2025", value: 11.7, label: "$11.7M" },
  { year: "2026", value: 0.2, label: "$0.2M" },
];

export default function Slide3Clientes() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Un contrato que terminó y ya fue reemplazado</h2>
      <p className="text-gray-500 text-sm mb-6">
        Producción para un tercero bajo su propia marca · concluida de forma progresiva desde 2024
      </p>

      <div className="flex gap-5 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-[400px] flex flex-col">
          <p className="text-gray-500 text-xs mb-5">Facturación de ese contrato por año</p>

          <div className="space-y-5 flex-1 flex flex-col justify-center">
            {contrato.map((m, i) => (
              <div key={i} className="animate-count-up" style={{ animationDelay: `${i * 180}ms` }}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-500 font-semibold">{m.year}</span>
                  <span className="text-gray-700 font-bold">{m.label}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-7">
                  <div
                    className="h-7 rounded-full animate-bar-grow"
                    style={{
                      width: `${Math.max((m.value / 29.1) * 100, 2)}%`,
                      backgroundColor: i === 2 ? "#9CA3AF" : "#D1D5DB",
                      animationDelay: `${i * 180 + 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <p className="text-gray-500 text-xs mb-5">Ventas Ene-Jul</p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-[10px] mb-2 uppercase tracking-wide">Incluyendo ese contrato</p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-gray-400 text-[10px]">2025</p>
                    <p className="text-3xl font-bold text-gray-600">$87.5M</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 mt-3" />
                  <div>
                    <p className="text-gray-400 text-[10px]">2026</p>
                    <p className="text-3xl font-bold text-gray-600">$78.6M</p>
                  </div>
                </div>
              </div>

              <div className="border-l border-gray-200 pl-6">
                <p className="text-[#27AE60] text-[10px] mb-2 uppercase tracking-wide font-bold">
                  Resto del negocio
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-gray-400 text-[10px]">2025</p>
                    <p className="text-3xl font-bold text-gray-600">$76.4M</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 mt-3" />
                  <div>
                    <p className="text-gray-400 text-[10px]">2026</p>
                    <p className="text-3xl font-bold text-[#27AE60]">$78.4M</p>
                  </div>
                </div>
                <p className="text-[#27AE60] text-base font-bold mt-1">+2.6%</p>
              </div>
            </div>
          </div>

          <div className="bg-[#27AE60]/5 border-2 border-[#27AE60]/30 rounded-xl p-6 flex-1 flex flex-col justify-center">
            <p className="text-[#1E8449] text-2xl font-bold mb-4">
              Reemplazamos $10.9M en un solo periodo
            </p>
            <div className="flex gap-4">
              <div className="bg-white rounded-lg px-5 py-3 border border-gray-200 flex-1">
                <p className="text-gray-400 text-[10px]">Venta que salió</p>
                <p className="text-2xl font-bold text-gray-600">$10.9M</p>
              </div>
              <div className="bg-white rounded-lg px-5 py-3 border border-gray-200 flex-1">
                <p className="text-gray-400 text-[10px]">Venta nueva generada</p>
                <p className="text-2xl font-bold text-[#27AE60]">$11.7M</p>
              </div>
              <div className="bg-white rounded-lg px-5 py-3 border border-gray-200 flex-1">
                <p className="text-gray-400 text-[10px]">Resultado</p>
                <p className="text-2xl font-bold text-[#27AE60]">+$2.0M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
