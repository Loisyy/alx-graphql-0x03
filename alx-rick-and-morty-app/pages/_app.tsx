import "@/styles/globals.css";
import type { AppProps } from "next/app";
import client from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
