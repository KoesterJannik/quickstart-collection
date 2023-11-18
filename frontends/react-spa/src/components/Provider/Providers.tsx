import React from "react";
import Navbar from "../Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {children}
      </QueryClientProvider>
    </>
  );
}

export default Providers;
