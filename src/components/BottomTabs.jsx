'use client';
import './BottomTabs.css';
import { useState } from 'react';
import AvailableRides from './AvailableRides';
import PreviousRides from './PreviousRides';
import Profile from './Profile';

const MyRides = () => (
  <div style={{ padding: '10px', color: '#fff' }}>
    <h3>My Rides</h3>
    <p>List of your rides will appear here.</p>
  </div>
);

const Settings = () => (
  <div style={{ padding: '10px', color: '#fff' }}>
    <h3>Settings</h3>
    <p>Settings options will appear here.</p>
  </div>
);

const AddTrip = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [bags, setBags] = useState('');
  const [people, setPeople] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAdd = () => {
    alert(`Trip added from ${from} to ${to} with ${bags} bags, ${people} people, pickup at ${pickupTime}, instructions: ${instructions}`);
    setFrom('');
    setTo('');
    setBags('');
    setPeople('');
    setPickupTime('');
    setInstructions('');
  };

  return (
    <div style={{ padding: '10px', color: '#fff' }}>
      <h3>Add Your Trip</h3>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="to" style={{ display: 'block', marginBottom: '4px' }}>Where to:</label>
        <input
          id="to"
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: '#fff',
          }}
          placeholder="Enter destination"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="from" style={{ display: 'block', marginBottom: '4px' }}>From:</label>
        <input
          id="from"
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: '#fff',
          }}
          placeholder="Enter starting location"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="bags" style={{ display: 'block', marginBottom: '4px' }}>How many bags:</label>
        <input
          id="bags"
          type="number"
          min="0"
          value={bags}
          onChange={(e) => setBags(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: '#fff',
          }}
          placeholder="Enter number of bags"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="people" style={{ display: 'block', marginBottom: '4px' }}>How many people:</label>
        <input
          id="people"
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: '#fff',
          }}
          placeholder="Enter number of people"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="pickupTime" style={{ display: 'block', marginBottom: '4px' }}>Pickup Time:</label>
        <input
          id="pickupTime"
          type="datetime-local"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: '#fff',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="instructions" style={{ display: 'block', marginBottom: '4px' }}>Special Instructions:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: '#fff',
            resize: 'vertical',
          }}
          placeholder="Enter any special instructions for the driver"
          rows={3}
        />
      </div>
      <button
        onClick={handleAdd}
        style={{
          padding: '10px 20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </div>
  );
};

const BottomTabs = () => {
  const [active, setActive] = useState('available');

  const renderTab = () => {
    if (active === 'available') return <AvailableRides />;
    if (active === 'previous') return <PreviousRides />;
    if (active === 'myrides') return <MyRides />;
    if (active === 'add') return <AddTrip />;
    if (active === 'settings') return <Settings />;
  };

  return (
    <div>
      {renderTab()}

      <div className="bottom-tabs">
        <button
          className={active === 'available' ? 'tab active' : 'tab'}
          onClick={() => setActive('available')}
          aria-label="Available Rides"
          title="Available Rides"
        >
          <i className="bi bi-car-front-fill" style={{ fontSize: '1.5rem' }}></i>
        </button>
        <button
          className={active === 'previous' ? 'tab active' : 'tab'}
          onClick={() => setActive('previous')}
          aria-label="Previous Rides"
          title="Previous Rides"
        >
          <i className="bi bi-clock-history" style={{ fontSize: '1.5rem' }}></i>
        </button>
        <button
          className={active === 'myrides' ? 'tab active' : 'tab'}
          onClick={() => setActive('myrides')}
          aria-label="My Rides"
          title="My Rides"
        >
          <i className="bi bi-list-ul" style={{ fontSize: '1.5rem' }}></i>
        </button>
        <button
          className={active === 'add' ? 'tab active' : 'tab'}
          onClick={() => setActive('add')}
          aria-label="Add Your Trip"
          title="Add Your Trip"
        >
          <i className="bi bi-plus-circle" style={{ fontSize: '1.5rem' }}></i>
        </button>
        <button
          className={active === 'settings' ? 'tab active' : 'tab'}
          onClick={() => setActive('settings')}
          aria-label="Settings"
          title="Settings"
        >
          <i className="bi bi-gear" style={{ fontSize: '1.5rem' }}></i>
        </button>
      </div>
    </div>
  );
};

export default BottomTabs;
