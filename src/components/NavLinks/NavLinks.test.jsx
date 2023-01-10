import { screen } from "@testing-library/react";
import { NavLinks } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

import mock from "./mock";

describe("<NavLinks />", () => {
  test("should render links", () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  test("should not render links", () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  test("should render links", () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getByText(/link 8/i).parentElement).toHaveStyleRule("flex-flow", "column wrap", {
      media: theme.media.lteMedium,
    });
  });

  test("should match snapshot", () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container).toMatchSnapshot();
  });
});
