import { useEffect, useState } from 'react';

export default function TsTracking() {
  const [lastHeight, setLastHeight] = useState<number | null>(null);

  // 一个函数用于获取当前激活元素的高度
  const updateIfPositionChanged = () => {
    const activeElement = document.querySelector('.transcript-sentence.tracking.active');

    if (activeElement) {
      const currentHeight = activeElement.getBoundingClientRect().top + window.scrollY;

      // 仅当位置发生变化时更新状态并进行记录
      if (currentHeight !== lastHeight) {
        console.log(currentHeight);
        setLastHeight(currentHeight);

        // 检查输入的参数是否有效
        if (typeof currentHeight !== 'number' || currentHeight < 0) {
            console.error('Invalid position. It should be a non-negative number.');
            return;
        }

        const position = currentHeight - 240;

        // 滚动到指定位置
        window.scrollTo(0, position);
      }
    }
  }

  useEffect(() => {
    // 设置定时器，每 0.01 秒调用一次 updateIfPositionChanged
    const intervalId = setInterval(updateIfPositionChanged, 10);

    // 组件卸载时清理定时器
    return () => clearInterval(intervalId);
  }, [lastHeight]); // 依赖数组包括 lastHeight，确保使用的是最新的状态
}