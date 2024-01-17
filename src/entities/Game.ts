import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  name: number;
  id: number;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genres: Genre[];
  description_raw: string;

  publishers: Publisher[];
}
