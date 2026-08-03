"use client";

import SlideWrapper from "./SlideWrapper";
import { CheckCircle, ArrowRight } from "lucide-react";

const fortalezas = [
  {
    titulo: "El negocio de marca crece",
    detalle:
      "+2.6% comparable ($76.4M → $78.4M) tras absorber la salida completa de la maquila de terceros que aportaba $11.1M el año pasado.",
  },
  {
    titulo: "Ingreso mas predecible",
    detalle:
      "La variacion mensual baja de 27.2% a 6.6%. El piso mensual sube de $9.1M a $10.1M — flujo estable mes con mes.",
  },
  {
    titulo: "Cartera mas amplia",
    detalle:
      "34 clientes activos (+42%), 16 clientes nuevos que aportan $5.1M y 811 facturas emitidas (+15%).",
  },
  {
    titulo: "Menor riesgo de concentracion",
    detalle:
      "HHI baja de 0.220 a 0.206. El cliente #1 pasa de 32.1% a 29.3%. Exportacion de 2 a 7 compradores.",
  },
  {
    titulo: "Mezcla de mayor valor",
    detalle:
      "Sale maquila de bajo margen bajo marca de terceros; entra volumen de marca propia con control comercial y de precio.",
  },
];

const motores = [
  { nombre: "MERCO", monto: "+$5.0M", var: "+51%" },
  { nombre: "Export nuevos", monto: "+$3.0M", var: "6 clientes" },
  { nombre: "Almendra Domo", monto: "+$1.9M", var: "+478%" },
  { nombre: "Tostada Roja 70PZ", monto: "+$1.5M", var: "+24%" },
  { nombre: "Durito 20 pzs", monto: "+$1.0M", var: "+47%" },
  { nombre: "HEB / MITIENDA", monto: "+$0.7M", var: "+17%" },
];

export default function Slide14CierreQ1() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Sintesis Ene-Jul 2026</h2>
      <p className="text-gray-500 text-sm mb-4">
        Facturacion sell-in DELIKOS · 7 meses cerrados con datos del ERP
      </p>

      <div className="flex gap-5 flex-1">
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-gray-800 font-bold mb-3">Lo que muestran los numeros</h3>
          <div className="space-y-3">
            {fortalezas.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 animate-count-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#27AE60]" />
                <div>
                  <p className="text-gray-800 text-[13px] font-bold leading-snug">{f.titulo}</p>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{f.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[440px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <h3 className="text-gray-800 font-bold mb-3 text-sm">Motores de crecimiento Ene-Jul</h3>
            <div className="space-y-2">
              {motores.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-1.5 animate-count-up"
                  style={{ animationDelay: `${i * 80 + 300}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#27AE60]" />
                    <span className="text-gray-700 text-xs font-semibold">{m.nombre}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#27AE60] font-bold text-xs">{m.monto}</span>
                    <span className="text-[10px] text-gray-500 bg-white px-1.5 py-0.5 rounded border border-gray-200">
                      {m.var}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Facturado Ene-Jul</p>
              <p className="text-[#F7B500] text-xl font-bold">$78.6M</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">SKUs activos</p>
              <p className="text-gray-800 text-xl font-bold">163</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Clientes activos</p>
              <p className="text-gray-800 text-xl font-bold">34</p>
            </div>
          </div>

          <div className="bg-[#27AE60]/5 border-2 border-[#27AE60]/30 rounded-xl p-4 flex-1 flex flex-col justify-center">
            <p className="text-[#1E8449] text-base font-bold mb-1.5">
              Una base de ingresos mas amplia y mas estable
            </p>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              DELIKOS cerro 7 meses de 2026 con mas clientes, mas productos, menor concentracion y un
              flujo mensual notablemente mas predecible que en 2025 — despues de reemplazar por completo
              un contrato de maquila de $11.1M con negocio de marca propia.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
