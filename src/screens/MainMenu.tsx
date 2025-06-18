import { useEffect, useState } from "react";

function MainMenu() {

    const [backgroundImage, setBackgroundImage] = useState("/fnaf_assets/mainmenu/bg/0.png");

    useEffect(() => {
        const BASE_IMAGE = "/fnaf_assets/mainmenu/bg/0.png";
        const backgroundImages = [
            "/fnaf_assets/mainmenu/bg/1.png",
            "/fnaf_assets/mainmenu/bg/2.png",
            "/fnaf_assets/mainmenu/bg/3.png",
        ];
        
        setBackgroundImage(BASE_IMAGE);

        function changeBackground() {
            const randomIndex = Math.floor(Math.random() * backgroundImages.length);
            setTimeout(() => {
                setBackgroundImage(backgroundImages[randomIndex]);
    
    
                // 1000 * (2/15) because FNaF displays the alternate image for 4 frames out of 30fps
                setTimeout(() => {
                    setBackgroundImage(BASE_IMAGE);
                }, 1000 * (2/15));

                changeBackground();
            }, 8000);
        }

        changeBackground();
    }, []);

    const newGame = () => {
        const buttonsDiv = document.querySelector(".main-menu-buttons");
        const buttons = buttonsDiv?.querySelectorAll("button");
        buttons?.forEach((button: HTMLButtonElement) => {
            button.disabled = true;
        });

        const menu = document.querySelector(".full-background");
        menu?.classList.add("fade-out");

        const newspaper = document.querySelector(".newspaper-ad");
        newspaper?.classList.add("fade-in");
        (newspaper as HTMLElement).style.visibility = "visible";
    }

    return (
        <>
            <div className="full-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <video className="main-menu-video" src="/fnaf_assets/mainmenu/bg/static.webm" autoPlay loop muted controls={false}/>
                <audio src="/fnaf_assets/mainmenu/music/music.wav" autoPlay loop controls={false}/>
                <div className="main-menu-container">
                    <div className="main-menu-text">
                        <p>Five</p>
                        <p>Nights</p>
                        <p>at</p>
                        <p>Freddy's</p>
                    </div>
                    <div className="main-menu-buttons">
                        <button onClick={newGame}>New Game</button>
                        <button>Continue</button>
                    </div>
                </div>
                <div className="main-menu-text footer">
                    <p>© 2014 Scott Cawthon</p>
                    <p>Website by Aidan Walden</p>
                </div>
            </div>
            <div className="full-background newspaper-ad" style={{ backgroundImage: "url(/fnaf_assets/mainmenu/bg/newspaper.png)" }}>
            </div>
        </>
    )
}

export default MainMenu;