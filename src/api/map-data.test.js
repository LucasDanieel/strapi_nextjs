import { mapData } from "./map-data";

describe("map-data", () => {
  test("should map data even if there is no data", () => {
    const pagesData = mapData()[0];

    expect(pagesData.footerHtml).toBe("");
    expect(pagesData.slug).toBe("");
    expect(pagesData.title).toBe("");
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu.links).toEqual([]);
  });

  test("should map data if there are data", () => {
    const pagesData = mapData([
      {
        footer_text: "<p>Hey</p>",
        slug: "slug",
        title: "title",
      },
    ])[0];

    expect(pagesData.footerHtml).toBe("<p>Hey</p>");
    expect(pagesData.slug).toBe("slug");
    expect(pagesData.title).toBe("title");
  });
});
