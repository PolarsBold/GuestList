function GuestList({ guests, setSelectedGuest = {} }) {
  return (
    <div>
      <h1>Guest List</h1>
      <h4>Please select guest to learn more.</h4>
      <ul>
        {guests.map((guest, i) => {
          return (
            <li key={i} onClick={() => setSelectedGuest(guest)}>
              {guest.name} --- {guest.email} --- {guest.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GuestList;
