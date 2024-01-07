import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  // useData<Platform>("/platforms/lists/parents");
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>(`/platforms/lists/parents`)
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24 * 30, //30 days because platforms don't change often
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
