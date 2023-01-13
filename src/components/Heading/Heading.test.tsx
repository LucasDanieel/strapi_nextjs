import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  test("should render with default values", () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.fonts.sizes.xhuge,
      "text-transform": "none",
    });
  });

  test("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  test("should render correct heading size", () => {
    const { rerender } = renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "Texto" })).toHaveStyle({
      "font-size": theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "Texto" })).toHaveStyle({
      "font-size": theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "Texto" })).toHaveStyle({
      "font-size": theme.fonts.sizes.xhuge,
    });
  });

  test("should render correct font-size when using mobile", () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyleRule("font-size", theme.fonts.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  test("should render with uppercase letters", () => {
    renderTheme(<Heading uppercase={true}>Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  test("should render correct heading element", () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    screen.getByRole("heading", { name: "Texto" });
    const h6 = container.querySelector("h6");

    expect(h6.tagName.toLowerCase()).toBe("h6");
  });
});
