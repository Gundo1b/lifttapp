'use client';

const rides = [
  {
    id: 1,
    driver: 'Thabo M.',
    from: 'Soweto',
    to: 'Sandton',
    datetime: '2025-06-01T08:00',
    seats: 3,
  },
  {
    id: 2,
    driver: 'Naledi K.',
    from: 'Tembisa',
    to: 'Midrand',
    datetime: '2025-06-01T09:30',
    seats: 2,
  },
  {
    id: 3,
    driver: 'Bongani D.',
    from: 'Pretoria',
    to: 'Centurion',
    datetime: '2025-06-01T07:45',
    seats: 4,
  },
];

export default function AvailableRides() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#121212', maxHeight: '250px', overflowY: 'auto', color: '#fff' }}>
      <h3>Available Rides</h3>
      {rides.map((ride) => (
        <div
          key={ride.id}
          style={{
            padding: '10px',
            maxHeight: 'calc(100vh - 40vh - 50px)', // total viewport minus map height and tab button height
            overflowY: 'auto',
            backgroundColor: '#1e1e1e',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <strong>{ride.driver}</strong><br />
          <span>{ride.from} → {ride.to}</span><br />
          <small>{new Date(ride.datetime).toLocaleString()}</small><br />
          <small>Seats: {ride.seats}</small>
        </div>
      ))}
    </div>
  );
}
