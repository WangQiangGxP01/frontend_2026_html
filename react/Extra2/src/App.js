import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "./styles.css";

export default function App() {
  return React.createElement(RouterProvider, { router });
}
