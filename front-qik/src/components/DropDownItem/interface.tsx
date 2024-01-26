import { Food } from "../Menu/interface";

interface IconArrowUpProps {
    show: string;
}

interface DropDownItemProps {
  foods: Food[]; 
  selectedItemIndex: number
}

interface HeaderProps {
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
}

interface FoodItems {
  name: string;
  // outras propriedades necessárias
}
interface DropDownHeaderProps {
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
  foods: FoodItems;
}


export type { IconArrowUpProps, HeaderProps, DropDownItemProps, FoodItems, DropDownHeaderProps }