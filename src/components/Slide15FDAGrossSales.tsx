"use client";

import SlideWrapper from "./SlideWrapper";
import { DollarSign, TrendingUp } from "lucide-react";

const data = [
  {
    year: "2024",
    mxn: "$112,765,842",
    usd: "$6,153,661",
    tc: "18.325",
    bar: 83,
  },
  {
    year: "2025",
    mxn: "$135,493,059",
    usd: "$7,028,013",
    tc: "19.279",
    bar: 100,
  },
];

const growth = {
  mxn: "+20.2%",
  usd: "+14.2%",
};

export default function Slide15FDAGrossSales() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-[#F7B500]/10 flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-[#F7B500]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          FDA Audit — Total Annual Gross Sales
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-6">
        Question A: Approximate total annual overall gross sales in USD
      </p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 animate-count-up"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider font-semibold">
              {d.year}
            </p>
            <p className="text-4xl font-bold text-[#F7B500] mb-1">{d.usd}</p>
            <p className="text-gray-500 text-sm">USD</p>
            <div className="border-t border-gray-100 mt-4 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">MXN</span>
                <span className="text-gray-700 font-bold text-sm">
                  {d.mxn}
                </span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-400 text-xs">TC promedio</span>
                <span className="text-gray-500 text-sm">{d.tc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-5">
        <p className="text-gray-500 text-xs mb-3">
          Annual gross sales comparison (USD)
        </p>
        <div className="space-y-3">
          {data.map((d, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-500 text-sm font-semibold">
                  {d.year}
                </span>
                <span className="text-gray-800 font-bold text-lg">
                  {d.usd}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="h-4 rounded-full bg-[#F7B500] animate-bar-grow"
                  style={{
                    width: `${d.bar}%`,
                    animationDelay: `${i * 200}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-2 bg-[#27AE60]/10 border border-[#27AE60]/20 rounded-xl px-5 py-3 animate-count-up" style={{ animationDelay: "400ms" }}>
          <TrendingUp className="w-5 h-5 text-[#27AE60]" />
          <div>
            <p className="text-[#27AE60] text-lg font-bold">{growth.usd}</p>
            <p className="text-gray-500 text-[10px]">YoY growth (USD)</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
