"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart, Building2, ArrowRight } from "lucide-react";

const topClients = [
  { nombre: "La Molienda Mexicana, LLC", tipo: "Distributor (US)", mxn2024: "$35.2M", mxn2025: "$43.3M" },
  { nombre: "Botanas y Derivados", tipo: "Distributor", mxn2024: "$28.8M", mxn2025: "$11.7M" },
  { nombre: "Alsuper (Op. Futurama)", tipo: "Retail chain", mxn2024: "$15.7M", mxn2025: "$38.2M" },
  { nombre: "MERCO", tipo: "Retail chain", mxn2024: "$12.7M", mxn2025: "$18.1M" },
  { nombre: "Dulces La Mejor LLC", tipo: "Distributor (US)", mxn2024: "$11.4M", mxn2025: "$9.8M" },
  { nombre: "HEB / MiTienda", tipo: "Retail chain", mxn2024: "$1.6M", mxn2025: "$7.8M" },
  { nombre: "Promanuez", tipo: "Distributor", mxn2024: "$2.3M", mxn2025: "$2.2M" },
  { nombre: "Others (32+ clients)", tipo: "Wholesale", mxn2024: "$5.1M", mxn2025: "$4.4M" },
];

export default function Slide17FDAWholesaleRetail() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-[#27AE60]/10 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-[#27AE60]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          FDA Audit — Wholesale vs. Retail
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">
        Question C: Approximate percentage of total sales that are wholesale vs. retail
      </p>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 animate-count-up">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-[#27AE60]" />
            <div>
              <p className="text-gray-800 font-bold text-lg">Wholesale</p>
              <p className="text-gray-400 text-xs">
                Distributors + retail chains + brokers
              </p>
            </div>
          </div>
          <p className="text-6xl font-bold text-[#27AE60] mb-2">~100%</p>
          <div className="w-full bg-gray-100 rounded-full h-5 mt-3">
            <div
              className="h-5 rounded-full bg-[#27AE60] animate-bar-grow flex items-center justify-end pr-2"
              style={{ width: "100%" }}
            >
              <span className="text-white text-[10px] font-bold">100%</span>
            </div>
          </div>
          <p className="text-gray-400 text-[10px] mt-2">
            All sales go to intermediaries who resell the product
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 animate-count-up" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-6 h-6 text-gray-300" />
            <div>
              <p className="text-gray-800 font-bold text-lg">Retail</p>
              <p className="text-gray-400 text-xs">
                Direct to consumer
              </p>
            </div>
          </div>
          <p className="text-6xl font-bold text-gray-300 mb-2">~0%</p>
          <div className="w-full bg-gray-100 rounded-full h-5 mt-3">
            <div
              className="h-5 rounded-full bg-gray-300 animate-bar-grow"
              style={{ width: "1%" }}
            />
          </div>
          <p className="text-gray-400 text-[10px] mt-2">
            Negligible walk-in sales (&lt;$500 USD combined in 2024-2025)
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
        <p className="text-gray-500 text-xs mb-3">
          Top wholesale clients (MXN) — 2024 vs 2025
        </p>
        <div className="space-y-1">
          <div className="flex items-center text-[10px] text-gray-400 border-b border-gray-100 pb-1 mb-1">
            <span className="flex-1">Client</span>
            <span className="w-28 text-center">Type</span>
            <span className="w-20 text-right">2024</span>
            <span className="w-20 text-right">2025</span>
          </div>
          {topClients.map((c, i) => (
            <div
              key={i}
              className="flex items-center animate-count-up"
              style={{ animationDelay: `${300 + i * 60}ms` }}
            >
              <div className="flex items-center gap-1.5 flex-1">
                <ArrowRight className="w-2.5 h-2.5 text-[#27AE60]" />
                <span className="text-gray-700 text-[11px]">{c.nombre}</span>
              </div>
              <span className="text-gray-400 text-[10px] w-28 text-center">
                {c.tipo}
              </span>
              <span className="text-gray-500 text-[11px] font-semibold w-20 text-right">
                {c.mxn2024}
              </span>
              <span className="text-gray-800 text-[11px] font-bold w-20 text-right">
                {c.mxn2025}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-5 py-3 mt-3 animate-count-up" style={{ animationDelay: "700ms" }}>
        <p className="text-[#27AE60] text-[11px] font-semibold leading-relaxed">
          DELIKOS does not operate retail stores or sell directly to end consumers. 100% of sales are B2B: to supermarket chains (Alsuper, MERCO, HEB), national distributors, and US-based export brokers who redistribute the product.
        </p>
      </div>
    </SlideWrapper>
  );
}
