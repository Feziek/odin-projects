import App from './src/App';
import Home from './src/pages/Home';
import Cart from './src/pages/Cart';
import Shop from './src/pages/Shop';
import NotFound from './src/pages/NotFound';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
