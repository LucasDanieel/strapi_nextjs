import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalSyles } from "../styles/global-styles";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalSyles />
    </ThemeProvider>
  );
}
