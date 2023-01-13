import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export type GridImageElementProps = {
  altText: string,
  srcImg: string,
};

export type GridImageProps = {
  background?: boolean,
  title: string,
  description: string,
  grid: GridImageElementProps[],
  sectionId?: string,
  component?: string
};

export const GridImage = ({ background = false, title, description, grid, sectionId = "" }: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.srcImg}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

