// pdfWorker.js;
importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
);

self.onmessage = async function (event) {
  const { imgData, filename } = event.data;
  const pdf = new self.jspdf.jsPDF('p', 'mm', 'a4');
  console.log('imgData', imgData);
  pdf.addImage(
    imgData,
    'PNG',
    0,
    0,
    pdf.internal.pageSize.getWidth(),
    pdf.internal.pageSize.getHeight(),
  );

  // Save the PDF
  await pdf.save(filename);

  self.postMessage('PDF generated successfully!');
};
