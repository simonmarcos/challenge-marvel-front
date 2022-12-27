import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routes";

import "./config/i18next-config";
import setupAxiosInterceptors from "./config/axios-interceptor";
import { bindActionCreators } from "@reduxjs/toolkit";
import { clearAuthentication } from "./store/slices/authenticationSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
