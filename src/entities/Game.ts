import { Platform } from "./Platform";

export interface Game {
  name: number;
  id: number;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
