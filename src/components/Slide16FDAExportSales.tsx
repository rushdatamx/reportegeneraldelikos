"use client";

import SlideWrapper from "./SlideWrapper";
import { Globe, TrendingUp, ArrowRight } from "lucide-react";

const data = [
  {
    year: "2024",
    exportUsd: "$2,608,699",
    totalUsd: "$6,264,769",
    pctExport: "41.6%",
    bar: 86,
  },
  {
    year: "2025",
    exportUsd: "$3,029,135",
    totalUsd: "$7,527,392",
    pctExport: "40.2%",
    bar: 100,
  },
];

const exportClients = [
  { nombre: "La Molienda Mexicana, LLC", pct2024: "75.0%", pct2025: "79.4%" },
  { nombre: "Dulces La Mejor LLC", pct2024: "24.2%", pct2025: "17.9%" },
  { nombre: "Productos Bredy", pct2024: "0.8%", pct2025: "—" },
  { nombre: "Abarrotes Mixteca Corp.", pct2024: "—", pct2025: "1.0%" },
  { nombre: "Puente Foods LLC", pct2024: "—", pct2025: "0.8%" },
  { nombre: "Chavito Mex Candy", pct2024: "—", pct2025: "0.7%" },
  { nombre: "Sakia LLC", pct2024: "—", pct2025: "0.1%" },
];

export default function Slide16FDAExportSales() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-[#F7B500]/10 flex items-center justify-center">
          <Globe className="w-5 h-5 text-[#F7B500]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          FDA Audit — Export Sales to the US
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">
        Question B: Approximate annual gross sales for products exported to the United States in USD
      </p>

      <div className="grid grid-cols-2 gap-6 mb-5">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 animate-count-up"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider font-semibold">
              {d.year}
            </p>
            <p className="text-3xl font-bold text-[#F7B500] mb-1">
              {d.exportUsd}
            </p>
            <p className="text-gray-500 text-sm">USD exported to US</p>
            <div className="border-t border-gray-100 mt-3 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">% of total sales</span>
                <span className="text-[#F7B500] font-bold text-sm">
                  {d.pctExport}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-gray-500 text-xs mb-3">
            Export sales growth (USD)
          </p>
          <div className="space-y-3">
            {data.map((d, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500 text-sm font-semibold">
                    {d.year}
                  </span>
                  <span className="text-gray-800 font-bold">{d.exportUsd}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-[#F7B500] animate-bar-grow"
                    style={{
                      width: `${d.bar}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <TrendingUp className="w-4 h-4 text-[#27AE60]" />
            <span className="text-[#27AE60] text-sm font-bold">+16.1%</span>
            <span className="text-gray-400 text-[10px]">YoY growth (USD)</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-gray-500 text-xs mb-3">
            US export clients breakdown
          </p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-100 pb-1 mb-1">
              <span className="flex-1">Client</span>
              <span className="w-14 text-right">2024</span>
              <span className="w-14 text-right">2025</span>
            </div>
            {exportClients.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between animate-count-up"
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                <div className="flex items-center gap-1.5 flex-1">
                  <ArrowRight className="w-2.5 h-2.5 text-[#F7B500]" />
                  <span className="text-gray-700 text-[11px]">{c.nombre}</span>
                </div>
                <span className="text-gray-500 text-[11px] font-semibold w-14 text-right">
                  {c.pct2024}
                </span>
                <span className="text-gray-800 text-[11px] font-bold w-14 text-right">
                  {c.pct2025}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
