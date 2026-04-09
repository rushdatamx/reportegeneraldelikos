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
  { mes: "Ene 24", alsuper: 714370, merco: 1036389, lamolienda: 3430215 },
  { mes: "Feb 24", alsuper: 1181802, merco: 719003, lamolienda: 3167855 },
  { mes: "Mar 24", alsuper: 862486, merco: 828165, lamolienda: 3548221 },
  { mes: "Abr 24", alsuper: 1572985, merco: 1018370, lamolienda: 3791150 },
  { mes: "May 24", alsuper: 1577786, merco: 1038765, lamolienda: 3621488 },
  { mes: "Jun 24", alsuper: 1272529, merco: 1088115, lamolienda: 3314672 },
  { mes: "Jul 24", alsuper: 1073999, merco: 1132286, lamolienda: 3898010 },
  { mes: "Ago 24", alsuper: 1211506, merco: 1015489, lamolienda: 3567230 },
  { mes: "Sep 24", alsuper: 1468531, merco: 1526147, lamolienda: 3741598 },
  { mes: "Oct 24", alsuper: 1078301, merco: 1154378, lamolienda: 3295840 },
  { mes: "Nov 24", alsuper: 1716641, merco: 951781, lamolienda: 4112350 },
  { mes: "Dic 24", alsuper: 1874303, merco: 1041705, lamolienda: 3680120 },
  { mes: "Ene 25", alsuper: 1478325, merco: 1537337, lamolienda: 4315620 },
  { mes: "Feb 25", alsuper: 858567, merco: 937062, lamolienda: 4784510 },
  { mes: "Mar 25", alsuper: 8126469, merco: 1251241, lamolienda: 3992148 },
  { mes: "Abr 25", alsuper: 7102871, merco: 1602470, lamolienda: 4217352 },
  { mes: "May 25", alsuper: 2360062, merco: 1284541, lamolienda: 4105830 },
  { mes: "Jun 25", alsuper: 2187060, merco: 1245202, lamolienda: 3876540 },
  { mes: "Jul 25", alsuper: 2725262, merco: 1850279, lamolienda: 4523180 },
  { mes: "Ago 25", alsuper: 2048102, merco: 1515668, lamolienda: 4190750 },
  { mes: "Sep 25", alsuper: 2349493, merco: 2115952, lamolienda: 4381240 },
  { mes: "Oct 25", alsuper: 3434413, merco: 1604708, lamolienda: 4697320 },
  { mes: "Nov 25", alsuper: 3435425, merco: 1883528, lamolienda: 4125890 },
  { mes: "Dic 25", alsuper: 2659345, merco: 1630668, lamolienda: 3854210 },
  { mes: "Ene 26", alsuper: 3968059, merco: 2183784, lamolienda: 3825470 },
  { mes: "Feb 26", alsuper: 3249655, merco: 2367625, lamolienda: 3419850 },
  { mes: "Mar 26", alsuper: 3059023, merco: 2280406, lamolienda: 2853248 },
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
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tendencia Mensual 27 Meses</h2>
      <p className="text-gray-500 text-sm mb-3">Top 3 clientes por facturacion · Ene 2024 — Mar 2026</p>

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
        <span>MERCO: tendencia ascendente sostenida (+83.6% Q1 YoY)</span>
        <span>La Molienda: estable $3.5-4.8M/mes — cliente ancla de exportacion</span>
      </div>
    </SlideWrapper>
  );
}
