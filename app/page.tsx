import Image from "next/image";
import AsteroidItemClientWrapper from "./_components/AsteroidItem.client";

const asteroids = [
  {
    id: "123",
    name: "Asteroid 1",
    absoluteMagnitudeH: 26.9,
    estimatedDiameterKm: 10,
    estimatedDiameterM: 10000,
    estimatedDiameterMi: 6.2,
    estimatedDiameterFi: 32808.4,
    isPotentiallyHazardousAsteroid: false,
    closeApproachDate: "2022-12-31",
    orbitingBody: "Earth",
    isFavorite: true,
  },
  {
    id: "456",
    name: "Asteroid 2",
    absoluteMagnitudeH: 30.2,
    estimatedDiameterKm: 5,
    estimatedDiameterM: 5000,
    estimatedDiameterMi: 3.1,
    estimatedDiameterFi: 16404.2,
    isPotentiallyHazardousAsteroid: true,
    closeApproachDate: "2022-11-15",
    orbitingBody: "Moon",
    isFavorite: false,
  },
  {
    id: "789",
    name: "Asteroid 3",
    absoluteMagnitudeH: 28.5,
    estimatedDiameterKm: 8,
    estimatedDiameterM: 8000,
    estimatedDiameterMi: 4.9,
    estimatedDiameterFi: 26246.7,
    isPotentiallyHazardousAsteroid: false,
    closeApproachDate: "2022-10-01",
    orbitingBody: "Mars",
    isFavorite: true,
  },
];

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Fancy Asteroids</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-white bg-transparent border border-white rounded hover:bg-white hover:text-gray-800 transition-colors duration-300">
            Favoritos
          </button>
          <img
            src="/path/to/avatar.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>
      <main className="flex flex-col justify-between pt-12">
        {asteroids.map((asteroid) => (
          <AsteroidItemClientWrapper key={asteroid.id} {...asteroid} />
        ))}
      </main>
    </div>
  );
}
