import { loadPage, loadPageSlug } from "../api/load-page";
import Home from "../templates/Home";

export default function Page({ data }) {
  return <Home data={data} />;
}

export const getStaticPaths = async () => {
  const paths = (await loadPageSlug()).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let data = null;

  try {
    data = await loadPage(context.params.slug);
  } catch (e) {
    data = null;
  }

  if(data == null){
    return{
      notFound: true
    }
  }

  return {
    props: {
      data,
    },
  };
};
