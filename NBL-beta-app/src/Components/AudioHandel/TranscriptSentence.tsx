// TP.tsx
import React, { useRef, useEffect } from 'react';

interface TPProps {
    time: number;
    children: React.ReactNode;
}

const TP: React.FC<TPProps> = ({ time, children }) => {
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
        <span className="test transcript-sentence" data-start={time} onClick={handleClick}>
            {children}
        </span>
    );
};

export default TP;
