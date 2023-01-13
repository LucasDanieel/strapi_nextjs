import { GridImage } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridImage />", () => {
  test("should render", () => {
    const { container } = renderTheme(<GridImage {...mock} background={true} />);

    expect(container).toMatchSnapshot();
  });

  test("should render", () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
