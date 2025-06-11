import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import styles from "./LiquidGlassButton.module.css";

interface LiquidGlassButton3DProps {
  initialPos?: { x: number; y: number };
}

function GlassButtonMesh({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  // 볼록렌즈 느낌의 커스텀 normalMap 생성 (codesandbox 참고)
  const normalMap = useRef<THREE.Texture>();
  if (!normalMap.current) {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    // 볼록렌즈(돔) 형태의 normal map
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        // 중심에서의 거리
        const dx = (x - size / 2) / (size / 2);
        const dy = (y - size / 2) / (size / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        // 볼록렌즈: 중심이 밝고, 가장자리가 어두움
        let nx = dx * 0.5 + 0.5;
        let ny = dy * 0.5 + 0.5;
        let nz = Math.sqrt(1 - Math.min(1, dx * dx + dy * dy));
        // normal vector를 rgb로 인코딩
        ctx.fillStyle = `rgb(${Math.floor(nx * 255)},${Math.floor(ny * 255)},${Math.floor(nz * 255)})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    normalMap.current = new THREE.CanvasTexture(canvas);
    normalMap.current.wrapS = normalMap.current.wrapT = THREE.RepeatWrapping;
    normalMap.current.repeat.set(1, 1);
  }
  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 0.7, 64, 32]} />
      <meshPhysicalMaterial
        color="#aeefff"
        transmission={1}
        roughness={0.1}
        thickness={0.5}
        ior={1.5}
        reflectivity={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
        opacity={0.8}
        transparent
        envMapIntensity={1.2}
        metalness={0.1}
        normalMap={normalMap.current}
        normalScale={new THREE.Vector2(0.7, 0.7)}
      />
    </mesh>
  );
}

export default function LiquidGlassButton3D({
  initialPos = { x: 0, y: 0 },
}: LiquidGlassButton3DProps) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [btnPos, setBtnPos] = useState(initialPos);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    e.preventDefault();
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const parentRect = e.currentTarget.getBoundingClientRect();
    setBtnPos({
      x: e.clientX - parentRect.left - dragOffset.x,
      y: e.clientY - parentRect.top - dragOffset.y,
    });
  };

  const handleDragEnd = () => setDragging(false);

  return (
    <div
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      style={{ position: "relative", minHeight: 80 }}
    >
      <div
        style={{
          marginBottom: "1rem",
          position: "absolute",
          left: btnPos.x,
          top: btnPos.y,
          width: 200,
          height: 56,
          cursor: dragging ? "grabbing" : "grab",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.2)",
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleDragStart}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ borderRadius: 16 }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <GlassButtonMesh mouse={mouse} />
        </Canvas>
        {/* CSS로 하이라이트와 유리 효과 오버레이 */}
        <span
          className={styles["liquid-glass-light"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 16,
            pointerEvents: "none",
            background:
              `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)` +
              ", linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)",
            mixBlendMode: "screen",
            transition: "background 0.2s",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 20,
            color: "#fff",
            textShadow: "0 2px 8px #0006",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Liquid Glass Button
        </span>
      </div>
    </div>
  );
}
