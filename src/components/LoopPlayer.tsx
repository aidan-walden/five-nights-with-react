import { useEffect, useRef } from "react";

function LoopPlayer({ src }: { src: string }) {
    const isPlayingRef = useRef(false);
    const audioRef = useRef<AudioContext | null>(null);
    const sourceRef = useRef<AudioBufferSourceNode | null>(null);

    useEffect(() => {
        audioRef.current = new window.AudioContext({ latencyHint: "playback"});

        return () => {
            sourceRef.current?.stop();
            audioRef.current?.close();
        }
    }, []);

    async function prepareAudio() {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        return await audioRef.current?.decodeAudioData(arrayBuffer);
    }

    async function playAudio() {
        if (isPlayingRef.current) return;
        isPlayingRef.current = true;
        if (!audioRef.current) return;

        if (audioRef.current.state === "suspended") {
            await audioRef.current.resume();
        }

        sourceRef.current?.stop();
        
        const buffer = await prepareAudio();
        if (!buffer) return;
        
        sourceRef.current = audioRef.current.createBufferSource();
        sourceRef.current.buffer = buffer;

        sourceRef.current.loop = true;
        sourceRef.current.loopStart = 0;
        sourceRef.current.loopEnd = buffer.duration;
        sourceRef.current.connect(audioRef.current.destination);
        sourceRef.current.start();
        console.log(audioRef.current.sampleRate);
    }

    function stopAudio() {
        sourceRef.current?.stop();
        sourceRef.current = null;
    }

    return { playAudio, stopAudio };
}

export default LoopPlayer;