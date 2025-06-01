'use client';

export default function Profile() {
  // For now, we'll use hardcoded user info.
  // Later we will connect this to Supabase auth & user data.
  
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+27 123 456 7890',
    role: 'Passenger', // or 'Driver'
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#000',  // changed to black background
      minHeight: 'calc(100vh - 40vh - 50px)',
      overflowY: 'auto',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',            // white text for contrast
    }}>
      <h2>My Profile</h2>

      <div style={{ marginBottom: '15px' }}>
        <strong>Name:</strong> <span>{user.name}</span>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <strong>Email:</strong> <span>{user.email}</span>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <strong>Phone:</strong> <span>{user.phone}</span>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <strong>Role:</strong> <span>{user.role}</span>
      </div>

      {/* Placeholder for Edit Profile button */}
      <button style={{
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        Edit Profile
      </button>
    </div>
  );
}
