import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      { path: '/products/:productId', element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
