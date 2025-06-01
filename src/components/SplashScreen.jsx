
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './SplashScreen.css';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src="/next.svg" alt="Uber Logo" className="splash-logo" />
        <h1 className="splash-slogan">Liftlink travelling</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
