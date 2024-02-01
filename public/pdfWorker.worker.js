// // pdfWorker.js;
// importScripts(
//   'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
// );

// self.onmessage = async function (event) {
//   const { imgData, filename } = event.data;
//   const pdf = new self.jspdf.jsPDF('p', 'mm', 'a4');
//   console.log('imgData', imgData);
//   pdf.addImage(
//     imgData,
//     'PNG',
//     0,
//     0,
//     pdf.internal.pageSize.getWidth(),
//     pdf.internal.pageSize.getHeight(),
//   );

//   // Save the PDF
//   await pdf.save(filename);

//   self.postMessage('PDF generated successfully!');
// };
// importScripts(
//   'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.umd.min.js',
// );
// importScripts(
//   'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js',
// );

// self.onmessage = async function (event) {
//   console.log('Worker received message:', event.data);

//   const { imgData, filename } = event.data;

//   try {
//     const pdf = new self.jspdf.jsPDF('p', 'mm', 'a4');
//     console.log('1');
//     pdf.addImage(
//       imgData,
//       'PNG',
//       0,
//       0,
//       pdf.internal.pageSize.getWidth(),
//       pdf.internal.pageSize.getHeight(),
//     );
//     console.log('2', pdf);
//     const output = pdf.output();
//     console.log('PDF output:', output);

//     pdf.save(filename);
//     self.postMessage('PDF generated successfully!');
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     self.postMessage('PDF generation failed.');
//   }
// };
importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.umd.min.js',
);
importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js',
);

self.onmessage = async function (event) {
  console.log('Worker received message:', event.data);

  const { imgData, filename } = event.data;
  // 1 canvas 宽高
  // const contentWidth = canvas.width;
  // const contentHeight = canvas.height;
  // // 2 一页 pdf 显示 html 页面生成的 canvas 高度
  // const pageHeight = (contentWidth / 592.28) * 841.89;
  // // 3 未生成 pdf 的 html 页面高度
  // let leftHeight = contentHeight;
  // // 4 pdf 页面偏移
  // let position = 0;
  // // 5 a4纸的尺寸 [595.28, 841.89]，html 页面生成的 canvas 在 pdf 中图片的宽高
  // const imgWidth = 595.28;
  // const imgHeight = (592.28 / contentWidth) * contentHeight;

  try {
    const pdf = new self.jspdf.jsPDF('p', 'mm', 'a4');

    // // 当内容未超过 pdf 一页显示的范围，无需分页
    // if (leftHeight < pageHeight) {
    //   pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
    // } else {
    //   while (leftHeight > 0) {
    //     console.log(imgWidth, imgHeight, position, leftHeight);
    //     pdf.addImage(img, 'JPEG', 0, position, imgWidth, imgHeight);
    //     leftHeight -= pageHeight;
    //     position -= 841.89;
    //     // 避免添加空白页
    //     if (leftHeight > 0) {
    //       pdf.addPage();
    //     }
    //   }
    // }
    // // 6 挂载至页面
    // const blob = dataURLtoBlob(pdf.output('datauristring'));
    // console.log(blob);
    // const url = window.URL.createObjectURL(blob); //获得一个pdf的url对象
    // location.href = url;
    pdf.addImage(
      imgData,
      'PNG',
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight(),
    );

    const pdfData = pdf.output('arraybuffer'); // Get the PDF data as ArrayBuffer
    self.postMessage({ pdfData, filename });
  } catch (error) {
    console.error('Error generating PDF:', error);
    self.postMessage({ error: 'PDF generation failed.' });
  }
};
