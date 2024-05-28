import React, { useRef, useState, useEffect } from 'react';
import "./AudioPlayer4Book.scss"
import { useLocation } from 'react-router-dom';
import TsTracking from './Functions/TsTracking';
import ToggleTsTracking from './Functions/ToggleTsTracking';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer4Book: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;

    if (!audioPlayer) return;

    const updateProgress = () => {
      setCurrentTime(audioPlayer.currentTime);
      const percent = (audioPlayer.currentTime / duration) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) progressBar.style.width = `${percent}%`;

      const transcriptElements = document.querySelectorAll<HTMLSpanElement>('.transcript-sentence');
      transcriptElements.forEach(para => {
        const startTime = parseFloat(para.getAttribute('data-start')!);
        if (audioPlayer.currentTime >= startTime) {
          transcriptElements.forEach(span => span.classList.remove('active'));
          para.classList.add('active');
        }
      });
    };

    const updateBuffered = () => {
      if (audioPlayer.buffered.length > 0) {
        const bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
        const percent = (bufferedEnd / duration) * 100;
        setBuffered(percent);
      }
    };

    const setAudioData = () => {
      setDuration(audioPlayer.duration);
    };

    const handleAudioEnded = () => {
      setIsPlaying(false);
    };

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('progress', updateBuffered);
    audioPlayer.addEventListener('loadedmetadata', setAudioData);
    audioPlayer.addEventListener('ended', handleAudioEnded);

    return () => {
      audioPlayer.removeEventListener('timeupdate', updateProgress);
      audioPlayer.removeEventListener('progress', updateBuffered);
      audioPlayer.removeEventListener('loadedmetadata', setAudioData);
      audioPlayer.removeEventListener('ended', handleAudioEnded);
    };
  }, [duration]);

  useEffect(() => {
    const bufferedBar = document.getElementById('buffered-bar');
    if (bufferedBar) {
      bufferedBar.style.width = `${buffered}%`;
    }
  }, [buffered]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return [minutes, seconds].map(val => String(val).padStart(2, '0')).join(':');
  };

  const playPauseHandler = () => {
    const audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) return;

    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  const progressClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressContainer = progressContainerRef.current;
    if (!progressContainer || !audioPlayerRef.current) return;

    const rect = progressContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = progressContainer.offsetWidth;
    audioPlayerRef.current.currentTime = (offsetX / width) * duration;
  };

  const dragStartHandler = () => {
    setIsDragging(true);
  };

  const draggingHandler = (clientX: number) => {
    if (isDragging) {
      const progressContainer = progressContainerRef.current;
      if (!progressContainer || !audioPlayerRef.current) return;

      const rect = progressContainer.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const width = progressContainer.offsetWidth;
      const newTime = Math.max(0, Math.min((offsetX / width) * duration, duration));

      const percent = (newTime / duration) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) progressBar.style.width = `${percent}%`;

      setCurrentTime(newTime);
    }
  };

  const dragEndHandler = (clientX: number) => {
    if (isDragging) {
      const audioPlayer = audioPlayerRef.current;
      const progressContainer = progressContainerRef.current;
      if (!progressContainer || !audioPlayer) return;

      const rect = progressContainer.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const width = progressContainer.offsetWidth;
      audioPlayer.currentTime = Math.max(0, Math.min((offsetX / width) * duration, duration));
      setIsDragging(false);

      if (isPlaying) {
        audioPlayer.play();
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => draggingHandler(e.clientX);
    const handleMouseUp = (e: MouseEvent) => dragEndHandler(e.clientX);

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        draggingHandler(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        dragEndHandler(e.changedTouches[0].clientX);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, isPlaying, duration]);

  const location = useLocation();

  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.load();
      setIsPlaying(false);  // Reset isPlaying state when location changes
    }
  }, [location]);

  TsTracking()

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

          <div className="progress-container" id="progress-container" ref={progressContainerRef} onClick={progressClickHandler}>
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
