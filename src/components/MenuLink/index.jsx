import Link from "next/link";
import P from "prop-types";
import * as Styled from "./styles";

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? "_blank" : "_self";
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.ContainerSpan target={target}>
          {children}
        </Styled.ContainerSpan>
      </Link>
    );
  }
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  newTab: P.bool,
};
