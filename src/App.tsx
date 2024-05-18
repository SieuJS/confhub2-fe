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
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "products",
        element: <Products></Products>
      },
      {
        path: "products/:id",
        element: <SingleProduct></SingleProduct>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      { path: "about", element: <About></About> },
      {
        path: "checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "orders",
        element: <Orders></Orders>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
