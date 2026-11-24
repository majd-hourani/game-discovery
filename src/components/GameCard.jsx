import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

function GameCard({ game }) {
  console.log(game);
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
