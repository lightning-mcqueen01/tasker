import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/home", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
