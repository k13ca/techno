export function EventItem({ title, date, id, artists, classname }) {
  const artist = artists.split(",");

  return (
    <>
      <div
        className="event-item"
        // {classname}
        key={id}
      >
        <h2>{title}</h2>
        <h2>{date}</h2>
        <div className="event">
          {artist.map((artist, index) => (
            <h3 key={index}> {artist} /</h3>
          ))}
        </div>
      </div>
    </>
  );
}
export default EventItem;
