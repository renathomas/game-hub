import { useQuery } from "@tanstack/react-query";
import { ScreenshotObject } from "../entities/ScreenShotObject";
import APIClient from "../services/api-client";
import ms from "ms";

const useGameWithScreenshots = (gameId: number) => {
  const apiClient = new APIClient<ScreenshotObject>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("30d"),
    gcTime: ms("30d"),
  });
};

export default useGameWithScreenshots;
