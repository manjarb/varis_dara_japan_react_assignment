import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import PublicLayout from "./layouts/public.layout";
import ReviewPage from "./pages/review/review-page";
import StepOnePage from "./pages/step-one/step-one-page";
import StepThreePage from "./pages/step-three/step-three-page";
import StepTwoPage from "./pages/step-two/step-two-page";
import reportWebVitals from "./reportWebVitals";

export enum RouterPath {
  StepTwo = "step-2",
  StepThree = "step-3",
  Review = 'review'
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <StepOnePage />,
      },
      {
        path: RouterPath.StepTwo,
        element: <StepTwoPage />,
      },
      {
        path: RouterPath.StepThree,
        element: <StepThreePage />,
      },
      {
        path: RouterPath.Review,
        element: <ReviewPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
