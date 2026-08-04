/**
 * Exporta la presentación a PDF y PNG en alta resolución.
 *
 * Renderiza cada slide a 1280x720 con deviceScaleFactor 3 (=3840x2160 px reales)
 * y las embebe en un PDF de 1280x720 pt. El texto se ve nítido incluso proyectado.
 *
 * Uso:  npm run export           (todos los tabs)
 *       npm run export -- q1     (solo un tab)
 */
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE = process.env.EXPORT_URL || "http://localhost:3000";
const OUT = path.join(__dirname, "..", "export");
const SCALE = 3; // 3840x2160 por slide
const TABS = ["q1", "estrategico", "tendencias", "fda"];

const NOMBRES = {
  q1: "Resumen-Ejecutivo-Ventas-EneJul2026",
  estrategico: "Analisis-Estrategico",
  tendencias: "Tendencias",
  fda: "FDA-Audit",
};

(async () => {
  const soloTab = process.argv[2];
  const tabs = soloTab ? [soloTab] : TABS;

  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--force-device-scale-factor=" + SCALE, "--font-render-hinting=none"],
  });

  for (const tab of tabs) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1500,
      height: 1000,
      deviceScaleFactor: SCALE,
    });

    await page.goto(`${BASE}/?tab=${tab}`, { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 2000));

    const nSlides = await page.$$eval("button.w-2\\.5", (b) => b.length);
    if (!nSlides) {
      console.log(`  ${tab}: sin slides, salto`);
      await page.close();
      continue;
    }

    const dir = path.join(OUT, tab);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const imgs = [];
    for (let i = 0; i < nSlides; i++) {
      const dots = await page.$$("button.w-2\\.5");
      await dots[i].click();
      // esperar a que terminen las animaciones de entrada
      await new Promise((r) => setTimeout(r, 1200));

      const el = await page.$("div.w-\\[1280px\\]");
      const file = path.join(dir, `slide-${String(i + 1).padStart(2, "0")}.png`);
      await el.screenshot({ path: file });
      imgs.push(file);
      process.stdout.write(`  ${tab} slide ${i + 1}/${nSlides}\r`);
    }
    console.log(`  ${tab}: ${nSlides} slides -> ${dir}`);
    await page.close();

    // armar el PDF con las imágenes a resolución completa
    const { jsPDF } = require("jspdf");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [1280, 720],
      compress: true,
    });

    imgs.forEach((f, i) => {
      if (i > 0) pdf.addPage([1280, 720], "landscape");
      const b64 = fs.readFileSync(f).toString("base64");
      pdf.addImage(`data:image/png;base64,${b64}`, "PNG", 0, 0, 1280, 720, undefined, "FAST");
    });

    const pdfPath = path.join(OUT, `${NOMBRES[tab] || tab}.pdf`);
    fs.writeFileSync(pdfPath, Buffer.from(pdf.output("arraybuffer")));
    const mb = (fs.statSync(pdfPath).size / 1024 / 1024).toFixed(1);
    console.log(`  -> ${pdfPath} (${mb} MB)`);
  }

  await browser.close();
  console.log("\nListo. PDFs y PNGs en:", OUT);
})();
