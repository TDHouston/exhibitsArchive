import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useTrimesh } from "@react-three/cannon";

export default function PhysicalModel({ position }) {
  const { nodes } = useGLTF("/models/navMesh.gltf");
  const navMeshGeometry = nodes.NavMesh.geometry;

  const [vertices, indices] = useMemo(() => {
    const vertices = navMeshGeometry.attributes.position.array;
    const indices = navMeshGeometry.index.array;
    return [vertices, indices];
  }, [navMeshGeometry]);

  const [ref] = useTrimesh(() => ({
    type: "Static",
    args: [vertices, indices],
    position,
  }));

  return (
    <mesh ref={ref} visible={false}>
      {/* Mesh not intended to be rendered; only for collision detection */}
    </mesh>
  );
}
