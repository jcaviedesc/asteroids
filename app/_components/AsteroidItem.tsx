import { FavouriteButton } from "./AddToFavorite";

export interface AsteroidItemProps {
  id: string;
  name: string;
  absoluteMagnitudeH: number;
  estimatedDiameterKm: number;
  estimatedDiameterM: number;
  estimatedDiameterMi: number;
  estimatedDiameterFi: number;
  isPotentiallyHazardousAsteroid: boolean;
  closeApproachDate: string;
  orbitingBody: string;
  isFavorite: boolean;
}

const AsteroidItem: React.FC<AsteroidItemProps> = ({
  id,
  name,
  absoluteMagnitudeH,
  estimatedDiameterKm,
  estimatedDiameterM,
  estimatedDiameterMi,
  estimatedDiameterFi,
  isPotentiallyHazardousAsteroid,
  closeApproachDate,
  orbitingBody,
  isFavorite,
}) => {
  return (
    <div className="border-b border-gray-300 pr-12 pl-12 pb-6 pt-6 rounded flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <p>ID: {id}</p>
          <p>Magnitud absoluta: {absoluteMagnitudeH}</p>
        </div>
        <div>
          <p>Diámetro estimado</p>
          <p>{estimatedDiameterKm} (kilómetros)</p>
          <p>{estimatedDiameterM} (metros)</p>
          <p>{estimatedDiameterMi} (millas)</p>
          <p>{estimatedDiameterFi} (pies)</p>
        </div>
        <div>
          <p>
            ¿Es potencialmente peligroso?:{" "}
            {isPotentiallyHazardousAsteroid ? "Sí" : "No"}
          </p>
          <p>Fecha de aproximación: {closeApproachDate}</p>
          <p>Cuerpo orbital: {orbitingBody}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <FavouriteButton isFavorite={isFavorite} id={id} />
      </div>
    </div>
  );
};

export default AsteroidItem;
