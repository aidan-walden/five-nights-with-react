import { useEffect, useRef } from "react";
import { useScene, SceneId } from "../App";

function formatTime(time: number) {
    if (time === 1) {
        return "1st";
    } 
    if (time === 2) {
        return "2nd";
    }
    if (time === 3) {
        return "3rd";
    }
    return `${time}th`;
}

function NightSplash({ night }: { night: number }) {
    const { changeScene } = useScene();
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;

        const handleAnimationEnd = () => {
            console.log("night splash over");
            changeScene(SceneId.Game, { night });
        };

        element?.addEventListener('animationend', handleAnimationEnd);

        return () => {
            element?.removeEventListener('animationend', handleAnimationEnd);
        }
    })

    return (
        <div className="full-background">
            <audio src="/fnaf_assets/mainmenu/sound/blip3.wav" autoPlay controls={false}/>
            <video className="overlay-video" src="/fnaf_assets/generic/blip.webm" autoPlay muted controls={false}/>
            <div className="night-splash fade-out" ref={elementRef}>
                <p>12:00 AM</p>
                <br />
                <p>{formatTime(night)} Night</p>
            </div>
        </div>
    );
}

export default NightSplash