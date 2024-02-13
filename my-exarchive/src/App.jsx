import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Home from "./components/Home";
import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import PlayerObj from "./utils/PlayerObj";

function App() {
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <ambientLight intensity={3} />

      <Physics>
        <PlayerObj controls position={[5, 12, 40]} args={[0.5]} color="yellow" />
        <Home />
      </Physics>

      <PointerLockControls />
    </Canvas>
  );
}
export default App;
