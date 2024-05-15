/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
