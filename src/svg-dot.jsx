import { useEffect, useState } from "react";
import "./index.css";

function Dot() {
  const [resizeValues, setResizeValues] = useState({
    size: "20",
    r: "5",
    cx: "10",
  });

  const [isBelow600, setIsBelow600] = useState(window.innerWidth < 600);

  useEffect(() => {
    function handleResize() {
      const isNowBelow600 = window.innerWidth < 600;

      if (isNowBelow600 !== isBelow600) {
        setIsBelow600(isNowBelow600);

        if (isNowBelow600) {
          setResizeValues({ size: "10", cx: "5", r: "2.5" });
        } else {
          setResizeValues({ size: "20", cx: "10", r: "5" });
        }
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isBelow600]);

  return (
    <>
      <svg
        height={resizeValues.size}
        width={resizeValues.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r={resizeValues.r} cx={resizeValues.cx} cy="5" fill="black" />
      </svg>
    </>
  );
}

export default Dot;
