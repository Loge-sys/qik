import { HTMLAttributes } from 'react';

interface Image {
  image: string
}

interface Item {
  alcoholic: number;
  availabilityType: string;
  available: boolean;
  description: string;
  id: number;
  images: Image[]; // Dependendo da estrutura de Image, pode ser necessário criar uma interface Image separada
  name: string;
  position: number;
  price: number;
  sku: string;
  visible: number;
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
  }
  
  
  export type { Food, IconImageProps }