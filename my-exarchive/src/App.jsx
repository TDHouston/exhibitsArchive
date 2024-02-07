import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Home from "./components/Home";
import { OrbitControls } from "@react-three/drei";

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
      <OrbitControls />
      <ambientLight intensity={3} />

      <Home />
    </Canvas>
  );
}
export default App;
