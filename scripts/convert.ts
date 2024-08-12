import PuppeteerHTMLPDF from 'puppeteer-html-pdf';

async function generatePDF() {
    const htmlPdf = new PuppeteerHTMLPDF();

    htmlPdf.setOptions({
        format: "A4",
        margin: {
            top: "20mm",
            right: "20mm",
            bottom: "20mm",
            left: "20mm"
        },
    });

    try {
        const html = await htmlPdf.readFile(`${__dirname}/../dist/all.html`, "utf8");

        const pdfBuffer = await htmlPdf.create(html);
        const path = `${__dirname}/../dist/result.pdf`;
        await htmlPdf.writeFile(pdfBuffer, path);

        console.log("PDF created successfully");
    } catch (error) {
        console.error("Error creating PDF", error);
    }
}

generatePDF();
