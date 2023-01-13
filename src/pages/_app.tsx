import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalSyles } from "../styles/global-styles";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalSyles />
    </ThemeProvider>
  );
}
