import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader:() => fetch('http://localhost:5000/coffee')
    },
    {
      path: "addCoffee",
      element: <AddCoffee />,
    },
    {
      path: "updateCoffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }
  ]);

export default router;