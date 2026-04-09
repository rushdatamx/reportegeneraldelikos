"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import Slide1Portada from "@/components/Slide1Portada";
import Slide2KPIs from "@/components/Slide2KPIs";
import Slide3Clientes from "@/components/Slide3Clientes";
import Slide4TopProductos from "@/components/Slide4TopProductos";
import Slide5Exportacion from "@/components/Slide5Exportacion";
import Slide6ABCProductos from "@/components/Slide6ABCProductos";
import Slide7CrecimientoCaida from "@/components/Slide7CrecimientoCaida";
import Slide8Concentracion from "@/components/Slide8Concentracion";
import Slide9ClientesNuevosPerdidos from "@/components/Slide9ClientesNuevosPerdidos";
import Slide10VentaCruzada from "@/components/Slide10VentaCruzada";
import Slide11Tendencia from "@/components/Slide11Tendencia";
import Slide12Precios from "@/components/Slide12Precios";
import Slide13Estacionalidad from "@/components/Slide13Estacionalidad";
import Slide14CierreQ1 from "@/components/Slide14CierreQ1";

const tabs = [
  {
    id: "q1",
    label: "Q1 2026",
    color: "#F7B500",
    slides: [
      Slide1Portada,
      Slide2KPIs,
      Slide3Clientes,
      Slide4TopProductos,
      Slide5Exportacion,
    ],
  },
  {
    id: "estrategico",
    label: "Estratégico",
    color: "#2E75B6",
    slides: [
      Slide6ABCProductos,
      Slide7CrecimientoCaida,
      Slide8Concentracion,
      Slide9ClientesNuevosPerdidos,
      Slide10VentaCruzada,
    ],
  },
  {
    id: "tendencias",
    label: "Tendencias",
    color: "#27AE60",
    slides: [
      Slide11Tendencia,
      Slide12Precios,
      Slide13Estacionalidad,
      Slide14CierreQ1,
    ],
  },
];

function HomeInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabParam ? tabs.findIndex((t) => t.id === tabParam) : 0;

  const [tabIdx, setTabIdx] = useState(initialTab >= 0 ? initialTab : 0);
  const [current, setCurrent] = useState(0);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (tabParam) {
      const idx = tabs.findIndex((t) => t.id === tabParam);
      if (idx >= 0) {
        setTabIdx(idx);
        setCurrent(0);
      }
    }
  }, [tabParam]);

  const tab = tabs[tabIdx];
  const slides = tab.slides;
  const Slide = slides[current];

  const switchTab = (idx: number) => {
    setTabIdx(idx);
    setCurrent(0);
  };

  const exportPDF = async () => {
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });

      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.left = "-9999px";
      container.style.top = "0";
      document.body.appendChild(container);

      for (let i = 0; i < slides.length; i++) {
        const wrapper = document.createElement("div");
        container.appendChild(wrapper);

        const { createRoot } = await import("react-dom/client");
        const SlideComp = slides[i];
        const root = createRoot(wrapper);
        root.render(<SlideComp />);

        await new Promise((r) => setTimeout(r, 300));

        const slideEl = wrapper.querySelector("div");
        if (!slideEl) continue;

        const canvas = await html2canvas(slideEl, {
          width: 1280,
          height: 720,
          scale: 2,
          useCORS: true,
          backgroundColor: "#F5F5F5",
        });

        if (i > 0) pdf.addPage();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1280, 720);
        root.unmount();
      }

      document.body.removeChild(container);
      pdf.save(`${tab.label}_DELIKOS_Q1_2026.pdf`);
    } catch (err) {
      console.error("Error exporting PDF:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center py-8">
      <div className="relative">
        <div className="flex justify-center gap-2 mb-4">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                i === tabIdx
                  ? "text-white shadow-md"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
              style={i === tabIdx ? { backgroundColor: t.color } : undefined}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-300">
          <Slide />
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="p-2 rounded-full bg-white text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{
                  backgroundColor: i === current ? tab.color : "#9CA3AF",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
            disabled={current === slides.length - 1}
            className="p-2 rounded-full bg-white text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-3">
          <p className="text-gray-500 text-xs">
            {tab.label} · Slide {current + 1} / {slides.length}
          </p>
          <button
            onClick={exportPDF}
            disabled={exporting}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm transition-colors disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            {exporting ? "Exportando..." : `PDF ${tab.label}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
