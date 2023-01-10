import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<TextComponent />", () => {
  test("should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
