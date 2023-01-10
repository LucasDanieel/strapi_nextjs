import { screen } from "@testing-library/react";
import { SectionBackground } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<SectionBackground />", () => {
  test("should render with background dark", () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("should render with background white", () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
