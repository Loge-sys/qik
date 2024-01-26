import { HTMLAttributes } from 'react';
import { Size } from '../../redux/Basket/interface'

interface Image {
  image: string
}

interface ModifiersItems {
  name: string;
  price: number;
}


interface Modifiers {
  name: string;
  items: ModifiersItems[]
}

interface Item {
  alcoholic: number;
  availabilityType: string;
  available: boolean;
  description: string;
  id: number;
  images: Image[];
  modifiers: Modifiers[];
  name: string;
  position: number;
  price: number;
  sku: string;
  visible: number;
  size?: Size;
  maxChoices?: number | undefined;
}
 
 interface Food {
    id: number;
    description: string | null;
    name: string;
    position: number;
    visible: number;
    images: Image[];
    items: Item[];
  }

  interface IconImageProps extends HTMLAttributes<HTMLImageElement> {
    img?: string;
    color?: string;
    selected?: boolean;
    size?: number;
  }
  

  interface FoodContainerProps extends HTMLAttributes<HTMLImageElement> {
    color?: string;
    selected?: boolean
  }
  
  export type { Food, IconImageProps, FoodContainerProps, Item, Modifiers, ModifiersItems, Image }