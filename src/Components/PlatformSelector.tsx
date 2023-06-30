import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform, { Platform } from "../hooks/usePlatform"

interface Props{
    selectPlatform : (platform : Platform) => void;
    selectedPlatform : Platform | null
}

const PlatformSelector = ({selectPlatform} : Props) => {
   const {data, error} = usePlatform();
   if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
        <MenuList>
            {data?.results.map((platform)=> 
            <MenuItem onClick={()=>selectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector