import PuppeteerHTMLPDF from "puppeteer-html-pdf";

const htmlPdf = new PuppeteerHTMLPDF();

htmlPdf.setOptions({
    format: "A4",
});

const html = await htmlPdf.readFile(`${__dirname}/dist/all.html`, "utf8");

try {
    const pdfBuffer = await htmlPdf.create(html);
    const path = `${__dirname}/dist/result.pdf`;
    await htmlPdf.writeFile(pdfBuffer, path);
    console.log("PDF created successfully");
} catch (error) {
    console.error("Error creating PDF", error);
}
