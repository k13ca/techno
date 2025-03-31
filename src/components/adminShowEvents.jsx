import { useContext, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
// import { API_HOST } from "../consts/const";
import { EventsContext } from "../contexts/EventsContext";
export default function AdminShowEvents({
  eventId,
  title,
  date,
  artists,
  style,
  setShowConfirmationModal,
}) {
  const { setEventToDelete } = useContext(EventsContext);
  const [fold, setFold] = useState(true);
  return (
    <div
      className="admin-event-block pointer"
      onClick={() => {
        setFold((fold) => !fold);
      }}
    >
      <div className="admin-event-block-visible" style={{ maxWidth: "80%" }}>
        <h2 style={style}>{title}</h2>
        <h2 style={style}>{date}</h2>
      </div>
      <button
        id="admin-events-button"
        title="Delete event"
        onClick={(e) => {
          setShowConfirmationModal(true);
          e.stopPropagation();
          setEventToDelete({ eventId, eventName: title });
        }}
      >
        <AiFillCloseSquare size="50px" />
      </button>

      {!fold && (
        <div
          className="admin-event-block-hidden"
          style={{ marginBlock: "20px" }}
        >
          {artists.split(",").map((artist, index) => (
            <h3 style={{ style, display: "inline" }} key={index}>
              {artist} /
            </h3>
          ))}
        </div>
      )}
    </div>
  );
}
