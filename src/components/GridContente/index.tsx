import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import { Heading } from "../Heading";

export type GridContenteProps = {
  title: string,
  html: string,
  background?: boolean,
  sectionId?: string,
  component?: string
};

export const GridContente = ({ title, html, background = false, sectionId = "" }: GridContenteProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
