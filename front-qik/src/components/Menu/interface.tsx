import { HTMLAttributes } from 'react';

interface Image {
  id: number;
  image: string;
}

interface ModifiersItems {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

interface Modifiers {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifiersItems[];
}

interface Item {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: Image[];
  available: boolean;
  modifiers?: Modifiers[];
}

interface Section {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: Image[];
  items: Item[];
}

interface Food {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}

interface IconImageProps extends HTMLAttributes<HTMLImageElement> {
  img?: string;
  color?: string;
  selected?: boolean;
  size?: number;
}

interface FoodContainerProps extends HTMLAttributes<HTMLImageElement> {
  color?: string;
  selected?: boolean;
}

export type { Food, IconImageProps, FoodContainerProps, Item, Modifiers, ModifiersItems, Image, Section };