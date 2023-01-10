import { screen } from "@testing-library/react";
import { MenuLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<MenuLink />", () => {
  test("should render a link", () => {
    renderTheme(<MenuLink link="http://localhost:6006/">Children</MenuLink>);

    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute("target", "_self");
  });

  test("should render open in a new tab", () => {
    renderTheme(
      <MenuLink link="http://localhost:6006/" newTab={true}>
        Children
      </MenuLink>
    );

    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute("target", "_blank");
  });

  test("should render open in a new tab", () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost:6006/" newTab={false}>
        Children
      </MenuLink>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
