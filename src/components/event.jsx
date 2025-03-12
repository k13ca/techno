import { useEffect, useRef, useState } from "react";

export function EventItem({
  title,
  date,
  id,
  artists,
  expired,
  crossLineClass,
  borderStyle,
}) {
  const artist = artists.split(",");

  const eventRef = useRef(null);
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
  }, []);

  return (
    <>
      <div className="event-item" style={borderStyle} key={id} ref={eventRef}>
        <div className={crossLineClass} style={diagonalStyle}></div>
        <h2 className={expired}>{title}</h2>
        <h2 className={expired}>{date}</h2>
        <div className="event-item-artists">
          {artist.map((artist, index) => (
            <h3 className={expired} key={index}>
              {artist} /
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}
export default EventItem;
