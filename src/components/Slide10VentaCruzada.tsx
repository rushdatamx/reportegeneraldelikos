"use client";

import SlideWrapper from "./SlideWrapper";
import { Grid3X3 } from "lucide-react";

const categorias = ["TOSTADA", "PAPA", "DURITO", "CACAHUATE", "RUEDA", "CHURRITO", "ROTINI", "MINICUADRO", "CONCHITA", "PALOMITAS", "ALMENDRA", "DESHIDRATADA"];
const clientes = [
  { nombre: "ALSUPER", color: "#F7B500" },
  { nombre: "MERCO", color: "#1A1A1A" },
  { nombre: "HEB", color: "#9CA3AF" },
  { nombre: "La Molienda", color: "#2E75B6" },
  { nombre: "Dulces La Mejor", color: "#27AE60" },
];

// 1 = sells, 0 = doesn't sell, 2 = opportunity
const matrix: number[][] = [
  // TOSTADA, PAPA, DURITO, CACAHUATE, RUEDA, CHURRITO, ROTINI, MINICUADRO, CONCHITA, PALOMITAS, ALMENDRA, DESHIDRATADA
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],  // ALSUPER
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],  // MERCO
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // HEB
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],  // La Molienda
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],  // Dulces La Mejor
];

const oportunidades = [
  { cliente: "HEB", cats: "Tostada, Cacahuate, Rueda, Churrito", potencial: "Alto" },
  { cliente: "ALSUPER", cats: "Durito, Churrito, Conchita, Rotini", potencial: "Medio" },
  { cliente: "La Molienda", cats: "Tostada, Durito, Cacahuate", potencial: "Medio" },
];

export default function Slide10VentaCruzada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Grid3X3 className="w-7 h-7 text-[#2E75B6]" />
        <h2 className="text-3xl font-bold text-gray-800">Venta Cruzada</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Categorias por cliente Q1 2026 · Oportunidades de expansion</p>

      <div className="flex gap-4 flex-1">
        {/* Matrix */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-hidden">
          <p className="text-gray-500 text-xs mb-3">Matriz de categorias vendidas</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[10px]">
              <thead>
                <tr>
                  <th className="text-left text-gray-400 font-normal pb-2 pr-2 sticky left-0 bg-white">Cliente</th>
                  {categorias.map((cat, i) => (
                    <th key={i} className="text-center text-gray-400 font-normal pb-2 px-0.5 w-[60px]">
                      <span className="writing-mode-vertical" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)", display: "inline-block", maxHeight: "70px" }}>
                        {cat}
                      </span>
                    </th>
                  ))}
                  <th className="text-center text-gray-400 font-normal pb-2 pl-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cl, ci) => {
                  const total = matrix[ci].reduce((a, b) => a + (b === 1 ? 1 : 0), 0);
                  return (
                    <tr key={ci} className="border-t border-gray-100">
                      <td className="py-2 pr-2 font-semibold text-gray-700 sticky left-0 bg-white whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cl.color }} />
                          {cl.nombre}
                        </div>
                      </td>
                      {matrix[ci].map((v, vi) => (
                        <td key={vi} className="text-center py-2">
                          {v === 1 ? (
                            <div className="w-5 h-5 rounded mx-auto flex items-center justify-center bg-[#27AE60]/15">
                              <span className="text-[#27AE60] font-bold">✓</span>
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded mx-auto flex items-center justify-center bg-gray-100">
                              <span className="text-gray-300">—</span>
                            </div>
                          )}
                        </td>
                      ))}
                      <td className="text-center py-2 pl-2">
                        <span className="text-gray-800 font-bold">{total}/{categorias.length}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Opportunities */}
        <div className="w-[340px] flex flex-col gap-3">
          <div className="bg-[#2E75B6]/5 border border-[#2E75B6]/20 rounded-xl p-4 flex-1">
            <h3 className="text-[#2E75B6] font-bold text-sm mb-3">Oportunidades Identificadas</h3>
            <div className="space-y-3">
              {oportunidades.map((o, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-[#2E75B6]/10 animate-count-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-800 font-bold text-sm">{o.cliente}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                      o.potencial === "Alto" ? "bg-[#27AE60]/10 text-[#27AE60]" : "bg-[#F7B500]/10 text-[#B8860B]"
                    }`}>{o.potencial}</span>
                  </div>
                  <p className="text-gray-500 text-[10px]">Categorias faltantes: <span className="text-gray-700 font-semibold">{o.cats}</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
            <p className="text-gray-500 text-[10px]">
              <span className="font-bold text-gray-800">MERCO</span> es el cliente mas diversificado (10/12 categorias).
              <span className="font-bold text-gray-800"> HEB</span> tiene el mayor potencial de expansion (solo 2/12).
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
