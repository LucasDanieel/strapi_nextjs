import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  test("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);

    expect(screen.getByRole("heading", { nome: "Olá mundo " }));
    expect(screen.getByRole("link", { nome: "Olá mundo " })).toHaveAttribute("href", "#target");
  });

  test("should render image logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />);

    expect(screen.getByAltText("Olá mundo")).toHaveAttribute("src", "image.jpg");
  });

  test("should match snapshot", () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
