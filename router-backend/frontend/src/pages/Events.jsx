import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  console.log(events);

  if (events.isError) {
    return <p>{events.message}</p>;
  }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/evnts');

  if (!response.ok) {
    // return { isError: true, message: 'Something went wrong!' };
    throw new Error('Something went wrong!');
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
