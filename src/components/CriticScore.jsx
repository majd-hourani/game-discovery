import { Badge } from "@chakra-ui/react";

function CriticScore({ score }) {
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorPalette={score < 90 ? "red" : "green"}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
