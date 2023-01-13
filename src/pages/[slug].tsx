import { loadPage } from "../api/load-page";
import Home, { HomeProps } from "../templates/Home";
import { Loading } from "../templates/Loading";

import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Page({ data }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = (await loadPageSlug()).map((page) => {
  //   return {
  //     params: {
  //       slug: page.slug,
  //     },
  //   };
  // });

  return {
    paths: [{ params: { slug: "udemy" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;

  try {
    data = await loadPage(context.params.slug as string);
  } catch (e) {
    data = null;
  }

  if (data == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
