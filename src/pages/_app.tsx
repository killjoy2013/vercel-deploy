import "../../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrandContextProvider } from "../contexts/BrandContext";
import IAppConfig from "../interfaces/IAppConfig";
import Layout from "../components/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * 1000,
    },
  },
});

// modified version - allows for custom pageProps type, falling back to 'any'
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps<IAppConfig>) {
  const { domain, title, variant } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrandContextProvider domain={domain} title={title} variant={variant}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BrandContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
