import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  name: number;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  // useQuery({
  //   queryKey: ["games", gameQuery],
  //   queryFn: () =>
  //     apiClient.getAll({
  //       params: {
  //         genres: gameQuery.genre?.id,
  //         parent_platforms: gameQuery.platform?.id,
  //         ordering: gameQuery.sortOrder,
  //         search: gameQuery.searchText,
  //       },
  //     }),
  //   staleTime: 1000 * 60 * 60 * 24,
  //   gcTime: 1000 * 60 * 60 * 24 * 7,
  // });
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
    placeholderData: (previousData) => previousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
export default useGames;
