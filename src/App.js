import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import "./css/custom.css";
import "./css/flex.css";
import "./css/general.css";
import "./css/spacing.css";
import useData from "./hooks/useData";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";

function App() {
  const data = useData();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="app">
          <Header />
          <Home data={data} />
        </div>
      ),
    },
    {
      path: "/:id",
      loader: ({ params }) => {
        return params.id;
      },
      element: (
        <div className="app">
          <Header />
          <DetailPage data={data} />
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
