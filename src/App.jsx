import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cart,
  Products,
  SingleCardProduct,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Register,
  Chekout,
} from "./pages";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,

      children: [
        { index: true, element: <Landing /> },
        { path: "about", element: <About /> },
        { path: "orders", element: <Orders /> },
        { path: "Products", element: <Products /> },
        { path: "Chekout", element: <Chekout /> },
        { path: "cart", element: <Cart /> },
        { path: "SingleCardProduct", element: <SingleCardProduct /> },
      ],
      errorElement: <Error />,
    },
    { path: "/login", element: <Login />, errorElement: <Error /> },
    { path: "/register", element: <Register />, errorElement: <Error /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
