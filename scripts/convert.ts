import PuppeteerHTMLPDF from 'puppeteer-html-pdf';

async function generatePDF() {
    const htmlPdf = new PuppeteerHTMLPDF();

    htmlPdf.setOptions({
        format: "A4",
        margin: {
            top: "16mm",
            right: "16mm",
            bottom: "16mm",
            left: "16mm"
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
