'use client';

const previousPassengers = [
  {
    id: 201,
    passenger: 'Lerato S.',
    pickup: 'Rosebank',
    destination: 'Johannesburg',
    datetime: '2025-05-15T15:00',
    status: 'Completed',
  },
  {
    id: 202,
    passenger: 'Sipho N.',
    pickup: 'Sandton',
    destination: 'Midrand',
    datetime: '2025-05-20T09:00',
    status: 'Cancelled',
  },
];

export default function PreviousPassengers() {
  return (
    <div style={{
      padding: '10px',
      maxHeight: 'calc(100vh - 40vh - 50px)',
      overflowY: 'auto',
      backgroundColor: '#000',  // black background for dark theme
      color: '#fff',            // white text for contrast
    }}>
      <h3>Previous Passengers</h3>
      {previousPassengers.length === 0 && <p>No previous passengers.</p>}
      {previousPassengers.map((passenger) => (
        <div
          key={passenger.id}
          style={{
            border: '1px solid #444',  // darker border for dark theme
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#111',  // dark card background
            color: '#fff',            // white text
          }}
        >
          <strong>{passenger.passenger}</strong><br />
          <span>{passenger.pickup} → {passenger.destination}</span><br />
          <small>{new Date(passenger.datetime).toLocaleString()}</small><br />
          <small>Status: {passenger.status}</small>
        </div>
      ))}
    </div>
  );
}
