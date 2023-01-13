import { GridContente } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridContente />", () => {
  test("should render grid content", () => {
    const { container } = renderTheme(<GridContente {...mock} background />);

    expect(container).toMatchSnapshot();
  });

  test("should render grid content", () => {
    const { container } = renderTheme(<GridContente {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
