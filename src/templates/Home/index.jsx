import Head from "next/head";

import { GridTwoColumn } from "../../components/GridTwoColumn";
import { GridContente } from "../../components/GridContente";
import { GridImage } from "../../components/GridImage";
import { GridText } from "../../components/GridText";

//import { mockBase } from "../Base/mock";
import { Base } from "../Base";

import config from "../../config/index";

function Home({ data }) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} logoData={{ text, link, srcImg }} footerHtml={footerHtml}>
      <Head>
        <title>{`${title} | ${config.siteName}`}</title>
      </Head>
      {sections.map((section, idx) => {
        const { component } = section;
        const key = `${slug}-${idx}`;
        //console.log(component);

        if (component === "section.section-two-columns") {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === "section.section-content") {
          return <GridContente key={key} {...section} />;
        }

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...section} />;
        }

        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
