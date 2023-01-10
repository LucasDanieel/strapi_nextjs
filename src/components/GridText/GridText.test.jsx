import { screen } from "@testing-library/react";
import { GridText } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridText />", () => {
  test("should render", () => {
    const { container } = renderTheme(<GridText {...mock} background={true} />);

    expect(container).toMatchSnapshot();
  });

  test("should render", () => {
    const { container } = renderTheme(<GridText {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
