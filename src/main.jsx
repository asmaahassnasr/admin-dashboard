import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Acts as a layout
    children: [
      { index: true, element: <App /> }, // Default page at "/"
      // { path: "about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
