"use client";

import SlideWrapper from "./SlideWrapper";
import { DollarSign, TrendingUp, Minus } from "lucide-react";

const productos = [
  { nombre: "Papa Diabla 5.5oz", q1_25: "$21.13", q1_26: "$21.84", var: "+3.4%", positivo: true },
  { nombre: "Papa Salada 5.5oz", q1_25: "$21.00", q1_26: "$21.84", var: "+4.0%", positivo: true },
  { nombre: "Tostada Roja 70PZ", q1_25: "$31.80", q1_26: "$31.80", var: "0.0%", positivo: null },
  { nombre: "Durito 20 pzs", q1_25: "$45.27", q1_26: "$47.01", var: "+3.9%", positivo: true },
  { nombre: "Almendra Entera Domo", q1_25: "$69.70", q1_26: "$69.70", var: "0.0%", positivo: null },
  { nombre: "Papa Nat. Mimarca 450g", q1_25: "$75.20", q1_26: "$75.20", var: "0.0%", positivo: null },
  { nombre: "Uva Pasa Domo 250g", q1_25: "$25.60", q1_26: "$25.60", var: "0.0%", positivo: null },
  { nombre: "Almendra Reb. Domo", q1_25: "$69.80", q1_26: "$69.80", var: "0.0%", positivo: null },
];

const precioCliente = [
  { cliente: "HEB", precioPromQ1: "$62.69", nota: "Durito + Papa PDQ — ticket alto" },
  { cliente: "ALSUPER", precioPromQ1: "$44.33", nota: "Productos Domo premium — ticket medio-alto" },
  { cliente: "MERCO", precioPromQ1: "$24.15", nota: "Mix Tostada + Papa — ticket medio" },
  { cliente: "La Molienda", precioPromQ1: "$22.56", nota: "Papa granel export — precio unitario" },
];

export default function Slide12Precios() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <DollarSign className="w-7 h-7 text-[#27AE60]" />
        <h2 className="text-3xl font-bold text-gray-800">Evolucion de Precios</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Precio unitario promedio Ene-Abr 2025 vs Ene-Abr 2026 · Top productos</p>

      <div className="flex gap-4 flex-1">
        {/* Price table */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <p className="text-gray-500 text-xs mb-3">Comparativo de precios unitarios</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-gray-400 font-normal pb-2 text-xs">Producto</th>
                <th className="text-right text-gray-400 font-normal pb-2 text-xs">Ene-Abr 2025</th>
                <th className="text-right text-gray-400 font-normal pb-2 text-xs">Ene-Abr 2026</th>
                <th className="text-right text-gray-400 font-normal pb-2 text-xs">Var.</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p, i) => (
                <tr key={i} className="border-b border-gray-50 animate-count-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <td className="py-2 text-gray-700 text-xs">{p.nombre}</td>
                  <td className="py-2 text-right text-gray-500 text-xs">{p.q1_25}</td>
                  <td className="py-2 text-right text-gray-800 font-semibold text-xs">{p.q1_26}</td>
                  <td className="py-2 text-right">
                    <span className={`text-xs font-bold flex items-center justify-end gap-0.5 ${
                      p.positivo === true ? "text-[#27AE60]" :
                      p.positivo === false ? "text-[#E31837]" : "text-gray-400"
                    }`}>
                      {p.positivo === true && <TrendingUp className="w-3 h-3" />}
                      {p.positivo === null && <Minus className="w-3 h-3" />}
                      {p.var}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Client price comparison */}
        <div className="w-[380px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-3">Precio promedio por cliente Ene-Abr 2026</p>
            <div className="space-y-3">
              {precioCliente.map((c, i) => (
                <div key={i} className="animate-count-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-800 font-semibold text-sm">{c.cliente}</span>
                    <span className="text-[#27AE60] font-bold text-lg">{c.precioPromQ1}</span>
                  </div>
                  <p className="text-gray-400 text-[10px]">{c.nota}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-4 py-3">
            <p className="text-[#27AE60] text-[11px] font-semibold leading-relaxed">
              &#10003; Precios estables o con incrementos moderados (+3-6%). Sin erosion de precio en ningun producto clave. Productos Domo ALSUPER mantienen precio fijo.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
