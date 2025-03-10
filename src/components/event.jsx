export function EventItem({ title, date, id, artists, eventItemClass }) {
  const artist = artists.split(",");

  return (
    <>
      <div
        className={eventItemClass}
        //className="event-item"
        // {classname}
        key={id}
      >
        <h2>{title}</h2>
        <h2>{date}</h2>
        <div className="event-item-artists">
          {artist.map((artist, index) => (
            <h3 key={index}> {artist} /</h3>
          ))}
        </div>
      </div>
    </>
  );
}
export default EventItem;
