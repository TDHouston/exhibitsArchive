import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Home(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  // const benchTexture = useTexture();
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group scale={2} {...props} dispose={null}>
    <group name="Floor" position={[7.944, 1.31, 0]}>
      <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={textureMaterial} />
      <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={textureMaterial} />
    </group>
    <mesh name="hall" geometry={nodes.hall.geometry} material={textureMaterial} position={[51.178, 13.743, 32.496]} />
    <group name="Stage" position={[-5.946, 10.659, -11.812]}>
      <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={textureMaterial} />
      <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={textureMaterial} />
    </group>
    <mesh name="leftFront" geometry={nodes.leftFront.geometry} material={textureMaterial} position={[-14.148, 3.273, 10]} />
    <mesh name="leftMiddle" geometry={nodes.leftMiddle.geometry} material={textureMaterial} position={[-14.148, 3.273, 17.5]} />
    <mesh name="leftBack" geometry={nodes.leftBack.geometry} material={textureMaterial} position={[-14.148, 3.273, 25]} />
    <mesh name="shelf1" geometry={nodes.shelf1.geometry} material={textureMaterial} position={[-15.133, 3.978, -2.819]} rotation={[0, Math.PI / 2, 0]} />
    <mesh name="shelf2" geometry={nodes.shelf2.geometry} material={textureMaterial} position={[3.248, 3.978, -2.819]} rotation={[0, Math.PI / 2, 0]} />
    <mesh name="chair" geometry={nodes.chair.geometry} material={textureMaterial} position={[-6.01, 5.406, -12.506]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
    <mesh name="littleBowlLeft" geometry={nodes.littleBowlLeft.geometry} material={textureMaterial} position={[-14.259, 1.475, -0.204]} rotation={[1.994, -0.572, 1.227]} />
    <mesh name="bigBowlLeft" geometry={nodes.bigBowlLeft.geometry} material={textureMaterial} position={[-15.15, 1.319, 0.123]} rotation={[Math.PI / 2, 0, 0.835]} />
    <mesh name="littleBowlRight" geometry={nodes.littleBowlRight.geometry} material={textureMaterial} position={[1.296, 1.313, -0.014]} rotation={[Math.PI / 2, 0, 0.565]} />
    <mesh name="bigBowlRight" geometry={nodes.bigBowlRight.geometry} material={textureMaterial} position={[3.147, 1.313, 0.14]} rotation={[Math.PI / 2, 0, -0.648]} />
    <mesh name="bigBowlRight001" geometry={nodes.bigBowlRight001.geometry} material={textureMaterial} position={[-2.514, 1.568, -9.974]} rotation={[Math.PI / 2, 0, -1.856]} />
    <mesh name="leftFront001" geometry={nodes.leftFront001.geometry} material={textureMaterial} position={[2.641, 3.273, 10]} />
    <mesh name="leftMiddle001" geometry={nodes.leftMiddle001.geometry} material={textureMaterial} position={[2.641, 3.273, 17.5]} />
    <mesh name="leftBack001" geometry={nodes.leftBack001.geometry} material={textureMaterial} position={[2.641, 3.273, 25]} />
    <mesh name="poleOne" geometry={nodes.poleOne.geometry} material={textureMaterial} position={[-15.081, 3.226, -6.249]} rotation={[1.026, 0, 0]} />
    <mesh name="poleTwo" geometry={nodes.poleTwo.geometry} material={textureMaterial} position={[1.937, 1.656, -3.254]} rotation={[Math.PI / 2, 0, 0]} />
    <group name="ceilingLight3" position={[12.732, 25.297, 38.607]}>
      <mesh name="Cylinder078" geometry={nodes.Cylinder078.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_1" geometry={nodes.Cylinder078_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_2" geometry={nodes.Cylinder078_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_3" geometry={nodes.Cylinder078_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_4" geometry={nodes.Cylinder078_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_5" geometry={nodes.Cylinder078_5.geometry} material={textureMaterial} />
    </group>
    <group name="mainLamp2" position={[22.631, 22.923, 19.28]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={textureMaterial} />
      <mesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={textureMaterial} />
    </group>
    <group name="mainLamp1" position={[22.631, 22.923, -9.515]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh name="Mesh002" geometry={nodes.Mesh002.geometry} material={textureMaterial} />
      <mesh name="Mesh002_1" geometry={nodes.Mesh002_1.geometry} material={textureMaterial} />
    </group>
    <group name="ceilingLight2" position={[2.69, 25.297, 38.607]}>
      <mesh name="Cylinder079" geometry={nodes.Cylinder079.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_1" geometry={nodes.Cylinder079_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_2" geometry={nodes.Cylinder079_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_3" geometry={nodes.Cylinder079_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_4" geometry={nodes.Cylinder079_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_5" geometry={nodes.Cylinder079_5.geometry} material={textureMaterial} />
    </group>
    <group name="ceilingLight1" position={[-7.399, 25.297, 38.607]}>
      <mesh name="Cylinder080" geometry={nodes.Cylinder080.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_1" geometry={nodes.Cylinder080_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_2" geometry={nodes.Cylinder080_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_3" geometry={nodes.Cylinder080_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_4" geometry={nodes.Cylinder080_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_5" geometry={nodes.Cylinder080_5.geometry} material={textureMaterial} />
    </group>
    <group name="ceilingLight4" position={[22.888, 25.297, 38.607]}>
      <mesh name="Cylinder081" geometry={nodes.Cylinder081.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_1" geometry={nodes.Cylinder081_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_2" geometry={nodes.Cylinder081_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_3" geometry={nodes.Cylinder081_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_4" geometry={nodes.Cylinder081_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_5" geometry={nodes.Cylinder081_5.geometry} material={textureMaterial} />
    </group>
    <group name="hallwayLamp" position={[50.837, 22.752, 31.887]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh name="Mesh003" geometry={nodes.Mesh003.geometry} material={textureMaterial} />
      <mesh name="Mesh003_1" geometry={nodes.Mesh003_1.geometry} material={textureMaterial} />
    </group>
  </group>
  );
}

useGLTF.preload("models/scene.gltf");
