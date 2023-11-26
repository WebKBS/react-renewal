import { json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  const data = useLoaderData();

  console.log('data', data);

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: 'fetch Fails!' }, { status: 500 });
  } else {
    return response;
  }
}
