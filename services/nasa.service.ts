import dayjs from "dayjs";
import querystring from "node:querystring";
import camelcaseKeys from "camelcase-keys";
import { OriginalAsteroidData, parseAsteroidData } from "../libs/parseAsteroid";
import { Asteroid } from "../types/Asteroid";

const API_KEY = process.env.NASA_API_KEY;
const API_URL = process.env.NASA_API_URL;

const nasaService = {
  getAsteroids: async (params: Record<string, string>) => {
    const {
      start_date = dayjs().subtract(7, "day").format("YYYY-MM-DD"),
      end_date = dayjs().format("YYYY-MM-DD"),
    } = params;

    const buildQueryParams = querystring.stringify({
      start_date,
      end_date,
      api_key: API_KEY,
    });

    const url = `${API_URL}/feed?${buildQueryParams}`;
    const response = await fetch(url, { cache: "no-store" });
    if (response.ok) {
      const { near_earth_objects, element_count } = await response.json();
      const asteriodsList = Object.values<OriginalAsteroidData>(
        near_earth_objects
      )
        .flat()
        .map((asteroid) => parseAsteroidData(asteroid));

      return {
        data: asteriodsList,
        total: element_count,
      };
    }

    return {
      data: [],
      total: 0,
    };
  },
  getAsteroidById: async (id: number) => {
    const url = `${API_URL}/neo/${id}?api_key=${API_KEY}`;
    const response = await fetch(url);

    if (response.ok) {
      const data = (await response.json()) as Asteroid;
      return {
        data: camelcaseKeys(data, { deep: true }),
      };
    }

    return {
      data: {} as Asteroid,
      error: "not found",
    };
  },
};

export default nasaService;
