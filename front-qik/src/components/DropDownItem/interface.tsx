import { Section } from "../Menu/interface";

interface IconArrowUpProps {
    show: string;
}

interface DropDownItemProps {
  foods: Section[]; 
  selectedItemIndex: number;
}

interface HeaderProps {
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
}

interface FoodItems {
  name: string;
}

interface DropDownHeaderProps {
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
  foods: FoodItems;
}

export type { IconArrowUpProps, HeaderProps, DropDownItemProps, FoodItems, DropDownHeaderProps };