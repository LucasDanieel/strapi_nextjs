import config from "../config";
import { loadPage, loadPageSlug } from "./load-page";
import * as mapDataModule from "./map-data";

jest.mock("./map-data", () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe("load-pages", () => {
  beforeEach(() => {
    global.fetch = jest.fn();

    mockJson = jest.fn().mockResolvedValue(
      Promise.resolve({
        data: [
          {
            attributes: {
              calledWith: "this",
            },
          },
        ],
      })
    );

    mockFetch = global.fetch;
    mockFetch.mockResolvedValue({
      json: mockJson,
    });

    jest.clearAllMocks();
  });

  test("should call fetch and mapData with correct values", async () => {
    const result = await loadPage();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(config.url + "/api/pages?" + config.complement_url);
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith([{ calledWith: "this" }]);
    expect(result).toEqual({ mapped: 1 });
  });

  test("should call fetch with correct slug", async () => {
    const result = await loadPage("teste");
    expect(mockFetch).toHaveBeenCalledWith(
      config.url + "/api/pages?filters[slug]=teste&" + config.complement_url
    );
  });

  test("should call fetch and get slugs", async () => {
    const result = await loadPageSlug();
  });
});
