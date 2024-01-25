import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Home from "./components/Home";

// function Setup() {
//   const canvasRef = useRef();

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     // Scene
//     const scene = new THREE.Scene();

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0x404040, 50);
//     scene.add(ambientLight);

//     // Sizes
//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };

//     window.addEventListener("resize", () => {
//       // Update sizes
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;

//       // Update camera
//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();

//       // Update renderer
//       renderer.setSize(sizes.width, sizes.height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     });

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       sizes.width / sizes.height,
//       1,
//       500
//     );
//     camera.position.z = 3;
//     scene.add(camera);

//     // Objects
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // Controls
//     const controls = new OrbitControls(camera, canvas);
//     controls.enableDamping = true;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//     });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const sceneHandler = () => {
//       // Update controls
//       controls.update();

//       // Render
//       renderer.render(scene, camera);

//       window.requestAnimationFrame(sceneHandler);
//     };

//     sceneHandler();
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// }

function App() {
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
    >
      <Home />
    </Canvas>
  );
}
export default App;
