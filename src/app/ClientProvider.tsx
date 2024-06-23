// ClientProvider.tsx
"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/app/store";
import GlobalSpinner from "./components/Base/Spinner/GlobalSpinner";
import { SpinnerProvider } from "./context/SpinnerContext";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SpinnerProvider>
        <GlobalSpinner />
        {children}
      </SpinnerProvider>
    </Provider>
  );
};

export default ClientProvider;
