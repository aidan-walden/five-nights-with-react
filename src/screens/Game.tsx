import { useEffect } from "react";
import LoopPlayer from "../components/LoopPlayer";

interface GameProps {
    night?: number;
}

function Game({ night }: GameProps) {
    const { playAudio } = LoopPlayer({ src: "/fnaf_assets/active/sound/fan.wav" });

    useEffect(() => {
        playAudio();
    }, [playAudio]);

    return (
        <>
            <div className="full-background" style={{ backgroundImage: `url(/fnaf_assets/active/bg/office.png)` }}>
                <audio src={`/fnaf_assets/active/sound/phonecall${night}.wav`} autoPlay loop controls={false}/>
            </div>
        </>
    )
}

export default Game;