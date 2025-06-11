import { useState } from "react";
import styles from "./LiquidGlassButton.module.css";

interface LiquidGlassButtonProps {
  initialPos?: { x: number; y: number };
}

export default function LiquidGlassButton({
  initialPos = { x: 0, y: 0 },
}: LiquidGlassButtonProps) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [btnPos, setBtnPos] = useState(initialPos);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  const handleDragStart = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <button
        className={`${styles["liquid-glass-btn"]} no-print`}
        style={
          {
            marginBottom: "1rem",
            position: "absolute",
            left: btnPos.x,
            top: btnPos.y,
            cursor: dragging ? "grabbing" : "grab",
            "--glass-x": `${mouse.x}%`,
            "--glass-y": `${mouse.y}%`,
          } as React.CSSProperties
        }
        onMouseMove={handleMouseMove}
        onMouseDown={handleDragStart}
      >
        Liquid Glass Button
        <span className={styles["liquid-glass-light"]} />
      </button>
    </div>
  );
}
