import { Modifiers } from '../../components/Menu/interface'
import { Image } from '../../components/Menu/interface'

interface CommonSizeItem {
    name: string;
    price: number;
  }

  interface Size extends CommonSizeItem {
    availabilityType: string;
    available: boolean;
    description: string;
    id: number;
    name: string;
    position: number;
    price: number;
    visible: number;
    maxChoices: number;
}

interface BasketState {
  basket: Basket[];
}

interface Basket {
    alcoholic: number;
    availabilityType: string;
    available: boolean;
    description: string;
    id: number;
    modifiers: Modifiers[];
    images: Image[];
    name: string;
    position: number;
    price: number;
    sku: string;
    visible: number;
    size?: Size | undefined;
}
export type { Basket, Size, BasketState }