"use client";

import SlideWrapper from "./SlideWrapper";

export default function SlideHalloweenHistorico() {
  return (
    <SlideWrapper className="bg-[#F8F5F0] px-12 pt-10 pb-7">
      <p className="text-sm font-bold tracking-[0.22em] text-[#C2410C]">CHETO MI MARCA 400 G HALLOWEEN</p>
      <h2 className="mt-2 text-[39px] font-bold tracking-tight text-[#1A1A1A]">Histórico de temporada</h2>
      <p className="mt-2 text-lg text-gray-500">Últimas dos temporadas</p>

      <div className="mt-12 grid grid-cols-[1fr_300px] items-end gap-16">
        <div className="flex h-[360px] items-end justify-around border-b-2 border-gray-300 px-10">
          <div className="flex h-full w-[185px] flex-col items-center justify-end">
            <p className="mb-3 text-[34px] font-bold text-[#1A1A1A]">7,380</p>
            <div className="w-full rounded-t-2xl bg-[#F7B500]" style={{ height: "50%" }} />
            <p className="mt-4 text-base font-bold text-gray-700">Promedio</p>
            <p className="text-sm text-gray-400">piezas por temporada</p>
          </div>
          <div className="flex h-full w-[185px] flex-col items-center justify-end">
            <p className="mb-3 text-[34px] font-bold text-[#1A1A1A]">8,670</p>
            <div className="w-full rounded-t-2xl bg-[#EA580C]" style={{ height: "59%" }} />
            <p className="mt-4 text-base font-bold text-gray-700">Máximo histórico</p>
            <p className="text-sm text-gray-400">piezas en temporada</p>
          </div>
          <div className="flex h-full w-[185px] flex-col items-center justify-end">
            <p className="mb-3 text-[34px] font-bold text-[#1A1A1A]">14,760</p>
            <div className="w-full rounded-t-2xl bg-[#1A1A1A]" style={{ height: "100%" }} />
            <p className="mt-4 text-base font-bold text-gray-700">Acumulado</p>
            <p className="text-sm text-gray-400">dos temporadas</p>
          </div>
        </div>
        <div className="mb-6 border-l-4 border-[#EA580C] px-6 py-2">
          <p className="text-[27px] font-bold leading-tight text-gray-800">El histórico da una referencia clara para planear la temporada.</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
