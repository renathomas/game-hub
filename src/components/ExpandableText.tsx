import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpended] = useState(false);

  const limit = 300;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        marginLeft={1}
        colorScheme="yellow"
        onClick={() => setExpended(!expanded)}
      >
        {" "}
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
