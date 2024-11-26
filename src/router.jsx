import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "addCoffee",
      element: <AddCoffee />,
    },
    {
      path: "updateCoffee",
      element: <UpdateCoffee />,
    },
  ]);

export default router;