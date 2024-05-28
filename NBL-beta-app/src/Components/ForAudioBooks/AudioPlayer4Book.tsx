import React, { useRef, useState, useEffect } from 'react';
import "./AudioPlayer4Book.scss"
import { useLocation } from 'react-router-dom';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer4Book: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);

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

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('progress', updateBuffered);
    audioPlayer.addEventListener('loadedmetadata', setAudioData);

    return () => {
      audioPlayer.removeEventListener('timeupdate', updateProgress);
      audioPlayer.removeEventListener('progress', updateBuffered);
      audioPlayer.removeEventListener('loadedmetadata', setAudioData);
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
    const progressContainer = document.getElementById('progress-container');
    if (!progressContainer) return;

    const rect = progressContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = progressContainer.offsetWidth;
    if (!audioPlayerRef.current) return;

    audioPlayerRef.current.currentTime = (offsetX / width) * duration;
  };

  // 下面这组代码非常重要，它可以保证通过 navlink 进行页面切换时可以获取新的 audio source；否则，将无法正常获取心的 audio source。
  const location = useLocation(); // 获取当前路径

  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.load(); // 重新加载音频
    }
  }, [location]);

  return (
    <>
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
                    <div className="buffered-bar" id="buffered-bar"></div>
                    <div className="progress-bar" id="progress-bar">
                        <div className="drag-btn"></div>
                    </div>
                </div>

                <div id="remaining-time" className="time-number">   {formatTime(duration - currentTime)}</div>
            </div>

            <div className="control-btn">
                <span className='material-symbols-outlined icon'>pause</span>
                <span className='hover-layer'></span>
            </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer4Book;
