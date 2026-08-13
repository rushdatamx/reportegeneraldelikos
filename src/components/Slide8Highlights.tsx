"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingDown } from "lucide-react";

const GOLD = "#F7B500";
const DORADO_OSCURO = "#B8860B";

const cifras = [
  {
    numero: "5",
    titulo: "nuevos clientes de exportación",
    detalle: "Desarrollados y en desarrollo",
  },
  {
    numero: "48",
    titulo: "proyectos activos y por concretar",
    detalle: "EEUU · Guatemala · República Dominicana · Corea del Sur",
  },
  {
    numero: "4",
    titulo: "cuentas globales en EEUU",
    detalle: "Cada una representará entre el 70% y 130% de la venta actual",
  },
];

export default function Slide8Highlights() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] px-12 pt-9 pb-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-1">Highlights</h2>
      <p className="text-gray-500 text-sm mb-6">
        Lo que está compensando y lo que viene
      </p>

      <div className="bg-white rounded-xl border-2 border-[#E31837]/25 shadow-sm px-7 py-5 mb-5 flex items-center gap-4">
        <TrendingDown className="w-8 h-8 text-[#E31837] shrink-0" />
        <p className="text-gray-700 text-xl font-semibold">
          Caída en ventas a clientes nacionales y clientes de exportación.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        {cifras.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border-2 shadow-sm px-7 pt-10 pb-8 flex flex-col animate-count-up"
            style={{
              borderColor: "rgba(247,181,0,0.35)",
              animationDelay: `${150 + i * 140}ms`,
            }}
          >
            <p
              className="text-[130px] font-bold leading-none tracking-tight tabular-nums"
              style={{ color: GOLD }}
            >
              {c.numero}
            </p>
            <p
              className="text-2xl font-bold mt-6 leading-snug h-[68px]"
              style={{ color: DORADO_OSCURO }}
            >
              {c.titulo}
            </p>
            <p className="text-gray-500 text-[15px] leading-snug mt-1">
              {c.detalle}
            </p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
