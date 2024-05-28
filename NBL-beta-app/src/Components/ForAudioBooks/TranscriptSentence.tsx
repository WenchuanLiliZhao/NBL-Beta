// TP.tsx
import React, { useRef, useEffect } from 'react';
import "./TranscriptSentence.scss"

interface TPProps {
    time: number;
    children: React.ReactNode;
}

const TS: React.FC<TPProps> = ({ time, children }) => {
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioPlayerRef.current = document.getElementById('audio-source') as HTMLAudioElement;
    }, []);

    const handleClick = () => {
        const audioPlayer = audioPlayerRef.current;
        if (!audioPlayer) return;

        audioPlayer.currentTime = time;
        audioPlayer.play();
    };

    return (
        <span className="transcript-sentence tracking" data-start={time} onClick={handleClick}>
            {children}
        </span>
    );
};

export default TS;
