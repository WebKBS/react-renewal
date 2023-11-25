import { Outlet } from 'react-router-dom';
import EventNavigation from '../components/EventsNavigation';
export default function EventsRootLayout() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
}
