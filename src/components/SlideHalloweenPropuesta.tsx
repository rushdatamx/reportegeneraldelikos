"use client";

import SlideWrapper from "./SlideWrapper";

const timing = [
  { year: "2024", sep: 46, oct: 53, nov: 1 },
  { year: "2025", sep: 76, oct: 24, nov: 0 },
];

export default function SlideHalloweenPropuesta() {
  return (
    <SlideWrapper className="bg-white px-12 pt-10 pb-7">
      <p className="text-sm font-bold tracking-[0.22em] text-[#C2410C]">CHETO MI MARCA 400 G HALLOWEEN</p>
      <h2 className="mt-2 text-[39px] font-bold tracking-tight text-[#1A1A1A]">Comportamiento de abastecimiento</h2>
      <p className="mt-2 text-lg text-gray-500">Últimas dos temporadas</p>

      <div className="mt-14 grid grid-cols-[1.15fr_.85fr] gap-16">
        <div>
          <div className="space-y-11">
            {timing.map((row) => (
              <div key={row.year}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">{row.year}</span>
                  <span className="text-sm text-gray-500">Antes de noviembre</span>
                </div>
                <div className="flex h-14 overflow-hidden rounded-lg text-base font-bold text-white">
                  <div className="flex items-center justify-center bg-[#EA580C]" style={{ width: `${row.sep}%` }}>Sep {row.sep}%</div>
                  <div className="flex items-center justify-center bg-[#F7B500] text-[#5B3900]" style={{ width: `${row.oct}%` }}>Oct {row.oct}%</div>
                  {row.nov > 0 && <div className="bg-gray-300" style={{ width: `${row.nov}%` }} />}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 border-l-4 border-[#EA580C] px-5 py-2 text-[25px] font-bold leading-tight text-gray-800">
            La temporada se define en septiembre y octubre.
          </div>
        </div>

        <div className="flex flex-col justify-center border-l border-gray-200 pl-12">
          <p className="text-sm font-bold tracking-[0.18em] text-[#C2410C]">REFERENCIA 2026</p>
          <p className="mt-4 text-[78px] font-black leading-none tracking-tight text-[#1A1A1A]">9,000</p>
          <p className="mt-2 text-2xl font-semibold text-gray-600">piezas propuestas</p>
          <p className="mt-7 text-base text-gray-500">330 piezas por arriba del máximo histórico.</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
