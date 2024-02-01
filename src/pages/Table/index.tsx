// // Home.jsx
// import { Button } from 'antd';
// import html2canvas from 'html2canvas';
// import { useRef } from 'react';
// import ProTable from './components/ProTable';

// const Home = () => {
//   const contentRef = useRef(null);

//   const handleClick = () => {
//     const htmlContent = contentRef.current;
//     if (!htmlContent) {
//       console.error('HTML content is null or undefined');
//       return;
//     }
//     html2canvas(htmlContent, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const worker = new Worker('/public/pdfWorker.worker.js');

//       worker.onmessage = (event) => {
//         console.log(event.data);
//         worker.terminate();
//       };

//       worker.onerror = (error) => {
//         console.error(error);
//         worker.terminate();
//       };

//       const filename = 'output.pdf';
//       worker.postMessage({ imgData, filename });
//     });
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>导出</Button>
//       <div ref={contentRef}>
//         <div>aaa</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//       </div>
//     </div>
//   );
// };

// export default Home;
import { Button } from 'antd';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import ProTable from './components/ProTable';
const Home = () => {
  const contentRef = useRef(null);

  const handleClick = () => {
    const htmlContent = contentRef.current;
    if (!htmlContent) {
      console.error('HTML content is null or undefined');
      return;
    }
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scale = 1 / devicePixelRatio;

    // Calculate the canvas dimensions based on the scaled size
    // @ts-ignore
    const canvasWidth = htmlContent.offsetWidth * devicePixelRatio;
    // @ts-ignore
    const canvasHeight = htmlContent.offsetHeight * devicePixelRatio;
    html2canvas(htmlContent, {
      useCORS: true,
      allowTaint: true,
      scale,
      width: canvasWidth,
      height: canvasHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const worker = new Worker('/public/pdfWorker.worker.js');

      worker.onmessage = (event) => {
        const { pdfData, filename, error } = event.data;
        if (pdfData) {
          const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });

          // Use FileSaver.js to save the PDF
          saveAs(pdfBlob, filename);

          console.log('PDF saved successfully!');
        } else {
          console.error('PDF generation failed:', error);
        }

        worker.terminate();
      };

      worker.onerror = (error) => {
        console.error('Worker error:', error);
        worker.terminate();
      };

      const filename = 'output.pdf';
      worker.postMessage({ imgData, filename });
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>Export as PDF</Button>
      <div ref={contentRef}>
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
        <ProTable />
      </div>
    </div>
  );
};

export default Home;
