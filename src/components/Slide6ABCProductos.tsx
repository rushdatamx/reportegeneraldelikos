"use client";

import SlideWrapper from "./SlideWrapper";
import { BarChart3 } from "lucide-react";

const abcSummary = [
  { clase: "A", productos: 34, pct: "80.2%", color: "#2E75B6", desc: "Top productos — 80% del ingreso" },
  { clase: "B", productos: 37, pct: "14.6%", color: "#F7B500", desc: "Contribucion media" },
  { clase: "C", productos: 52, pct: "5.2%", color: "#9CA3AF", desc: "Cola larga" },
];

const top15 = [
  { rank: 1, nombre: "Papa Diabla 5.5oz", venta: "$5.0M", acum: "14.8%", clase: "A" },
  { rank: 2, nombre: "Tostada Roja 70PZ", venta: "$3.9M", acum: "26.4%", clase: "A" },
  { rank: 3, nombre: "Papa Salada 5.5oz", venta: "$3.8M", acum: "37.7%", clase: "A" },
  { rank: 4, nombre: "Almendra Entera Domo", venta: "$1.5M", acum: "42.3%", clase: "A" },
  { rank: 5, nombre: "Durito 20 pzs", venta: "$1.4M", acum: "46.4%", clase: "A" },
  { rank: 6, nombre: "Uva Pasa Domo 250g", venta: "$1.1M", acum: "49.7%", clase: "A" },
  { rank: 7, nombre: "Almendra Reb. Domo", venta: "$1.1M", acum: "52.9%", clase: "A" },
  { rank: 8, nombre: "Papa Nat. Mimarca 450g", venta: "$950K", acum: "55.7%", clase: "A" },
  { rank: 9, nombre: "Ranchito Chile", venta: "$620K", acum: "57.5%", clase: "A" },
  { rank: 10, nombre: "Rueda Enchilada 84g", venta: "$590K", acum: "59.2%", clase: "A" },
  { rank: 11, nombre: "Rueda c/Salsita 84g", venta: "$520K", acum: "60.8%", clase: "A" },
  { rank: 12, nombre: "Papa Desh. 300g", venta: "$480K", acum: "62.2%", clase: "A" },
  { rank: 13, nombre: "Cacahuate Tost. 5kg", venta: "$460K", acum: "63.5%", clase: "A" },
  { rank: 14, nombre: "PDQ 240 Papa 340g", venta: "$457K", acum: "64.9%", clase: "A" },
  { rank: 15, nombre: "Pepita Domo 250g", venta: "$440K", acum: "66.2%", clase: "A" },
];

const paretoSteps = [
  { pctProd: "10%", pctRev: "38%", x: 10 },
  { pctProd: "20%", pctRev: "53%", x: 20 },
  { pctProd: "28%", pctRev: "80%", x: 28 },
  { pctProd: "58%", pctRev: "95%", x: 58 },
  { pctProd: "100%", pctRev: "100%", x: 100 },
];

export default function Slide6ABCProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <BarChart3 className="w-7 h-7 text-[#2E75B6]" />
        <h2 className="text-3xl font-bold text-gray-800">Analisis ABC — Productos</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">123 productos activos Q1 2026 · Clasificacion Pareto</p>

      <div className="flex gap-4 flex-1">
        {/* Left: Pareto visual + ABC summary */}
        <div className="w-[440px] flex flex-col gap-3">
          {/* ABC Cards */}
          <div className="flex gap-2">
            {abcSummary.map((a, i) => (
              <div
                key={i}
                className="flex-1 rounded-xl p-3 animate-count-up bg-white border border-gray-200 shadow-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: a.color }}>
                    {a.clase}
                  </div>
                  <span className="text-gray-800 font-bold text-lg">{a.pct}</span>
                </div>
                <p className="text-gray-500 text-[10px]">{a.productos} productos</p>
                <p className="text-gray-400 text-[9px]">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Pareto visual */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-3">Curva Pareto — Concentracion de ingreso</p>
            <div className="relative h-[180px]">
              {/* Y axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[9px] text-gray-400 w-8">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
              {/* Chart area */}
              <div className="ml-10 h-full relative">
                {/* 80% line */}
                <div className="absolute top-[20%] left-0 right-0 border-t border-dashed border-[#2E75B6]/30" />
                <span className="absolute top-[18%] right-0 text-[8px] text-[#2E75B6] font-semibold">80% ingreso</span>
                {/* 28% line */}
                <div className="absolute top-0 bottom-0 left-[28%] border-l border-dashed border-[#2E75B6]/30" />
                <span className="absolute bottom-0 left-[28%] -translate-x-1/2 text-[8px] text-[#2E75B6] font-semibold">28% prods</span>
                {/* Bars representing cumulative */}
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline
                    points="0,100 10,62 20,47 28,20 58,5 100,0"
                    fill="none"
                    stroke="#2E75B6"
                    strokeWidth="2"
                  />
                  <polygon
                    points="0,100 10,62 20,47 28,20 58,5 100,0 100,100"
                    fill="#2E75B620"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-10 flex justify-between text-[9px] text-gray-400 mt-1">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
            <p className="text-center text-[9px] text-gray-400 mt-1">% de productos →</p>
          </div>
        </div>

        {/* Right: Top 15 table */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-hidden">
          <p className="text-gray-500 text-xs mb-3">Top 15 productos — Clase A</p>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-gray-400 font-normal pb-2 w-8">#</th>
                <th className="text-left text-gray-400 font-normal pb-2">Producto</th>
                <th className="text-right text-gray-400 font-normal pb-2">Venta Q1</th>
                <th className="text-right text-gray-400 font-normal pb-2">Acum.</th>
              </tr>
            </thead>
            <tbody>
              {top15.map((p, i) => (
                <tr key={i} className={`border-b border-gray-50 ${i < 3 ? "bg-[#2E75B6]/5" : ""}`}>
                  <td className={`py-1.5 ${i < 3 ? "text-[#2E75B6] font-bold" : "text-gray-400"}`}>{p.rank}</td>
                  <td className={`py-1.5 ${i < 3 ? "text-gray-800 font-semibold" : "text-gray-600"}`}>{p.nombre}</td>
                  <td className="py-1.5 text-right text-gray-800 font-semibold">{p.venta}</td>
                  <td className="py-1.5 text-right text-[#2E75B6] font-semibold">{p.acum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideWrapper>
  );
}
