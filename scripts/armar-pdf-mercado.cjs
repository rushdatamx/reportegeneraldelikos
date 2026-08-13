const fs = require("fs");
const path = require("path");
const { jsPDF } = require("jspdf");

const SRC = "/Users/jmariopgarcia/Desktop/2026/kam-data/erp/presentacion/export/q1";
const OUT = "/Users/jmariopgarcia/Desktop/2026/kam-data/erp/outputs";

// pagina 1 = donas (slide-06), pagina 2 = mensuales (slide-07), pagina 3 = highlights (slide-08)
const paginas = ["slide-06.png", "slide-07.png", "slide-08.png"];

const pdf = new jsPDF({ orientation: "landscape", unit: "pt", format: [1280, 720], compress: true });
paginas.forEach((f, i) => {
  if (i > 0) pdf.addPage([1280, 720], "landscape");
  const b64 = fs.readFileSync(path.join(SRC, f)).toString("base64");
  pdf.addImage(`data:image/png;base64,${b64}`, "PNG", 0, 0, 1280, 720, undefined, "FAST");
});

const dest = path.join(OUT, "DELIKOS-Ventas-Mexico-Exportacion-2025-2026.pdf");
fs.writeFileSync(dest, Buffer.from(pdf.output("arraybuffer")));
console.log(`${dest}  ${(fs.statSync(dest).size/1024/1024).toFixed(1)} MB  ${paginas.length} paginas`);

// PNGs sueltos por si los quiere aparte
fs.copyFileSync(path.join(SRC, "slide-06.png"), path.join(OUT, "DELIKOS-ventas-mexico-exportacion.png"));
fs.copyFileSync(path.join(SRC, "slide-07.png"), path.join(OUT, "DELIKOS-ventas-mensuales.png"));
fs.copyFileSync(path.join(SRC, "slide-08.png"), path.join(OUT, "DELIKOS-highlights.png"));
console.log("PNGs actualizados");
