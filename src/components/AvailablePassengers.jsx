'use client';

const passengers = [
  {
    id: 1,
    passenger: 'Sipho N.',
    pickup: 'Soweto',
    destination: 'Sandton',
    datetime: '2025-06-01T08:00',
    people: 1,
  },
  {
    id: 2,
    passenger: 'Lerato M.',
    pickup: 'Tembisa',
    destination: 'Midrand',
    datetime: '2025-06-01T09:30',
    people: 2,
  },
  {
    id: 3,
    passenger: 'Thandi P.',
    pickup: 'Pretoria',
    destination: 'Centurion',
    datetime: '2025-06-01T07:45',
    people: 1,
  },
];

export default function AvailablePassengers() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#121212', maxHeight: '250px', overflowY: 'auto', color: '#fff' }}>
      <h3>Available Passengers</h3>
      {passengers.map((passenger) => (
        <div
          key={passenger.id}
          style={{
            padding: '10px',
            maxHeight: 'calc(100vh - 40vh - 50px)', // total viewport minus map height and tab button height
            overflowY: 'auto',
            backgroundColor: '#1e1e1e',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <strong>{passenger.passenger}</strong><br />
          <span>{passenger.pickup} → {passenger.destination}</span><br />
          <small>{new Date(passenger.datetime).toLocaleString()}</small><br />
          <small>People: {passenger.people}</small>
        </div>
      ))}
    </div>
  );
}
