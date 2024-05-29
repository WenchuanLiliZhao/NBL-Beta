// 引入React和React的钩子函数
import React, { useRef, useState, useEffect } from 'react';

// 引入样式文件
import "./AudioPlayer4Book.scss";

// 从react-router-dom中引入useLocation，用于获取当前路径
import { useLocation } from 'react-router-dom';

// 引入自定义的TsTracking函数
import TsTracking from './Functions/TsTracking';

// 引入自定义的ToggleTsTracking组件
import ToggleTsTracking from './Functions/ToggleTsTracking';

// 定义组件的Props接口，确保src属性是字符串
interface AudioPlayerProps {
  src: string;
}

// 定义AudioPlayer4Book组件
const AudioPlayer4Book: React.FC<AudioPlayerProps> = ({ src }) => {
  // 创建引用，用于获取audio元素
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  // 定义组件的状态
  const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放
  const [currentTime, setCurrentTime] = useState(0); // 当前播放时间
  const [duration, setDuration] = useState(0); // 音频总时长
  const [buffered, setBuffered] = useState(0); // 缓冲的百分比
  const [isDragging, setIsDragging] = useState(false); // 是否正在拖动进度条

  // useEffect用于设置音频事件监听器
  useEffect(() => {
    const audioPlayer = audioPlayerRef.current; // 获取audio元素

    if (!audioPlayer) return; // 如果audio元素不存在，直接返回

    // 更新播放进度
    const updateProgress = () => {
      setCurrentTime(audioPlayer.currentTime); // 更新当前播放时间
      const percent = (audioPlayer.currentTime / duration) * 100; // 计算进度百分比
      const progressBar = document.getElementById('progress-bar'); // 获取进度条元素
      if (progressBar) progressBar.style.width = `${percent}%`; // 更新进度条宽度

      // 更新字幕句子的高亮状态
      const transcriptElements = document.querySelectorAll<HTMLSpanElement>('.transcript-sentence');
      transcriptElements.forEach(para => {
        const startTime = parseFloat(para.getAttribute('data-start')!);
        if (audioPlayer.currentTime >= startTime) {
          transcriptElements.forEach(span => span.classList.remove('active'));
          para.classList.add('active');
        }
      });
    };

    // 更新缓冲进度
    const updateBuffered = () => {
      if (audioPlayer.buffered.length > 0) {
        const bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
        const percent = (bufferedEnd / duration) * 100;
        setBuffered(percent);
      }
    };

    // 设置音频元数据
    const setAudioData = () => {
      setDuration(audioPlayer.duration); // 设置总时长
    };

    // 处理音频播放结束事件
    const handleAudioEnded = () => {
      setIsPlaying(false); // 设置播放状态为否
    };

    // 添加事件监听器
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('progress', updateBuffered);
    audioPlayer.addEventListener('loadedmetadata', setAudioData);
    audioPlayer.addEventListener('ended', handleAudioEnded);

    // 清理事件监听器
    return () => {
      audioPlayer.removeEventListener('timeupdate', updateProgress);
      audioPlayer.removeEventListener('progress', updateBuffered);
      audioPlayer.removeEventListener('loadedmetadata', setAudioData);
      audioPlayer.removeEventListener('ended', handleAudioEnded);
    };
  }, [duration]); // 依赖duration

  // useEffect用于更新缓冲条宽度
  useEffect(() => {
    const bufferedBar = document.getElementById('buffered-bar'); // 获取缓冲条元素
    if (bufferedBar) {
      bufferedBar.style.width = `${buffered}%`; // 更新缓冲条宽度
    }
  }, [buffered]); // 依赖buffered

  // 格式化时间，用于显示时间
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return [minutes, seconds].map(val => String(val).padStart(2, '0')).join(':');
  };

  // 播放/暂停按钮点击事件处理器
  const playPauseHandler = () => {
    const audioPlayer = audioPlayerRef.current; // 获取audio元素
    if (!audioPlayer) return;

    // 切换播放/暂停状态
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  // 进度条点击事件处理器
  const progressClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const audioPlayer = audioPlayerRef.current; // 获取audio元素
    if (!audioPlayer) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;

    // 根据点击位置更新播放时间
    audioPlayer.currentTime = (offsetX / width) * duration;
  };

  // 进度条拖动开始事件处理器
  const dragStartHandler = () => {
    setIsDragging(true); // 设置拖动状态为是
  };

  // 进度条拖动进行中事件处理器
  const draggingHandler = (clientX: number) => {
    if (isDragging) {
      const audioPlayer = audioPlayerRef.current; // 获取audio元素
      if (!audioPlayer) return;

      const rect = document.getElementById('progress-container')!.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const width = rect.width;

      // 根据拖动位置更新播放时间
      const newTime = Math.max(0, Math.min((offsetX / width) * duration, duration));
      const percent = (newTime / duration) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) progressBar.style.width = `${percent}%`;

      setCurrentTime(newTime); // 更新当前播放时间
    }
  };

  // 进度条拖动结束事件处理器
  const dragEndHandler = (clientX: number) => {
    if (isDragging) {
      const audioPlayer = audioPlayerRef.current; // 获取audio元素
      if (!audioPlayer) return;

      const rect = document.getElementById('progress-container')!.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const width = rect.width;

      // 根据拖动位置更新播放时间
      audioPlayer.currentTime = Math.max(0, Math.min((offsetX / width) * duration, duration));
      setIsDragging(false); // 设置拖动状态为否

      // 如果之前是播放状态，则继续播放
      if (isPlaying) {
        audioPlayer.play();
      }
    }
  };

  // useEffect用于添加和移除拖动事件监听器
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => draggingHandler(e.clientX); // 鼠标移动事件处理器
    const handleMouseUp = (e: MouseEvent) => dragEndHandler(e.clientX); // 鼠标松开事件处理器

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        draggingHandler(e.touches[0].clientX); // 触摸移动事件处理器
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        dragEndHandler(e.changedTouches[0].clientX); // 触摸结束事件处理器
      }
    };

    // 添加事件监听器
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    // 清理事件监听器
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, isPlaying, duration]); // 依赖isDragging, isPlaying, duration

  // 获取当前路径
  const location = useLocation();

  // useEffect用于在路径改变时重新加载音频
  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.load(); // 重新加载音频
      setIsPlaying(false); // 重置播放状态
    }
  }, [location]); // 依赖location

  // 调用TsTracking函数，用于自定义的追踪功能
  TsTracking();

  return (
    <div className='audio-player-4-book'>
      <audio id="audio-source" ref={audioPlayerRef} controls hidden>
        <source src={src} />
        您的浏览器不支持 audio 元素。
      </audio>

      <div className="audio-player">
        
        {isPlaying ? (
          <div className="control-btn active" onClick={playPauseHandler}>
            <span className='material-symbols-outlined icon'>pause</span>
            <span className='hover-layer'></span>
          </div>
        ) : (
          <div className="control-btn" onClick={playPauseHandler}>
            <span className='material-symbols-outlined icon'>play_arrow</span>
            <span className='hover-layer'></span>
          </div>
        )}

        <div className="progress-group-container">
          <div id="current-time" className="time-number">{formatTime(currentTime)}</div>

          <div className="progress-container" id="progress-container" onClick={progressClickHandler}>
            {/* <div className="progress-container-bg"></div> */}

            <div className="buffered-bar" id="buffered-bar"></div>
            <div className="progress-bar" id="progress-bar">
              <div className="drag-btn" onMouseDown={dragStartHandler} onTouchStart={dragStartHandler}>
                <div className="ovel"><div className="spot"></div></div>
              </div>
            </div>
          </div>

          <div id="remaining-time" className="time-number">{formatTime(duration - currentTime)}</div>
        </div>

        {/* pin btn */}
        <ToggleTsTracking />
      </div>
    </div>
  );
};

export default AudioPlayer4Book;
