"use client";

import SlideWrapper from "./SlideWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { mes: "May 24", alsuper: 1577786, merco: 1038765, lamolienda: 2304002 },
  { mes: "Jun 24", alsuper: 1272529, merco: 1088115, lamolienda: 1606497 },
  { mes: "Jul 24", alsuper: 1073999, merco: 1132286, lamolienda: 2177861 },
  { mes: "Ago 24", alsuper: 1211506, merco: 1015489, lamolienda: 1727405 },
  { mes: "Sep 24", alsuper: 1468531, merco: 1526147, lamolienda: 2437685 },
  { mes: "Oct 24", alsuper: 1078301, merco: 1154378, lamolienda: 3908613 },
  { mes: "Nov 24", alsuper: 1571637, merco: 951781, lamolienda: 3294988 },
  { mes: "Dic 24", alsuper: 1806949, merco: 1041705, lamolienda: 2711565 },
  { mes: "Ene 25", alsuper: 1478325, merco: 1532743, lamolienda: 3294146 },
  { mes: "Feb 25", alsuper: 858567, merco: 937062, lamolienda: 2752218 },
  { mes: "Mar 25", alsuper: 7768329, merco: 1251241, lamolienda: 3031174 },
  { mes: "Abr 25", alsuper: 7079441, merco: 1602470, lamolienda: 4716695 },
  { mes: "May 25", alsuper: 2275880, merco: 1284541, lamolienda: 4420741 },
  { mes: "Jun 25", alsuper: 2095306, merco: 1092562, lamolienda: 4812717 },
  { mes: "Jul 25", alsuper: 2698672, merco: 1850279, lamolienda: 5047645 },
  { mes: "Ago 25", alsuper: 2048102, merco: 1487587, lamolienda: 2167606 },
  { mes: "Sep 25", alsuper: 2349493, merco: 2107933, lamolienda: 3065386 },
  { mes: "Oct 25", alsuper: 3434413, merco: 1604708, lamolienda: 3532307 },
  { mes: "Nov 25", alsuper: 3435425, merco: 1883528, lamolienda: 2934145 },
  { mes: "Dic 25", alsuper: 2659345, merco: 1416972, lamolienda: 3507354 },
  { mes: "Ene 26", alsuper: 3968059, merco: 2183784, lamolienda: 2308918 },
  { mes: "Feb 26", alsuper: 3095625, merco: 2292048, lamolienda: 3928636 },
  { mes: "Mar 26", alsuper: 3213052, merco: 2355983, lamolienda: 3861014 },
  { mes: "Abr 26", alsuper: 3159981, merco: 1245931, lamolienda: 4994678 },
];

const formatPesos = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[160px]">
      <p className="text-gray-500 text-xs mb-2 font-semibold">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-xs mb-0.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-500">{p.name}</span>
          </div>
          <span className="text-gray-800 font-bold">${p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

export default function Slide11Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tendencia Mensual 24 Meses</h2>
      <p className="text-gray-500 text-sm mb-3">Top 3 clientes por facturacion · May 2024 — Abr 2026</p>

      <div className="flex gap-5 mb-3 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#F7B500]" />
          <span className="text-[#B8860B] font-semibold">ALSUPER</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#1A1A1A]" />
          <span className="text-gray-800 font-semibold">MERCO</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#2E75B6]" />
          <span className="text-[#2E75B6] font-semibold">La Molienda</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#F7B500]/20 text-[#B8860B] border border-[#F7B500]/40">
            ALSUPER Mar 25: $8.1M (atipico)
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={9} interval={3} angle={-45} textAnchor="end" height={40} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine x="Ene 25" stroke="#D1D5DB" strokeDasharray="3 3" label={{ value: "2025", position: "top", fill: "#9CA3AF", fontSize: 9 }} />
            <ReferenceLine x="Ene 26" stroke="#D1D5DB" strokeDasharray="3 3" label={{ value: "2026", position: "top", fill: "#9CA3AF", fontSize: 9 }} />
            <Line type="monotone" dataKey="alsuper" name="ALSUPER" stroke="#F7B500" strokeWidth={2.5} dot={{ r: 1.5, fill: "#F7B500" }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="merco" name="MERCO" stroke="#1A1A1A" strokeWidth={2} dot={{ r: 1.5, fill: "#1A1A1A" }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="lamolienda" name="La Molienda" stroke="#2E75B6" strokeWidth={2} dot={{ r: 1.5, fill: "#2E75B6" }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-2 text-[10px] text-gray-500">
        <span>MERCO: tendencia ascendente sostenida (+51.7% Ene-Abr YoY)</span>
        <span>La Molienda: estable $2.3-5.0M/mes — cliente ancla de exportacion</span>
      </div>
    </SlideWrapper>
  );
}
