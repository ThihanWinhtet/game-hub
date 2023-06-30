import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform, { Platform } from "../hooks/usePlatform"

interface Props{
    selectPlatform : (platform : Platform) => void;
    selectedPlatformId ?: number 
}

const PlatformSelector = ({selectPlatform, selectedPlatformId} : Props) => {
   const {data, error} = usePlatform();
   const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)
   if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data?.results.map((platform)=> 
            <MenuItem onClick={()=>selectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector