import App from './src/App';
import Home from './src/pages/Home';
import Cart from './src/pages/cart';
import Shop from './src/pages/shop';

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
];

export default routes;
