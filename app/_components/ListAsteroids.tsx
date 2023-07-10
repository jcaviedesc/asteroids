import Link from "next/link";
import nasaService from "../../services/nasa.service";
import AsteroidItem from "./AsteroidItem";

export default async function ListOfAsteroids(params: Record<string, string>) {
  const { data: asteroids, total } = await nasaService.getAsteroids(params);
  return (
    <div>
      <div className="pr-12 pl-12">
        <p className="text-right">Total: {total}</p>
      </div>
      {asteroids.map((asteroid) => (
        <article key={asteroid.id} className="hover:bg-slate-100">
          <Link href="/asteroids/[id]" as={`/asteroids/${asteroid.id}`}>
            <AsteroidItem {...asteroid} isFavorite={false} />
          </Link>
        </article>
      ))}
    </div>
  );
}
