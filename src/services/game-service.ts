import create from "./http-service";

export interface Game {
  name: number;
  id: number;
  background_image: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export default create("/games");
