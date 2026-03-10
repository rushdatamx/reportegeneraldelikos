"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, TrendingUp, ChevronRight } from "lucide-react";

const alertas = [
  {
    icon: AlertTriangle,
    color: "#E31837",
    texto: "BOTANAS Y DERIVADOS cayo -95.5% YTD (de $4.5M a $202K).",
    accion: "Contactar al cliente. ¿Perdimos la cuenta? ¿Cambiaron de proveedor?",
    responsable: "Direccion",
  },
  {
    icon: AlertTriangle,
    color: "#E31837",
    texto: "HEB cayo -2.5% YTD ($1.1M a $1.0M). Durito concentra 51.7% del mix.",
    accion: "Diversificar catalogo en HEB. Evaluar promociones para otros SKUs.",
    responsable: "Mario Pena",
  },
  {
    icon: AlertTriangle,
    color: "#E31837",
    texto: "Datos de Feb-Mar 2026 vienen sin columna Cantidad/Unidades.",
    accion: "Solicitar exportacion completa del ERP para tener pieza/kilo.",
    responsable: "Mario Pena",
  },
];

const positivos = [
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "YTD 2026 crece +19.9% vs 2025 ($22.7M vs $19.0M). Ambos meses positivos.",
    accion: "Mantener impulso y monitorear cierre de Q1.",
    responsable: "Direccion",
  },
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "ALSUPER explota +209% YTD ($2.3M → $7.2M). 1er cliente nacional.",
    accion: "Reforzar relacion, asegurar abasto y explorar ampliar catalogo.",
    responsable: "Mario Pena",
  },
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "MERCO crece +83.9% YTD. Tostada Roja 70PZ con $2.8M (54.9% del mix).",
    accion: "Mantener abasto de tostadas y explorar nuevas lineas.",
    responsable: "Mario Pena",
  },
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "Puente Foods: cliente nuevo de exportacion con $437K en 2 meses.",
    accion: "Dar seguimiento para consolidar la relacion comercial.",
    responsable: "Direccion",
  },
];

export default function Slide7Acciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10" hideFooter>
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Insights y Acciones</h2>
      <p className="text-gray-500 text-sm mb-5">Hallazgos clave y proximos pasos</p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {/* Alertas */}
        <div>
          <p className="text-[#E31837] text-xs font-bold mb-3 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" /> ALERTAS
          </p>
          <div className="space-y-3">
            {alertas.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: a.color }} />
                    <div>
                      <p className="text-gray-700 text-xs mb-1">{a.texto}</p>
                      <div className="flex items-center gap-1 text-[10px]">
                        <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                        <span className="text-gray-500">{a.accion}</span>
                      </div>
                      <p className="text-gray-400 text-[10px] mt-1">→ {a.responsable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Positivos */}
        <div>
          <p className="text-[#27AE60] text-xs font-bold mb-3 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" /> POSITIVOS Y SEGUIMIENTO
          </p>
          <div className="space-y-3">
            {positivos.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: a.color }} />
                    <div>
                      <p className="text-gray-700 text-xs mb-1">{a.texto}</p>
                      <div className="flex items-center gap-1 text-[10px]">
                        <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                        <span className="text-gray-500">{a.accion}</span>
                      </div>
                      <p className="text-gray-400 text-[10px] mt-1">→ {a.responsable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer crema */}
      <div className="mt-4 bg-[#FDF8F0] rounded-lg px-6 py-3 text-center border border-[#E8DCC8]">
        <p className="text-gray-500 text-xs">
          Datos actualizados al <span className="text-gray-800 font-semibold">10 de marzo 2026</span> · Resumen Ejecutivo DELIKOS
        </p>
      </div>
    </SlideWrapper>
  );
}
