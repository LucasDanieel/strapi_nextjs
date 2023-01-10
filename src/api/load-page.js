import config from "../config";
import { mapData } from "./map-data";

export const loadPage = async (slug = "") => {
  const cleanSlug = slug ? `?filters[slug]=${slug.replace(/[^a-z0-9-_]/gi, "")}&` : "?";
  const url = `${config.url}/api/pages${cleanSlug}`;

  const raw = await fetch(url + config.complement_url);
  const json = await raw.json();
  const data = mapData([json.data[0].attributes]);

  return data;
};

export const loadPageSlug = async () => {
  const url = `${config.url}/api/pages`;

  const raw = await fetch(url);
  const json = await raw.json();
  const data = Slugs(json.data);

  return data;
};

const Slugs = (pages) => {
  const pageSlugs = pages.map((data) => {
    return {
      slug: data.attributes.slug,
    };
  });
  return pageSlugs;
};
