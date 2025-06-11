import { useState } from "react";
import LiquidGlassButton from "./LiquidGlassButton";

interface Props {
  children: React.ReactNode;
}

export default function A4Wrapper({ children }: Props) {
  const [isA4, setIsA4] = useState(true);

  return (
    <div style={{ position: "relative", minHeight: 200 }}>
      <button
        onClick={() => setIsA4((prev) => !prev)}
        className="no-print"
        style={{ marginBottom: "1rem" }}
      >
        {isA4 ? "A4 형식 해제" : "A4 형식으로 보기"}
      </button>
      {/* Liquid Glass UI Button 컴포넌트로 분리 */}
      <LiquidGlassButton />
      <div className={isA4 ? "a4" : ""}>{children}</div>
    </div>
  );
}
