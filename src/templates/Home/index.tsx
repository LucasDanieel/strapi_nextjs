import Head from "next/head";

import { GridTwoColumn, GridTwoColumnProps } from "../../components/GridTwoColumn";
import { GridContente, GridContenteProps } from "../../components/GridContente";
import { GridImage, GridImageProps } from "../../components/GridImage";
import { GridText, GridTextProps } from "../../components/GridText";
import { theme } from "../../styles/theme";

import { Base } from "../Base";
import config from "../../config/index";

import { MenuLinkProps } from "../../components/MenuLink";
import { LogoLinkProps } from "../../components/LogoLink";

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps = GridImageProps | GridTextProps | GridTwoColumnProps | GridContenteProps;

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} logoData={{ text, link, srcImg }} footerHtml={footerHtml}>
      <Head>
        <title>{`${title} | ${config.siteName}`}</title>

        <meta name="theme-color" content={theme.colors.primaryColor} />
      </Head>
      {sections.map((section, idx) => {
        const { component } = section;
        const key = `${slug}-${idx}`;
        //console.log(component);

        if (component === "section.section-two-columns") {
          return <GridTwoColumn key={key} {...section as GridTwoColumnProps} />;
        }

        if (component === "section.section-content") {
          return <GridContente key={key} {...section as GridContenteProps} />;
        }

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...section as GridTextProps} />;
        }

        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...section as GridImageProps} />;
        }
      })}
    </Base>
  );
}

export default Home;
