import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { TrailerObject } from "../entities/TrailerObject";
import ms from "ms";

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<TrailerObject>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("30d"),
    gcTime: ms("30d"),
  });
};
export default useTrailer;
