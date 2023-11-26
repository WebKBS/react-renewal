import { json, useLoaderData } from 'react-router-dom';
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
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Something went wrong!' };
    // throw new Error('Something went wrong!');
    // throw new Response(JSON.stringify({ message: 'Something went wrong!' }), {
    //   status: 500,
    // });

    // react router dom에서는 return을 하는게 아니라 throw를 해야한다.
    throw json({ message: 'Something went wrong!' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
