// import Warning from "./screens/Warning"
import MainMenu from "./screens/MainMenu"
import './App.scss'
import { useState, createContext, useContext } from "react"
import Warning from "./screens/Warning"
import NightSplash from "./screens/NightSplash";
import Game from "./screens/Game";

export enum SceneId {
  WarningScreen,
  MainMenu,
  NightSplash,
  Game
}

interface SceneContextType {
  currentScene: SceneId;
  sceneData: Record<string, unknown> | null;
  changeScene: (scene: SceneId, data?: Record<string, unknown>) => void;
}

// context is like a global variable in react
const SceneContext = createContext<SceneContextType | null>(null);

export const useScene = () => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
};

function App() {
  const [scene, setScene] = useState(SceneId.WarningScreen);
  const [sceneData, setSceneData] = useState<Record<string, unknown> | null>(null);

  const changeScene = (newScene: SceneId, data?: Record<string, unknown>) => {
    setScene(newScene);
    setSceneData(data || null);
  };

  const sceneContextValue: SceneContextType = {
    currentScene: scene,
    sceneData,
    changeScene
  };

  let element = null;

  if (scene === SceneId.WarningScreen) {
    element = <Warning />
  } else if (scene === SceneId.MainMenu) {
    element = <MainMenu />
  } else if (scene === SceneId.NightSplash) {
    element = <NightSplash night={1} />
  } else if (scene === SceneId.Game) {
    element = <Game night={sceneData?.night as number} />
  }

  return (
    <SceneContext.Provider value={sceneContextValue}>
      {element}
    </SceneContext.Provider>
  )
}

export default App;