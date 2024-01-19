import { Join, Chat } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Join />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
