import { useEffect, useState } from "react";

function MainMenu() {

    const [backgroundImage, setBackgroundImage] = useState("https://i.imgur.com/1234567890.jpg");

    useEffect(() => {
        const backgroundImages = [
            "/fnaf_assets/mainmenu/bg/0.png",
            "/fnaf_assets/mainmenu/bg/1.png",
            "/fnaf_assets/mainmenu/bg/2.png",
            "/fnaf_assets/mainmenu/bg/3.png",
        ];
        
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        setBackgroundImage(backgroundImages[randomIndex]);
    }, []);

    return (
        <div className="full-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="main-menu-container">
                <div className="main-menu-title">
                    <h1>Five</h1>
                    <h1>Nights</h1>
                    <h1>at</h1>
                    <h1>Freddy's</h1>
                </div>
                <div className="main-menu-buttons">
                    <button>Play</button>
                    <button>Options</button>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;