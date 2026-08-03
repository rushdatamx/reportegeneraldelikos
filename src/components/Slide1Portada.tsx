"use client";

import SlideWrapper from "./SlideWrapper";

export default function Slide1Portada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] justify-center items-center text-center relative" hideFooter>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F7B500]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F7B500]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/60 blur-3xl" />
      </div>
      <div className="relative z-10 space-y-5">
        <div className="flex justify-center">
          <img src="/delikos-logo.jpeg" alt="Botanas Delikos" className="h-32 object-contain rounded-lg" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
          Resumen Ejecutivo de Ventas
        </h1>
        <p className="text-2xl text-gray-500 font-light">DELIKOS</p>
        <p className="text-lg text-gray-400">Enero — Julio 2026</p>
        <div className="flex justify-center gap-3 mt-4">
          <div className="px-6 py-2 rounded-full border border-[#F7B500]/50 text-[#B8860B] text-sm font-semibold bg-white/70">
            $78.6M facturados
          </div>
          <div className="px-6 py-2 rounded-full border border-[#2E75B6]/50 text-[#2E75B6] text-sm font-semibold bg-white/70">
            33 clientes activos
          </div>
          <div className="px-6 py-2 rounded-full border border-[#27AE60]/50 text-[#27AE60] text-sm font-semibold bg-white/70">
            7 mercados de exportación
          </div>
        </div>
        <p className="text-gray-500 text-sm max-w-[720px] mx-auto leading-relaxed pt-4">
          Este documento resume la facturación de DELIKOS de enero a julio de 2026, comparada contra el
          mismo periodo del año anterior. Cada slide incluye una nota que explica qué está mostrando.
        </p>
      </div>
    </SlideWrapper>
  );
}
