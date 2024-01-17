import { Spinner } from "@chakra-ui/react";
import useGameWithTrailer from "../hooks/useGameWithTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameWithTrailer(gameId);

  isLoading && <Spinner />;

  if (error) throw error;

  const firstTrailer = data?.results[0];

  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      width="100%"
      height="auto"
      controls
      poster={firstTrailer.preview}
    />
  ) : null;
};

export default GameTrailer;
