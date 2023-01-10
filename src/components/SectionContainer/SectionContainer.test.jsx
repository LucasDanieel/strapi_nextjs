import { screen } from "@testing-library/react";
import { SectionContainer } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<SectionContainer />", () => {
  test("should render", () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
