"use client";

export default function NotaSlide({
  titulo,
  children,
  color = "#F7B500",
}: {
  titulo?: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className="rounded-lg bg-white/90 border border-gray-200 pl-4 pr-5 py-3 mt-4"
      style={{ borderLeftWidth: "4px", borderLeftColor: color }}
    >
      <p className="text-gray-700 text-[13px] leading-snug">
        {titulo && <span className="font-bold text-gray-800">{titulo} </span>}
        {children}
      </p>
    </div>
  );
}
