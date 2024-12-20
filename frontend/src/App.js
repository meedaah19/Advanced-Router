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

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './Pages/Home';
import EventsPage, {loader as eventLoader} from './Pages/Events';
import EventDetailPage from './Pages/EventDetail';
import NewEventPage from './Pages/NewEvent';
import EditEventPage from './Pages/EditEvent';
import RootPage from './Pages/Root';
import EventRootlayout from './Pages/EventRoot';
import ErrorPage from './Pages/Error';


const router = createBrowserRouter([
  {path: '/',
   element: <RootPage/>,
   errorElement: <ErrorPage/>,
   children: [
    {index : true, element: <HomePage/>},
    {path: 'events', element: <EventRootlayout/>, children : [
      {index : true, element: <EventsPage/>, 
        loader : eventLoader,
      },
      {path: ':id', element: <EventDetailPage/>},
      {path: 'new', element: <NewEventPage/>},
      {path: ':eventsId/:edit', element: <EditEventPage/>}
    ] },

  ]},
  
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App;
