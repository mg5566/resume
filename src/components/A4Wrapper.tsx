import { useState } from "react";
import "../App.css";

interface Props {
  children: React.ReactNode;
}

export default function A4Wrapper({ children }: Props) {
  const [isA4, setIsA4] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsA4((prev) => !prev)}
        className="no-print"
        style={{ marginBottom: "1rem" }}
      >
        {isA4 ? "A4 형식 해제" : "A4 형식으로 보기"}
      </button>
      <div className={isA4 ? "a4" : ""}>{children}</div>
    </div>
  );
}
