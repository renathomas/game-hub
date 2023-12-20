import { useSelector } from "react-redux";
import { GameQuery } from "../App";
import useData from "./useData";
import { RootState } from "../state/store";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  name: number;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const searchText = useSelector((state: RootState) => state.search.searchText);
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: searchText,
      },
    },
    [gameQuery]
  );
};

export default useGames;
