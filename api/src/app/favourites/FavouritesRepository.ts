import { mockUsers } from "../../mocks/users";

const FavouriteRepository = {
  /**
   * get favourites list of an User filtered by user ID
   * @param id user ID
   */
  getlistByUserId(id: number): number[] | undefined {
    // Logic for accessing the database or storage
    // fake
    return mockUsers.filter((user) => user.id == id)[0]?.favourites;
  },
};

export default FavouriteRepository;
