import Image from "next/image";
import { DatePickerRange } from "./_components/DatePickerRange";
import ListOfAsteroids from "./_components/ListOfAsteroids";

type HomeProps = {
  searchParams: {
    start_date: string;
    end_date: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
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
        <div className="flex justify-end pr-12 pl-12">
          <div>
            <DatePickerRange />
          </div>
        </div>
        <ListOfAsteroids {...searchParams} />
      </main>
    </div>
  );
}
