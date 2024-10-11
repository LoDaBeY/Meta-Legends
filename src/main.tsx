import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Collection from "./Pages/Collection/Collection";
import About from "./Pages/About/About";
import ErrorNotFound from "./Pages/ErrorNotFound/ErrorNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<ErrorNotFound />} />

      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
