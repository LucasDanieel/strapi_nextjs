import { loadPage } from "../api/load-page";
import Home from "../templates/Home";

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  // const raw = await fetch(config.url + config.defaultSlug + config.complement_url);
  // const json = await raw.json();
  let data = null;

  try {
    data = await loadPage("landing-page");
  } catch (e) {}
  
  if(data == null){
    return{
      notFound: true
    }
  }

  // if (json.data != null) {
  //   const data = mapData([json.data[0].attributes])[0];
  //   return {
  //     props: {
  //       data,
  //     },
  //   };
  // }

  return {
    props: {
      data,
    },
  };
};
