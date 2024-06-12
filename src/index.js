import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createHashRouter, RouterProvider , createMemoryRouter} from "react-router-dom";
import FilePage from './FilePage';
// const router = createMemoryRouter([
//   {
//     path: "/",
//     element: <App />},
//     {
//       path: "/path0",
//       element: <FilePage />}
//   ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  < App/> 

);


serviceWorker.unregister();
