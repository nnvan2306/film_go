import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
// import CounterContext from "./context/CounterContext.jsx";
import queryClient from "./libs/query.js";

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        {/* <BrowserRouter> */}
        {/* <CounterContext>
      </CounterContext> */}
        {/* </BrowserRouter> */}
        <App />
    </QueryClientProvider>
);
