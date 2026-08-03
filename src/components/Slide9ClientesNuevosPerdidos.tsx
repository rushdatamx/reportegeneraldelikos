"use client";

import SlideWrapper from "./SlideWrapper";
import { UserPlus, TrendingUp } from "lucide-react";

const nuevos = [
  { nombre: "Abarrotes Mixteca Corp", tipo: "Export", monto: "$1.18M" },
  { nombre: "Mun Logyc", tipo: "Nacional", monto: "$873K" },
  { nombre: "El Chavito Mex Candys", tipo: "Export", monto: "$850K" },
  { nombre: "Aztek Marketing LLC", tipo: "Export", monto: "$447K" },
  { nombre: "Puente Foods LLC", tipo: "Export", monto: "$437K" },
  { nombre: "Safari Group USA", tipo: "Export", monto: "$321K" },
  { nombre: "AYHT de Mexico", tipo: "Nacional", monto: "$281K" },
  { nombre: "Materias Primas JV", tipo: "Nacional", monto: "$217K" },
];

const crecimiento = [
  { nombre: "MERCO", tipo: "Nacional", monto: "$14.7M", var: "+51%", nota: "Ene-Jul 25: $9.7M — mayor crecimiento absoluto (+$5.0M)" },
  { nombre: "HEB / MITIENDA", tipo: "Nacional", monto: "$4.7M", var: "+17%", nota: "Ene-Jul 25: $4.0M — PDQs de papa + Duritos" },
  { nombre: "Dulces La Mejor", tipo: "Export", monto: "$6.9M", var: "+6%", nota: "Ene-Jul 25: $6.5M — cuenta export consolidada" },
  { nombre: "Embotelladora 2020", tipo: "Nacional", monto: "$331K", var: "+3,350%", nota: "Reactivacion de cuenta dormida" },
];

export default function Slide9ClientesNuevosPerdidos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Expansion de la cartera de clientes</h2>
      <p className="text-gray-500 text-sm mb-4">Ene-Jul 2026 · 33 clientes activos vs 24 en 2025</p>

      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: "Clientes activos", val: "33", sub: "+38% vs 24 en 2025", color: "#2E75B6" },
          { label: "Clientes nuevos", val: "16", sub: "$5.1M facturados", color: "#27AE60" },
          { label: "Facturas emitidas", val: "814", sub: "+15% vs 705", color: "#2E75B6" },
          { label: "SKUs activos", val: "163", sub: "69 productos nuevos", color: "#F7B500" },
        ].map((k, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 animate-count-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="text-gray-500 text-[11px]">{k.label}</p>
            <p className="text-3xl font-bold" style={{ color: k.color }}>{k.val}</p>
            <p className="text-gray-400 text-[10px]">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-1">
        <div className="bg-[#27AE60]/5 border border-[#27AE60]/25 rounded-xl p-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-[#27AE60]" />
              <h3 className="text-[#27AE60] font-bold">16 clientes nuevos en 2026</h3>
            </div>
            <span className="text-[#27AE60] font-bold text-sm bg-white px-3 py-1 rounded-full border border-[#27AE60]/30">
              $5.1M
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {nuevos.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-lg px-3 py-2 border border-[#27AE60]/15 animate-count-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-semibold text-[11px]">{c.nombre}</span>
                  <span className="text-[#27AE60] font-bold text-[11px]">{c.monto}</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{c.tipo}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-[10px] mt-auto pt-2">
            + 8 clientes adicionales de menor volumen ($136K a $2K)
          </p>
        </div>

        <div className="w-[440px] bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            <h3 className="text-gray-800 font-bold">Cuentas existentes en crecimiento</h3>
          </div>
          <div className="space-y-2.5">
            {crecimiento.map((c, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-3 animate-count-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-800 font-semibold text-sm">{c.nombre}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-200 text-gray-500">{c.tipo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-800 font-bold text-sm">{c.monto}</span>
                    <span className="text-[#27AE60] text-xs font-bold bg-[#27AE60]/10 px-2 py-0.5 rounded">
                      {c.var}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px]">{c.nota}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-3 bg-[#FDF8F0] rounded-lg p-3 border border-[#E8DCC8]">
            <p className="text-[#B8860B] text-[11px] font-semibold leading-relaxed">
              La base de ingresos es mas amplia que hace un ano: mas clientes, mas facturas y mas SKUs
              activos, con menor dependencia de cualquier cuenta individual.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
