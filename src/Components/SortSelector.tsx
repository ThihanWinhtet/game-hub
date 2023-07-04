import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrde = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const sortOrder = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentOrder = sortOrder.find((item) => sortOrde == item.value);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrder.map((item) => (
          <MenuItem onClick={() => setSortOrder(item.value)} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
