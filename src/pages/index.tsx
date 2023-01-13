import { GetStaticProps } from "next";
import { loadPage } from "../api/load-page";
import Home, { HomeProps } from "../templates/Home";

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;

  try {
    data = await loadPage("landing-page");
  } catch (e) { }

  if (data == null) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data,
    },
  };
};
