// pdfWorker.js

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

self.onmessage = function (event) {
    const { textContent, filename } = event.data;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = textContent;

    html2canvas(tempDiv, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(filename);

        self.postMessage('PDF generated successfully!');
    });
};
