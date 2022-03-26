import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { Layout } from "../components/layout";
import { theme } from "../theme";

import { allPosts } from "contentlayer/generated";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
