import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameWithScreenshots from "../hooks/useGameWithScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameWithScreenshots(gameId);

  isLoading && <Spinner />;

  if (error) throw error;

  const screenshots = data?.results;

  return screenshots ? (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
      {screenshots?.map((file) => (
        <Image
          key={file.id}
          src={file.image}
          alt={"Game Screenshot"}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
