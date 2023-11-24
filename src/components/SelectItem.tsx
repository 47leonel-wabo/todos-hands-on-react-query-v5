import { Select } from "@chakra-ui/react";

interface Props {
  selected: number | undefined;
  data: { userId: number; name: string }[];
  handleSelect: (value: string) => void;
}

const SelectItem = ({ selected, data, handleSelect }: Props) => {
  return (
    <Select
      placeholder="Select filter option"
      marginY={3}
      value={selected && `User ${selected}`}
      onChange={(value) => handleSelect(value.target.value)}
    >
      <option value={""}>All</option>
      {data.map((item, index) => (
        <option key={index} value={item.userId}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectItem;
