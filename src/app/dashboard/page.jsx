'use client';
import dynamic from 'next/dynamic';
import BottomTabs from '../../components/BottomTabs';
import { useState } from 'react';
import Profile from '../../components/Profile';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Dashboard() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',  // prevent scroll on whole page
      backgroundColor: '#000000', // Uber black background for whole dashboard
      color: '#FFFFFF', // white text by default
    }}>
      <div style={{
        flex: '0 0 40vh',   // fixed height 40% viewport height for map
        minHeight: '300px', // optional min height for better mobile look
        position: 'relative',
      }}>
        <input
          type="text"
          placeholder="Where to?"
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            padding: '10px 15px',
            borderRadius: '25px',
            border: '1px solid #1FB6FF',
            fontSize: '16px',
            outline: 'none',
            zIndex: 1000,
            backgroundColor: '#222',
            color: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const query = e.currentTarget.value;
              if (!query) return;
              setLoading(true);
              try {
                const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
                const data = await res.json();
                if (data && data.length > 0) {
                  const { lat, lon } = data[0];
                  setDestination({ lat: parseFloat(lat), lon: parseFloat(lon) });
                } else {
                  alert('Location not found');
                }
              } catch (error) {
                alert('Error fetching location');
              } finally {
                setLoading(false);
              }
            }
          }}
        />
        <button
          onClick={() => setShowProfile(!showProfile)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1002,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '24px',
          }}
          aria-label="Toggle Profile"
          title="Toggle Profile"
        >
          <i className="bi bi-person-circle"></i>
        </button>
        {showProfile && (
          <div style={{
            position: 'absolute',
            top: '50px',
            right: '10px',
            zIndex: 1003,
            backgroundColor: '#000',
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '10px',
            width: '300px',
            maxHeight: 'calc(40vh - 60px)',
            overflowY: 'auto',
          }}>
            <Profile />
          </div>
        )}
        {loading && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 'bold',
            zIndex: 1001,
          }}>
            Loading...
          </div>
        )}
        <Map destination={destination} />
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto', // scroll bottom content if needed
        backgroundColor: '#121212', // slightly lighter black for bottom tabs area
      }}>
        <BottomTabs />
      </div>
    </div>
  );
}
