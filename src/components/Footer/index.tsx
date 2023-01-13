import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";

export type FooterProps = {
  footerHtml: string;
}
export const Footer = ({ footerHtml } : FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};