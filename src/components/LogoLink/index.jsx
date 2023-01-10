import * as Styled from "./styles";
import { Heading } from "../Heading/index";
import Link from "next/link";

export const LogoLink = ({ text, srcImg = "", link }) => {
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size="small" uppercase={true}>
        <Link href={link} passHref>
          <Styled.ContainerSpan>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.ContainerSpan>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase={true}>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};
