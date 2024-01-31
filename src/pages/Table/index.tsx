// Home.jsx
import React, { useRef } from "react";
import { Button } from 'antd';
import html2canvas from 'html2canvas';

const Home = () => {
  const contentRef = useRef(null);

  const handleClick = () => {
    const htmlContent = contentRef.current;
    if (!htmlContent) {
      console.error('HTML content is null or undefined');
      return;
    }
    html2canvas(htmlContent, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const worker = new Worker('/public/pdfWorker.worker.js');

      worker.onmessage = (event) => {
        console.log(event.data);
        worker.terminate();
      };

      worker.onerror = (error) => {
        console.error(error);
        worker.terminate();
      };

      const filename = 'output.pdf';

      worker.postMessage({ imgData, filename });
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>导出</Button>
      <div ref={contentRef}>aaa</div>
    </div>
  );
};

export default Home;
