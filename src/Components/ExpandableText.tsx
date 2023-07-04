import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  let [expanded, setExpanded] = useState(false);
  let limit = 300;

  let summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text marginTop={4} marginBottom={4}>
      {" "}
      {summary}{" "}
      <Button
        size={"xs"}
        backgroundColor={"rgb(255, 145, 0)"}
        fontWeight={"bold"}
        onClick={() => setExpanded(!expanded)}
      >
        {" "}
        {expanded ? "See Less" : "See More"}{" "}
      </Button>
    </Text>
  );
};
export default ExpandableText;
