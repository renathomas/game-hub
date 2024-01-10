import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getOne(slug),
    staleTime: ms("30d"),
    gcTime: ms("30d"),
  });

export default useGame;
