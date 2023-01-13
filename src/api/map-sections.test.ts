import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from "./map-sections";

import pagesFakeData from "./dados.json";

// MAP SECTION
describe("map-section", () => {
  test("should render predefined section if no data", () => {
    const data = mapSections();

    expect(data).toEqual([]);
  });

  test("should render sections whit correct data", () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);

    expect(data[0].component).toBe("section.section-two-columns");
  });

  test("should test section with invalid data", () => {
    const WithNoTextOrImage = mapSections([
      {
        __component: "section.section-grid",
      },
    ]);

    const WithNoComponent = mapSections([{}]);

    expect(WithNoTextOrImage).toEqual([{ __component: "section.section-grid" }]);

    expect(WithNoComponent).toEqual([{}]);
  });

  test("should test section.section-grid without text or image", () => {
    const WithNoTextOrImageGrid = mapSections([
      {
        __component: "section.section-grid",
        text_grid: [{}],
      },
      {
        __component: "section.section-grid",
        image_grid: [{}],
      },
    ]);

    expect(WithNoTextOrImageGrid.length).toBe(2);
  });

  // SECTION TWO COLUMNS
  test("should map section two columns without data", () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.srcImg).toBe("");
    expect(data.text).toBe("");
    expect(data.title).toBe("");
  });

  test("should map section two columns", () => {
    const data = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      title: "JANUARY BRINGS US FIREFOX 85",
      description: "abv",
      image: {
        data: {
          attributes: {
            url: "a.svg",
          },
        },
      },
      metadata: {
        section_id: "home",
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-two-columns");
    expect(data.sectionId).toBe("home");
    expect(data.srcImg).toBe("a.svg");
    expect(data.text).toBe("abv");
    expect(data.title).toBe("JANUARY BRINGS US FIREFOX 85");
  });

  // SECTION CONTENT
  test("should map section content without data", () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.html).toBe("");
    expect(data.title).toBe("");
  });

  test("should map section content with data", () => {
    const data = mapSectionContent({
      __component: "section.section-content",
      title: "NEWS COVERAGE AND SOME SURPRISES",
      content: "Assda",
      metadata: {
        section_id: "intro",
        background: false,
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-content");
    expect(data.sectionId).toBe("intro");
    expect(data.html).toBe("Assda");
    expect(data.title).toBe("NEWS COVERAGE AND SOME SURPRISES");
  });

  // SECTION GRID TEXT
  test("should map grid text without data", () => {
    const data = mapTextGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-grid-text");
    expect(data.sectionId).toBe("");
    expect(data.description).toBe("");
    expect(data.title).toBe("");
  });

  test("should map grid text with data", () => {
    const data = mapTextGrid({
      __component: "section.section-grid",
      title: "MY GRID",
      description: "Uma breve descrição.",
      text_grid: [
        {
          title: "Teste 1",
          description: "Afff",
        },
        {
          title: "Teste 2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n",
        },
        {
          title: "Teste 3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n",
        },
      ],
      image_grid: [],
      metadata: {
        section_id: "grid-one",
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-grid-text");
    expect(data.sectionId).toBe("grid-one");
    expect(data.description).toBe("Uma breve descrição.");
    expect(data.title).toBe("MY GRID");
    expect(data.grid[0].title).toBe("Teste 1");
    expect(data.grid[0].description).toBe("Afff");
  });

  // SECTION GRID IMAGE
  test("should map grid image without data", () => {
    const data = mapImageGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-grid-image");
    expect(data.sectionId).toBe("");
    expect(data.description).toBe("");
    expect(data.title).toBe("");
  });

  test("should map grid image with data", () => {
    const data = mapImageGrid({
      __component: "section.section-grid",
      title: "Gallery",
      description: "Uma breve descrição.",
      text_grid: [],
      image_grid: [
        {
          url: "a.svg",
          alternativeText: "abc",
        },
        {
          url: "",
          alternativeText: "",
        },
        {
          url: "",
          alternativeText: "",
        },
        {
          url: "",
          alternativeText: "",
        },
        {
          url: "",
          alternativeText: "",
        },
        {
          url: "",
          alternativeText: "",
        },
      ],
      metadata: {
        section_id: "gallery",
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-grid-image");
    expect(data.sectionId).toBe("gallery");
    expect(data.description).toBe("Uma breve descrição.");
    expect(data.title).toBe("Gallery");
    expect(data.grid[0].srcImg).toBe("a.svg");
    expect(data.grid[0].altText).toBe("abc");
  });
});
