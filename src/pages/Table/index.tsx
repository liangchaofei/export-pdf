import { Button } from 'antd';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import ProTable from './components/ProTable';
const Home = () => {
  const contentRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const getSections = (content: any) => {
    const sections = [];
    const pageSize = 800; // You can adjust this value based on your requirements

    let offset = 0;
    while (offset < content.clientHeight) {
      const section = document.createElement('div');
      section.style.height = `${pageSize}px`;
      section.style.overflow = 'hidden';

      const clonedContent = content.cloneNode(true);
      clonedContent.style.transform = `translate(0, -${offset}px)`;
      section.appendChild(clonedContent);

      sections.push(section);
      offset += pageSize;
    }

    return sections;
  };

  async function captureSection(section: any) {
    const wrapper = document.createElement('div');
    wrapper.appendChild(section.cloneNode(true));
    document.body.appendChild(wrapper);

    const canvas = await html2canvas(wrapper, { scale: 1 });
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    const imgWidth = 595.28;
    const imgHeight = (592.28 / contentWidth) * contentHeight;
    return {
      dataUrl: canvas.toDataURL('image/jpeg'),
      width: imgWidth,
      height: imgHeight,
    };
  }
  const handleClick = async () => {
    setLoading(true);
    const htmlContent = contentRef.current;
    if (!htmlContent) {
      console.error('HTML content is null or undefined');
      return;
    }

    const sections = getSections(htmlContent);
    console.log('sections', sections);

    const imgDataArray = [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const { dataUrl, width, height } = await captureSection(section);
      imgDataArray.push({ dataUrl, width, height });
    }
    const worker = new Worker('/public/pdfWorker.worker.js');
    worker.onmessage = (event) => {
      const { pdfData, filename, error } = event.data;
      if (pdfData) {
        const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });

        saveAs(pdfBlob, filename);
        setLoading(false);
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
    worker.postMessage({ imgDataArray, filename });
  };

  return (
    <div>
      <Button loading={loading} onClick={handleClick}>
        Export as PDF
      </Button>
      <div ref={contentRef}>
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
        />
        <ProTable />
        <ProTable />
        <ProTable />
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
        />
        <ProTable />
        <ProTable />
        <ProTable />
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
        />
        <ProTable />
        <ProTable />
        <ProTable />
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
        />
        <ProTable />
        <ProTable />
        <ProTable />
      </div>
    </div>
  );
};

export default Home;
