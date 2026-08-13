const fs = require("fs");
const path = require("path");
const { jsPDF } = require("jspdf");

const SRC = "/Users/jmariopgarcia/Desktop/2026/kam-data/erp/presentacion/export/q1";
const OUT = "/Users/jmariopgarcia/Desktop/2026/kam-data/erp/outputs";

// V2 (opcion A): pag 1 = donas + highlights juntos, pag 2 = mensuales
const paginas = ["slide-09.png", "slide-07.png"];

const pdf = new jsPDF({ orientation: "landscape", unit: "pt", format: [1280, 720], compress: true });
paginas.forEach((f, i) => {
  if (i > 0) pdf.addPage([1280, 720], "landscape");
  const b64 = fs.readFileSync(path.join(SRC, f)).toString("base64");
  pdf.addImage(`data:image/png;base64,${b64}`, "PNG", 0, 0, 1280, 720, undefined, "FAST");
});

const dest = path.join(OUT, "DELIKOS-Ventas-Mexico-Exportacion-2025-2026-v2.pdf");
fs.writeFileSync(dest, Buffer.from(pdf.output("arraybuffer")));
console.log(`${dest}  ${(fs.statSync(dest).size/1024/1024).toFixed(1)} MB  ${paginas.length} paginas`);

fs.copyFileSync(path.join(SRC, "slide-09.png"), path.join(OUT, "DELIKOS-mercado-highlights-v2.png"));
console.log("PNG v2 actualizado");
