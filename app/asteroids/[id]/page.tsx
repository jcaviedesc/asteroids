import nasaService from "../../../services/nasa.service";

type AsteroidDetailPageProps = {
  params: {
    id: number;
  };
};

export default async function AsteroidDetail({
  params: { id },
}: AsteroidDetailPageProps) {
  const { data } = await nasaService.getAsteroidById(id);
  return (
    <div className="p-4 bg-gray-200 rounded">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <div className="flex">
        <div>
          <p className="mb-2">Designation: {data.designation}</p>
          <p className="mb-2">Absolute Magnitude: {data.absoluteMagnitudeH}</p>
          <p className="mb-2">
            Is Potentially Hazardous Asteroid:{" "}
            {data.isPotentiallyHazardousAsteroid ? "Yes" : "No"}
          </p>
        </div>

        <div className="mb-2">
          <h3 className="font-bold">Estimated Diameter</h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Kilometers:{" "}
              {data.estimatedDiameter?.kilometers?.estimatedDiameterMax}
            </li>
            <li>
              Meters: {data.estimatedDiameter?.meters.estimatedDiameterMax}
            </li>
            <li>Miles: {data.estimatedDiameter?.miles.estimatedDiameterMax}</li>
            <li>Feet: {data.estimatedDiameter?.feet.estimatedDiameterMax}</li>
          </ul>
        </div>
      </div>
      <div className="mb-2">
        <h3 className="font-bold">Close Approach Data</h3>
        {data.closeApproachData.map((approach) => (
          <div
            className="flex justify-between"
            key={approach.closeApproachDate}
          >
            <div>
              <p>Date: {approach.closeApproachDate}</p>
            </div>
            <div>
              <p>
                Velocity (km/h): {approach.relativeVelocity.kilometersPerHour}
              </p>
            </div>
            <div>
              <p>Miss Distance (km): {approach.missDistance.kilometers}</p>
              <p>Orbiting Body: {approach.orbitingBody}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-2">
        Is Sentry Object: {data.isSentryObject ? "Yes" : "No"}
      </p>
    </div>
  );
}
