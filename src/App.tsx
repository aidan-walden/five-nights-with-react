// import Warning from "./screens/Warning"
import MainMenu from "./screens/MainMenu"
import './App.scss'
import { useState, createContext } from "react"
import Warning from "./screens/Warning"

export enum SceneId {
  WarningScreen,
  MainMenu 
}

const screenCotext = createContext<SceneId>(SceneId.WarningScreen);

function App() {
  const [scene, setScene] = useState(SceneId.WarningScreen);

  let element = null;

  if (scene === SceneId.WarningScreen) {
    element = ( 
      <Warning changeScene={setScene} />
    )
  } else if (scene === SceneId.MainMenu) {
    element = (
      <MainMenu />
    )
  }

  return (
    <screenCotext.Provider value={scene}>
      {element}
    </screenCotext.Provider>
  )
}

export default App;