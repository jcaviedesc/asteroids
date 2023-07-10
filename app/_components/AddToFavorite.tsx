"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function FavouriteButton({
  id,
  isFavorite,
}: {
  id: number | string;
  isFavorite: boolean;
}) {
  const onAddToFavorite = (id) => {
    console.log(id);
  };
  return (
    <button
      className="text-red-500 hover:text-red-600"
      onClick={() => {
        onAddToFavorite(id);
      }}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
