import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

function GameCard({ game }) {
  console.log(game);
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}

        <PlatformIconList platforms={game.parent_platforms} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
