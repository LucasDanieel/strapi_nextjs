import * as Styled from "./styles";
import { Heading } from "../Heading/index";
import Link from "next/link";

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
}

export const LogoLink = ({ text, srcImg = "", link, newTab = false }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? "_blank" : "_self";

  if (nextLink) {
    return (
      <Heading size="small" uppercase={true}>
        <Link href={link} passHref target={target}>
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
      <Styled.Container href={link} target={target}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};
