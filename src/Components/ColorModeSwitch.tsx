import { HStack, Switch, useColorMode} from "@chakra-ui/react"

function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
        <Switch colorScheme="green" isChecked={colorMode == 'dark'} onChange={toggleColorMode}></Switch>
    </HStack>
  )
}

export default ColorModeSwitch