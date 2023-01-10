import { mapMenu, mapMenuLinks } from "./map-menu";

describe("map-menu", () => {
  test("should return a predefined object if no data", () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe("");
    expect(menu.link).toBe("");
    expect(menu.srcImg).toBe("");
    expect(menu.links).toEqual([]);
  });

  test("should map menu to match keys and values required", () => {
    const menu = mapMenu({
      id: 1,
      logo_link: "#home",
      logo_text: "Logo",
      logo: {
        data: {
          attributes: {
            url: "a.svg",
          },
        },
      },
      menu_links: [
        {
          id: 2,
          link_text: "intro",
          url: "#intro",
          open_in_new_tab: false,
        },
        {
          id: 1,
          link_text: "grid-one",
          url: "#grid-one",
          open_in_new_tab: false,
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe("Logo");
    expect(menu.link).toBe("#home");
    expect(menu.srcImg).toBe("a.svg");
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe("intro");
    expect(menu.links[0].link).toBe("#intro");
  });

  test("should map return empty array if no links", () => {
    const links = mapMenuLinks();

    expect(links).toEqual([]);
  });

  test("should map links if links passed", () => {
    const links = mapMenuLinks([
      {
        id: 2,
        link_text: "intro",
        url: "#intro",
        open_in_new_tab: false,
      },
      {},
    ]);

    expect(links[0].newTab).toEqual(false);
    expect(links[0].children).toEqual("intro");
    expect(links[0].link).toEqual("#intro");
  });
});
