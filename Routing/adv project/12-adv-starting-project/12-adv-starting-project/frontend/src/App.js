import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventPage, { loader as eventsLoader } from './pages/EventPage';
import EventDetailPage, { loader as eventDetailsLoader, action as deleteEvents } from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Errorpage from './pages/Errorpage';
import {action as manuplatingEventAction} from "./components/EventForm"
import NewsletterPage , { action as newsletterAction }  from './pages/Newsletter';
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

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Errorpage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventsLoader
            },
            {
              path: ':id',
              id: "event-details",
              loader: eventDetailsLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEvents
                },
                {
                  path: 'edit',
                  element: <EditEventPage />,
                  action: manuplatingEventAction
                }
              ]
            },

            {
              path: 'new',
              element: <NewEventPage />,
              action: manuplatingEventAction
            },

          ]
        },
        {
          path: 'newsletter',
          element: <NewsletterPage/>,
          action: newsletterAction,
        },
      ]

    }
  ])



  return <RouterProvider router={router} />;
}

export default App;
