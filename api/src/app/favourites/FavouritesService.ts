import FavouriteRepository from "./FavouritesRepository";

const FavouriteService = {
  listByUserId(id: number) {
    const result = FavouriteRepository.getlistByUserId(id);
    return Array.isArray(result) ? result : [];
  },
};

export default FavouriteService;
