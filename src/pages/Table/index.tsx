import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import ProTable from './components/ProTable';

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
      console.log('img', canvas.toDataURL());
      // pageDataUrls.push(canvas.toDataURL('image/jpeg'));
    }

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
        {/* <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          width={100}
          height={100}
        /> */}
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
