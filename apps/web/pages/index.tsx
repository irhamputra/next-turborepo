import Button from "ui/Button";
import Text from "ui/Text";
import Box from "ui/Box";
import { useCallback } from "react";

export default function Web() {
  const handleClick = useCallback(() => {
    console.log("click me");
  }, []);

  return (
    <Box marginLeft="20px" marginRight="20px">
      <h1>Web</h1>
      <Button onClick={handleClick}>Click me</Button>
      <Text as="small" color="red">
        Hello World
      </Text>
    </Box>
  );
}
