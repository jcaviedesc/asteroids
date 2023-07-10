"use client";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type FavouriteButtonProps = {
  id: number | string;
  isFavourite: boolean;
};
export function FavouriteButton({ id, isFavourite }: FavouriteButtonProps) {
  const [favourite, setFavourite] = useState(isFavourite);
  const onAddToFavorite = (id: FavouriteButtonProps["id"]) => {
    setFavourite((prevFav) => !prevFav);
    // TODO execute dispatch action to add to favourites
    console.log(id);
  };
  return (
    <button
      className="text-red-500 hover:text-red-600"
      onClick={() => {
        onAddToFavorite(id);
      }}
    >
      {favourite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
