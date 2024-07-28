import useGenres from "./useGenres";
import usePlatforms from "./usePlatforms";

export function useLookupPlatform(id?: number) {
  const { data } = usePlatforms();
  return data?.results.find((platform) => platform.id === id);
}

export function useLookupGenre(id?: number) {
  const { data } = useGenres();
  return data?.results.find((genre) => genre.id === id);
}
