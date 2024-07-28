import { Heading } from "@chakra-ui/react";

import { useLookupGenre, useLookupPlatform } from "../hooks/useLookup";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useLookupGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useLookupPlatform(selectedPlatformId);

  const heading =
    `${platform?.name || ""} ` + `${genre?.name || ""} ` + "Games";
  return (
    <Heading marginY={5} fontSize={"5xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
