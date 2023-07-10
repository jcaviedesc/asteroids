import Image from "next/image";
import { DatePickerRange } from "./_components/DatePickerRange";
import ListOfAsteroids from "./_components/ListAsteroids";

type HomeProps = {
  searchParams: {
    start_date: string;
    end_date: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  return (
    <div className="flex flex-col justify-between pt-12">
      <div className="flex justify-end pr-12 pl-12">
        <div>
          <DatePickerRange />
        </div>
      </div>
      <ListOfAsteroids {...searchParams} />
    </div>
  );
}
