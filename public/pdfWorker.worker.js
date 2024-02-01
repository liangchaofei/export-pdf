importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.umd.min.js',
);

self.onmessage = async function (event) {
  console.log('Worker received message:', event.data);

  const { imgDataArray, filename } = event.data;
  try {
    const pdf = new self.jspdf.jsPDF('p', 'mm', 'a4');

    imgDataArray.forEach(({ dataUrl, width, height }) => {
      pdf.addPage();
      pdf.addImage(dataUrl, 'PNG', 0, 0, 595.28, (595.28 / width) * height);
    });
    console.log('b');
    const pdfData = pdf.output('arraybuffer');
    self.postMessage({ pdfData, filename });
  } catch (error) {
    console.error('Error generating PDF:', error);
    self.postMessage({ error: 'PDF generation failed.' });
  }
};
