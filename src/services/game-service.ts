import create from "./http-service";

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
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export default create("/games");
