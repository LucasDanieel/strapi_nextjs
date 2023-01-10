import P from "prop-types";
import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string,
};
