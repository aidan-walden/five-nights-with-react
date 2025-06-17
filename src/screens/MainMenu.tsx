import { useEffect, useState } from "react";

function MainMenu() {

    const [backgroundImage, setBackgroundImage] = useState("https://i.imgur.com/1234567890.jpg");

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

    return (
        <div className="full-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <video className="main-menu-video" src="/fnaf_assets/mainmenu/bg/static.webm" autoPlay loop muted controls={false}/>
            <div className="main-menu-container">
                <div className="main-menu-text">
                    <p>Five</p>
                    <p>Nights</p>
                    <p>at</p>
                    <p>Freddy's</p>
                </div>
                <div className="main-menu-buttons">
                    <button>New Game</button>
                    <button>Continue</button>
                </div>
            </div>
            <div className="main-menu-text footer">
                <p>© 2014 Scott Cawthon</p>
                <p>Website by Aidan Walden</p>
            </div>
        </div>
    )
}

export default MainMenu;