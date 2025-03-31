import { useRef } from "react";
import useDiagonalLine from "../functions/diagonalLine";

export function EventItem({
  title,
  date,
  id,
  artists,
  expired,
  crossLineClass,
  borderStyle,
  awaitedElement,
}) {
  const artist = artists.split(",");

  const loopEventRef = useRef(null);
  const loopDiagonalLine = useDiagonalLine(loopEventRef, awaitedElement);

  return (
    <>
      <div
        className="event-item"
        style={borderStyle}
        key={id}
        ref={loopEventRef}
      >
        <div className={crossLineClass} style={{ ...loopDiagonalLine }}></div>
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
