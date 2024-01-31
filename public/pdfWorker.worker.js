// pdfWorker.js
importScripts('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.umd.min.js');

self.onmessage = function (event) {
    const { imgData, filename } = event.data;

    // Instantiate jsPDF directly in the worker
    const pdf = new self.jspdf.jsPDF('p', 'mm', 'a4');

    // Set the scale directly in the addImage method
    pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    // Save the PDF
    pdf.save(filename);

    self.postMessage('PDF generated successfully!');
};
