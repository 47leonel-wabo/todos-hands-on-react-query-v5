import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./thems";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  // GLOBAL LEVEL QUERY CONFIGURATION
  // defaultOptions: {
  //   queries: {
  //     retry: 2,
  //     staleTime: 10 * 1000, // data is no longer fresh after 10s
  //     refetchOnReconnect: true,
  //     refetchOnWindowFocus: true,
  //     refetchOnMount: true
  //   }
  // }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
