import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider } from "react-query";
import PageRoutes from "./pages/PageRoutes";
import queryClient from "./services/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PageRoutes>
        <App />
      </PageRoutes>
    </QueryClientProvider>
  </React.StrictMode>
);
