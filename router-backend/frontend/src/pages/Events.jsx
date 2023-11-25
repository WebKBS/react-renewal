import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'e1', title: 'Programming for everyone' },
  { id: 'e2', title: 'Networking for introverts' },
  { id: 'e3', title: 'Networking for extroverts' },
  { id: 'e4', title: 'Networking for ambiverts' },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
            {event.title}
          </li>
        ))}
      </ul>
    </>
  );
}
