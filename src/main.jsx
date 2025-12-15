import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import { Contacts } from './pages/contacts/Contacts';
import { Invoices } from './pages/invoices/Invoices';
import { ProfileForm } from './pages/profileForm/ProfileForm';
import { Calender } from './pages/calender/Calender';
import { Faq } from './pages/faq/Faq';
import { Barchart } from './pages/barchart/Barchart';
import { Piechart } from './pages/piechart/Piechart';
import { Mapchart } from './pages/mapchart/Mapchart';
import { LineChartComp } from './pages/lineChartComp/LineChartComp';
// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Dashboard /> },
      { path: "team", element: <Team /> },
      { path: "contacts", element: <Contacts /> },
      { path: "invoices", element: <Invoices /> },
      { path: "profileForm", element: <ProfileForm /> },
      { path: "calender", element: <Calender /> },
      { path: "faq", element: <Faq /> },
      { path: "barchart", element: <Barchart /> },
      { path: "piechart", element: <Piechart /> },
      { path: "linechart", element: <LineChartComp /> },
      { path: "mapchart", element: <Mapchart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
