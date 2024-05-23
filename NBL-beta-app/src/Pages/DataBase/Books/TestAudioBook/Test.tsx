import React, { useRef, useState, useEffect } from 'react';
import './Test.scss';

const AudioPlayer: React.FC = () => {
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

    const transcriptClickHandler = (startTime: number) => {
        const audioPlayer = audioPlayerRef.current;
        if (!audioPlayer) return;

        audioPlayer.currentTime = startTime;
        audioPlayer.play();
        setIsPlaying(true);
    };

    return (
        <div>
            <audio id="audio-source" ref={audioPlayerRef} controls hidden>
                <source src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Marin_Marais_%281656-1728%29_%E2%80%93_Sonnerie_de_Sainte-Genevi%C3%A8ve_du_Mont_de_Paris_The_Bells_of_St._Genevieve_from_La_Gamme_et_Autres_Morceaux_de_Symphonie_%281723%29.ogg" />
                您的浏览器不支持 audio 元素。
            </audio>

            <div className="audio-player">
                <button className="control-button" onClick={playPauseHandler}>{isPlaying ? 'Pause' : 'Play'}</button>
                
                <div id="current-time">{formatTime(currentTime)}</div> / <div id="remaining-time">{formatTime(duration - currentTime)}</div>
                
                <div className="progress-container" id="progress-container" onClick={progressClickHandler}>
                    <div className="buffered-bar" id="buffered-bar" style={{ width: `${buffered}%` }}></div>
                    <div className="progress-bar" id="progress-bar"></div>
                </div>
            </div>
            
            <div className="container">
                <div className="transcript">
                    <h1>有声书代码测试</h1>

                    <p>
                        <span className="test" data-start="1" onClick={() => transcriptClickHandler(1)}>欢迎来到知书阅听图书馆有声书。</span>
                        <span className="test" data-start="5" onClick={() => transcriptClickHandler(5)}>今天我们要讨论一个非常有趣的话题。</span>
                        <span className="test" data-start="10" onClick={() => transcriptClickHandler(10)}>音频同步台词展示的功能非常有用。</span>
                        <span className="test" data-start="15" onClick={() => transcriptClickHandler(15)}>让我们来一起了解它的实现方式。</span>
                        <span className="test" data-start="20" onClick={() => transcriptClickHandler(20)}>谢谢大家的聆听。</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
