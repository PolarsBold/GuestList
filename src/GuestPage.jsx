function GuestPage({ selectedGuest, setSelectedGuest }) {
  return (
    <section className="guest-page">
      <h1>
        {selectedGuest.name} #<span>{selectedGuest.id}</span>
      </h1>
      <h2>{selectedGuest.job}</h2>
      <h3>
        {selectedGuest.email} --- {selectedGuest.phone}
      </h3>
      <p>{selectedGuest.bio}</p>
      <button onClick={() => setSelectedGuest(null)}>Return</button>
    </section>
  );
}

export default GuestPage;
