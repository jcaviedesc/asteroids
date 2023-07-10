export interface OriginalAsteroidData {
  id: string;
  name: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    close_approach_date: string;
    orbiting_body: string;
  }[];
}

function getFirstElementFromList<T>(list: Array<T>): T {
  return Array.isArray(list) && list.length > 0 ? list[0] : ({} as T);
}

export const parseAsteroidData = (data: OriginalAsteroidData) => {
  return {
    id: data.id,
    name: data.name,
    absoluteMagnitudeH: data.absolute_magnitude_h,
    estimatedDiameterKm:
      data.estimated_diameter?.kilometers?.estimated_diameter_max ?? 0,
    estimatedDiameterM:
      data.estimated_diameter?.meters?.estimated_diameter_max ?? 0,
    estimatedDiameterMi:
      data.estimated_diameter?.miles?.estimated_diameter_max ?? 0,
    estimatedDiameterFi:
      data.estimated_diameter?.feet?.estimated_diameter_max ?? 0,
    isPotentiallyHazardousAsteroid: data.is_potentially_hazardous_asteroid,
    closeApproachDate: getFirstElementFromList(data.close_approach_data)
      ?.close_approach_date,
    orbitingBody: getFirstElementFromList(data.close_approach_data)
      ?.orbiting_body,
  };
};
