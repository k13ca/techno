import { useEffect, useState } from "react";

export default function useDiagonalLine(eventRef, awaitedElement = null) {
  const [diagonalStyle, setDiagonalStyle] = useState({});

  useEffect(() => {
    const updateDiagonalLine = () => {
      const div = eventRef.current;

      if (div) {
        const width = div.offsetWidth;
        const height = div.offsetHeight;

        const diagonalLength = Math.sqrt(
          Math.pow(width, 2) + Math.pow(height, 2)
        );

        const angle = Math.atan(height / width) * (180 / Math.PI);

        setDiagonalStyle({
          width: `${diagonalLength}px`,
          transform: `rotate(${angle}deg)`,
        });
      }
    };

    updateDiagonalLine();

    window.addEventListener("resize", updateDiagonalLine);

    return () => window.removeEventListener("resize", updateDiagonalLine);
  }, [eventRef, awaitedElement]);

  return diagonalStyle;
}
