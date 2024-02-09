import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Home from "./components/Home";
import { PointerLockControls } from "@react-three/drei";
import { MovementControls } from "./utils/MovementControls";

function App() {
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{ position: [5, 8, 40] }}
    >
      {/* <OrbitControls /> */}
      <ambientLight intensity={3} />
      <Home />

      <PointerLockControls />
      <MovementControls/>
    </Canvas>
  );
}
export default App;
