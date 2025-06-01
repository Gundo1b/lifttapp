import { redirect } from 'next/navigation';

export default function DriverDashboard() {
  redirect('/dashboard/driver/page');
  return null;
}
