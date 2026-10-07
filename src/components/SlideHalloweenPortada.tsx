"use client";

import SlideWrapper from "./SlideWrapper";

export default function SlideHalloweenPortada() {
  return (
    <SlideWrapper className="bg-[#15100D] justify-center items-center text-center relative overflow-hidden" hideFooter>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 78% 18%, #F97316 0, transparent 23%), radial-gradient(circle at 18% 88%, #DC2626 0, transparent 27%)" }} />
      <div className="absolute top-[-90px] right-[-70px] h-[400px] w-[400px] rounded-full border-[34px] border-[#F97316]/25" />
      <div className="absolute bottom-[-130px] left-[-80px] h-[390px] w-[390px] rounded-full border-[28px] border-[#F7B500]/20" />

      <div className="relative z-10 max-w-[940px] px-12">
        <img src="/delikos-logo.jpeg" alt="Botanas Delikos" className="mx-auto h-24 rounded-lg object-contain shadow-lg" />
        <p className="mt-9 text-sm font-bold tracking-[0.32em] text-[#F7B500]">OPERADORA FUTURAMA</p>
        <h1 className="mt-3 text-[60px] font-black leading-[1.02] tracking-tight text-white">
          Cheto Mi Marca<br />Halloween 2026
        </h1>
        <p className="mt-5 text-2xl font-light text-white/75">
          Propuesta de compra basada en el historial de las últimas dos temporadas
        </p>
        <div className="mt-10 flex items-center justify-center gap-10 text-left">
          <div className="border-l-2 border-[#F97316] pl-5">
            <p className="text-4xl font-bold text-white">14,760</p>
            <p className="mt-1 text-sm text-white/60">piezas en dos temporadas</p>
          </div>
          <div className="border-l-2 border-[#F7B500] pl-5">
            <p className="text-4xl font-bold text-white">9,000</p>
            <p className="mt-1 text-sm text-white/60">piezas propuestas para 2026</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
