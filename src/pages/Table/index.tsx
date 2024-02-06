// import { Button } from 'antd';
// import html2canvas from 'html2canvas';
// import { useRef, useState } from 'react';
// import ProTable from './components/ProTable';

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const getSections = (content: HTMLDivElement): HTMLDivElement[] => {
//     const children = content.children;
//     const sections: HTMLDivElement[] = [];

//     Array.from(children).forEach((child) => {
//       const section = document.createElement('div');
//       section.style.height = `${(child as HTMLElement).clientHeight}px`;
//       section.style.overflow = 'hidden';
//       section.appendChild((child as HTMLElement).cloneNode(true));
//       sections.push(section);
//     });

//     return sections;
//   };

//   const captureSection = async (section: HTMLDivElement): Promise<string> => {
//     const wrapper = document.createElement('div');
//     wrapper.appendChild(section.cloneNode(true));
//     document.body.appendChild(wrapper);
//     const canvas = await html2canvas(wrapper, { scale: 1, useCORS: true });
//     document.body.removeChild(wrapper);
//     return canvas.toDataURL('image/jpeg');
//   };

//   const handleClick = async () => {
//     setLoading(true);
//     const htmlContent = contentRef.current;
//     if (!htmlContent) {
//       console.error('HTML content is null or undefined');
//       return;
//     }

//     const sections = getSections(htmlContent);
//     console.log('sections', sections.length);
//     const imgDataArray: string[] = [];
//     for (let i = 0; i < sections.length; i++) {
//       const section = sections[i];
//       const dataUrl = await captureSection(section);
//       imgDataArray.push(dataUrl);
//     }

//     // Do whatever you want with imgDataArray here
//     console.log(imgDataArray);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={handleClick}>
//         Export as Images
//       </Button>
//       <div ref={contentRef}>
// <img
//   src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//   alt=""
// />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//       </div>
//     </div>
//   );
// };

// export default Home;
// import { Button } from 'antd';
// import html2canvas from 'html2canvas';
// import { useRef, useState } from 'react';
// import ProTable from './components/ProTable';

// const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
// const PAGE_WIDTH_MM = 210; // A4页面宽度（毫米）

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const capturePage = async () => {
//     setLoading(true);
//     const content = contentRef.current;
//     if (!content) {
//       console.error('Content element is null or undefined');
//       return;
//     }

//     const pageDataUrls: string[] = [];

//     const contentHeight = content.scrollHeight;
//     const numPages = Math.ceil(contentHeight / (PAGE_HEIGHT_MM * 3.78)); // 3.78为mm到像素的转换比例

//     for (let i = 0; i < numPages; i++) {
//       const canvas = await html2canvas(content, {
//         scale: 1,
//         windowWidth: document.documentElement.offsetWidth,
//         windowHeight: PAGE_HEIGHT_MM * 3.78, // 转换为像素
//         x: 0,
//         y: i * PAGE_HEIGHT_MM * 3.78,
//         useCORS: true,
//       });
//       console.log('a', canvas.toDataURL());
//       pageDataUrls.push(canvas.toDataURL('image/jpeg'));
//     }

//     // Do whatever you want with the pageDataUrls here
//     // console.log(pageDataUrls);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={capturePage}>
//         Export as Image
//       </Button>
//       <div ref={contentRef}>
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { Button } from 'antd';
// import html2canvas from 'html2canvas';
// import { useRef, useState } from 'react';
// import ProTable from './components/ProTable';

// const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
// const PAGE_WIDTH_MM = 210; // A4页面宽度（毫米）
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const capturePage = async () => {
//     setLoading(true);
//     const content = contentRef.current;
//     if (!content) {
//       console.error('Content element is null or undefined');
//       return;
//     }

//     const contentHeight = content.scrollHeight;
//     const numPages = Math.ceil(contentHeight / (PAGE_HEIGHT_MM * 3.78)); // 3.78为mm到像素的转换比例

//     const pageDataUrls: string[] = [];
//     for (let i = 0; i < numPages; i++) {
//       const canvas = await html2canvas(content, {
//         scale: 2, // 提高分辨率以改善图像质量
//         windowWidth: content.offsetWidth,
//         windowHeight: PAGE_HEIGHT_MM * 3.78,
//         x: 0,
//         y: -i * PAGE_HEIGHT_MM * 3.78,
//         useCORS: true, // 添加这个选项以处理跨域图片
//         allowTaint: true, // 允许加载跨域图片和 CSS
//         logging: false, // 禁用日志，以提高性能
//         scrollX: 0, // 水平滚动位置
//         scrollY: -i * PAGE_HEIGHT_MM * 3.78, // 垂直滚动位置
//         removeContainer: false, // 不移除生成的 canvas 容器
//         backgroundColor: '#fff', // 设置背景颜色以解决空白问题
//       });
//       console.log('a', canvas.toDataURL());
//       // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
//     }

//     // Do whatever you want with the pageDataUrls here
//     console.log(pageDataUrls);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={capturePage}>
//         Export as Image
//       </Button>
//       <div ref={contentRef}>
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
//           alt=""
//         />
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <img
//           src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
//           alt=""
//         />
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
// import { Button } from 'antd';
// import html2canvas from 'html2canvas';
// import { useRef, useState } from 'react';
// import ProTable from './components/ProTable';

// const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
// const PAGE_WIDTH_MM = 210; // A4页面宽度（毫米）
// const MM_TO_PIXEL_RATIO = 3.78; // mm到像素的转换比例
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const capturePage = async () => {
//     setLoading(true);
//     const content = contentRef.current;
//     if (!content) {
//       console.error('Content element is null or undefined');
//       return;
//     }

//     const contentHeight = content.scrollHeight;
//     const numPages = Math.ceil(
//       contentHeight / (PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO),
//     );

//     const pageDataUrls: string[] = [];
//     for (let i = 0; i < numPages; i++) {
//       const canvas = await html2canvas(content, {
//         scale: 2, // 提高分辨率以改善图像质量
//         windowWidth: content.offsetWidth,
//         windowHeight: PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
//         x: 0,
//         y: -i * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
//         useCORS: true, // 添加这个选项以处理跨域图片
//         allowTaint: true, // 允许加载跨域图片和 CSS
//         logging: false, // 禁用日志，以提高性能
//         scrollX: 0, // 水平滚动位置
//         scrollY: -i * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO, // 垂直滚动位置
//         removeContainer: true, // 移除生成的 canvas 容器
//         backgroundColor: '#fff', // 设置背景颜色以解决空白问题
//       });
//       console.log('a', canvas.toDataURL());
//       // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
//     }

//     // Do whatever you want with the pageDataUrls here
//     console.log(pageDataUrls);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={capturePage}>
//         Export as Image
//       </Button>
//       <div style={{ height: `${PAGE_HEIGHT_MM}mm`, overflow: 'hidden' }}>
//         <div ref={contentRef} style={{ height: 'auto' }}>
//           <ProTable />
//           <ProTable />
//           <ProTable />

//           <ProTable />
//           <ProTable />
//           <ProTable />

//           <ProTable />
//           <ProTable />
//           <ProTable />

//           <ProTable />
//           <ProTable />
//           <ProTable />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { Button } from 'antd';
// import html2canvas from 'html2canvas';
// import { useRef, useState } from 'react';
// import ProTable from './components/ProTable';

// const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
// const PAGE_WIDTH_MM = 210; // A4页面宽度（毫米）
// const MM_TO_PIXEL_RATIO = 3.78; // mm到像素的转换比例
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const capturePage = async () => {
//     setLoading(true);
//     const content = contentRef.current;
//     if (!content) {
//       console.error('Content element is null or undefined');
//       return;
//     }

//     const contentHeight = content.scrollHeight;
//     const numPages = Math.ceil(
//       contentHeight / (PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO),
//     );
//     console.log('numPages', numPages);
//     const pageDataUrls: string[] = [];
//     for (let i = 0; i < numPages; i++) {
//       const startY = i * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO;
//       const endY = startY + PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO;
//       const canvas = await html2canvas(content, {
//         scale: 2, // 提高分辨率以改善图像质量
//         windowWidth: content.offsetWidth,
//         windowHeight: PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
//         x: 0,
//         y: -startY,
//         useCORS: true, // 添加这个选项以处理跨域图片
//         allowTaint: true, // 允许加载跨域图片和 CSS
//         logging: false, // 禁用日志，以提高性能
//         scrollX: 0, // 水平滚动位置
//         scrollY: startY, // 垂直滚动位置
//         removeContainer: true, // 移除生成的 canvas 容器
//         backgroundColor: '#fff', // 设置背景颜色以解决空白问题
//         height: endY - startY, // 限制截取的高度
//       });
//       console.log('canvas', canvas.toDataURL());
//       // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
//     }

//     // Do whatever you want with the pageDataUrls here
//     console.log(pageDataUrls);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={capturePage}>
//         Export as Image
//       </Button>
//       <div ref={contentRef}>
//         <div>111</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <div>222</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <div>333</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />
//         <div>444</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />
//       </div>
//     </div>
//   );
// };

// export default Home;
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import ProTable from './components/ProTable';

// const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
// const PAGE_WIDTH_MM = 210; // A4页面宽度（毫米）
// const MM_TO_PIXEL_RATIO = 3.78; // mm到像素的转换比例
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const capturePage = async () => {
//     setLoading(true);
//     const content = contentRef.current;
//     if (!content) {
//       console.error('Content element is null or undefined');
//       return;
//     }

//     const contentHeight = content.scrollHeight;
//     const numPages = Math.ceil(
//       contentHeight / (PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO),
//     );

//     const pageDataUrls: string[] = [];
//     for (let i = 0; i < numPages; i++) {
//       const startY = i * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO;
//       const endY = (i + 1) * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO;
//       const canvas = await html2canvas(content, {
//         scale: 2, // 提高分辨率以改善图像质量
//         windowWidth: content.offsetWidth,
//         windowHeight: PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
//         x: 0,
//         y: -startY,
//         useCORS: true, // 添加这个选项以处理跨域图片
//         allowTaint: true, // 允许加载跨域图片和 CSS
//         logging: false, // 禁用日志，以提高性能
//         scrollX: 0, // 水平滚动位置
//         scrollY: startY, // 垂直滚动位置
//         removeContainer: true, // 移除生成的 canvas 容器
//         backgroundColor: '#fff', // 设置背景颜色以解决空白问题
//         height: Math.min(
//           contentHeight - startY,
//           PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
//         ), // 限制截取的高度
//       });
//       console.log('aa', canvas.toDataURL());
//       // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
//     }

//     // Do whatever you want with the pageDataUrls here
//     console.log(pageDataUrls);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={capturePage}>
//         Export as Image
//       </Button>
//       <div ref={contentRef}>
//         <div>1</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />

//         <ProTable />
//         <div>2</div>
//         <ProTable />
//         <ProTable />

//         <ProTable />
//         <ProTable />
//         <div>3</div>
//         <ProTable />

//         <ProTable />
//         <ProTable />
//         <ProTable />
//       </div>
//     </div>
//   );
// };

// export default Home;

// const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
// const PAGE_WIDTH_MM = 210; // A4页面宽度（毫米）
// const MM_TO_PIXEL_RATIO = 3.78; // mm到像素的转换比例
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

// const Home: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const capturePage = async () => {
//     setLoading(true);
//     const content = contentRef.current;
//     if (!content) {
//       console.error('Content element is null or undefined');
//       return;
//     }

//     const contentHeight = content.scrollHeight;
//     const numPages = Math.ceil(
//       contentHeight / (PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO),
//     );

//     const pageDataUrls: string[] = [];
//     for (let i = 0; i < numPages; i++) {
//       const startY = i * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO;
//       const canvas = await html2canvas(content, {
//         scale: 2, // 提高分辨率以改善图像质量
//         windowHeight: PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
//         x: 0,
//         y: startY,
//         useCORS: true, // 添加这个选项以处理跨域图片
//         allowTaint: true, // 允许加载跨域图片和 CSS
//         logging: false, // 禁用日志，以提高性能
//         scrollX: 0, // 水平滚动位置
//         scrollY: startY, // 垂直滚动位置
//         backgroundColor: '#fff', // 设置背景颜色以解决空白问题
//       });
//       console.log('a', canvas.toDataURL());
//       // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
//     }

//     // Do whatever you want with the pageDataUrls here
//     console.log(pageDataUrls);

//     setLoading(false);
//   };

//   return (
//     <div>
//       <Button loading={loading} onClick={capturePage}>
//         Export as Image
//       </Button>
//       <div ref={contentRef}>
//         <div>1</div>
//         <ProTable />
//         <ProTable />
//         <ProTable />

//         <ProTable />
//         <div>2</div>
//         <ProTable />
//         <ProTable />

//         <ProTable />
//         <ProTable />
//         <div>3</div>
//         <ProTable />

//         <ProTable />
//         <ProTable />
//         <ProTable />
//       </div>
//     </div>
//   );
// };

// export default Home;

const PAGE_HEIGHT_MM = 297; // A4页面高度（毫米）
const MM_TO_PIXEL_RATIO = 3.78; // mm到像素的转换比例

const Home: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const capturePage = async () => {
    setLoading(true);
    const content = contentRef.current;
    if (!content) {
      console.error('Content element is null or undefined');
      return;
    }

    const contentHeight = content.scrollHeight;
    const numPages = Math.ceil(
      contentHeight / (PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO),
    );

    const pageDataUrls: string[] = [];
    for (let i = 0; i < numPages; i++) {
      const startY = i * PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO;
      const canvas = await html2canvas(content, {
        scale: 2, // 提高分辨率以改善图像质量
        windowWidth: content.offsetWidth,
        windowHeight: PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO,
        x: 0,
        y: startY,
        useCORS: true, // 添加这个选项以处理跨域图片
        allowTaint: true, // 允许加载跨域图片和 CSS
        logging: false, // 禁用日志，以提高性能
        scrollX: 0, // 水平滚动位置
        scrollY: startY, // 垂直滚动位置
        removeContainer: true, // 移除生成的 canvas 容器
        backgroundColor: '#fff', // 设置背景颜色以解决空白问题
        height: PAGE_HEIGHT_MM * MM_TO_PIXEL_RATIO, // 设置截取的高度为 A4 纸的高度
      });
      console.log('a', canvas.toDataURL());
      // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
    }

    // Do whatever you want with the pageDataUrls here
    console.log(pageDataUrls);

    setLoading(false);
  };

  return (
    <div>
      <Button loading={loading} onClick={capturePage}>
        Export as Image
      </Button>
      <div ref={contentRef}>
        <div>1</div>
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          width={100}
          height={100}
        />
        <ProTable />
        <ProTable />
        <ProTable />

        <ProTable />
        <div>2</div>
        <ProTable />
        <ProTable />

        <ProTable />
        <ProTable />
        <div>3</div>
        <ProTable />

        <ProTable />
        <ProTable />
        <ProTable />
      </div>
    </div>
  );
};

export default Home;
