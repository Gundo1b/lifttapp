'use client';

const previousRides = [
  {
    id: 101,
    driver: 'Lerato S.',
    from: 'Rosebank',
    to: 'Johannesburg',
    datetime: '2025-05-15T15:00',
    seats: 0,
    status: 'Completed',
  },
  {
    id: 102,
    driver: 'Sipho N.',
    from: 'Sandton',
    to: 'Midrand',
    datetime: '2025-05-20T09:00',
    seats: 0,
    status: 'Cancelled',
  },
];

export default function PreviousRides() {
  return (
    <div style={{
      padding: '10px',
      maxHeight: 'calc(100vh - 40vh - 50px)',
      overflowY: 'auto',
      backgroundColor: '#000',  // changed to black background
      color: '#fff',            // white text for contrast
    }}>
      <h3>Previous Rides</h3>
      {previousRides.length === 0 && <p>No previous rides.</p>}
      {previousRides.map((ride) => (
        <div
          key={ride.id}
          style={{
            border: '1px solid #444',  // darker border for dark theme
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#111',  // dark card background
            color: '#fff',            // white text
          }}
        >
          <strong>{ride.driver}</strong><br />
          <span>{ride.from} → {ride.to}</span><br />
          <small>{new Date(ride.datetime).toLocaleString()}</small><br />
          <small>Status: {ride.status}</small>
        </div>
      ))}
    </div>
  );
}
