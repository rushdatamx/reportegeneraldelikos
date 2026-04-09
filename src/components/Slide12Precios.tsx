"use client";

import SlideWrapper from "./SlideWrapper";
import { DollarSign, TrendingUp, Minus } from "lucide-react";

const productos = [
  { nombre: "Papa Diabla 5.5oz", q1_25: "$20.79", q1_26: "$21.84", var: "+5.1%", positivo: true },
  { nombre: "Papa Salada 5.5oz", q1_25: "$20.62", q1_26: "$21.84", var: "+5.9%", positivo: true },
  { nombre: "Tostada Roja 70PZ", q1_25: "$180.00", q1_26: "$180.00", var: "0.0%", positivo: null },
  { nombre: "Almendra Entera Domo", q1_25: "$138.00", q1_26: "$138.00", var: "0.0%", positivo: null },
  { nombre: "Durito 20 pzs", q1_25: "$51.50", q1_26: "$52.60", var: "+2.1%", positivo: true },
  { nombre: "Uva Pasa Domo 250g", q1_25: "$78.00", q1_26: "$78.00", var: "0.0%", positivo: null },
  { nombre: "Ranchito Chile", q1_25: "$15.95", q1_26: "$16.54", var: "+3.7%", positivo: true },
  { nombre: "Rueda Enchilada 84g", q1_25: "$13.20", q1_26: "$13.60", var: "+3.0%", positivo: true },
];

const precioCliente = [
  { cliente: "ALSUPER", precioPromQ1: "$72.50", nota: "Productos Domo premium — ticket alto" },
  { cliente: "MERCO", precioPromQ1: "$61.80", nota: "Mix Tostada + Papa — ticket medio" },
  { cliente: "HEB", precioPromQ1: "$48.20", nota: "Durito + Papa PDQ — ticket bajo" },
  { cliente: "La Molienda", precioPromQ1: "$21.84", nota: "Papa granel export — precio unitario" },
];

export default function Slide12Precios() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <DollarSign className="w-7 h-7 text-[#27AE60]" />
        <h2 className="text-3xl font-bold text-gray-800">Evolucion de Precios</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Precio unitario promedio Q1 2025 vs Q1 2026 · Top productos</p>

      <div className="flex gap-4 flex-1">
        {/* Price table */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <p className="text-gray-500 text-xs mb-3">Comparativo de precios unitarios</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-gray-400 font-normal pb-2 text-xs">Producto</th>
                <th className="text-right text-gray-400 font-normal pb-2 text-xs">Q1 2025</th>
                <th className="text-right text-gray-400 font-normal pb-2 text-xs">Q1 2026</th>
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
            <p className="text-gray-500 text-xs mb-3">Precio promedio por cliente Q1 2026</p>
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
