import FriendsList from './components/HomePage/FriendsList'
import Conversation from './components/Conversation/Conversation';

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <FriendsList />
        },
        {
          path: "conversation/:id",
          element: <Conversation />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
