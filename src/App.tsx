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
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,

    children: [
      {
        index: true,
        element: <Landing></Landing>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: async () => {
          console.log("Loading page");
          return null;
        }
      },
      {
        path: "products",
        element: <Products></Products>,
        errorElement: <ErrorElement></ErrorElement>
      },
      {
        path: "products/:id",
        element: <SingleProduct></SingleProduct>,
        errorElement: <ErrorElement></ErrorElement>
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        errorElement: <ErrorElement></ErrorElement>
      },
      {
        path: "about",
        element: <About></About>,
        errorElement: <ErrorElement></ErrorElement>
      },
      {
        path: "checkout",
        errorElement: <ErrorElement></ErrorElement>
      },
      {
        path: "orders",
        errorElement: <ErrorElement></ErrorElement>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error></Error>
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error></Error>
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
