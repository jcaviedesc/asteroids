import { FaHeart, FaRegHeart } from "react-icons/fa";

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
  onAddToFavorite?: (id: string) => void;
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
  onAddToFavorite = () => {},
}) => {
  return (
    <div className="border-b border-gray-300 p-6 rounded flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => {
            onAddToFavorite(id);
          }}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
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
    </div>
  );
};

export default AsteroidItem;
