import React, { useRef, useState, useEffect } from 'react';
import './Test.scss';

interface AudioPlayerProps {
    src: string;
    children: React.ReactNode;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, children }) => {
    const audioPlayerRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState(0);
    console.log(buffered)

    useEffect(() => {
        const audioPlayer = audioPlayerRef.current;

        if (!audioPlayer) return;

        const updateProgress = () => {
            setCurrentTime(audioPlayer.currentTime);
            const percent = (audioPlayer.currentTime / duration) * 100;
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) progressBar.style.width = `${percent}%`;

            const transcriptElements = document.querySelectorAll<HTMLSpanElement>('.transcript .test');
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

    return (
        <div>
            <audio id="audio-source" ref={audioPlayerRef} controls hidden>
                <source src={src} />
                您的浏览器不支持 audio 元素。
            </audio>

            <div className="audio-player">
                <button className="control-button" onClick={playPauseHandler}>{isPlaying ? 'Pause' : 'Play'}</button>

                <div id="current-time">{formatTime(currentTime)}</div> / <div id="remaining-time">{formatTime(duration - currentTime)}</div>

                <div className="progress-container" id="progress-container" onClick={progressClickHandler}>
                    <div className="buffered-bar" id="buffered-bar"></div>
                    <div className="progress-bar" id="progress-bar"></div>
                </div>
            </div>

            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default AudioPlayer;
