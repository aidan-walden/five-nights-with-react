import { useEffect, useRef } from "react";
import { useScene, SceneId } from "../App";

function Warning() {
    const { changeScene } = useScene();
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;

        const handleAnimationEnd = () => {
            console.log("animation over");
            changeScene(SceneId.MainMenu);
        };

        element?.addEventListener('animationend', handleAnimationEnd);

        return () => {
            element?.removeEventListener('animationend', handleAnimationEnd);
        }
    })

    return (
        <div className="full-background">
            <div className="jumpscare-warning" ref={elementRef}>
                <p>WARNING!</p>
                <br />
                <p>This game contains flashing lights, loud noises, and lots of jumpscares!</p>
            </div>
        </div>
    );
}

export default Warning