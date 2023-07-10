import dayjs from "dayjs";
import querystring from "node:querystring";
import { OriginalAsteroidData, parseAsteroidData } from "../libs/parseAsteroid";

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
    const url = `${API_URL}?${buildQueryParams}`;
    const response = await fetch(url);
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
};

export default nasaService;
