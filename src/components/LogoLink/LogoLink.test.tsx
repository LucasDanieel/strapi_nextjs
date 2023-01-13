import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  test("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);

    expect(screen.getByRole("heading", { name: "Olá mundo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Olá mundo" })).toHaveAttribute("href", "#target");
  });

  test("should render image logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />);

    expect(screen.getByAltText("Olá mundo")).toHaveAttribute("src", "image.jpg");
  });

  test("should match snapshot", () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test("should render nextLink with image", () => {
    renderTheme(<LogoLink link="/test" text="Olá mundo" srcImg="image.jpg" newTab={true} />);

    expect(screen.getByAltText("Olá mundo")).toHaveAttribute("src", "image.jpg");
  });

  test("should render nextLink with text", () => {
    renderTheme(<LogoLink link="/test" text="Olá mundo" />);

    expect(screen.getByRole("heading", { name: "Olá mundo" })).toBeInTheDocument();
  });
});
