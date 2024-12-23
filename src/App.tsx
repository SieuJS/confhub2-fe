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
  Orders,
  ConferenceHome
} from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
import {loader as conferenceLoader} from "./pages/conference/ConferenceHome"
// action
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,

    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: landingLoader,
        errorElement: <ErrorElement></ErrorElement>
      },
      {
        path: "products",
        element: <Products></Products>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: productsLoader
      },
      {
        path: "products/:id",
        element: <SingleProduct></SingleProduct>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: singleProductLoader
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
        element: <Checkout></Checkout>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: checkoutLoader(store),
        action: checkoutAction(store)
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: ordersLoader(store)
      },
      {
        path : "conferences",
        element : <ConferenceHome></ConferenceHome>,
        errorElement : <ErrorElement></ErrorElement>,
        loader : conferenceLoader
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error></Error>,
    action: loginAction(store)
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error></Error>,
    action: registerAction
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
