// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as manipulateEventACtion } from './components/EventForm';
import EditEventPage from './pages/EditEvent';
import Error from './pages/Error';
import EventDetailPage, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/events',
        element: <EventsRootLayout />,
        errorElement: <Error />,
        children: [
          {
            path: '/events',
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: '/events/:eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                path: '/events/:eventId',
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: '/events/:eventId/edit',
                element: <EditEventPage />,
                action: manipulateEventACtion,
              },
            ],
          },
          {
            path: '/events/new',
            element: <NewEventPage />,
            action: manipulateEventACtion,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
