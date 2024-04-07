import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      { index:true, element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "product/:id",element: <ProductDetails/>}
    ]
  },
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
